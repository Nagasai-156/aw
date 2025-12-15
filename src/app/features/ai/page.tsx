'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Brain, Database, Cpu, Zap, Shield, Network, Code2, CheckCircle2, ArrowUpRight, Sparkles, Activity, Lock, Users, Target, Workflow, Eye, Settings, TrendingUp, Box } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function AIPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - BRAIN VISUALIZATION */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Animated Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#8c52ff]/20 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#ff4080]/15 rounded-full blur-[100px]"
                    animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#8c52ff] text-white text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-8 sm:mb-12">
                            <Brain className="w-5 h-5" />
                            <span>AI Suite</span>
                        </div>

                        <h1 className="text-[clamp(2rem,8vw,7rem)] font-black leading-[0.9] tracking-tighter mb-8 sm:mb-12">
                            AI that lives<br />
                            <span className="text-[#8c52ff]">on-chain.</span><br />
                            Learns on-chain.<br />
                            <span className="text-[#ff4080]">Acts on-chain.</span>
                        </h1>

                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed">
                            The first blockchain where AI is not a dApp but a protocol-level capability.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 sm:mb-16">
                            {[
                                { label: 'No Cloud Servers', icon: Shield },
                                { label: 'No External APIs', icon: Network },
                                { label: 'No Centralized Hosting', icon: Lock },
                                { label: 'Pure On-Chain', icon: CheckCircle2 }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 * i }}
                                        className="bg-white text-black p-4 sm:p-6 text-center"
                                    >
                                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3" style={{ color: '#8c52ff' }} />
                                        <p className="text-xs sm:text-sm font-black">{item.label}</p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="inline-block bg-[#ffc502] text-black px-8 py-4 text-xl sm:text-2xl md:text-3xl font-black">
                            The First AI Operating System Built Into a Layer 1
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* AI COMPONENTS - HEXAGONAL GRID */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">7 Protocol-Level AI Modules</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">No other chain has these.</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-8 sm:space-y-12">
                        {[
                            {
                                num: '01',
                                title: 'Artha.AI Agents',
                                subtitle: 'On-Chain Autonomous Agents',
                                desc: 'AI Agents are first-class citizens on ArthaChain.',
                                receives: ['Own DID', 'PQC keypair', 'On-chain wallet', 'Memory vault', 'Execution rights', 'Social identity'],
                                can: ['Execute smart contracts', 'Trigger workflows', 'Manage funds', 'Learn from vector memory', 'Interact with users and agents', 'Participate in DAO voting', 'Perform enterprise tasks'],
                                unique: 'Other chains host AI models. ArthaChain hosts AI personalities with autonomy.',
                                icon: Brain,
                                color: '#8c52ff'
                            },
                            {
                                num: '02',
                                title: 'Vector Memory Engine',
                                subtitle: 'SVDB Integration',
                                desc: 'Every AI agent can access ArthaFlow\'s Vector Database natively.',
                                receives: ['Store memory embeddings', 'Perform similarity search', 'Fetch past conversations', 'Retrieve knowledge', 'Track user behaviour via ZK vectors', 'Maintain long-term context'],
                                can: ['Remember permanently', 'Store privately', 'Operate decentralized', 'No cloud storage', 'No external vector DB', 'No vendor lock-in'],
                                unique: 'AI on Artha can remember permanently, privately, and in a decentralized manner.',
                                icon: Database,
                                color: '#ff4080'
                            },
                            {
                                num: '03',
                                title: 'ARTHA Model Runtime',
                                subtitle: 'On-Chain Inference Layer',
                                desc: 'WASM-native inference runtime optimized for AI models.',
                                receives: ['Small/medium LLMs', 'Speech models', 'Face-recognition models', 'Intent-routing models', 'Domain-specific AI tools'],
                                can: ['No GPU rentals', 'Deterministic inference', 'Quantum-secure inputs', 'ZK-verifiable outputs', 'Run moderation models', 'Personal assistants', 'Enterprise rule engines'],
                                unique: 'On-chain inference = No server required.',
                                icon: Cpu,
                                color: '#ffc502'
                            },
                            {
                                num: '04',
                                title: 'AI Behavior Score',
                                subtitle: 'Node Intelligence System',
                                desc: 'ArthaChain measures node behavior using AI.',
                                receives: ['Read node intelligence metrics', 'Check trust scores', 'Build trust-based routing', 'Use intelligent transaction ordering', 'Create adaptive smart contracts'],
                                can: ['Adaptive blockchain behavior', 'Trust-based routing', 'Intelligent ordering', 'Dynamic optimization'],
                                unique: 'ArthaChain becomes an adaptive blockchain.',
                                icon: Activity,
                                color: '#8c52ff'
                            },
                            {
                                num: '05',
                                title: 'Federated Learning Layer',
                                subtitle: 'Decentralized Model Training',
                                desc: 'Developers and enterprises can participate in global model training.',
                                receives: ['Upload model deltas', 'Participate in training', 'Validate contributions', 'Prove correctness via ZK'],
                                can: ['AI reputation engines', 'Community model training', 'Personalized AI through local updates', 'Decentralized OpenAI ecosystem'],
                                unique: 'Like OpenAI\'s ecosystem, but decentralized and quantum-secure.',
                                icon: Network,
                                color: '#ff4080'
                            },
                            {
                                num: '06',
                                title: 'Agent Permissions & Policy Engine',
                                subtitle: 'Protocol-Level AI Rules',
                                desc: 'AI agents need rules. ArthaChain has a protocol-level policy engine.',
                                receives: ['Spending limits', 'Domain restrictions', 'Allowed/blocked addresses', 'Required verifiable credentials', 'Multi-signature thresholds', 'Biometric approval'],
                                can: ['"This AI can only spend $5/day"', '"This AI cannot interact with DeFi"', '"This AI can only work with DID-verified humans"'],
                                unique: 'This makes AI safe and enterprise-ready.',
                                icon: Shield,
                                color: '#ffc502'
                            },
                            {
                                num: '07',
                                title: 'AI Intent Router',
                                subtitle: 'Smart Intent Parsing',
                                desc: 'Users can write simple intents in natural language.',
                                receives: ['"Send 10 tokens to my closest friend"', '"Swap my USDT to ARTHA at lowest slippage"', '"Remind me when BTC hits 90K"', '"Find me the best validator"', '"Create me an investment plan"'],
                                can: ['Parse user input', 'Identify required contracts', 'Route to appropriate AI agents', 'Execute with security constraints'],
                                unique: 'AI-powered UX that feels magical.',
                                icon: Zap,
                                color: '#8c52ff'
                            }
                        ].map((module, i) => {
                            const Icon = module.icon;
                            const isEven = i % 2 === 0;

                            return (
                                <StaggerItem key={i}>
                                    <div className={`grid grid-cols-1 md:grid-cols-12 gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                                        {/* Number Badge */}
                                        <div
                                            className={`md:col-span-2 ${!isEven ? 'md:order-2' : ''} flex items-center justify-center p-8 sm:p-12`}
                                            style={{ backgroundColor: module.color }}
                                        >
                                            <div className="text-center">
                                                <div className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-none mb-4">
                                                    {module.num}
                                                </div>
                                                <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className={`md:col-span-10 ${!isEven ? 'md:order-1' : ''} bg-black text-white p-8 sm:p-10 md:p-12`}>
                                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">{module.title}</h3>
                                            <p className="text-xl sm:text-2xl font-bold mb-6" style={{ color: module.color }}>{module.subtitle}</p>
                                            <p className="text-lg sm:text-xl text-gray-400 mb-8">{module.desc}</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                                                <div>
                                                    <h4 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: module.color }}>Features</h4>
                                                    <div className="space-y-2">
                                                        {module.receives.map((item, j) => (
                                                            <div key={j} className="flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: module.color }} />
                                                                <span className="text-sm sm:text-base">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: module.color }}>Capabilities</h4>
                                                    <div className="space-y-2">
                                                        {module.can.map((item, j) => (
                                                            <div key={j} className="flex items-start gap-2">
                                                                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: module.color }} />
                                                                <span className="text-sm sm:text-base">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6 sm:p-8 border-l-4" style={{ borderLeftColor: module.color, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                                <p className="text-base sm:text-lg font-bold">{module.unique}</p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* DEVELOPER TOOLS - CARD STACK */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Developer Tools</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">The most complete AI developer toolkit ever launched by a blockchain.</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: Code2,
                                title: 'ArthaAgent SDK',
                                languages: ['Rust', 'TypeScript', 'Python', 'Go'],
                                features: ['Spawn agents', 'Manage memory', 'Register DID', 'Set execution policies', 'Bind credentials', 'Run inference', 'Execute smart contracts'],
                                color: '#8c52ff'
                            },
                            {
                                icon: Database,
                                title: 'Memory Studio',
                                languages: ['Vector Memory Builder'],
                                features: ['Upload embeddings', 'View memory clusters', 'Track relationships', 'Configure retention', 'Manage access permissions'],
                                color: '#ff4080'
                            },
                            {
                                icon: Zap,
                                title: 'Intent API',
                                languages: ['Natural Language Integration'],
                                features: ['Simple JSON requests', 'Chain handles execution', 'Constraint support', 'Automatic routing', 'Security built-in'],
                                color: '#ffc502'
                            },
                            {
                                icon: Cpu,
                                title: 'On-Chain Model Loader',
                                languages: ['WASM Models'],
                                features: ['Upload WASM models', 'Attach to agents', 'Call from smart contracts', 'Update with federated learning'],
                                color: '#8c52ff'
                            },
                            {
                                icon: Lock,
                                title: 'AI Proof System',
                                languages: ['Coming Soon'],
                                features: ['Model correctness', 'Output integrity', 'Bias detection', 'Verification logs', 'ZK transparency'],
                                color: '#ff4080'
                            }
                        ].map((tool, i) => {
                            const Icon = tool.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white text-black p-6 sm:p-8 h-full hover:scale-105 transition-all duration-300">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6" style={{ backgroundColor: tool.color }}>
                                            <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-black mb-4">{tool.title}</h3>

                                        <div className="mb-6">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {tool.languages.map((lang, j) => (
                                                    <span key={j} className="px-3 py-1 text-xs font-black uppercase" style={{ backgroundColor: tool.color, color: 'white' }}>
                                                        {lang}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            {tool.features.map((feature, j) => (
                                                <div key={j} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: tool.color }} />
                                                    <span className="text-sm">{feature}</span>
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

            {/* DIFFERENTIATORS - COMPARISON TABLE */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">What Makes It Untouchable</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">8 Key Differentiators</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-4">
                        {[
                            { artha: 'AI agents are DID-native', others: 'API endpoints', color: '#8c52ff' },
                            { artha: 'Memory is vector-native', others: 'Slow IPFS blobs', color: '#ff4080' },
                            { artha: 'Inference is on-chain', others: 'Cloud dependent', color: '#ffc502' },
                            { artha: 'Security is quantum-native', others: 'Elliptic curves', color: '#8c52ff' },
                            { artha: 'Trust is behavior-based', others: 'Stake-based', color: '#ff4080' },
                            { artha: 'AI policies are protocol-level', others: 'dApp logic', color: '#ffc502' },
                            { artha: 'Agents can own assets', others: 'Just run inference', color: '#8c52ff' },
                            { artha: 'Works across all verticals', others: 'Limited use cases', color: '#ff4080' }
                        ].map((diff, i) => (
                            <StaggerItem key={i}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black">
                                    <div className="bg-white p-6 sm:p-8 border-l-8" style={{ borderLeftColor: diff.color }}>
                                        <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-gray-500 mb-2">ArthaChain</p>
                                        <p className="text-lg sm:text-xl md:text-2xl font-black">{diff.artha}</p>
                                    </div>
                                    <div className="bg-gray-100 p-6 sm:p-8">
                                        <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-gray-500 mb-2">Other Chains</p>
                                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-600 line-through">{diff.others}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <div className="mt-12 sm:mt-16 bg-black text-white p-8 sm:p-12 md:p-16 text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black">
                                No blockchain today can match this depth.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* USE CASES - ICON GRID */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Real-World AI Use Cases</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">Everything is self-custodial and trustless.</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
                        {[
                            { icon: Users, label: 'Customer Support Agents' },
                            { icon: TrendingUp, label: 'Trading & Risk Bots' },
                            { icon: Box, label: 'Supply-Chain Verifiers' },
                            { icon: Target, label: 'Loan Underwriters' },
                            { icon: Sparkles, label: 'Recommendation Systems' },
                            { icon: Shield, label: 'Security Auditors' },
                            { icon: Eye, label: 'Moderation Agents' },
                            { icon: Workflow, label: 'NPCs for Games' },
                            { icon: CheckCircle2, label: 'Identity Verifiers' },
                            { icon: Settings, label: 'Enterprise Automation' }
                        ].map((useCase, i) => {
                            const Icon = useCase.icon;
                            const colors = ['#8c52ff', '#ff4080', '#ffc502'];
                            const color = colors[i % 3];

                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white text-black p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300">
                                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" style={{ color }} />
                                        <p className="text-xs sm:text-sm font-black">{useCase.label}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* FINAL STATEMENT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#8c52ff] to-[#ff4080] text-white relative">
                <StaggerContainer className="max-w-5xl mx-auto text-center">
                    <StaggerItem>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
                            The Artha AI Suite transforms ArthaChain into the first intelligent Layer 1: a blockchain where AI has memory, identity, responsibilities, and on-chain autonomy.
                        </h2>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16">
                            This is the future of intelligent decentralized systems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link href="/dev/docs" className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#8c52ff] font-black text-base sm:text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Start Building <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/arthaverse/features" className="px-8 sm:px-10 py-4 sm:py-5 border-4 border-white text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-[#8c52ff] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                All Features <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
