'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Zap, Shield, Brain, Lock, Database, CheckCircle2, ArrowUpRight, Activity, Award, Coins, X, DollarSign, BarChart3, PieChart, LineChart, Layers, Network, Eye, Target } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function DeFiPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - CROSS PATTERN SPLIT */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Cross Pattern Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-[#8c52ff]" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#ff4080]" />
                    <div className="absolute top-1/3 bottom-1/3 left-0 right-1/2 bg-[#ffc502]" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-block px-6 py-3 bg-white text-black text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-8">
                            DeFi
                        </div>
                        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.9] tracking-tighter mb-8 max-w-4xl">
                            Intelligent,<br />
                            Quantum-Secure<br />
                            <span className="text-[#ff4080]">Finance</span><br />
                            for a Decentralized World.
                        </h1>

                        {/* Problems vs Solutions Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mt-12">
                            {/* Problems */}
                            <div className="bg-white text-black p-8 sm:p-10 border-8 border-red-500">
                                <div className="flex items-center gap-3 mb-6">
                                    <X className="w-10 h-10 text-red-500" />
                                    <h3 className="text-2xl sm:text-3xl font-black">DeFi Problems</h3>
                                </div>
                                <div className="space-y-3">
                                    {['Slow blockchains', 'High fees', 'Network congestion', 'Smart contract exploits', 'Oracle manipulation', 'Cross-chain hacks', 'Regulatory pressure', 'Lack of scalability'].map((problem, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                                            <span className="text-sm sm:text-base line-through text-gray-600">{problem}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Solutions */}
                            <div className="bg-[#8c52ff] text-white p-8 sm:p-10 border-8 border-[#ffc502]">
                                <div className="flex items-center gap-3 mb-6">
                                    <CheckCircle2 className="w-10 h-10" />
                                    <h3 className="text-2xl sm:text-3xl font-black">ArthaChain Solutions</h3>
                                </div>
                                <div className="space-y-3">
                                    {['Infinite horizontal scaling', 'Sub-second finality', 'AI protections at every layer', 'Quantum-secure cryptography', 'Deterministic execution', 'Self-healing consensus', 'DID-based user identity'].map((solution, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                            <span className="text-sm sm:text-base font-bold">{solution}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHY ARTHACHAIN - NUMBERED CIRCLES */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Why ArthaChain is Best for DeFi</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                        {[
                            {
                                num: '1',
                                title: 'Infinite TPS',
                                points: ['No congestion', 'No frontrunning', 'No fee spikes', 'Shards expand as liquidity grows'],
                                color: '#8c52ff'
                            },
                            {
                                num: '2',
                                title: 'Sub-Second Finality',
                                points: ['Guaranteed execution speed', 'Instant liquidations', 'Instant arbitrage', 'Instant swaps'],
                                color: '#ff4080'
                            },
                            {
                                num: '3',
                                title: 'Quantum-Secure Transactions',
                                points: ['Future-proof financial systems', 'Liquidity remains secure', 'Protected against quantum computers'],
                                color: '#ffc502'
                            },
                            {
                                num: '4',
                                title: 'AI-Powered Risk Management',
                                points: ['Liquidity risks analysis', 'Price anomalies detection', 'Oracle attacks prevention', 'MEV attempts blocking', 'Flash loan exploit patterns'],
                                color: '#8c52ff'
                            },
                            {
                                num: '5',
                                title: 'DID-Integrated Compliance',
                                points: ['Security token markets', 'RWA (Real World Assets)', 'Institutional liquidity', 'Regulated DeFi'],
                                color: '#ff4080'
                            },
                            {
                                num: '6',
                                title: 'Vector-Based Price Intelligence',
                                points: ['Historical price embeddings', 'Liquidity vectors', 'Market sentiment', 'Volatility signatures', 'AI-driven pricing models'],
                                color: '#ffc502'
                            }
                        ].map((reason, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-black text-white p-8 sm:p-10 h-full relative">
                                    {/* Large Circle Number */}
                                    <div className="absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full border-8 flex items-center justify-center" style={{ borderColor: reason.color, backgroundColor: 'black' }}>
                                        <span className="text-4xl sm:text-5xl font-black" style={{ color: reason.color }}>{reason.num}</span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-black mb-6 pr-16">{reason.title}</h3>
                                    <div className="space-y-2">
                                        {reason.points.map((point, j) => (
                                            <div key={j} className="flex items-start gap-2">
                                                <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: reason.color }} />
                                                <span className="text-sm sm:text-base text-gray-300">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* 5 CORE INNOVATIONS - WAVE PATTERN */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">5 Core DeFi Innovations</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">Unique to ArthaChain. Cannot exist on any other blockchain.</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-0">
                        {[
                            {
                                num: '01',
                                title: 'AI-Secured Liquidity Pools',
                                desc: 'Every liquidity pool has a built-in AI guardian.',
                                monitors: ['Flash loan attacks', 'Abnormal swap patterns', 'Sudden liquidity drainage', 'Impermanent loss spikes', 'Volatility shocks'],
                                actions: ['Raise alerts', 'Slow pool operations', 'Increase slippage requirements', 'Auto-pausing mechanisms'],
                                tagline: 'Artha makes DeFi self-protecting.',
                                color: '#8c52ff',
                                icon: Shield
                            },
                            {
                                num: '02',
                                title: 'Quantum-Secure Asset Layer (QAL)',
                                desc: 'All DeFi assets use PQC (post-quantum crypto).',
                                monitors: ['Stablecoins', 'RWAs', 'LP tokens', 'Derivatives', 'Governance tokens'],
                                actions: ['Future-proof financial safety', 'Protected against quantum computers'],
                                tagline: 'No chain today gives this level of security.',
                                color: '#ff4080',
                                icon: Lock
                            },
                            {
                                num: '03',
                                title: 'Sharded AMMs for Infinite Liquidity',
                                desc: 'Sharded AMMs and Sharded Orderbooks.',
                                monitors: ['Host AMMs', 'Provide micro-liquidity', 'Settle trades instantly', 'Sync into global liquidity state'],
                                actions: ['Infinite liquidity', 'Infinite scalability'],
                                tagline: 'Traditional AMMs choke under load. Not Artha.',
                                color: '#ffc502',
                                icon: Layers
                            },
                            {
                                num: '04',
                                title: 'AI-Driven Oracle Layer',
                                desc: 'Intelligence embedded at the protocol level.',
                                monitors: ['Anomaly detection', 'Data integrity scoring', 'Outlier filtering', 'Multi-source aggregation', 'ZK-verified data feeds'],
                                actions: ['Cannot be exploited by price manipulation'],
                                tagline: 'Oracles are the weakest point in DeFi. Artha fixes this.',
                                color: '#8c52ff',
                                icon: Eye
                            },
                            {
                                num: '05',
                                title: 'DualChain Trading Engine',
                                desc: 'Trades execute on ArthaCore, analytics store in ArthaFlow.',
                                monitors: ['Real-time on-chain analytics', 'AI insights for traders', 'Historical embedding-based predictions', 'Self-learning portfolios'],
                                actions: ['Your DeFi protocol becomes smarter with usage'],
                                tagline: 'Fast lane + Memory lane = Intelligent DeFi.',
                                color: '#ff4080',
                                icon: Activity
                            }
                        ].map((innovation, i) => {
                            const Icon = innovation.icon;

                            return (
                                <StaggerItem key={i}>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-12 gap-0"
                                        style={{
                                            marginLeft: `${(i % 2) * 3}rem`,
                                            marginRight: `${((i + 1) % 2) * 3}rem`
                                        }}
                                    >
                                        <div className="md:col-span-2 bg-white text-black flex items-center justify-center p-8">
                                            <div className="text-center">
                                                <div className="text-5xl sm:text-6xl font-black mb-4" style={{ color: innovation.color }}>{innovation.num}</div>
                                                <Icon className="w-12 h-12 mx-auto" style={{ color: innovation.color }} />
                                            </div>
                                        </div>

                                        <div className="md:col-span-10 bg-white text-black p-8 sm:p-10 md:p-12 border-b-8" style={{ borderBottomColor: innovation.color }}>
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">{innovation.title}</h3>
                                            <p className="text-lg sm:text-xl text-gray-700 mb-6">{innovation.desc}</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                <div>
                                                    <h4 className="text-sm font-black uppercase tracking-wider mb-3" style={{ color: innovation.color }}>Monitors</h4>
                                                    <div className="space-y-2">
                                                        {innovation.monitors.map((item, j) => (
                                                            <div key={j} className="flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: innovation.color }} />
                                                                <span className="text-sm sm:text-base">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-black uppercase tracking-wider mb-3" style={{ color: innovation.color }}>Actions</h4>
                                                    <div className="space-y-2">
                                                        {innovation.actions.map((item, j) => (
                                                            <div key={j} className="flex items-start gap-2">
                                                                <Zap className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: innovation.color }} />
                                                                <span className="text-sm sm:text-base">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6 bg-black text-white">
                                                <p className="text-base sm:text-lg font-bold">{innovation.tagline}</p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* DEFI MODULES - CARD DECK */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">DeFi Modules</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">Plug into your DeFi apps</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {[
                            { title: 'Atomic Cross-Shard Settlement', desc: 'Swap assets across shards in one logical transaction. No bridges needed.', color: '#8c52ff' },
                            { title: 'DeFi Reputation Scores', desc: 'AI-verified trading profile: risk history, reliability, liquidation patterns, on-chain behavior.', color: '#ff4080' },
                            { title: 'On-Chain Credit Infrastructure', desc: 'Decentralized credit scoring, DID-based borrower identity, AI-based loan underwriting.', color: '#ffc502' },
                            { title: 'Vector-Powered Portfolio Intelligence', desc: 'Analyze portfolio semantics, not just numbers. Similar assets cluster via vector distances.', color: '#8c52ff' }
                        ].map((module, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-black text-white p-8 sm:p-10 h-full border-t-8" style={{ borderTopColor: module.color }}>
                                    <h3 className="text-xl sm:text-2xl font-black mb-4" style={{ color: module.color }}>{module.title}</h3>
                                    <p className="text-base sm:text-lg text-gray-300">{module.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* USE CASES - ICON BADGES */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Ideal Use Cases</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { title: 'DEXs & Hybrid Order Books', items: ['High-frequency trading on-chain', 'Real-time order matching', 'No congestion'], color: '#8c52ff', icon: BarChart3 },
                            { title: 'Lending & Borrowing Protocols', items: ['AI-monitored collateral', 'Under-collateralized DID lending', 'Institutional credit markets'], color: '#ff4080', icon: DollarSign },
                            { title: 'Derivatives & Options Markets', items: ['AI-assisted volatility detection', 'Cross-shard derivatives', 'Quantum-secure contracts'], color: '#ffc502', icon: LineChart },
                            { title: 'RWA Platforms', items: ['Tokenized real estate', 'Treasury bills', 'Corporate bonds', 'Gold and commodities'], color: '#8c52ff', icon: Coins },
                            { title: 'Stablecoin Issuers', items: ['PQC signatures', 'Low-cost mints & burns', 'Sharded stability mechanisms'], color: '#ff4080', icon: Target },
                            { title: 'Prediction Markets', items: ['AI referee to detect manipulation', 'Vector-driven risk modeling', 'Sub-second settlement'], color: '#ffc502', icon: PieChart }
                        ].map((useCase, i) => {
                            const Icon = useCase.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white text-black p-8 sm:p-10 h-full">
                                        <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ backgroundColor: useCase.color }}>
                                            <Icon className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-black mb-4">{useCase.title}</h3>
                                        <div className="space-y-2">
                                            {useCase.items.map((item, j) => (
                                                <div key={j} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: useCase.color }} />
                                                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* COMPARISON TABLE */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-x-auto">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Why ArthaChain Wins the DeFi War</h2>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-black p-1">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#8c52ff] text-white">
                                        <th className="p-4 sm:p-6 text-left text-base sm:text-lg font-black">Problem in DeFi</th>
                                        <th className="p-4 sm:p-6 text-left text-base sm:text-lg font-black">ArthaChain Solution</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { problem: 'Congestion', solution: 'Sharded infrastructure' },
                                        { problem: 'Slow finality', solution: 'Sub-second SVBFT' },
                                        { problem: 'MEV', solution: 'AI-based ordering fairness' },
                                        { problem: 'Oracle attacks', solution: 'AI-secured oracles' },
                                        { problem: 'Exploits', solution: 'Predictive fraud detection' },
                                        { problem: 'Lack of compliance', solution: 'DID-gated pools' },
                                        { problem: 'Quantum risk', solution: 'PQC-native assets' },
                                        { problem: 'State bloat', solution: 'DualChain architecture' }
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                            <td className="p-4 sm:p-6 text-sm sm:text-base text-gray-600">{row.problem}</td>
                                            <td className="p-4 sm:p-6 text-sm sm:text-base font-black text-[#8c52ff]">{row.solution}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-12 bg-[#8c52ff] text-white p-8 sm:p-12 md:p-16 text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black">
                                ArthaChain becomes the global settlement layer for intelligent finance.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* FINAL STATEMENT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-5xl mx-auto text-center relative z-10">
                    <StaggerItem>
                        <div className="border-8 border-[#ffc502] p-8 sm:p-12 md:p-16 mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
                                Artha DeFi transforms decentralized finance into an intelligent, quantum-secure financial operating system for the world.
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link href="/coming-soon" className="px-8 sm:px-10 py-4 sm:py-5 bg-[#ffc502] text-black font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Start Building <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/arthaverse/features" className="px-8 sm:px-10 py-4 sm:py-5 border-4 border-white text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3">
                                All Features <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
