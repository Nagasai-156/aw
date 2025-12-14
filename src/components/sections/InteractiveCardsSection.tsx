'use client';

import React from "react";
import { motion } from "framer-motion";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Code, Zap, Shield, Brain } from "lucide-react";

const features = [
    {
        title: "AI-Native",
        description: "Built-in neural consensus and on-chain machine learning capabilities.",
        icon: Brain,
        hoverText: "AI",
    },
    {
        title: "Lightning Fast",
        description: "1M+ TPS with sub-second finality and parallel processing.",
        icon: Zap,
        hoverText: "1M+",
    },
    {
        title: "Quantum-Safe",
        description: "Post-quantum cryptography protecting against future threats.",
        icon: Shield,
        hoverText: "Q-Safe",
    },
    {
        title: "Developer First",
        description: "Comprehensive SDKs, tools, and documentation for builders.",
        icon: Code,
        hoverText: "Build",
    },
];

export default function InteractiveCardsSection() {
    return (
        <section className="relative w-full bg-black py-20 md:py-32 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Animated orbs */}
            <motion.div
                className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#8c52ff]/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-[#ff4080]/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
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
                            Interactive Features
                        </span>
                    </div>

                    <h2 className="text-[36px] sm:text-[48px] md:text-[60px] font-black tracking-tight text-white leading-[1.05]">
                        Experience <span className="text-[#8c52ff]">ArthaChain</span>
                    </h2>

                    <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                        Hover over each card to reveal the power behind our technology.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="border border-white/[0.1] hover:border-[#8c52ff]/50 bg-black/40 backdrop-blur-sm flex flex-col items-start p-6 relative h-[30rem] rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#8c52ff]/20">
                                    {/* Corner icons */}
                                    <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#8c52ff]" />
                                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#ff4080]" />
                                    <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#ffc502]" />
                                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#8c52ff]" />

                                    {/* Evervault Card */}
                                    <EvervaultCard text={feature.hoverText} />

                                    {/* Content */}
                                    <div className="mt-6 space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-[#8c52ff]/10 border border-[#8c52ff]/20">
                                                <IconComponent className="w-5 h-5 text-[#8c52ff]" strokeWidth={2} />
                                            </div>
                                            <h3 className="text-white text-lg font-bold">
                                                {feature.title}
                                            </h3>
                                        </div>
                                        <p className="text-white/60 text-sm font-light leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Hover indicator */}
                                    <div className="mt-auto">
                                        <span className="text-xs border font-light border-white/[0.2] hover:border-[#8c52ff]/50 rounded-full text-white/70 hover:text-[#8c52ff] px-3 py-1.5 inline-block transition-colors">
                                            Hover to reveal
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center pt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href="/technology"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#8c52ff] hover:bg-[#7a45e0] text-white text-sm font-bold tracking-wide rounded-full transition-all duration-300 shadow-lg shadow-[#8c52ff]/25 hover:shadow-xl hover:shadow-[#8c52ff]/40 hover:scale-105"
                    >
                        <span>Explore All Features</span>
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
