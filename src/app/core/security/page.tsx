'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Brain, Lock, Eye, Layers, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - Shield Fortress */}
            <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-7xl md:text-9xl font-black mb-12 leading-tight">
                            Defense-in-Depth
                        </h1>
                        <div className="space-y-4 text-2xl md:text-3xl font-bold mb-16">
                            <p>Quantum-Secure.</p>
                            <p>AI-Intelligent.</p>
                            <p>Mathematically Verifiable.</p>
                            <p>Privacy-Protected.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-white text-black p-16 mb-12">
                            <p className="text-3xl font-bold mb-8 text-center">
                                ArthaChain doesn't rely on a single lock.
                            </p>
                            <p className="text-2xl text-center">
                                It is protected by <span className="text-[#8c52ff] font-black">five independent defensive layers</span>, each engineered to counter an entire class of attacks.
                            </p>
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            {[
                                { icon: Lock, label: 'Quantum', color: '#8c52ff' },
                                { icon: Brain, label: 'AI', color: '#ff4080' },
                                { icon: Shield, label: 'Consensus', color: '#ffc502' },
                                { icon: Eye, label: 'Privacy', color: '#8c52ff' },
                                { icon: Layers, label: 'Structural', color: '#ff4080' }
                            ].map((shield, i) => {
                                const Icon = shield.icon;
                                return (
                                    <div key={i} className="bg-white text-black p-6 text-center">
                                        <Icon className="w-12 h-12 mx-auto mb-3" style={{ color: shield.color }} />
                                        <p className="font-black text-sm">{shield.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DEFENSE PHILOSOPHY */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-3 gap-1 bg-black mb-16">
                        {[
                            { text: 'If one layer fails, the next layer activates.' },
                            { text: 'If all layers fail, ArthaChain still stays secure.' },
                            { text: 'True defense-in-depth architecture.' }
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white p-10 h-full flex items-center justify-center text-center">
                                    <p className="text-xl font-bold">{item.text}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <div className="bg-black text-white p-12 text-center">
                            <p className="text-3xl font-black mb-4">No other blockchain has this 5-shield model.</p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* LAYER 1 - QUANTUM SHIELD */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20">
                            <div className="flex items-start gap-8 mb-12">
                                <div className="w-32 h-32 bg-[#8c52ff] flex items-center justify-center flex-shrink-0">
                                    <Lock className="w-20 h-20 text-white" />
                                </div>
                                <div>
                                    <div className="text-8xl font-black text-[#8c52ff] mb-4">1</div>
                                    <h2 className="text-6xl font-black mb-4">The Quantum Shield</h2>
                                    <p className="text-2xl text-gray-400">Post-Quantum Cryptography at the Core</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-white text-black p-12 mb-16">
                            <p className="text-2xl font-bold mb-4">Modern blockchains depend on Elliptic Curve Cryptography.</p>
                            <p className="text-xl text-gray-600">Quantum computers will break it.</p>
                            <div className="w-24 h-1 bg-[#8c52ff] my-8"></div>
                            <p className="text-3xl font-black text-[#8c52ff]">ArthaChain is natively post-quantum secure.</p>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-12">
                        <StaggerItem>
                            <div className="border-4 border-[#8c52ff] p-10">
                                <h3 className="text-3xl font-black mb-6 text-[#8c52ff]">Post-Quantum Signatures</h3>
                                <p className="text-xl mb-6 font-bold">Crystals-Dilithium / ML-DSA-87</p>
                                <div className="space-y-3 mb-8">
                                    {[
                                        'Transactions',
                                        'Validator messages',
                                        'Consensus votes',
                                        'DID identity proofs'
                                    ].map((item, i) => (
                                        <p key={i} className="flex items-center gap-3">
                                            <span className="text-[#8c52ff]">→</span>
                                            <span>{item}</span>
                                        </p>
                                    ))}
                                </div>
                                <div className="bg-[#8c52ff] text-white p-6">
                                    <p className="font-bold">Chosen by NIST as the next global cryptographic standard.</p>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="border-4 border-[#8c52ff] p-10">
                                <h3 className="text-3xl font-black mb-6 text-[#8c52ff]">Post-Quantum Key Exchanges</h3>
                                <p className="text-xl mb-6 font-bold">Kyber / ML-KEM</p>
                                <div className="space-y-3 mb-8">
                                    {[
                                        'P2P node-to-node encryption',
                                        'Private mempool communication',
                                        'Validator handshake & sync'
                                    ].map((item, i) => (
                                        <p key={i} className="flex items-center gap-3">
                                            <span className="text-[#8c52ff]">→</span>
                                            <span>{item}</span>
                                        </p>
                                    ))}
                                </div>
                                <div className="bg-[#8c52ff] text-white p-6">
                                    <p className="font-bold">Harvest-now-decrypt-later attacks become impossible.</p>
                                </div>
                            </div>
                        </StaggerItem>
                    </div>

                    <StaggerItem>
                        <div className="mt-16 bg-[#8c52ff] text-white p-12 text-center">
                            <p className="text-4xl font-black">
                                Try to break our keys → You hit a lattice-based cryptographic wall.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* LAYER 2 - AI SHIELD */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20">
                            <div className="flex items-start gap-8 mb-12">
                                <div className="w-32 h-32 bg-[#ff4080] flex items-center justify-center flex-shrink-0">
                                    <Brain className="w-20 h-20 text-white" />
                                </div>
                                <div>
                                    <div className="text-8xl font-black text-[#ff4080] mb-4">2</div>
                                    <h2 className="text-6xl font-black mb-4">The Intelligence Shield</h2>
                                    <p className="text-2xl text-gray-600">AI Immunity System</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-black text-white p-12 mb-16 text-center">
                            <p className="text-2xl mb-4">Other blockchains punish malicious actors <span className="text-gray-500">after damage</span>.</p>
                            <p className="text-3xl font-black text-[#ff4080]">ArthaChain prevents attacks before they happen.</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-12">
                        {[
                            {
                                title: 'Behavioral Fingerprinting',
                                desc: 'AI analyzes CPU/RAM patterns, voting patterns, latency variability, network traffic, block timing, error bursts, and storage anomalies.',
                                result: 'Creates a unique behavioral fingerprint for every validator.'
                            },
                            {
                                title: 'Fraud Prediction',
                                desc: 'AI finds pre-attack latency spikes, strange communication bursts, multi-node correlation patterns, suspicious silence, and timing anomalies.',
                                result: 'Drops node reputation before attack happens. Malicious nodes never get a chance.'
                            },
                            {
                                title: 'Sybil Defense',
                                desc: 'AI detects identical latency curves, synchronized heartbeats, same kernel signatures, and cloned storage behavior.',
                                result: '1000 fake nodes cannot trick the reputation system.'
                            }
                        ].map((feature, i) => (
                            <StaggerItem key={i}>
                                <div className="grid md:grid-cols-12 gap-0 border-4 border-black">
                                    <div className="md:col-span-4 bg-black text-white p-10 flex items-center">
                                        <h3 className="text-3xl font-black text-[#ff4080]">{feature.title}</h3>
                                    </div>
                                    <div className="md:col-span-8 p-10">
                                        <p className="text-lg mb-6">{feature.desc}</p>
                                        <div className="bg-[#ff4080] text-white p-6">
                                            <p className="font-bold">{feature.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <div className="mt-16 bg-[#ff4080] text-white p-12 text-center">
                            <p className="text-4xl font-black">
                                Try to cheat, spam, or behave abnormally → You get disqualified automatically.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* LAYER 3 - CONSENSUS SHIELD */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20">
                            <div className="flex items-start gap-8 mb-12">
                                <div className="w-32 h-32 bg-[#ffc502] flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-20 h-20 text-black" />
                                </div>
                                <div>
                                    <div className="text-8xl font-black text-[#ffc502] mb-4">3</div>
                                    <h2 className="text-6xl font-black mb-4">The Consensus Shield</h2>
                                    <p className="text-2xl text-gray-400">Quantum-SVBFT Deterministic Finality</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-1 bg-white mb-16">
                        {[
                            'Deterministic Finality',
                            'No Probabilistic Security',
                            'Signature Hardening'
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-black p-10 h-full flex items-center justify-center text-center">
                                    <p className="text-2xl font-black text-[#ffc502]">{item}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <div className="bg-white text-black p-12 mb-12">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <p className="text-6xl font-black mb-4">6</p>
                                    <p className="text-lg">Bitcoin confirmations</p>
                                </div>
                                <div>
                                    <p className="text-6xl font-black mb-4">64</p>
                                    <p className="text-lg">Ethereum slots</p>
                                </div>
                                <div>
                                    <p className="text-6xl font-black mb-4 text-[#ffc502]">1</p>
                                    <p className="text-lg font-black">ArthaChain commit round</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="border-4 border-[#ffc502] p-12">
                            <h3 className="text-3xl font-black mb-8 text-[#ffc502]">Double-Shield Cryptography</h3>
                            <div className="space-y-6 text-xl">
                                <p>Every vote uses: <span className="font-bold">Hybrid Ed25519 + Dilithium3 signatures</span></p>
                                <p className="text-gray-400">Even if ECC is broken, Dilithium protects it.</p>
                                <p className="text-gray-400">Even if Dilithium has a flaw, ECC protects it.</p>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-16 bg-[#ffc502] text-black p-12 text-center">
                            <p className="text-4xl font-black">
                                Try to fork the chain → You hit a mathematical wall.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* LAYER 4 - PRIVACY SHIELD */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20">
                            <div className="flex items-start gap-8 mb-12">
                                <div className="w-32 h-32 bg-[#8c52ff] flex items-center justify-center flex-shrink-0">
                                    <Eye className="w-20 h-20 text-white" />
                                </div>
                                <div>
                                    <div className="text-8xl font-black text-[#8c52ff] mb-4">4</div>
                                    <h2 className="text-6xl font-black mb-4">The Privacy Shield</h2>
                                    <p className="text-2xl text-gray-600">Zero Knowledge + Mempool Protection</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-1 bg-black mb-16">
                        <StaggerItem>
                            <div className="bg-white p-12">
                                <h3 className="text-3xl font-black mb-6 text-[#8c52ff]">ZK-SNARK Proofs</h3>
                                <div className="space-y-3 text-lg">
                                    {[
                                        'Private transactions',
                                        'Hidden balances',
                                        'Proof-of-age (18+)',
                                        'Proof-of-identity',
                                        'DID verifiable credentials'
                                    ].map((item, i) => (
                                        <p key={i} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#8c52ff]" />
                                            <span>{item}</span>
                                        </p>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t-2 border-black">
                                    <p className="font-bold">Prove truth without revealing data.</p>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-white p-12">
                                <h3 className="text-3xl font-black mb-6 text-[#8c52ff]">Private Mempool</h3>
                                <p className="text-lg mb-6">Encrypted transaction routing prevents:</p>
                                <div className="space-y-3 text-lg">
                                    {[
                                        'Bots front-running swaps',
                                        'Validator sandwich attacks',
                                        'Mempool state observation'
                                    ].map((item, i) => (
                                        <p key={i} className="flex items-center gap-3">
                                            <AlertTriangle className="w-5 h-5 text-red-600" />
                                            <span>{item}</span>
                                        </p>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t-2 border-black">
                                    <p className="font-bold">L2-level protection at L1.</p>
                                </div>
                            </div>
                        </StaggerItem>
                    </div>

                    <StaggerItem>
                        <div className="bg-[#8c52ff] text-white p-12 text-center">
                            <p className="text-4xl font-black">
                                Try to spy or front-run → You hit cryptographic invisibility.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* LAYER 5 - STRUCTURAL SHIELD */}
            <section className="py-32 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="mb-20">
                            <div className="flex items-start gap-8 mb-12">
                                <div className="w-32 h-32 bg-[#ff4080] flex items-center justify-center flex-shrink-0">
                                    <Layers className="w-20 h-20 text-white" />
                                </div>
                                <div>
                                    <div className="text-8xl font-black text-[#ff4080] mb-4">5</div>
                                    <h2 className="text-6xl font-black mb-4">The Structural Shield</h2>
                                    <p className="text-2xl text-gray-400">Shard-Level Attack Resistance</p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <div className="space-y-8">
                        {[
                            {
                                title: 'Randomized Validator Shuffle',
                                points: [
                                    'Validators rotated randomly between shards',
                                    'High-reputation nodes spread evenly',
                                    'No shard becomes weak',
                                    'No concentrated poor-reputation nodes'
                                ]
                            },
                            {
                                title: 'Cross-Shard Security Voting',
                                points: [
                                    'Global validator set detects anomaly',
                                    'NodeScore drops instantly',
                                    'Shard isolated automatically',
                                    'Leader replaced, load redistributed'
                                ]
                            },
                            {
                                title: 'Shard Migration & Healing',
                                points: [
                                    'Shards auto-split under load',
                                    'Validators redistributed',
                                    'State partitioned securely',
                                    'High-speed + highly secure'
                                ]
                            }
                        ].map((feature, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white text-black p-12 border-l-8 border-[#ff4080]">
                                    <h3 className="text-3xl font-black mb-8 text-[#ff4080]">{feature.title}</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {feature.points.map((point, j) => (
                                            <p key={j} className="flex items-start gap-3 text-lg">
                                                <span className="text-[#ff4080] mt-1">→</span>
                                                <span>{point}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* ATTACK RESPONSE TABLE */}
            <section className="py-32 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-20">
                            <h2 className="text-6xl md:text-7xl font-black mb-6">The 5 Shields in Action</h2>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-black text-white p-12">
                            <div className="space-y-1">
                                {[
                                    { attack: 'Break keys', shield: 'Quantum Shield', color: '#8c52ff' },
                                    { attack: 'Spam / DDoS', shield: 'AI Shield', color: '#ff4080' },
                                    { attack: 'Forge blocks', shield: 'Consensus Shield', color: '#ffc502' },
                                    { attack: 'Spy / MEV', shield: 'Privacy Shield', color: '#8c52ff' },
                                    { attack: 'Attack a shard', shield: 'Structural Shield', color: '#ff4080' }
                                ].map((row, i) => (
                                    <div key={i} className="grid md:grid-cols-2 gap-0 bg-white text-black">
                                        <div className="p-8 border-r border-black">
                                            <p className="text-2xl font-bold">{row.attack}</p>
                                        </div>
                                        <div className="p-8" style={{ backgroundColor: row.color }}>
                                            <p className="text-2xl font-black text-white">{row.shield}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-16 bg-black text-white p-16 text-center">
                            <p className="text-4xl font-black mb-8">
                                ArthaChain is not secured by money, hashpower, or luck.
                            </p>
                            <p className="text-3xl">
                                It is secured by <span className="text-[#8c52ff]">Intelligence</span>, <span className="text-[#ff4080]">Mathematics</span>, and <span className="text-[#ffc502]">Quantum Cryptography</span>.
                            </p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="mt-16 flex flex-wrap justify-center gap-6">
                            <Link
                                href="/core/consensus"
                                className="px-10 py-5 bg-black text-white font-black text-lg uppercase tracking-wider hover:bg-[#8c52ff] transition-all duration-300"
                            >
                                Explore Consensus →
                            </Link>
                            <Link
                                href="/core/papers"
                                className="px-10 py-5 border-4 border-black text-black font-black text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                            >
                                Read Security Paper →
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
