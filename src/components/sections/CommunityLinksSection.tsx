'use client';

import React from "react";
import { motion } from "framer-motion";
import { ClipPathLinks } from "@/components/ui/clip-path-links";
import { Users, MessageCircle, Code2, Sparkles } from "lucide-react";

export default function CommunityLinksSection() {
    return (
        <section className="relative w-full bg-black py-10 md:py-14 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Animated Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8c52ff]/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff4080]/8 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 12, repeat: Infinity }}
            />

            <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Header */}
                <motion.div
                    className="text-center space-y-6 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8c52ff] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8c52ff]"></span>
                        </span>
                        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/70">
                            Join the Community
                        </span>
                    </div>

                    <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-black tracking-tight text-white leading-[1.05]">
                        Connect with <span className="text-[#8c52ff]">ArthaChain</span>
                    </h2>

                    <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                        Follow us, contribute code, join discussions, and be part of building the future of blockchain.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#8c52ff]/30 transition-colors">
                        <Users className="w-8 h-8 text-[#8c52ff] mx-auto mb-3" />
                        <div className="text-3xl font-black text-white mb-1">1000+</div>
                        <div className="text-xs text-white/50 uppercase tracking-wider">Community Members</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#ff4080]/30 transition-colors">
                        <Code2 className="w-8 h-8 text-[#ff4080] mx-auto mb-3" />
                        <div className="text-3xl font-black text-white mb-1">50+</div>
                        <div className="text-xs text-white/50 uppercase tracking-wider">Developers</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#ffc502]/30 transition-colors">
                        <MessageCircle className="w-8 h-8 text-[#ffc502] mx-auto mb-3" />
                        <div className="text-3xl font-black text-white mb-1">24/7</div>
                        <div className="text-xs text-white/50 uppercase tracking-wider">Active Support</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#8c52ff]/30 transition-colors">
                        <Sparkles className="w-8 h-8 text-[#8c52ff] mx-auto mb-3" />
                        <div className="text-3xl font-black text-white mb-1">100%</div>
                        <div className="text-xs text-white/50 uppercase tracking-wider">Open Source</div>
                    </div>
                </motion.div>

                {/* ClipPath Links Component */}
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#8c52ff]/10 border-2 border-[#8c52ff]/20">
                        <ClipPathLinks />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
