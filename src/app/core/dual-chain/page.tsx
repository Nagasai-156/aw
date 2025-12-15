'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Cpu, Database, Zap, Shield, Brain, Network, GitBranch, Layers } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function DualChainPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - Massive Typography */}
            <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <div className="text-[10rem] leading-none font-black mb-8 tracking-tighter">
                            2
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black mb-16 tracking-tight">
                            Chains. One Network.
                        </h1>
                        <div className="space-y-2 text-xl md:text-2xl text-gray-400 mb-16">
                            <p>Brain and memory.</p>
                            <p>Logic and data.</p>
                            <p>Execution and intelligence.</p>
                        </div>
                        <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
                        <p className="text-2xl md:text-3xl font-bold text-white">
                            Perfectly synchronized. Infinitely scalable.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="grid md:grid-cols-2 gap-px bg-white max-w-5xl"
                    >
                        <div className="bg-black p-16 border-l-8 border-[#8c52ff]">
                            <div className="text-9xl font-black text-[#8c52ff] mb-4">01</div>
                            <h3 className="text-4xl font-black mb-3">ArthaCore</h3>
                            <p className="text-gray-400 text-lg">Execution & State</p>
                        </div>
                        <div className="bg-black p-16 border-l-8 border-[#ff4080]">
                            <div className="text-9xl font-black text-[#ff4080] mb-4">02</div>
                            <h3 className="text-4xl font-black mb-3">ArthaFlow</h3>
                            <p className="text-gray-400 text-lg">Intelligence & Identity</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ARTHACORE - Asymmetric Layout */}
            <section className="min-h-screen bg-white relative flex items-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="w-full relative z-10">
                    <div className="grid md:grid-cols-12 gap-0">
                        {/* Left - Large Number */}
                        <div className="md:col-span-3 bg-[#8c52ff] flex items-center justify-center p-12">
                            <div className="text-[15rem] font-black text-white leading-none">1</div>
                        </div>

                        {/* Right - Content */}
                        <div className="md:col-span-9 p-16">
                            <StaggerItem>
                                <div className="mb-12">
                                    <h2 className="text-7xl font-black mb-4">ArthaCore</h2>
                                    <p className="text-3xl text-gray-600">The Execution Chain</p>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="grid md:grid-cols-2 gap-12 mb-12">
                                    <div>
                                        <div className="mb-8">
                                            <div className="w-16 h-1 bg-[#8c52ff] mb-6"></div>
                                            <h3 className="text-2xl font-black mb-6">Handles</h3>
                                            <div className="space-y-3 text-lg">
                                                <p>Smart contract execution</p>
                                                <p>Dual-VM transactions</p>
                                                <p>State transitions</p>
                                                <p>Global ledger</p>
                                                <p>Consensus finality</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mb-8">
                                            <div className="w-16 h-1 bg-[#8c52ff] mb-6"></div>
                                            <h3 className="text-2xl font-black mb-6">Built For</h3>
                                            <div className="space-y-3 text-lg">
                                                <p>Speed</p>
                                                <p>Determinism</p>
                                                <p>Parallel execution</p>
                                                <p>Low latency</p>
                                                <p>High throughput</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="bg-black text-white p-10">
                                    <p className="text-xl mb-6 font-bold">Core Technologies</p>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>EVM + WASM</div>
                                        <div>Parallel Processor</div>
                                        <div>Dynamic Sharding</div>
                                        <div>Quantum-SVBFT</div>
                                        <div>DAG Ordering</div>
                                        <div>State-First</div>
                                    </div>
                                </div>
                            </StaggerItem>
                        </div>
                    </div>
                </StaggerContainer>
            </section>

            {/* ARTHAFLOW - Inverted Asymmetric */}
            <section className="min-h-screen bg-black text-white relative flex items-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="w-full relative z-10">
                    <div className="grid md:grid-cols-12 gap-0">
                        {/* Left - Content */}
                        <div className="md:col-span-9 p-16">
                            <StaggerItem>
                                <div className="mb-12">
                                    <h2 className="text-7xl font-black mb-4">ArthaFlow</h2>
                                    <p className="text-3xl text-gray-400">The Intelligence Chain</p>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="grid md:grid-cols-2 gap-12 mb-12">
                                    <div>
                                        <div className="mb-8">
                                            <div className="w-16 h-1 bg-[#ff4080] mb-6"></div>
                                            <h3 className="text-2xl font-black mb-6">Handles</h3>
                                            <div className="space-y-3 text-lg">
                                                <p>Decentralized Identity</p>
                                                <p>Vector storage (SVDB)</p>
                                                <p>AI agent memory</p>
                                                <p>Large data blobs</p>
                                                <p>ZK circuits</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mb-8">
                                            <div className="w-16 h-1 bg-[#ff4080] mb-6"></div>
                                            <h3 className="text-2xl font-black mb-6">Built For</h3>
                                            <div className="space-y-3 text-lg">
                                                <p>Massive data</p>
                                                <p>Vector embeddings</p>
                                                <p>Identity proofs</p>
                                                <p>ZK validity</p>
                                                <p>AI memory</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="bg-white text-black p-10">
                                    <p className="text-xl mb-6 font-bold">Core Technologies</p>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>Sharded Vector DB</div>
                                        <div>Content Addressing</div>
                                        <div>PQC DIDs</div>
                                        <div>Face Embeddings</div>
                                        <div>Agent Registry</div>
                                        <div>ZK Proofs</div>
                                    </div>
                                </div>
                            </StaggerItem>
                        </div>

                        {/* Right - Large Number */}
                        <div className="md:col-span-3 bg-[#ff4080] flex items-center justify-center p-12">
                            <div className="text-[15rem] font-black text-white leading-none">2</div>
                        </div>
                    </div>
                </StaggerContainer>
            </section>

            {/* SYNCHRONIZATION - Bento Grid */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20">
                            <h2 className="text-7xl font-black mb-6">Perfect Synchronization</h2>
                            <p className="text-2xl text-gray-600">Two chains. Same heartbeat.</p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-px bg-black">
                        {[
                            { icon: Shield, text: 'Same Validators', color: '#8c52ff' },
                            { icon: Brain, text: 'Same Consensus', color: '#ff4080' },
                            { icon: Network, text: 'Same Network', color: '#ffc502' },
                            { icon: Zap, text: 'Same Block Cycle', color: '#8c52ff' },
                            { icon: GitBranch, text: 'Same Finality', color: '#ff4080' },
                            { icon: Layers, text: 'Same Shard Roots', color: '#ffc502' }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white p-12 h-full flex flex-col items-center justify-center text-center">
                                        <Icon className="w-16 h-16 mb-6" style={{ color: item.color }} />
                                        <p className="text-xl font-black">{item.text}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>

                    <StaggerItem>
                        <div className="mt-20 bg-black text-white p-16">
                            <h3 className="text-4xl font-black mb-12 text-center">How It Works</h3>
                            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                                {[
                                    { step: 'User signs in', chain: 'ArthaFlow', detail: 'DID verified', color: '#ff4080' },
                                    { step: 'Transaction sent', chain: 'ArthaCore', detail: 'Balance updated', color: '#8c52ff' },
                                    { step: 'Data saved', chain: 'ArthaFlow', detail: 'Embeddings stored', color: '#ff4080' },
                                    { step: 'Query executed', chain: 'ArthaFlow', detail: 'Vector retrieved', color: '#ff4080' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="text-6xl font-black opacity-20" style={{ color: item.color }}>
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className="text-2xl font-black mb-2">{item.step}</p>
                                            <p className="text-lg text-gray-400">{item.chain}: {item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* WHY - Stacked Cards */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20 text-center">
                            <h2 className="text-7xl font-black mb-6">Why Dual Chain?</h2>
                        </div>
                    </StaggerItem>

                    <div className="space-y-6">
                        {[
                            { title: 'AI needs separation from execution', desc: 'Deterministic logic cannot mix with flexible AI storage and embeddings.', color: '#8c52ff' },
                            { title: 'Identity cannot bloat the execution layer', desc: 'DIDs and credentials need their own optimized chain.', color: '#ff4080' },
                            { title: 'Vector databases are massive', desc: 'AI agents produce 100MB+ embeddings. SVDB handles this.', color: '#ffc502' },
                            { title: 'ZK proofs need dedicated roots', desc: 'Separate roots prevent execution congestion.', color: '#8c52ff' },
                            { title: 'Independent scaling', desc: 'Execution and data scale separately. Infinite growth.', color: '#ff4080' }
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white text-black p-10 border-l-8" style={{ borderLeftColor: item.color }}>
                                    <h3 className="text-3xl font-black mb-4" style={{ color: item.color }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-xl text-gray-700">{item.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* COMPARISON - Split Table */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20 text-center">
                            <h2 className="text-7xl font-black mb-6">The Comparison</h2>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="grid md:grid-cols-2 gap-px bg-black">
                            {/* ArthaCore Column */}
                            <div className="bg-white p-12">
                                <div className="mb-8 pb-8 border-b-4 border-[#8c52ff]">
                                    <h3 className="text-4xl font-black text-[#8c52ff]">ArthaCore</h3>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Purpose</p>
                                        <p className="text-xl font-bold">Execution</p>
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">VM</p>
                                        <p className="text-xl font-bold">EVM + WASM</p>
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Data</p>
                                        <p className="text-xl font-bold">Small</p>
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Optimized</p>
                                        <p className="text-xl font-bold">Speed</p>
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Sharding</p>
                                        <p className="text-xl font-bold">Dynamic</p>
                                    </div>
                                </div>
                            </div>

                            {/* ArthaFlow Column */}
                            <div className="bg-white p-12">
                                <div className="mb-8 pb-8 border-b-4 border-[#ff4080]">
                                    <h3 className="text-4xl font-black text-[#ff4080]">ArthaFlow</h3>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Purpose</p>
                                        <p className="text-xl font-bold">Identity + Data</p>
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">VM</p>
                                        <p className="text-xl font-bold">None</p>
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Data</p>
                                        <p className="text-xl font-bold">Large / Vectors</p>
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Optimized</p>
                                        <p className="text-xl font-bold">Storage</p>
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Sharding</p>
                                        <p className="text-xl font-bold">SVDB Shards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-20 bg-black text-white p-16 text-center">
                            <p className="text-5xl font-black mb-6">
                                A Complete Intelligent Blockchain
                            </p>
                            <p className="text-2xl text-gray-400">
                                Faster. Smarter. More scalable than any L1.
                            </p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-16 flex flex-wrap justify-center gap-6">
                            <Link
                                href="/core/consensus"
                                className="px-10 py-5 bg-black text-white font-black text-lg uppercase tracking-wider hover:bg-[#8c52ff] transition-all duration-300"
                            >
                                Explore Consensus →
                            </Link>
                            <Link
                                href="/core/dual-vm"
                                className="px-10 py-5 border-4 border-black text-black font-black text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                            >
                                Dual VM Engine →
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
