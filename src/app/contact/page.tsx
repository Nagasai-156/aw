'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Mail, MessageCircle, MapPin, Send, ArrowUpRight, Clock, ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

export default function ContactPage() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO - Bold Contact */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                {/* Animated Orbs */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff4080]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#8c52ff]/10 rounded-full blur-[120px]"
                    animate={{ scale: [1.3, 1, 1.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
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
                                    <Mail className="w-4 h-4 text-[#ff4080]" />
                                </motion.div>
                                <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Contact Us</span>
                            </motion.div>

                            <div className="overflow-hidden">
                                <motion.h1
                                    className="text-[56px] sm:text-[72px] lg:text-[100px] font-black text-white leading-[0.85] tracking-[-0.04em]"
                                >
                                    <motion.span
                                        className="block"
                                        initial={{ y: 100 }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        LET'S
                                    </motion.span>
                                    <motion.span
                                        className="block text-[#ff4080]"
                                        initial={{ y: 100 }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.1 }}
                                    >
                                        TALK
                                    </motion.span>
                                </motion.h1>
                            </div>

                            <motion.p
                                className="text-white/50 text-lg mt-8 mb-8 max-w-md"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Have a question or want to partner with us? We'd love to hear from you.
                            </motion.p>

                            <motion.a
                                href="mailto:hello@arthachain.io"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ x: 10 }}
                                className="text-2xl text-white/60 hover:text-[#ff4080] transition-colors inline-flex items-center gap-3 group"
                            >
                                hello@arthachain.io
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>
                        </motion.div>

                        {/* Right - Contact Methods */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                        >
                            {[
                                { icon: Mail, label: 'Email Us', value: 'hello@arthachain.io', color: '#ff4080' },
                                { icon: MessageCircle, label: 'Discord', value: 'Join Community', color: '#8c52ff' },
                                { icon: Clock, label: 'Response Time', value: 'Within 24 hours', color: '#ffc502' },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                        className="flex items-center gap-6 p-6 border-2 border-white/10 hover:border-white/30 transition-all group cursor-pointer"
                                    >
                                        <motion.div
                                            className="w-14 h-14 flex items-center justify-center border-4"
                                            style={{ borderColor: item.color }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Icon size={24} style={{ color: item.color }} />
                                        </motion.div>
                                        <div>
                                            <div className="text-white/40 text-sm uppercase tracking-wider">{item.label}</div>
                                            <div className="text-white font-bold text-lg">{item.value}</div>
                                        </div>
                                        <ArrowUpRight className="ml-auto text-white/20 group-hover:text-white transition-colors" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
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

            {/* FORM - Animated Inputs */}
            <section className="relative bg-white py-32 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Get in Touch</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-black">
                            Send a <span className="text-[#ff4080]">Message</span>
                        </h2>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            {['name', 'email'].map((field, i) => (
                                <motion.div
                                    key={field}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <motion.input
                                        type={field === 'email' ? 'email' : 'text'}
                                        placeholder={field === 'email' ? 'Your Email' : 'Your Name'}
                                        className={`w-full px-6 py-5 border-4 bg-white text-black font-bold outline-none transition-all ${focusedField === field ? 'border-[#ff4080]' : 'border-black'}`}
                                        onFocus={() => setFocusedField(field)}
                                        onBlur={() => setFocusedField(null)}
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <motion.input
                            type="text"
                            placeholder="Subject"
                            className={`w-full px-6 py-5 border-4 bg-white text-black font-bold outline-none transition-all ${focusedField === 'subject' ? 'border-[#ff4080]' : 'border-black'}`}
                            onFocus={() => setFocusedField('subject')}
                            onBlur={() => setFocusedField(null)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        />

                        <motion.textarea
                            rows={5}
                            placeholder="Your Message"
                            className={`w-full px-6 py-5 border-4 bg-white text-black font-bold outline-none transition-all resize-none ${focusedField === 'message' ? 'border-[#ff4080]' : 'border-black'}`}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        />

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-black text-white py-6 font-bold uppercase tracking-wider text-lg hover:bg-[#ff4080] transition-colors flex items-center justify-center gap-3"
                        >
                            <motion.div
                                whileHover={{ rotate: 20 }}
                            >
                                <Send className="w-5 h-5" />
                            </motion.div>
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </section>

            {/* OFFICES - Location Cards */}
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
                        <span className="text-sm font-bold text-[#8c52ff] uppercase tracking-widest mb-4 block">Locations</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            Our <span className="text-[#8c52ff]">Offices</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { city: 'SAN FRANCISCO', country: 'USA', code: 'SF', color: '#8c52ff' },
                            { city: 'LONDON', country: 'UK', code: 'LDN', color: '#ffc502' },
                            { city: 'SINGAPORE', country: 'SG', code: 'SIN', color: '#ff4080' },
                        ].map((office, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ y: -10 }}
                                className="border-2 border-white/10 p-8 hover:border-white/30 transition-all cursor-pointer"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center text-xl font-black mb-4"
                                    style={{ backgroundColor: office.color }}
                                >
                                    <span className="text-black">{office.code}</span>
                                </div>
                                <MapPin className="w-8 h-8 mb-4" style={{ color: office.color }} />
                                <h3 className="text-2xl font-black text-white mb-2">{office.city}</h3>
                                <p className="text-white/60">{office.country}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOCIAL - Animated Links */}
            <section className="relative bg-white py-24 px-8">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h3 className="text-2xl font-black text-black">Follow Us</h3>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {['Twitter', 'Discord', 'GitHub', 'LinkedIn', 'Telegram'].map((social, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5, color: '#8c52ff' }}
                                className="text-black/40 hover:text-[#8c52ff] font-bold uppercase tracking-wider transition-colors text-lg"
                            >
                                {social}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
