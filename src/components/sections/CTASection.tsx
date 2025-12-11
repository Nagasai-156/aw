'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
    return (
        <section className="relative w-full bg-black py-16 sm:py-20 md:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00FF41]/10 rounded-full blur-[150px]" />

            <div className="relative z-10 max-w-[1400px] mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8 sm:mb-10"
                >
                    <span className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse" />
                    <span className="text-[11px] sm:text-[12px] font-medium text-white/80 tracking-wider uppercase">Join The Revolution</span>
                </motion.div>

                {/* Massive Heading */}
                <motion.div
                    className="mb-10 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <h2 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-black leading-[0.9] tracking-[-0.03em] uppercase">
                        <span className="block bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Build The</span>
                        <span className="block bg-gradient-to-r from-[#00FF41] via-[#00E0FF] to-[#00FF41] bg-clip-text text-transparent">Future</span>
                    </h2>
                </motion.div>

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
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <button className="bg-[#00FF41] text-black px-8 sm:px-12 md:px-14 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase hover:bg-[#00DD35] transition-all duration-300 w-full sm:w-auto group flex items-center justify-center gap-2">
                        START BUILDING
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    <button className="bg-white/5 text-white border-2 border-white/20 backdrop-blur-sm px-8 sm:px-12 md:px-14 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
                        JOIN DISCORD
                    </button>
                </motion.div>

                {/* Trusted By Section */}
                <motion.div
                    className="mt-16 sm:mt-20 md:mt-28 pt-10 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] mb-6">Trusted By Leading Projects</p>
                    <div className="flex flex-wrap justify-center gap-8 sm:gap-12 opacity-40">
                        {['POLYGON', 'ETHEREUM', 'SOLANA', 'AVALANCHE', 'COSMOS'].map((name) => (
                            <span key={name} className="text-[14px] sm:text-[16px] font-bold text-white">{name}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
