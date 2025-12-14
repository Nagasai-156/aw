'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="relative w-full bg-black py-10 sm:py-14 md:py-16 lg:py-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated Background Grid - Same as Hero */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

            {/* Glowing Orb Effects - Subtle */}
            <div className="absolute top-1/4 left-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#8c52ff]/10 rounded-full blur-[100px] sm:blur-[150px]" />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#ff4080]/8 rounded-full blur-[80px] sm:blur-[120px]" />
            <div className="absolute top-1/2 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#ffc502]/5 rounded-full blur-[60px] sm:blur-[100px]" />

            <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#ffc502] animate-pulse"></span>
                    <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-white/80">Join The Revolution</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                    className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[120px] font-black leading-[0.9] tracking-[-0.04em] mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <span className="text-white">BUILD </span>
                    <span className="text-white/40">THE</span>
                    <br />
                    <span className="text-[#ff4080]">FUTURE</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 sm:mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Join thousands of developers building the next generation of decentralized applications on ArthaChain.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 sm:mb-20 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Link
                        href="#"
                        className="group bg-[#8c52ff] hover:bg-[#7a45e0] text-white px-8 sm:px-12 py-4 sm:py-5 text-[13px] font-bold tracking-wider uppercase transition-colors duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
                    >
                        Start Building
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>

                    <Link
                        href="#"
                        className="bg-white/5 border border-white/20 backdrop-blur-sm text-white px-8 sm:px-12 py-4 sm:py-5 text-[13px] font-bold tracking-wider uppercase hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
                    >
                        Join Discord
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
