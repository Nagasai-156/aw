'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, ArrowRight, ChevronDown, Check, Key, Fingerprint, Bug, Layers } from 'lucide-react';
import { useRef } from 'react';

export default function SecurityPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const securityLayers = [
        {
            name: 'Network Security',
            icon: Layers,
            color: '#8c52ff',
            measures: [
                { title: 'DDoS Protection', desc: 'Distributed node architecture with rate limiting' },
                { title: 'Eclipse Resistance', desc: 'Peer diversity requirements prevent isolation attacks' },
                { title: 'Encrypted P2P', desc: 'All node communication uses TLS 1.3 encryption' },
            ],
        },
        {
            name: 'Consensus Security',
            icon: Shield,
            color: '#ffc502',
            measures: [
                { title: 'Slashing Conditions', desc: 'Economic penalties for malicious validator behavior' },
                { title: 'Fraud Proofs', desc: 'Cryptographic evidence of invalid state transitions' },
                { title: 'Randomness Beacon', desc: 'VRF-based unpredictable leader selection' },
            ],
        },
        {
            name: 'Cryptographic Security',
            icon: Key,
            color: '#ff4080',
            measures: [
                { title: 'Quantum-Resistant', desc: 'Lattice-based signatures (CRYSTALS-Dilithium)' },
                { title: 'BLS Aggregation', desc: 'Efficient multi-signature verification' },
                { title: 'Zero-Knowledge', desc: 'Privacy-preserving transaction validation' },
            ],
        },
        {
            name: 'Smart Contract Security',
            icon: Bug,
            color: '#450693',
            measures: [
                { title: 'Formal Verification', desc: 'Mathematical proofs of contract correctness' },
                { title: 'Gas Limits', desc: 'Prevent infinite loops and resource exhaustion' },
                { title: 'Upgrade Guards', desc: 'Timelock and multi-sig requirements for changes' },
            ],
        },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#ffc502]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                        >
                            <Lock className="w-4 h-4 text-[#ffc502]" />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Protection Mechanisms</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    SECURITY
                                </motion.span>
                                <motion.span
                                    className="block text-[#ffc502]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    MODEL
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-3xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Defense in depth with multiple security layers. Quantum-resistant cryptography protects assets today and tomorrow.
                        </motion.p>

                        {/* Security Stats */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                { value: '4', label: 'Security Layers' },
                                { value: '$0', label: 'Lost to Hacks' },
                                { value: '24/7', label: 'Monitoring' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                                    className="text-center"
                                >
                                    <div className="text-4xl lg:text-5xl font-black text-[#ffc502]">{stat.value}</div>
                                    <div className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="text-white/40 w-8 h-8" />
                </motion.div>
            </section>

            {/* SECURITY LAYERS */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Defense in Depth</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black">
                            Security <span className="text-[#ffc502]">Layers</span>
                        </h2>
                    </motion.div>

                    {/* Security Layers Grid */}
                    <div className="space-y-8">
                        {securityLayers.map((layer, i) => {
                            const Icon = layer.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border-4 border-black p-8"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className="w-16 h-16 flex items-center justify-center"
                                            style={{ backgroundColor: layer.color }}
                                        >
                                            <Icon size={32} className="text-white" />
                                        </div>
                                        <h3 className="text-2xl font-black text-black">{layer.name}</h3>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4">
                                        {layer.measures.map((measure, j) => (
                                            <motion.div
                                                key={j}
                                                whileHover={{ x: 10 }}
                                                className="flex gap-3 p-4 border-2 border-black/20 hover:border-black hover:bg-black group transition-colors cursor-pointer"
                                            >
                                                <div
                                                    className="w-8 h-8 flex-shrink-0 flex items-center justify-center"
                                                    style={{ backgroundColor: layer.color }}
                                                >
                                                    <Check size={16} className="text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-black group-hover:text-white transition-colors">{measure.title}</h4>
                                                    <p className="text-black/50 group-hover:text-white/60 text-sm transition-colors">{measure.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* QUANTUM RESISTANCE */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Future-Proof</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            Quantum <span className="text-[#ff4080]">Resistant</span>
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Visualization */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="border-4 border-[#ff4080] p-12 text-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Fingerprint size={120} className="text-[#ff4080] mx-auto mb-6" />
                                </motion.div>
                                <h3 className="text-3xl font-black text-white mb-4">CRYSTALS-Dilithium</h3>
                                <p className="text-white/50">NIST-approved post-quantum digital signature algorithm</p>
                            </div>
                        </motion.div>

                        {/* Right - Details */}
                        <div className="space-y-6">
                            {[
                                { title: 'Lattice-Based Security', desc: 'Mathematical problems that quantum computers cannot efficiently solve' },
                                { title: 'NIST Standardized', desc: 'Approved by National Institute of Standards and Technology' },
                                { title: 'Larger Key Sizes', desc: 'Increased entropy prevents brute-force attacks' },
                                { title: 'Hybrid Approach', desc: 'Classical + quantum-resistant for defense in depth' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-4 border-2 border-white/10 p-5 hover:border-[#ff4080] transition-colors cursor-pointer"
                                >
                                    <div className="w-10 h-10 bg-[#ff4080] flex items-center justify-center flex-shrink-0">
                                        <Check size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white">{item.title}</h4>
                                        <p className="text-white/50">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AUDITS & BOUNTIES */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">Assurance</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Audits & <span className="text-[#8c52ff]">Bounties</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Audits */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border-4 border-black p-8"
                        >
                            <Eye size={48} className="text-[#8c52ff] mb-6" />
                            <h3 className="text-2xl font-black text-black mb-4">Security Audits</h3>
                            <p className="text-black/60 mb-6">Comprehensive audits by leading security firms</p>
                            <div className="space-y-3">
                                {['Trail of Bits', 'OpenZeppelin', 'Consensys Diligence', 'Quantstamp'].map((firm, i) => (
                                    <div key={i} className="flex items-center gap-3 text-black font-bold">
                                        <Check size={16} className="text-[#8c52ff]" />
                                        {firm}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Bug Bounty */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border-4 border-black p-8 bg-black"
                        >
                            <AlertTriangle size={48} className="text-[#ffc502] mb-6" />
                            <h3 className="text-2xl font-black text-white mb-4">Bug Bounty</h3>
                            <p className="text-white/60 mb-6">Earn rewards for finding vulnerabilities</p>
                            <div className="text-5xl font-black text-[#ffc502] mb-4">$2M+</div>
                            <p className="text-white/40">Maximum bounty for critical issues</p>
                            <motion.div whileHover={{ scale: 1.05 }} className="mt-6">
                                <Link href="#" className="bg-[#ffc502] text-black px-6 py-3 font-bold uppercase tracking-wide inline-flex items-center gap-2">
                                    Submit Report <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
