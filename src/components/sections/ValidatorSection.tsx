'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Server, Shield, Network, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function ValidatorSection() {
    // Generate particle positions only on client to avoid hydration mismatch
    const [particles, setParticles] = useState<Array<{ left: string; top: string; duration: number; delay: number }>>([]);

    useEffect(() => {
        // Generate particles only on client side
        setParticles(
            Array.from({ length: 6 }, () => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
            }))
        );
    }, []);

    const benefits = [
        { icon: CheckCircle2, title: 'No Staking Required', desc: 'Run a validator node without locking up any tokens', color: '#8c52ff' },
        { icon: Shield, title: 'No Lock-in Period', desc: 'Start and stop anytime with complete freedom', color: '#ff4080' },
        { icon: Network, title: 'Permissionless Access', desc: 'Anyone can join — truly decentralized network', color: '#ffc502' },
    ];

    return (
        <section className="relative w-full bg-black overflow-hidden">
            {/* Hero-like Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

            {/* Subtle Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#8c52ff]/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#ff4080]/6 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center border-t border-white/10 pt-12 sm:pt-16">

                    {/* LEFT SIDE - MASCOT */}
                    <motion.div
                        className="relative flex items-center justify-center order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative w-full max-w-[750px] aspect-square">
                            {/* Mascot Image */}
                            <motion.div
                                className="relative w-full h-full"
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/images/validator-mascot.png"
                                    alt="ArthaChain Validator Network"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#8c52ff]/30" />
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#ff4080]/30" />
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - CONTENT */}
                    <motion.div
                        className="relative order-1 lg:order-2 space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full">
                            <span className="w-2 h-2 rounded-full bg-[#8c52ff] animate-pulse" />
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                                Validator Network
                            </span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-black text-white leading-[1.05]">
                                Run a Node<br />
                                <span className="text-[#8c52ff]">Be a Validator</span>
                            </h2>
                            <p className="text-white/50 text-sm sm:text-[15px] leading-relaxed max-w-xl">
                                Join the most open validator network. No barriers, no staking required. Just pure decentralization.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-5 pt-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div
                                        className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: benefit.color }}
                                    >
                                        <benefit.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white text-base sm:text-lg font-bold mb-1">{benefit.title}</h3>
                                        <p className="text-white/50 text-xs sm:text-sm">{benefit.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <motion.a
                                href="/dev/validators"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#8c52ff] hover:bg-[#7a45e0] transition-colors group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Server className="w-5 h-5 text-white" />
                                <span className="text-white text-[13px] font-bold tracking-wider uppercase">
                                    Start Running a Node
                                </span>
                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
