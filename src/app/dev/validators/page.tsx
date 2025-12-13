'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Server, Shield, Coins, ChevronDown, ArrowRight, Check, Cpu, HardDrive, Wifi, AlertTriangle, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

export default function ValidatorHubPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const requirements = [
        { icon: Coins, label: 'Minimum Stake', value: '32,000 ARTH', desc: 'Required to become a validator' },
        { icon: Cpu, label: 'CPU', value: '8+ Cores', desc: 'Modern processor recommended' },
        { icon: HardDrive, label: 'Storage', value: '1 TB SSD', desc: 'NVMe SSD preferred' },
        { icon: Server, label: 'Memory', value: '32 GB RAM', desc: 'For optimal performance' },
        { icon: Wifi, label: 'Bandwidth', value: '100 Mbps', desc: 'Stable internet connection' },
    ];

    const rewards = [
        { label: 'Average APY', value: '8.5%', color: '#8c52ff' },
        { label: 'Active Validators', value: '10,847', color: '#ffc502' },
        { label: 'Total Staked', value: '847M ARTH', color: '#ff4080' },
    ];

    const steps = [
        {
            step: '01',
            title: 'Setup Hardware',
            description: 'Prepare a server that meets the minimum requirements. Cloud or bare metal.',
            time: '30 min',
        },
        {
            step: '02',
            title: 'Install Node',
            description: 'Download and configure the ArthaChain validator software.',
            time: '15 min',
        },
        {
            step: '03',
            title: 'Stake ARTH',
            description: 'Deposit minimum 32,000 ARTH to the staking contract.',
            time: '5 min',
        },
        {
            step: '04',
            title: 'Register Validator',
            description: 'Submit your validator public key to begin earning rewards.',
            time: '5 min',
        },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#ffc502]/15 rounded-full blur-[150px]"
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
                            <Server className="w-4 h-4 text-[#ffc502]" />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Run a Validator</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    VALIDATOR
                                </motion.span>
                                <motion.span
                                    className="block text-[#ffc502]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    HUB
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Secure the network and earn rewards. Become part of ArthaChain&apos;s decentralized validator set.
                        </motion.p>

                        {/* Reward Stats */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-8 lg:gap-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {rewards.map((reward, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                                    className="text-center"
                                >
                                    <div className="text-4xl lg:text-5xl font-black" style={{ color: reward.color }}>{reward.value}</div>
                                    <div className="text-white/40 text-sm uppercase tracking-wider">{reward.label}</div>
                                </motion.div>
                            ))}
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

            {/* REQUIREMENTS */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">Prerequisites</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            System <span className="text-[#8c52ff]">Requirements</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {requirements.map((req, i) => {
                            const Icon = req.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="border-4 border-black p-6 cursor-pointer group hover:bg-black transition-colors"
                                >
                                    <div className="w-14 h-14 bg-[#8c52ff] flex items-center justify-center mb-4 group-hover:bg-[#ffc502] transition-colors">
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="font-black text-black group-hover:text-white text-sm uppercase tracking-wider mb-2 transition-colors">
                                        {req.label}
                                    </h3>
                                    <div className="text-3xl font-black text-[#8c52ff] group-hover:text-[#ffc502] mb-2 transition-colors">
                                        {req.value}
                                    </div>
                                    <p className="text-black/50 group-hover:text-white/60 text-sm transition-colors">
                                        {req.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SETUP STEPS */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Get Started</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            Setup <span className="text-[#ffc502]">Guide</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="border-2 border-white/10 p-6 hover:border-[#ffc502] transition-colors cursor-pointer group"
                            >
                                <div className="text-6xl font-black text-white/10 group-hover:text-[#ffc502]/30 transition-colors mb-4">
                                    {step.step}
                                </div>
                                <h3 className="font-black text-white text-xl mb-2">{step.title}</h3>
                                <p className="text-white/50 text-sm mb-4">{step.description}</p>
                                <div className="text-[#ffc502] text-sm font-bold">~{step.time}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link href="#" className="bg-[#ffc502] text-black px-10 py-5 font-bold uppercase tracking-wide hover:bg-white transition-colors inline-flex items-center gap-2">
                                Read Full Guide <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* RISKS */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-4 border-[#ff4080] p-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <AlertTriangle size={32} className="text-[#ff4080]" />
                            <h3 className="font-black text-black text-2xl">Risks & Responsibilities</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                'Slashing: Validators may lose a portion of stake for malicious behavior or extended downtime',
                                'Hardware: You are responsible for maintaining uptime and security of your validator',
                                'Stake Lock: Minimum 21 days unbonding period when exiting validator set',
                                'Updates: Validators must stay updated with latest software releases',
                            ].map((risk, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 text-black/60"
                                >
                                    <Shield size={16} className="text-[#ff4080] mt-1 flex-shrink-0" />
                                    {risk}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
