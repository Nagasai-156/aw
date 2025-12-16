'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Building2, Shield, Zap, Brain, Lock, Database, CheckCircle2, ArrowUpRight, TrendingUp, Users, Activity, Award, Code2, Settings, Eye, Layers, Network, Target, Workflow } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function EnterprisePage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - SPLIT DIAGONAL WITH REQUIREMENTS */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Diagonal Split */}
                <div className="absolute inset-0 bg-[#8c52ff]" style={{ clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0 100%)' }} />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-block px-6 py-3 bg-white text-black text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-8">
                            Enterprise
                        </div>
                        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter mb-8 max-w-4xl">
                            Where Global Institutions Build<br />
                            <span className="text-[#ffc502]">Intelligent,</span><br />
                            <span className="text-[#ff4080]">Secure,</span> and<br />
                            <span className="text-[#ffc502]">Scalable</span><br />
                            Digital Infrastructure.
                        </h1>

                        {/* Requirements Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mt-12">
                            {[
                                'High throughput',
                                'Predictable fees',
                                'Zero downtime',
                                'Privacy for sensitive data',
                                'Identity control',
                                'Compliance alignment',
                                'Quantum-resistant security',
                                'AI-native acceleration'
                            ].map((req, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="bg-white text-black p-4 sm:p-6 text-center border-4 border-[#ffc502]"
                                >
                                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-[#8c52ff]" />
                                    <p className="text-xs sm:text-sm font-black">{req}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 bg-[#ffc502] text-black p-6 sm:p-8 inline-block">
                            <p className="text-xl sm:text-2xl md:text-3xl font-black">
                                Not just "enterprise ready" but enterprise future-proof.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHY ENTERPRISES CHOOSE - HEXAGON GRID */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Why Enterprises Choose ArthaChain</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">A high-performance distributed operating system, not a crypto toy.</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                        {[
                            {
                                title: 'Zero Staking for Predictable Control',
                                points: ['No need to stake millions', 'AI-driven reputation, not capital dominance', 'Any enterprise can join', 'High-availability nodes'],
                                color: '#8c52ff',
                                icon: Shield
                            },
                            {
                                title: 'Quantum-Secure by Default',
                                points: ['Dilithium & ML-DSA signatures', 'Kyber KEM', 'Hybrid key infrastructure', 'Safe against future quantum computers'],
                                color: '#ff4080',
                                icon: Lock
                            },
                            {
                                title: 'Infinite Scalability',
                                points: ['Dynamic sharding', 'Expands with demand', 'Tens of millions of users instantly', 'No bottlenecks'],
                                color: '#ffc502',
                                icon: Zap
                            },
                            {
                                title: 'On-Chain AI Infrastructure',
                                points: ['AI inference on-chain', 'Vector memory (SVDB)', 'ML-based consensus tuning', 'Real-time intelligent automation'],
                                color: '#8c52ff',
                                icon: Brain
                            }
                        ].map((reason, i) => {
                            const Icon = reason.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-black text-white p-8 sm:p-10 md:p-12 h-full relative overflow-hidden">
                                        {/* Corner Triangles */}
                                        <div className="absolute top-0 left-0 w-16 h-16" style={{ backgroundColor: reason.color, clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
                                        <div className="absolute bottom-0 right-0 w-16 h-16" style={{ backgroundColor: reason.color, clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />

                                        <div className="relative">
                                            <Icon className="w-12 h-12 sm:w-16 sm:h-16 mb-6" style={{ color: reason.color }} />
                                            <h3 className="text-2xl sm:text-3xl font-black mb-6">{reason.title}</h3>
                                            <div className="space-y-3">
                                                {reason.points.map((point, j) => (
                                                    <div key={j} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: reason.color }} />
                                                        <span className="text-base sm:text-lg">{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* 5 ENTERPRISE PILLARS - VERTICAL CARDS WITH OFFSET */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">5 Enterprise Pillars</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">Unique to ArthaChain</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-8">
                        {[
                            {
                                num: '01',
                                title: 'Identity Governance & Compliance Framework',
                                features: ['Corporate DID accounts', 'Role-based identity mapping', 'Employee credential verification', 'Zero-knowledge regulatory compliance', 'ZK-based KYC/AML', 'Fine-grained access control'],
                                tagline: 'Decentralization with enterprise-grade control.',
                                color: '#8c52ff',
                                icon: Users
                            },
                            {
                                num: '02',
                                title: 'Enterprise Data Layer (ArthaFlow)',
                                features: ['Vector embeddings storage', 'Immutable audit trails', 'Privacy-preserving logs', 'Federated data processing', 'Secure data availability', 'Encrypted documents & credentials'],
                                tagline: 'A blockchain that understands data, not just transactions.',
                                color: '#ff4080',
                                icon: Database
                            },
                            {
                                num: '03',
                                title: 'Automated Workflows & Business Logic',
                                features: ['Multi-level approvals', 'Role-based workflows', 'Complex supply chain checks', 'Enterprise governance protocols', 'Automated audit triggers'],
                                tagline: 'Enforced by deterministic smart contracts.',
                                color: '#ffc502',
                                icon: Workflow
                            },
                            {
                                num: '04',
                                title: 'High-Performance DePIN',
                                features: ['Banks: Fraud-AI engines', 'Hospitals: Medical imaging inference', 'Retail: Customer experience AI', 'Governments: e-Gov verification', 'Telcos: IoT data pipelines'],
                                tagline: 'Corporate infrastructure as decentralized compute pools.',
                                color: '#8c52ff',
                                icon: Network
                            },
                            {
                                num: '05',
                                title: 'Zero-Trust Security Architecture',
                                features: ['Quantum-resistant transactions', 'AI intrusion detection', 'Randomized validator rotation', 'Zero-knowledge privacy layer', 'End-to-end encrypted messaging', 'Byzantine-resilient consensus'],
                                tagline: 'Military-grade security stack.',
                                color: '#ff4080',
                                icon: Shield
                            }
                        ].map((pillar, i) => {
                            const Icon = pillar.icon;
                            const isEven = i % 2 === 0;

                            return (
                                <StaggerItem key={i}>
                                    <div
                                        className={`grid grid-cols-1 md:grid-cols-12 gap-0 ${isEven ? 'md:ml-0 md:mr-12' : 'md:ml-12 md:mr-0'}`}
                                    >
                                        <div className={`md:col-span-2 bg-white text-black flex items-center justify-center p-8 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                                            <div className="text-center">
                                                <div className="text-5xl sm:text-6xl font-black mb-4" style={{ color: pillar.color }}>{pillar.num}</div>
                                                <Icon className="w-12 h-12 mx-auto" style={{ color: pillar.color }} />
                                            </div>
                                        </div>

                                        <div className={`md:col-span-10 bg-white text-black p-8 sm:p-10 md:p-12 border-t-8 ${isEven ? 'md:order-2' : 'md:order-1'}`} style={{ borderTopColor: pillar.color }}>
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6">{pillar.title}</h3>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                                {pillar.features.map((feature, j) => (
                                                    <div key={j} className="flex items-start gap-2">
                                                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: pillar.color }}>
                                                            <span className="text-white text-xs font-black">✓</span>
                                                        </div>
                                                        <span className="text-sm sm:text-base">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="p-6 bg-black text-white">
                                                <p className="text-base sm:text-lg font-bold">{pillar.tagline}</p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* USE CASES - ICON MATRIX */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Key Enterprise Use Cases</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                title: 'Banking & FinTech',
                                items: ['Real-time settlements', 'Fraud detection AI', 'CBDCs', 'Interbank communication', 'Tokenized assets', 'Automated AML/KYC'],
                                color: '#8c52ff',
                                icon: TrendingUp
                            },
                            {
                                title: 'Healthcare & MedTech',
                                items: ['Encrypted patient records', 'DID-based health identity', 'AI-assisted diagnostics', 'Drug supply chain verification', 'Clinical trial audit trails'],
                                color: '#ff4080',
                                icon: Activity
                            },
                            {
                                title: 'Telecom & IoT',
                                items: ['Identity for billions of IoT devices', 'Tamper-proof logs', 'Federated learning coordination', 'Real-time device scoring', 'Secure multi-device communication'],
                                color: '#ffc502',
                                icon: Network
                            },
                            {
                                title: 'Supply Chain & Logistics',
                                items: ['End-to-end product traceability', 'AI-powered risk prediction', 'Customs compliance via ZK proofs', 'Asset tracking with DID', 'Fraud-proof documentation'],
                                color: '#8c52ff',
                                icon: Layers
                            },
                            {
                                title: 'Government & Public Sector',
                                items: ['Digital ID', 'Land records', 'Citizen credentialing', 'E-Governance workflows', 'ZK-enabled subsidies distribution'],
                                color: '#ff4080',
                                icon: Building2
                            },
                            {
                                title: 'Retail & Consumer Tech',
                                items: ['Loyalty tokens', 'AI-driven personalization', 'DID-based consumer identity', 'Gamified engagement', 'On-chain customer analytics'],
                                color: '#ffc502',
                                icon: Target
                            }
                        ].map((useCase, i) => {
                            const Icon = useCase.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-black text-white p-8 sm:p-10 h-full border-l-8" style={{ borderLeftColor: useCase.color }}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: useCase.color }}>
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-black">{useCase.title}</h3>
                                        </div>
                                        <div className="space-y-2">
                                            {useCase.items.map((item, j) => (
                                                <div key={j} className="flex items-start gap-2">
                                                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: useCase.color }} />
                                                    <span className="text-sm sm:text-base text-gray-300">{item}</span>
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

            {/* DEVELOPER TOOLING - CHECKLIST STYLE */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Developer Tooling</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">Everything designed for mission-critical operations.</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            'Enterprise API Gateway',
                            'DID Governance Engine',
                            'Workflow Orchestrator',
                            'Compliance Framework SDK',
                            'High-availability validator blueprints',
                            'Private shard options',
                            'ZK-compliance modules',
                            'Multi-signature corporate wallets (PQC)',
                            'AI Ops Dashboard for node monitoring'
                        ].map((tool, i) => {
                            const colors = ['#8c52ff', '#ff4080', '#ffc502'];
                            const color = colors[i % 3];

                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white text-black p-6 sm:p-8 flex items-center gap-4 border-l-4" style={{ borderLeftColor: color }}>
                                        <CheckCircle2 className="w-8 h-8 flex-shrink-0" style={{ color }} />
                                        <span className="text-base sm:text-lg font-bold">{tool}</span>
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
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Why ArthaChain Beats Every Other Enterprise Blockchain</h2>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-black text-white p-1 min-w-full">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#8c52ff]">
                                        <th className="p-4 sm:p-6 text-left text-base sm:text-lg font-black">Competitor</th>
                                        <th className="p-4 sm:p-6 text-left text-base sm:text-lg font-black">Problem</th>
                                        <th className="p-4 sm:p-6 text-left text-base sm:text-lg font-black">ArthaChain Advantage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { comp: 'Hyperledger', problem: 'No AI, no public trust layer', advantage: 'Full AI + Public Infrastructure' },
                                        { comp: 'Polygon CDK', problem: 'Still PoS, not quantum-secure', advantage: 'PQC-native + AI-native' },
                                        { comp: 'Solana', problem: 'Not identity-first', advantage: 'DID-native' },
                                        { comp: 'Avalanche', problem: 'High TPS but no vector memory', advantage: 'Native SVDB + AI' },
                                        { comp: 'Cosmos', problem: 'Isolated chains', advantage: 'Unified DualChain architecture' },
                                        { comp: 'Near', problem: 'Fast but not quantum-proof', advantage: 'Deep PQC integration' },
                                        { comp: 'Bittensor', problem: 'AI-only, no enterprise features', advantage: 'Dual ecosystem: AI + Enterprise' }
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white text-black' : 'bg-gray-100 text-black'}>
                                            <td className="p-4 sm:p-6 font-black text-sm sm:text-base">{row.comp}</td>
                                            <td className="p-4 sm:p-6 text-sm sm:text-base text-gray-600">{row.problem}</td>
                                            <td className="p-4 sm:p-6 font-bold text-sm sm:text-base text-[#8c52ff]">{row.advantage}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* FINAL STATEMENT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#8c52ff] text-white relative">
                <StaggerContainer className="max-w-5xl mx-auto text-center">
                    <StaggerItem>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
                            Artha Enterprise: Build next-generation systems on a blockchain engineered for intelligence, security, scale, and global trust.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link href="/coming-soon" className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#8c52ff] font-black text-base sm:text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-3">
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
