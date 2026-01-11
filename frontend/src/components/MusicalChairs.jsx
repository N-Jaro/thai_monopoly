import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Play, Pause, RefreshCw, Info, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allMinistries as MINISTRY_LABELS, TRANSLATIONS } from '../data/musicalChairsTranslations';
import { TIMELINE_DATA } from '../data/timelineData';
import { IMAGES } from '../data/images';

const MusicalChairs = () => {
    const { language } = useLanguage();
    const T = TRANSLATIONS[language.toUpperCase()] || TRANSLATIONS.EN;
    const currentMinistries = MINISTRY_LABELS[language.toUpperCase()] || MINISTRY_LABELS.EN;
    const EN_MINISTRIES = MINISTRY_LABELS.EN; // Used as keys to match data
    const TIMELINE = TIMELINE_DATA[language.toUpperCase()] || TIMELINE_DATA.EN;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showLegend, setShowLegend] = useState(false);
    const [selectedMinister, setSelectedMinister] = useState(null);

    const currentEvent = TIMELINE[currentIndex];
    const cabinet = currentEvent.cabinet;

    const getServiceHistory = (ministerId) => {
        const historyGroups = [];
        TIMELINE.forEach(event => {
            const matches = event.cabinet.filter(m => m.id === ministerId);
            if (matches.length > 0) {
                historyGroups.push({
                    id: event.id,
                    date: event.date,
                    label: event.label,
                    ministries: matches.map(m => m.ministry),
                    party: matches[0].party,
                    clan: matches[0].clan,
                    isMulti: matches.length > 1
                });
            }
        });
        return historyGroups;
    };

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % TIMELINE.length);
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, TIMELINE.length]);

    return (
        <div className="w-full p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
                <div className="flex items-center gap-4">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter glitch-text flex items-center gap-4" data-text={T.title}>
                            {T.title}
                            <button
                                onClick={() => setShowLegend(true)}
                                className="p-1.5 rounded-full border border-white/10 text-white/40 hover:text-whistle-red hover:border-whistle-red transition-all"
                                title={T.keyTitle}
                            >
                                <Info size={18} />
                            </button>
                        </h2>
                        <p className="text-xs opacity-40 uppercase tracking-widest mt-2 flex items-center gap-2">
                            <RefreshCw size={12} className={isPlaying ? "animate-spin" : ""} />
                            {currentEvent.label} — {T.subtitle}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`flex items-center gap-2 px-6 py-2 border-2 transition-all font-black uppercase tracking-tighter ${isPlaying ? "bg-whistle-red border-whistle-red text-whistle-black" : "bg-transparent border-white/20 text-white hover:border-whistle-red"
                            }`}
                    >
                        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                        {isPlaying ? T.pause : T.play}
                    </button>
                    <div className="text-7xl font-black text-whistle-red leading-none tabular-nums">{currentEvent.year}</div>
                </div>
            </div>

            {/* Intelligence Insight Box */}
            <motion.div
                key={currentEvent.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 glass border-l-4 border-whistle-red bg-whistle-red/5 relative overflow-hidden"
            >
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-whistle-red/20 rounded shrink-0">
                        <Info size={24} className="text-whistle-red" />
                    </div>
                    <div>
                        <div className="text-[10px] font-black text-whistle-red uppercase tracking-widest mb-1">{T.insightTitle}</div>
                        <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{currentEvent.description}</h3>
                        {currentEvent.insight && (
                            <p className="text-sm text-white/70 italic leading-relaxed max-w-3xl">
                                {currentEvent.insight}
                            </p>
                        )}
                    </div>
                </div>
                <div className="absolute top-0 right-0 p-2 opacity-[0.03] pointer-events-none">
                    <RefreshCw size={120} className="animate-spin-slow" />
                </div>
            </motion.div>

            <div className="relative mb-16">
                <input
                    type="range"
                    min="0"
                    max={TIMELINE.length - 1}
                    step="1"
                    value={currentIndex}
                    onChange={(e) => {
                        setIsPlaying(false);
                        setCurrentIndex(parseInt(e.target.value));
                    }}
                    className="w-full h-8 bg-white/10 rounded-lg appearance-none cursor-pointer accent-whistle-red"
                />
                <div className="flex justify-between mt-2 px-2">
                    {TIMELINE.map((event, idx) => (
                        <div
                            key={event.id}
                            className={`text-[8px] font-black uppercase tracking-tighter transition-all ${idx === currentIndex ? "text-whistle-red scale-110" : "opacity-30"
                                }`}
                        >
                            {event.date}
                        </div>
                    ))}
                </div>

                {/* Static Legend Bar */}
                <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/5 opacity-60">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-whistle-red shadow-[0_0_5px_rgba(255,0,0,0.5)]" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-white/80">{T.recycledSurvivor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 border border-whistle-red relative overflow-hidden">
                            <div className="absolute inset-0 bg-whistle-red/20" />
                            <div className="absolute -left-1 top-0.5 -rotate-45 bg-whistle-red w-full h-[1px]" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-white/80">{T.stayedSame}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 border border-blue-400" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-white/80">{T.dualPortfolio}</span>
                    </div>
                    <div className="ml-auto text-[9px] font-mono opacity-40 uppercase tracking-widest">
                        {T.protocol}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {EN_MINISTRIES.map((ministryKey, index) => {
                    const label = currentMinistries[index];
                    const minister = cabinet.find(m => m.ministry === label);

                    return (
                        <div
                            key={ministryKey}
                            className={`relative group aspect-[3/4] ${minister ? "cursor-pointer" : "cursor-default"}`}
                            onClick={() => minister && setSelectedMinister(minister)}
                        >
                            {/* The "Chair" (The Slot) */}
                            <div className="absolute inset-0 border border-white/10 bg-white/[0.02] flex flex-col justify-end p-2 pointer-events-none">
                                <div className="text-[10px] font-black uppercase opacity-20 truncate">{label}</div>
                            </div>

                            {/* The "Person" (The Card that moves) */}
                            <AnimatePresence mode="popLayout">
                                {minister && (
                                    <motion.div
                                        key={`${minister.id}-${ministryKey}`}
                                        layoutId={`minister-${minister.id}-${ministryKey}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }}
                                        className="absolute inset-0 glass p-3 flex flex-col justify-between border-l-2 overflow-hidden"
                                        style={{ borderLeftColor: minister.color }}
                                    >
                                        <div className="relative aspect-square mb-2 bg-black overflow-hidden border border-white/5">
                                            {/* Portrait Image with Dossier Filter */}
                                            <img
                                                src={minister.img}
                                                alt={minister.name}
                                                referrerPolicy="no-referrer"
                                                className={`w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all group-hover:opacity-100 group-hover:scale-110 ${minister.recycled ? "opacity-100" : "opacity-80"}`}
                                                onError={(e) => {
                                                    e.target.src = IMAGES.PLACEHOLDER;
                                                }}
                                            />
                                            <div className={`absolute inset-0 mix-blend-overlay ${minister.recycled ? "bg-whistle-red/30 animate-pulse" : "bg-black/20"}`} />

                                            {/* Dossier Badge */}
                                            <div className="absolute top-1 right-1 flex flex-col items-end gap-1 font-sans">
                                                <div className="text-[8px] font-black bg-white/20 text-white px-1 py-0.5 rounded uppercase tracking-tighter backdrop-blur-sm border border-white/10">
                                                    {minister.party}
                                                </div>
                                                {minister.recycled && (
                                                    <motion.div
                                                        initial={{ x: 10, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        className="text-[7px] font-black bg-whistle-red text-whistle-black px-1 py-0.5 rounded uppercase tracking-tighter shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                                                    >
                                                        {T.recycledSurvivor}
                                                    </motion.div>
                                                )}
                                                {/* Dual Role Indicator */}
                                                {cabinet.filter(m => m.id === minister.id).length > 1 && (
                                                    <div className="text-[7px] font-black bg-blue-600 text-white px-1 py-0.5 rounded uppercase tracking-tighter border border-blue-400/50">
                                                        {T.dualPortfolio}
                                                    </div>
                                                )}
                                            </div>

                                            {/* CCTV Style Overlay */}
                                            <div className="absolute top-1 left-1 text-[8px] font-mono opacity-50 z-10">{T.cam}-0{minister.id % 9}</div>
                                            <div className="absolute bottom-1 right-1 text-[8px] font-mono opacity-50 tabular-nums z-10">{currentEvent.date}</div>

                                            {/* Red Tape Effect for Recycled */}
                                            {minister.recycled && (
                                                <div className="absolute -left-8 top-4 -rotate-45 bg-whistle-red/80 text-[6px] font-black text-white px-8 py-0.5 pointer-events-none uppercase tracking-[0.2em] shadow-lg">
                                                    {T.stayed}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <div className="text-xs font-black leading-tight line-clamp-2 uppercase tracking-tight mb-2">
                                                {minister.name}
                                            </div>

                                            <div className="space-y-1">
                                                <div className="flex items-center gap-1">
                                                    <Briefcase size={10} className="text-whistle-red shrink-0" />
                                                    <span className="text-[9px] font-bold truncate underline decoration-whistle-red/30 uppercase">
                                                        {label}
                                                    </span>
                                                </div>
                                                <div className="pt-1 border-t border-white/5 flex justify-between items-center">
                                                    <div>
                                                        <div className="text-[7px] opacity-40 uppercase">{T.faction}</div>
                                                        <div className="text-[8px] font-black text-whistle-red truncate uppercase tracking-tighter">
                                                            {minister.clan}
                                                        </div>
                                                    </div>
                                                    <div className="text-[7px] font-mono opacity-30">#REC-{minister.id}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Scanline overlay */}
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 animate-scanline pointer-events-none" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>

            {/* Politician Dossier Popup */}
            <AnimatePresence>
                {selectedMinister && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-2xl"
                        onClick={() => setSelectedMinister(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, x: 20 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            exit={{ scale: 0.95, opacity: 0, x: 20 }}
                            className="relative max-w-5xl w-full glass border-l-8 overflow-hidden flex flex-col md:flex-row h-full max-h-[80vh]"
                            style={{ borderLeftColor: selectedMinister.color }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Left: Identity Section */}
                            <div className="w-full md:w-1/3 p-8 border-r border-white/10 flex flex-col bg-black/40 overflow-hidden relative">
                                <div className="absolute -top-6 -left-4 text-[40px] font-black opacity-[0.03] whitespace-nowrap pointer-events-none select-none">
                                    {selectedMinister.name}
                                </div>

                                <div className="relative aspect-square mb-6 border-4 border-white/5 overflow-hidden group">
                                    <img
                                        src={selectedMinister.img}
                                        alt={selectedMinister.name}
                                        className="w-full h-full object-cover grayscale contrast-125 brightness-75 scale-110 group-hover:scale-100 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                    <div className="absolute top-4 left-4 text-[10px] font-mono opacity-50 uppercase tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm border border-white/10">ID: #P-{selectedMinister.id}</div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="text-[10px] font-black bg-whistle-red text-whistle-black px-2 py-0.5 rounded uppercase mb-1 inline-block tracking-tighter shadow-lg shadow-whistle-red/20">
                                            {selectedMinister.party}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 relative z-10">
                                    <div>
                                        <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1 glitch-text" data-text={selectedMinister.name}>
                                            {selectedMinister.name}
                                        </h3>
                                        <div className="text-whistle-red font-mono text-xs uppercase tracking-[0.3em] opacity-80">{T.profile}</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                                        <div>
                                            <div className="text-[9px] opacity-40 uppercase font-bold tracking-widest mb-1">{T.faction}</div>
                                            <div className="text-xs font-black uppercase text-white/90">{selectedMinister.clan}</div>
                                        </div>
                                        <div>
                                            <div className="text-[9px] opacity-40 uppercase font-bold tracking-widest mb-1">{T.status}</div>
                                            <div className="text-xs font-black uppercase text-whistle-red animate-pulse">{T.activeAgent}</div>
                                        </div>
                                    </div>

                                    <div className="text-[10px] leading-relaxed opacity-60 font-serif italic border-l-2 border-whistle-red/30 pl-4 py-1">
                                        "{T.assetNote.replace('network', selectedMinister.clan + ' network')}"
                                    </div>

                                    {/* Multi-Portfolio Badge in Identity Section */}
                                    {getServiceHistory(selectedMinister.id).some(e => e.isMulti) && (
                                        <div className="bg-blue-600/10 border border-blue-500/30 p-3 rounded mt-4">
                                            <div className="text-[8px] font-black text-blue-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                                                <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping" />
                                                {T.multiSpec}
                                            </div>
                                            <p className="text-[9px] text-blue-100/60 leading-tight">
                                                {T.multiSpecNote}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={() => setSelectedMinister(null)}
                                    className="mt-auto py-3 border border-white/10 hover:bg-whistle-red hover:text-whistle-black transition-all text-xs font-black uppercase tracking-widest bg-white/[0.02]"
                                >
                                    {T.eject}
                                </button>
                            </div>

                            {/* Right: Service Record Timeline */}
                            <div className="w-full md:w-2/3 p-8 flex flex-col overflow-hidden bg-whistle-black/20">
                                <div className="mb-8 flex justify-between items-end">
                                    <div>
                                        <h4 className="text-xl font-black uppercase tracking-tighter">{T.serviceRecord}</h4>
                                        <p className="text-[10px] opacity-40 uppercase tracking-[0.2em]">{T.analysis}</p>
                                    </div>
                                    <div className="text-[10px] font-mono opacity-20">{T.securityClearance}</div>
                                </div>

                                <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-4">
                                    {getServiceHistory(selectedMinister.id).length > 0 ? (
                                        getServiceHistory(selectedMinister.id).map((entry, idx) => (
                                            <div
                                                key={`${entry.date}-${idx}`}
                                                className={`group relative pl-6 border-l-2 transition-all py-3 ${entry.isMulti ? "border-blue-500/50 bg-blue-500/[0.03]" : "border-white/10 hover:border-whistle-red"}`}
                                            >
                                                <div className={`absolute top-4 -left-[7px] w-3 h-3 rounded-full bg-whistle-black border-2 transition-all ${entry.isMulti ? "border-blue-500 bg-blue-500 shadow-[0_0_10px_rgba(0,0,255,0.5)]" : "border-white/20 group-hover:border-whistle-red group-hover:bg-whistle-red"}`} />

                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${entry.isMulti ? "bg-blue-600 text-white" : "text-whistle-red opacity-80"}`}>{entry.date}</span>
                                                            {entry.isMulti && (
                                                                <span className="text-[8px] font-black bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded uppercase tracking-widest">
                                                                    {T.dualPortfolio}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="space-y-2">
                                                            {entry.ministries.map((min, mIdx) => {
                                                                const minIndex = EN_MINISTRIES.indexOf(min);
                                                                const minLabel = minIndex !== -1 ? currentMinistries[minIndex] : min;
                                                                return (
                                                                    <div key={mIdx} className="flex items-center gap-3">
                                                                        <div className={`w-1.5 h-1.5 rounded-full ${entry.isMulti ? "bg-blue-500" : "bg-whistle-red opacity-30"}`} />
                                                                        <h5 className={`text-sm font-black uppercase tracking-tight ${entry.isMulti ? "text-blue-100" : "text-white"}`}>{minLabel}</h5>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="text-right shrink-0">
                                                        <div className="text-[9px] font-bold opacity-30 uppercase tracking-tighter mb-1">{entry.label}</div>
                                                        <div className="text-[11px] font-black opacity-60 uppercase">{entry.party}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-20 opacity-20 uppercase tracking-widest font-black italic">{T.historyEncrypted}</div>
                                    )}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-8">
                                    <div className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded">
                                        <div className="text-2xl font-black text-whistle-red leading-none">
                                            {getServiceHistory(selectedMinister.id).reduce((acc, curr) => acc + curr.ministries.length, 0)}
                                        </div>
                                        <div className="text-[8px] opacity-40 uppercase mt-1">{T.totalPosts}</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded">
                                        <div className="text-2xl font-black text-white leading-none">
                                            {new Set(getServiceHistory(selectedMinister.id).flatMap(e => e.ministries)).size}
                                        </div>
                                        <div className="text-[8px] opacity-40 uppercase mt-1">{T.uniqueMin}</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded">
                                        <div className="text-2xl font-black text-white leading-none">
                                            {new Set(getServiceHistory(selectedMinister.id).map(e => e.party)).size}
                                        </div>
                                        <div className="text-[8px] opacity-40 uppercase mt-1">{T.affiliations}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Dossier Elements */}
                            <div className="absolute top-0 right-12 w-[1px] h-full bg-white/5" />
                            <div className="absolute top-12 left-0 w-full h-[1px] bg-white/5" />
                            <div className="absolute top-4 right-4 text-[40px] font-black opacity-[0.03] rotate-12 select-none pointer-events-none tracking-tighter">{T.confidential}</div>

                            {/* Scanline overlay */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 animate-scanline pointer-events-none opacity-20" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Legend Overlay */}
            <AnimatePresence>
                {showLegend && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-2xl w-full glass p-8 border-t-4 border-whistle-red"
                        >
                            <button
                                onClick={() => setShowLegend(false)}
                                className="absolute top-4 right-4 p-2 text-white/40 hover:text-whistle-red transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-8">
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{T.keyTitle}</h3>
                                <p className="text-sm opacity-50 uppercase tracking-widest">{T.keySubtitle}</p>
                            </div>

                            <div className="space-y-6">
                                {/* Recycled Survivor */}
                                <div className="flex gap-6 items-start p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                                    <div className="w-12 h-12 bg-whistle-red flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                                        <div className="text-[10px] font-black text-whistle-black rotate-[-45deg] scale-75 uppercase">{T.stayed}</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-black bg-whistle-red text-whistle-black px-1.5 py-0.5 rounded uppercase">{T.recycledSurvivor}</span>
                                        </div>
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            {language === 'TH' ? 'บุคคลระดับสูงที่สามารถรักษากระแสอำนาจในการเปลี่ยนผ่านขั้วรัฐบาลได้ (เช่น จาก คสช. มาเป็น พปชร.) หรือรอดจากการล้างบางคณะรัฐมนตรีครั้งใหญ่' : 'High-ranking individuals who successfully bridged different government regimes (e.g., NCPO junta to PPRP coalition) or survived major cabinet purges.'}
                                        </p>
                                    </div>
                                </div>

                                {/* Stayed Indicator */}
                                <div className="flex gap-6 items-start p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                                    <div className="w-12 h-12 border border-whistle-red/50 relative overflow-hidden shrink-0">
                                        <div className="absolute inset-0 bg-whistle-red/20 animate-pulse" />
                                        <div className="absolute -left-4 top-2 -rotate-45 bg-whistle-red text-[4px] font-black text-white px-6 py-0.5">{T.stayed}</div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black uppercase mb-1 text-whistle-red">{language === 'TH' ? 'สัญญาณ "คนเดิม"' : '"STAYED" Tape'}</h4>
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            {language === 'TH' ? 'บ่งชี้ว่ารัฐมนตรีท่านนั้นยังคงดำรงตำแหน่งในกระทรวงเดิม แม้จะมีการปรับคณะรัฐมนตรี ซึ่งเป็นสัญญาณของความมั่นคงทางการเมืองอย่างยิ่งหรือมีอำนาจต่อรองภายในกลุ่มการเมืองที่แตะต้องไม่ได้' : 'Indicates a minister who maintained their exact same portfolio through a mid-term cabinet reshuffle. A sign of extreme political stability or untouchable factional power.'}
                                        </p>
                                    </div>
                                </div>

                                {/* Dual Portfolio */}
                                <div className="flex gap-6 items-start p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                                    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center shrink-0 border border-blue-400">
                                        <div className="text-[8px] font-black text-white text-center leading-tight">{language === 'TH' ? 'ควบ\nตำแหน่ง' : 'DUAL\nROLE'}</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-black bg-blue-600 text-white px-1.5 py-0.5 rounded uppercase">{T.dualPortfolio}</span>
                                        </div>
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            {language === 'TH' ? 'นักการเมืองที่ดำรงตำแหน่งรัฐมนตรีตั้งแต่สองตำแหน่งขึ้นไปพร้อมกัน (เช่น เป็นทั้งนายกรัฐมนตรีและรัฐมนตรีว่าการกระทรงกลาโหม) สิ่งนี้บ่งบอกถึงความสามารถเฉพาะทางหรือการรวมศูนย์อำนาจบริหาร' : 'Politicians holding two or more cabinet seats simultaneously (e.g., serving as both Prime Minister and Defence Minister). This highlights technical expertise or extreme concentration of executive control.'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowLegend(false)}
                                className="w-full mt-10 py-3 bg-white/5 hover:bg-whistle-red hover:text-whistle-black transition-all font-black uppercase tracking-tighter border border-white/10"
                            >
                                {T.return}
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MusicalChairs;
