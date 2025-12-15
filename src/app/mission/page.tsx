'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Brain, Globe, Shield, Users, Database, Zap, Cpu, Lock, Star } from 'lucide-react';

export default function MissionPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#ffc502] selection:text-black">
            {/* SECTION 1: HERO */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20 border-b border-white/5">
                {/* Ultra-Subtle Grid (Content Focus) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04] pointer-events-none" />

                {/* Content - High Z-Index for pop */}
                <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center justify-center h-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        {/* Minimalist Badge */}
                        <span className="inline-block text-[#8c52ff] font-bold tracking-[0.3em] uppercase text-xs mb-8">
                            Mission & Vision
                        </span>

                        {/* Title - Pure White for maximum contrast */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-12 text-white">
                            Building the <br />
                            <span className="text-white/50">Foundation of</span> <br />
                            <span className="text-[#8c52ff]">The Autonomous World.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
                            Infrastructure for a digital civilization in which AI and humans coexist.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: MISSION */}
            <section className="py-32 px-6 bg-white text-black relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="mb-20">
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest block mb-4">Our Mission</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                            To build the world’s most <span className="text-[#ff4080]">intelligent decentralized platform</span> that empowers developers and AI to scale without limits.
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl">
                            We aim to merge artificial intelligence, blockchain, and self-sovereign identity at the deepest protocol layer to enable:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {[
                            'Autonomous applications', 'AI-native ecosystems', 'Quantum-secure networks',
                            'Infinite scalability', 'Trustless digital interactions', 'Identity for every human and every AI agent'
                        ].map((item, i) => (
                            <div key={i} className="group flex items-center gap-4 p-6 border-2 border-black/5 bg-gray-50 hover:border-[#ff4080] transition-all duration-300 rounded-lg">
                                <div className="w-2 h-2 bg-[#ff4080] group-hover:scale-150 transition-transform" />
                                <span className="text-lg font-bold group-hover:text-black transition-colors">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-2xl font-bold border-l-4 border-[#ff4080] pl-6 italic text-gray-800">
                        "ArthaChain exists to build a world where intelligence is decentralized and accessible to all rather than being controlled by institutions, corporations, or centralized powers."
                    </p>
                </div>
            </section>

            {/* SECTION 3: VISION */}
            <section className="py-32 px-6 bg-black text-white relative border-t border-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="mb-20">
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest block mb-4">Our Vision</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                            A global, <span className="text-[#ffc502]">intelligent decentralized network</span> that empowers billions through AI-native infrastructure.
                        </h2>
                        <p className="text-xl text-gray-400 max-w-4xl mb-12">
                            We imagine a future where:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-20">
                        <div className="space-y-6">
                            {[
                                'Applications learn, evolve, and optimize themselves',
                                'Identity is self-sovereign, portable, and secure',
                                'AI agents interact safely with humans on-chain',
                                'Decentralized AI is available to everyone'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <ArrowUpRight className="text-[#ffc502] w-6 h-6 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                                    <span className="text-xl font-medium text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-6">
                            {[
                                'Data is verifiable, permanent, and encrypted',
                                'Blockchains scale limitlessly without compromise',
                                'Innovation is open, borderless, and inclusive'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <ArrowUpRight className="text-[#ffc502] w-6 h-6 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                                    <span className="text-xl font-medium text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 border border-[#ffc502]/30 bg-[#ffc502]/5 rounded-xl text-center max-w-4xl mx-auto">
                        <p className="text-2xl font-bold text-[#ffc502]">
                            ArthaChain is the foundation for this Autonomous World, enabling a future where intelligence becomes a public good, not a private privilege.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: GUIDING PRINCIPLES */}
            <section className="py-32 px-6 bg-white text-black relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-20 text-center">Our Guiding Principles</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { num: '01', title: 'Intelligence at the Core', desc: 'AI is not an addon but is embedded in consensus, performance, and network evolution.', color: '#8c52ff' },
                            { num: '02', title: 'Infinite Scalability', desc: 'A decentralized infrastructure that grows as humanity grows.', color: '#ffc502' },
                            { num: '03', title: 'Quantum-Secure Civilization', desc: 'Security designed not just for today, but for the next century.', color: '#ff4080' },
                            { num: '04', title: 'Identity Without Permission', desc: 'Everyone (humans, applications, and AI agents) deserves a digital identity they own fully.', color: '#000' }
                        ].map((item, i) => (
                            <div key={i} className="border-4 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 group relative overflow-hidden">
                                <span className="text-8xl font-black opacity-10 group-hover:opacity-20 mb-4 block absolute top-0 right-0">{item.num}</span>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-[#ffc502] transition-colors">{item.title}</h3>
                                    <p className="text-lg text-gray-600 group-hover:text-gray-300">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: ROOTED IN INDIA */}
            <section className="py-32 px-6 bg-[#ffc502] text-black border-t border-black/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
                        Rooted in India. <br /> <span className="text-white drop-shadow-md">Built for the World.</span>
                    </h2>
                    <p className="text-2xl font-bold mb-16 text-black/80">
                        Inspired by Ancient Knowledge. Engineered for the Future.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 text-left mb-16">
                        {[
                            'Vedic mathematical precision',
                            'Ancient distributed learning systems',
                            'Dharma-driven systems of fairness',
                            'Deep understanding of consciousness'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 font-bold text-lg bg-white/20 border border-black/10 p-6 rounded-lg hover:bg-white/40 transition-colors">
                                <Star className="w-6 h-6 flex-shrink-0 text-black" />
                                {item}
                            </div>
                        ))}
                    </div>
                    <p className="text-xl font-medium text-black/70 max-w-2xl mx-auto">
                        We transform timeless ideas into modern, decentralized technology to create systems built to last for generations.
                    </p>
                </div>
            </section>

            {/* SECTION 6: GLOBAL COMMITMENT */}
            <section className="py-32 px-6 bg-black text-white border-t border-white/5 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Our Global Commitment</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'For Developers', desc: 'Open-source tools, dual-VM freedom, and AI-enhanced development.', icon: Cpu, color: '#8c52ff' },
                            { title: 'For Enterprises', desc: 'Quantum-secure infrastructure for mission-critical applications.', icon: Shield, color: '#ffc502' },
                            { title: 'For Communities', desc: 'A decentralized identity layer and inclusive innovation ecosystem.', icon: Users, color: '#ff4080' },
                            { title: 'For AI Systems', desc: 'A safe, scalable, and predictable environment for autonomous agents.', icon: Brain, color: '#fff' }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="border border-white/10 bg-white/5 p-8 hover:border-white transition-colors hover:-translate-y-1 duration-300 rounded-lg">
                                    <Icon className="w-12 h-12 mb-6" style={{ color: item.color }} />
                                    <h3 className="text-xl font-bold mb-3 uppercase" style={{ color: item.color }}>{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 7: CLOSING */}
            <section className="py-24 px-6 bg-white text-black text-center border-t border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
                        We are building <br /> <span className="text-gray-400">more than a blockchain.</span> <br />
                        <span className="text-black">We are architecting a new <span className="text-[#8c52ff]">digital civilization.</span></span>
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        ArthaChain unites intelligence, identity, and decentralization to create a future that is fair, open, secure, and infinitely scalable.
                    </p>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-40 px-6 bg-black text-white overflow-hidden border-t border-white/10 relative">
                {/* Visible Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-20 tracking-tighter">
                        Start Your <span className="text-[#8c52ff]">Journey</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        {[
                            { text: 'Explore the Technology', href: '/technology' },
                            { text: 'Learn About ArthaChain', href: '/about' },
                            { text: 'Join the Community', href: '/community' }
                        ].map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="group flex items-center justify-between gap-6 w-full md:w-auto min-w-[320px] px-8 py-6 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                <span className="text-sm">{link.text}</span>
                                <ArrowRight className="w-5 h-5 text-[#8c52ff] group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
