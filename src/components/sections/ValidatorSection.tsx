'use client';

import React from "react";
import { motion } from "framer-motion";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Server, Zap, Shield, ArrowRight, CheckCircle2, Cpu, Network } from "lucide-react";
import Image from "next/image";

export default function ValidatorSection() {
    return (
        <section className="relative w-full bg-black py-0 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Massive Animated Orbs */}
            <motion.div
                className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[#8c52ff]/15 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 12, repeat: Infinity }}
            />
            <motion.div
                className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-[#ff4080]/12 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen items-center">

                    {/* LEFT SIDE - MASSIVE MASCOT */}
                    <motion.div
                        className="relative flex items-center justify-center py-20 lg:py-32"
                        initial={{ opacity: 0, scale: 0.8, x: -100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    >
                        <div className="relative w-full max-w-[700px] aspect-square">
                            {/* Crazy Glow Effects */}
                            <motion.div
                                className="absolute inset-0 bg-[#8c52ff]/30 blur-[120px] rounded-full scale-125"
                                animate={{
                                    scale: [1.2, 1.4, 1.2],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-[#ff4080]/20 blur-[100px] rounded-full scale-110"
                                animate={{
                                    scale: [1.1, 1.3, 1.1],
                                    opacity: [0.2, 0.4, 0.2],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />

                            {/* HUGE Mascot Image */}
                            <motion.div
                                className="relative w-full h-full"
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/images/uploaded_image_1765708156066.png"
                                    alt="ArthaChain Validator Mascot"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>

                            {/* Floating Particles */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-[#8c52ff] rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, -30, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - EVERVAULT CARD WITH CONTENT */}
                    <motion.div
                        className="relative py-20 lg:py-32 flex items-center justify-center"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    >
                        <div className="relative w-full max-w-[650px]">
                            {/* Card with Content */}
                            <div className="border-2 border-white/[0.15] hover:border-[#8c52ff]/60 bg-black/60 backdrop-blur-xl relative rounded-3xl transition-all duration-500 hover:shadow-[0_0_80px_rgba(140,82,255,0.4)] group overflow-hidden">

                                {/* Corner Icons */}
                                <Icon className="absolute h-10 w-10 -top-5 -left-5 text-[#8c52ff] drop-shadow-2xl z-50" />
                                <Icon className="absolute h-10 w-10 -bottom-5 -left-5 text-[#ff4080] drop-shadow-2xl z-50" />
                                <Icon className="absolute h-10 w-10 -top-5 -right-5 text-[#ffc502] drop-shadow-2xl z-50" />
                                <Icon className="absolute h-10 w-10 -bottom-5 -right-5 text-[#8c52ff] drop-shadow-2xl z-50" />

                                {/* Evervault Effect Background */}
                                <div className="absolute inset-0">
                                    <EvervaultCard text="" />
                                </div>

                                {/* Content Overlay */}
                                <div className="relative z-10 p-12 lg:p-16 space-y-10">

                                    {/* Badge */}
                                    <motion.div
                                        className="inline-flex items-center gap-3 px-6 py-3 bg-[#8c52ff]/10 border border-[#8c52ff]/30 backdrop-blur-sm rounded-full"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8c52ff] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8c52ff]"></span>
                                        </span>
                                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-white">
                                            Validator Network
                                        </span>
                                    </motion.div>

                                    {/* Heading */}
                                    <div className="space-y-4">
                                        <h2 className="text-[42px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-white leading-[0.95]">
                                            Run a Node /<br />
                                            <span className="text-[#8c52ff]">Validators</span>
                                        </h2>
                                        <p className="text-white/70 text-lg leading-relaxed font-medium">
                                            Join the most open validator network. No barriers, just pure decentralization.
                                        </p>
                                    </div>

                                    {/* Benefits with Icons */}
                                    <div className="space-y-5">
                                        <motion.div
                                            className="flex items-start gap-4 group/item"
                                            whileHover={{ x: 10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="mt-1 w-14 h-14 rounded-2xl bg-[#8c52ff]/15 border-2 border-[#8c52ff]/40 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#8c52ff]/25 group-hover/item:border-[#8c52ff]/60 transition-all">
                                                <CheckCircle2 className="w-7 h-7 text-[#8c52ff]" strokeWidth={2.5} />
                                            </div>
                                            <div>
                                                <h3 className="text-white text-2xl font-bold mb-1">No Staking Required</h3>
                                                <p className="text-white/60 text-sm">Run a node without locking up any tokens</p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className="flex items-start gap-4 group/item"
                                            whileHover={{ x: 10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="mt-1 w-14 h-14 rounded-2xl bg-[#ff4080]/15 border-2 border-[#ff4080]/40 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#ff4080]/25 group-hover/item:border-[#ff4080]/60 transition-all">
                                                <Shield className="w-7 h-7 text-[#ff4080]" strokeWidth={2.5} />
                                            </div>
                                            <div>
                                                <h3 className="text-white text-2xl font-bold mb-1">No Lock-in Period</h3>
                                                <p className="text-white/60 text-sm">Start and stop anytime, complete freedom</p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className="flex items-start gap-4 group/item"
                                            whileHover={{ x: 10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="mt-1 w-14 h-14 rounded-2xl bg-[#ffc502]/15 border-2 border-[#ffc502]/40 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#ffc502]/25 group-hover/item:border-[#ffc502]/60 transition-all">
                                                <Network className="w-7 h-7 text-[#ffc502]" strokeWidth={2.5} />
                                            </div>
                                            <div>
                                                <h3 className="text-white text-2xl font-bold mb-1">Permissionless Validators</h3>
                                                <p className="text-white/60 text-sm">Anyone can join, truly decentralized</p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-6">
                                        <motion.a
                                            href="/dev/validators"
                                            className="group/btn inline-flex items-center gap-3 px-8 py-5 bg-[#8c52ff] hover:bg-[#7a45e0] text-white text-base font-bold tracking-wide rounded-2xl transition-all duration-300 shadow-2xl shadow-[#8c52ff]/40 hover:shadow-[#8c52ff]/60"
                                            whileHover={{ scale: 1.05, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Server className="w-6 h-6" />
                                            <span>Start Running Node</span>
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                        </motion.a>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                                        <div>
                                            <div className="text-4xl font-black text-[#8c52ff]">10K+</div>
                                            <div className="text-xs text-white/50 font-medium uppercase tracking-wider mt-1">Active Nodes</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-black text-[#ff4080]">100%</div>
                                            <div className="text-xs text-white/50 font-medium uppercase tracking-wider mt-1">Decentralized</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
