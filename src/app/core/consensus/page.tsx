'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, Zap, Cpu, Network, Lock, Gauge, GitBranch, Layers } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function ConsensusPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - Bold Statement */}
            <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-7xl md:text-9xl font-black mb-12 leading-tight">
                            Quantum-SVBFT<br />
                            <span className="text-[#8c52ff]">with SVCP Selection</span>
                        </h1>
                        <p className="text-3xl md:text-4xl font-bold mb-16 max-w-4xl mx-auto leading-tight">
                            Intelligence selects.<br />
                            Quantum secures.
                        </p>
                        <div className="inline-block border-4 border-white p-12">
                            <p className="text-2xl font-bold">
                                No other L1 uses this model.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* THE PROBLEM - Large Text Block */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20">
                            <h2 className="text-6xl md:text-7xl font-black mb-12">Why Hybrid Consensus?</h2>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-black text-white p-16 mb-12">
                            <p className="text-3xl font-bold mb-8">Most blockchains force one mechanism to do everything:</p>
                            <div className="grid md:grid-cols-2 gap-8 text-xl">
                                <div>Choose the leader</div>
                                <div>Produce the block</div>
                                <div>Secure finality</div>
                                <div>Prevent attacks</div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="text-center mb-12">
                            <div className="text-8xl font-black mb-8">↓</div>
                            <p className="text-4xl font-black">ArthaChain separates these roles</p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-1 bg-black">
                        <StaggerItem>
                            <div className="bg-white p-16 border-l-8 border-[#8c52ff]">
                                <Brain className="w-20 h-20 text-[#8c52ff] mb-6" />
                                <h3 className="text-4xl font-black mb-4 text-[#8c52ff]">SVCP = The Brain</h3>
                                <p className="text-xl">Ensures fairness, performance, and decentralization.</p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-white p-16 border-l-8 border-[#ff4080]">
                                <Shield className="w-20 h-20 text-[#ff4080] mb-6" />
                                <h3 className="text-4xl font-black mb-4 text-[#ff4080]">Quantum-SVBFT = The Skeleton</h3>
                                <p className="text-xl">Ensures unbreakable finality and security.</p>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* BENEFITS - Icon Grid */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-black mb-6">This Dual System Gives ArthaChain</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-1 bg-white">
                        {[
                            'Infinite scalability',
                            'Sub-second finality',
                            'Zero staking',
                            'Zero mining wastage',
                            'Quantum resistance',
                            'Full decentralization'
                        ].map((benefit, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-black p-10 h-full flex items-center justify-center text-center">
                                    <p className="text-2xl font-black">{benefit}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* PHASE 1 - SVCP - Full Width Feature */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="text-9xl font-black text-[#8c52ff]">1</div>
                                <div>
                                    <h2 className="text-6xl md:text-7xl font-black mb-4">SVCP</h2>
                                    <p className="text-3xl text-gray-600">AI Selector Layer</p>
                                </div>
                            </div>
                            <p className="text-2xl font-bold">Scalable Virtual Consensus Protocol</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-black text-white p-16 mb-16">
                            <p className="text-3xl font-bold mb-4">SVCP is not PoW or PoS.</p>
                            <p className="text-2xl text-gray-400">It is a Proof of Computation + Behavior system powered by AI.</p>
                        </div>
                    </StaggerItem>

                    {/* NodeScore */}
                    <StaggerItem>
                        <div className="mb-16">
                            <div className="bg-[#8c52ff] text-white p-12 mb-8">
                                <h3 className="text-4xl font-black mb-6">NodeScore: The Heart of SVCP</h3>
                                <p className="text-xl">Every node receives an AI-generated score (0.0 – 1.0)</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Device Health', desc: 'CPU/RAM, stability' },
                                    { title: 'Network Quality', desc: 'Latency, uptime' },
                                    { title: 'Storage Reliability', desc: 'SVDB integrity' },
                                    { title: 'Engagement', desc: 'Vote participation' },
                                    { title: 'AI Behavior Score', desc: 'Patterns, honesty' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-black text-white p-8">
                                        <h4 className="text-xl font-black mb-2 text-[#8c52ff]">{item.title}</h4>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Weighted Lottery */}
                    <StaggerItem>
                        <div className="mb-16">
                            <div className="border-l-8 border-[#8c52ff] pl-8 mb-8">
                                <h3 className="text-4xl font-black mb-4">Weighted Lottery: Leader Selection</h3>
                            </div>

                            <div className="bg-black text-white p-12">
                                <div className="space-y-6 text-xl">
                                    <p>Nodes above score threshold become Proposer Candidates</p>
                                    <p>Weighted randomness algorithm selects the leader</p>
                                    <p className="text-[#ffc502] font-bold">Higher NodeScore = Higher probability</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                {[
                                    'No rich validator dominance',
                                    'No stake-based corruption',
                                    'No GPU/ASIC advantage',
                                    'Full fairness'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 border-2 border-black">
                                        <div className="w-8 h-8 bg-[#8c52ff] rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-black text-sm">{i + 1}</span>
                                        </div>
                                        <p className="text-lg font-bold">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-[#ffc502] text-black p-12 text-center">
                            <p className="text-3xl font-black">
                                A Raspberry Pi with perfect uptime can outperform a malicious supercomputer.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* PHASE 2 - QUANTUM-SVBFT */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="text-9xl font-black text-[#ff4080]">2</div>
                                <div>
                                    <h2 className="text-6xl md:text-7xl font-black mb-4">Quantum-SVBFT</h2>
                                    <p className="text-3xl text-gray-400">Finality Layer</p>
                                </div>
                            </div>
                            <p className="text-2xl font-bold">Quantum Secure Verifiable Byzantine Fault Tolerance</p>
                        </div>
                    </StaggerItem>

                    {/* 3-Phase Commit */}
                    <StaggerItem>
                        <div className="mb-16">
                            <h3 className="text-4xl font-black mb-12 text-center">Deterministic 3-Phase Commit</h3>

                            <div className="space-y-8">
                                {[
                                    {
                                        phase: 'PREPARE',
                                        color: '#8c52ff',
                                        steps: [
                                            'Validator checks block validity',
                                            'Validates PQC signature',
                                            'Broadcasts PREPARE vote'
                                        ]
                                    },
                                    {
                                        phase: 'PRE-COMMIT',
                                        color: '#ff4080',
                                        steps: [
                                            'Validators confirm +2/3 PREPARE',
                                            'Broadcast PRE-COMMIT vote'
                                        ]
                                    },
                                    {
                                        phase: 'COMMIT',
                                        color: '#ffc502',
                                        steps: [
                                            'Validators lock the block',
                                            'Block becomes PERMANENT & IRREVERSIBLE'
                                        ]
                                    }
                                ].map((phase, i) => (
                                    <div key={i}>
                                        <div className="bg-white text-black p-10 border-l-8" style={{ borderLeftColor: phase.color }}>
                                            <h4 className="text-3xl font-black mb-6" style={{ color: phase.color }}>
                                                {phase.phase}
                                            </h4>
                                            <div className="space-y-3">
                                                {phase.steps.map((step, j) => (
                                                    <p key={j} className="text-lg flex items-start gap-3">
                                                        <span style={{ color: phase.color }}>→</span>
                                                        <span>{step}</span>
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                        {i < 2 && (
                                            <div className="flex justify-center py-4">
                                                <div className="text-5xl font-black" style={{ color: phase.color }}>↓</div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-white text-black p-12 text-center">
                            <p className="text-3xl font-black">
                                Absolute finality, not probabilistic like Bitcoin.
                            </p>
                        </div>
                    </StaggerItem>

                    {/* Quantum Resistant */}
                    <StaggerItem>
                        <div className="mt-20 mb-16">
                            <div className="bg-[#ff4080] text-white p-12 mb-8">
                                <h3 className="text-4xl font-black mb-6">Quantum-Resistant Security</h3>
                                <p className="text-xl">Every vote, signature, and consensus message uses:</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                {[
                                    'Dilithium (post-quantum)',
                                    'ML-DSA',
                                    'Hybrid Ed25519 + PQC'
                                ].map((tech, i) => (
                                    <div key={i} className="bg-white text-black p-8 text-center">
                                        <p className="text-xl font-black">{tech}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white text-black p-12">
                                <p className="text-2xl font-bold mb-8 text-center">Even a future quantum computer cannot:</p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        'Forge validator signatures',
                                        'Rewrite history',
                                        'Steal accounts',
                                        'Break message authentication'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <span className="text-4xl text-red-600">✗</span>
                                            <p className="text-lg">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* THE PIPELINE - Visual Flow */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black mb-6">The Brain–Skeleton Pipeline</h2>
                            <p className="text-2xl text-gray-600">End-to-end consensus flow</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="space-y-8">
                            <div className="bg-black text-white p-10 text-center">
                                <p className="text-2xl font-bold">User Transaction</p>
                            </div>

                            <div className="flex justify-center">
                                <div className="text-6xl font-black text-gray-400">↓</div>
                            </div>

                            <div className="bg-[#8c52ff] text-white p-12">
                                <h3 className="text-3xl font-black mb-6">AI Brain – SVCP</h3>
                                <p className="text-xl">Analyze → Score → Select Leader → Parallel Block Build</p>
                            </div>

                            <div className="flex justify-center">
                                <div className="text-6xl font-black text-gray-400">↓</div>
                            </div>

                            <div className="bg-[#ff4080] text-white p-12">
                                <h3 className="text-3xl font-black mb-6">Skeleton – Quantum-SVBFT</h3>
                                <p className="text-xl">Prepare → Pre-Commit → Commit → FINALITY</p>
                            </div>

                            <div className="flex justify-center">
                                <div className="text-6xl font-black text-gray-400">↓</div>
                            </div>

                            <div className="bg-black text-white p-10 text-center">
                                <p className="text-2xl font-bold">State Applied (EVM/WASM)</p>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-16 bg-[#ffc502] text-black p-12 text-center">
                            <p className="text-3xl font-black">
                                Entire flow finishes in sub-second time under load.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* TRILEMMA SOLUTION */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black mb-6">Solving the Blockchain Trilemma</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-1 bg-white">
                        {[
                            {
                                title: 'Scalability',
                                color: '#ffc502',
                                items: [
                                    'Multi-proposer parallel',
                                    'DAG ordering',
                                    'Shard-aware execution',
                                    'AI traffic prediction'
                                ]
                            },
                            {
                                title: 'Security',
                                color: '#8c52ff',
                                items: [
                                    'Quantum-resistant signatures',
                                    'Deterministic finality',
                                    'Behavior-based slashing',
                                    'Two-layer separation'
                                ]
                            },
                            {
                                title: 'Decentralization',
                                color: '#ff4080',
                                items: [
                                    'No staking',
                                    'No wealth concentration',
                                    'No hardware dominance',
                                    'Anyone can run a node'
                                ]
                            }
                        ].map((pillar, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-black p-12 h-full">
                                    <h3 className="text-4xl font-black mb-8" style={{ color: pillar.color }}>
                                        {pillar.title}
                                    </h3>
                                    <div className="space-y-4">
                                        {pillar.items.map((item, j) => (
                                            <p key={j} className="text-lg flex items-start gap-3">
                                                <span style={{ color: pillar.color }}>→</span>
                                                <span>{item}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* FINAL SUMMARY */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="bg-black text-white p-16 mb-16 text-center">
                            <h2 className="text-5xl md:text-6xl font-black mb-12">
                                SVCP (AI Selection)<br />
                                <span className="text-[#ffc502]">+</span><br />
                                Quantum-SVBFT (Finality)
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {[
                            'Solves Trilemma',
                            'Quantum secure',
                            'Infinitely scalable',
                            'Fully decentralized',
                            'No staking, no mining',
                            'Parallel & shard-native',
                            'Sub-second finality'
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-black text-white p-8 text-center h-full flex items-center justify-center">
                                    <p className="text-xl font-bold">{item}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="/core/papers"
                                className="px-10 py-5 bg-black text-white font-black text-lg uppercase tracking-wider hover:bg-[#8c52ff] transition-all duration-300"
                            >
                                Read Consensus Paper →
                            </Link>
                            <Link
                                href="/core/dual-vm"
                                className="px-10 py-5 border-4 border-black text-black font-black text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                            >
                                Dual VM System →
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
