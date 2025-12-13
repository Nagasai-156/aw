'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Palette, Download, Check, X, Copy, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

export default function BrandPage() {
    const [copied, setCopied] = useState<string | null>(null);
    const [hoveredColor, setHoveredColor] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const colors = [
        { name: 'Deep Purple', hex: '#450693', rgb: '69, 6, 147' },
        { name: 'Violet', hex: '#8c52ff', rgb: '140, 82, 255' },
        { name: 'Pink', hex: '#ff4080', rgb: '255, 64, 128' },
        { name: 'Gold', hex: '#ffc502', rgb: '255, 197, 2' },
    ];

    const copyToClipboard = (value: string) => {
        navigator.clipboard.writeText(value);
        setCopied(value);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO - Colorful Brand Intro */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                {/* Animated Orbs - All 4 colors */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#8c52ff]/20 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-[#ff4080]/15 rounded-full blur-[100px]"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-[#ffc502]/10 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 7, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] bg-[#450693]/20 rounded-full blur-[100px]"
                    animate={{ scale: [1.3, 1, 1.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
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
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <Palette className="w-4 h-4 text-[#8c52ff]" />
                            </motion.div>
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Brand Guidelines</span>
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
                                    BRAND
                                </motion.span>
                                <motion.span
                                    className="block text-[#8c52ff]"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    KIT
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Official brand assets, colors, and guidelines. Use these resources to represent ArthaChain correctly.
                        </motion.p>

                        {/* Color Preview */}
                        <motion.div
                            className="flex justify-center gap-4 mb-12"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {colors.map((color, i) => (
                                <motion.div
                                    key={i}
                                    className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer"
                                    style={{ backgroundColor: color.hex }}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => copyToClipboard(color.hex)}
                                />
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#colors"
                                    className="bg-[#8c52ff] text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-[#7a45e0] transition-colors inline-flex items-center gap-2"
                                >
                                    View Assets <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#download"
                                    className="border-2 border-white/20 text-white px-10 py-5 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all inline-flex items-center gap-2"
                                >
                                    <Download className="w-5 h-5" />
                                    Download All
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

            {/* COLOR PALETTE - Interactive Cards */}
            <section id="colors" className="relative bg-white py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ffc502] uppercase tracking-widest mb-4 block">Colors</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black">
                            Color <span className="text-[#ffc502]">Palette</span>
                        </h2>
                        <p className="text-black/50 mt-4">Click any color to copy the HEX code</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {colors.map((color, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onHoverStart={() => setHoveredColor(i)}
                                onHoverEnd={() => setHoveredColor(null)}
                                onClick={() => copyToClipboard(color.hex)}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="cursor-pointer group border-4 border-black overflow-hidden"
                            >
                                <motion.div
                                    className="h-40 flex items-center justify-center relative overflow-hidden"
                                    style={{ backgroundColor: color.hex }}
                                >
                                    <motion.span
                                        className={`text-7xl font-black ${i === 3 ? 'text-black/20' : 'text-white/20'}`}
                                        animate={hoveredColor === i ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                                    >
                                        {color.name.charAt(0)}
                                    </motion.span>
                                </motion.div>
                                <div className="p-6 bg-white">
                                    <div className="font-black text-black text-lg mb-2">{color.name}</div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-black/60">{color.hex}</span>
                                        {copied === color.hex ? (
                                            <motion.span
                                                className="text-[#8c52ff] text-sm font-bold flex items-center gap-1"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                            >
                                                <Check size={14} /> Copied!
                                            </motion.span>
                                        ) : (
                                            <Copy size={16} className="text-black/30 group-hover:text-black transition-colors" />
                                        )}
                                    </div>
                                    <div className="text-xs text-black/40 mt-2">RGB: {color.rgb}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOGO USAGE - Do's and Don'ts */}
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
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Guidelines</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-white">
                            Logo <span className="text-[#ff4080]">Usage</span>
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* DO */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="flex items-center gap-3 mb-8"
                                whileHover={{ x: 10 }}
                            >
                                <motion.div
                                    className="w-12 h-12 border-4 border-[#8c52ff] flex items-center justify-center"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Check size={28} className="text-[#8c52ff]" />
                                </motion.div>
                                <span className="text-white font-black text-3xl">Do</span>
                            </motion.div>

                            <motion.div
                                className="bg-white p-12 mb-6 flex items-center justify-center min-h-[180px] border-4 border-white"
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.span
                                    className="text-4xl lg:text-5xl font-black text-black"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    ARTHACHAIN
                                </motion.span>
                            </motion.div>

                            <ul className="space-y-4">
                                {['Use on light or dark backgrounds', 'Maintain clear space', 'Use approved colors only', 'Keep proportions'].map((rule, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-3 text-white/70"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ x: 10, color: '#8c52ff' }}
                                    >
                                        <Check size={16} className="text-[#8c52ff]" />
                                        {rule}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* DON'T */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="flex items-center gap-3 mb-8"
                                whileHover={{ x: 10 }}
                            >
                                <motion.div
                                    className="w-12 h-12 border-4 border-[#ff4080] flex items-center justify-center"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <X size={28} className="text-[#ff4080]" />
                                </motion.div>
                                <span className="text-white font-black text-3xl">Don't</span>
                            </motion.div>

                            <div className="bg-white/10 p-12 mb-6 flex items-center justify-center min-h-[180px] relative border-2 border-white/20">
                                <span className="text-4xl lg:text-5xl font-black text-white/20 italic transform skew-x-12">ARTHACHAIN</span>
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring" }}
                                >
                                    <X size={80} className="text-[#ff4080]/60" />
                                </motion.div>
                            </div>

                            <ul className="space-y-4">
                                {['Stretch or distort', 'Add shadows or effects', 'Change colors', 'Rotate or tilt'].map((rule, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-3 text-white/70"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ x: 10, color: '#ff4080' }}
                                    >
                                        <X size={16} className="text-[#ff4080]" />
                                        {rule}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TYPOGRAPHY - Large Showcase */}
            <section className="relative bg-white py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">Font</span>
                        <h2 className="text-[48px] lg:text-[72px] font-black text-black">
                            Type<span className="text-[#8c52ff]">face</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="border-4 border-black p-12"
                    >
                        <motion.div
                            className="text-center mb-12"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.span
                                className="text-[120px] lg:text-[180px] font-black text-black leading-none"
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                Aa
                            </motion.span>
                            <div className="text-3xl font-black text-[#8c52ff] mt-4">Inter</div>
                            <div className="text-black/40">Primary Typeface</div>
                        </motion.div>

                        <div className="border-t-4 border-black pt-8 grid md:grid-cols-3 gap-8 text-center">
                            {[
                                { weight: 'Regular 400', className: 'font-normal' },
                                { weight: 'Bold 700', className: 'font-bold' },
                                { weight: 'Black 900', className: 'font-black' },
                            ].map((font, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <span className={`block text-5xl ${font.className} text-black mb-2`}>Aa</span>
                                    <span className="text-sm text-black/40">{font.weight}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DOWNLOAD CTA */}
            <section id="download" className="relative bg-black py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles size={64} className="text-[#8c52ff] mx-auto mb-8" />
                        </motion.div>
                        <h2 className="text-[48px] lg:text-[80px] font-black text-white leading-none mb-6">
                            Download<br />
                            <span className="text-[#8c52ff]">Brand Kit</span>
                        </h2>
                        <p className="text-white/50 text-lg mb-12">
                            Includes logos, colors, typography, and usage guidelines
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#8c52ff] text-white px-12 py-6 font-bold uppercase tracking-wide hover:bg-[#7a45e0] transition-colors inline-flex items-center gap-3"
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Download size={20} />
                            </motion.div>
                            Download ZIP (25 MB)
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
