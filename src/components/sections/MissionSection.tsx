'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Zap, Shield, Layers, Brain, ChevronRight, ChevronLeft, CheckCircle2, ArrowUpRight } from 'lucide-react';

const features = [
    {
        id: 1,
        num: '01',
        word: 'SPEED',
        title: 'LIGHTNING FAST TPS',
        stat: '∞',
        label: 'TPS',
        sublabel: 'Native sharding + DAG-based parallel processing',
        desc: "ArthaChain's dual-VM architecture (EVM + WASM), paired with our AI-optimized consensus, delivers extreme throughput with sub-second finality. Built for real-world, high-volume applications demanding instant confirmation.",
        ctaDesc: 'Experience the next generation of blockchain speed.',
        icon: Zap,
        color: '#7c3aed',
        bg: '#7c3aed20',
        highlights: ['Sub-Second Finality', 'AI Optimization', 'Real-Time Processing'],
    },
    {
        id: 2,
        num: '02',
        word: 'SECURE',
        title: 'QUANTUM-RESISTANT',
        stat: 'POST-QUANTUM',
        label: '256-bit',
        sublabel: 'Military-grade protection',
        desc: 'Protected with NIST-approved, Level-5 post-quantum cryptography. ArthaChain employs lattice-based signatures and zero-knowledge layers to secure the network against both classical and future quantum attacks.',
        ctaDesc: 'Future-proof security for global scale.',
        icon: Shield,
        color: '#8c52ff',
        bg: '#8c52ff15',
        highlights: ['NIST Level 5 PQ-Security', '256-bit Quantum-Resistant', 'Dilithium-5 / ML-DSA-87', 'Zero-Knowledge Privacy'],
    },
    {
        id: 3,
        num: '03',
        word: 'SCALE',
        title: 'INFINITE SCALABILITY',
        stat: '∞',
        label: 'Users',
        sublabel: 'Throughput • Expansion',
        desc: "ArthaChain's dynamic auto-sharding expands horizontally as demand increases. From thousands to billions of users, the network maintains consistent performance with true linear scaling.",
        ctaDesc: 'Scale your applications without limits.',
        icon: Layers,
        color: '#ff4080',
        bg: '#ff408015',
        highlights: ['Auto-Sharding', 'Linear Scaling', 'Global Reach'],
    },
    {
        id: 4,
        num: '04',
        word: 'SMART',
        title: 'AI-POWERED ENGINE',
        stat: '24/7',
        label: 'Neural Engine',
        sublabel: 'Active',
        desc: "ArthaChain's neural engine continuously monitors network conditions, predicts congestion, and auto-optimizes consensus performance. The chain becomes smarter, faster, and more efficient with every block.",
        ctaDesc: 'Experience intelligent blockchain performance.',
        icon: Brain,
        color: '#ffc502',
        bg: '#ffc50215',
        highlights: ['ML Optimization', 'Predictive AI', 'Auto-Tuning'],
    },
];


