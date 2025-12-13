'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Coins, ArrowUpDown, Landmark, TrendingUp, ChevronDown, ArrowRight, Percent, Lock, Zap, PiggyBank } from 'lucide-react';
import { useState, useRef } from 'react';

export default function DeFiPage() {
    const [selectedProtocol, setSelectedProtocol] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const protocols = [
        { name: 'ArthaDEX', type: 'Exchange', tvl: '$1.2B', apy: '12-45%', desc: 'Decentralized exchange with concentrated liquidity', icon: ArrowUpDown, color: '#8c52ff' },
        { name: 'ArthaLend', type: 'Lending', tvl: '$580M', apy: '8-25%', desc: 'Borrow and lend with AI-optimized rates', icon: Landmark, color: '#ffc502' },
        { name: 'ArthaVault', type: 'Yield', tvl: '$320M', apy: '15-60%', desc: 'Auto-compounding yield aggregator', icon: PiggyBank, color: '#ff4080' },
        { name: 'ArthaStake', type: 'Staking', tvl: '$850M', apy: '8.5%', desc: 'Liquid staking for ARTH tokens', icon: Lock, color: '#450693' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <motion.div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#8c52ff]/20 rounded-full blur-[150px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 6, repeat: Infinity }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#8c52ff]/20 border border-[#8c52ff]/30 rounded-full mb-8">
                            <Coins className="w-4 h-4 text-[#8c52ff]" />
                            <span className="text-[12px] font-medium text-[#8c52ff] uppercase">Decentralized Finance</span>
                        </motion.div>

                        <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[130px] font-black leading-[0.85] tracking-[-0.04em]">
                            <motion.span className="block text-white" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>DEFI</motion.span>
                        </motion.h1>

                        <motion.p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                            Trade, lend, stake, and earn. The most advanced DeFi ecosystem powered by AI optimization.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-center gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            {[{ value: '$2.9B', label: 'Total TVL' }, { value: '50+', label: 'Protocols' }, { value: '$10B+', label: 'Volume 24h' }].map((stat, i) => (
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
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">Core <span className="text-[#8c52ff]">Protocols</span></h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            {protocols.map((protocol, i) => {
                                const Icon = protocol.icon;
                                return (
                                    <motion.div key={i} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} onClick={() => setSelectedProtocol(i)} className={`p-6 cursor-pointer transition-all ${selectedProtocol === i ? 'border-4 border-black bg-black' : 'border-4 border-black/20'}`}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: protocol.color }}>
                                                <Icon size={24} className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className={`font-black text-xl ${selectedProtocol === i ? 'text-white' : 'text-black'}`}>{protocol.name}</h3>
                                                <span className={`text-sm ${selectedProtocol === i ? 'text-white/60' : 'text-black/40'}`}>{protocol.type}</span>
                                            </div>
                                            <div className="ml-auto text-right">
                                                <div className="font-black" style={{ color: protocol.color }}>{protocol.apy} APY</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div key={selectedProtocol} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-4 border-black p-8">
                            <div className="w-20 h-20 flex items-center justify-center mb-6" style={{ backgroundColor: protocols[selectedProtocol].color }}>
                                {(() => { const Icon = protocols[selectedProtocol].icon; return <Icon size={40} className="text-white" />; })()}
                            </div>
                            <h3 className="font-black text-3xl mb-2">{protocols[selectedProtocol].name}</h3>
                            <p className="text-black/60 mb-6">{protocols[selectedProtocol].desc}</p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-black/5"><div className="text-2xl font-black" style={{ color: protocols[selectedProtocol].color }}>{protocols[selectedProtocol].tvl}</div><div className="text-black/40 text-sm">TVL</div></div>
                                <div className="p-4 bg-black/5"><div className="text-2xl font-black" style={{ color: protocols[selectedProtocol].color }}>{protocols[selectedProtocol].apy}</div><div className="text-black/40 text-sm">APY Range</div></div>
                            </div>
                            <motion.button whileHover={{ scale: 1.02 }} className="w-full py-4 font-bold uppercase tracking-wide text-white" style={{ backgroundColor: protocols[selectedProtocol].color }}>
                                Launch App <ArrowRight className="inline w-5 h-5 ml-2" />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
