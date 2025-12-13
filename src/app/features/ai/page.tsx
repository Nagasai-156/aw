'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Brain, Cpu, Zap, Bot, ChevronDown, ArrowRight, Sparkles, Target, TrendingUp, Shield } from 'lucide-react';
import { useRef } from 'react';

export default function AISuitePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const aiFeatures = [
        { icon: Bot, title: 'AI Agents', desc: 'Autonomous agents that execute trades, manage portfolios, and interact with protocols', color: '#ffc502' },
        { icon: Target, title: 'Smart Predictions', desc: 'ML-powered price predictions and market analysis', color: '#8c52ff' },
        { icon: TrendingUp, title: 'Yield Optimization', desc: 'AI finds the best yield farming strategies across protocols', color: '#ff4080' },
        { icon: Shield, title: 'Fraud Detection', desc: 'Real-time anomaly detection protects against exploits', color: '#450693' },
    ];

    const models = [
        { name: 'ArthaGPT', type: 'Language', params: '7B', desc: 'Natural language interface for blockchain' },
        { name: 'PriceOracle', type: 'Prediction', params: '2B', desc: 'Price and trend prediction model' },
        { name: 'YieldMax', type: 'Optimization', params: '500M', desc: 'DeFi yield optimization engine' },
        { name: 'GuardAI', type: 'Security', params: '1B', desc: 'Smart contract vulnerability detection' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#ffc502]/20 rounded-full blur-[150px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffc502]/20 border border-[#ffc502]/30 rounded-full mb-8">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                                <Brain className="w-4 h-4 text-[#ffc502]" />
                            </motion.div>
                            <span className="text-[12px] font-medium text-[#ffc502] uppercase">AI-Powered Tools</span>
                        </motion.div>

                        <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[130px] font-black leading-[0.85] tracking-[-0.04em]">
                            <motion.span className="block text-white" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>AI</motion.span>
                            <motion.span className="block text-[#ffc502]" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>SUITE</motion.span>
                        </motion.h1>

                        <motion.p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                            On-chain artificial intelligence. Autonomous agents, smart predictions, and AI-driven optimization.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-center gap-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            {[{ value: '500+', label: 'AI Models' }, { value: '1M+', label: 'Predictions/Day' }, { value: '10B+', label: 'Parameters' }].map((stat, i) => (
                                <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.1, type: "spring" }} className="text-center">
                                    <div className="text-4xl font-black text-[#ffc502]">{stat.value}</div>
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
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">AI <span className="text-[#ffc502]">Capabilities</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {aiFeatures.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="border-4 border-black p-8 hover:bg-black group transition-colors">
                                    <div className="w-16 h-16 flex items-center justify-center mb-4" style={{ backgroundColor: feature.color }}>
                                        <Icon size={32} className="text-white" />
                                    </div>
                                    <h3 className="font-black text-black group-hover:text-white text-2xl mb-2">{feature.title}</h3>
                                    <p className="text-black/50 group-hover:text-white/60">{feature.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative py-32 px-8 bg-black">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">Pre-trained <span className="text-[#8c52ff]">Models</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {models.map((model, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="border-2 border-white/10 p-6 hover:border-[#8c52ff] transition-colors cursor-pointer group">
                                <Cpu size={32} className="text-[#8c52ff] mb-4" />
                                <h3 className="font-black text-white text-lg mb-1">{model.name}</h3>
                                <div className="flex gap-2 mb-2">
                                    <span className="text-xs px-2 py-1 bg-white/10 text-white/60">{model.type}</span>
                                    <span className="text-xs px-2 py-1 bg-[#8c52ff]/20 text-[#8c52ff]">{model.params}</span>
                                </div>
                                <p className="text-white/40 text-sm">{model.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
