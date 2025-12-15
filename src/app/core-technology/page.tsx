'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Layers, Cpu, Network, Shield, Database, Brain, Zap, GitBranch, Lock, Code2, Box, CheckCircle2, ArrowUpRight, Sparkles, EyeOff } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function CoreTechnologyPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - MASSIVE IMPACT */}
            <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <div className="mb-12 sm:mb-16">
                            <h1 className="text-[clamp(3rem,12vw,12rem)] font-black leading-[0.85] tracking-tighter mb-6 sm:mb-8">
                                CORE
                            </h1>
                            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 px-4">
                                <div className="w-16 sm:w-32 h-1 bg-[#8c52ff]"></div>
                                <div className="w-16 sm:w-32 h-1 bg-[#ff4080]"></div>
                            </div>
                            <h2 className="text-[clamp(2rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter text-[#ffc502]">
                                TECHNOLOGY
                            </h2>
                        </div>

                        <p className="text-lg sm:text-2xl md:text-3xl text-gray-400 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
                            The world's first AI-native, quantum-secure, infinitely scalable blockchain protocol
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 max-w-5xl mx-auto px-4">
                            {[
                                { label: 'AI-Native', color: '#8c52ff' },
                                { label: 'Quantum-Secure', color: '#ff4080' },
                                { label: 'Dual-VM', color: '#ffc502' },
                                { label: 'Dynamic Sharding', color: '#8c52ff' },
                                { label: 'Sub-Second Finality', color: '#ff4080' }
                            ].map((tag, i) => (
                                <div key={i} className="bg-white text-black p-3 sm:p-4 text-center">
                                    <p className="font-black text-xs sm:text-sm" style={{ color: tag.color }}>{tag.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ARCHITECTURE OVERVIEW - LAYERED STACK */}
            <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-10 sm:mb-16 md:mb-20">
                            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-4 sm:mb-6 md:mb-8 px-2">The Protocol Stack</h2>
                            <p className="text-lg sm:text-2xl md:text-3xl text-gray-600 px-4">11 layers working in perfect harmony</p>
                        </div>
                    </StaggerItem>

                    {/* Stats Banner */}
                    <StaggerItem>
                        <div className="bg-black text-white p-6 sm:p-10 md:p-16 mb-10 sm:mb-16 md:mb-20">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center">
                                <div>
                                    <div className="text-6xl sm:text-7xl md:text-8xl font-black mb-3 sm:mb-4 text-[#8c52ff]">∞</div>
                                    <p className="text-base sm:text-xl md:text-2xl font-bold">Infinite Scalability</p>
                                </div>
                                <div>
                                    <div className="text-6xl sm:text-7xl md:text-8xl font-black mb-3 sm:mb-4 text-[#ff4080]">&lt;1s</div>
                                    <p className="text-base sm:text-xl md:text-2xl font-bold">Sub-Second Finality</p>
                                </div>
                                <div>
                                    <div className="text-6xl sm:text-7xl md:text-8xl font-black mb-3 sm:mb-4 text-[#ffc502]">0%</div>
                                    <p className="text-base sm:text-xl md:text-2xl font-bold">Zero Reorg Risk</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Layered Stack Visualization */}
                    <div className="space-y-3 sm:space-y-4">
                        {[
                            // Layer 1 - Foundation (widest)
                            [
                                { num: '01', title: 'Networking Layer', desc: 'libp2p mesh + QUIC transport', icon: Network, color: '#8c52ff' },
                                { num: '02', title: 'DAG Ordering', desc: 'Parallel multi-proposer vertices', icon: GitBranch, color: '#ff4080' }
                            ],
                            // Layer 2 - Consensus
                            [
                                { num: '03', title: 'SVCP Consensus', desc: 'AI-powered leader selection', icon: Brain, color: '#ffc502' },
                                { num: '04', title: 'Quantum-SVBFT', desc: 'Post-quantum BFT finality', icon: Shield, color: '#8c52ff' }
                            ],
                            // Layer 3 - Execution
                            [
                                { num: '05', title: 'EVM Engine', desc: 'Full Solidity compatibility', icon: Code2, color: '#ff4080' },
                                { num: '06', title: 'WASM Engine', desc: 'Rust & AssemblyScript', icon: Zap, color: '#ffc502' },
                                { num: '07', title: 'Parallel Executor', desc: 'Multi-core processing', icon: Cpu, color: '#8c52ff' }
                            ],
                            // Layer 4 - Data & Identity
                            [
                                { num: '08', title: 'Dynamic Sharding', desc: 'Auto-scale state partitions', icon: Layers, color: '#ff4080' },
                                { num: '09', title: 'Identity Layer', desc: 'W3C DID + PQC keys', icon: Lock, color: '#ffc502' }
                            ],
                            // Layer 5 - Storage (top)
                            [
                                { num: '10', title: 'Vector Database', desc: 'AI embeddings & search', icon: Database, color: '#8c52ff' },
                                { num: '11', title: 'State Machine', desc: 'Global deterministic state', icon: Box, color: '#ff4080' }
                            ]
                        ].map((layer, layerIndex) => (
                            <StaggerItem key={layerIndex}>
                                <div className={`grid gap-3 sm:gap-4 ${layer.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : layer.length === 3 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1'
                                    }`}>
                                    {layer.map((component, i) => {
                                        const Icon = component.icon;
                                        return (
                                            <div
                                                key={i}
                                                className="group bg-black text-white p-6 sm:p-8 md:p-10 hover:scale-105 transition-all duration-300 cursor-pointer border-l-4 sm:border-l-8"
                                                style={{ borderLeftColor: component.color }}
                                            >
                                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                                    <div
                                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0"
                                                        style={{ backgroundColor: component.color }}
                                                    >
                                                        <span className="text-2xl sm:text-3xl font-black text-black">{component.num}</span>
                                                    </div>
                                                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" style={{ color: component.color }} />
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3" style={{ color: component.color }}>
                                                    {component.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm sm:text-base md:text-lg">{component.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    {/* Bottom Statement */}
                    <StaggerItem>
                        <div className="mt-8 sm:mt-12 md:mt-16 bg-black text-white p-8 sm:p-12 md:p-16 text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
                                Modular. Independent. Synchronized.
                            </p>
                            <p className="text-base sm:text-xl md:text-2xl text-gray-400">
                                Each layer operates autonomously yet integrates seamlessly
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* CONSENSUS - DUAL BRAIN LAYOUT */}
            <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-10 sm:mb-16 md:mb-20">
                            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 md:mb-8 px-2">Hybrid Consensus</h2>
                            <p className="text-lg sm:text-2xl md:text-3xl text-gray-400">Intelligence + Security</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-white mb-10 sm:mb-12 md:mb-16">
                        {/* SVCP */}
                        <StaggerItem>
                            <div className="bg-black p-8 sm:p-12 md:p-16 h-full">
                                <div className="mb-8 sm:mb-10 md:mb-12">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#8c52ff] flex items-center justify-center mb-6 sm:mb-8">
                                        <Brain className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-white" />
                                    </div>
                                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 text-[#8c52ff]">SVCP</h3>
                                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400">AI-Powered Leader Selection</p>
                                </div>
                                <div className="space-y-3 sm:space-y-4">
                                    {[
                                        'NodeScore (0.0-1.0)',
                                        'Device health metrics',
                                        'Network quality analysis',
                                        'Behavioral fingerprinting',
                                        'Weighted lottery selection',
                                        'Zero staking required'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#8c52ff] flex items-center justify-center flex-shrink-0">
                                                <span className="text-xs sm:text-sm font-black text-black">{i + 1}</span>
                                            </div>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Quantum-SVBFT */}
                        <StaggerItem>
                            <div className="bg-black p-8 sm:p-12 md:p-16 h-full">
                                <div className="mb-8 sm:mb-10 md:mb-12">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#ff4080] flex items-center justify-center mb-6 sm:mb-8">
                                        <Shield className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-white" />
                                    </div>
                                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 text-[#ff4080]">Quantum-SVBFT</h3>
                                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400">Deterministic Finality</p>
                                </div>
                                <div className="space-y-6 sm:space-y-8">
                                    {[
                                        { phase: 'PREPARE', desc: 'Block validation' },
                                        { phase: 'PRE-COMMIT', desc: '+2/3 validator agreement' },
                                        { phase: 'COMMIT', desc: 'Permanent & irreversible' }
                                    ].map((step, i) => (
                                        <div key={i}>
                                            <div className="flex items-center gap-3 sm:gap-4 mb-2">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 border-3 sm:border-4 border-[#ff4080] flex items-center justify-center">
                                                    <span className="text-lg sm:text-xl font-black">{i + 1}</span>
                                                </div>
                                                <h4 className="text-xl sm:text-2xl font-black text-[#ff4080]">{step.phase}</h4>
                                            </div>
                                            <p className="text-gray-400 ml-13 sm:ml-16 text-sm sm:text-base">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    </div>

                    <StaggerItem>
                        <div className="bg-[#ffc502] text-black p-8 sm:p-12 md:p-16 text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
                                Intelligence selects. Quantum secures. Math guarantees.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* DUAL VM - SPLIT COMPARISON */}
            <section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* EVM */}
                    <div className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 border-r-0 md:border-r border-black/10">
                        <StaggerContainer>
                            <StaggerItem>
                                <div className="mb-8 sm:mb-10 md:mb-12">
                                    <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 bg-[#8c52ff] flex items-center justify-center mb-6 sm:mb-8">
                                        <Code2 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                                    </div>
                                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-3 sm:mb-4">EVM</h2>
                                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">Ethereum Compatibility</p>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
                                    {[
                                        'Full Solidity support',
                                        'Standard gas schedule',
                                        'MetaMask compatible',
                                        'Hardhat/Foundry ready',
                                        'JSON-RPC interface',
                                        'All EVM opcodes'
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 sm:gap-4">
                                            <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#8c52ff] flex-shrink-0" />
                                            <span className="text-base sm:text-lg md:text-xl font-bold">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="bg-black text-white p-6 sm:p-7 md:p-8">
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#8c52ff]">Parallel execution enabled</p>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>

                    {/* WASM */}
                    <div className="bg-white p-8 sm:p-12 md:p-16 lg:p-20">
                        <StaggerContainer>
                            <StaggerItem>
                                <div className="mb-8 sm:mb-10 md:mb-12 text-center">
                                    <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 bg-[#ff4080] flex items-center justify-center mb-6 sm:mb-8 mx-auto">
                                        <Zap className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                                    </div>
                                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-3 sm:mb-4">WASM</h2>
                                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">Native Performance</p>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
                                    {[
                                        'Rust & AssemblyScript',
                                        'Near-native speed',
                                        'Memory-safe execution',
                                        'Custom gas metering',
                                        'AI-optimized runtime',
                                        'Direct state access'
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 sm:gap-4">
                                            <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ff4080] flex-shrink-0" />
                                            <span className="text-base sm:text-lg md:text-xl font-bold">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="bg-black text-white p-6 sm:p-7 md:p-8">
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#ff4080]">Perfect for AI agents</p>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>

                {/* Unified State */}
                <div className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
                    <StaggerContainer className="max-w-6xl mx-auto">
                        <StaggerItem>
                            <div className="text-center">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8">Unified State Layer</h3>
                                <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 sm:mb-10 md:mb-12">Both VMs share one Merkle root</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                                    {[
                                        'Cross-VM calls',
                                        'Shared storage',
                                        'Unified gas',
                                        'One address space'
                                    ].map((feature, i) => (
                                        <div key={i} className="bg-white text-black p-6 sm:p-7 md:p-8">
                                            <p className="text-lg sm:text-xl font-black">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* SHARDING - VISUAL SCALE */}
            <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-10 sm:mb-16 md:mb-20">
                            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 md:mb-8 px-2">Dynamic Sharding</h2>
                            <p className="text-lg sm:text-2xl md:text-3xl text-gray-600">Infinite Horizontal Scaling</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-black text-white p-8 sm:p-12 md:p-16 lg:p-20 mb-8 sm:mb-10 md:mb-12">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center">
                                <div>
                                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-3 sm:mb-4 text-[#8c52ff]">10K</div>
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold">TPS per shard</p>
                                </div>
                                <div>
                                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-3 sm:mb-4 text-[#ff4080]">∞</div>
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold">Total shards</p>
                                </div>
                                <div>
                                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-3 sm:mb-4 text-[#ffc502] whitespace-nowrap">2-5s</div>
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold">Cross-shard time</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <StaggerItem>
                            <div className="border-4 border-black p-12 h-full">
                                <h3 className="text-4xl font-black mb-8 text-[#8c52ff]">Auto-Split</h3>
                                <p className="text-2xl mb-6">When shard load exceeds <span className="font-black">80%</span></p>
                                <div className="space-y-4">
                                    {[
                                        'Automatic partition',
                                        'State redistribution',
                                        'Validator rebalancing',
                                        'Zero downtime'
                                    ].map((item, i) => (
                                        <p key={i} className="text-lg flex items-center gap-3">
                                            <span className="text-[#8c52ff]">→</span>
                                            <span>{item}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="border-4 border-black p-12 h-full">
                                <h3 className="text-4xl font-black mb-8 text-[#ff4080]">Auto-Merge</h3>
                                <p className="text-2xl mb-6">When shard load drops below <span className="font-black">30%</span></p>
                                <div className="space-y-4">
                                    {[
                                        'Automatic consolidation',
                                        'State merging',
                                        'Resource optimization',
                                        'Cost efficiency'
                                    ].map((item, i) => (
                                        <p key={i} className="text-lg flex items-center gap-3">
                                            <span className="text-[#ff4080]">→</span>
                                            <span>{item}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* SECURITY TRINITY */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-7xl md:text-8xl font-black mb-8">Security Trinity</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-1 bg-white">
                        {[
                            {
                                title: 'Quantum Shield',
                                icon: Lock,
                                color: '#8c52ff',
                                features: [
                                    'Dilithium signatures',
                                    'Kyber key exchange',
                                    'Hybrid Ed25519+PQC',
                                    'Future-proof crypto'
                                ]
                            },
                            {
                                title: 'AI Immunity',
                                icon: Brain,
                                color: '#ff4080',
                                features: [
                                    'Behavioral analysis',
                                    'Fraud prediction',
                                    'Sybil detection',
                                    'Anomaly scoring'
                                ]
                            },
                            {
                                title: 'ZK Privacy',
                                icon: EyeOff,
                                color: '#ffc502',
                                features: [
                                    'Groth16 proofs',
                                    'Private transactions',
                                    'Hidden balances',
                                    'Verifiable credentials'
                                ]
                            }
                        ].map((shield, i) => {
                            const Icon = shield.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-black p-12 h-full">
                                        <Icon className="w-20 h-20 mb-8" style={{ color: shield.color }} />
                                        <h3 className="text-4xl font-black mb-8" style={{ color: shield.color }}>
                                            {shield.title}
                                        </h3>
                                        <div className="space-y-4">
                                            {shield.features.map((feature, j) => (
                                                <p key={j} className="text-lg flex items-center gap-3">
                                                    <span style={{ color: shield.color }}>→</span>
                                                    <span>{feature}</span>
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* PERFORMANCE METRICS */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-7xl md:text-8xl font-black mb-8">Real Performance</h2>
                            <p className="text-3xl text-gray-600">Testnet benchmarks</p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { metric: '1.5s', label: 'Finality Time', color: '#8c52ff' },
                            { metric: '200-800ms', label: 'Latency', color: '#ff4080' },
                            { metric: '10,000+', label: 'TPS/Shard', color: '#ffc502' },
                            { metric: '0%', label: 'Reorg Risk', color: '#8c52ff' }
                        ].map((stat, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-black text-white p-12 text-center">
                                    <div className="text-6xl font-black mb-4" style={{ color: stat.color }}>
                                        {stat.metric}
                                    </div>
                                    <p className="text-xl font-bold">{stat.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* DEEP DIVE LINKS */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-7xl md:text-8xl font-black mb-8">Deep Dive</h2>
                            <p className="text-3xl text-gray-400">Explore each component in detail</p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { text: 'Architecture', href: '/core/architecture', color: '#8c52ff' },
                            { text: 'Consensus', href: '/core/consensus', color: '#ff4080' },
                            { text: 'Dual VM', href: '/core/dual-vm', color: '#ffc502' },
                            { text: 'Dual Chain', href: '/core/dual-chain', color: '#8c52ff' },
                            { text: 'Security Model', href: '/core/security', color: '#ff4080' },
                            { text: 'Protocol Paper', href: '/core/papers', color: '#ffc502' }
                        ].map((link, i) => (
                            <StaggerItem key={i}>
                                <Link
                                    href={link.href}
                                    className="group block bg-white text-black p-12 hover:scale-105 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-3xl font-black">{link.text}</span>
                                        <ArrowUpRight className="w-10 h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" style={{ color: link.color }} />
                                    </div>
                                    <div className="w-full h-2" style={{ backgroundColor: link.color }} />
                                </Link>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>
        </div>
    );
}
