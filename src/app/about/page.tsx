'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe, Users, ChevronDown, Star, Award, Target } from 'lucide-react';
import { useRef } from 'react';

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO - Massive Typography with Parallax */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                {/* Animated Glowing Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8c52ff]/20 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff4080]/10 rounded-full blur-[120px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <motion.div style={{ y, opacity }} className="text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                        >
                            <motion.span
                                className="w-2 h-2 bg-[#8c52ff] rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">About Us</span>
                        </motion.div>

                        {/* Main Title with Stagger */}
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-[72px] sm:text-[100px] lg:text-[150px] font-black leading-[0.85] tracking-[-0.04em]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    WE ARE
                                </motion.span>
                                <motion.span
                                    className="block text-[#8c52ff]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                >
                                    ARTHA
                                </motion.span>
                                <motion.span
                                    className="block text-[#ffc502]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                >
                                    CHAIN
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Building the future of decentralized technology with speed, security, and innovation.
                        </motion.p>

                        {/* Animated Stats Row */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                { value: '2022', label: 'Founded' },
                                { value: '50+', label: 'Team Members' },
                                { value: '10+', label: 'Countries' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className="text-3xl lg:text-4xl font-black text-white">{stat.value}</div>
                                    <div className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#story"
                                    className="bg-[#8c52ff] text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#7a45e0] transition-colors inline-flex items-center gap-2"
                                >
                                    Our Story <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/technology"
                                    className="border-2 border-white/20 text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all"
                                >
                                    Technology
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white/30 text-xs uppercase tracking-wider">Scroll</span>
                        <ChevronDown className="text-white/40 w-6 h-6" />
                    </div>
                </motion.div>
            </section>

            {/* STORY SECTION - Horizontal Reveal */}
            <section id="story" className="relative bg-white py-32 px-8 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Animated Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -100, rotate: -5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="w-full aspect-square border-8 border-black flex items-center justify-center bg-black">
                                <motion.span
                                    className="text-[200px] font-black text-[#8c52ff] leading-none"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    A
                                </motion.span>
                            </div>
                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -top-6 -right-6 bg-[#ffc502] px-6 py-3"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: "spring" }}
                            >
                                <span className="text-black font-black uppercase text-sm">Since 2022</span>
                            </motion.div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.span
                                className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                Our Story
                            </motion.span>
                            <h2 className="text-[40px] lg:text-[56px] font-black text-black leading-none mb-8">
                                Building<br />
                                <span className="text-[#8c52ff]">Tomorrow's</span><br />
                                Infrastructure
                            </h2>
                            <p className="text-black/60 text-lg leading-relaxed mb-8">
                                Founded in 2022 by a team of blockchain veterans and AI researchers, ArthaChain was born from a simple vision: what if we could build a blockchain that didn't compromise? One that offered speed without sacrificing security, scale without losing decentralization.
                            </p>
                            <p className="text-black/60 text-lg leading-relaxed mb-8">
                                Today, we're a global team of 50+ brilliant minds working to make that vision a reality.
                            </p>
                            <motion.div whileHover={{ x: 10 }}>
                                <Link
                                    href="/technology"
                                    className="inline-flex items-center gap-2 text-[#8c52ff] font-bold uppercase tracking-wide"
                                >
                                    Explore Technology <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VALUES - Animated Cards */}
            <section className="relative bg-black py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">What Drives Us</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-white leading-none">
                            Core <span className="text-[#ffc502]">Values</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Zap, title: 'Speed First', desc: 'Every millisecond matters in the future of finance.', color: '#ffc502' },
                            { icon: Shield, title: 'Security', desc: 'Quantum-resistant protection from day one.', color: '#8c52ff' },
                            { icon: Globe, title: 'Global Scale', desc: 'Built for billions of users worldwide.', color: '#ff4080' },
                            { icon: Users, title: 'Community', desc: 'Open source and community governed.', color: '#450693' },
                        ].map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                    className="group border-2 border-white/10 p-8 hover:border-white/30 transition-all text-center cursor-pointer"
                                >
                                    <motion.div
                                        className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-4 group-hover:scale-110 transition-transform"
                                        style={{ borderColor: value.color }}
                                    >
                                        <Icon size={32} style={{ color: value.color }} />
                                    </motion.div>
                                    <h3 className="text-xl font-black text-white mb-3">{value.title}</h3>
                                    <p className="text-white/50 text-sm">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TEAM HIGHLIGHTS - Staggered Boxes */}
            <section className="relative bg-white py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Our Team</span>
                            <h2 className="text-[48px] lg:text-[64px] font-black text-black leading-none mb-8">
                                50+ Brilliant<br />
                                <span className="text-[#ff4080]">Minds</span>
                            </h2>
                            <p className="text-black/60 text-lg mb-8">
                                Engineers from Google, Meta, and Coinbase. Researchers from MIT, Stanford, and ETH Zurich. United by a shared vision.
                            </p>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/careers"
                                    className="bg-black text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#ff4080] transition-colors inline-flex items-center gap-3"
                                >
                                    Join Us <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right - Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Star, value: '50+', label: 'Team Members', color: '#8c52ff' },
                                { icon: Globe, value: '10+', label: 'Countries', color: '#ffc502' },
                                { icon: Award, value: '100+', label: 'Years Combined Exp', color: '#ff4080' },
                                { icon: Target, value: '∞', label: 'Ideas', color: '#450693' },
                            ].map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, type: "spring" }}
                                        whileHover={{ scale: 1.05 }}
                                        className="border-4 border-black p-6 text-center"
                                    >
                                        <Icon size={24} style={{ color: stat.color }} className="mx-auto mb-3" />
                                        <div className="text-4xl font-black text-black">{stat.value}</div>
                                        <div className="text-black/50 text-sm mt-1">{stat.label}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - Full Width with Animation */}
            <section className="relative bg-black py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                {/* Animated Orb */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#8c52ff]/10 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-[56px] lg:text-[96px] font-black text-white leading-none mb-8"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            Ready to<br />
                            <span className="text-[#8c52ff]">Build?</span>
                        </motion.h2>
                        <motion.div
                            className="flex flex-wrap gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#"
                                    className="bg-[#8c52ff] text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#7a45e0] transition-colors"
                                >
                                    Start Building
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/contact"
                                    className="border-2 border-white/20 text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
