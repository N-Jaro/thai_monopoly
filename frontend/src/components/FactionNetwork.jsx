import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Activity, Fingerprint, Layout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { NODES, LINKS, NODE_LABELS, CHAIR_HISTORY } from '../data/factionNetworkData';
import { TRANSLATIONS, PROTOCOL_MAP } from '../data/factionNetworkTranslations';

const FactionNetwork = () => {
    const { language } = useLanguage();
    const lang = language.toUpperCase();
    const T = TRANSLATIONS[lang] || TRANSLATIONS.EN;
    const labels = NODE_LABELS[lang] || NODE_LABELS.EN;

    const svgRef = useRef();
    const containerRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const [hoveredNode, setHoveredNode] = useState(null);
    const [samenessMode, setSamenessMode] = useState(false);

    // Prepare graph data (one-time setup for D3 simulation to preserve coordinates)
    const [graphData] = useState(() => ({
        nodes: NODES.map(n => ({ ...n })),
        links: LINKS.map(l => ({ ...l }))
    }));

    useEffect(() => {
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver((entries) => {
            if (!entries.length) return;
            const { width, height } = entries[0].contentRect;
            setDimensions({ width, height: Math.max(height, 600) });
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        const { width, height } = dimensions;
        const svg = d3.select(svgRef.current)
            .attr("viewBox", [0, 0, width, height])
            .attr("width", width)
            .attr("height", height);

        svg.selectAll("*").remove();

        const mainGroup = svg.append("g").attr("class", "main-group");

        const zoom = d3.zoom()
            .scaleExtent([0.3, 4])
            .on("zoom", (event) => {
                mainGroup.attr("transform", event.transform);
            });

        svg.call(zoom);

        const defs = svg.append("defs");

        // Patterns for node images
        graphData.nodes.forEach(node => {
            defs.append("pattern")
                .attr("id", `pattern-${node.id}`)
                .attr("width", 1)
                .attr("height", 1)
                .attr("patternContentUnits", "objectBoundingBox")
                .append("image")
                .attr("xlink:href", node.img)
                .attr("width", 1)
                .attr("height", 1)
                .attr("preserveAspectRatio", "xMidYMid slice")
                .style("filter", samenessMode ? "grayscale(100%) brightness(0.7) contrast(1.2)" : "grayscale(50%)");
        });

        // Glow filter
        const filter = defs.append("filter").attr("id", "glow").attr("x", "-50%").attr("y", "-50%").attr("width", "200%").attr("height", "200%");
        filter.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "blur");
        filter.append("feComposite").attr("in", "SourceGraphic").attr("in2", "blur").attr("operator", "over");

        // Simulation
        const simulation = d3.forceSimulation(graphData.nodes)
            .force("link", d3.forceLink(graphData.links).id(d => d.id).distance(200))
            .force("charge", d3.forceManyBody().strength(-1500))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collision", d3.forceCollide().radius(d => (d.persistence * 10) + 30));

        // Links
        const link = mainGroup.append("g").attr("class", "links")
            .selectAll("line")
            .data(graphData.links)
            .join("line")
            .attr("class", "network-link")
            .attr("stroke", d => {
                if (samenessMode) return "#555555";
                if (d.protocol === "TECHNOCRAT_MASK") return "#555555";
                if (d.protocol === "CLAN_RECYCLING") return "#ff0000";
                if (d.protocol === "DYNASTIC_SUCCESSION") return "#ffcc00";
                if (d.protocol === "PATRON_ANCHOR") return "#ff0000";
                if (d.protocol === "CHAMELEON_ALLIANCE") return "#ffffff33";
                if (d.isShadow) return "#ffffff11";
                return "#ffffff22";
            })
            .attr("stroke-width", d => {
                if (d.protocol === "CLAN_RECYCLING") return 6;
                if (d.protocol === "DYNASTIC_SUCCESSION") return 4;
                if (d.protocol === "PATRON_ANCHOR") return 5;
                if (d.protocol === "TECHNOCRAT_MASK") return 1;
                return 2;
            })
            .attr("stroke-dasharray", d => {
                if (d.protocol === "CHAMELEON_ALLIANCE") return "8,4";
                if (d.isShadow) return "4,4";
                return "none";
            })
            .style("filter", d => (d.protocol === "CLAN_RECYCLING" || d.protocol === "PATRON_ANCHOR") ? "url(#glow)" : "none")
            .attr("opacity", d => d.isShadow ? 0.3 : 1);

        // Nodes
        const node = mainGroup.append("g").attr("class", "nodes")
            .selectAll("g")
            .data(graphData.nodes)
            .join("g")
            .attr("class", d => `network-node ${d.persistence >= 4 ? (samenessMode ? 'persistence-pulse' : 'persistence-pulse-blue') : ''}`)
            .style("cursor", "pointer")
            .on("mouseenter", (event, d) => setHoveredNode(d))
            .on("mouseleave", () => setHoveredNode(null))
            .call(drag(simulation));

        node.append("circle")
            .attr("r", d => d.persistence * 8 + 10)
            .attr("fill", d => samenessMode ? "#333333" : `url(#pattern-${d.id})`)
            .attr("stroke", d => {
                if (samenessMode) return "#555555";
                if (d.id === "newin") return "#ffcc00";
                return d.color;
            })
            .attr("stroke-width", d => (d.id === "newin" ? 5 : 3))
            .style("filter", d => (d.id === "newin" ? "url(#glow)" : "url(#glow)"));

        node.append("text")
            .text(d => labels.names[d.id] || d.id)
            .attr("y", d => d.persistence * 8 + 25)
            .attr("text-anchor", "middle")
            .attr("fill", samenessMode ? "#666" : "#fff")
            .style("font-size", "10px")
            .style("font-weight", "900")
            .style("text-transform", "uppercase")
            .style("letter-spacing", "0.1em")
            .style("text-shadow", "0 2px 4px rgba(0,0,0,1)");

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node.attr("transform", d => `translate(${d.x},${d.y})`);
        });

        function drag(simulation) {
            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }
            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }
            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }
            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }

        return () => simulation.stop();
    }, [dimensions, samenessMode, labels]); // Added labels to dependency

    // Visual updates for hovering
    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll(".network-link").transition().duration(200)
            .attr("opacity", d => {
                if (!hoveredNode) return d.isShadow ? 0.3 : 1;
                const isConnected = d.source.id === hoveredNode.id || d.target.id === hoveredNode.id;
                return isConnected ? 1 : 0.05;
            })
            .attr("stroke", d => {
                if (!hoveredNode) return d.protocol === "TECHNOCRAT_MASK" ? "#555555" : (d.protocol === "CLAN_RECYCLING" ? "#ff0000" : "#ffffff22");
                const isConnected = d.source.id === hoveredNode.id || d.target.id === hoveredNode.id;
                return isConnected ? (samenessMode ? "#fff" : (d.protocol === "CLAN_RECYCLING" ? "#ff0000" : "#0055ff")) : "#555";
            });

        svg.selectAll(".network-node").transition().duration(200)
            .attr("opacity", d => {
                if (!hoveredNode) return 1;
                const isNeighbor = LINKS.some(l =>
                    (l.source === hoveredNode.id && l.target === d.id) ||
                    (l.target === hoveredNode.id && l.source === d.id)
                );
                return (d.id === hoveredNode.id || isNeighbor) ? 1 : 0.1;
            });
    }, [hoveredNode, samenessMode]);

    return (
        <div ref={containerRef} className="glass rounded-none border-x-0 border-y border-white/10 w-full flex-1 bg-black/40 flex flex-col relative overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40 backdrop-blur-xl z-20">
                <div>
                    <h3 className="text-2xl font-black flex items-center gap-3 shrink-0 tracking-tighter uppercase italic glitch-text" data-text={T.title}>
                        <Activity className="text-whistle-red animate-pulse" size={24} />
                        {T.title}
                    </h3>
                    <div className="text-[10px] opacity-40 uppercase tracking-[0.3em] mt-1 font-mono">
                        {T.subtitle}
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button
                        onClick={() => setSamenessMode(!samenessMode)}
                        className={`flex items-center gap-2 px-4 py-2 border transition-all text-[10px] font-black uppercase tracking-widest ${samenessMode ? 'bg-white text-black border-white' : 'bg-transparent border-white/20 text-white hover:border-white'}`}
                    >
                        <Layout size={14} />
                        {samenessMode ? T.samenessOn : T.samenessOff}
                    </button>
                    <div className="flex flex-col items-end">
                        <div className="text-[9px] font-mono opacity-40 uppercase">{T.persistenceCore}</div>
                        <div className="text-xl font-black text-white">v2.0.26</div>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative bg-black/30">
                <svg ref={svgRef} className="cursor-grab active:cursor-grabbing absolute inset-0"></svg>

                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <AnimatePresence>
                    {hoveredNode && (
                        <motion.div
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            className="absolute top-0 right-0 h-full w-80 glass border-l border-white/10 p-6 flex flex-col z-30 bg-black/80 backdrop-blur-xl"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-whistle-red">{T.subjectAnalysis}</div>
                                <Activity size={16} className="text-whistle-red opacity-50" />
                            </div>

                            <div className="relative mb-8">
                                <div className="aspect-square w-full rounded border-2 border-white/10 overflow-hidden bg-black">
                                    <img
                                        src={hoveredNode.img}
                                        alt={labels.names[hoveredNode.id]}
                                        className={`w-full h-full object-cover grayscale contrast-125 transition-all ${samenessMode ? 'brightness-50' : 'brightness-90'}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                </div>
                                <div className="absolute -bottom-4 left-4 right-4 glass p-3 border-l-4 border-whistle-red">
                                    <h4 className="text-lg font-black uppercase tracking-tighter leading-none">{labels.names[hoveredNode.id]}</h4>
                                    <div className="text-[9px] font-mono opacity-50 uppercase mt-1">{labels.statuses[hoveredNode.statusKey]}</div>
                                </div>
                            </div>

                            <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
                                        <div className="text-[8px] opacity-40 uppercase mb-1">{T.persistence}</div>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className={`w-1.5 h-3 ${i < hoveredNode.persistence ? 'bg-whistle-red' : 'bg-white/10'}`} />
                                            ))}
                                            <span className="ml-auto text-xs font-black italic">S-{hoveredNode.persistence}</span>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
                                        <div className="text-[8px] opacity-40 uppercase mb-1">{T.clanHub}</div>
                                        <div className="text-xs font-black uppercase truncate">{labels.clans[hoveredNode.clanKey]}</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-3 flex items-center gap-2">
                                        <Fingerprint size={12} />
                                        {T.chairTrajectory}
                                    </div>
                                    <div className="space-y-3 relative pl-4 border-l border-white/10">
                                        {(CHAIR_HISTORY[hoveredNode.id]?.[lang] || []).map((step, i) => (
                                            <div key={i} className="relative">
                                                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-whistle-red shadow-[0_0_5px_#f00]" />
                                                <div className="text-[10px] font-black text-whistle-red">{step.year}</div>
                                                <div className="text-sm font-black uppercase tracking-tight">{step.post}</div>
                                                <div className="text-[10px] opacity-40 uppercase">{step.party}</div>
                                            </div>
                                        ))}
                                        {!CHAIR_HISTORY[hoveredNode.id] && (
                                            <div className="text-[10px] opacity-40 italic">{T.historyEncrypted}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-3 flex items-center gap-2">
                                        <Shield size={12} />
                                        {T.activeConnections}
                                    </div>
                                    <div className="space-y-2">
                                        {LINKS.filter(l => l.source === hoveredNode.id || l.target === hoveredNode.id).map((rel, i) => {
                                            const otherId = rel.source === hoveredNode.id ? rel.target : rel.source;
                                            const otherName = labels.names[otherId];
                                            return (
                                                <div key={i} className="flex flex-col p-2 bg-white/[0.02] rounded border border-white/5">
                                                    <div className="text-[11px] font-black uppercase">{otherName}</div>
                                                    <div className="text-[8px] text-whistle-red font-mono uppercase mt-1 opacity-70">{T.protocol}: {PROTOCOL_MAP[rel.protocol][lang]}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="p-4 border-t border-white/5 flex gap-8 items-center bg-black/60 z-20 shrink-0">
                <div className="text-[9px] font-black opacity-40 uppercase tracking-[0.2em]">{T.mapLegend}</div>
                <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-tight">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-[2px] bg-red-600 shadow-[0_0_10px_#f00]" />
                        {T.clanRecycling}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-[2px] border-t-2 border-dashed border-white/40" />
                        {T.chameleonAlliance}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-[1px] bg-gray-600" />
                        {T.technocratMask}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-whistle-red animate-pulse" />
                        {T.highPersistence}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FactionNetwork;
