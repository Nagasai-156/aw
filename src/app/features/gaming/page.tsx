'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Gamepad2, Trophy, Sword, Gem, ChevronDown, ArrowRight, Users, Coins, Sparkles, Box } from 'lucide-react';
import { useRef } from 'react';

export default function GamingPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const features = [
        { icon: Sword, title: 'Play to Earn', desc: 'Earn ARTH tokens and NFTs while playing games', color: '#ffc502' },
        { icon: Gem, title: 'True Ownership', desc: 'Own your in-game assets as NFTs, trade freely', color: '#8c52ff' },
        { icon: Box, title: 'Metaverse', desc: 'Virtual worlds, land, and immersive experiences', color: '#ff4080' },
        { icon: Sparkles, title: 'Cross-Game Assets', desc: 'Use items and characters across multiple games', color: '#450693' },
    ];

    const games = [
        { name: 'Artha Legends', genre: 'RPG', players: '1.2M', rewards: '$50K/day' },
        { name: 'Chain Racers', genre: 'Racing', players: '890K', rewards: '$35K/day' },
        { name: 'Crypto Kingdoms', genre: 'Strategy', players: '650K', rewards: '$28K/day' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <motion.div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#ffc502]/20 rounded-full blur-[150px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 6, repeat: Infinity }} />
                <motion.div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff4080]/15 rounded-full blur-[150px]" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 8, repeat: Infinity }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffc502]/20 border border-[#ffc502]/30 rounded-full mb-8">
                            <Gamepad2 className="w-4 h-4 text-[#ffc502]" />
                            <span className="text-[12px] font-medium text-[#ffc502] uppercase">Gaming & Metaverse</span>
                        </motion.div>

                        <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                            <motion.span className="block text-white" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>GAMING</motion.span>
                            <motion.span className="block text-[#ffc502]" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>/ XR</motion.span>
                        </motion.h1>

                        <motion.p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                            Play-to-earn gaming, true digital ownership, and immersive metaverse experiences.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-center gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            {[{ value: '50+', label: 'Games' }, { value: '5M+', label: 'Players' }, { value: '$2M+', label: 'Daily Rewards' }].map((stat, i) => (
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
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">Gaming <span className="text-[#ffc502]">Features</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, i) => {
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
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">Top <span className="text-[#ff4080]">Games</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {games.map((game, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="border-2 border-white/10 overflow-hidden hover:border-[#ff4080] transition-colors cursor-pointer group">
                                <div className="h-40 bg-gradient-to-br from-[#8c52ff] to-[#ff4080] flex items-center justify-center">
                                    <Gamepad2 size={64} className="text-white/30" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-black text-white text-xl mb-1">{game.name}</h3>
                                    <span className="text-white/40 text-sm">{game.genre}</span>
                                    <div className="flex gap-4 mt-4">
                                        <div><div className="font-black text-[#ffc502]">{game.players}</div><div className="text-white/40 text-xs">Players</div></div>
                                        <div><div className="font-black text-[#ff4080]">{game.rewards}</div><div className="text-white/40 text-xs">Rewards</div></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
