'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileText, Download, CheckCircle, XCircle } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function ProtocolPaperPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - Academic Header */}
            <section className="relative bg-black text-white py-32 px-6">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-12">
                            <p className="text-sm uppercase tracking-[0.3em] mb-4 text-gray-400">Technical Documentation</p>
                            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                                ArthaChain<br />Protocol Paper
                            </h1>
                            <div className="flex flex-wrap gap-6 text-lg mb-12">
                                <p>Version 1.0</p>
                                <p className="text-gray-400">•</p>
                                <p>December 2025</p>
                                <p className="text-gray-400">•</p>
                                <p>Diigoo Tech Private Limited</p>
                            </div>
                        </div>

                        <div className="bg-white text-black p-12">
                            <p className="text-sm uppercase tracking-wider mb-4 font-black">Abstract</p>
                            <p className="text-xl leading-relaxed">
                                ArthaChain is a next-generation Layer-1 blockchain designed to dissolve the blockchain trilemma through a novel hybrid consensus model combining <span className="font-bold">AI-based leader selection (SVCP)</span> and <span className="font-bold">quantum-secure deterministic finality (Quantum-SVBFT)</span>.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-wider hover:bg-[#8c52ff] hover:text-white transition-all duration-300 flex items-center gap-3">
                                <Download className="w-5 h-5" />
                                Download PDF
                            </button>
                            <button className="px-8 py-4 border-2 border-white text-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                                View on GitHub
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* KEY FEATURES - Grid */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-black mb-6">Core Capabilities</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-1 bg-black">
                        {[
                            'Infinite horizontal scalability',
                            'Sub-second finality',
                            'AI-native execution',
                            'Quantum resistance',
                            'Sybil immunity',
                            'Zero staking',
                            'Linear scaling (10K → millions TPS)',
                            'Open validator onboarding'
                        ].map((feature, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white p-8 flex items-center gap-4">
                                    <CheckCircle className="w-8 h-8 text-[#8c52ff] flex-shrink-0" />
                                    <p className="text-lg font-bold">{feature}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* TRILEMMA COMPARISON */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-black mb-6">Solving the Trilemma</h2>
                            <p className="text-2xl text-gray-400">Most chains solve only two. ArthaChain solves all three.</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-white text-black p-12">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-black">
                                            <th className="text-left py-4 px-4 font-black text-xl">Chain</th>
                                            <th className="text-center py-4 px-4 font-black text-xl">Scalability</th>
                                            <th className="text-center py-4 px-4 font-black text-xl">Security</th>
                                            <th className="text-center py-4 px-4 font-black text-xl">Decentralization</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { chain: 'Bitcoin', scalability: false, security: true, decentralization: true },
                                            { chain: 'Ethereum', scalability: false, security: true, decentralization: true },
                                            { chain: 'Solana', scalability: true, security: true, decentralization: false },
                                            { chain: 'Aptos/Sui', scalability: true, security: false, decentralization: false },
                                            { chain: 'ArthaChain', scalability: true, security: true, decentralization: true, highlight: true }
                                        ].map((row, i) => (
                                            <tr key={i} className={`border-b border-gray-200 ${row.highlight ? 'bg-[#ffc502]' : ''}`}>
                                                <td className={`py-4 px-4 font-bold text-lg ${row.highlight ? 'font-black' : ''}`}>{row.chain}</td>
                                                <td className="py-4 px-4 text-center">
                                                    {row.scalability ?
                                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" /> :
                                                        <XCircle className="w-6 h-6 text-red-600 mx-auto" />
                                                    }
                                                </td>
                                                <td className="py-4 px-4 text-center">
                                                    {row.security ?
                                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" /> :
                                                        <XCircle className="w-6 h-6 text-red-600 mx-auto" />
                                                    }
                                                </td>
                                                <td className="py-4 px-4 text-center">
                                                    {row.decentralization ?
                                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" /> :
                                                        <XCircle className="w-6 h-6 text-red-600 mx-auto" />
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* ARCHITECTURE LAYERS */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-black mb-6">Four-Layer Architecture</h2>
                        </div>
                    </StaggerItem>

                    <div className="space-y-1">
                        {[
                            { num: '01', title: 'Consensus Layer', desc: 'Hybrid SVCP + Quantum-SVBFT', color: '#8c52ff' },
                            { num: '02', title: 'Execution Layer', desc: 'Dual-VM (EVM + WASM) with parallel lanes, DAG-assisted', color: '#ff4080' },
                            { num: '03', title: 'Scalability Layer', desc: 'Dynamic Account Sharding + Hybrid DAG Ordering', color: '#ffc502' },
                            { num: '04', title: 'Security Layer', desc: 'PQ-crypto, ZK-proofs, AI anomaly detection, shard protections', color: '#8c52ff' }
                        ].map((layer, i) => (
                            <StaggerItem key={i}>
                                <div className="grid md:grid-cols-12 gap-0 bg-black text-white">
                                    <div className="md:col-span-2 flex items-center justify-center p-8" style={{ backgroundColor: layer.color }}>
                                        <span className="text-6xl font-black text-white">{layer.num}</span>
                                    </div>
                                    <div className="md:col-span-10 p-8">
                                        <h3 className="text-3xl font-black mb-3" style={{ color: layer.color }}>{layer.title}</h3>
                                        <p className="text-xl text-gray-300">{layer.desc}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* TECHNICAL SPECS - Bento Grid */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-black mb-6">Technical Specifications</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { label: 'TPS per Shard', value: '10,000+', color: '#8c52ff' },
                            { label: 'Finality Time', value: '1.5s', color: '#ff4080' },
                            { label: 'Latency', value: '200-800ms', color: '#ffc502' },
                            { label: 'Validator Sync', value: 'Minutes', color: '#8c52ff' },
                            { label: 'Shard Split Time', value: 'Sub-second', color: '#ff4080' },
                            { label: 'Reorg Probability', value: '0%', color: '#ffc502' }
                        ].map((spec, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white text-black p-10 text-center">
                                    <p className="text-6xl font-black mb-4" style={{ color: spec.color }}>{spec.value}</p>
                                    <p className="text-lg font-bold">{spec.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* COMPETITOR COMPARISON */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-black mb-6">Competitive Landscape</h2>
                            <p className="text-2xl text-gray-600">ArthaChain vs. The Industry</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-16">
                        {[
                            {
                                category: 'Regular L1 Blockchains',
                                examples: 'Ethereum, Solana, Avalanche, NEAR',
                                color: '#8c52ff'
                            },
                            {
                                category: 'DePIN Compute Networks',
                                examples: 'Akash, Render, Aethir, io.net',
                                color: '#ff4080'
                            },
                            {
                                category: 'AI-Focused Blockchains',
                                examples: 'Bittensor, Gensyn, Fetch.ai, SingularityNET',
                                color: '#ffc502'
                            },
                            {
                                category: 'Centralized GPU Clouds',
                                examples: 'AWS, Google Cloud, Azure, CoreWeave',
                                color: '#8c52ff'
                            }
                        ].map((segment, i) => (
                            <StaggerItem key={i}>
                                <div className="border-4 border-black p-12">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-16 h-16 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: segment.color }}>
                                            <span className="text-3xl font-black text-white">{i + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-black mb-2" style={{ color: segment.color }}>{segment.category}</h3>
                                            <p className="text-gray-600">{segment.examples}</p>
                                        </div>
                                    </div>

                                    <div className="bg-black text-white p-8">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <p className="text-sm uppercase tracking-wider mb-4 text-gray-400">Their Weaknesses</p>
                                                <div className="space-y-2">
                                                    {i === 0 && ['Not AI-native', 'No quantum security', 'Limited scalability'].map((w, j) => (
                                                        <p key={j} className="flex items-center gap-2">
                                                            <XCircle className="w-4 h-4 text-red-500" />
                                                            <span className="text-sm">{w}</span>
                                                        </p>
                                                    ))}
                                                    {i === 1 && ['Not L1 blockchains', 'No consensus innovation', 'Just GPU rental'].map((w, j) => (
                                                        <p key={j} className="flex items-center gap-2">
                                                            <XCircle className="w-4 h-4 text-red-500" />
                                                            <span className="text-sm">{w}</span>
                                                        </p>
                                                    ))}
                                                    {i === 2 && ['Platforms, not blockchains', 'Rely on other chains', 'No native execution'].map((w, j) => (
                                                        <p key={j} className="flex items-center gap-2">
                                                            <XCircle className="w-4 h-4 text-red-500" />
                                                            <span className="text-sm">{w}</span>
                                                        </p>
                                                    ))}
                                                    {i === 3 && ['Fully centralized', 'User lock-in', 'Not censorship resistant'].map((w, j) => (
                                                        <p key={j} className="flex items-center gap-2">
                                                            <XCircle className="w-4 h-4 text-red-500" />
                                                            <span className="text-sm">{w}</span>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm uppercase tracking-wider mb-4 text-[#ffc502]">ArthaChain Advantage</p>
                                                <div className="space-y-2">
                                                    {['AI-native execution', 'Quantum security', 'Infinite scalability'].map((a, j) => (
                                                        <p key={j} className="flex items-center gap-2">
                                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                                            <span className="text-sm">{a}</span>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* POSITIONING DIAGRAM */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-black mb-6">Market Positioning</h2>
                            <p className="text-2xl text-gray-400">The convergence of four categories</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="space-y-8">
                            {[
                                { label: 'Central Clouds', sub: 'High Compute, Centralized', color: '#666' },
                                { label: 'AI Chains', sub: 'AI-focused, no chain infra', color: '#888' },
                                { label: 'DePIN', sub: 'Compute networks, not blockchains', color: '#aaa' },
                                { label: 'L1 Blockchains', sub: 'Smart contracts, no AI infra', color: '#ccc' }
                            ].map((tier, i) => (
                                <div key={i}>
                                    <div className="bg-white text-black p-8 text-center" style={{ opacity: 1 - (i * 0.15) }}>
                                        <p className="text-2xl font-black mb-2">{tier.label}</p>
                                        <p className="text-sm text-gray-600">{tier.sub}</p>
                                    </div>
                                    {i < 3 && (
                                        <div className="flex justify-center py-4">
                                            <div className="text-4xl text-gray-600">↓</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-12 bg-[#ffc502] text-black p-16 text-center">
                            <h3 className="text-5xl font-black mb-8">ARTHACHAIN</h3>
                            <p className="text-2xl font-bold mb-8">The convergence of all four categories</p>
                            <div className="grid md:grid-cols-2 gap-4 text-lg">
                                {[
                                    'AI-first L1',
                                    'Infinite scaling',
                                    'PQC security',
                                    'Vector DB',
                                    'Dual VM',
                                    'DID Identity',
                                    'AI Consensus',
                                    'Decentralized compute'
                                ].map((feature, i) => (
                                    <p key={i} className="font-bold">✓ {feature}</p>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-16 text-center">
                            <p className="text-4xl font-black mb-4">ArthaChain ≠ Blockchain</p>
                            <p className="text-3xl">ArthaChain = A decentralized, intelligent,<br />quantum-secure global compute fabric</p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* CONCLUSION */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="bg-black text-white p-16 text-center mb-16">
                            <h2 className="text-5xl font-black mb-8">The Foundation of the Intelligent Internet</h2>
                            <p className="text-2xl leading-relaxed max-w-4xl mx-auto">
                                ArthaChain enables decentralized AI agents, real-time applications, massive user adoption, and trustless global systems with sub-second speed.
                            </p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="/core/consensus"
                                className="px-10 py-5 bg-black text-white font-black text-lg uppercase tracking-wider hover:bg-[#8c52ff] transition-all duration-300"
                            >
                                Explore Consensus →
                            </Link>
                            <Link
                                href="/core/security"
                                className="px-10 py-5 border-4 border-black text-black font-black text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                            >
                                Security Model →
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
