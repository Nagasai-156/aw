'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Book, Search, Code, Terminal, ChevronDown, ArrowRight, FileText, Zap, Box, Shield, Database, Layers, Copy, Check } from 'lucide-react';
import { useState, useRef } from 'react';

export default function DocsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [copiedCode, setCopiedCode] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const docCategories = [
        {
            icon: Zap,
            title: 'Quick Start',
            description: 'Get up and running in 5 minutes',
            links: ['Installation', 'First Transaction', 'Deploy Contract', 'Connect Wallet'],
            color: '#8c52ff',
        },
        {
            icon: Box,
            title: 'Smart Contracts',
            description: 'Build decentralized applications',
            links: ['Solidity Guide', 'Rust/WASM Guide', 'Contract Standards', 'Testing'],
            color: '#ffc502',
        },
        {
            icon: Shield,
            title: 'Security',
            description: 'Best practices for secure code',
            links: ['Audit Guidelines', 'Common Vulnerabilities', 'Access Control', 'Upgrades'],
            color: '#ff4080',
        },
        {
            icon: Database,
            title: 'Infrastructure',
            description: 'Run nodes and validators',
            links: ['Node Setup', 'Validator Guide', 'RPC Endpoints', 'Archive Nodes'],
            color: '#450693',
        },
        {
            icon: Layers,
            title: 'APIs & SDKs',
            description: 'Integrate with ArthaChain',
            links: ['REST API', 'WebSocket API', 'JavaScript SDK', 'Python SDK'],
            color: '#8c52ff',
        },
        {
            icon: Terminal,
            title: 'CLI Tools',
            description: 'Command-line interface',
            links: ['Installation', 'Commands Reference', 'Scripting', 'Automation'],
            color: '#ffc502',
        },
    ];

    const codeExample = `// Install ArthaChain SDK
npm install @arthachain/sdk

// Initialize client
import { ArthaClient } from '@arthachain/sdk';

const client = new ArthaClient({
  network: 'mainnet',
  apiKey: 'your-api-key'
});

// Get balance
const balance = await client.getBalance(address);
console.log('Balance:', balance);`;

    const copyCode = () => {
        navigator.clipboard.writeText(codeExample);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
    };

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#8c52ff]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div style={{ y }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                            >
                                <Book className="w-4 h-4 text-[#8c52ff]" />
                                <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Developer Documentation</span>
                            </motion.div>

                            <div className="overflow-hidden">
                                <motion.h1 className="text-[56px] sm:text-[72px] lg:text-[100px] font-black leading-[0.85] tracking-[-0.04em]">
                                    <motion.span
                                        className="block text-white"
                                        initial={{ y: 100 }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        DOCS
                                    </motion.span>
                                </motion.h1>
                            </div>

                            <motion.p
                                className="text-white/50 text-lg sm:text-xl max-w-lg mt-8 mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Everything you need to build on ArthaChain. Comprehensive guides, API references, and code examples.
                            </motion.p>

                            {/* Search */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="relative max-w-lg"
                            >
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search documentation..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/20 text-white placeholder-white/40 font-bold focus:outline-none focus:border-[#8c52ff] transition-colors"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Code Example */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="hidden lg:block"
                        >
                            <div className="border-2 border-white/20 bg-black/50 backdrop-blur-sm">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff4080]" />
                                        <div className="w-3 h-3 rounded-full bg-[#ffc502]" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={copyCode}
                                        className="text-white/40 hover:text-white transition-colors"
                                    >
                                        {copiedCode ? <Check size={16} /> : <Copy size={16} />}
                                    </motion.button>
                                </div>
                                <pre className="p-4 text-sm font-mono text-white/80 overflow-x-auto">
                                    <code>{codeExample}</code>
                                </pre>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="text-white/40 w-8 h-8" />
                </motion.div>
            </section>

            {/* DOC CATEGORIES */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">Browse</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Documentation <span className="text-[#8c52ff]">Categories</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {docCategories.map((category, i) => {
                            const Icon = category.icon;
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
                                    <div
                                        className="w-14 h-14 flex items-center justify-center mb-4"
                                        style={{ backgroundColor: category.color }}
                                    >
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-black text-black group-hover:text-white mb-2 transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-black/50 group-hover:text-white/60 mb-4 transition-colors">
                                        {category.description}
                                    </p>
                                    <div className="space-y-2">
                                        {category.links.map((link, j) => (
                                            <Link
                                                key={j}
                                                href="#"
                                                className="block text-sm font-bold text-black/40 group-hover:text-white/60 hover:text-[#8c52ff] transition-colors"
                                            >
                                                → {link}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* POPULAR GUIDES */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Trending</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            Popular <span className="text-[#ffc502]">Guides</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            { title: 'Deploy Your First Smart Contract', time: '10 min', difficulty: 'Beginner' },
                            { title: 'Building a DeFi Protocol on ArthaChain', time: '45 min', difficulty: 'Advanced' },
                            { title: 'Migrating from Ethereum to ArthaChain', time: '20 min', difficulty: 'Intermediate' },
                            { title: 'Setting Up a Validator Node', time: '30 min', difficulty: 'Advanced' },
                        ].map((guide, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="flex items-center justify-between p-6 border-2 border-white/10 hover:border-[#ffc502] transition-colors cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <FileText size={24} className="text-[#ffc502]" />
                                    <div>
                                        <h3 className="font-black text-white group-hover:text-[#ffc502] transition-colors">
                                            {guide.title}
                                        </h3>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-white/40 text-sm">{guide.time}</span>
                                            <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white/60">{guide.difficulty}</span>
                                        </div>
                                    </div>
                                </div>
                                <ArrowRight className="text-white/20 group-hover:text-[#ffc502] transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
