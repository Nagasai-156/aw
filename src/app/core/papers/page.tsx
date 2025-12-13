'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FileText, Download, Book, ExternalLink, ArrowRight, ChevronDown, Clock, Users, GitBranch, Code } from 'lucide-react';
import { useRef } from 'react';

export default function ProtocolPapersPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const papers = [
        {
            type: 'WHITEPAPER',
            title: 'ArthaChain: A High-Performance Layer 1 Blockchain',
            version: 'v2.1',
            date: 'November 2024',
            pages: 45,
            authors: ['Dr. Sarah Chen', 'Dr. Michael Kumar', 'Alex Thompson'],
            abstract: 'We present ArthaChain, a novel Layer 1 blockchain achieving over 1 million transactions per second through parallel execution and AI-optimized consensus.',
            color: '#8c52ff',
            featured: true,
        },
        {
            type: 'TECHNICAL',
            title: 'AI-Powered Consensus: Optimizing Byzantine Fault Tolerance',
            version: 'v1.4',
            date: 'October 2024',
            pages: 32,
            authors: ['Dr. Sarah Chen', 'Prof. James Liu'],
            abstract: 'This paper introduces our novel AI-PoS consensus mechanism that uses machine learning to optimize validator selection and block production.',
            color: '#ffc502',
            featured: false,
        },
        {
            type: 'RESEARCH',
            title: 'Quantum-Resistant Cryptography in Distributed Ledgers',
            version: 'v1.2',
            date: 'September 2024',
            pages: 28,
            authors: ['Dr. Michael Kumar', 'Dr. Emma Wilson'],
            abstract: 'An exploration of post-quantum cryptographic primitives and their integration into blockchain signature schemes.',
            color: '#ff4080',
            featured: false,
        },
        {
            type: 'SPECIFICATION',
            title: 'Dual VM Architecture: EVM + WASM Interoperability',
            version: 'v1.0',
            date: 'August 2024',
            pages: 24,
            authors: ['Alex Thompson', 'Dr. David Park'],
            abstract: 'Technical specification for the dual virtual machine architecture enabling seamless cross-VM contract calls.',
            color: '#450693',
            featured: false,
        },
    ];

    const resources = [
        { icon: Book, title: 'Developer Docs', desc: 'Complete API reference and guides', link: '#' },
        { icon: Code, title: 'GitHub', desc: 'Open source implementations', link: '#' },
        { icon: GitBranch, title: 'RFCs', desc: 'Request for Comments archive', link: '#' },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#ffc502]/15 rounded-full blur-[150px]"
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
                            <FileText className="w-4 h-4 text-[#ffc502]" />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Technical Documentation</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    PROTOCOL
                                </motion.span>
                                <motion.span
                                    className="block text-[#ffc502]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    PAPERS
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-3xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Deep-dive into the technical foundations of ArthaChain. Whitepapers, research papers, and specifications.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-8 lg:gap-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                { value: '4', label: 'Papers' },
                                { value: '129', label: 'Pages' },
                                { value: '8', label: 'Authors' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                                    className="text-center"
                                >
                                    <div className="text-4xl font-black text-[#ffc502]">{stat.value}</div>
                                    <div className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</div>
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

            {/* FEATURED PAPER */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">Featured</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Main <span className="text-[#8c52ff]">Whitepaper</span>
                        </h2>
                    </motion.div>

                    {/* Featured Paper Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="border-4 border-black p-8 lg:p-12 cursor-pointer group"
                    >
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Left - Icon */}
                            <div className="flex items-center justify-center">
                                <motion.div
                                    className="w-40 h-52 bg-[#8c52ff] flex items-center justify-center relative"
                                    whileHover={{ rotate: 5 }}
                                >
                                    <FileText size={80} className="text-white" />
                                    <div className="absolute bottom-4 left-4 right-4 text-center">
                                        <div className="text-white font-black text-sm">WHITEPAPER</div>
                                        <div className="text-white/60 text-xs">v2.1</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Center - Content */}
                            <div className="lg:col-span-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-[#8c52ff] text-white px-3 py-1 text-xs font-bold uppercase">Whitepaper</span>
                                    <span className="text-black/40 text-sm flex items-center gap-1">
                                        <Clock size={12} />
                                        November 2024
                                    </span>
                                </div>
                                <h3 className="text-[28px] lg:text-[36px] font-black text-black leading-tight mb-4">
                                    {papers[0].title}
                                </h3>
                                <p className="text-black/60 mb-6">{papers[0].abstract}</p>

                                <div className="flex items-center gap-4 mb-6">
                                    <Users size={16} className="text-black/40" />
                                    <span className="text-black/60">{papers[0].authors.join(', ')}</span>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#8c52ff] transition-colors inline-flex items-center gap-2"
                                >
                                    <Download size={18} />
                                    Download PDF ({papers[0].pages} pages)
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ALL PAPERS */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Library</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            All <span className="text-[#ffc502]">Papers</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {papers.map((paper, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="flex flex-col lg:flex-row gap-6 border-2 border-white/10 p-6 hover:border-white/30 transition-colors cursor-pointer group"
                            >
                                {/* Icon */}
                                <div
                                    className="w-16 h-20 flex-shrink-0 flex items-center justify-center"
                                    style={{ backgroundColor: paper.color }}
                                >
                                    <FileText size={32} className="text-white" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span
                                            className="px-2 py-1 text-xs font-bold uppercase"
                                            style={{ backgroundColor: paper.color, color: 'white' }}
                                        >
                                            {paper.type}
                                        </span>
                                        <span className="text-white/40 text-sm">{paper.version}</span>
                                        <span className="text-white/40 text-sm">{paper.date}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white group-hover:text-[#ffc502] transition-colors mb-2">
                                        {paper.title}
                                    </h3>
                                    <p className="text-white/50 text-sm mb-3">{paper.abstract}</p>
                                    <div className="flex items-center gap-4 text-white/40 text-sm">
                                        <span>{paper.pages} pages</span>
                                        <span>{paper.authors.length} authors</span>
                                    </div>
                                </div>

                                {/* Download */}
                                <div className="flex items-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        className="border-2 p-3 hover:bg-white/10 transition-colors"
                                        style={{ borderColor: paper.color }}
                                    >
                                        <Download size={20} style={{ color: paper.color }} />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ADDITIONAL RESOURCES */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">More</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Additional <span className="text-[#ff4080]">Resources</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {resources.map((resource, i) => {
                            const Icon = resource.icon;
                            return (
                                <motion.a
                                    key={i}
                                    href={resource.link}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="border-4 border-black p-8 text-center hover:bg-black group transition-colors"
                                >
                                    <div className="w-16 h-16 border-4 border-[#ff4080] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff4080] transition-colors">
                                        <Icon size={32} className="text-[#ff4080] group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-black text-black group-hover:text-white mb-2 transition-colors">{resource.title}</h3>
                                    <p className="text-black/50 group-hover:text-white/60 transition-colors">{resource.desc}</p>
                                    <ExternalLink size={16} className="mx-auto mt-4 text-black/20 group-hover:text-white/40 transition-colors" />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
