'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

            {/* Glowing Orb Effect */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 sm:top-1/4 sm:left-1/4 sm:translate-x-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#8c52ff]/20 rounded-full blur-[100px] sm:blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-[#ff4080]/10 rounded-full blur-[80px] sm:blur-[120px]" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 md:py-16 w-full">

                {/* Mobile Layout - Stacked vertically */}
                <div className="flex flex-col sm:hidden items-center pt-20 gap-4">
                    {/* Badge - FIRST on mobile */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="w-2 h-2 bg-[#ffc502] rounded-full animate-pulse" />
                        <span className="text-[11px] font-medium text-white/80 tracking-wider uppercase">Next-Gen Layer 1 Blockchain</span>
                    </motion.div>

                    {/* Logo - SECOND on mobile */}
                    <motion.div
                        className="relative flex items-center justify-center w-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* 5 Animated Ping Bubbles */}
                        <div className="absolute top-0 left-10 w-2.5 h-2.5 bg-[#8c52ff] rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                        <div className="absolute top-16 -left-1 w-2 h-2 bg-[#ffc502] rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />
                        <div className="absolute top-8 -right-1 w-2 h-2 bg-[#ff4080] rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                        <div className="absolute bottom-20 -right-2 w-2.5 h-2.5 bg-[#8c52ff] rounded-full animate-ping" style={{ animationDuration: '2.2s' }} />
                        <div className="absolute bottom-8 left-8 w-2 h-2 bg-[#ffc502] rounded-full animate-ping" style={{ animationDuration: '2.8s' }} />

                        <div className="relative w-[240px] h-[300px] flex items-center justify-center">
                            {/* Gradient Glow Behind Logo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[200px] h-[200px] bg-gradient-to-br from-[#8c52ff]/40 via-[#ff4080]/25 to-[#ffc502]/40 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '4s' }} />
                            </div>
                            {/* Inner Glow */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[140px] h-[140px] bg-[#ffc502]/25 rounded-full blur-[50px]" />
                            </div>

                            {/* Logo Image */}
                            <div className="relative w-[220px] h-[280px] z-10">
                                <Image
                                    src="/arthachain-logo.png"
                                    alt="ArthaChain Logo"
                                    fill
                                    className="object-contain drop-shadow-[0_0_50px_rgba(255,197,2,0.6)]"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content - THIRD on mobile */}
                    <motion.div
                        className="space-y-5 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Main Heading */}
                        <div className="space-y-[-2px]">
                            <h1 className="text-[42px] leading-[0.95] font-black tracking-[-0.04em] select-none">
                                <span className="block bg-gradient-to-r from-[#8c52ff] via-[#ff4080] to-[#ffc502] bg-clip-text text-transparent">BUILD</span>
                                <span className="block text-white">SCALE</span>
                                <span className="block text-white/60">INNOVATE</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-white/60 text-[13px] leading-[1.7] max-w-[320px] font-normal mx-auto">
                            Join the ArthaChain Network — empowering developers to build and scale decentralized applications.
                        </p>

                        {/* Stats Row */}
                        <div className="flex justify-center gap-5">
                            <div className="text-center">
                                <div className="text-[22px] font-black text-[#8c52ff]">1M+</div>
                                <div className="text-[9px] text-white/50 uppercase tracking-wider">TPS</div>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div className="text-center">
                                <div className="text-[22px] font-black text-white">&lt;1s</div>
                                <div className="text-[9px] text-white/50 uppercase tracking-wider">Finality</div>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div className="text-center">
                                <div className="text-[22px] font-black text-white">99.9%</div>
                                <div className="text-[9px] text-white/50 uppercase tracking-wider">Uptime</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-3 pt-2">
                            <Button
                                asChild
                                className="bg-[#8c52ff] text-white hover:bg-[#7a45e0] px-6 py-3.5 text-[12px] font-bold tracking-[0.02em] rounded-none h-auto w-full group"
                            >
                                <Link href="#waitlist" className="flex items-center justify-center gap-2">
                                    START BUILDING
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-2 border-white/20 bg-white/5 text-white hover:bg-white hover:text-black px-6 py-3.5 text-[12px] font-bold tracking-[0.02em] rounded-none h-auto transition-all duration-300 w-full backdrop-blur-sm"
                            >
                                <Link href="#features">VIEW ECOSYSTEM</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Tablet & Desktop Layout - Original grid */}
                <div className="hidden sm:grid sm:grid-cols-2 gap-12 md:gap-8 lg:gap-16 xl:gap-20 items-center pt-20 md:pt-24">
                    {/* Left Content */}
                    <motion.div
                        className="space-y-8 md:space-y-6 lg:space-y-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full">
                            <span className="w-2 h-2 bg-[#ffc502] rounded-full animate-pulse" />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Next-Gen Layer 1 Blockchain</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-[-6px] md:space-y-[-8px] lg:space-y-[-10px] xl:space-y-[-12px]">
                            <h1 className="text-[64px] md:text-[56px] lg:text-[88px] xl:text-[110px] 2xl:text-[130px] leading-[0.95] font-black tracking-[-0.04em] select-none">
                                <span className="block bg-gradient-to-r from-[#8c52ff] via-[#ff4080] to-[#ffc502] bg-clip-text text-transparent">BUILD</span>
                                <span className="block text-white">SCALE</span>
                                <span className="block text-white/60">INNOVATE</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-white/60 text-[15px] md:text-[14px] lg:text-[16px] leading-[1.8] max-w-[480px] lg:max-w-[520px] font-normal">
                            Join the ArthaChain Network — a next-generation Layer 1 blockchain
                            empowering developers to build, deploy, and scale decentralized applications with unprecedented speed and security.
                        </p>

                        {/* Stats Row */}
                        <div className="flex gap-8 md:gap-6 lg:gap-10">
                            <div>
                                <div className="text-[28px] md:text-[24px] lg:text-[32px] font-black text-[#8c52ff]">1M+</div>
                                <div className="text-[11px] text-white/50 uppercase tracking-wider">TPS</div>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div>
                                <div className="text-[28px] md:text-[24px] lg:text-[32px] font-black text-white">&lt;1s</div>
                                <div className="text-[11px] text-white/50 uppercase tracking-wider">Finality</div>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div>
                                <div className="text-[28px] md:text-[24px] lg:text-[32px] font-black text-white">99.9%</div>
                                <div className="text-[11px] text-white/50 uppercase tracking-wider">Uptime</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-row gap-4 md:gap-3 lg:gap-4 pt-2">
                            <Button
                                asChild
                                className="bg-[#8c52ff] text-white hover:bg-[#7a45e0] px-8 md:px-6 lg:px-10 py-5 md:py-4 lg:py-6 text-[13px] font-bold tracking-[0.02em] rounded-none h-auto group"
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
                                className="border-2 border-white/20 bg-white/5 text-white hover:bg-white hover:text-black px-8 md:px-6 lg:px-10 py-5 md:py-4 lg:py-6 text-[13px] font-bold tracking-[0.02em] rounded-none h-auto transition-all duration-300 backdrop-blur-sm"
                            >
                                <Link href="#features">VIEW ECOSYSTEM</Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right - Logo */}
                    <motion.div
                        className="relative flex items-center justify-center md:justify-end"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Floating Particles */}
                        <div className="absolute top-10 left-10 w-3 h-3 bg-[#8c52ff] rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                        <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#ff4080] rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                        <div className="absolute top-1/3 right-10 w-2 h-2 bg-[#ffc502] rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />

                        {/* Container for Logo */}
                        <div className="relative w-[450px] md:w-[420px] lg:w-[500px] xl:w-[560px] h-[560px] md:h-[520px] lg:h-[620px] xl:h-[700px] flex items-center justify-center">

                            {/* Gradient Glow Behind Logo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[350px] lg:w-[400px] h-[350px] lg:h-[400px] bg-gradient-to-br from-[#8c52ff]/30 via-[#ff4080]/20 to-[#ffc502]/30 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
                            </div>

                            {/* Inner Glow */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[250px] lg:w-[300px] h-[250px] lg:h-[300px] bg-[#ffc502]/20 rounded-full blur-[60px]" />
                            </div>

                            {/* Floating Sparkles */}
                            <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 bg-[#ffc502] rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
                            <div className="absolute top-[25%] right-[25%] w-2 h-2 bg-[#8c52ff] rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
                            <div className="absolute bottom-[30%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: '2.5s' }} />
                            <div className="absolute bottom-[20%] right-[20%] w-1.5 h-1.5 bg-[#ff4080] rounded-full animate-pulse" style={{ animationDuration: '1.8s' }} />
                            <div className="absolute top-[40%] left-[10%] w-1 h-1 bg-[#ffc502] rounded-full animate-pulse" style={{ animationDuration: '2.2s' }} />
                            <div className="absolute top-[60%] right-[10%] w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDuration: '2.8s' }} />

                            {/* Logo Image */}
                            <div className="relative w-[380px] md:w-[360px] lg:w-[440px] xl:w-[500px] h-[550px] md:h-[520px] lg:h-[640px] xl:h-[720px] z-10">
                                <Image
                                    src="/arthachain-logo.png"
                                    alt="ArthaChain Logo"
                                    fill
                                    className="object-contain drop-shadow-[0_0_80px_rgba(255,197,2,0.6)]"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-2 md:bottom-0 lg:bottom-4 left-4 md:left-0 lg:left-8 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2.5">
                            <div className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Powered by</div>
                            <div className="text-[13px] font-bold text-white">AI-Driven Consensus</div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator - Hidden on mobile */}
                <motion.div
                    className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
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
