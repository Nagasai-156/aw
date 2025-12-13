'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { GitBranch, Zap, Lock, ArrowRight, ChevronDown, ArrowLeftRight, Check } from 'lucide-react';
import { useState, useRef } from 'react';

export default function DualChainPage() {
    const [activeChain, setActiveChain] = useState<'execution' | 'settlement'>('execution');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const chains = {
        execution: {
            name: 'Execution Chain',
            tagline: 'Speed & Throughput',
            color: '#8c52ff',
            icon: Zap,
            stats: [
                { label: 'TPS', value: '1,000,000+' },
                { label: 'Block Time', value: '0.1s' },
                { label: 'Finality', value: 'Optimistic' },
            ],
            features: [
                { title: 'Parallel Processing', desc: 'Execute thousands of transactions simultaneously using SIMD optimization' },
                { title: 'Dual VM Support', desc: 'Run both EVM and WASM smart contracts with near-native performance' },
                { title: 'State Channels', desc: 'Off-chain computation with on-chain settlement for instant UX' },
                { title: 'Memory Pool Optimization', desc: 'AI-driven transaction ordering for maximum throughput' },
            ],
        },
        settlement: {
            name: 'Settlement Chain',
            tagline: 'Security & Finality',
            color: '#ffc502',
            icon: Lock,
            stats: [
                { label: 'Finality', value: '0.4s' },
                { label: 'Validators', value: '10,000+' },
                { label: 'Security', value: 'Quantum-Safe' },
            ],
            features: [
                { title: 'AI-Optimized Consensus', desc: 'Machine learning algorithms optimize validator selection and block production' },
                { title: 'Quantum-Resistant Crypto', desc: 'Lattice-based signatures protect against future quantum threats' },
                { title: 'Cross-Chain Bridges', desc: 'Secure asset transfers between ArthaChain and other networks' },
                { title: 'Fraud Proofs', desc: 'Cryptographic proofs ensure execution chain integrity' },
            ],
        },
    };

    const active = chains[activeChain];
    const Icon = active.icon;

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#8c52ff]/20 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ffc502]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1.3, 1, 1.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                        >
                            <GitBranch className="w-4 h-4 text-[#ff4080]" />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Two-Layer Approach</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    DUAL-CHAIN
                                </motion.span>
                                <motion.span
                                    className="block text-[#ff4080]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    SYSTEM
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-3xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Revolutionary architecture separating execution from settlement. Speed where you need it, security where it matters.
                        </motion.p>

                        {/* Chain Toggle */}
                        <motion.div
                            className="flex justify-center gap-4 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveChain('execution')}
                                className={`px-8 py-4 font-bold uppercase tracking-wide transition-all ${activeChain === 'execution' ? 'bg-[#8c52ff] text-white' : 'border-2 border-white/20 text-white/60'}`}
                            >
                                Execution
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveChain('settlement')}
                                className={`px-8 py-4 font-bold uppercase tracking-wide transition-all ${activeChain === 'settlement' ? 'bg-[#ffc502] text-black' : 'border-2 border-white/20 text-white/60'}`}
                            >
                                Settlement
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="text-white/40 w-8 h-8" />
                </motion.div>
            </section>

            {/* CHAIN DETAILS - Dynamic Content */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        key={activeChain}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-6 mb-12">
                            <div
                                className="w-20 h-20 flex items-center justify-center"
                                style={{ backgroundColor: active.color }}
                            >
                                <Icon size={40} className={activeChain === 'settlement' ? 'text-black' : 'text-white'} />
                            </div>
                            <div>
                                <h2 className="text-[48px] font-black text-black leading-none">{active.name}</h2>
                                <p className="text-black/50 text-xl">{active.tagline}</p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            {active.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border-4 border-black p-8 text-center"
                                >
                                    <div className="text-4xl font-black" style={{ color: active.color }}>{stat.value}</div>
                                    <div className="text-black/50 font-bold uppercase tracking-wider mt-2">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Features */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {active.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-4 p-6 border-4 border-black group hover:bg-black transition-colors cursor-pointer"
                                >
                                    <div
                                        className="w-12 h-12 flex-shrink-0 flex items-center justify-center"
                                        style={{ backgroundColor: active.color }}
                                    >
                                        <Check className={activeChain === 'settlement' ? 'text-black' : 'text-white'} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-black group-hover:text-white text-lg mb-2 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-black/60 group-hover:text-white/60 transition-colors">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* HOW THEY WORK TOGETHER */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Synergy</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            How They <span className="text-[#ff4080]">Connect</span>
                        </h2>
                    </motion.div>

                    {/* Chain Connection Visualization */}
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Execution Chain */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 border-2 border-[#8c52ff] p-8"
                        >
                            <Zap size={48} className="text-[#8c52ff] mb-4" />
                            <h3 className="text-2xl font-black text-white mb-2">Execution Chain</h3>
                            <p className="text-white/50">Processes transactions at 1M+ TPS with parallel execution</p>
                        </motion.div>

                        {/* Connector */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <ArrowLeftRight size={48} className="text-[#ff4080]" />
                            <span className="text-white/40 text-sm uppercase tracking-wider">State Sync</span>
                        </motion.div>

                        {/* Settlement Chain */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 border-2 border-[#ffc502] p-8"
                        >
                            <Lock size={48} className="text-[#ffc502] mb-4" />
                            <h3 className="text-2xl font-black text-white mb-2">Settlement Chain</h3>
                            <p className="text-white/50">Provides final security with quantum-safe consensus</p>
                        </motion.div>
                    </div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-4 gap-4 mt-16">
                        {[
                            { step: '01', title: 'Submit', desc: 'Transaction submitted to execution chain' },
                            { step: '02', title: 'Process', desc: 'Parallel execution with instant response' },
                            { step: '03', title: 'Batch', desc: 'Transactions batched for settlement' },
                            { step: '04', title: 'Finalize', desc: 'Cryptographic proof on settlement chain' },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-6xl font-black text-white/10 mb-2">{step.step}</div>
                                <h4 className="font-black text-white mb-1">{step.title}</h4>
                                <p className="text-white/50 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black leading-none mb-8">
                            Deep <span className="text-[#ff4080]">Dive</span>
                        </h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link href="/core/consensus" className="bg-black text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#ff4080] transition-colors inline-flex items-center gap-2">
                                    Consensus <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link href="/core/security" className="border-4 border-black text-black px-10 py-5 font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-all">
                                    Security Model
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
