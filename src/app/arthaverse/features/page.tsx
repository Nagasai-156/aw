'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Database, Cpu, Network, Shield, Layers, GitBranch, Lock, Code2, Box, CheckCircle2, ArrowUpRight, Sparkles, Activity, TrendingUp, Target, Gauge, Workflow, Users } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function FeaturesPage() {
    const features = [
        {
            num: '01',
            title: 'Unified Compute Fabric',
            subtitle: 'UCF',
            tagline: 'One fabric. Three compute types. Zero friction.',
            description: 'ArthaChain merges blockchain compute + AI compute + vector compute into one seamless fabric.',
            unique: 'Most chains split compute into execution, storage, and off-chain AI. ArthaChain unifies them.',
            keyFeatures: [
                'Logic compute (EVM/WASM)',
                'Data compute (SVDB vector search)',
                'Intelligence compute (AI inference inside consensus)',
                'High-throughput parallelism',
                'Dynamic resource orchestration'
            ],
            benefit: 'Write one smart contract → scale across execution + AI + vector tasks with no extra infrastructure.',
            icon: Cpu,
            color: '#8c52ff'
        },
        {
            num: '02',
            title: 'Autonomous Network Optimization',
            subtitle: 'ANO',
            tagline: 'Self-regulating. Self-optimizing. Zero human intervention.',
            description: 'A self-regulating blockchain that adjusts its internal parameters dynamically without human intervention.',
            unique: 'No chain has this.',
            keyFeatures: [
                'Auto-tunes block time',
                'Auto-adjusts shard count',
                'Predictively balances network load',
                'Identifies congestion before it happens',
                'Reduces costs automatically during off-peak hours'
            ],
            benefit: 'Your dApp doesn\'t break under load. Your fees don\'t spike unpredictably. Your users always get stable performance.',
            icon: Activity,
            color: '#ff4080'
        },
        {
            num: '03',
            title: 'Seamless Multi-Modal Data Layer',
            subtitle: 'MMDL',
            tagline: 'Every data type. One unified layer.',
            description: 'A special data architecture that natively supports diverse data types: cryptographic data, transaction data, vector embeddings, binary blobs, ZK proof data, and identity metadata.',
            unique: 'Most chains only support key-value pairs and simple byte arrays. ArthaChain supports multi-modal AI-centric data out of the box.',
            keyFeatures: [
                'Cryptographic data',
                'Transaction data',
                'Vector embeddings',
                'Binary blobs',
                'ZK proof data',
                'Identity metadata'
            ],
            benefit: 'Native support for AI-centric applications without custom workarounds.',
            icon: Database,
            color: '#ffc502'
        },
        {
            num: '04',
            title: 'Adaptive Concurrency Engine',
            subtitle: 'ACE',
            tagline: 'Intelligent parallelism. Not static threading.',
            description: 'A technology inside the execution layer that parallelizes tasks intelligently, not statically.',
            unique: 'Detects non-conflicting transactions, splits them into isolated segments, executes each in its own thread, and uses DAG hints to optimize parallel lanes.',
            keyFeatures: [
                'Detects non-conflicting transactions',
                'Splits into isolated segments',
                'Thread-level execution',
                'Dependency graph checking',
                'DAG-optimized parallel lanes'
            ],
            benefit: 'Even heavy dApps (games, SocialFi, marketplaces) can run without bottlenecks.',
            icon: Zap,
            color: '#8c52ff'
        },
        {
            num: '05',
            title: 'Autonomous Reliability Layer',
            subtitle: 'ARL',
            tagline: 'Self-healing network. Biological resilience.',
            description: 'A system inside ArthaChain that ensures network health, self-healing, and runtime correction.',
            unique: 'The chain "fixes itself" like a biological organism.',
            keyFeatures: [
                'Detects malicious nodes',
                'Down-ranks weak validators',
                'Removes unreliable peers',
                'Re-routes cross-shard messages',
                'Enforces predictable global latency'
            ],
            benefit: 'Your application never depends on user-run bad hardware. The chain fixes itself.',
            icon: Shield,
            color: '#ff4080'
        },
        {
            num: '06',
            title: 'Staged Finality Pathway',
            subtitle: 'SFP',
            tagline: 'Choose your finality. Instant to Archive.',
            description: 'A multi-level finality system allowing developers to choose the level of confirmation they need.',
            unique: 'Build ultra-fast apps, ultra-secure apps, or BOTH depending on the transaction type.',
            keyFeatures: [
                'Instant Acknowledgement (Local safe-read)',
                'Soft Finality (Min 1 DAG confirmation)',
                'Hard BFT Finality (Full SVBFT commit)',
                'Archive Finality (Cross-shard verification)'
            ],
            benefit: 'Flexibility to optimize for speed OR security per transaction type.',
            icon: GitBranch,
            color: '#ffc502'
        },
        {
            num: '07',
            title: 'Zero-Trust Networking Fabric',
            subtitle: 'ZTNF',
            tagline: 'Trust nothing. Verify everything.',
            description: 'A network topology that assumes NO node is trustworthy and verifies everything mathematically.',
            unique: 'No privileged nodes. No bootstrap reliance. PQ-safe communication with trust scoring for each message route.',
            keyFeatures: [
                'No privileged nodes',
                'No bootstrap reliance',
                'Encrypted P2P topology',
                'PQ-safe communication',
                'Trust scoring for each message route'
            ],
            benefit: 'Consistency and reliability even in hostile environments.',
            icon: Lock,
            color: '#8c52ff'
        },
        {
            num: '08',
            title: 'Reactive Storage Layer',
            subtitle: 'RSL',
            tagline: 'Storage that adapts to your application.',
            description: 'A storage system that reacts to application demands in real time.',
            unique: 'AI-heavy applications get priority automatically with no DevOps required.',
            keyFeatures: [
                'Adjusts replication factor automatically',
                'Moves hot data closer to heavy apps',
                'Compresses cold data',
                'Reduces retrieval latency dynamically',
                'Balances storage load across shards'
            ],
            benefit: 'Your AI-heavy applications get priority automatically.',
            icon: Layers,
            color: '#ff4080'
        },
        {
            num: '09',
            title: 'Cross-Chain Abstract Connectivity',
            subtitle: 'CAC',
            tagline: 'Multi-chain from day 1.',
            description: 'A connectivity layer that makes ArthaChain multi-chain from day 1.',
            unique: 'Not just token bridging. Identity, computation, and AI state flow between chains.',
            keyFeatures: [
                'DID interoperability',
                'Token bridging (wrapped native support)',
                'AI vector interoperability',
                'Consensus-proof export',
                'Hybrid ZK + signature proof system'
            ],
            benefit: 'Identity, computation, and AI state flow seamlessly between chains.',
            icon: Network,
            color: '#ffc502'
        },
        {
            num: '10',
            title: 'Micro-Service Smart Contracts',
            subtitle: 'MSSC',
            tagline: 'Build dApps like modern cloud apps.',
            description: 'A contract structure where one application can be built as multiple independent micro-modules.',
            unique: 'Module-level upgrades, versioned deployment, and contract-level resource isolation.',
            keyFeatures: [
                'Module-level upgrades',
                'Versioned deployment',
                'Decoupled compute lanes',
                'Auto-restart without downtime',
                'Contract-level resource isolation'
            ],
            benefit: 'Build dApps like modern cloud apps instead of monolithic spaghetti smart contracts.',
            icon: Code2,
            color: '#8c52ff'
        },
        {
            num: '11',
            title: 'Resource-Predictive Gas Model',
            subtitle: 'RPGM',
            tagline: 'Stable fees. No volatility.',
            description: 'A new gas model that charges based on future predicted load, not static computation cost.',
            unique: 'Users get stable fees, not Solana-style fee volatility or Ethereum-style spikes.',
            keyFeatures: [
                'Predicts gas spikes',
                'Smooths costs for users',
                'Discounts long-term dApps',
                'Penalizes bursty malicious actors'
            ],
            benefit: 'Users get stable fees. No unpredictable spikes.',
            icon: Gauge,
            color: '#ff4080'
        },
        {
            num: '12',
            title: 'Developer-First UX Layer',
            subtitle: 'DFUX',
            tagline: 'Protocol-level dev tools.',
            description: 'A set of protocol-level tools to eliminate developer pain.',
            unique: 'No other chain offers this level of dev tooling at the protocol layer.',
            keyFeatures: [
                'Auto-debug execution logs',
                'Contract state diffs',
                'Transaction explainers',
                'Deterministic stack traces',
                'Developer sandboxes',
                'Multi-chain simulators'
            ],
            benefit: 'Debug faster. Build faster. Ship faster.',
            icon: Target,
            color: '#ffc502'
        },
        {
            num: '13',
            title: 'Intelligent Orchestration Pipeline',
            subtitle: 'IOP',
            tagline: 'Cronjobs for blockchain. AI-optimized.',
            description: 'A special framework that lets dApps schedule operations that run when the network is least busy.',
            unique: 'Automated batch jobs, AI retraining cycles, scheduled computations, and maintenance tasks.',
            keyFeatures: [
                'Automated batch jobs',
                'AI retraining cycles',
                'Scheduled computations',
                'Maintenance tasks',
                'Network-aware scheduling'
            ],
            benefit: 'Schedule operations intelligently. Save costs automatically.',
            icon: Workflow,
            color: '#8c52ff'
        },
        {
            num: '14',
            title: 'Agent-Native System Design',
            subtitle: 'ANSD',
            tagline: 'Built for the Agent Economy.',
            description: 'ArthaChain is the only L1 built with AI agents as first-class citizens.',
            unique: 'Agents can sign transactions, own assets, store memories, execute workflows autonomously, and communicate P2P OFF-chain.',
            keyFeatures: [
                'Agents can sign transactions',
                'Own assets',
                'Store memories',
                'Execute workflows autonomously',
                'Inherit permissions via DID',
                'Communicate P2P with other agents OFF-chain'
            ],
            benefit: 'Prepares ArthaChain for the "Agent Economy" emerging in 2025–2030.',
            icon: Brain,
            color: '#ff4080'
        },
        {
            num: '15',
            title: 'Biological Self-Regulation Model',
            subtitle: 'BSRM',
            tagline: 'Homeostasis for blockchain.',
            description: 'Inspired by the homeostasis of human biology, ArthaChain maintains equilibrium autonomously.',
            unique: 'One of the single most unique concepts in blockchain.',
            keyFeatures: [
                'Self-balancing shards',
                'Self-correcting consensus',
                'Self-healing P2P',
                'Self-diagnosing nodes',
                'Self-recovering transactions'
            ],
            benefit: 'The blockchain that thinks and heals like a living organism.',
            icon: Activity,
            color: '#ffc502'
        }
    ];

    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - MASSIVE STATEMENT */}
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
                            <div className="inline-block px-6 py-3 bg-[#8c52ff] text-white text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-8 sm:mb-12">
                                ArthaVerse Features
                            </div>
                            <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter mb-8 sm:mb-12">
                                Everything<br />
                                <span className="text-[#ffc502]">ArthaChain</span><br />
                                Unlocks
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-4xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
                                For the Intelligent Internet.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-w-5xl mx-auto px-4 mb-12 sm:mb-16">
                            {[
                                { num: '15', label: 'Features', color: '#8c52ff' },
                                { num: '100%', label: 'Unique', color: '#ff4080' },
                                { num: '0', label: 'Competitors', color: '#ffc502' },
                                { num: '∞', label: 'Possibilities', color: '#8c52ff' },
                                { num: '1st', label: 'In Class', color: '#ff4080' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white text-black p-4 sm:p-6 text-center">
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2" style={{ color: stat.color }}>{stat.num}</div>
                                    <p className="text-xs sm:text-sm font-bold">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FEATURES - ALTERNATING ASYMMETRIC LAYOUT */}
            {features.map((feature, index) => {
                const Icon = feature.icon;
                const isEven = index % 2 === 0;

                return (
                    <section
                        key={index}
                        className={`min-h-screen relative flex items-center ${isEven ? 'bg-white' : 'bg-black text-white'}`}
                    >
                        <div className={`absolute inset-0 ${isEven ? 'bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]'} bg-[size:60px_60px] opacity-[0.04]`} />

                        <StaggerContainer className="w-full relative z-10">
                            <div className={`grid grid-cols-1 md:grid-cols-12 gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                                {/* Number Side */}
                                <div
                                    className={`md:col-span-3 ${!isEven ? 'md:order-2' : ''} flex items-center justify-center p-8 sm:p-12`}
                                    style={{ backgroundColor: feature.color }}
                                >
                                    <div className="text-center">
                                        <div className="text-[8rem] sm:text-[12rem] md:text-[15rem] font-black text-white leading-none mb-4">
                                            {feature.num}
                                        </div>
                                        <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                                            {feature.subtitle}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`md:col-span-9 ${!isEven ? 'md:order-1' : ''} p-8 sm:p-12 md:p-16 lg:p-20`}>
                                    <StaggerItem>
                                        <div className="mb-8 sm:mb-12">
                                            <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-6 sm:mb-8`} style={{ backgroundColor: feature.color }}>
                                                <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
                                            </div>
                                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6">{feature.title}</h2>
                                            <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8" style={{ color: feature.color }}>
                                                {feature.tagline}
                                            </p>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem>
                                        <div className="mb-8 sm:mb-10 md:mb-12">
                                            <h3 className={`text-lg sm:text-xl font-black mb-3 sm:mb-4 uppercase tracking-wider ${isEven ? 'text-gray-500' : 'text-gray-400'}`}>What it is</h3>
                                            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">{feature.description}</p>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem>
                                        <div className={`p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 md:mb-12 border-l-4 sm:border-l-8`} style={{ borderLeftColor: feature.color, backgroundColor: isEven ? '#000' : '#fff', color: isEven ? '#fff' : '#000' }}>
                                            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">Why it's unique</h3>
                                            <p className="text-base sm:text-lg md:text-xl">{feature.unique}</p>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem>
                                        <div className="mb-8 sm:mb-10 md:mb-12">
                                            <h3 className={`text-lg sm:text-xl font-black mb-4 sm:mb-6 uppercase tracking-wider ${isEven ? 'text-gray-500' : 'text-gray-400'}`}>Key Features</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                {feature.keyFeatures.map((item, i) => (
                                                    <div key={i} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" style={{ color: feature.color }} />
                                                        <span className="text-sm sm:text-base md:text-lg">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem>
                                        <div className={`p-6 sm:p-8 md:p-10`} style={{ backgroundColor: feature.color }}>
                                            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-white">Developer Benefit</h3>
                                            <p className="text-base sm:text-lg md:text-xl text-white">{feature.benefit}</p>
                                        </div>
                                    </StaggerItem>
                                </div>
                            </div>
                        </StaggerContainer>
                    </section>
                );
            })}

            {/* FINAL CTA */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10 text-center">
                    <StaggerItem>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8">
                            Ready to Build the Future?
                        </h2>
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-12 sm:mb-16">
                            15 features. Infinite possibilities. One blockchain.
                        </p>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link
                                href="/dev/docs"
                                className="px-8 sm:px-10 py-4 sm:py-5 bg-[#8c52ff] text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-[#ff4080] transition-all duration-300 inline-flex items-center justify-center gap-3"
                            >
                                Start Building <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/core-technology"
                                className="px-8 sm:px-10 py-4 sm:py-5 border-4 border-white text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3"
                            >
                                Explore Tech <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
