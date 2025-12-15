'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Database, Shield, Zap, Network, Code2, Brain, Fingerprint } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function WhatIsArthaChainPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO */}
            <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.08]" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-8">
                            What is ArthaChain
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
                    >
                        The <span className="text-[#8c52ff]">AI-Native</span><br />
                        Blockchain for the<br />
                        <span className="text-[#ff4080]">Autonomous World</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
                    >
                        ArthaChain is an <span className="text-white font-bold">AI-accelerated</span>, <span className="text-[#ffc502] font-bold">quantum-secure</span> Layer-1 blockchain designed for next-generation decentralized computing.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link href="/technology" className="px-8 py-4 bg-[#8c52ff] text-white font-bold uppercase tracking-widest hover:bg-[#ff4080] transition-colors">
                            Explore Technology
                        </Link>
                        <Link href="/docs" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Read Docs
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CORE ARCHITECTURE */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Architecture
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-6">
                                Built on <span className="text-[#8c52ff]">Six Core Layers</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { num: '01', title: 'AI Consensus', desc: 'Neural models for real-time optimization', color: '#8c52ff', icon: Brain },
                            { num: '02', title: 'Dual-VM', desc: 'EVM + WASM parallel execution', color: '#ff4080', icon: Code2 },
                            { num: '03', title: 'DAG + Sharding', desc: 'Infinite horizontal scaling', color: '#ffc502', icon: Network },
                            { num: '04', title: 'Quantum Security', desc: 'Dilithium-5 / ML-DSA-87', color: '#8c52ff', icon: Shield },
                            { num: '05', title: 'Native DID', desc: 'W3C-compliant identity layer', color: '#ff4080', icon: Fingerprint },
                            { num: '06', title: 'Vector DB', desc: 'AI embeddings & ML pipelines', color: '#ffc502', icon: Database }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="group p-6 bg-gray-50 border-l-4 hover:bg-black hover:text-white transition-all duration-300" style={{ borderLeftColor: item.color }}>
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-3xl font-black" style={{ color: item.color }}>{item.num}</span>
                                            <Icon className="w-6 h-6" style={{ color: item.color }} />
                                        </div>
                                        <h3 className="text-lg font-black mb-2">{item.title}</h3>
                                        <p className="text-gray-600 group-hover:text-gray-300 text-sm">{item.desc}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#ff4080] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                How It Works
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black">
                                Three Core <span className="text-[#ff4080]">Layers</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {[
                            { num: '01', title: 'Base Layer', subtitle: 'AI Consensus', color: '#8c52ff', icon: Brain, points: ['Predicts transaction load', 'Optimizes block selection', 'Self-adjusting throughput'], footer: 'Self-adjusting consensus' },
                            { num: '02', title: 'Execution Layer', subtitle: 'Dual VMs', color: '#ff4080', icon: Code2, points: ['EVM: Solidity & tools', 'WASM: Rust & AssemblyScript', 'Parallel AI optimization'], footer: 'Maximum compatibility' },
                            { num: '03', title: 'Scaling Layer', subtitle: 'DAG + Sharding', color: '#ffc502', icon: Network, points: ['Parallel tx processing', 'Infinite horizontal scale', 'No global bottlenecks'], footer: '1M+ TPS, sub-second finality' }
                        ].map((layer, i) => {
                            const Icon = layer.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="h-full p-8 border border-white/10 hover:border-white/30 transition-colors" style={{ borderTopColor: layer.color, borderTopWidth: '4px' }}>
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-4xl font-black" style={{ color: layer.color }}>{layer.num}</span>
                                            <Icon className="w-8 h-8" style={{ color: layer.color }} />
                                        </div>
                                        <h3 className="text-2xl font-black mb-1">{layer.title}</h3>
                                        <p className="text-sm uppercase tracking-widest mb-6" style={{ color: layer.color }}>{layer.subtitle}</p>
                                        <ul className="space-y-3 mb-6">
                                            {layer.points.map((point, j) => (
                                                <li key={j} className="flex items-center gap-3 text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: layer.color }} />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="font-bold border-t border-white/10 pt-4">{layer.footer}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* IDENTITY & STORAGE */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#ffc502] text-black text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Infrastructure
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black">
                                Identity & <span className="text-[#ffc502]">Storage</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-8">
                        <StaggerItem>
                            <div className="h-full border-t-4 border-[#ff4080] bg-gray-50 p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#ff4080] flex items-center justify-center">
                                        <Fingerprint className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black">Identity Layer</h3>
                                        <p className="text-sm text-[#ff4080]">Decentralized Identity (DID)</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {['On-chain credentials', 'Passwordless auth', 'Zero-trust comms', 'Cross-chain identity', 'AI agent identity'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200">
                                            <span className="w-2 h-2 bg-[#ff4080]" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="h-full border-t-4 border-[#8c52ff] bg-gray-50 p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#8c52ff] flex items-center justify-center">
                                        <Database className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black">Storage Layer</h3>
                                        <p className="text-sm text-[#8c52ff]">Sharded Vector Database</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {['AI embeddings', 'Vector search', 'ML pipelines', 'Agent data storage', 'High-performance queries'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200">
                                            <span className="w-2 h-2 bg-[#8c52ff]" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* TECHNICAL SPECS */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#ffc502] text-black text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Specifications
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black">
                                Built for <span className="text-[#8c52ff]">Performance</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Throughput', value: '1M+ TPS', color: '#8c52ff' },
                            { label: 'Finality', value: '<1 sec', color: '#ff4080' },
                            { label: 'TX Cost', value: '<$0.001', color: '#ffc502' },
                            { label: 'Consensus', value: 'AI-Optimized', color: '#8c52ff' },
                            { label: 'VMs', value: 'EVM + WASM', color: '#ff4080' },
                            { label: 'Security', value: 'Post-Quantum', color: '#ffc502' },
                            { label: 'Scalability', value: 'Infinite', color: '#8c52ff' },
                            { label: 'Validators', value: 'Permissionless', color: '#ff4080' }
                        ].map((spec, i) => (
                            <StaggerItem key={i}>
                                <div className="text-center p-6 border border-white/10 hover:border-white/30 transition-colors">
                                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">{spec.label}</div>
                                    <div className="text-xl md:text-2xl font-black" style={{ color: spec.color }}>{spec.value}</div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* USE CASES */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-black text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Use Cases
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black">
                                What You Can <span className="text-[#ffc502]">Build</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            'Intelligent DeFi', 'Autonomous Agents', 'HFT Engines', 'AI-powered dApps',
                            'Identity Systems', 'Enterprise Solutions', 'IoT Security', 'Privacy Apps',
                            'AI Marketplaces', 'Game Engines', 'CDN Networks', 'Social Platforms'
                        ].map((useCase, i) => (
                            <StaggerItem key={i}>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 hover:border-[#ffc502] hover:bg-[#ffc502] transition-all group">
                                    <Zap className="w-4 h-4 text-[#ffc502] group-hover:text-black" />
                                    <span className="font-bold text-sm">{useCase}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.1]" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
                        Ready to <span className="text-[#8c52ff]">Build</span>?
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        Start developing on the world's most advanced AI-native blockchain infrastructure.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/docs" className="px-10 py-5 bg-[#8c52ff] text-white font-bold uppercase tracking-widest hover:bg-[#ff4080] transition-colors flex items-center justify-center gap-3">
                            View Docs <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/technology" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
                            Explore Tech <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
