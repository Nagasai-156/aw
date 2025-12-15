'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Network, GitBranch, Brain, Shield, Cpu, Layers, Database, Zap } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function ArchitecturePage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO */}
            <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-8">
                            ArthaCore Architecture
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
                    >
                        The Living Architecture<br />
                        of an <span className="text-[#8c52ff]">Intelligent Blockchain</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12"
                    >
                        A blockchain that behaves like a living digital organism that is able to learn, scale, heal, and evolve on its own.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="inline-block border-l-4 border-[#8c52ff] pl-8 text-left"
                    >
                        <p className="text-2xl font-bold mb-2">ArthaCore is that organism.</p>
                        <p className="text-lg text-gray-400">
                            It merges AI, Dynamic Sharding, Quantum Security, DAG Ordering,<br />
                            and a Dual VM engine into a single, unified architecture.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-black mb-6">The Philosophy Behind<br />the Architecture</h2>
                            <p className="text-2xl text-[#8c52ff] font-bold">Inspired by Ancient Indian Systems</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-black text-white p-12 mb-12">
                            <p className="text-xl leading-relaxed mb-8">
                                ArthaCore draws inspiration from ancient Indian ideas of distributed learning, self-organization, resilience, identity, and scalable knowledge structures.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    'Distributed learning (Gurukul systems)',
                                    'Self-organization (Vedic principles)',
                                    'Resilience (Kautilya\'s governance)',
                                    'Identity & sovereignty (Upanishadic)',
                                    'Scalable knowledge (Purana systems)',
                                    'Harmony & balance (Natural order)'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="text-[#ffc502]">→</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { color: '#8c52ff', text: 'Every node is sovereign' },
                            { color: '#ffc502', text: 'Every shard grows like a living cell' },
                            { color: '#ff4080', text: 'Every component learns from behavior' },
                            { color: '#8c52ff', text: 'Identity is native, not bolted on' },
                            { color: '#ffc502', text: 'Security is timeless, quantum-proof' },
                            { color: '#ff4080', text: 'Computation flows like water' }
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="border-l-4 pl-6 py-4" style={{ borderLeftColor: item.color }}>
                                    <p className="text-xl font-bold">{item.text}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <div className="mt-12 text-center">
                            <p className="text-3xl font-black">This is the soul of ArthaChain.</p>
                            <p className="text-xl text-gray-600 mt-4">Now the science.</p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* 6 ARCHITECTURAL ORGANS */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-black mb-6">The 6 Architectural Organs</h2>
                            <p className="text-xl text-gray-400">Layers That Behave Like an Intelligent Living System</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-8">
                        {[
                            {
                                num: '1',
                                title: 'The Nervous System',
                                subtitle: 'Networking Layer',
                                icon: Network,
                                color: '#8c52ff',
                                features: [
                                    'QUIC-based low-latency communication',
                                    'libp2p gossip mesh',
                                    'PQC-signed messages',
                                    'Predictive routing for fastest paths',
                                    'Latency-aware peer selection'
                                ],
                                description: 'This layer behaves like neural pathways, constantly adjusting connections based on speed, reliability, and health.'
                            },
                            {
                                num: '2',
                                title: 'The Circulatory System',
                                subtitle: 'DAG Ordering Layer',
                                icon: GitBranch,
                                color: '#ff4080',
                                features: [
                                    'Multi-proposer, multi-path',
                                    'High-throughput vertex creation',
                                    'Dependency-aware ordering',
                                    'Confirmation-based finality',
                                    'Parallel transaction flow'
                                ],
                                description: 'The DAG is how information "flows" into the organism with parallel, multi-threaded processing, never waiting for one leader.'
                            },
                            {
                                num: '3',
                                title: 'The Brain & Consciousness',
                                subtitle: 'AI-Driven Consensus (SVCP)',
                                icon: Brain,
                                color: '#ffc502',
                                features: [
                                    'AI reputation engine',
                                    'Behavior learning',
                                    'Anomaly detection',
                                    'Reliability scoring',
                                    'Self-healing consensus parameters'
                                ],
                                description: 'The consensus layer is not just math. It thinks. It observes node behavior and improves leader selection in real time.'
                            },
                            {
                                num: '4',
                                title: 'The Skeleton & Muscles',
                                subtitle: 'Quantum-SVBFT Finality',
                                icon: Shield,
                                color: '#8c52ff',
                                features: [
                                    'Two-phase deterministic finality',
                                    'Quantum-secure signatures',
                                    'Immutable block commitments',
                                    'Non-reversible confirmation',
                                    'Byzantine fault tolerance'
                                ],
                                description: 'Where AI selects, BFT finalizes as the structure that holds the organism firm and unbreakable.'
                            },
                            {
                                num: '5',
                                title: 'The Organs of Computation',
                                subtitle: 'Dual VM Engine (EVM + WASM)',
                                icon: Cpu,
                                color: '#ff4080',
                                features: [
                                    'EVM → universal compatibility',
                                    'WASM → high-performance execution',
                                    'Unified state management',
                                    'Parallel processing',
                                    'Predictable behavior'
                                ],
                                description: 'Like two hands working on the same task, both share unified state and parallel processing.'
                            },
                            {
                                num: '6',
                                title: 'The Growth System',
                                subtitle: 'Dynamic Sharding',
                                icon: Layers,
                                color: '#ffc502',
                                features: [
                                    'Grow under stress',
                                    'Divide when overloaded',
                                    'Merge when capacity frees',
                                    'Self-balance based on activity',
                                    'Scale infinitely'
                                ],
                                description: 'Sharding isn\'t "architecture." It\'s evolution. Shards behave like biological cells.'
                            }
                        ].map((organ, i) => {
                            const Icon = organ.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white text-black p-10">
                                        <div className="flex items-start gap-6 mb-6">
                                            <div className="w-20 h-20 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: organ.color }}>
                                                <span className="text-4xl font-black text-white">{organ.num}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-3xl font-black mb-2">{organ.title}</h3>
                                                <p className="text-xl font-bold" style={{ color: organ.color }}>{organ.subtitle}</p>
                                            </div>
                                            <Icon className="w-12 h-12" style={{ color: organ.color }} />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                                            {organ.features.map((feature, j) => (
                                                <div key={j} className="flex items-center gap-2 text-sm">
                                                    <span style={{ color: organ.color }}>●</span>
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-lg italic text-gray-600 border-l-4 pl-4" style={{ borderLeftColor: organ.color }}>
                                            {organ.description}
                                        </p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>

                    <StaggerItem>
                        <div className="mt-12 border-4 border-white p-12 text-center">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <Database className="w-12 h-12 text-[#8c52ff]" />
                                <h3 className="text-3xl font-black">The Memory: SVDB</h3>
                            </div>
                            <p className="text-xl mb-6">Sharded Vector Database serving as the "long-term memory" of ArthaChain</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                {['Vector embeddings', 'Identity data', 'AI agent states', 'Large content chunks', 'Merkle manifests', 'Persistent storage'].map((item, i) => (
                                    <div key={i} className="text-sm">• {item}</div>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* THE ARCHITECTURAL CYCLE */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-black mb-6">The Architectural Cycle</h2>
                            <p className="text-2xl text-gray-600">The Flow of Intelligence</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <p className="text-xl text-center mb-12 text-gray-600">
                            Every transaction moves through the organism like a pulse of energy.
                        </p>
                    </StaggerItem>

                    <div className="space-y-6">
                        {[
                            { step: '1', label: 'Sensed', desc: 'Received by Networking (Nervous System)', color: '#8c52ff' },
                            { step: '2', label: 'Interpreted', desc: 'Placed into DAG (Circulation)', color: '#ff4080' },
                            { step: '3', label: 'Evaluated', desc: 'Ranked by AI (Brain)', color: '#ffc502' },
                            { step: '4', label: 'Decided', desc: 'Finalized by BFT (Structure)', color: '#8c52ff' },
                            { step: '5', label: 'Executed', desc: 'Run on Dual VM (Muscle)', color: '#ff4080' },
                            { step: '6', label: 'Stored', desc: 'Committed to State + SVDB (Memory)', color: '#ffc502' },
                            { step: '7', label: 'Learned', desc: 'Feeds into AI Reputation Engine (Growth)', color: '#8c52ff' }
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="flex items-center gap-6 bg-black text-white p-8">
                                    <div className="w-16 h-16 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color }}>
                                        <span className="text-2xl font-black">{item.step}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-1">{item.label}</h4>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <div className="mt-12 text-center bg-black text-white p-12">
                            <p className="text-3xl font-black">
                                This cycle repeats <span className="text-[#ffc502]">millions of times per second</span> across thousands of nodes.
                            </p>
                            <p className="text-xl mt-4 text-gray-400">ArthaChain becomes stronger the more it is used.</p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* WHY UNIQUE - REDESIGNED */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-8xl font-black mb-6">What Makes This Unique</h2>
                            <p className="text-2xl text-gray-400">6 innovations no other blockchain has achieved</p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                num: '01',
                                color: '#8c52ff',
                                title: 'AI-Native Protocol',
                                subtitle: 'Intelligence at every layer',
                                points: [
                                    'Leader selection powered by AI',
                                    'Network routing optimization',
                                    'Shard load balancing',
                                    'Real-time anomaly detection',
                                    'Consensus behavior adaptation'
                                ]
                            },
                            {
                                num: '02',
                                color: '#ff4080',
                                title: 'Living Shard Systems',
                                subtitle: 'Dynamic, self-organizing partitions',
                                points: [
                                    'Cell-like division & merging',
                                    'Predictive load analysis',
                                    'Cross-shard intelligence',
                                    'Auto-healing mechanisms',
                                    'No static committees'
                                ]
                            },
                            {
                                num: '03',
                                color: '#ffc502',
                                title: 'First-Class Identity',
                                subtitle: 'DID as a core primitive',
                                points: [
                                    'W3C DID compliance',
                                    'Post-quantum keypairs',
                                    'Biometric embeddings',
                                    'AI agent identities',
                                    'Verifiable credentials'
                                ]
                            },
                            {
                                num: '04',
                                color: '#8c52ff',
                                title: 'Universal Quantum Security',
                                subtitle: '30 years ahead',
                                points: [
                                    'Every account PQC-enabled',
                                    'Not just validators',
                                    'Dilithium signatures',
                                    'Kyber key exchange',
                                    'Future-proof cryptography'
                                ]
                            },
                            {
                                num: '05',
                                color: '#ff4080',
                                title: 'True Parallel Execution',
                                subtitle: 'Built for multi-core reality',
                                points: [
                                    'Dual VM architecture',
                                    'Segmented execution',
                                    '10,000 TPS per shard',
                                    'Infinite global TPS',
                                    'Real-time compute'
                                ]
                            },
                            {
                                num: '06',
                                color: '#ffc502',
                                title: 'Vector-Native Storage',
                                subtitle: 'Blockchain meets AI',
                                points: [
                                    'Embeddings as primitives',
                                    'AI memory storage',
                                    'Semantic search',
                                    'Digital identity vectors',
                                    'Beyond key-value stores'
                                ]
                            }
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div
                                    className="group bg-white text-black p-10 h-full hover:scale-105 transition-all duration-300 border-l-8"
                                    style={{ borderLeftColor: item.color }}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className="w-20 h-20 flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: item.color }}
                                        >
                                            <span className="text-4xl font-black text-white">{item.num}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-black mb-1" style={{ color: item.color }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-sm uppercase tracking-wider text-gray-600 font-bold">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {item.points.map((point, j) => (
                                            <div key={j} className="flex items-start gap-3">
                                                <span className="text-2xl mt-1" style={{ color: item.color }}>→</span>
                                                <p className="text-lg leading-relaxed">{point}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* ARCHITECTURAL FLOW VISUALIZATION */}
            <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-black mb-4 text-white">The Complete System</h2>
                            <p className="text-xl text-gray-400">Architectural Flow Visualization</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="relative">
                            {/* 1. Networking Layer */}
                            <div className="flex flex-col items-center mb-6">
                                <div className="w-full max-w-lg bg-[#8c52ff] text-white p-8 text-center border-4 border-[#8c52ff]">
                                    <Network className="w-12 h-12 mx-auto mb-4" />
                                    <h3 className="text-2xl font-black mb-2">Networking Layer</h3>
                                    <p className="text-sm opacity-90">Neural Pathways: QUIC</p>
                                </div>
                                <div className="w-1 h-12 bg-[#8c52ff]"></div>
                                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-[#8c52ff]"></div>
                            </div>

                            {/* 2. DAG Ordering */}
                            <div className="flex flex-col items-center mb-6">
                                <div className="w-full max-w-lg bg-[#ff4080] text-white p-8 text-center border-4 border-[#ff4080]">
                                    <GitBranch className="w-12 h-12 mx-auto mb-4" />
                                    <h3 className="text-2xl font-black mb-2">DAG Ordering</h3>
                                    <p className="text-sm opacity-90">Circulatory Information</p>
                                </div>
                                <div className="w-1 h-12 bg-[#ff4080]"></div>
                                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-[#ff4080]"></div>
                            </div>

                            {/* 3. SVCP + AI Brain */}
                            <div className="flex flex-col items-center mb-6">
                                <div className="w-full bg-[#ffc502] text-black p-10 text-center border-4 border-[#ffc502]">
                                    <Brain className="w-14 h-14 mx-auto mb-4" />
                                    <h3 className="text-3xl font-black mb-2">SVCP + AI Behavior Engine</h3>
                                    <p className="text-sm font-bold">Brain: Perception, Evaluation, Selection</p>
                                </div>

                                {/* Split into two paths */}
                                <div className="w-1 h-12 bg-[#ffc502]"></div>
                                <div className="relative w-full h-20">
                                    {/* Left path */}
                                    <div className="absolute left-1/4 top-0 flex flex-col items-center">
                                        <div className="w-1 h-12 bg-[#ffc502]"></div>
                                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#ffc502]"></div>
                                    </div>
                                    {/* Right path */}
                                    <div className="absolute right-1/4 top-0 flex flex-col items-center">
                                        <div className="w-1 h-12 bg-[#ffc502]"></div>
                                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#ffc502]"></div>
                                    </div>
                                    {/* Horizontal connector */}
                                    <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-[#ffc502]"></div>
                                </div>
                            </div>

                            {/* 4. Dual Path: EVM + Finality + WASM */}
                            <div className="grid grid-cols-2 gap-12 mb-6">
                                {/* Left Path: EVM */}
                                <div className="flex flex-col items-center">
                                    <div className="w-full bg-[#8c52ff] text-white p-8 text-center border-4 border-[#8c52ff]">
                                        <Cpu className="w-10 h-10 mx-auto mb-3" />
                                        <h3 className="text-xl font-black mb-1">EVM Engine</h3>
                                        <p className="text-xs opacity-90">Left Brain</p>
                                    </div>
                                    <div className="w-1 h-16 bg-[#8c52ff]"></div>
                                    <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#8c52ff]"></div>
                                </div>

                                {/* Right Path: Finality → WASM */}
                                <div className="flex flex-col items-center">
                                    {/* Quantum-SVBFT */}
                                    <div className="w-full bg-black text-white p-6 text-center border-4 border-black mb-4">
                                        <Shield className="w-10 h-10 mx-auto mb-3" />
                                        <h3 className="text-lg font-black mb-1">Quantum-SVBFT</h3>
                                        <p className="text-xs opacity-90">Structural Core</p>
                                    </div>
                                    <div className="w-1 h-8 bg-black"></div>
                                    <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-black mb-4"></div>

                                    {/* WASM */}
                                    <div className="w-full bg-[#ff4080] text-white p-8 text-center border-4 border-[#ff4080]">
                                        <Zap className="w-10 h-10 mx-auto mb-3" />
                                        <h3 className="text-xl font-black mb-1">WASM Engine</h3>
                                        <p className="text-xs opacity-90">Right Brain</p>
                                    </div>
                                    <div className="w-1 h-16 bg-[#ff4080]"></div>
                                    <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#ff4080]"></div>
                                </div>
                            </div>

                            {/* Merge paths back together */}
                            <div className="relative w-full h-20 mb-6">
                                {/* Left merge line */}
                                <div className="absolute left-1/4 top-0 w-1 h-12 bg-gray-400"></div>
                                {/* Right merge line */}
                                <div className="absolute right-1/4 top-0 w-1 h-12 bg-gray-400"></div>
                                {/* Horizontal connector */}
                                <div className="absolute top-12 left-1/4 right-1/4 h-1 bg-gray-400"></div>
                                {/* Center down arrow */}
                                <div className="absolute left-1/2 -ml-0.5 top-12 flex flex-col items-center">
                                    <div className="w-1 h-8 bg-gray-400"></div>
                                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-gray-400"></div>
                                </div>
                            </div>

                            {/* 5. State / SVDB */}
                            <div className="flex flex-col items-center mb-6">
                                <div className="w-full max-w-lg bg-black text-white p-8 text-center border-4 border-black">
                                    <Database className="w-12 h-12 mx-auto mb-4" />
                                    <h3 className="text-2xl font-black mb-2">State / SVDB</h3>
                                    <p className="text-sm opacity-90">Memory Layer</p>
                                </div>
                                <div className="w-1 h-12 bg-black"></div>
                                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-black"></div>
                            </div>

                            {/* 6. Dynamic Sharding */}
                            <div className="flex flex-col items-center">
                                <div className="w-full max-w-lg bg-[#ffc502] text-black p-8 text-center border-4 border-[#ffc502]">
                                    <Layers className="w-12 h-12 mx-auto mb-4" />
                                    <h3 className="text-2xl font-black mb-2">Dynamic Sharding</h3>
                                    <p className="text-sm font-bold">Growth System</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-16 text-center">
                            <p className="text-xl text-gray-400 italic">
                                A living, breathing architecture flowing from input to execution to infinite growth
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section >

            {/* SUMMARY */}
            < section className="py-24 px-6 bg-black text-white relative" >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-black mb-6">What Makes ArthaChain's<br />Architecture "Artha"</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {[
                            'It behaves like a living network',
                            'It grows and adapts',
                            'It learns and optimizes',
                            'It protects itself',
                            'It scales endlessly',
                            'It unites AI, identity, and blockchain',
                            'Uniquely Indian in philosophy',
                            'Globally advanced in design'
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full border-2 border-[#ffc502] flex items-center justify-center flex-shrink-0">
                                        <span className="text-[#ffc502] font-black">{i + 1}</span>
                                    </div>
                                    <span className="text-xl">{item}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <div className="border-4 border-[#8c52ff] p-12 text-center mb-16">
                            <p className="text-4xl font-black mb-4">
                                ArthaCore is not just architecture.
                            </p>
                            <p className="text-3xl text-[#8c52ff]">
                                It is the blueprint of a new digital civilization.
                            </p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="/core/consensus"
                                className="group px-8 py-4 bg-[#8c52ff] text-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
                            >
                                Explore Consensus
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/core/dual-vm"
                                className="group px-8 py-4 border-4 border-white text-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
                            >
                                Dual VM Engine
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
