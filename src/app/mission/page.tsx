'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Target, Eye, Rocket, ArrowRight, Star, Check, ChevronDown, Flag, Trophy, Compass, Globe, Users, Zap, Lightbulb, Settings, FlaskConical } from 'lucide-react';
import { useRef } from 'react';

export default function MissionPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO - Split Design */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                {/* Animated Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8c52ff]/20 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ffc502]/10 rounded-full blur-[120px]"
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
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Compass className="w-4 h-4 text-[#8c52ff]" />
                            </motion.div>
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Our Purpose</span>
                        </motion.div>

                        {/* Main Title */}
                        <div className="overflow-hidden">
                            <motion.h1 className="text-[72px] sm:text-[100px] lg:text-[150px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    MISSION
                                </motion.span>
                                <motion.span
                                    className="block text-[#8c52ff]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    &
                                </motion.span>
                                <motion.span
                                    className="block text-[#ffc502]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    VISION
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Our purpose, our goals, and the future we're building together.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#mission"
                                    className="bg-[#8c52ff] text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#7a45e0] transition-colors inline-flex items-center gap-2"
                                >
                                    Explore <ArrowRight className="w-5 h-5" />
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

            {/* MISSION - Full Width Statement */}
            <section id="mission" className="relative min-h-screen bg-white flex items-center px-8 py-32">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <motion.div
                                className="w-16 h-16 border-4 border-[#8c52ff] flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Target size={32} className="text-[#8c52ff]" />
                            </motion.div>
                            <span className="text-black/40 text-lg uppercase tracking-widest font-bold">Our Mission</span>
                        </div>

                        <motion.h2
                            className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-black leading-tight mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            To <span className="text-[#8c52ff]">democratize</span> blockchain technology and make it <span className="text-[#8c52ff]">accessible</span> to every developer, entrepreneur, and innovator <span className="text-[#8c52ff]">worldwide</span>.
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { icon: Globe, text: 'Empower 1 billion users' },
                                { icon: Zap, text: 'Enable frictionless transactions' },
                                { icon: Users, text: 'Build open infrastructure' },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ scale: 1.05, x: 10 }}
                                        className="flex items-center gap-4 border-4 border-black p-5 cursor-pointer"
                                    >
                                        <div className="w-12 h-12 bg-[#8c52ff] flex items-center justify-center flex-shrink-0">
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <span className="text-black font-bold">{item.text}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* VISION - Full Width Statement */}
            <section className="relative min-h-screen bg-black flex items-center px-8 py-32">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <motion.div
                                className="w-16 h-16 border-4 border-[#ffc502] flex items-center justify-center"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Eye size={32} className="text-[#ffc502]" />
                            </motion.div>
                            <span className="text-white/40 text-lg uppercase tracking-widest font-bold">Our Vision</span>
                        </div>

                        <motion.h2
                            className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-white leading-tight mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            A world where <span className="text-[#ffc502]">blockchain</span> powers every transaction, every <span className="text-[#ffc502]">interaction</span>, and every <span className="text-[#ffc502]">innovation</span>.
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { icon: Star, text: 'Decentralization as default' },
                                { icon: Globe, text: 'Seamless global commerce' },
                                { icon: Users, text: 'Digital sovereignty for all' },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ scale: 1.05, x: 10 }}
                                        className="flex items-center gap-4 border-2 border-white/20 p-5 cursor-pointer hover:border-white/40 transition-all"
                                    >
                                        <div className="w-12 h-12 bg-[#ffc502] flex items-center justify-center flex-shrink-0">
                                            <Icon size={24} className="text-black" />
                                        </div>
                                        <span className="text-white font-bold">{item.text}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ROADMAP - Interactive Timeline */}
            <section className="relative bg-white py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Journey</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black">
                            The <span className="text-[#ff4080]">Roadmap</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { year: '2022', title: 'Inception', icon: Lightbulb, done: true },
                            { year: '2023', title: 'Development', icon: Settings, done: true },
                            { year: '2024', title: 'Testnet', icon: FlaskConical, done: true },
                            { year: '2025', title: 'Mainnet', icon: Rocket, done: false },
                            { year: '2026', title: 'Scale', icon: Globe, done: false },
                        ].map((milestone, i) => {
                            const Icon = milestone.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50, rotateY: -30 }}
                                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    className={`text-center border-4 border-black p-6 cursor-pointer ${milestone.done ? 'bg-black' : 'bg-white'}`}
                                >
                                    <motion.div
                                        className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center ${milestone.done ? 'bg-[#ff4080]' : 'bg-black/10'}`}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                    >
                                        <Icon size={24} className={milestone.done ? 'text-white' : 'text-black/40'} />
                                    </motion.div>
                                    <div className={`text-3xl font-black mb-2 ${milestone.done ? 'text-[#ff4080]' : 'text-black'}`}>
                                        {milestone.year}
                                    </div>
                                    <div className={`font-bold ${milestone.done ? 'text-white' : 'text-black/60'}`}>
                                        {milestone.title}
                                    </div>
                                    {milestone.done && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3, type: "spring" }}
                                            className="w-6 h-6 bg-[#ff4080] mx-auto mt-3 flex items-center justify-center"
                                        >
                                            <Check className="w-4 h-4 text-white" />
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 2025 GOALS - Progress Rings */}
            <section className="relative bg-black py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Trophy size={48} className="text-[#ffc502] mx-auto mb-4" />
                        </motion.div>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-white">
                            2025 <span className="text-[#8c52ff]">Goals</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { value: 75, label: '1M Active Users', color: '#8c52ff' },
                            { value: 60, label: '10,000 dApps', color: '#ffc502' },
                            { value: 45, label: '$10B TVL', color: '#ff4080' },
                            { value: 80, label: '100 Partners', color: '#450693' },
                        ].map((goal, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05 }}
                                className="text-center border-2 border-white/10 p-8 cursor-pointer hover:border-white/30 transition-all"
                            >
                                <motion.div
                                    className="text-[64px] font-black leading-none"
                                    style={{ color: goal.color }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    {goal.value}%
                                </motion.div>
                                <div className="font-bold text-white mt-4">{goal.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative bg-white py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Rocket size={64} className="text-[#ff4080] mx-auto mb-8" />
                        </motion.div>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black leading-none mb-8">
                            Join the <span className="text-[#ff4080]">Journey</span>
                        </h2>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="#"
                                className="bg-black text-white px-12 py-6 font-bold uppercase tracking-wide hover:bg-[#ff4080] transition-colors inline-flex items-center gap-3"
                            >
                                Get Involved <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
