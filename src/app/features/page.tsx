'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ChevronDown, ArrowRight, Fingerprint, Brain, Users, Building2, Coins, Gamepad2, Briefcase, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function FeaturesPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const features = [
        { icon: Fingerprint, title: 'DID Identity', desc: 'Decentralized identity system with privacy controls', color: '#8c52ff', href: '/features/did', stats: '10M+ DIDs' },
        { icon: Brain, title: 'AI Suite', desc: 'On-chain AI agents and smart automation', color: '#ffc502', href: '/features/ai', stats: '500+ Models' },
        { icon: Users, title: 'SocialFi', desc: 'Monetize social interactions and content', color: '#ff4080', href: '/features/socialfi', stats: '$50M+ Earned' },
        { icon: Building2, title: 'Enterprise', desc: 'Private chains and compliance tools', color: '#450693', href: '/features/enterprise', stats: '200+ Partners' },
        { icon: Coins, title: 'DeFi', desc: 'DEX, lending, staking, and yield', color: '#8c52ff', href: '/features/defi', stats: '$2B+ TVL' },
        { icon: Gamepad2, title: 'Gaming / XR', desc: 'Play-to-earn and metaverse integration', color: '#ffc502', href: '/features/gaming', stats: '50+ Games' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#8c52ff]/20 rounded-full blur-[150px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 6, repeat: Infinity }} />
                <motion.div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff4080]/15 rounded-full blur-[150px]" animate={{ scale: [1.3, 1, 1.3] }} transition={{ duration: 8, repeat: Infinity }} />
                <motion.div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#ffc502]/10 rounded-full blur-[150px]" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 10, repeat: Infinity }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                                <Sparkles className="w-4 h-4 text-[#8c52ff]" />
                            </motion.div>
                            <span className="text-[12px] font-medium text-white/80 uppercase">ArthaVerse Ecosystem</span>
                        </motion.div>

                        <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[130px] font-black leading-[0.85] tracking-[-0.04em]">
                            <motion.span className="block text-white" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>ALL</motion.span>
                            <motion.span className="block text-[#8c52ff]" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>FEATURES</motion.span>
                        </motion.h1>

                        <motion.p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                            Discover the complete ArthaChain ecosystem. From identity to gaming, every feature is designed for the future.
                        </motion.p>

                        <motion.div className="grid grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            {features.map((f, i) => {
                                const Icon = f.icon;
                                return (
                                    <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.1 }} whileHover={{ scale: 1.1, y: -5 }} className="text-center cursor-pointer">
                                        <div className="w-14 h-14 mx-auto flex items-center justify-center mb-2" style={{ backgroundColor: f.color }}>
                                            <Icon size={28} className="text-white" />
                                        </div>
                                        <div className="text-white/60 text-xs font-bold uppercase">{f.title}</div>
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
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black">Explore <span className="text-[#8c52ff]">Features</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }}>
                                    <Link href={feature.href} className="block border-4 border-black p-8 h-full hover:bg-black group transition-colors">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: feature.color }}>
                                                <Icon size={28} className="text-white" />
                                            </div>
                                            <span className="text-sm font-black" style={{ color: feature.color }}>{feature.stats}</span>
                                        </div>
                                        <h3 className="font-black text-black group-hover:text-white text-2xl mb-2 transition-colors">{feature.title}</h3>
                                        <p className="text-black/50 group-hover:text-white/60 mb-4 transition-colors">{feature.desc}</p>
                                        <div className="flex items-center gap-2 font-bold group-hover:text-white transition-colors" style={{ color: feature.color }}>
                                            Learn More <ArrowRight size={16} />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


        </div>
    );
}
