'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Activity, Server, Cpu, HardDrive, Clock, ArrowUpRight, ChevronDown, TrendingUp, Users, Zap, Box } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function NetworkStatusPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    // Simulated live data
    const [stats, setStats] = useState({
        tps: 847293,
        blockHeight: 12847392,
        validators: 10847,
        avgBlockTime: 0.12,
        networkHealth: 99.97,
        totalTransactions: 2847392847,
    });

    // Simulate live updates
    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                tps: prev.tps + Math.floor(Math.random() * 1000 - 500),
                blockHeight: prev.blockHeight + 1,
                validators: prev.validators + Math.floor(Math.random() * 3 - 1),
                avgBlockTime: 0.12 + (Math.random() * 0.02 - 0.01),
                networkHealth: 99.9 + Math.random() * 0.09,
                totalTransactions: prev.totalTransactions + Math.floor(Math.random() * 10000),
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num: number) => {
        if (num >= 1000000000) return (num / 1000000000).toFixed(2) + 'B';
        if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
        return num.toFixed(0);
    };

    const liveMetrics = [
        { icon: Zap, label: 'Current TPS', value: formatNumber(stats.tps), color: '#8c52ff', live: true },
        { icon: Box, label: 'Block Height', value: formatNumber(stats.blockHeight), color: '#ffc502', live: true },
        { icon: Users, label: 'Validators', value: formatNumber(stats.validators), color: '#ff4080', live: false },
        { icon: Clock, label: 'Avg Block Time', value: stats.avgBlockTime.toFixed(2) + 's', color: '#450693', live: false },
    ];

    const recentBlocks = [
        { height: stats.blockHeight, txns: 2847, time: '0.12s', producer: '0x1a2b...3c4d' },
        { height: stats.blockHeight - 1, txns: 3102, time: '0.11s', producer: '0x5e6f...7g8h' },
        { height: stats.blockHeight - 2, txns: 2654, time: '0.13s', producer: '0x9i0j...1k2l' },
        { height: stats.blockHeight - 3, txns: 2981, time: '0.12s', producer: '0x3m4n...5o6p' },
        { height: stats.blockHeight - 4, txns: 2763, time: '0.11s', producer: '0x7q8r...9s0t' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#8c52ff]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Activity className="w-4 h-4 text-green-500" />
                            </motion.div>
                            <span className="text-[12px] font-medium text-green-500 tracking-wider uppercase">Live Network Stats</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    NETWORK
                                </motion.span>
                                <motion.span
                                    className="block text-[#8c52ff]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    STATUS
                                </motion.span>
                            </motion.h1>
                        </div>

                        {/* Network Health Bar */}
                        <motion.div
                            className="max-w-md mx-auto mt-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-white/40 text-sm uppercase tracking-wider">Network Health</span>
                                <span className="text-green-500 font-black">{stats.networkHealth.toFixed(2)}%</span>
                            </div>
                            <div className="h-3 bg-white/10 overflow-hidden">
                                <motion.div
                                    className="h-full bg-green-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${stats.networkHealth}%` }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                />
                            </div>
                        </motion.div>

                        {/* Live Stats */}
                        <motion.div
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            {liveMetrics.map((metric, i) => {
                                const Icon = metric.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        className="border-2 border-white/10 p-6 text-center relative"
                                    >
                                        {metric.live && (
                                            <motion.div
                                                className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500"
                                                animate={{ opacity: [1, 0.5, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            />
                                        )}
                                        <Icon size={24} style={{ color: metric.color }} className="mx-auto mb-3" />
                                        <div className="text-3xl font-black text-white mb-1">{metric.value}</div>
                                        <div className="text-white/40 text-sm uppercase tracking-wider">{metric.label}</div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="text-white/40 w-8 h-8" />
                </motion.div>
            </section>

            {/* RECENT BLOCKS */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">Blockchain</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Recent <span className="text-[#8c52ff]">Blocks</span>
                        </h2>
                    </motion.div>

                    {/* Blocks Table */}
                    <div className="border-4 border-black overflow-hidden">
                        {/* Header */}
                        <div className="grid grid-cols-4 bg-black text-white p-4 font-bold uppercase tracking-wider text-sm">
                            <div>Block</div>
                            <div>Transactions</div>
                            <div>Time</div>
                            <div>Producer</div>
                        </div>

                        {/* Rows */}
                        {recentBlocks.map((block, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ backgroundColor: '#f5f5f5' }}
                                className="grid grid-cols-4 p-4 border-t-2 border-black/10 cursor-pointer group"
                            >
                                <div className="font-black text-[#8c52ff]">#{formatNumber(block.height)}</div>
                                <div className="text-black/60">{block.txns.toLocaleString()}</div>
                                <div className="text-black/60">{block.time}</div>
                                <div className="flex items-center gap-2 text-black/60">
                                    <span className="font-mono">{block.producer}</span>
                                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link href="#" className="text-[#8c52ff] font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-2">
                            View All Blocks <ArrowUpRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* NODE DISTRIBUTION */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Global</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            Node <span className="text-[#ffc502]">Distribution</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { region: 'North America', nodes: 3847, percentage: 35 },
                            { region: 'Europe', nodes: 2983, percentage: 27 },
                            { region: 'Asia Pacific', nodes: 2456, percentage: 23 },
                            { region: 'Rest of World', nodes: 1561, percentage: 15 },
                        ].map((region, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="border-2 border-white/10 p-6 cursor-pointer hover:border-[#ffc502] transition-colors"
                            >
                                <Server size={32} className="text-[#ffc502] mb-4" />
                                <h3 className="font-black text-white text-lg mb-2">{region.region}</h3>
                                <div className="text-4xl font-black text-[#ffc502] mb-2">{region.nodes.toLocaleString()}</div>
                                <div className="text-white/40">nodes ({region.percentage}%)</div>
                                {/* Progress bar */}
                                <div className="mt-4 h-2 bg-white/10 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[#ffc502]"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${region.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NETWORK STATS */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">All Time</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Network <span className="text-[#ff4080]">Statistics</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { label: 'Total Transactions', value: formatNumber(stats.totalTransactions), icon: TrendingUp },
                            { label: 'Unique Addresses', value: '284.7M', icon: Users },
                            { label: 'Smart Contracts', value: '12.8M', icon: Cpu },
                        ].map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="border-4 border-black p-8 text-center cursor-pointer"
                                >
                                    <Icon size={48} className="text-[#ff4080] mx-auto mb-4" />
                                    <div className="text-5xl font-black text-black mb-2">{stat.value}</div>
                                    <div className="text-black/50 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
