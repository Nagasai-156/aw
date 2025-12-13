'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Box, Cpu, Code2, ArrowRight, ChevronDown, Check, Zap, Settings } from 'lucide-react';
import { useState, useRef } from 'react';

export default function DualVMPage() {
    const [activeVM, setActiveVM] = useState<'evm' | 'wasm'>('evm');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const vms = {
        evm: {
            name: 'Ethereum Virtual Machine',
            short: 'EVM',
            color: '#8c52ff',
            icon: Box,
            tagline: 'Ethereum Compatibility',
            description: 'Full EVM compatibility allows seamless migration of existing Ethereum smart contracts. Deploy your Solidity code without modifications.',
            languages: ['Solidity', 'Vyper', 'Yul'],
            features: [
                'Full Ethereum tooling support (Hardhat, Foundry, Remix)',
                'Compatible with MetaMask and all EVM wallets',
                'Access to existing DeFi primitives',
                'Familiar development experience',
            ],
            useCase: 'Best for: DeFi protocols, token contracts, existing Ethereum dApps',
            performance: { gas: 'Standard', speed: 'Fast', security: 'Battle-tested' },
        },
        wasm: {
            name: 'WebAssembly Runtime',
            short: 'WASM',
            color: '#ffc502',
            icon: Cpu,
            tagline: 'Maximum Performance',
            description: 'Near-native execution speed with WebAssembly. Build high-performance applications in Rust, C++, or AssemblyScript.',
            languages: ['Rust', 'C++', 'AssemblyScript', 'Go'],
            features: [
                'Near-native execution performance',
                'Lower gas costs for compute-heavy operations',
                'Access to advanced cryptographic libraries',
                'Compile from multiple languages',
            ],
            useCase: 'Best for: Gaming, AI/ML on-chain, complex computations, ZK proofs',
            performance: { gas: 'Optimized', speed: 'Ultra-fast', security: 'Memory-safe' },
        },
    };

    const active = vms[activeVM];
    const Icon = active.icon;

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#8c52ff]/20 rounded-full blur-[150px]"
                    animate={{ x: [0, 50, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#ffc502]/15 rounded-full blur-[150px]"
                    animate={{ x: [0, -50, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                        >
                            <Cpu className="w-4 h-4 text-[#ffc502]" />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Virtual Machines</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    DUAL VM
                                </motion.span>
                                <motion.span
                                    className="block"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    <span className="text-[#8c52ff]">EVM</span>
                                    <span className="text-white/30 mx-4">+</span>
                                    <span className="text-[#ffc502]">WASM</span>
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-3xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Choose the right tool for the job. Full Ethereum compatibility or maximum performance — or use both in the same application.
                        </motion.p>

                        {/* VM Toggle */}
                        <motion.div
                            className="flex justify-center gap-0 mb-12 border-4 border-white/20 inline-flex"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveVM('evm')}
                                className={`px-10 py-5 font-bold uppercase tracking-wide transition-all flex items-center gap-3 ${activeVM === 'evm' ? 'bg-[#8c52ff] text-white' : 'bg-transparent text-white/60'}`}
                            >
                                <Box size={20} /> EVM
                            </motion.button>
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveVM('wasm')}
                                className={`px-10 py-5 font-bold uppercase tracking-wide transition-all flex items-center gap-3 ${activeVM === 'wasm' ? 'bg-[#ffc502] text-black' : 'bg-transparent text-white/60'}`}
                            >
                                <Cpu size={20} /> WASM
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

            {/* VM DETAILS */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        key={activeVM}
                        initial={{ opacity: 0, x: activeVM === 'evm' ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Header */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <div
                                    className="w-24 h-24 flex items-center justify-center mb-6"
                                    style={{ backgroundColor: active.color }}
                                >
                                    <Icon size={48} className={activeVM === 'wasm' ? 'text-black' : 'text-white'} />
                                </div>
                                <h2 className="text-[40px] lg:text-[56px] font-black text-black leading-none mb-4">
                                    {active.name}
                                </h2>
                                <p className="text-black/60 text-xl mb-6">{active.description}</p>
                                <div
                                    className="inline-block px-4 py-2 text-sm font-bold uppercase tracking-wider"
                                    style={{ backgroundColor: active.color, color: activeVM === 'wasm' ? 'black' : 'white' }}
                                >
                                    {active.useCase}
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="border-4 border-black p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Code2 size={24} style={{ color: active.color }} />
                                    <h3 className="text-xl font-black text-black">Supported Languages</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {active.languages.map((lang, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="px-6 py-3 border-4 border-black font-black text-black hover:text-white transition-colors cursor-pointer"
                                            style={{ ['--hover-bg' as string]: active.color }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = active.color}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            {lang}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            {Object.entries(active.performance).map(([key, value], i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border-4 border-black p-6 text-center"
                                >
                                    <div className="text-sm font-bold text-black/40 uppercase tracking-wider mb-2">{key}</div>
                                    <div className="text-2xl font-black" style={{ color: active.color }}>{value}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            {active.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 p-5 border-4 border-black hover:bg-black group transition-colors cursor-pointer"
                                >
                                    <div
                                        className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                                        style={{ backgroundColor: active.color }}
                                    >
                                        <Check className={activeVM === 'wasm' ? 'text-black' : 'text-white'} size={20} />
                                    </div>
                                    <span className="font-bold text-black group-hover:text-white transition-colors">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* INTEROPERABILITY */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Power</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            Cross-VM <span className="text-[#ff4080]">Interop</span>
                        </h2>
                        <p className="text-white/50 text-xl mt-4 max-w-2xl mx-auto">
                            Call WASM contracts from EVM and vice versa. One unified ecosystem.
                        </p>
                    </motion.div>

                    {/* Interop Visualization */}
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border-4 border-[#8c52ff] p-8 text-center"
                        >
                            <Box size={48} className="text-[#8c52ff] mx-auto mb-4" />
                            <h3 className="text-2xl font-black text-white mb-2">EVM Contract</h3>
                            <p className="text-white/50 text-sm font-mono">contract.sol</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <Settings size={64} className="text-[#ff4080]" />
                            </motion.div>
                            <span className="text-white font-black uppercase tracking-wider">ABI Bridge</span>
                            <div className="flex items-center gap-2">
                                <Zap className="text-[#ffc502]" size={16} />
                                <span className="text-white/40 text-sm">Seamless Calls</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border-4 border-[#ffc502] p-8 text-center"
                        >
                            <Cpu size={48} className="text-[#ffc502] mx-auto mb-4" />
                            <h3 className="text-2xl font-black text-white mb-2">WASM Contract</h3>
                            <p className="text-white/50 text-sm font-mono">contract.rs</p>
                        </motion.div>
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
                            Start <span className="text-[#8c52ff]">Coding</span>
                        </h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link href="#" className="bg-black text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#8c52ff] transition-colors inline-flex items-center gap-2">
                                    EVM Docs <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link href="#" className="border-4 border-black text-black px-10 py-5 font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-all">
                                    WASM Docs
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
