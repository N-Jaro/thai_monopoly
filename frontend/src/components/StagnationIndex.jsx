import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    AlertTriangle,
    TrendingDown,
    TrendingUp,
    Minus,
    Users,
    Hammer,
    BookOpen,
    Shield,
    HeartPulse,
    Zap,
    Landmark,
    ChevronDown,
    ChevronUp,
    Briefcase
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, DEPARTMENTS, GALLERY } from '../data/failureIndexTranslations';

const ICON_MAP = {
    mot: Hammer,
    moac: TrendingDown,
    moe: BookOpen,
    moi: Users,
    moph: HeartPulse,
    mod: Shield,
    industry: Briefcase
};

const FailureIndex = () => {
    const { language } = useLanguage();
    const lang = language.toUpperCase();
    const T = TRANSLATIONS[lang] || TRANSLATIONS.EN;
    const departments = DEPARTMENTS[lang] || DEPARTMENTS.EN;
    const gallery = GALLERY[lang] || GALLERY.EN;

    const [expandedDept, setExpandedDept] = useState(null);

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen bg-black">
            {/* Header / Hero */}
            <header className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-whistle-red/20 rounded">
                        <AlertTriangle className="text-whistle-red animate-pulse" size={32} />
                    </div>
                    <div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter italic glitch-text" data-text={T.title}>
                            {T.title}
                        </h2>
                        <div className="text-[10px] opacity-40 uppercase tracking-[0.5em] font-mono mt-1">{T.subtitle}</div>
                    </div>
                </div>

                <div className="glass p-8 border-l-4 border-whistle-red relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="text-xs font-black text-whistle-red uppercase tracking-widest mb-4">{T.formulaTitle}</div>
                            <div className="text-3xl font-black italic tracking-tighter leading-none mb-6">
                                Index ∝ <span className="text-white/30">(</span>Personnel Turnover × Transparency<span className="text-white/30">)</span> / Budget Concentration
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed italic">
                                {T.formulaDesc}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/5 rounded">
                                <Zap className="text-whistle-red" size={20} />
                                <div className="text-xs font-black uppercase tracking-widest leading-none">
                                    {T.statusTitle} <span className="text-whistle-red">{T.statusValue}</span>
                                </div>
                            </div>
                            <div className="text-[10px] font-mono opacity-50 uppercase leading-relaxed p-4 bg-black/40 border border-white/5">
                                {T.analogyTitle} {T.analogyDesc}
                            </div>
                        </div>
                    </div>
                    {/* Decorative background number */}
                    <div className="absolute top-0 right-0 text-[180px] font-black opacity-[0.03] leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4 uppercase italic">
                        {T.same}
                    </div>
                </div>
            </header>

            {/* Department Grid */}
            <div className="grid grid-cols-1 gap-6 mb-16">
                {departments.map((dept, idx) => {
                    const Icon = ICON_MAP[dept.id] || Minus;
                    const color = {
                        mot: "#ff0000",
                        moac: "#ff8800",
                        moe: "#0055ff",
                        moi: "#00ff88",
                        moph: "#ff00ff",
                        mod: "#555555",
                        industry: "#f59e0b"
                    }[dept.id] || "#fff";

                    return (
                        <motion.div
                            key={dept.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`glass border-l-4 transition-all duration-500 overflow-hidden ${expandedDept === dept.id ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'}`}
                            style={{ borderColor: color }}
                        >
                            <div
                                className="p-6 cursor-pointer flex items-center justify-between"
                                onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
                            >
                                <div className="flex items-center gap-6">
                                    <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                                        <Icon size={24} style={{ color }} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] opacity-40 uppercase font-black tracking-widest mb-1">{T.investigationSite} #{idx + 1}</div>
                                        <h3 className="text-2xl font-black uppercase tracking-tighter">{dept.name}</h3>
                                        <div className="text-xs opacity-60 italic mt-1 font-serif">{dept.alias}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8">
                                    <div className="hidden md:flex gap-4">
                                        {dept.indicators.slice(0, 2).map((ind, i) => (
                                            <div key={i} className="flex flex-col items-end">
                                                <div className="text-[8px] opacity-30 uppercase font-black">{ind.label}</div>
                                                <div className={`text-[10px] font-black uppercase tracking-tighter ${ind.value === 'POSITIVE' ? 'text-green-500' : 'text-whistle-red'}`}>
                                                    {ind.status}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {expandedDept === dept.id ? <ChevronUp size={24} className="opacity-30" /> : <ChevronDown size={24} className="opacity-30" />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedDept === dept.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="border-t border-white/5"
                                    >
                                        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                                            {/* Status Indicators */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {dept.indicators.map((ind, i) => (
                                                    <div key={i} className="bg-black/40 border border-white/5 p-4 rounded group relative overflow-hidden">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <span className="text-[9px] font-black uppercase opacity-40 tracking-widest">{ind.label}</span>
                                                            <div className={`text-[10px] font-black px-1.5 py-0.5 rounded ${ind.value === 'POSITIVE' ? 'bg-green-600/20 text-green-500 border border-green-500/30' : 'bg-whistle-red/20 text-whistle-red border border-whistle-red/30'}`}>
                                                                {ind.status}
                                                            </div>
                                                        </div>
                                                        <p className="text-[11px] leading-relaxed opacity-80">{ind.desc}</p>

                                                        {/* Pulse icon for staying personnel */}
                                                        {ind.status === T.indicators.staying && <Users size={12} className="absolute bottom-2 right-2 opacity-20 animate-pulse text-green-500" />}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Verdict Section */}
                                            <div className="flex flex-col">
                                                <div className="text-[10px] font-black text-whistle-red uppercase tracking-widest mb-4 flex items-center gap-2">
                                                    <AlertTriangle size={14} /> {T.verdictTitle}
                                                </div>
                                                <p className="text-xl font-black uppercase italic tracking-tighter leading-tight mb-8">
                                                    "{dept.verdict}"
                                                </p>

                                                <div className="mt-auto p-4 bg-whistle-red/5 border-l-2 border-whistle-red flex items-start gap-4">
                                                    <div className="text-[40px] font-black text-whistle-red leading-none opacity-20 select-none">!</div>
                                                    <div className="text-[10px] leading-relaxed opacity-60 uppercase font-mono">
                                                        {T.conclusionLabel} {T.conclusionDesc}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {/* Gallery of Sameness */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic">{T.galleryTitle}</h2>
                    <div className="flex-1 h-[1px] bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {gallery.map((item, i) => (
                        <div key={i} className="glass p-6 group hover:translate-y-[-4px] transition-all">
                            <div className="w-12 h-12 bg-whistle-red/20 flex items-center justify-center rounded mb-4 group-hover:bg-whistle-red transition-colors">
                                <Users className="text-whistle-red group-hover:text-black transition-colors" size={24} />
                            </div>
                            <h4 className="text-lg font-black uppercase mb-1">{item.name}</h4>
                            <div className="text-[10px] font-black text-whistle-red uppercase tracking-widest mb-4">{item.role}</div>
                            <p className="text-xs leading-relaxed opacity-60">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final Analogy */}
            <footer className="mb-24">
                <div className="p-12 glass border border-white/10 relative overflow-hidden text-center max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <Landmark size={48} className="opacity-20 translate-y-2 animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-black uppercase italic mb-8 italic">{T.institutionalParadox}</h3>
                    <p className="text-lg font-serif italic leading-relaxed opacity-80 mb-8 px-12">
                        {T.finalAnalogy}
                    </p>
                    <div className="text-xs font-black uppercase tracking-[0.4em] text-whistle-red">{T.loopContinues}</div>

                    <div className="absolute left-0 w-full h-[2px] bg-whistle-red/20 animate-scanline pointer-events-none opacity-40" />
                </div>
            </footer>
        </div>
    );
};

export default FailureIndex;
