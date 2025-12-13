'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Box, Layers, ArrowRight, ChevronDown, Database, Cpu, Globe, Shield, Zap, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

export default function ArchitecturePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const architectureLayers = [
        {
            name: 'User Interface Layer',
            color: '#ffc502',
            icon: Globe,
            components: ['Web3 Wallets', 'dApp Interfaces', 'SDK Integrations', 'API Endpoints'],
            description: 'The entry point for users and developers to interact with the ArthaChain ecosystem.',
        },
        {
            name: 'Application Layer',
            color: '#8c52ff',
            icon: Box,
            components: ['Smart Contracts', 'DeFi Protocols', 'NFT Marketplaces', 'DAOs'],
            description: 'Layer where decentralized applications execute business logic and user interactions.',
        },
        {
            name: 'Execution Layer',
            color: '#ff4080',
            icon: Cpu,
            components: ['Dual VM Engine', 'EVM Runtime', 'WASM Runtime', 'Parallel Executor'],
            description: 'High-performance transaction processing with parallel execution capabilities.',
        },
        {
            name: 'Consensus Layer',
            color: '#450693',
            icon: Shield,
            components: ['AI-PoS Consensus', 'Validator Network', 'Block Producers', 'Finality Module'],
            description: 'Decentralized agreement protocol ensuring network security and transaction finality.',
        },
        {
            name: 'Data Layer',
            color: '#8c52ff',
            icon: Database,
            components: ['State Storage', 'Transaction Pool', 'Block Archive', 'IPFS Bridge'],
            description: 'Distributed data storage with sharding and efficient state management.',
        },
        {
            name: 'Network Layer',
            color: '#ffc502',
            icon: Layers,
            components: ['P2P Protocol', 'Node Discovery', 'Message Propagation', 'Gossip Network'],
            description: 'Peer-to-peer communication infrastructure connecting all network participants.',
        },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#8c52ff]/20 rounded-full blur-[150px]"
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
                            <Box className="w-4 h-4 text-[#8c52ff]" />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">System Design</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[64px] sm:text-[96px] lg:text-[130px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    SYSTEM
                                </motion.span>
                                <motion.span
                                    className="block text-[#8c52ff]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    ARCHITECTURE
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-3xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            A modular, layered architecture designed for maximum performance, security, and extensibility. Each layer is independently upgradeable.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap justify-center gap-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                { value: '6', label: 'Core Layers' },
                                { value: '24+', label: 'Components' },
                                { value: '100%', label: 'Modular' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                                    className="text-center"
                                >
                                    <div className="text-4xl font-black text-[#8c52ff]">{stat.value}</div>
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

            {/* ARCHITECTURE STACK - Visual Layers */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">The Stack</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black">
                            Layered <span className="text-[#8c52ff]">Design</span>
                        </h2>
                    </motion.div>

                    {/* Stacked Layers Visualization */}
                    <div className="space-y-4">
                        {architectureLayers.map((layer, i) => {
                            const Icon = layer.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 20 }}
                                    className="flex items-stretch gap-0 cursor-pointer group"
                                >
                                    {/* Layer Number */}
                                    <div
                                        className="w-20 flex-shrink-0 flex items-center justify-center text-3xl font-black text-white"
                                        style={{ backgroundColor: layer.color }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </div>

                                    {/* Layer Content */}
                                    <div className="flex-1 border-4 border-black p-6 bg-white group-hover:bg-black transition-colors">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Icon size={24} style={{ color: layer.color }} />
                                            <h3 className="text-xl font-black text-black group-hover:text-white transition-colors">
                                                {layer.name}
                                            </h3>
                                        </div>
                                        <p className="text-black/60 group-hover:text-white/60 mb-4 transition-colors">
                                            {layer.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {layer.components.map((comp, j) => (
                                                <span
                                                    key={j}
                                                    className="text-xs font-bold px-3 py-1 border-2 text-black/60 group-hover:text-white/80 group-hover:border-white/30 transition-colors"
                                                    style={{ borderColor: layer.color + '40' }}
                                                >
                                                    {comp}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="w-16 flex-shrink-0 flex items-center justify-center border-4 border-l-0 border-black bg-white group-hover:bg-black transition-colors">
                                        <ArrowUpRight className="text-black/20 group-hover:text-white/40 transition-colors" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* KEY PRINCIPLES */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Philosophy</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            Design <span className="text-[#ffc502]">Principles</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Modularity', desc: 'Each layer can be upgraded independently without affecting others', icon: Box },
                            { title: 'Scalability', desc: 'Horizontal scaling through sharding and parallel processing', icon: Layers },
                            { title: 'Security', desc: 'Defense in depth with multiple security layers', icon: Shield },
                            { title: 'Performance', desc: 'Optimized data paths for sub-second latency', icon: Zap },
                        ].map((principle, i) => {
                            const Icon = principle.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="border-2 border-white/10 p-8 hover:border-[#ffc502] transition-all cursor-pointer group"
                                >
                                    <div className="w-14 h-14 border-4 border-[#ffc502] flex items-center justify-center mb-6 group-hover:bg-[#ffc502] transition-colors">
                                        <Icon size={28} className="text-[#ffc502] group-hover:text-black transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-3">{principle.title}</h3>
                                    <p className="text-white/50">{principle.desc}</p>
                                </motion.div>
                            );
                        })}
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
                            Explore <span className="text-[#8c52ff]">Components</span>
                        </h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link href="/core/dual-chain" className="bg-black text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#8c52ff] transition-colors inline-flex items-center gap-2">
                                    Dual-Chain <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link href="/core/dual-vm" className="border-4 border-black text-black px-10 py-5 font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-all">
                                    Dual VM
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
