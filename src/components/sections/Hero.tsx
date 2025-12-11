'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-8 lg:gap-16 xl:gap-20 items-center pt-16 sm:pt-20 md:pt-24">
                    {/* Left Content */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-10">
                        {/* Main Heading - Optimized for tablet */}
                        <div className="space-y-[-4px] sm:space-y-[-6px] md:space-y-[-8px] lg:space-y-[-10px] xl:space-y-[-12px]">
                            <h1 className="text-[52px] sm:text-[72px] md:text-[64px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[0.95] font-black tracking-[-0.04em] select-none">
                                <span className="block text-[#00FF41]">BUILD</span>
                                <span className="block text-black">SCALE</span>
                                <span className="block text-black">INNOVATE</span>
                            </h1>
                        </div>

                        {/* Description - optimized for tablet readability */}
                        <p className="text-[#6B7280] text-sm sm:text-[15px] md:text-[14px] lg:text-[15px] leading-[1.7] max-w-[420px] lg:max-w-[460px] font-normal">
                            Join the ArthaChain Network — a next-generation Layer 1 blockchain
                            for developers and innovators to build, deploy, and scale decentralized applications.
                        </p>

                        {/* CTA Buttons - tablet optimized */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-3 lg:gap-4 pt-2">
                            <Button
                                asChild
                                className="bg-black text-white hover:bg-black/90 px-6 sm:px-8 md:px-6 lg:px-10 py-4 sm:py-5 md:py-4 lg:py-6 text-[12px] sm:text-[13px] font-medium tracking-[0.02em] rounded-none h-auto w-full sm:w-auto"
                            >
                                <Link href="#waitlist">START BUILDING</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-[2px] border-black bg-white text-black hover:bg-black hover:text-white px-6 sm:px-8 md:px-6 lg:px-10 py-4 sm:py-5 md:py-4 lg:py-6 text-[12px] sm:text-[13px] font-medium tracking-[0.02em] rounded-none h-auto transition-all duration-200 w-full sm:w-auto"
                            >
                                <Link href="#features">VIEW ECOSYSTEM</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right 3D Cube - optimized for tablet */}
                    <div className="relative flex items-center justify-center md:justify-end order-first md:order-last">
                        {/* Floating Icon - top right */}
                        <div className="absolute top-0 right-0 sm:top-4 sm:right-4 md:top-0 md:right-0 lg:top-4 lg:right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#00FF41] flex items-center justify-center z-10 hover:rotate-45 transition-transform duration-300">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6"
                                stroke="black"
                                strokeWidth="2.5"
                                strokeLinecap="square"
                            >
                                <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" />
                            </svg>
                        </div>

                        {/* 3D Cube - Isometric gradient box - tablet optimized */}
                        <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[320px] lg:max-w-[420px] xl:max-w-[500px] aspect-square">
                            <div
                                className="w-full h-full relative overflow-hidden"
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
                                    transform: 'perspective(1200px) rotateX(10deg) rotateY(-12deg) rotateZ(0deg)',
                                    boxShadow: `
                    0 20px 40px -10px rgba(0, 255, 65, 0.3),
                    0 10px 25px -10px rgba(0, 0, 0, 0.2),
                    inset 0 0 120px rgba(255, 255, 255, 0.1)
                  `,
                                }}
                            >
                                {/* Hexagon/Network pattern overlay */}
                                <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="hexagons" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                                <path
                                                    d="M40 0l20 11.5v23L40 46 20 34.5v-23z"
                                                    fill="none"
                                                    stroke="white"
                                                    strokeWidth="1"
                                                />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#hexagons)" />
                                    </svg>
                                </div>

                                {/* Center glow effect */}
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                                        filter: 'blur(30px)',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
