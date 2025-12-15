'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Shield, Network, Code2, Brain, Fingerprint, Database, Zap, Lock, Server, Globe, Layers, CheckCircle2 } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function TechnologyPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* SECTION 1: HERO */}
            <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-8">
                            Technology
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
                    >
                        Built to <span className="text-[#8c52ff]">Think</span>,<br />
                        <span className="text-[#ff4080]">Scale</span>, and <span className="text-[#ffc502]">Secure</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto font-medium leading-relaxed"
                    >
                        ArthaChain introduces a new paradigm: <span className="text-white font-bold">AI-powered consensus</span>, <span className="text-[#ffc502] font-bold">post-quantum cryptography</span>, and <span className="text-[#ff4080] font-bold">limitless horizontal scaling</span>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Designed for the autonomous world. Engineered for limitless scale.
                    </motion.p>
                </div>
            </section>

            {/* SECTION 2: HIGH-LEVEL ARCHITECTURE */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Architecture
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-6">
                                Four Layers, <span className="text-[#8c52ff]">One System</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Every layer works together to deliver speed, security, and intelligence at global scale.
                            </p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-4">
                        {[
                            { num: '1', title: 'Consensus Layer', subtitle: 'SVCP + AI Engine', desc: 'Security, ordering, trust, and self-healing', color: '#8c52ff', icon: Shield },
                            { num: '2', title: 'Execution Layer', subtitle: 'Dual VM (EVM + WASM)', desc: 'Smart contract logic with parallel processing', color: '#ff4080', icon: Code2 },
                            { num: '3', title: 'Scalability Layer', subtitle: 'Hybrid DAG + Adaptive Sharding', desc: 'Infinite horizontal expansion', color: '#ffc502', icon: Network },
                            { num: '4', title: 'Intelligence Layer', subtitle: 'DID + SVDB', desc: 'Decentralized identity + vector storage for AI', color: '#8c52ff', icon: Brain }
                        ].map((layer, i) => {
                            const Icon = layer.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="group flex items-center gap-6 p-6 bg-gray-50 border-l-4 hover:bg-black hover:text-white transition-all duration-300" style={{ borderLeftColor: layer.color }}>
                                        <span className="text-5xl font-black" style={{ color: layer.color }}>{layer.num}</span>
                                        <Icon className="w-10 h-10 flex-shrink-0" style={{ color: layer.color }} />
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-black">{layer.title}</h3>
                                            <p className="text-sm uppercase tracking-widest" style={{ color: layer.color }}>{layer.subtitle}</p>
                                        </div>
                                        <p className="text-gray-600 group-hover:text-gray-300 hidden md:block max-w-xs">{layer.desc}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>

                    <StaggerItem>
                        <p className="text-center text-2xl font-black mt-12">
                            One unified system that <span className="text-[#8c52ff]">learns</span>, <span className="text-[#ff4080]">adapts</span>, and <span className="text-[#ffc502]">scales</span> on its own.
                        </p>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* SECTION 3: CONSENSUS LAYER */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-16">
                            <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Consensus
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-4">
                                <span className="text-[#8c52ff]">SVCP</span><br />Social Verified Consensus
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl">
                                A hybrid consensus combining modified Proof-of-Work, AI-driven reputation scoring, and quantum-resistant finality.
                            </p>
                        </div>
                    </StaggerItem>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <StaggerItem>
                            <div className="h-full p-8 border border-white/10 hover:border-[#8c52ff] transition-colors">
                                <h3 className="text-2xl font-black mb-2">NodeScore</h3>
                                <p className="text-sm uppercase tracking-widest text-[#8c52ff] mb-6">Reputation Engine</p>
                                <p className="text-gray-400 mb-6">Every validator earns a dynamic score based on:</p>
                                <div className="space-y-2">
                                    {['Device Health', 'Network Reliability', 'Uptime History', 'Behavioral Patterns', 'Community Trust'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-[#8c52ff] rounded-full" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[#ffc502] font-bold mt-6 text-sm">Higher score = higher chance of proposing blocks</p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="h-full p-8 border border-white/10 hover:border-[#ff4080] transition-colors">
                                <h3 className="text-2xl font-black mb-2">AI Engine</h3>
                                <p className="text-sm uppercase tracking-widest text-[#ff4080] mb-6">Real-Time Analysis</p>
                                <p className="text-gray-400 mb-6">The network continuously monitors:</p>
                                <div className="space-y-2">
                                    {['Traffic congestion', 'Suspicious patterns', 'Slot timing accuracy', 'Optimal routing paths', 'Block size efficiency'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-[#ff4080] rounded-full" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[#ff4080] font-bold mt-6 text-sm">Self-healing, self-optimizing infrastructure</p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="h-full p-8 border border-white/10 hover:border-[#ffc502] transition-colors">
                                <h3 className="text-2xl font-black mb-2">Quantum Finality</h3>
                                <p className="text-sm uppercase tracking-widest text-[#ffc502] mb-6">SVBFT Protocol</p>
                                <p className="text-gray-400 mb-6">Post-quantum cryptography ensures:</p>
                                <div className="space-y-2">
                                    {['Dilithium-5 signatures', 'Falcon-1024 support', 'Sub-second finality', 'Long-term security', 'Future-proof design'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-[#ffc502] rounded-full" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[#ffc502] font-bold mt-6 text-sm">Protected against quantum computing threats</p>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 4: EXECUTION LAYER */}
            <section className="py-24 px-6 bg-[#ff4080] text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-white text-[#ff4080] text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Execution Layer
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-4">
                                Dual Virtual Machine
                            </h2>
                            <p className="text-xl text-white/80">
                                EVM and WASM running in parallel, powered by AI
                            </p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <StaggerItem>
                            <div className="bg-white text-black p-10 h-full">
                                <h3 className="text-3xl font-black mb-4">EVM Runtime</h3>
                                <div className="space-y-3">
                                    {['Full Solidity compatibility', 'All Ethereum tooling supported', 'Rapid dApp migration', 'Existing ecosystem access'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#ff4080]" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-black text-white p-10 h-full">
                                <h3 className="text-3xl font-black mb-4">WASM Runtime</h3>
                                <div className="space-y-3">
                                    {['High-performance contracts', 'Rust & AssemblyScript', 'Next-gen AI-native apps', 'Maximum efficiency'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#ffc502]" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    </div>

                    <StaggerItem>
                        <div className="bg-white/10 p-8 text-center">
                            <h3 className="text-2xl font-black mb-4">AI Execution Optimization</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {['Gas scheduling', 'Lane allocation', 'Contract prioritization', 'Transaction prediction'].map((item, i) => (
                                    <span key={i} className="px-4 py-2 bg-white text-[#ff4080] font-bold text-sm">{item}</span>
                                ))}
                            </div>
                            <p className="text-xl font-bold mt-6">Dual-VM execution with <span className="text-[#ffc502]">intelligent optimization</span> built in.</p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* SECTION 5: SCALABILITY LAYER */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#ffc502] text-black text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Scalability
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-4">
                                DAG + <span className="text-[#ffc502]">Dynamic Sharding</span>
                            </h2>
                            <p className="text-xl text-gray-600">
                                No bottlenecks. No limits. The network expands as demand grows.
                            </p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <StaggerItem>
                            <div className="border-t-4 border-[#8c52ff] bg-gray-50 p-8">
                                <h3 className="text-2xl font-black mb-4">DAG Transaction Graph</h3>
                                <div className="space-y-3">
                                    {['Parallel ordering', 'No global bottleneck', 'Conflict-free execution', 'Async processing'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200">
                                            <span className="w-2 h-2 bg-[#8c52ff]" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="border-t-4 border-[#ffc502] bg-gray-50 p-8">
                                <h3 className="text-2xl font-black mb-4">Adaptive State Sharding</h3>
                                <div className="space-y-3">
                                    {['Split at 80% capacity', 'Merge at 30% capacity', 'Fully automated', 'AI-driven load prediction'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200">
                                            <span className="w-2 h-2 bg-[#ffc502]" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    </div>

                    <StaggerItem>
                        <div className="bg-black text-white p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { value: 'Linear', label: 'Scaling' },
                                { value: '1024+', label: 'Shards' },
                                { value: '10M+', label: 'TPS Theoretical' },
                                { value: '<100ms', label: 'Cross-Shard' }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl md:text-3xl font-black text-[#ffc502]">{stat.value}</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* SECTION 6: SECURITY SYSTEM */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#ff4080] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Security
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-4">
                                <span className="text-[#ff4080]">Quantum-Ready</span> Cryptography
                            </h2>
                            <p className="text-xl text-gray-400">
                                Cryptographic primitives designed to withstand tomorrow's threats
                            </p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-6">
                        <StaggerItem>
                            <div className="text-center p-8 border border-white/10">
                                <Shield className="w-12 h-12 mx-auto mb-4 text-[#8c52ff]" />
                                <h3 className="text-xl font-black mb-4">Post-Quantum Signatures</h3>
                                <div className="space-y-2 text-gray-400">
                                    <p>Dilithium-5</p>
                                    <p>Falcon-1024</p>
                                    <p>ML-DSA-87</p>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="text-center p-8 border border-white/10">
                                <Lock className="w-12 h-12 mx-auto mb-4 text-[#ff4080]" />
                                <h3 className="text-xl font-black mb-4">Hybrid Signature Model</h3>
                                <p className="text-gray-400 mb-4">Ed25519 + Dilithium</p>
                                <p className="text-[#ffc502] font-bold text-sm">Fast today + Secure forever</p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="text-center p-8 border border-white/10">
                                <Layers className="w-12 h-12 mx-auto mb-4 text-[#ffc502]" />
                                <h3 className="text-xl font-black mb-4">Zero-Knowledge Circuits</h3>
                                <p className="text-gray-400 mb-2">Groth16 on BLS12-381</p>
                                <p className="text-gray-500 text-sm">Private tx, Anonymous proofs</p>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 7: IDENTITY LAYER */}
            <section className="py-24 px-6 bg-[#8c52ff] text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-16">
                            <span className="inline-block px-6 py-2 bg-white text-[#8c52ff] text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Identity Layer
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-4">
                                Decentralized Identity (DID)
                            </h2>
                            <p className="text-xl text-white/80 max-w-2xl">
                                Enabling identity for Humans, Devices, and AI Agents with next-generation Web3 standards.
                            </p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {['Users', 'Devices', 'Applications', 'AI Agents'].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white/10 p-6 text-center">
                                    <Fingerprint className="w-10 h-10 mx-auto mb-3" />
                                    <span className="font-black">{item}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <StaggerItem>
                            <div className="bg-white text-black p-8">
                                <h3 className="text-xl font-black mb-4">Verifiable Credentials</h3>
                                <p className="text-gray-600">Provable identity without revealing data. W3C-compliant, fully portable.</p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="bg-black text-white p-8">
                                <h3 className="text-xl font-black mb-4">Biometric Integration</h3>
                                <p className="text-gray-400">Face embeddings via SVDB enable human-level authentication that runs natively on-chain.</p>
                            </div>
                        </StaggerItem>
                    </div>

                    <StaggerItem>
                        <p className="text-2xl font-black text-center mt-12">
                            Your identity is no longer just an account. It becomes your <span className="text-[#ffc502]">sovereign digital presence</span>.
                        </p>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* SECTION 8: STORAGE LAYER */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#ffc502] text-black text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Storage Layer
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-4">
                                <span className="text-[#ffc502]">SVDB</span><br />Sharded Vector Database
                            </h2>
                            <p className="text-xl text-gray-600">
                                Decentralized Storage for the AI Era
                            </p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <StaggerItem>
                            <div className="space-y-4">
                                {['Stores AI embeddings', 'Performs similarity search', 'High-dimensional vectors', 'Content-addressable (CID)', 'Hybrid RocksDB + IPLD', '8 MB chunk size', 'Cosine/Dot/Euclidean kNN'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 border-l-4 border-[#ffc502]">
                                        <Database className="w-5 h-5 text-[#ffc502]" />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-black text-white p-10">
                                <h3 className="text-2xl font-black mb-6">This enables:</h3>
                                <div className="space-y-3">
                                    {['AI agent memory', 'Decentralized recommendations', 'On-chain AI personalization', 'Autonomous AI dApps', 'Real-time inference'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Zap className="w-5 h-5 text-[#ffc502]" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[#ffc502] font-bold mt-8">SVDB turns ArthaChain into the first truly AI-native blockchain.</p>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 9: VALIDATOR SYSTEM */}
            <section className="py-24 px-6 bg-[#ffc502] text-black relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-black text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Validator System
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-4">
                                Permissionless + No Staking
                            </h2>
                            <p className="text-xl text-black/70">
                                True Decentralization Through Useful Work
                            </p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-8">
                        <StaggerItem>
                            <div className="bg-black text-white p-8 h-full">
                                <h3 className="text-xl font-black mb-4">NodeScore Selection</h3>
                                <p className="text-gray-400 mb-4">Validators chosen by:</p>
                                <div className="space-y-2">
                                    {['Computational work', 'Reliability', 'Device health', 'AI behavior', 'Network participation'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#ffc502] rounded-full" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-white p-8 h-full">
                                <h3 className="text-xl font-black mb-4">Rewards</h3>
                                <p className="text-gray-600">Validators earn block rewards and transaction fees based on <span className="text-[#ff4080] font-bold">useful work</span>, not locked tokens.</p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-black text-white p-8 h-full">
                                <h3 className="text-xl font-black mb-4">Hardware</h3>
                                <div className="space-y-2">
                                    {['Multi-core CPUs', 'High RAM', 'NVMe SSD', 'Stable internet'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <Server className="w-4 h-4 text-[#8c52ff]" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 10: DEVELOPER ECOSYSTEM */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Developer Ecosystem
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black">
                                Built for <span className="text-[#8c52ff]">Developers</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-8">
                        <StaggerItem>
                            <div className="border border-white/10 p-8">
                                <h3 className="text-xl font-black mb-4 text-[#8c52ff]">Tools</h3>
                                <div className="space-y-2 text-gray-400">
                                    {['CLI (arthachain-node)', 'AI assistant (arthai)', 'Localnet via Docker', 'Load testing suite', 'EVM/WASM debugger', 'Python AI SDK'].map((item, i) => (
                                        <p key={i}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="border border-white/10 p-8">
                                <h3 className="text-xl font-black mb-4 text-[#ff4080]">Languages</h3>
                                <div className="space-y-2 text-gray-400">
                                    {['Solidity', 'Rust', 'AssemblyScript', 'Python (AI modules)'].map((item, i) => (
                                        <p key={i}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="border border-white/10 p-8">
                                <h3 className="text-xl font-black mb-4 text-[#ffc502]">APIs</h3>
                                <div className="space-y-2 text-gray-400">
                                    {['Full JSON-RPC', 'WASM ABI', 'AI inference API', 'DID identity API', 'SVDB vector API'].map((item, i) => (
                                        <p key={i}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    </div>

                    <StaggerItem>
                        <p className="text-center text-xl font-bold mt-12">
                            ArthaChain provides a complete <span className="text-[#ffc502]">developer ecosystem</span> from day one.
                        </p>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* SECTION 11: NETWORK TOPOLOGY */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-black text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Network Topology
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-4">
                                P2P <span className="text-[#8c52ff]">Neural Network</span> Architecture
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="flex flex-wrap justify-center gap-4">
                        {['GossipSub v1.1', 'Noise encryption', 'Yamux multiplexing', 'QUIC ultra-low latency', 'Predictive routing', 'Self-healing topology'].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="px-6 py-4 bg-gray-50 border border-gray-200 flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-[#8c52ff]" />
                                    <span className="font-bold">{item}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <p className="text-center text-2xl font-black mt-12">
                            A self-healing network that adapts like a <span className="text-[#ff4080]">living organism</span>.
                        </p>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* SECTION 12: TECH SUMMARY */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black">
                                Technology <span className="text-[#ffc502]">Summary</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { text: 'AI-Native Consensus', color: '#8c52ff' },
                            { text: 'Quantum Secure', color: '#ff4080' },
                            { text: 'Infinite Sharding', color: '#ffc502' },
                            { text: 'DAG Parallelism', color: '#8c52ff' },
                            { text: 'Dual VM: EVM + WASM', color: '#ff4080' },
                            { text: 'ZK-SNARK Privacy', color: '#ffc502' },
                            { text: 'Decentralized Identity', color: '#8c52ff' },
                            { text: 'Vector Database', color: '#ff4080' },
                            { text: 'Self-Healing Network', color: '#ffc502' },
                            { text: 'No Staking Needed', color: '#8c52ff' },
                            { text: '1M+ TPS', color: '#ff4080' },
                            { text: 'Sub-Second Finality', color: '#ffc502' }
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="p-4 border border-white/10 text-center hover:border-white/30 transition-colors" style={{ borderLeftColor: item.color, borderLeftWidth: '4px' }}>
                                    <span className="font-bold text-sm">{item.text}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 13: CTA */}
            <section className="py-40 px-6 bg-black text-white overflow-hidden border-t border-white/10 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />

                <StaggerContainer className="max-w-7xl mx-auto text-center relative z-10">
                    <StaggerItem>
                        <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-8">
                            Get Started
                        </span>
                    </StaggerItem>

                    <StaggerItem>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter">
                            Ready to <span className="text-[#8c52ff]">Build</span>?
                        </h2>
                    </StaggerItem>

                    <StaggerItem>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16">
                            Join thousands of developers building the future of decentralized applications on ArthaChain.
                        </p>
                    </StaggerItem>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        {[
                            { text: 'Explore Documentation', href: '/docs', primary: true },
                            { text: 'Start Building', href: '/community', primary: false },
                            { text: 'Read Whitepaper', href: '/whitepaper', primary: false }
                        ].map((link, i) => (
                            <StaggerItem key={i}>
                                <Link
                                    href={link.href}
                                    className={`group flex items-center justify-between gap-6 w-full md:w-auto min-w-[280px] px-8 py-6 font-bold uppercase tracking-widest transition-all duration-300 ${link.primary
                                            ? 'bg-[#8c52ff] text-white hover:bg-[#ff4080]'
                                            : 'bg-white/5 border border-white/10 text-white hover:border-white/50 hover:bg-white/10 backdrop-blur-sm'
                                        }`}
                                >
                                    <span className="text-sm">{link.text}</span>
                                    <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${link.primary ? 'text-white' : 'text-[#8c52ff] group-hover:text-white'}`} />
                                </Link>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>
        </div>
    );
}
