'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, ChevronDown, ArrowRight, Building2, Heart, GraduationCap, ShoppingCart, Factory, Plane, Check } from 'lucide-react';
import { useRef, useState } from 'react';

export default function UseCasesPage() {
    const [activeCase, setActiveCase] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const useCases = [
        { icon: Building2, title: 'Finance', desc: 'DeFi, payments, cross-border transfers, tokenization', benefits: ['Instant settlement', 'Lower fees', 'Global access'], color: '#8c52ff' },
        { icon: Heart, title: 'Healthcare', desc: 'Medical records, drug traceability, research data', benefits: ['Patient privacy', 'Data integrity', 'Interoperability'], color: '#ff4080' },
        { icon: Factory, title: 'Supply Chain', desc: 'Track goods from origin to consumer with transparency', benefits: ['Full traceability', 'Fraud prevention', 'Automation'], color: '#ffc502' },
        { icon: GraduationCap, title: 'Education', desc: 'Credentials, certificates, and academic records', benefits: ['Verifiable degrees', 'Portable credentials', 'Fraud-proof'], color: '#450693' },
        { icon: ShoppingCart, title: 'Retail', desc: 'Loyalty programs, product authenticity, payments', benefits: ['Token rewards', 'Anti-counterfeit', 'Fast checkout'], color: '#8c52ff' },
        { icon: Plane, title: 'Travel', desc: 'Digital identity, ticketing, loyalty across airlines', benefits: ['Seamless check-in', 'Universal rewards', 'Data control'], color: '#ffc502' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <motion.div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-[#8c52ff]/15 rounded-full blur-[150px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                            <Briefcase className="w-4 h-4 text-[#8c52ff]" />
                            <span className="text-[12px] font-medium text-white/80 uppercase">Real-World Applications</span>
                        </motion.div>

                        <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                            <motion.span className="block text-white" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>USE</motion.span>
                            <motion.span className="block text-[#8c52ff]" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>CASES</motion.span>
                        </motion.h1>

                        <motion.p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                            ArthaChain powers real-world applications across industries. Discover how blockchain transforms business.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            {useCases.slice(0, 6).map((uc, i) => {
                                const Icon = uc.icon;
                                return (
                                    <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.1 }} whileHover={{ scale: 1.1 }} className="w-14 h-14 flex items-center justify-center cursor-pointer" style={{ backgroundColor: uc.color }}>
                                        <Icon size={28} className="text-white" />
                                    </motion.div>
                                );
                            })}
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
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">Industry <span className="text-[#8c52ff]">Solutions</span></h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            {useCases.map((uc, i) => {
                                const Icon = uc.icon;
                                return (
                                    <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} onClick={() => setActiveCase(i)} className={`p-4 cursor-pointer transition-all flex items-center gap-4 ${activeCase === i ? 'border-4 border-black bg-black' : 'border-4 border-transparent hover:border-black/20'}`}>
                                        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: uc.color }}>
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <span className={`font-black text-lg ${activeCase === i ? 'text-white' : 'text-black'}`}>{uc.title}</span>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div key={activeCase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 border-4 border-black p-8">
                            <div className="w-20 h-20 flex items-center justify-center mb-6" style={{ backgroundColor: useCases[activeCase].color }}>
                                {(() => { const Icon = useCases[activeCase].icon; return <Icon size={40} className="text-white" />; })()}
                            </div>
                            <h3 className="font-black text-4xl mb-4">{useCases[activeCase].title}</h3>
                            <p className="text-black/60 text-lg mb-8">{useCases[activeCase].desc}</p>

                            <h4 className="font-black text-lg mb-4">Key Benefits</h4>
                            <div className="space-y-3">
                                {useCases[activeCase].benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: useCases[activeCase].color }}>
                                            <Check size={16} className="text-white" />
                                        </div>
                                        <span className="font-bold">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button whileHover={{ scale: 1.02 }} className="mt-8 px-8 py-4 font-bold uppercase tracking-wide text-white inline-flex items-center gap-2" style={{ backgroundColor: useCases[activeCase].color }}>
                                Learn More <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
