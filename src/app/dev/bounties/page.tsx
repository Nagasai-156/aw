'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Gift, DollarSign, ChevronDown, ArrowRight, Code, Users, Lightbulb, Clock, Rocket } from 'lucide-react';
import { useRef } from 'react';

export default function BountiesPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const grantTracks = [
        { icon: Code, title: 'Developer Tools', amount: '$10K - $100K', color: '#8c52ff', description: 'Build SDKs and dev experience improvements' },
        { icon: Rocket, title: 'DeFi Protocols', amount: '$25K - $250K', color: '#ffc502', description: 'Create innovative DeFi applications' },
        { icon: Users, title: 'Social & Gaming', amount: '$15K - $150K', color: '#ff4080', description: 'Build social platforms and games' },
        { icon: Lightbulb, title: 'Research', amount: '$5K - $50K', color: '#450693', description: 'Academic blockchain research' },
    ];

    const bounties = [
        { title: 'Improve WASM Contract Optimization', reward: '$5,000', difficulty: 'Hard', deadline: '14 days' },
        { title: 'Build React Native SDK', reward: '$15,000', difficulty: 'Medium', deadline: '30 days' },
        { title: 'Create Tutorial Series', reward: '$3,000', difficulty: 'Easy', deadline: '21 days' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <motion.div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#ffc502]/15 rounded-full blur-[150px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 6, repeat: Infinity }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffc502]/20 border border-[#ffc502]/30 rounded-full mb-8">
                            <Gift className="w-4 h-4 text-[#ffc502]" />
                            <span className="text-[12px] font-medium text-[#ffc502] uppercase">Funding</span>
                        </motion.div>

                        <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85]">
                            <span className="block text-white">BOUNTIES &</span>
                            <span className="block text-[#ffc502]">GRANTS</span>
                        </motion.h1>

                        <motion.p className="text-white/50 text-lg max-w-2xl mx-auto mt-8 mb-12">
                            Get funded to build on ArthaChain. From small bounties to major grants.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-center gap-8">
                            {[{ label: 'Total Funding', value: '$10M+' }, { label: 'Projects', value: '284' }, { label: 'Bounties', value: '1,247' }].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl font-black text-[#ffc502]">{stat.value}</div>
                                    <div className="text-white/40 text-sm uppercase">{stat.label}</div>
                                </div>
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
                        <h2 className="text-[48px] font-black text-black">Grant <span className="text-[#8c52ff]">Tracks</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {grantTracks.map((track, i) => {
                            const Icon = track.icon;
                            return (
                                <motion.div key={i} whileHover={{ y: -10 }} className="border-4 border-black p-8 hover:bg-black group transition-colors">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: track.color }}>
                                            <Icon size={28} className="text-white" />
                                        </div>
                                        <div className="text-2xl font-black" style={{ color: track.color }}>{track.amount}</div>
                                    </div>
                                    <h3 className="font-black text-black group-hover:text-white text-2xl mb-2">{track.title}</h3>
                                    <p className="text-black/50 group-hover:text-white/60">{track.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative py-32 px-8 bg-black">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[48px] font-black text-white">Active <span className="text-[#ff4080]">Bounties</span></h2>
                    </div>
                    <div className="space-y-4">
                        {bounties.map((bounty, i) => (
                            <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center justify-between p-6 border-2 border-white/10 hover:border-[#ff4080] cursor-pointer group">
                                <h3 className="font-black text-white group-hover:text-[#ff4080]">{bounty.title}</h3>
                                <div className="flex items-center gap-6">
                                    <div className="text-xl font-black text-[#ffc502]">{bounty.reward}</div>
                                    <div className={`font-bold ${bounty.difficulty === 'Easy' ? 'text-green-500' : bounty.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>{bounty.difficulty}</div>
                                    <div className="text-white/60 flex items-center gap-1"><Clock size={14} />{bounty.deadline}</div>
                                    <ArrowRight className="text-white/20 group-hover:text-[#ff4080]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
