'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Zap, Shield, Layers, Database, Cpu, Globe, ArrowRight, ChevronDown, Check, Sparkles, ArrowUpRight, Clock, TrendingUp, Scale } from 'lucide-react';
import { useRef } from 'react';

export default function WhatIsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO - Animated Question Mark */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                {/* Animated Orbs */}
                <motion.div
                    className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ffc502]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#8c52ff]/20 rounded-full blur-[120px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                {/* Large Floating Question Mark */}
                <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-[400px] lg:text-[600px] font-black text-white/[0.02] leading-none pointer-events-none select-none"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    ?
                </motion.div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <motion.div style={{ scale, opacity }} className="text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-[#ffc502]" />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Discover</span>
                        </motion.div>

                        {/* Main Title */}
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.9] tracking-[-0.04em]"
                            >
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    WHAT IS
                                </motion.span>
                                <motion.span
                                    className="block text-[#ffc502]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    ARTHACHAIN
                                </motion.span>
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    ?
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-3xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            A next-generation Layer 1 blockchain combining unprecedented speed,
                            AI-powered optimization, and quantum-resistant security.
                        </motion.p>

                        {/* Animated Feature Pills */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-4 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                { icon: Zap, label: 'Lightning Fast', color: '#ffc502' },
                                { icon: Shield, label: 'Ultra Secure', color: '#8c52ff' },
                                { icon: Layers, label: 'Infinitely Scalable', color: '#ff4080' },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5"
                                    >
                                        <Icon className="w-5 h-5" style={{ color: item.color }} />
                                        <span className="text-white font-bold text-sm uppercase tracking-wider">{item.label}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#explained"
                                    className="bg-[#ffc502] text-black px-10 py-5 font-bold uppercase tracking-wide hover:bg-white transition-colors inline-flex items-center gap-2"
                                >
                                    Explore <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white/30 text-xs uppercase tracking-wider">Discover</span>
                        <ChevronDown className="text-white/40 w-6 h-6" />
                    </div>
                </motion.div>
            </section>

            {/* THE PROBLEM - Dramatic Reveal */}
            <section id="explained" className="relative bg-white py-32 px-8 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.span
                            className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            The Challenge
                        </motion.span>
                        <h2 className="text-[40px] lg:text-[64px] font-black text-black leading-none">
                            Today's Blockchains<br />
                            <span className="text-[#ff4080]">Face Limits</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, problem: 'Too Slow', desc: 'Only 15-50 TPS causing delays and expensive fees' },
                            { icon: TrendingUp, problem: 'Can\'t Scale', desc: 'Networks become congested as users increase' },
                            { icon: Scale, problem: 'Trade-offs', desc: 'Speed sacrifices security or decentralization' },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50, rotateY: -15 }}
                                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.15, duration: 0.6 }}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                    className="border-4 border-black p-8 bg-white relative overflow-hidden group cursor-pointer"
                                >
                                    {/* Animated X */}
                                    <motion.div
                                        className="absolute top-4 right-4 text-6xl font-black text-[#ff4080]/10 group-hover:text-[#ff4080]/30 transition-colors"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        ✕
                                    </motion.div>
                                    <div className="w-14 h-14 border-4 border-[#ff4080] flex items-center justify-center mb-6">
                                        <Icon size={28} className="text-[#ff4080]" />
                                    </div>
                                    <h3 className="text-2xl font-black text-black mb-3">{item.problem}</h3>
                                    <p className="text-black/60">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* THE SOLUTION - Checkmark Reveals */}
            <section className="relative bg-black py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">The Solution</span>
                        <h2 className="text-[40px] lg:text-[64px] font-black text-white leading-none">
                            ArthaChain<br />
                            <span className="text-[#8c52ff]">Changes Everything</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, solution: '1M+ TPS', desc: 'Parallel execution & optimized consensus', color: '#8c52ff' },
                            { icon: Layers, solution: 'Infinite Scale', desc: 'Dual-chain architecture separates concerns', color: '#ffc502' },
                            { icon: Shield, solution: 'Zero Trade-offs', desc: 'AI security maintains decentralization', color: '#ff4080' },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="border-2 border-white/20 p-8 hover:border-white/40 transition-all relative group cursor-pointer"
                                >
                                    {/* Animated Check */}
                                    <motion.div
                                        className="absolute top-4 right-4"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: item.color }}>
                                            <Check className="w-6 h-6 text-black" />
                                        </div>
                                    </motion.div>
                                    <div className="w-14 h-14 border-4 flex items-center justify-center mb-6" style={{ borderColor: item.color }}>
                                        <Icon size={28} style={{ color: item.color }} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-3" style={{ color: item.color }}>{item.solution}</h3>
                                    <p className="text-white/60">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS - Numbered Stack */}
            <section className="relative bg-white py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Architecture</span>
                        <h2 className="text-[40px] lg:text-[64px] font-black text-black leading-none">
                            The ArthaChain <span className="text-[#ffc502]">Stack</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            { icon: Globe, name: 'Application Layer', desc: 'dApps & Smart Contracts (Solidity, Rust)', color: '#ffc502' },
                            { icon: Cpu, name: 'Execution Layer', desc: 'EVM + WASM with Parallel Processing', color: '#8c52ff' },
                            { icon: Shield, name: 'Consensus Layer', desc: 'AI-Optimized Proof-of-Stake', color: '#ff4080' },
                            { icon: Database, name: 'Data Layer', desc: 'Sharded Storage + Quantum Encryption', color: '#450693' },
                        ].map((layer, i) => {
                            const Icon = layer.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6 }}
                                    whileHover={{ x: 20 }}
                                    className="flex items-center gap-6 p-6 border-4 border-black bg-white hover:bg-black group transition-all cursor-pointer"
                                >
                                    {/* Number */}
                                    <motion.div
                                        className="text-[80px] font-black text-black/5 group-hover:text-white/5 leading-none transition-colors hidden lg:block"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        0{i + 1}
                                    </motion.div>

                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 flex-shrink-0 flex items-center justify-center border-4"
                                        style={{ borderColor: layer.color }}
                                    >
                                        <Icon size={28} style={{ color: layer.color }} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-black text-black group-hover:text-white transition-colors">{layer.name}</h3>
                                        <p className="text-black/60 group-hover:text-white/60 transition-colors">{layer.desc}</p>
                                    </div>

                                    {/* Arrow */}
                                    <ArrowUpRight className="text-black/20 group-hover:text-white/40 w-8 h-8 transition-colors" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* USE CASES */}
            <section className="relative bg-black py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Use Cases</span>
                        <h2 className="text-[40px] lg:text-[64px] font-black text-white leading-none">
                            Built For <span className="text-[#ff4080]">Everything</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'DeFi', desc: 'Ultra-fast trading, lending, and yield', color: '#8c52ff' },
                            { name: 'NFTs', desc: 'Instant minting, low-cost marketplaces', color: '#ffc502' },
                            { name: 'Gaming', desc: 'Real-time on-chain game mechanics', color: '#ff4080' },
                            { name: 'Enterprise', desc: 'Private networks, public security', color: '#450693' },
                        ].map((useCase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, rotateZ: i % 2 === 0 ? -2 : 2 }}
                                whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, rotateZ: 0 }}
                                className="border-2 border-white/10 p-8 hover:border-white/30 transition-all text-center cursor-pointer"
                            >
                                <div
                                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl font-black"
                                    style={{ backgroundColor: useCase.color }}
                                >
                                    <span className="text-black">{useCase.name.charAt(0)}</span>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-3">{useCase.name}</h3>
                                <p className="text-white/50 text-sm">{useCase.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative bg-white py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-[48px] lg:text-[80px] font-black text-black leading-none mb-8"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            Ready to <span className="text-[#8c52ff]">Explore?</span>
                        </motion.h2>
                        <motion.div
                            className="flex flex-wrap gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/technology"
                                    className="bg-black text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#8c52ff] transition-colors inline-flex items-center gap-2"
                                >
                                    View Technology <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#"
                                    className="border-4 border-black text-black px-10 py-5 font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-all"
                                >
                                    Read Whitepaper
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
