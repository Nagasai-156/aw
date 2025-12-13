'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Newspaper, Download, FileText, Image, Video, ArrowRight, ExternalLink, Clock, ChevronDown, Mic, Rocket, Users, Zap, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

export default function PressPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const featuredNews = {
        date: 'December 10, 2024',
        category: 'FUNDING',
        title: 'ArthaChain Raises $50M in Series A to Scale Next-Gen Blockchain Infrastructure',
        excerpt: 'Leading investors back ArthaChain\'s vision for a faster, more scalable blockchain platform.',
        source: 'TechCrunch',
    };

    const recentNews = [
        { date: 'Dec 5, 2024', title: 'Mainnet Launch Scheduled for Q1 2025', source: 'CoinDesk', category: 'ANNOUNCEMENT', icon: Rocket },
        { date: 'Nov 28, 2024', title: 'Partnership with Fortune 500 Enterprise', source: 'Bloomberg', category: 'PARTNERSHIP', icon: Users },
        { date: 'Nov 20, 2024', title: 'ArthaChain Achieves 1M TPS in Tests', source: 'The Block', category: 'TECHNOLOGY', icon: Zap },
        { date: 'Nov 15, 2024', title: '$10M Developer Grant Program', source: 'Decrypt', category: 'ECOSYSTEM', icon: TrendingUp },
    ];

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                {/* Animated Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#ffc502]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8c52ff]/10 rounded-full blur-[120px]"
                    animate={{ scale: [1.3, 1, 1.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
                    <motion.div style={{ y, opacity }}>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Newspaper className="w-4 h-4 text-[#ffc502]" />
                            </motion.div>
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Press & Media</span>
                        </motion.div>

                        {/* Main Title */}
                        <div className="overflow-hidden">
                            <motion.h1 className="text-[64px] sm:text-[96px] lg:text-[140px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    PRESS
                                </motion.span>
                                <motion.span
                                    className="block text-[#ffc502]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    & MEDIA
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Latest news, press releases, and media resources from ArthaChain.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#news"
                                    className="bg-[#ffc502] text-black px-10 py-5 font-bold uppercase tracking-wide hover:bg-white transition-colors inline-flex items-center gap-2"
                                >
                                    Latest News <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#kit"
                                    className="border-2 border-white/20 text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all"
                                >
                                    Press Kit
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
                >
                    <ChevronDown className="text-white/40 w-8 h-8" />
                </motion.div>
            </section>

            {/* FEATURED STORY */}
            <section id="news" className="relative py-32 px-8 bg-white">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Breaking</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Featured <span className="text-[#ff4080]">Story</span>
                        </h2>
                    </motion.div>

                    <motion.article
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="grid lg:grid-cols-2 gap-12 items-center cursor-pointer"
                    >
                        {/* Left - Featured Image */}
                        <motion.div
                            className="bg-black aspect-[4/3] flex items-center justify-center border-4 border-black overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="text-[150px] font-black text-[#ffc502] leading-none"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Newspaper size={120} className="text-[#ffc502]" />
                            </motion.div>
                        </motion.div>

                        {/* Right - Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-4"
                            >
                                <span className="bg-[#ff4080] text-white px-3 py-1 text-xs font-bold uppercase">
                                    {featuredNews.category}
                                </span>
                                <span className="text-black/40 text-sm flex items-center gap-1">
                                    <Clock size={12} />
                                    {featuredNews.date}
                                </span>
                            </motion.div>

                            <motion.h2
                                className="text-[28px] lg:text-[36px] font-black text-black leading-tight mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                {featuredNews.title}
                            </motion.h2>

                            <p className="text-black/60 text-lg mb-6">
                                {featuredNews.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-[#8c52ff] font-bold">Via {featuredNews.source}</span>
                                <motion.div whileHover={{ x: 10 }}>
                                    <Link
                                        href="#"
                                        className="text-black font-bold uppercase text-sm tracking-wide flex items-center gap-2 hover:text-[#8c52ff] transition-colors"
                                    >
                                        Read Full Story <ArrowRight size={16} />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.article>
                </div>
            </section>

            {/* RECENT NEWS - Animated Cards */}
            <section className="relative py-32 px-8 bg-black">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">Updates</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            Recent <span className="text-[#8c52ff]">News</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recentNews.map((news, i) => {
                            const Icon = news.icon;
                            return (
                                <motion.article
                                    key={i}
                                    initial={{ opacity: 0, y: 50, rotateY: -10 }}
                                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="border-2 border-white/10 hover:border-white/30 transition-all p-6 cursor-pointer group"
                                >
                                    <motion.div
                                        className="w-12 h-12 bg-[#ffc502] flex items-center justify-center mb-4"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                    >
                                        <Icon size={24} className="text-black" />
                                    </motion.div>
                                    <span className="text-xs font-bold text-[#ffc502] uppercase">{news.category}</span>
                                    <h4 className="font-bold text-white mt-3 mb-3 group-hover:text-[#8c52ff] transition-colors">
                                        {news.title}
                                    </h4>
                                    <div className="flex items-center justify-between text-xs text-white/40">
                                        <span>{news.date}</span>
                                        <span>{news.source}</span>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PRESS KIT - Download Cards */}
            <section id="kit" className="relative py-32 px-8 bg-white">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Resources</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Press <span className="text-[#ffc502]">Kit</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Image, label: 'Logos', format: 'SVG, PNG', size: '12 MB', color: '#8c52ff' },
                            { icon: FileText, label: 'Fact Sheet', format: 'PDF', size: '2 MB', color: '#ffc502' },
                            { icon: Video, label: 'Promo Video', format: 'MP4', size: '150 MB', color: '#ff4080' },
                            { icon: Download, label: 'Full Kit', format: 'ZIP', size: '200 MB', color: '#450693' },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.button
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="border-4 border-black p-6 text-left hover:bg-black group transition-all"
                                >
                                    <motion.div
                                        className="w-14 h-14 flex items-center justify-center mb-4 border-4"
                                        style={{ borderColor: item.color }}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                    >
                                        <Icon size={28} style={{ color: item.color }} />
                                    </motion.div>
                                    <div className="font-black text-black group-hover:text-white text-lg transition-colors">{item.label}</div>
                                    <div className="text-black/40 group-hover:text-white/60 text-sm mt-1 transition-colors">{item.format} • {item.size}</div>
                                    <motion.div
                                        className="mt-4 text-sm font-bold uppercase tracking-wider flex items-center gap-2"
                                        style={{ color: item.color }}
                                        whileHover={{ x: 5 }}
                                    >
                                        Download <Download size={14} />
                                    </motion.div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* MEDIA CONTACT */}
            <section className="relative py-32 px-8 bg-black">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Mic size={64} className="text-[#ffc502] mx-auto mb-8" />
                        </motion.div>
                        <h2 className="text-[36px] lg:text-[56px] font-black text-white mb-4">
                            Media <span className="text-[#ffc502]">Inquiries</span>
                        </h2>
                        <p className="text-white/50 mb-8">For interviews, press releases, or media partnerships</p>
                        <motion.a
                            href="mailto:press@arthachain.io"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-[#ffc502] text-black px-10 py-5 font-bold uppercase tracking-wide hover:bg-white transition-colors"
                        >
                            press@arthachain.io <ExternalLink size={18} />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* COVERAGE - Animated Logos */}
            <section className="relative py-20 px-8 bg-white">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-sm text-black/40 uppercase tracking-wider mb-8"
                    >
                        As featured in
                    </motion.div>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                        {['TechCrunch', 'CoinDesk', 'Bloomberg', 'The Block', 'Decrypt', 'Wired'].map((outlet, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.1, y: -5, color: '#8c52ff' }}
                                className="text-xl lg:text-2xl font-black text-black/20 hover:text-black/60 transition-colors cursor-pointer"
                            >
                                {outlet}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