export default function MissionSection() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setDirection(1);
            setActive((p) => (p + 1) % features.length);
        }, 5000);
    };

    useEffect(() => {
        startTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, []);

    const go = (idx: number) => {
        setDirection(idx > active ? 1 : -1);
        setActive(idx);
        startTimer();
    };

    const next = () => {
        setDirection(1);
        setActive((p) => (p + 1) % features.length);
        startTimer();
    };

    const prev = () => {
        setDirection(-1);
        setActive((p) => (p - 1 + features.length) % features.length);
        startTimer();
    };

    const f = features[active];
    const Icon = f.icon;

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
    };

    return (
        <section className="relative w-full bg-black overflow-hidden">
            {/* Hero-like Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

            {/* Subtle Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#7c3aed]/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#8c52ff]/6 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">

                {/* Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-5">
                        <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                            Core Technology Stack
                        </span>
                    </div>
                    <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-black text-white leading-[1]">
                        Why <span className="text-[#8c52ff]">ArthaChain</span>?
                    </h2>
                </motion.div>

                {/* Feature Tabs */}
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10 sm:mb-12">
                    {features.map((item, i) => {
                        const isActive = i === active;
                        const ItemIcon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => go(i)}
                                className="relative group"
                            >
                                <div
                                    className="flex items-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-300"
                                    style={{
                                        backgroundColor: isActive ? item.bg : 'transparent',
                                    }}
                                >
                                    <ItemIcon
                                        size={16}
                                        style={{ color: isActive ? item.color : 'rgba(255,255,255,0.2)' }}
                                    />
                                    <span
                                        className="text-[12px] sm:text-[13px] font-black tracking-wider transition-colors hidden sm:inline"
                                        style={{ color: isActive ? item.color : 'rgba(255,255,255,0.2)' }}
                                    >
                                        {item.num}
                                    </span>
                                </div>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeFeatureTab"
                                        className="absolute bottom-0 left-0 right-0 h-[3px]"
                                        style={{ backgroundColor: f.color }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Main Content */}
                <div className="relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={f.id}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                                {/* Left - Word & Description */}
                                <div className="lg:col-span-5 text-center lg:text-left">
                                    <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
                                        <div
                                            className="w-11 h-11 flex items-center justify-center"
                                            style={{ backgroundColor: f.color }}
                                        >
                                            <Icon size={22} className="text-white" />
                                        </div>
                                        <div>
                                            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] block">
                                                FEATURE {f.num}
                                            </span>
                                            <span
                                                className="text-[11px] font-bold tracking-wider uppercase"
                                                style={{ color: f.color }}
                                            >
                                                {f.title}
                                            </span>
                                        </div>
                                    </div>

                                    <h3
                                        className="text-[52px] sm:text-[68px] md:text-[84px] lg:text-[96px] font-black leading-[0.85] tracking-[-0.04em] mb-5 text-white"
                                    >
                                        {f.word}
                                    </h3>

                                    <p className="text-white/40 text-sm sm:text-[15px] leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
                                        {f.desc}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                        {f.highlights.map((h, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider"
                                                style={{ backgroundColor: f.bg, color: f.color }}
                                            >
                                                <CheckCircle2 size={12} />
                                                {h}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Center - Stat Card */}
                                <div className="lg:col-span-4">
                                    <div
                                        className="relative p-6 sm:p-8 border"
                                        style={{ borderColor: f.color, backgroundColor: f.bg }}
                                    >
                                        {/* Corner Accents */}
                                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: f.color }} />
                                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: f.color }} />
                                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: f.color }} />
                                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: f.color }} />

                                        <div className="text-center mb-4">
                                            <div
                                                className="text-[48px] sm:text-[64px] font-black leading-none mb-2"
                                                style={{ color: f.color }}
                                            >
                                                {f.stat}
                                            </div>
                                            <div className="text-white/60 text-[12px] font-bold tracking-[0.15em] uppercase">
                                                {f.label}
                                            </div>
                                        </div>

                                        {/* Sublabel */}
                                        <div className="pt-4 border-t border-white/10 text-center">
                                            <div className="text-white/40 text-[11px] font-medium">
                                                {f.sublabel}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right - CTA */}
                                <div className="lg:col-span-3">
                                    <div className="p-5 border border-white/10 bg-white/[0.02]">
                                        <h4 className="text-white font-bold text-base uppercase tracking-tight mb-2">
                                            {f.title}
                                        </h4>
                                        <p className="text-white/40 text-xs leading-relaxed mb-4">
                                            {f.ctaDesc}
                                        </p>

                                        <Link
                                            href="/technology"
                                            className="flex items-center justify-between p-3 transition-colors group"
                                            style={{ backgroundColor: f.color }}
                                        >
                                            <span className="text-white text-[11px] font-bold tracking-wider uppercase">
                                                Explore Tech
                                            </span>
                                            <ArrowUpRight size={16} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </Link>

                                        <Link
                                            href="/features"
                                            className="flex items-center justify-between p-3 mt-2 border border-white/20 hover:border-white/40 transition-colors group"
                                        >
                                            <span className="text-white/60 text-[11px] font-bold tracking-wider uppercase group-hover:text-white transition-colors">
                                                All Features
                                            </span>
                                            <ChevronRight size={14} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-10 sm:mt-12">
                    <button
                        onClick={prev}
                        className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                    >
                        <ChevronLeft size={18} className="text-white/40" />
                    </button>

                    <div className="flex items-center gap-2">
                        {features.map((item, i) => (
                            <button
                                key={item.id}
                                onClick={() => go(i)}
                                className="relative h-1.5 transition-all duration-300 overflow-hidden rounded-full"
                                style={{
                                    width: i === active ? 36 : 14,
                                    backgroundColor: i === active ? 'transparent' : 'rgba(255,255,255,0.15)',
                                }}
                            >
                                {i === active && (
                                    <>
                                        <div className="absolute inset-0 opacity-30 rounded-full" style={{ backgroundColor: f.color }} />
                                        <motion.div
                                            className="absolute inset-y-0 left-0 rounded-full"
                                            style={{ backgroundColor: f.color }}
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 5, ease: 'linear' }}
                                        />
                                    </>
                                )}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                    >
                        <ChevronRight size={18} className="text-white/40" />
                    </button>
                </div>
            </div>
        </section>
    );
}
