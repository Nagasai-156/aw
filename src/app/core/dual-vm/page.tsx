'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Cpu, Zap, Code, Layers, GitMerge, Brain, Shield, Gauge } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function DualVMPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - Diagonal Split */}
            <section className="relative min-h-screen bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Diagonal divider */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#8c52ff] origin-top-left transform -skew-y-6 translate-y-1/2 opacity-10"></div>
                </div>

                <div className="relative z-10 min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-6 py-32 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
                                Dual VM<br />System
                            </h1>
                            <p className="text-3xl md:text-4xl font-bold mb-12 max-w-4xl">
                                Two Execution Engines.<br />
                                One State.<br />
                                Zero Limitations.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                                The only blockchain where EVM and WASM run side-by-side on the same global state, with AI-driven scheduling and parallel execution.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE PROBLEM - Full Width Statement */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <p className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
                                Most blockchains pick either EVM or WASM.<br />
                                Some try to "add support" for the other.
                            </p>
                            <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
                            <p className="text-4xl md:text-5xl font-black">
                                ArthaChain engineered both.
                            </p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-black text-white p-16 text-center">
                            <p className="text-2xl md:text-3xl leading-relaxed">
                                Two execution engines running <span className="text-[#ffc502] font-black">simultaneously</span>,<br />
                                sharing one state tree, with <span className="text-[#8c52ff] font-black">AI-driven scheduling</span>,<br />
                                parallel lanes, and <span className="text-[#ff4080] font-black">sharding awareness</span>.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* WHY DUAL VM - Vertical Timeline */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20">
                            <h2 className="text-6xl md:text-7xl font-black mb-6">Why Dual VM Exists</h2>
                            <p className="text-2xl text-gray-400">Serving two developer worlds</p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-1 bg-white">
                        <StaggerItem>
                            <div className="bg-black p-12 h-full border-l-8 border-[#8c52ff]">
                                <div className="text-7xl font-black text-[#8c52ff] mb-6">1</div>
                                <h3 className="text-3xl font-black mb-6">The Ethereum World</h3>
                                <div className="space-y-3 text-lg">
                                    <p>Billions in tooling</p>
                                    <p>Solidity dominance</p>
                                    <p>Existing dApps migration</p>
                                    <p>MetaMask compatibility</p>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-black p-12 h-full border-l-8 border-[#ff4080]">
                                <div className="text-7xl font-black text-[#ff4080] mb-6">2</div>
                                <h3 className="text-3xl font-black mb-6">The Native WASM World</h3>
                                <div className="space-y-3 text-lg">
                                    <p>Rust high-performance apps</p>
                                    <p>AI-enhanced logic</p>
                                    <p>Complex deterministic compute</p>
                                    <p>Microservices on-chain</p>
                                </div>
                            </div>
                        </StaggerItem>
                    </div>

                    <StaggerItem>
                        <div className="mt-12 text-center">
                            <p className="text-3xl font-bold">
                                Instead of forcing compromise,<br />
                                <span className="text-[#ffc502]">ArthaChain gave both their own execution lane.</span>
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* THE ENGINES - Side by Side Comparison */}
            <section className="bg-white">
                <div className="grid md:grid-cols-2">
                    {/* EVM ENGINE */}
                    <div className="bg-white p-16 border-r border-black/10">
                        <StaggerContainer>
                            <StaggerItem>
                                <div className="mb-12">
                                    <div className="w-16 h-16 bg-[#8c52ff] flex items-center justify-center mb-6">
                                        <Code className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-5xl font-black mb-4">EVM Lane</h2>
                                    <p className="text-2xl text-gray-600">Full Ethereum Compatibility</p>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="mb-12">
                                    <div className="w-16 h-1 bg-[#8c52ff] mb-6"></div>
                                    <h3 className="text-2xl font-black mb-6">What It Runs</h3>
                                    <div className="space-y-3">
                                        <p>Full Solidity compatibility</p>
                                        <p>All standard EVM opcodes</p>
                                        <p>Ethereum gas schedule</p>
                                        <p>JSON-RPC compatible</p>
                                        <p>Hardhat/Foundry ready</p>
                                    </div>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="bg-black text-white p-8">
                                    <p className="font-black mb-4 text-[#8c52ff]">ArthaChain Enhancements</p>
                                    <div className="space-y-2 text-sm">
                                        <p>→ Parallel processing</p>
                                        <p>→ Shard awareness</p>
                                        <p>→ AI-optimized scheduling</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>

                    {/* WASM ENGINE */}
                    <div className="bg-white p-16">
                        <StaggerContainer>
                            <StaggerItem>
                                <div className="mb-12">
                                    <div className="w-16 h-16 bg-[#ff4080] flex items-center justify-center mb-6">
                                        <Zap className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-5xl font-black mb-4">WASM Lane</h2>
                                    <p className="text-2xl text-gray-600">Native Rust Execution</p>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="mb-12">
                                    <div className="w-16 h-1 bg-[#ff4080] mb-6"></div>
                                    <h3 className="text-2xl font-black mb-6">What It Runs</h3>
                                    <div className="space-y-3">
                                        <p>Wasmtime runtime</p>
                                        <p>Custom gas/fuel accounting</p>
                                        <p>Near-native performance</p>
                                        <p>Multi-language support</p>
                                        <p>Direct state access</p>
                                    </div>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="bg-black text-white p-8">
                                    <p className="font-black mb-4 text-[#ff4080]">Perfect For</p>
                                    <div className="space-y-2 text-sm">
                                        <p>→ AI agents</p>
                                        <p>→ Advanced logic systems</p>
                                        <p>→ High-speed microservices</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* UNIFIED STATE - Centered Focus */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-4xl mx-auto relative z-10 text-center">
                    <StaggerItem>
                        <div className="mb-16">
                            <h2 className="text-6xl md:text-7xl font-black mb-8">Unified State Layer</h2>
                            <p className="text-2xl text-gray-400">The heart of the Dual VM system</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-white text-black p-16 mb-12">
                            <p className="text-3xl font-black mb-12">Both VMs write to the same:</p>
                            <div className="grid grid-cols-2 gap-8 text-xl">
                                <div>Account map</div>
                                <div>Storage trie</div>
                                <div>Balance bridge</div>
                                <div>Contract code map</div>
                                <div>Logs & receipts</div>
                                <div>Merkle root</div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="grid md:grid-cols-2 gap-8 text-xl">
                            {[
                                'Solidity contract calling WASM contract',
                                'WASM calling EVM precompiles',
                                'Cross-VM libraries',
                                'One address space'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#ffc502] flex items-center justify-center flex-shrink-0">
                                        <span className="font-black text-black">{i + 1}</span>
                                    </div>
                                    <p className="text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-16 p-12 border-4 border-[#ffc502]">
                            <p className="text-3xl font-black text-[#ffc502]">
                                No other chain supports this.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* CROSS-VM CALLING - Code Example Layout */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-6xl md:text-7xl font-black mb-6">Cross-VM Calling</h2>
                            <p className="text-2xl text-gray-600">Where ArthaChain becomes futuristic</p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-12">
                        <StaggerItem>
                            <div className="bg-black text-white p-10">
                                <p className="text-sm uppercase tracking-wider text-[#8c52ff] mb-4">Solidity → WASM</p>
                                <div className="font-mono text-sm mb-6">
                                    <p className="text-gray-400">// Call WASM from Solidity</p>
                                    <p className="text-green-400">Address("wasm_contract")</p>
                                    <p className="text-white">.invoke("function", args)</p>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-black text-white p-10">
                                <p className="text-sm uppercase tracking-wider text-[#ff4080] mb-4">WASM → EVM</p>
                                <div className="font-mono text-sm mb-6">
                                    <p className="text-gray-400">// Call EVM from WASM</p>
                                    <p className="text-green-400">evm_call</p>
                                    <p className="text-white">(address, method, params)</p>
                                </div>
                            </div>
                        </StaggerItem>
                    </div>

                    <StaggerItem>
                        <div className="mt-12 bg-black text-white p-12 text-center">
                            <p className="text-2xl font-bold mb-6">Under the hood:</p>
                            <div className="flex flex-wrap justify-center gap-6 text-lg">
                                <span className="px-6 py-3 bg-white/10">VM switch</span>
                                <span className="px-6 py-3 bg-white/10">Execution routing</span>
                                <span className="px-6 py-3 bg-white/10">Unified gas meter</span>
                                <span className="px-6 py-3 bg-white/10">Merged receipt</span>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* PARALLEL EXECUTION - Flow Diagram */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black mb-6">Parallel Execution</h2>
                            <p className="text-2xl text-gray-400">AI-driven concurrent processing</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="space-y-8">
                            {[
                                { step: 'Separate transactions into non-conflicting groups', icon: GitMerge },
                                { step: 'Run across CPU cores simultaneously', icon: Cpu },
                                { step: 'Schedule EVM + WASM together', icon: Layers },
                                { step: 'Use DAG ordering for concurrency', icon: GitMerge },
                                { step: 'AI detects patterns and optimizes', icon: Brain }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex items-center gap-6 bg-white/5 p-8">
                                        <div className="w-16 h-16 bg-[#ffc502] flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-10 h-10 text-black" />
                                        </div>
                                        <p className="text-2xl font-bold">{item.step}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-16 grid md:grid-cols-3 gap-6">
                            {[
                                'Higher TPS',
                                'Faster execution',
                                'Lower latency',
                                'Better hot-spot control',
                                'Scalability per core',
                                'Scalability per shard'
                            ].map((benefit, i) => (
                                <div key={i} className="bg-white text-black p-6 text-center">
                                    <p className="font-black text-lg">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* WHY UNIQUE - Numbered List */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black mb-6">Why This Is Unique</h2>
                        </div>
                    </StaggerItem>

                    <div className="space-y-1">
                        {[
                            { num: '01', title: 'Dual native execution environments', desc: 'EVM and WASM both compile to native bytecode with equal priority in transaction processing and block inclusion.', color: '#8c52ff' },
                            { num: '02', title: 'True parallel transaction execution', desc: 'Multiple CPU cores process EVM and WASM transactions concurrently using dependency graph analysis and conflict detection.', color: '#ff4080' },
                            { num: '03', title: 'Single unified Merkle state root', desc: 'Both VMs write to the same Patricia Merkle Trie, ensuring one source of truth for all account states and storage.', color: '#ffc502' },
                            { num: '04', title: 'Cross-VM contract interoperability', desc: 'Smart contracts can invoke functions across execution engines within the same transaction using unified ABI routing.', color: '#8c52ff' },
                            { num: '05', title: 'AI-driven execution optimization', desc: 'Machine learning models analyze transaction patterns to optimize gas pricing, scheduling, and resource allocation in real-time.', color: '#ff4080' },
                            { num: '06', title: 'Shard-aware execution routing', desc: 'VM execution is localized to shard boundaries, minimizing cross-shard communication and maximizing throughput per partition.', color: '#ffc502' },
                            { num: '07', title: 'Hybrid compute architecture', desc: 'WASM handles compute-intensive operations while EVM ensures ecosystem compatibility, creating optimal performance for all use cases.', color: '#8c52ff' }
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="grid md:grid-cols-12 gap-0 bg-black text-white">
                                    <div className="md:col-span-2 flex items-center justify-center p-8" style={{ backgroundColor: item.color }}>
                                        <span className="text-6xl font-black text-white">{item.num}</span>
                                    </div>
                                    <div className="md:col-span-10 p-8">
                                        <h3 className="text-2xl font-black mb-3" style={{ color: item.color }}>{item.title}</h3>
                                        <p className="text-lg text-gray-300">{item.desc}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* DEVELOPER BENEFITS - Icon Grid */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black mb-6">Why Developers Love This</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-1 bg-white mb-16">
                        {[
                            { icon: Code, title: 'Solidity devs', desc: 'Move apps instantly', color: '#8c52ff' },
                            { icon: Zap, title: 'Rust devs', desc: 'Build powerful native modules', color: '#ff4080' },
                            { icon: Brain, title: 'AI devs', desc: 'Run agents directly on-chain', color: '#ffc502' },
                            { icon: Shield, title: 'Enterprises', desc: 'High performance with safety', color: '#8c52ff' }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-black p-12 h-full">
                                        <Icon className="w-16 h-16 mb-6" style={{ color: item.color }} />
                                        <h3 className="text-2xl font-black mb-3" style={{ color: item.color }}>{item.title}</h3>
                                        <p className="text-lg text-gray-400">{item.desc}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>

                    <StaggerItem>
                        <div className="bg-white text-black p-16 text-center">
                            <p className="text-4xl md:text-5xl font-black mb-6">
                                One chain. Two paradigms.
                            </p>
                            <p className="text-2xl text-gray-600">
                                Build exactly the way you want, without limits.
                            </p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-16 flex flex-wrap justify-center gap-6">
                            <Link
                                href="/core/consensus"
                                className="px-10 py-5 bg-white text-black font-black text-lg uppercase tracking-wider hover:bg-[#8c52ff] hover:text-white transition-all duration-300"
                            >
                                Explore Consensus →
                            </Link>
                            <Link
                                href="/core/dual-chain"
                                className="px-10 py-5 border-4 border-white text-white font-black text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Dual Chain System →
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
