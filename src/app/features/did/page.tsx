'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Lock, Eye, Fingerprint, Smartphone, Brain, Users, CheckCircle2, Zap, Key, Database, Network, Code2, ArrowUpRight, Layers, Activity } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function DIDPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - DIAGONAL SPLIT */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Diagonal Split Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8c52ff]/20 to-transparent" style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)' }} />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Left - Text */}
                            <div>
                                <div className="inline-block px-6 py-3 bg-[#8c52ff] text-white text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-8">
                                    Decentralized Identity
                                </div>
                                <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter mb-8">
                                    Your Identity.<br />
                                    Your Data.<br />
                                    <span className="text-[#8c52ff]">Your Sovereignty.</span>
                                </h1>
                                <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed">
                                    The world's first quantum-secure, AI-native, biometric-enhanced identity system.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="#architecture" className="px-8 py-4 bg-[#8c52ff] text-white font-black uppercase tracking-wider hover:bg-[#ff4080] transition-all duration-300 text-center">
                                        Explore DID Layer
                                    </Link>
                                    <Link href="/dev/docs" className="px-8 py-4 border-4 border-white text-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 text-center">
                                        Developer Docs
                                    </Link>
                                </div>
                            </div>

                            {/* Right - Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Shield, label: 'Quantum-Secure', color: '#8c52ff' },
                                    { icon: Fingerprint, label: 'Biometric-Enhanced', color: '#ff4080' },
                                    { icon: Brain, label: 'AI-Native', color: '#ffc502' },
                                    { icon: Lock, label: 'Zero-Knowledge', color: '#8c52ff' }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 * i }}
                                            className="bg-white text-black p-6 sm:p-8 text-center"
                                        >
                                            <Icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" style={{ color: item.color }} />
                                            <p className="text-sm sm:text-base font-black">{item.label}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PHILOSOPHY - CIRCULAR LAYOUT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">The Philosophy</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">Inspired by Ancient Indian Principles</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {[
                            { title: 'Swatantra', subtitle: 'Self-Governance', desc: 'Your identity belongs ONLY to you.', color: '#8c52ff' },
                            { title: 'Satya', subtitle: 'Verifiable Truth', desc: 'Identities must be mathematically provable.', color: '#ff4080' },
                            { title: 'Sutra', subtitle: 'Interconnectedness', desc: 'One identity powers infinite applications without fragmentation.', color: '#ffc502' },
                            { title: 'Nitya', subtitle: 'Continuity', desc: 'Identity evolves over time without changing its root.', color: '#8c52ff' }
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-black text-white p-8 sm:p-10 md:p-12 h-full border-l-8" style={{ borderLeftColor: item.color }}>
                                    <h3 className="text-3xl sm:text-4xl font-black mb-2" style={{ color: item.color }}>{item.title}</h3>
                                    <p className="text-lg sm:text-xl font-bold mb-4 text-gray-400">{item.subtitle}</p>
                                    <p className="text-base sm:text-lg text-gray-300">{item.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <div className="bg-[#8c52ff] text-white p-8 sm:p-12 md:p-16 text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black">
                                A digital identity system built for the next 100 years.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* ARCHITECTURE - 4 COMPONENTS IN BENTO GRID */}
            <section id="architecture" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Identity Architecture</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">Four Interlocking Components</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {[
                            {
                                num: '01',
                                title: 'ArthaDID Document',
                                subtitle: 'Root Identity Layer',
                                features: ['Public keys (Quantum + Classical)', 'Verification methods', 'Service endpoints', 'Version metadata', 'Face embedding hash', 'Device signatures', 'AI agent fingerprints'],
                                unique: 'No other chain supports biometric vector-backed identity at protocol level.',
                                icon: Key,
                                color: '#8c52ff'
                            },
                            {
                                num: '02',
                                title: 'Decentralized Key System',
                                subtitle: 'Hybrid PQC',
                                features: ['Dilithium5 / MLDSA87 (Post Quantum)', 'Ed25519 (Classical)', 'Both signatures required', 'Quantum-immune security', 'Identity theft impossible'],
                                unique: 'Your identity will remain secure even in a quantum-computing future.',
                                icon: Shield,
                                color: '#ff4080'
                            },
                            {
                                num: '03',
                                title: 'Identity Vault',
                                subtitle: 'Secure Storage Layer',
                                features: ['Profile metadata', 'Biometric vectors', 'Device trust scores', 'Multi-device sync states', 'ZK-encrypted claims'],
                                unique: 'Encrypted storage only. Vector search for biometric match. Proof-of-ownership via ZK circuits.',
                                icon: Database,
                                color: '#ffc502'
                            },
                            {
                                num: '04',
                                title: 'Verifiable Credentials',
                                subtitle: 'Privacy-Preserving Proofs',
                                features: ['Proof of Age', 'Proof of Nationality', 'Proof of Education', 'Proof of Employment', 'Proof of KYC', 'Proof of Funds', 'Proof of Humanity'],
                                unique: 'All credentials use Zero-Knowledge Attestation. No leak of personal information.',
                                icon: CheckCircle2,
                                color: '#8c52ff'
                            }
                        ].map((component, i) => {
                            const Icon = component.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white text-black p-8 sm:p-10 md:p-12 h-full">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center" style={{ backgroundColor: component.color }}>
                                                <span className="text-2xl sm:text-3xl font-black text-white">{component.num}</span>
                                            </div>
                                            <Icon className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: component.color }} />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">{component.title}</h3>
                                        <p className="text-lg sm:text-xl font-bold mb-6" style={{ color: component.color }}>{component.subtitle}</p>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-black uppercase tracking-wider text-gray-500 mb-3">Contains</h4>
                                            <div className="space-y-2">
                                                {component.features.map((feature, j) => (
                                                    <div key={j} className="flex items-start gap-2">
                                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: component.color }} />
                                                        <span className="text-sm sm:text-base">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-4 sm:p-6 border-l-4" style={{ borderLeftColor: component.color, backgroundColor: '#f5f5f5' }}>
                                            <p className="text-sm sm:text-base font-bold">Uniqueness:</p>
                                            <p className="text-sm sm:text-base">{component.unique}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* LIFECYCLE - VERTICAL TIMELINE */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Identity Lifecycle</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">From Creation to Revocation</p>
                        </div>
                    </StaggerItem>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8c52ff] via-[#ff4080] to-[#ffc502]" />

                        <div className="space-y-8 sm:space-y-12">
                            {[
                                {
                                    phase: 'Creation',
                                    desc: 'User or AI agent calls CreateDID',
                                    inputs: ['Display Name', 'Password (local)', 'Optional: Face embedding', 'Optional: Device fingerprint'],
                                    outputs: ['DID', 'PQC keypair', 'Classical keypair', 'ZK-encrypted profile'],
                                    color: '#8c52ff'
                                },
                                {
                                    phase: 'Verification',
                                    desc: 'Identity verified without sending private data',
                                    inputs: ['Multi-layer signature check', 'Optional biometric (vector similarity)', 'Optional device trust scoring', 'User challenge-response'],
                                    outputs: ['Verified DID status'],
                                    color: '#ff4080'
                                },
                                {
                                    phase: 'Credential Binding',
                                    desc: 'Attach Verifiable Credentials from third-party issuers',
                                    inputs: ['Universities', 'Employers', 'Government bodies', 'Fintech apps', 'AI agents'],
                                    outputs: ['Cryptographically bound credentials'],
                                    color: '#ffc502'
                                },
                                {
                                    phase: 'Utilization',
                                    desc: 'Your DID powers everything',
                                    inputs: ['Sign transactions', 'Own assets', 'Authenticate with apps', 'Prove things anonymously', 'Log in to services', 'Sync across devices', 'Power AI agents'],
                                    outputs: ['Full identity functionality'],
                                    color: '#8c52ff'
                                },
                                {
                                    phase: 'Revocation',
                                    desc: 'Users can revoke access instantly',
                                    inputs: ['Keys', 'Credentials', 'Access rights', 'Linked devices', 'Agent permissions'],
                                    outputs: ['On-chain propagation within milliseconds'],
                                    color: '#ff4080'
                                }
                            ].map((step, i) => (
                                <StaggerItem key={i}>
                                    <div className="relative pl-16 sm:pl-24">
                                        {/* Circle */}
                                        <div className="absolute left-0 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-black text-xl sm:text-2xl" style={{ backgroundColor: step.color }}>
                                            {i + 1}
                                        </div>

                                        <div className="bg-black text-white p-6 sm:p-8 md:p-10">
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3" style={{ color: step.color }}>{step.phase}</h3>
                                            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-400">{step.desc}</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="text-sm font-black uppercase tracking-wider mb-3" style={{ color: step.color }}>Inputs</h4>
                                                    <div className="space-y-2">
                                                        {step.inputs.map((input, j) => (
                                                            <div key={j} className="flex items-start gap-2">
                                                                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: step.color }} />
                                                                <span className="text-sm sm:text-base">{input}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-black uppercase tracking-wider mb-3" style={{ color: step.color }}>Outputs</h4>
                                                    <div className="space-y-2">
                                                        {step.outputs.map((output, j) => (
                                                            <div key={j} className="flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: step.color }} />
                                                                <span className="text-sm sm:text-base">{output}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </div>
                </StaggerContainer>
            </section>

            {/* UNIQUE FEATURES - EXPANDING CARDS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Features NO Other Blockchain Has</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">5 World-First Innovations</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: Fingerprint,
                                title: 'Biometric-Enhanced Identity',
                                subtitle: 'Face Embeddings',
                                features: ['Anti-sybil', 'Account recovery', 'Multi-factor authentication', 'AI agent identity linking'],
                                desc: 'Users can embed biometric vectors (never raw images). Stored securely in SVDB.',
                                color: '#8c52ff'
                            },
                            {
                                icon: Brain,
                                title: 'Identity for AI Agents',
                                subtitle: 'AI-Persona DID',
                                features: ['Own tokens', 'Sign transactions', 'Store memory embeddings', 'Process tasks', 'Authenticate to apps', 'Execute workflows'],
                                desc: 'ArthaChain is the first chain to give AI agents their own DID. AI is a first-class citizen.',
                                color: '#ff4080'
                            },
                            {
                                icon: Smartphone,
                                title: 'Multi-Device Identity Sync',
                                subtitle: 'One DID for Many Devices',
                                features: ['Device trust scoring', 'Automatic permission restriction', 'Seamless sync', 'Security monitoring'],
                                desc: 'Device trust score is recorded in the Identity Vault. Low-trust devices get restricted automatically.',
                                color: '#ffc502'
                            },
                            {
                                icon: Users,
                                title: 'ZK-Backed Social Graph',
                                subtitle: 'Privacy-Preserving Relationships',
                                features: ['ZK friend proofs', 'Anonymous relationship attestations', 'Interest vectors', 'SocialFi verifiable stats'],
                                desc: 'No Web2 has this. No blockchain has this.',
                                color: '#8c52ff'
                            },
                            {
                                icon: Zap,
                                title: 'DID Layer with Intent Routing',
                                subtitle: 'Intelligent Operations',
                                features: ['"Swap $100 ETH to ARTHA"', '"Send to my closest verified contact"', '"Verify I\'m human but not reveal anything else"'],
                                desc: 'Your DID acts as an intelligent router for intent-driven operations. Protocol-level, not dApp logic.',
                                color: '#ff4080'
                            }
                        ].map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white text-black p-6 sm:p-8 h-full hover:scale-105 transition-all duration-300">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6" style={{ backgroundColor: feature.color }}>
                                            <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-black mb-2">{feature.title}</h3>
                                        <p className="text-base sm:text-lg font-bold mb-4" style={{ color: feature.color }}>{feature.subtitle}</p>
                                        <p className="text-sm sm:text-base mb-6 text-gray-700">{feature.desc}</p>

                                        <div className="space-y-2">
                                            {feature.features.map((item, j) => (
                                                <div key={j} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: feature.color }} />
                                                    <span className="text-xs sm:text-sm">{item}</span>
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

            {/* SECURITY - 5 LAYER SHIELD */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">5-Layer Security Model</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">Defense in Depth</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-4 sm:space-y-6">
                        {[
                            { num: '1', title: 'Quantum Signature Layer', desc: 'Dilithium + MLDSA provides Quantum immunity', color: '#8c52ff' },
                            { num: '2', title: 'ZK Privacy Layer', desc: 'No raw data, only proofs', color: '#ff4080' },
                            { num: '3', title: 'AI Trust Layer', desc: 'Identifies malicious identity behaviour', color: '#ffc502' },
                            { num: '4', title: 'Vector Privacy Layer', desc: 'Face embeddings stored as vector hashes, not images', color: '#8c52ff' },
                            { num: '5', title: 'Sharded Redundancy Layer', desc: 'Identity vault is distributed across shards', color: '#ff4080' }
                        ].map((layer, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-black text-white p-6 sm:p-8 md:p-10 flex items-center gap-4 sm:gap-6 border-l-8" style={{ borderLeftColor: layer.color }}>
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: layer.color }}>
                                        <span className="text-3xl sm:text-4xl font-black text-white">{layer.num}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2">{layer.title}</h3>
                                        <p className="text-base sm:text-lg text-gray-400">{layer.desc}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* DEVELOPER TOOLS - ICON GRID */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Developer Tools</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">Everything you need to build with DID</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: Code2, title: 'DID SDK', desc: 'Rust, TypeScript, Python, Go', color: '#8c52ff' },
                            { icon: Activity, title: 'Credential Studio', desc: 'GUI panel for issuing credentials without coding', color: '#ff4080' },
                            { icon: Lock, title: 'ZK Identity Templates', desc: 'Ready-made circuits for custom KYC/KYB', color: '#ffc502' },
                            { icon: Fingerprint, title: 'Face Vector Toolkit', desc: 'Transform images to biometric embeddings to ZK vectors', color: '#8c52ff' },
                            { icon: Smartphone, title: 'DID Wallet Toolkit', desc: 'QR login, device pairing, biometric unlock, ZK proof requests', color: '#ff4080' }
                        ].map((tool, i) => {
                            const Icon = tool.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white text-black p-6 sm:p-8 text-center h-full">
                                        <Icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" style={{ color: tool.color }} />
                                        <h3 className="text-xl sm:text-2xl font-black mb-3">{tool.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-700">{tool.desc}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* FINAL STATEMENT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#8c52ff] text-white relative">
                <StaggerContainer className="max-w-5xl mx-auto text-center">
                    <StaggerItem>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
                            The world's first quantum-secure, AI-native, biometric-enhanced identity system that works for humans, devices, and autonomous agents.
                        </h2>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16">
                            It is the foundation of the Intelligent Internet.
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
