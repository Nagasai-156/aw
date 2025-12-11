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
        stat: '1M+',
        label: 'Transactions/Sec',
        desc: 'AI-optimized consensus achieving unprecedented transaction throughput with sub-second finality. Built for real-world applications demanding instant confirmation.',
        icon: Zap,
        color: '#450693',
        bg: '#45069312',
        highlights: ['Sub-second finality', 'AI optimization', 'Real-time processing'],
    },
    {
        id: 2,
        num: '02',
        word: 'SECURE',
        title: 'QUANTUM RESISTANT',
        stat: '256-BIT',
        label: 'Post-Quantum',
        desc: 'Lattice-based cryptography protecting assets against future quantum computing threats. Military-grade security with zero-knowledge proofs.',
        icon: Shield,
        color: '#8c52ff',
        bg: '#8c52ff12',
        highlights: ['Quantum-proof', 'Zero knowledge', 'Military grade'],
    },
    {
        id: 3,
        num: '03',
        word: 'SCALE',
        title: 'INFINITE SCALABILITY',
        stat: 'UNLIMITED',
        label: 'Users Globally',
        desc: 'Dynamic sharding architecture that grows seamlessly with network demand. From thousands to billions of users without performance degradation.',
        icon: Layers,
        color: '#ff4080',
        bg: '#ff408012',
        highlights: ['Auto-sharding', 'Linear scaling', 'Global reach'],
    },
    {
        id: 4,
        num: '04',
        word: 'SMART',
        title: 'AI-POWERED ENGINE',
        stat: '24/7',
        label: 'Neural Active',
        desc: 'Machine learning algorithms continuously optimizing network performance. Predictive resource allocation and intelligent load balancing.',
        icon: Brain,
        color: '#ffc502',
        bg: '#ffc50212',
        highlights: ['ML optimization', 'Predictive AI', 'Auto-tuning'],
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
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#450693]/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#8c52ff]/6 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">

                {/* Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-5">
                        <span className="w-2 h-2 rounded-full bg-[#450693] animate-pulse" />
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
                                        className="text-[52px] sm:text-[68px] md:text-[84px] lg:text-[96px] font-black leading-[0.85] tracking-[-0.04em] mb-5"
                                        style={{ color: f.color }}
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

                                        <div className="text-center mb-6">
                                            <div
                                                className="text-[48px] sm:text-[64px] font-black leading-none mb-2"
                                                style={{ color: f.color }}
                                            >
                                                {f.stat}
                                            </div>
                                            <div className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">
                                                {f.label}
                                            </div>
                                        </div>

                                        {/* Mini Stats */}
                                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                                            <div className="text-center">
                                                <div className="text-white font-black text-lg">99.9%</div>
                                                <div className="text-white/30 text-[9px] uppercase tracking-wider">Uptime</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-white font-black text-lg">&lt;1s</div>
                                                <div className="text-white/30 text-[9px] uppercase tracking-wider">Finality</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-white font-black text-lg">$0.001</div>
                                                <div className="text-white/30 text-[9px] uppercase tracking-wider">Per Tx</div>
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
                                            Experience the next generation of blockchain technology.
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
