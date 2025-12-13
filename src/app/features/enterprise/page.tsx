'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Building2, Lock, FileCheck, Network, ChevronDown, ArrowRight, Shield, Globe, Users, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

export default function EnterprisePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const solutions = [
        { icon: Lock, title: 'Private Chains', desc: 'Deploy permissioned networks with full data sovereignty', color: '#450693' },
        { icon: FileCheck, title: 'Compliance Suite', desc: 'Built-in KYC/AML, audit trails, and regulatory reporting', color: '#8c52ff' },
        { icon: Network, title: 'Hybrid Architecture', desc: 'Connect private chains to public ArthaChain mainnet', color: '#ffc502' },
        { icon: Shield, title: 'Enterprise Security', desc: 'HSM integration, role-based access, SSO support', color: '#ff4080' },
    ];

    const partners = ['Fortune 500 Bank', 'Global Logistics', 'Healthcare Corp', 'Energy Giant', 'TechCo', 'FinanceHub'];

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <motion.div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#450693]/20 rounded-full blur-[150px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#450693]/20 border border-[#450693]/30 rounded-full mb-8">
                            <Building2 className="w-4 h-4 text-[#8c52ff]" />
                            <span className="text-[12px] font-medium text-[#8c52ff] uppercase">Business Solutions</span>
                        </motion.div>

                        <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                            <motion.span className="block text-white" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>ENTERPRISE</motion.span>
                        </motion.h1>

                        <motion.p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                            Production-ready blockchain for enterprises. Private chains, compliance, and enterprise-grade security.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-center gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            {[{ value: '200+', label: 'Partners' }, { value: '99.99%', label: 'Uptime SLA' }, { value: '24/7', label: 'Support' }].map((stat, i) => (
                                <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.1, type: "spring" }} className="text-center">
                                    <div className="text-4xl font-black text-[#8c52ff]">{stat.value}</div>
                                    <div className="text-white/40 text-sm uppercase">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <ChevronDown className="text-white/40 w-8 h-8" />
                </motion.div>
            </section>

            <section className="relative py-32 px-8 bg-white">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">Enterprise <span className="text-[#8c52ff]">Solutions</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {solutions.map((solution, i) => {
                            const Icon = solution.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="border-4 border-black p-8 hover:bg-black group transition-colors">
                                    <div className="w-16 h-16 flex items-center justify-center mb-4" style={{ backgroundColor: solution.color }}>
                                        <Icon size={32} className="text-white" />
                                    </div>
                                    <h3 className="font-black text-black group-hover:text-white text-2xl mb-2">{solution.title}</h3>
                                    <p className="text-black/50 group-hover:text-white/60">{solution.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative py-32 px-8 bg-black">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">Trusted By <span className="text-[#ffc502]">Leaders</span></h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {partners.map((partner, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border-2 border-white/10 p-6 text-center">
                                <div className="text-white/40 font-bold text-sm">{partner}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link href="#" className="bg-[#ffc502] text-black px-10 py-5 font-bold uppercase tracking-wide inline-flex items-center gap-2">
                                Contact Sales <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
