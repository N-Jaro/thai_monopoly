import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Vote,
    ArrowRight,
    ChevronRight,
    Info,
    Target,
    Users,
    ShieldCheck,
    Zap,
    GraduationCap,
    Sprout,
    Scale,
    Briefcase,
    LayoutGrid,
    Search,
    X,
    RotateCcw
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { VOTE_LOOP_TRANSLATIONS as T } from '../data/voteTranslations';
import { PARTY_POLICIES, FOCUS_AREAS, ARCHETYPES, SMALLER_PARTIES } from '../data/election2026Data';

const VoteLoop = () => {
    const { language } = useLanguage();
    const [selectedParties, setSelectedParties] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeAreaId, setActiveAreaId] = useState('economy');
    const [showComparison, setShowComparison] = useState(false);

    const toggleComparison = (partyId) => {
        setSelectedParties(prev =>
            prev.includes(partyId)
                ? prev.filter(id => id !== partyId)
                : (prev.length < 3 ? [...prev, partyId] : prev)
        );
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Confirmed': return 'text-[#00ff00]';
            case 'Legacy': return 'text-neutral-500';
            case 'Under Review': return 'text-whistle-orange';
            default: return 'text-neutral-500';
        }
    };

    const getAreaIcon = (areaId) => {
        switch (areaId) {
            case 'economy': return <Briefcase size={16} />;
            case 'welfare': return <Zap size={16} />;
            case 'politics': return <Target size={16} />;
            case 'agriculture': return <Sprout size={16} />;
            case 'social_equality': return <Scale size={16} />;
            case 'energy_env': return <Zap size={16} />;
            case 'governance': return <ShieldCheck size={16} />;
            case 'education': return <GraduationCap size={16} />;
            default: return <Info size={16} />;
        }
    };

    const filteredMajor = PARTY_POLICIES.filter(p =>
        p.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.leader[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        Object.values(p.policies).some(pol => pol[language].toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const filteredSmaller = SMALLER_PARTIES.filter(p =>
        p.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.special_focus[language].toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedParties = [...filteredMajor].sort((a, b) => {
        const aSelected = selectedParties.includes(a.id);
        const bSelected = selectedParties.includes(b.id);
        if (aSelected && !bSelected) return -1;
        if (!aSelected && bSelected) return 1;
        return 0;
    });

    const activeArea = FOCUS_AREAS.find(a => a.id === activeAreaId) || FOCUS_AREAS[0];

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-whistle-orange selection:text-black">
            {/* Header Section */}
            <header className="pt-24 pb-8 px-8 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-1.5 bg-whistle-orange rounded shadow-[0_0_15px_rgba(255,136,0,0.3)]">
                                    <Vote className="text-black" size={20} strokeWidth={2.5} />
                                </div>
                                <h1 className="text-3xl font-black uppercase tracking-tighter italic leading-none">
                                    {T[language].title}
                                </h1>
                            </div>
                            <div className="text-whistle-orange text-[10px] font-black uppercase tracking-[0.3em] mb-1 drop-shadow-glow">
                                {T[language].subtitle}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-whistle-orange transition-colors" size={14} />
                                <input
                                    type="text"
                                    placeholder="SEARCH INTEL..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-white/5 border border-white/10 py-2.5 pl-10 pr-6 text-[11px] font-black uppercase tracking-widest focus:outline-none focus:border-whistle-orange/50 transition-all w-48 lg:w-64 italic"
                                />
                            </div>
                            <div className="h-10 px-4 bg-white/5 border border-white/10 flex items-center gap-3">
                                <div className="text-right">
                                    <div className="text-[10px] text-whistle-orange font-black italic">FEB 08, 2026</div>
                                </div>
                                <div className="w-px h-4 bg-white/10" />
                                <Users size={14} className="text-neutral-500" />
                            </div>
                        </div>
                    </div>

                    {/* Battle Mode Floating Action */}
                    <AnimatePresence>
                        {selectedParties.length >= 2 && !showComparison && (
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60]"
                            >
                                <button
                                    onClick={() => setShowComparison(true)}
                                    className="bg-whistle-orange text-black px-8 py-4 font-black uppercase italic tracking-tighter flex items-center gap-4 shadow-[0_0_50px_rgba(255,136,0,0.6)] group hover:scale-105 transition-all border-2 border-black"
                                >
                                    <Zap size={20} className="fill-black animate-pulse" />
                                    {T[language].compareButton} ({selectedParties.length})
                                    <div className="w-8 h-px bg-black group-hover:w-16 transition-all" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Secondary Nav: Focus Areas */}
                    <div className="flex overflow-x-auto pb-2 gap-2 custom-scrollbar mask-fade-right">
                        {FOCUS_AREAS.map(area => (
                            <button
                                key={area.id}
                                onClick={() => setActiveAreaId(area.id)}
                                className={`flex items-center gap-2 px-5 py-3 whitespace-nowrap transition-all border shrink-0 ${activeAreaId === area.id
                                    ? 'bg-whistle-orange text-black border-whistle-orange font-black italic shadow-[0_0_20px_rgba(255,136,0,0.2)]'
                                    : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white uppercase font-bold text-[10px] tracking-widest'
                                    }`}
                            >
                                {getAreaIcon(area.id)}
                                <span>{area[language]}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-8 py-12">
                {/* Platform Feed Section */}
                <section className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-white/5 pb-6">
                        <div>
                            <h2 className="text-2xl font-black uppercase tracking-tighter italic flex items-center gap-3 mb-2">
                                <LayoutGrid className="text-whistle-orange" size={24} />
                                {T[language].policyMatrix.replace('Matrix', 'Explorer')}
                            </h2>
                            <p className="text-[11px] text-neutral-500 font-bold uppercase tracking-widest">
                                SCANNING PLATFORMS FOR: <span className="text-whistle-orange">{activeArea[language]}</span>
                            </p>
                        </div>
                        <div className="flex gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-600">
                            {selectedParties.length > 0 && <span>PINNED PARTIES AT TOP • </span>}
                            <span>{sortedParties.length} RELEVANT FORCES FOUND</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedParties.map(party => (
                            <motion.div
                                layout
                                key={party.id}
                                onClick={() => toggleComparison(party.id)}
                                className={`group relative p-6 border transition-all cursor-pointer ${selectedParties.includes(party.id)
                                    ? 'bg-whistle-orange/[0.03] border-whistle-orange/50 shadow-[0_0_30px_rgba(255,136,0,0.05)]'
                                    : 'bg-white/5 border-white/10 hover:border-white/30'
                                    }`}
                            >
                                {/* Selection Badge */}
                                {selectedParties.includes(party.id) && (
                                    <div className="absolute -top-3 left-6 px-3 py-1 bg-whistle-orange text-black text-[9px] font-black italic skew-x-[-15deg] shadow-lg z-10">
                                        PINNED INTEL
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center p-2">
                                                <img src={party.logoUrl} className="w-full h-full object-contain filter brightness-110" alt="" />
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-whistle-orange text-black rounded-full flex items-center justify-center text-[10px] font-black italic border border-neutral-900 shadow-md">
                                                {party.ballotNumber}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-lg font-black uppercase tracking-tighter italic leading-none mb-1" style={{ color: party.color }}>
                                                {party.name[language]}
                                            </div>
                                            <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest truncate max-w-[150px]">
                                                {party.leader[language]}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`p-1.5 border ${selectedParties.includes(party.id) ? 'border-whistle-orange' : 'border-neutral-800 opacity-30'} transition-all`}>
                                        <Target size={14} className={selectedParties.includes(party.id) ? 'text-whistle-orange' : 'text-neutral-400'} />
                                    </div>
                                </div>

                                <div className="min-h-[120px] mb-6">
                                    <div className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em] mb-3 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-4 h-px bg-neutral-800" />
                                            Platform Stance
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-1.5 h-1.5 rounded-full ${i < Math.round(party.scores[activeAreaId] / 2) ? '' : 'bg-white/5'}`}
                                                    style={{ backgroundColor: i < Math.round(party.scores[activeAreaId] / 2) ? party.color : undefined }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-base text-neutral-200 font-medium leading-[1.6] uppercase tracking-tight">
                                        {party.policies[activeAreaId][language]}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                                    <div className={`text-[9px] font-black uppercase tracking-[0.2em] italic ${getStatusColor(party.policies[activeAreaId].status)} shadow-glow-small`}>
                                        /// {party.policies[activeAreaId].status.toUpperCase()}
                                    </div>
                                    <a
                                        href={party.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-[8px] text-neutral-700 font-black uppercase tracking-widest italic hover:text-whistle-orange transition-colors truncate max-w-[120px]"
                                        title={party.website}
                                    >
                                        Ref: {decodeURIComponent(party.website.replace('https://', '').replace('www.', '')).toUpperCase()}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {sortedParties.length === 0 && (
                        <div className="py-20 text-center border border-dashed border-white/10 bg-white/[0.02]">
                            <Search size={48} className="mx-auto text-neutral-800 mb-4 opacity-20" />
                            <div className="text-xl font-black italic text-neutral-700 uppercase tracking-tighter">No intelligence matching query</div>
                        </div>
                    )}
                </section>

                {/* Archetypes Section */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-2xl font-black uppercase tracking-tighter italic mb-4 leading-none">
                            {T[language].archetypesTitle}
                        </h2>
                        <p className="text-sm text-neutral-500 uppercase font-medium leading-relaxed">
                            {T[language].archetypesDesc}
                        </p>

                        <div className="mt-8 p-6 bg-whistle-orange/5 border border-whistle-orange/20 rounded-lg">
                            <div className="flex items-start gap-4">
                                <Search className="text-whistle-orange mt-1" size={20} />
                                <div>
                                    <div className="text-xs font-black uppercase text-whistle-orange mb-2 tracking-widest">Intel Insight</div>
                                    <p className="text-xs text-neutral-400 uppercase leading-relaxed font-bold">
                                        "Most niche parties act as specialized pressure groups. Vote for the archetype that matches your primary concern if major parties fail your integrity test."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {ARCHETYPES.map(archetype => (
                            <motion.div
                                key={archetype.id}
                                whileHover={{ y: -5 }}
                                className="group p-6 bg-white/5 border border-white/10 hover:border-whistle-orange/30 transition-all cursor-default"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="px-2 py-1 bg-whistle-orange/10 border border-whistle-orange/20 text-[9px] font-black uppercase text-whistle-orange tracking-widest">
                                        {T[language].archetypeLabel}
                                    </div>
                                    <Users size={16} className="text-neutral-700 group-hover:text-whistle-orange transition-colors" />
                                </div>
                                <h4 className="text-lg font-black uppercase tracking-tighter italic mb-2">
                                    {archetype[language]}
                                </h4>
                                <p className="text-xs text-neutral-400 font-medium mb-4 uppercase leading-relaxed">
                                    {archetype.description[language]}
                                </p>

                                {/* Common Policies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {archetype.common_policies[language].map((policy, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-white/5 border border-white/5 text-[8px] font-black uppercase text-neutral-500 tracking-wider">
                                            {policy}
                                        </span>
                                    ))}
                                </div>

                                {/* Representative Parties */}
                                <div className="pt-4 border-t border-white/5">
                                    <div className="text-[10px] font-black uppercase text-neutral-600 mb-3 tracking-widest">
                                        {T[language].exampleParties}
                                    </div>
                                    <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                        <div className="space-y-4">
                                            {filteredSmaller.filter(p => p.archetype === archetype.id).map(party => (
                                                <div key={party.id} className="group/party">
                                                    <div className="text-xs font-black text-neutral-300 group-hover:text-white transition-colors">
                                                        {party.name[language]}
                                                    </div>
                                                    <div className="text-[9px] text-neutral-600 font-bold uppercase tracking-tight mt-1 leading-tight group-hover:text-neutral-500 transition-colors">
                                                        {party.special_focus[language]}
                                                    </div>
                                                </div>
                                            ))}
                                            {filteredSmaller.filter(p => p.archetype === archetype.id).length === 0 && (
                                                <div className="text-[10px] text-neutral-700 italic uppercase">No matching intel</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer find loop breakdown */}
            <footer className="mt-20 py-12 px-8 border-t border-white/5 bg-black/60">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center border border-whistle-orange/30 text-whistle-orange">
                            <ArrowRight size={24} />
                        </div>
                        <div>
                            <div className="text-sm font-black uppercase tracking-tighter italic">BREAK THE LOOP</div>
                            <div className="text-[10px] text-neutral-500 uppercase font-black tracking-widest">2026 GENERAL ELECTION INTELLIGENCE</div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        {['Confirmed', 'Legacy', 'Under Review'].map(status => (
                            <div key={status} className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white hover:border-white/20 transition-all cursor-default">
                                {status}
                            </div>
                        ))}
                    </div>
                </div>
            </footer>

            {/* Battleground Overlay */}
            <AnimatePresence>
                {showComparison && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col overflow-hidden"
                    >
                        <div className="p-8 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter italic text-whistle-orange">
                                    {T[language].comparisonTitle}
                                </h3>
                                <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.2em]">
                                    {T[language].comparisonSubtitle}
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => {
                                        setSelectedParties([]);
                                        setShowComparison(false);
                                    }}
                                    className="px-4 py-4 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest italic flex items-center gap-2 hover:bg-red-500 hover:text-black transition-all"
                                >
                                    <RotateCcw size={14} />
                                    {T[language].clearSelection}
                                </button>
                                <button
                                    onClick={() => setShowComparison(false)}
                                    className="p-4 bg-white/5 border border-white/10 hover:border-white/30 text-[10px] font-black uppercase tracking-widest italic flex items-center gap-3 transition-all"
                                >
                                    {T[language].closeBattle}
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Inline Focus Area Selector */}
                        <div className="px-8 py-4 bg-black/20 border-b border-white/5 overflow-x-auto custom-scrollbar flex gap-2">
                            {FOCUS_AREAS.map(area => (
                                <button
                                    key={area.id}
                                    onClick={() => setActiveAreaId(area.id)}
                                    className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap transition-all border shrink-0 ${activeAreaId === area.id
                                        ? 'bg-whistle-orange text-black border-whistle-orange font-black italic'
                                        : 'bg-white/5 text-neutral-500 border-white/10 hover:border-white/30 hover:text-white uppercase font-bold text-[9px] tracking-widest'
                                        }`}
                                >
                                    {getAreaIcon(area.id)}
                                    <span>{area[language]}</span>
                                </button>
                            ))}
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                            <div className="max-w-7xl mx-auto space-y-12">
                                {/* Clash Overview Section */}
                                <section className="p-8 bg-gradient-to-r from-red-500/10 via-neutral-900 to-blue-500/10 border border-white/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-whistle-orange rounded-sm shadow-[0_0_15px_rgba(255,136,0,0.4)]">
                                                <Zap className="text-black fill-black" size={18} />
                                            </div>
                                            <h4 className="text-xl font-black uppercase tracking-tighter italic">
                                                {T[language].clashPolicies}
                                            </h4>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            <div className="space-y-4">
                                                <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">{T[language].convergenceIndex}</div>
                                                <div className="flex items-end gap-2">
                                                    <div className="text-3xl font-black italic text-whistle-orange">
                                                        {Math.round(100 - (Math.max(...selectedParties.map(pid => PARTY_POLICIES.find(p => p.id === pid).scores[activeAreaId])) - Math.min(...selectedParties.map(pid => PARTY_POLICIES.find(p => p.id === pid).scores[activeAreaId]))) * 10)}%
                                                    </div>
                                                    <div className="text-[10px] text-neutral-600 font-bold mb-1 uppercase">{T[language].intelSync}</div>
                                                </div>
                                                <p className="text-[10px] text-neutral-400 uppercase leading-relaxed font-bold">
                                                    {language === 'EN'
                                                        ? `Higher percentage indicates similar performance scores in ${activeArea[language]}.`
                                                        : `เปอร์เซ็นต์ที่สูงขึ้นบ่งบอกถึงคะแนนประสิทธิภาพที่ใกล้เคียงกันใน ${activeArea[language]}`}
                                                </p>
                                            </div>

                                            <div className="col-span-2 space-y-4">
                                                <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">{T[language].vectorAnalysis}</div>
                                                <div className="flex flex-wrap gap-4">
                                                    {(() => {
                                                        const scores = selectedParties.map(pid => PARTY_POLICIES.find(p => p.id === pid).scores[activeAreaId]);
                                                        const max = Math.max(...scores);
                                                        const min = Math.min(...scores);
                                                        const diff = max - min;

                                                        const policyTexts = selectedParties.map(pid => PARTY_POLICIES.find(p => p.id === pid).policies[activeAreaId].EN.toLowerCase());
                                                        const holdsKeyword = (kw) => policyTexts.some(t => t.includes(kw));

                                                        let stance = "";
                                                        if (language === 'EN') {
                                                            if (holdsKeyword("reform") || holdsKeyword("overhaul") || holdsKeyword("abolish")) stance = "Structural Reform vs. Current State";
                                                            else if (holdsKeyword("digital") || holdsKeyword("tech") || holdsKeyword("ai")) stance = "Technological Modernization Paths";
                                                            else if (holdsKeyword("subsidy") || holdsKeyword("guarantee")) stance = "Fiscal Distribution Models";
                                                            else stance = "Implementation Methodology";
                                                        } else {
                                                            if (holdsKeyword("reform") || holdsKeyword("overhaul") || holdsKeyword("abolish")) stance = "การปฏิรูปโครงสร้าง vs. สถานะปัจจุบัน";
                                                            else if (holdsKeyword("digital") || holdsKeyword("tech") || holdsKeyword("ai")) stance = "เส้นทางการเปลี่ยนผ่านสู่ยุคดิจิทัล";
                                                            else if (holdsKeyword("subsidy") || holdsKeyword("guarantee")) stance = "รูปแบบการจัดสรรงบประมาณ";
                                                            else stance = "วิธีการนำนโยบายไปปฏิบัติ";
                                                        }

                                                        if (diff > 4) return (
                                                            <div className="px-4 py-2 border border-red-500/50 bg-red-500/10 text-red-500 text-[11px] font-black italic uppercase">
                                                                {T[language].polarizationHigh}
                                                            </div>
                                                        );
                                                        if (diff < 2) return (
                                                            <div className="px-4 py-2 border border-green-500/50 bg-green-500/10 text-green-500 text-[11px] font-black italic uppercase">
                                                                {T[language].polarizationLow}
                                                            </div>
                                                        );
                                                        return (
                                                            <div className="px-4 py-2 border border-blue-500/50 bg-blue-500/10 text-blue-500 text-[11px] font-black italic uppercase">
                                                                {T[language].polarizationMid}
                                                            </div>
                                                        );
                                                    })()}
                                                </div>
                                                <div className="text-[11px] text-white/70 uppercase leading-relaxed font-medium bg-white/5 p-4 italic">
                                                    {language === 'EN'
                                                        ? `"This battleground highlights the tension between ${activeArea[language]} efficiency and ideological purity."`
                                                        : `"สมรภูมินี้เน้นย้ำถึงความตึงเครียดระหว่างประสิทธิภาพใน ${activeArea[language]} และความบริสุทธิ์ทางอุดมการณ์"`
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {selectedParties.length === 0 ? (
                                    <div className="py-20 text-center border border-dashed border-white/10">
                                        <div className="text-xl font-black italic text-neutral-700 uppercase">{T[language].battlegroundDepleted}</div>
                                        <button onClick={() => setShowComparison(false)} className="mt-4 text-whistle-orange text-[10px] font-black uppercase tracking-widest">{T[language].returnToExplorer}</button>
                                    </div>
                                ) : (
                                    <div className={`grid grid-cols-1 md:grid-cols-${selectedParties.length} gap-8`}>
                                        {selectedParties.map(pid => {
                                            const party = PARTY_POLICIES.find(p => p.id === pid);
                                            return (
                                                <div key={pid} className="space-y-8 relative group">
                                                    {/* Remove Party Button */}
                                                    <button
                                                        onClick={() => {
                                                            const newSelection = selectedParties.filter(id => id !== pid);
                                                            setSelectedParties(newSelection);
                                                            if (newSelection.length === 0) setShowComparison(false);
                                                        }}
                                                        className="absolute -top-4 -right-4 w-10 h-10 bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center text-neutral-500 hover:text-red-500 hover:border-red-500 transition-all z-10"
                                                    >
                                                        <X size={16} />
                                                    </button>

                                                    {/* Party Info */}
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-16 h-16 rounded-full border-2 border-white/10 overflow-hidden bg-white/5 p-2">
                                                            <img src={party.logoUrl} className="w-full h-full object-contain" alt="" />
                                                        </div>
                                                        <div>
                                                            <div className="text-2xl font-black uppercase tracking-tighter italic leading-none mb-1" style={{ color: party.color }}>
                                                                {party.name[language]}
                                                            </div>
                                                            <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest">
                                                                {party.leader[language]}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Score Visualization */}
                                                    <div className="p-6 bg-white/5 border border-white/10 space-y-4">
                                                        <div className="text-[10px] font-black uppercase text-whistle-orange tracking-widest mb-4 flex items-center gap-2">
                                                            <Target size={12} />
                                                            {T[language].performanceScore}
                                                        </div>
                                                        <div className="space-y-3">
                                                            {FOCUS_AREAS.map(area => (
                                                                <div key={area.id} className="space-y-1">
                                                                    <div className="flex justify-between text-[8px] font-black uppercase tracking-tight text-neutral-400">
                                                                        <span>{area[language]}</span>
                                                                        <span className="text-white">{party.scores[area.id]}/10</span>
                                                                    </div>
                                                                    <div className="h-1 bg-white/5 w-full relative">
                                                                        <motion.div
                                                                            initial={{ width: 0 }}
                                                                            animate={{ width: `${party.scores[area.id] * 10}%` }}
                                                                            className="absolute inset-y-0 left-0"
                                                                            style={{ backgroundColor: party.color }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Focused Policy Stance */}
                                                    <div className="p-8 border-l-2" style={{ borderLeftColor: party.color }}>
                                                        <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-4">
                                                        /// {activeArea[language]} POLICY
                                                        </div>
                                                        <p className="text-xl font-black text-white leading-tight uppercase italic mb-6">
                                                            "{party.policies[activeAreaId][language]}"
                                                        </p>
                                                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                                                            <div className={`text-[10px] font-black uppercase tracking-widest ${getStatusColor(party.policies[activeAreaId].status)}`}>
                                                                STATUS: {party.policies[activeAreaId].status}
                                                            </div>
                                                            <a
                                                                href={party.website}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-[9px] text-neutral-600 hover:text-whistle-orange font-black uppercase tracking-widest italic transition-colors truncate max-w-[180px]"
                                                                title={party.website}
                                                            >
                                                                {decodeURIComponent(party.website.replace('https://', '').replace('www.', '')).toUpperCase()}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VoteLoop;
