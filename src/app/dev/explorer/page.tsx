'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Search, Box, ArrowUpRight, ChevronDown, Clock, Zap, Hash, Layers, FileText, User } from 'lucide-react';
import { useState, useRef } from 'react';

export default function ExplorerPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'blocks' | 'transactions' | 'accounts'>('blocks');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const recentBlocks = [
        { height: 12847392, txs: 2847, time: '2s ago', producer: '0x1a2b...3c4d', reward: '2.5 ARTH' },
        { height: 12847391, txs: 3102, time: '4s ago', producer: '0x5e6f...7g8h', reward: '2.5 ARTH' },
        { height: 12847390, txs: 2654, time: '6s ago', producer: '0x9i0j...1k2l', reward: '2.5 ARTH' },
        { height: 12847389, txs: 2981, time: '8s ago', producer: '0x3m4n...5o6p', reward: '2.5 ARTH' },
        { height: 12847388, txs: 2763, time: '10s ago', producer: '0x7q8r...9s0t', reward: '2.5 ARTH' },
    ];

    const recentTxs = [
        { hash: '0x1a2b...3c4d', from: '0xabc...123', to: '0xdef...456', value: '1,250.00', time: '1s ago', status: 'Success' },
        { hash: '0x5e6f...7g8h', from: '0xghi...789', to: '0xjkl...012', value: '500.00', time: '3s ago', status: 'Success' },
        { hash: '0x9i0j...1k2l', from: '0xmno...345', to: '0xpqr...678', value: '10,000.00', time: '5s ago', status: 'Success' },
        { hash: '0x3m4n...5o6p', from: '0xstu...901', to: '0xvwx...234', value: '75.50', time: '7s ago', status: 'Pending' },
        { hash: '0x7q8r...9s0t', from: '0xyz...567', to: '0xabc...890', value: '2,100.00', time: '9s ago', status: 'Success' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-[80vh] bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#8c52ff]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
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
                                <Box className="w-4 h-4 text-green-500" />
                            </motion.div>
                            <span className="text-[12px] font-medium text-green-500 tracking-wider uppercase">Live Explorer</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    BLOCK
                                </motion.span>
                                <motion.span
                                    className="block text-[#8c52ff]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    EXPLORER
                                </motion.span>
                            </motion.h1>
                        </div>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="max-w-3xl mx-auto mt-12"
                        >
                            <div className="relative">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40" size={24} />
                                <input
                                    type="text"
                                    placeholder="Search by Address / Tx Hash / Block / Token"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-16 pr-6 py-5 bg-white/5 border-2 border-white/20 text-white placeholder-white/40 font-bold text-lg focus:outline-none focus:border-[#8c52ff] transition-colors"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8c52ff] text-white px-6 py-3 font-bold uppercase tracking-wide"
                                >
                                    Search
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                { icon: Layers, label: 'Block Height', value: '12,847,392' },
                                { icon: FileText, label: 'Transactions', value: '2.84B' },
                                { icon: User, label: 'Addresses', value: '284.7M' },
                                { icon: Zap, label: 'TPS', value: '847,293' },
                            ].map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 + i * 0.1 }}
                                        className="border-2 border-white/10 p-4 text-center"
                                    >
                                        <Icon size={20} className="text-[#8c52ff] mx-auto mb-2" />
                                        <div className="text-xl font-black text-white">{stat.value}</div>
                                        <div className="text-white/40 text-xs uppercase">{stat.label}</div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* TABS & DATA */}
            <section className="relative py-16 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Tabs */}
                    <div className="flex gap-0 mb-8 border-4 border-black inline-flex">
                        {[
                            { key: 'blocks', label: 'Latest Blocks', icon: Layers },
                            { key: 'transactions', label: 'Latest Transactions', icon: FileText },
                            { key: 'accounts', label: 'Top Accounts', icon: User },
                        ].map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key as 'blocks' | 'transactions' | 'accounts')}
                                    className={`px-6 py-4 font-bold uppercase tracking-wide flex items-center gap-2 transition-colors ${activeTab === tab.key ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'
                                        }`}
                                >
                                    <Icon size={18} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Blocks Table */}
                    {activeTab === 'blocks' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="border-4 border-black overflow-hidden"
                        >
                            <div className="grid grid-cols-5 bg-black text-white p-4 font-bold uppercase tracking-wider text-sm">
                                <div>Block</div>
                                <div>Transactions</div>
                                <div>Producer</div>
                                <div>Reward</div>
                                <div>Age</div>
                            </div>
                            {recentBlocks.map((block, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ backgroundColor: '#f5f5f5' }}
                                    className="grid grid-cols-5 p-4 border-t-2 border-black/10 cursor-pointer group"
                                >
                                    <div className="font-black text-[#8c52ff] flex items-center gap-2">
                                        <Layers size={14} />
                                        #{block.height.toLocaleString()}
                                    </div>
                                    <div className="text-black/60">{block.txs.toLocaleString()} txns</div>
                                    <div className="font-mono text-black/60 flex items-center gap-1">
                                        {block.producer}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100" />
                                    </div>
                                    <div className="text-black/60">{block.reward}</div>
                                    <div className="text-black/40 flex items-center gap-1">
                                        <Clock size={12} />
                                        {block.time}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Transactions Table */}
                    {activeTab === 'transactions' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="border-4 border-black overflow-hidden"
                        >
                            <div className="grid grid-cols-6 bg-black text-white p-4 font-bold uppercase tracking-wider text-sm">
                                <div>Tx Hash</div>
                                <div>From</div>
                                <div>To</div>
                                <div>Value (ARTH)</div>
                                <div>Status</div>
                                <div>Age</div>
                            </div>
                            {recentTxs.map((tx, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ backgroundColor: '#f5f5f5' }}
                                    className="grid grid-cols-6 p-4 border-t-2 border-black/10 cursor-pointer group"
                                >
                                    <div className="font-mono text-[#8c52ff] flex items-center gap-1">
                                        <Hash size={12} />
                                        {tx.hash}
                                    </div>
                                    <div className="font-mono text-black/60">{tx.from}</div>
                                    <div className="font-mono text-black/60">{tx.to}</div>
                                    <div className="font-black text-black">{tx.value}</div>
                                    <div className={`text-sm font-bold ${tx.status === 'Success' ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {tx.status}
                                    </div>
                                    <div className="text-black/40 flex items-center gap-1">
                                        <Clock size={12} />
                                        {tx.time}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Top Accounts */}
                    {activeTab === 'accounts' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="border-4 border-black overflow-hidden"
                        >
                            <div className="grid grid-cols-4 bg-black text-white p-4 font-bold uppercase tracking-wider text-sm">
                                <div>Rank</div>
                                <div>Address</div>
                                <div>Balance (ARTH)</div>
                                <div>% of Supply</div>
                            </div>
                            {[
                                { rank: 1, address: '0x1a2b...3c4d', balance: '284,729,382', percent: '2.84%' },
                                { rank: 2, address: '0x5e6f...7g8h', balance: '156,382,927', percent: '1.56%' },
                                { rank: 3, address: '0x9i0j...1k2l', balance: '98,273,847', percent: '0.98%' },
                                { rank: 4, address: '0x3m4n...5o6p', balance: '74,928,374', percent: '0.74%' },
                                { rank: 5, address: '0x7q8r...9s0t', balance: '52,837,294', percent: '0.52%' },
                            ].map((account, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ backgroundColor: '#f5f5f5' }}
                                    className="grid grid-cols-4 p-4 border-t-2 border-black/10 cursor-pointer"
                                >
                                    <div className="font-black text-[#ffc502]">#{account.rank}</div>
                                    <div className="font-mono text-black/60">{account.address}</div>
                                    <div className="font-black text-black">{account.balance}</div>
                                    <div className="text-black/40">{account.percent}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Link href="#" className="text-[#8c52ff] font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-2">
                            View All <ArrowUpRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
