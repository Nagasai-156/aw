'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Droplets, Copy, Check, ChevronDown, ArrowRight, Zap, Clock, AlertCircle, Wallet } from 'lucide-react';
import { useState, useRef } from 'react';

export default function TestnetPage() {
    const [walletAddress, setWalletAddress] = useState('');
    const [isRequesting, setIsRequesting] = useState(false);
    const [requestSuccess, setRequestSuccess] = useState(false);
    const [copied, setCopied] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const testnetRPC = 'https://testnet-rpc.arthachain.io';
    const chainId = '421614';

    const handleFaucetRequest = async () => {
        if (!walletAddress) return;
        setIsRequesting(true);
        // Simulate request
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsRequesting(false);
        setRequestSuccess(true);
        setTimeout(() => setRequestSuccess(false), 5000);
    };

    const copyRPC = () => {
        navigator.clipboard.writeText(testnetRPC);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const recentRequests = [
        { address: '0x1a2b...3c4d', amount: '10 ARTH', time: '2 min ago' },
        { address: '0x5e6f...7g8h', amount: '10 ARTH', time: '5 min ago' },
        { address: '0x9i0j...1k2l', amount: '10 ARTH', time: '8 min ago' },
        { address: '0x3m4n...5o6p', amount: '10 ARTH', time: '12 min ago' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#8c52ff]/20 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ffc502]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#8c52ff]/20 border border-[#8c52ff]/30 backdrop-blur-sm rounded-full mb-8"
                        >
                            <Droplets className="w-4 h-4 text-[#8c52ff]" />
                            <span className="text-[12px] font-medium text-[#8c52ff] tracking-wider uppercase">Test Network</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    TESTNET
                                </motion.span>
                                <motion.span
                                    className="block text-[#8c52ff]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    FAUCET
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Get free testnet ARTH tokens to develop and test your applications. No real value, unlimited possibilities.
                        </motion.p>

                        {/* Faucet Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="max-w-xl mx-auto"
                        >
                            <div className="border-4 border-[#8c52ff] p-8 bg-black/50 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Droplets size={32} className="text-[#8c52ff]" />
                                    </motion.div>
                                    <div className="text-left">
                                        <h3 className="font-black text-white text-xl">Request Tokens</h3>
                                        <p className="text-white/40 text-sm">10 ARTH per request · 24h cooldown</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Enter your wallet address (0x...)"
                                            value={walletAddress}
                                            onChange={(e) => setWalletAddress(e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/20 text-white placeholder-white/40 font-mono focus:outline-none focus:border-[#8c52ff] transition-colors"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleFaucetRequest}
                                        disabled={isRequesting || !walletAddress}
                                        className={`w-full py-4 font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 ${requestSuccess
                                                ? 'bg-green-500 text-white'
                                                : 'bg-[#8c52ff] text-white hover:bg-[#7a45e0] disabled:opacity-50'
                                            }`}
                                    >
                                        {isRequesting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                >
                                                    <Zap size={20} />
                                                </motion.div>
                                                Requesting...
                                            </>
                                        ) : requestSuccess ? (
                                            <>
                                                <Check size={20} />
                                                10 ARTH Sent!
                                            </>
                                        ) : (
                                            <>
                                                <Droplets size={20} />
                                                Request 10 ARTH
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </div>
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

            {/* NETWORK INFO */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Connect</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Network <span className="text-[#ffc502]">Details</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* RPC Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border-4 border-black p-8"
                        >
                            <h3 className="font-black text-black text-2xl mb-6">Network Configuration</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-black/5">
                                    <span className="font-bold text-black/60">Network Name</span>
                                    <span className="font-black text-black">ArthaChain Testnet</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-black/5">
                                    <span className="font-bold text-black/60">Chain ID</span>
                                    <span className="font-mono font-black text-black">{chainId}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-black/5">
                                    <span className="font-bold text-black/60">Currency</span>
                                    <span className="font-black text-black">ARTH</span>
                                </div>
                                <div className="p-4 bg-black/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-black/60">RPC URL</span>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            onClick={copyRPC}
                                            className="p-2 hover:bg-black/10 transition-colors"
                                        >
                                            {copied ? <Check size={16} /> : <Copy size={16} />}
                                        </motion.button>
                                    </div>
                                    <code className="font-mono text-sm text-[#8c52ff] break-all">{testnetRPC}</code>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className="w-full mt-6 bg-black text-white py-4 font-bold uppercase tracking-wide hover:bg-[#8c52ff] transition-colors"
                            >
                                Add to MetaMask
                            </motion.button>
                        </motion.div>

                        {/* Recent Requests */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border-4 border-black p-8"
                        >
                            <h3 className="font-black text-black text-2xl mb-6">Recent Requests</h3>
                            <div className="space-y-4">
                                {recentRequests.map((request, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center justify-between p-4 border-2 border-black/10"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#8c52ff] flex items-center justify-center">
                                                <Droplets size={16} className="text-white" />
                                            </div>
                                            <span className="font-mono text-black/60">{request.address}</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-black text-[#8c52ff]">{request.amount}</div>
                                            <div className="text-black/40 text-xs flex items-center gap-1">
                                                <Clock size={10} />
                                                {request.time}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* IMPORTANT NOTES */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-4 border-[#ffc502] p-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <AlertCircle size={32} className="text-[#ffc502]" />
                            <h3 className="font-black text-white text-2xl">Important Notes</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                'Testnet tokens have no real value and cannot be traded',
                                'Faucet requests are limited to 10 ARTH every 24 hours per address',
                                'The testnet may be reset periodically without notice',
                                'Report bugs and issues on our Discord or GitHub',
                            ].map((note, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 text-white/60"
                                >
                                    <Check size={16} className="text-[#ffc502] mt-1 flex-shrink-0" />
                                    {note}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
