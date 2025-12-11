'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Database, Network, Code } from 'lucide-react';

const techStack = [
    {
        id: 1,
        icon: Cpu,
        title: 'AI-Powered Consensus',
        description: 'Neural network-driven consensus mechanism that adapts to network conditions in real-time',
        color: '#8c52ff',
        stats: ['99.9% Uptime', '1M+ TPS', '<1s Finality'],
    },
    {
        id: 2,
        icon: Shield,
        title: 'Quantum-Resistant Security',
        description: 'Post-quantum cryptography with lattice-based signatures for future-proof security',
        color: '#450693',
        stats: ['256-bit Security', 'Zero Breaches', 'Military Grade'],
    },
    {
        id: 3,
        icon: Database,
        title: 'Sharded Vector Database',
        description: 'Distributed storage system with automatic sharding and content addressing',
        color: '#ff4080',
        stats: ['Infinite Scale', 'Low Latency', 'IPFS Compatible'],
    },
    {
        id: 4,
        icon: Network,
        title: 'Multi-Layer Architecture',
        description: 'Modular design with separate consensus, execution, and data availability layers',
        color: '#ffc502',
        stats: ['High Throughput', 'Low Cost', 'Composable'],
    },
    {
        id: 5,
        icon: Code,
        title: 'Smart Contract Engine',
        description: 'WebAssembly-based VM supporting multiple programming languages',
        color: '#8c52ff',
        stats: ['Multi-Language', 'Gas Efficient', 'Secure by Default'],
    },
    {
        id: 6,
        icon: Zap,
        title: 'Lightning Fast Execution',
        description: 'Parallel transaction processing with optimistic execution and fraud proofs',
        color: '#ff4080',
        stats: ['Parallel Exec', 'Sub-second', 'Optimistic'],
    },
];

export default function TechnologyPage() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
                {/* Animated Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-[1400px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 sm:mb-8 text-[#8c52ff]">
                            NEXT-GENERATION BLOCKCHAIN
                        </div>
                        <h1 className="text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-black leading-[0.9] mb-6 sm:mb-8">
                            <span className="text-white">TECH</span>
                            <br />
                            <span className="text-[#8c52ff]">STACK</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12">
                            Built from the ground up with cutting-edge technology for unmatched performance, security, and scalability
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <button className="bg-[#8c52ff] hover:bg-[#7a45e0] text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200">
                                VIEW WHITEPAPER
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200">
                                EXPLORE DOCS
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Grid */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-black mb-6">
                            CORE <span className="text-[#ff4080]">TECHNOLOGIES</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Six pillars powering the future of decentralized infrastructure
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {techStack.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <motion.div
                                    key={tech.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onHoverStart={() => setActiveCard(tech.id)}
                                    onHoverEnd={() => setActiveCard(null)}
                                    className="group relative bg-black border-2 border-white/10 hover:border-white/30 p-6 sm:p-8 transition-all duration-300 cursor-pointer overflow-hidden"
                                >
                                    {/* Hover Gradient Effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                        style={{
                                            background: `linear-gradient(135deg, ${tech.color} 0%, transparent 100%)`,
                                        }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div
                                            className="w-14 h-14 sm:w-16 sm:h-16 mb-6 flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
                                            style={{
                                                borderColor: activeCard === tech.id ? tech.color : 'rgba(255,255,255,0.2)',
                                                backgroundColor: activeCard === tech.id ? `${tech.color}20` : 'transparent',
                                            }}
                                        >
                                            <Icon
                                                size={28}
                                                style={{
                                                    color: activeCard === tech.id ? tech.color : '#fff',
                                                }}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl font-black uppercase mb-3 sm:mb-4">
                                            {tech.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm sm:text-base text-gray-400 mb-6">
                                            {tech.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="flex flex-wrap gap-2">
                                            {tech.stats.map((stat, i) => (
                                                <span
                                                    key={i}
                                                    className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 border"
                                                    style={{
                                                        borderColor: activeCard === tech.id ? tech.color : 'rgba(255,255,255,0.2)',
                                                        color: activeCard === tech.id ? tech.color : '#999',
                                                    }}
                                                >
                                                    {stat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white text-black">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-black text-center mb-12 sm:mb-16 md:mb-20">
                        BY THE <span className="text-[#8c52ff]">NUMBERS</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { value: '1M+', label: 'Transactions/Sec', color: '#8c52ff' },
                            { value: '<1s', label: 'Block Finality', color: '#450693' },
                            { value: '99.9%', label: 'Network Uptime', color: '#ff4080' },
                            { value: '$0.0001', label: 'Avg Transaction Fee', color: '#ffc502' },
                        ].map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6 sm:p-8 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group"
                            >
                                <div
                                    className="text-[48px] sm:text-[56px] md:text-[64px] font-black mb-3 sm:mb-4 transition-colors"
                                    style={{ color: metric.color }}
                                >
                                    {metric.value}
                                </div>
                                <div className="text-base sm:text-lg font-semibold uppercase tracking-wider">
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Diagram Section */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-black mb-6 sm:mb-8">
                        MULTI-LAYER <span className="text-[#ffc502]">ARCHITECTURE</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 sm:mb-16">
                        Modular design for maximum flexibility and scalability
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { layer: 'LAYER 1', name: 'Consensus', items: ['Proof of Stake', 'AI Optimization', 'Fast Finality'], color: '#8c52ff' },
                            { layer: 'LAYER 2', name: 'Execution', items: ['Wasm VM', 'Parallel Processing', 'Gas Efficiency'], color: '#ff4080' },
                            { layer: 'LAYER 3', name: 'Data Availability', items: ['Sharded Storage', 'IPFS Integration', 'Content Addressing'], color: '#ffc502' },
                        ].map((layer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border-2 border-white/10 p-6 sm:p-8 text-left transition-all duration-300"
                                style={{ '--hover-color': layer.color } as React.CSSProperties}
                            >
                                <div
                                    className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] mb-3"
                                    style={{ color: layer.color }}
                                >
                                    {layer.layer}
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black uppercase mb-6">
                                    {layer.name}
                                </h3>
                                <ul className="space-y-3">
                                    {layer.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-sm sm:text-base text-gray-400">
                                            <span
                                                className="w-1.5 h-1.5 mr-3"
                                                style={{ backgroundColor: layer.color }}
                                            ></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
