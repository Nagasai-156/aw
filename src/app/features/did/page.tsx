'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Fingerprint, Shield, Eye, Key, ChevronDown, ArrowRight, Check, UserCheck, Globe, Lock, Scan } from 'lucide-react';
import { useRef } from 'react';

export default function DIDPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const features = [
        { icon: UserCheck, title: 'Self-Sovereign', desc: 'Own and control your digital identity without intermediaries' },
        { icon: Eye, title: 'Privacy First', desc: 'Selective disclosure - share only what you choose' },
        { icon: Globe, title: 'Universal', desc: 'One identity across all dApps and chains' },
        { icon: Lock, title: 'Secure', desc: 'Quantum-resistant cryptography protects your credentials' },
    ];

    const useCases = [
        { title: 'KYC/AML Compliance', desc: 'Verify once, use everywhere without exposing personal data' },
        { title: 'Reputation System', desc: 'Portable reputation across platforms and protocols' },
        { title: 'Access Control', desc: 'Token-gated communities and content' },
        { title: 'Credential Verification', desc: 'Academic degrees, certifications, employment history' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#8c52ff]/20 rounded-full blur-[150px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 6, repeat: Infinity }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div style={{ y }}>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#8c52ff]/20 border border-[#8c52ff]/30 rounded-full mb-8">
                                <Fingerprint className="w-4 h-4 text-[#8c52ff]" />
                                <span className="text-[12px] font-medium text-[#8c52ff] uppercase">Identity Layer</span>
                            </motion.div>

                            <motion.h1 className="text-[56px] sm:text-[72px] lg:text-[100px] font-black leading-[0.85] tracking-[-0.04em]">
                                <span className="block text-white">DID</span>
                                <span className="block text-[#8c52ff]">SYSTEM</span>
                            </motion.h1>

                            <motion.p className="text-white/50 text-lg max-w-lg mt-8 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                Decentralized identity that puts you in control. Verify once, use everywhere, share nothing you don&apos;t want to.
                            </motion.p>

                            <motion.div className="flex flex-wrap gap-8 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                {[{ value: '10M+', label: 'DIDs Created' }, { value: '500+', label: 'Integrations' }, { value: '0', label: 'Data Breaches' }].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-3xl font-black text-[#8c52ff]">{stat.value}</div>
                                        <div className="text-white/40 text-sm uppercase">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                                <Link href="#" className="bg-[#8c52ff] text-white px-10 py-5 font-bold uppercase tracking-wide inline-flex items-center gap-2">
                                    Create Your DID <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="hidden lg:flex items-center justify-center">
                            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="relative">
                                <div className="w-80 h-80 rounded-full border-4 border-[#8c52ff]/20 flex items-center justify-center">
                                    <div className="w-60 h-60 rounded-full border-4 border-[#8c52ff]/40 flex items-center justify-center">
                                        <div className="w-40 h-40 rounded-full bg-[#8c52ff] flex items-center justify-center">
                                            <Fingerprint size={80} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <ChevronDown className="text-white/40 w-8 h-8" />
                </motion.div>
            </section>

            <section className="relative py-32 px-8 bg-white">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">Core <span className="text-[#8c52ff]">Features</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="border-4 border-black p-6 hover:bg-black group transition-colors">
                                    <div className="w-14 h-14 bg-[#8c52ff] flex items-center justify-center mb-4">
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="font-black text-black group-hover:text-white text-xl mb-2">{feature.title}</h3>
                                    <p className="text-black/50 group-hover:text-white/60 text-sm">{feature.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative py-32 px-8 bg-black">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">Use <span className="text-[#ffc502]">Cases</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {useCases.map((useCase, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: 10 }} className="flex gap-4 p-6 border-2 border-white/10 hover:border-[#ffc502] transition-colors cursor-pointer">
                                <div className="w-10 h-10 bg-[#ffc502] flex items-center justify-center flex-shrink-0">
                                    <Check size={20} className="text-black" />
                                </div>
                                <div>
                                    <h3 className="font-black text-white text-lg mb-1">{useCase.title}</h3>
                                    <p className="text-white/50">{useCase.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
