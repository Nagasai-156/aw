'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Users, Heart, MessageCircle, Trophy, ChevronDown, ArrowRight, Coins, Share2, Star, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

export default function SocialFiPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const features = [
        { icon: Coins, title: 'Creator Tokens', desc: 'Launch your own token. Fans invest in creators they believe in.', stat: '$50M+' },
        { icon: Heart, title: 'Engagement Rewards', desc: 'Earn tokens for likes, comments, and shares on content.', stat: '10M+ Claims' },
        { icon: Share2, title: 'Social Graph', desc: 'Portable social connections across all platforms.', stat: '50M+ Edges' },
        { icon: Trophy, title: 'Reputation NFTs', desc: 'Soulbound tokens representing achievements and status.', stat: '2M+ Minted' },
    ];

    const creators = [
        { name: 'Alex Chen', category: 'Tech', followers: '1.2M', earnings: '$284K' },
        { name: 'Maya Davis', category: 'Art', followers: '890K', earnings: '$156K' },
        { name: 'Jordan Lee', category: 'Gaming', followers: '2.1M', earnings: '$412K' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <motion.div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#ff4080]/20 rounded-full blur-[150px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 6, repeat: Infinity }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff4080]/20 border border-[#ff4080]/30 rounded-full mb-8">
                            <Users className="w-4 h-4 text-[#ff4080]" />
                            <span className="text-[12px] font-medium text-[#ff4080] uppercase">Social Finance</span>
                        </motion.div>

                        <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[130px] font-black leading-[0.85] tracking-[-0.04em]">
                            <motion.span className="block text-white" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>SOCIAL</motion.span>
                            <motion.span className="block text-[#ff4080]" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>FI</motion.span>
                        </motion.h1>

                        <motion.p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                            Monetize your social presence. Create, engage, and earn in the decentralized social economy.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-center gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            {[{ value: '$50M+', label: 'Creator Earnings' }, { value: '10M+', label: 'Active Users' }, { value: '500K+', label: 'Creators' }].map((stat, i) => (
                                <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.1, type: "spring" }} className="text-center">
                                    <div className="text-4xl font-black text-[#ff4080]">{stat.value}</div>
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
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">Social <span className="text-[#ff4080]">Features</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="border-4 border-black p-8 hover:bg-black group transition-colors">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-16 h-16 bg-[#ff4080] flex items-center justify-center">
                                            <Icon size={32} className="text-white" />
                                        </div>
                                        <span className="text-xl font-black text-[#ff4080]">{feature.stat}</span>
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
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">Top <span className="text-[#ffc502]">Creators</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {creators.map((creator, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="border-2 border-white/10 p-6 text-center hover:border-[#ffc502] transition-colors cursor-pointer">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#ff4080] to-[#ffc502] mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white">{creator.name.charAt(0)}</div>
                                <h3 className="font-black text-white text-xl mb-1">{creator.name}</h3>
                                <span className="text-white/40 text-sm">{creator.category}</span>
                                <div className="flex justify-center gap-6 mt-4">
                                    <div><div className="font-black text-[#ff4080]">{creator.followers}</div><div className="text-white/40 text-xs">Followers</div></div>
                                    <div><div className="font-black text-[#ffc502]">{creator.earnings}</div><div className="text-white/40 text-xs">Earned</div></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
