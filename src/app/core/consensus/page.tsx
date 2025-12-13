'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Shield, Users, Cpu, Clock, ArrowRight, ChevronDown, Vote, Brain, Check, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function ConsensusPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const consensusPhases = [
        {
            phase: 'PROPOSAL',
            time: '100ms',
            description: 'Block producer proposes new block with ordered transactions',
            details: ['AI selects optimal producer', 'Transactions ordered by priority', 'State root calculated'],
        },
        {
            phase: 'ATTESTATION',
            time: '150ms',
            description: 'Validators verify and sign the proposed block',
            details: ['Parallel verification', 'BLS signature aggregation', 'Fraud proof checking'],
        },
        {
            phase: 'AGGREGATION',
            time: '100ms',
            description: 'Signatures collected and threshold reached',
            details: ['2/3+ validator agreement', 'Single aggregated signature', 'Proof generation'],
        },
        {
            phase: 'FINALITY',
            time: '50ms',
            description: 'Block becomes irreversible and state is committed',
            details: ['Instant finality', 'No reorgs possible', 'Settlement chain update'],
        },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff4080]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                        >
                            <Vote className="w-4 h-4 text-[#ff4080]" />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Agreement Protocol</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    AI-POWERED
                                </motion.span>
                                <motion.span
                                    className="block text-[#ff4080]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    CONSENSUS
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-3xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Revolutionary proof-of-stake consensus optimized by machine learning. Sub-second finality with maximum decentralization.
                        </motion.p>

                        {/* Key Stats */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                { value: '0.4s', label: 'Finality', color: '#ff4080' },
                                { value: '10K+', label: 'Validators', color: '#8c52ff' },
                                { value: '99.99%', label: 'Uptime', color: '#ffc502' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                                    className="text-center"
                                >
                                    <div className="text-4xl lg:text-5xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                                    <div className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
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

            {/* CONSENSUS PHASES - Timeline */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">The Process</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black">
                            Consensus <span className="text-[#ff4080]">Phases</span>
                        </h2>
                        <p className="text-black/50 text-xl mt-4">From proposal to finality in 400 milliseconds</p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Progress Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-black/10 hidden lg:block" />

                        {consensusPhases.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative flex gap-8 mb-8 last:mb-0"
                            >
                                {/* Number */}
                                <div className="hidden lg:flex w-16 h-16 bg-black text-white font-black text-2xl items-center justify-center flex-shrink-0 z-10">
                                    {String(i + 1).padStart(2, '0')}
                                </div>

                                {/* Content */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex-1 border-4 border-black p-8 bg-white hover:bg-black group transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-black text-black group-hover:text-white transition-colors">
                                            {phase.phase}
                                        </h3>
                                        <div className="flex items-center gap-2 text-[#ff4080]">
                                            <Clock size={16} />
                                            <span className="font-black">{phase.time}</span>
                                        </div>
                                    </div>
                                    <p className="text-black/60 group-hover:text-white/60 text-lg mb-4 transition-colors">
                                        {phase.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {phase.details.map((detail, j) => (
                                            <span
                                                key={j}
                                                className="text-xs font-bold px-3 py-1 border-2 border-[#ff4080]/30 text-black/60 group-hover:text-white/80 group-hover:border-white/30 transition-colors"
                                            >
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI OPTIMIZATION */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">Innovation</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            AI <span className="text-[#8c52ff]">Optimization</span>
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Brain Visualization */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="relative"
                            >
                                <div className="w-64 h-64 rounded-full border-4 border-[#8c52ff]/30 flex items-center justify-center">
                                    <div className="w-48 h-48 rounded-full border-4 border-[#8c52ff]/50 flex items-center justify-center">
                                        <div className="w-32 h-32 rounded-full bg-[#8c52ff] flex items-center justify-center">
                                            <Brain size={64} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right - Features */}
                        <div className="space-y-6">
                            {[
                                { icon: Users, title: 'Validator Selection', desc: 'ML models select optimal validators based on historical performance, stake, and network conditions' },
                                { icon: Zap, title: 'Transaction Ordering', desc: 'AI optimizes transaction sequencing to maximize throughput and minimize MEV extraction' },
                                { icon: Shield, title: 'Anomaly Detection', desc: 'Real-time detection of malicious behavior prevents attacks before they impact the network' },
                                { icon: Cpu, title: 'Resource Allocation', desc: 'Dynamic resource optimization ensures efficient use of network capacity' },
                            ].map((feature, i) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ x: 10 }}
                                        className="flex gap-4 border-2 border-white/10 p-6 hover:border-[#8c52ff] transition-colors cursor-pointer group"
                                    >
                                        <div className="w-12 h-12 border-4 border-[#8c52ff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#8c52ff] transition-colors">
                                            <Icon size={24} className="text-[#8c52ff] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-black text-white mb-1">{feature.title}</h3>
                                            <p className="text-white/50">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* VALIDATOR REQUIREMENTS */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Participate</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Become a <span className="text-[#ffc502]">Validator</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: 'Minimum Stake', value: '32,000 ARTH' },
                            { label: 'Hardware', value: '8 Core CPU' },
                            { label: 'Memory', value: '32 GB RAM' },
                            { label: 'Storage', value: '1 TB SSD' },
                        ].map((req, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="border-4 border-black p-6 text-center cursor-pointer hover:bg-black group transition-colors"
                            >
                                <div className="text-sm font-bold text-black/40 group-hover:text-white/40 uppercase tracking-wider mb-2 transition-colors">{req.label}</div>
                                <div className="text-2xl font-black text-black group-hover:text-[#ffc502] transition-colors">{req.value}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link href="#" className="bg-black text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#ffc502] hover:text-black transition-colors inline-flex items-center gap-2">
                                Validator Guide <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
