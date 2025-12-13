'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cardContents = [
    {
        title: 'AI-Native Applications',
        description: 'AI agents, autonomous dApps, and self-learning applications powered by on-chain neural computation. Build autonomous trading agents, self-optimizing protocols, and AI bots with DID identities.',
        href: '/features/ai',
    },
    {
        title: 'DeAI & Compute Networks',
        description: 'Decentralized AI training, inference, vector databases, and compute routing powered by AI Consensus + SVDB.',
        href: '/technology',
    },
    {
        title: 'Infinite-Scale Infrastructure',
        description: "Dynamic sharding, DAG parallelism, and Dual-VM (EVM + WASM) enable unlimited horizontal scaling. Whether you're building DeFi protocols, NFT marketplaces, or enterprise applications, ArthaChain provides composable infrastructure that scales beautifully. With permissionless validators, no-staking participation, and auto-sharding, deploy ANYTHING at any scale.",
        href: '/core/architecture',
    },
    {
        title: 'Identity & Social Intelligence',
        description: 'DID system enabling AI profiles, autonomous social identities, reputation models, and secure authentication.',
        href: '/features/did',
    },
    {
        title: 'Autonomous Finance (AI-DeFi)',
        description: 'AI-powered liquidity managers, predictive risk engines, and ML-driven order routing for next-gen DeFi.',
        href: '/features/defi',
    },
];

const PlusCard: React.FC<{
    className?: string;
    title: string;
    description: string;
    href?: string;
}> = ({ className = '', title, description, href = '/technology' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                'relative border border-dashed border-zinc-700 p-6 bg-black/50 backdrop-blur-sm min-h-[200px]',
                'flex flex-col justify-between hover:bg-black/70 transition-all duration-300 group',
                className
            )}
        >
            <Link href={href}>
                <CornerPlusIcons />
                {/* Content */}
                <div className="relative z-10 space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#8c52ff] transition-colors">
                        {title}
                    </h3>
                    <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">{description}</p>
                </div>
            </Link>
        </motion.div>
    );
};

const CornerPlusIcons = () => (
    <>
        <PlusIcon className="absolute -top-3 -left-3" />
        <PlusIcon className="absolute -top-3 -right-3" />
        <PlusIcon className="absolute -bottom-3 -left-3" />
        <PlusIcon className="absolute -bottom-3 -right-3" />
    </>
);

const PlusIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className={cn('text-white size-6', className)}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
);

export default function BentoSection() {
    return (
        <section className="relative bg-black overflow-hidden">
            {/* Crazy Background Effects */}

            {/* Animated Gradient Orbs */}
            <motion.div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#8c52ff]/20 rounded-full blur-[150px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ff4080]/15 rounded-full blur-[150px]"
                animate={{
                    x: [0, -40, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#ffc502]/10 rounded-full blur-[120px]"
                animate={{
                    x: [0, -30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />

            {/* Main Content */}
            <div className="relative z-10 mx-auto max-w-[1400px] border-x border-zinc-800/50 py-16 px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-5">
                        <span className="w-2 h-2 rounded-full bg-[#8c52ff] animate-pulse" />
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                            Build on ArthaChain
                        </span>
                    </div>
                    <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-black tracking-tight text-white leading-[1.1] mb-4">
                        The <span className="text-[#8c52ff]">AI-Native</span> Layer-1
                    </h2>
                    <p className="text-white/50 text-sm sm:text-base tracking-wide max-w-2xl mx-auto">
                        Where artificial intelligence lives ON the blockchain. Deploy autonomous agents, AI-powered dApps, and intelligent infrastructure.
                    </p>
                </motion.div>

                {/* Responsive Grid - 6 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
                    <PlusCard {...cardContents[0]} className="lg:col-span-3 lg:row-span-2" />
                    <PlusCard {...cardContents[1]} className="lg:col-span-2 lg:row-span-2" />
                    <PlusCard {...cardContents[2]} className="lg:col-span-4 lg:row-span-1" />
                    <PlusCard {...cardContents[3]} className="lg:col-span-2 lg:row-span-1" />
                    <PlusCard {...cardContents[4]} className="lg:col-span-2 lg:row-span-1" />
                </div>

                {/* Section Footer Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl ml-auto text-right px-4 mt-8 lg:-mt-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Built for <span className="text-[#8c52ff]">performance</span>.<br />
                        Designed for <span className="text-[#ffc502]">flexibility</span>.
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        ArthaChain gives you the tools to build beautiful, high-performing dApps with lightning speed. Each component is thoughtfully designed to be flexible, reusable, and accessible.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
