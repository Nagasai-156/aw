'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

            {/* Glowing Orb Effect */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00FF41]/20 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-8 lg:gap-16 xl:gap-20 items-center pt-16 sm:pt-20 md:pt-24">
                    {/* Left Content */}
                    <motion.div
                        className="space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full">
                            <span className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse" />
                            <span className="text-[11px] sm:text-[12px] font-medium text-white/80 tracking-wider uppercase">Next-Gen Layer 1 Blockchain</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-[-4px] sm:space-y-[-6px] md:space-y-[-8px] lg:space-y-[-10px] xl:space-y-[-12px]">
                            <h1 className="text-[48px] sm:text-[64px] md:text-[56px] lg:text-[88px] xl:text-[110px] 2xl:text-[130px] leading-[0.95] font-black tracking-[-0.04em] select-none">
                                <span className="block bg-gradient-to-r from-[#00FF41] via-[#00E0FF] to-[#00FF41] bg-clip-text text-transparent">BUILD</span>
                                <span className="block text-white">SCALE</span>
                                <span className="block text-white/60">INNOVATE</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-white/60 text-sm sm:text-[15px] md:text-[14px] lg:text-[16px] leading-[1.8] max-w-[480px] lg:max-w-[520px] font-normal">
                            Join the ArthaChain Network — a next-generation Layer 1 blockchain
                            empowering developers to build, deploy, and scale decentralized applications with unprecedented speed and security.
                        </p>

                        {/* Stats Row */}
                        <div className="flex gap-6 sm:gap-8 md:gap-6 lg:gap-10">
                            <div>
                                <div className="text-[24px] sm:text-[28px] md:text-[24px] lg:text-[32px] font-black text-[#00FF41]">1M+</div>
                                <div className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider">TPS</div>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div>
                                <div className="text-[24px] sm:text-[28px] md:text-[24px] lg:text-[32px] font-black text-white">&lt;1s</div>
                                <div className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider">Finality</div>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div>
                                <div className="text-[24px] sm:text-[28px] md:text-[24px] lg:text-[32px] font-black text-white">99.9%</div>
                                <div className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider">Uptime</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-3 lg:gap-4 pt-2">
                            <Button
                                asChild
                                className="bg-[#00FF41] text-black hover:bg-[#00DD35] px-6 sm:px-8 md:px-6 lg:px-10 py-4 sm:py-5 md:py-4 lg:py-6 text-[12px] sm:text-[13px] font-bold tracking-[0.02em] rounded-none h-auto w-full sm:w-auto group"
                            >
                                <Link href="#waitlist" className="flex items-center gap-2">
                                    START BUILDING
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-2 border-white/20 bg-white/5 text-white hover:bg-white hover:text-black px-6 sm:px-8 md:px-6 lg:px-10 py-4 sm:py-5 md:py-4 lg:py-6 text-[12px] sm:text-[13px] font-bold tracking-[0.02em] rounded-none h-auto transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
                            >
                                <Link href="#features">VIEW ECOSYSTEM</Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right 3D Visualization */}
                    <motion.div
                        className="relative flex items-center justify-center md:justify-end order-first md:order-last"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Floating Particles */}
                        <div className="absolute top-10 left-10 w-3 h-3 bg-[#00FF41] rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                        <div className="absolute top-1/3 right-10 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />

                        {/* Main 3D Element */}
                        <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[280px] lg:max-w-[380px] xl:max-w-[440px] aspect-square">
                            {/* Outer Ring */}
                            <div className="absolute inset-0 border-2 border-[#00FF41]/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                            <div className="absolute inset-4 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

                            {/* Center Cube */}
                            <div
                                className="absolute inset-8 sm:inset-12 md:inset-10 lg:inset-16 overflow-hidden"
                                style={{
                                    background: `linear-gradient(160deg, 
                                        #00FFA3 0%, 
                                        #00E0A0 15%,
                                        #00C89D 30%,
                                        #00A890 45%,
                                        #008880 60%,
                                        #006870 75%,
                                        #004860 90%,
                                        #003850 100%)`,
                                    transform: 'perspective(1000px) rotateX(10deg) rotateY(-15deg) rotateZ(5deg)',
                                    boxShadow: `
                                        0 25px 50px -12px rgba(0, 255, 65, 0.4),
                                        0 0 100px rgba(0, 255, 65, 0.2),
                                        inset 0 0 60px rgba(255, 255, 255, 0.1)
                                    `,
                                }}
                            >
                                {/* Hexagon Pattern */}
                                <div className="absolute inset-0 opacity-20">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="hex" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                                <path d="M30 0l15 8.66v17.32L30 34.64 15 25.98V8.66z" fill="none" stroke="white" strokeWidth="0.5" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#hex)" />
                                    </svg>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-20 lg:h-20 bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-10 lg:h-10" stroke="white" strokeWidth="1.5">
                                            <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-2 sm:bottom-2 md:bottom-0 lg:bottom-4 left-0 sm:left-4 md:left-0 lg:left-8 bg-black/80 backdrop-blur-md border border-white/10 px-3 sm:px-4 py-2 sm:py-2.5">
                                <div className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Powered by</div>
                                <div className="text-[11px] sm:text-[13px] font-bold text-white">AI-Driven Consensus</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
