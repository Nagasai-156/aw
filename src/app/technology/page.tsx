'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Layers, Cpu, Database, Shield, Zap, Code, Lock, ArrowRight, ChevronRight, ChevronDown, Rocket, Globe } from 'lucide-react';
import { useState, useRef } from 'react';

export default function TechnologyPage() {
    const [activeLayer, setActiveLayer] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const layers = [
        {
            name: 'APPLICATION',
            color: '#ffc502',
            icon: Code,
            desc: 'Smart contracts, dApps, and user interfaces',
            features: ['Solidity & Rust Support', 'SDK & APIs', 'Developer Tools'],
            stat: '10K+ dApps'
        },
        {
            name: 'EXECUTION',
            color: '#8c52ff',
            icon: Cpu,
            desc: 'High-speed transaction processing and VM execution',
            features: ['EVM Compatible', 'WASM Runtime', 'Parallel Execution'],
            stat: '1M+ TPS'
        },
        {
            name: 'CONSENSUS',
            color: '#ff4080',
            icon: Shield,
            desc: 'AI-powered proof of stake consensus',
            features: ['AI Optimization', 'Sub-second Finality', 'Byzantine Fault Tolerant'],
            stat: '0.4s Finality'
        },
        {
            name: 'DATA',
            color: '#450693',
            icon: Database,
            desc: 'Distributed storage and state management',
            features: ['Sharded Storage', 'State Pruning', 'IPFS Integration'],
            stat: '∞ Scalable'
        },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO - Tech Focused */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                {/* Animated Orbs */}
                <motion.div
                    className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#8c52ff]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ffc502]/10 rounded-full blur-[120px]"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
                    <motion.div style={{ y, opacity }}>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <Layers className="w-4 h-4 text-[#8c52ff]" />
                            </motion.div>
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Technology</span>
                        </motion.div>

                        {/* Main Title */}
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-[64px] sm:text-[96px] lg:text-[140px] font-black leading-[0.85] tracking-[-0.04em]"
                            >
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    NEXT-GEN
                                </motion.span>
                                <motion.span
                                    className="block text-[#8c52ff]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    BLOCKCHAIN
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-3xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Revolutionary dual-chain architecture with AI-powered consensus, delivering unprecedented speed, security, and scalability.
                        </motion.p>

                        {/* Animated Stats */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                { value: '1M+', label: 'TPS', color: '#ffc502' },
                                { value: '0.4s', label: 'Finality', color: '#8c52ff' },
                                { value: '10K+', label: 'Validators', color: '#ff4080' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                                    whileHover={{ scale: 1.1 }}
                                    className="text-center cursor-pointer"
                                >
                                    <div className="text-4xl lg:text-5xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                                    <div className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            className="flex flex-wrap gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#architecture"
                                    className="bg-[#8c52ff] text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#7a45e0] transition-colors inline-flex items-center gap-2"
                                >
                                    Explore <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#"
                                    className="border-2 border-white/20 text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all"
                                >
                                    Whitepaper
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
                    <ChevronDown className="text-white/40 w-8 h-8" />
                </motion.div>
            </section>

            {/* ARCHITECTURE - Interactive Layers */}
            <section id="architecture" className="relative py-32 px-8 bg-white">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">Architecture</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black">
                            Layer <span className="text-[#8c52ff]">Stack</span>
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left - Interactive Layer Selector */}
                        <div className="space-y-3">
                            {layers.map((layer, i) => {
                                const Icon = layer.icon;
                                const isActive = activeLayer === i;
                                return (
                                    <motion.div
                                        key={i}
                                        onClick={() => setActiveLayer(i)}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ x: 10 }}
                                        className={`cursor-pointer transition-all duration-300 flex items-center p-5 gap-5 border-4 ${isActive ? 'bg-black border-black' : 'bg-white border-black/20 hover:border-black'}`}
                                    >
                                        <motion.div
                                            animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Icon size={28} style={{ color: layer.color }} />
                                        </motion.div>
                                        <div className="flex-1">
                                            <div className={`font-black text-lg ${isActive ? 'text-white' : 'text-black'}`}>
                                                {layer.name}
                                            </div>
                                            <div className={`text-sm ${isActive ? 'text-white/60' : 'text-black/40'}`}>
                                                {layer.stat}
                                            </div>
                                        </div>
                                        <motion.div
                                            animate={{ x: isActive ? 5 : 0 }}
                                        >
                                            <ChevronRight className={isActive ? 'text-white' : 'text-black/20'} style={{ color: isActive ? layer.color : undefined }} />
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Right - Layer Details */}
                        <div className="lg:sticky lg:top-32">
                            <motion.div
                                key={activeLayer}
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="bg-black p-10 border-4 border-black"
                            >
                                <motion.div
                                    className="w-20 h-20 flex items-center justify-center mb-8 border-4"
                                    style={{ borderColor: layers[activeLayer].color }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    {(() => {
                                        const Icon = layers[activeLayer].icon;
                                        return <Icon size={40} style={{ color: layers[activeLayer].color }} />;
                                    })()}
                                </motion.div>

                                <h3 className="text-4xl font-black mb-4" style={{ color: layers[activeLayer].color }}>
                                    {layers[activeLayer].name}
                                </h3>

                                <p className="text-white/60 text-lg mb-8">
                                    {layers[activeLayer].desc}
                                </p>

                                <div className="space-y-3">
                                    <span className="text-sm font-bold text-white/40 uppercase tracking-wider">Features</span>
                                    {layers[activeLayer].features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-4"
                                        >
                                            <motion.div
                                                className="w-3 h-3"
                                                style={{ backgroundColor: layers[activeLayer].color }}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ delay: i * 0.2, duration: 0.5 }}
                                            />
                                            <span className="text-white font-bold">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DUAL CHAIN - Side by Side */}
            <section className="relative py-32 px-8 bg-black">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Innovation</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-white">
                            Dual-Chain <span className="text-[#ffc502]">System</span>
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Execution Chain */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="border-4 border-[#8c52ff] p-10 group cursor-pointer"
                        >
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Zap size={56} className="text-[#8c52ff] mb-6" />
                            </motion.div>
                            <h3 className="text-[32px] font-black text-white leading-none mb-4">
                                Execution Chain
                            </h3>
                            <p className="text-white/60 text-lg mb-6">
                                Optimized for speed with parallel execution and instant confirmation.
                            </p>
                            <ul className="space-y-3">
                                {['1M+ TPS Capacity', 'EVM + WASM', 'Parallel Processing'].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-3 text-white"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="w-2 h-2 bg-[#8c52ff]" />
                                        <span className="font-bold">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Settlement Chain */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="border-4 border-[#ffc502] p-10 group cursor-pointer"
                        >
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Lock size={56} className="text-[#ffc502] mb-6" />
                            </motion.div>
                            <h3 className="text-[32px] font-black text-white leading-none mb-4">
                                Settlement Chain
                            </h3>
                            <p className="text-white/60 text-lg mb-6">
                                Focused on security with AI-optimized consensus.
                            </p>
                            <ul className="space-y-3">
                                {['AI Consensus', 'Quantum Resistant', 'Final Settlement'].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-3 text-white"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="w-2 h-2 bg-[#ffc502]" />
                                        <span className="font-bold">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* BENCHMARKS - Large Numbers */}
            <section className="relative bg-white py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Performance</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black">
                            Benchmark <span className="text-[#ff4080]">Results</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { value: '1,000,000+', label: 'TPS', color: '#8c52ff' },
                            { value: '0.4s', label: 'Finality', color: '#ffc502' },
                            { value: '10,000+', label: 'Validators', color: '#ff4080' },
                        ].map((bench, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, type: "spring" }}
                                whileHover={{ scale: 1.05 }}
                                className="border-4 border-black p-10 cursor-pointer"
                            >
                                <motion.div
                                    className="text-[56px] lg:text-[72px] font-black leading-none"
                                    style={{ color: bench.color }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                                >
                                    {bench.value}
                                </motion.div>
                                <div className="text-black font-black text-xl mt-4">{bench.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative bg-black py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Rocket size={64} className="text-[#8c52ff] mx-auto mb-8" />
                        </motion.div>
                        <h2 className="text-[48px] lg:text-[80px] font-black text-white leading-none mb-8">
                            Start <span className="text-[#8c52ff]">Building</span>
                        </h2>
                        <motion.div
                            className="flex flex-wrap gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#"
                                    className="bg-[#8c52ff] text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#7a45e0] transition-colors inline-flex items-center gap-2"
                                >
                                    Read Docs <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#"
                                    className="border-2 border-white/20 text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all"
                                >
                                    View GitHub
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
