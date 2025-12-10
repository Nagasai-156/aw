'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative bg-white min-h-screen flex items-center">
            <div className="max-w-[1400px] mx-auto px-8 py-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pt-20">
                    {/* Left Content */}
                    <div className="space-y-10">
                        {/* Main Heading - EXACT match */}
                        <div className="space-y-[-12px]">
                            <h1 className="text-[140px] leading-[1] font-black tracking-[-0.04em] select-none">
                                <span className="block text-[#00FF41] mb-[-6px]">BUILD</span>
                                <span className="block text-black mb-[-6px]">SCALE</span>
                                <span className="block text-black">INNOVATE</span>
                            </h1>
                        </div>

                        {/* Description - exact font size and color */}
                        <p className="text-[#6B7280] text-[15px] leading-[1.7] max-w-[460px] font-normal">
                            Join the ArthaChain Network — a next-generation Layer 1 blockchain
                            for developers and innovators to build, deploy, and scale decentralized applications.
                        </p>

                        {/* CTA Buttons - exact sizing */}
                        <div className="flex gap-4 pt-2">
                            <Button
                                asChild
                                className="bg-black text-white hover:bg-black/90 px-10 py-7 text-[13px] font-medium tracking-[0.02em] rounded-none h-auto"
                            >
                                <Link href="#waitlist">START BUILDING</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-[2px] border-black bg-white text-black hover:bg-black hover:text-white px-10 py-7 text-[13px] font-medium tracking-[0.02em] rounded-none h-auto transition-all duration-200"
                            >
                                <Link href="#features">VIEW ECOSYSTEM</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right 3D Cube */}
                    <div className="relative flex items-center justify-end">
                        {/* Floating Icon - top right */}
                        <div className="absolute top-8 right-8 w-14 h-14 bg-[#00FF41] flex items-center justify-center z-10 hover:rotate-45 transition-transform duration-300">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-7 h-7"
                                stroke="black"
                                strokeWidth="2.5"
                                strokeLinecap="square"
                            >
                                <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" />
                            </svg>
                        </div>

                        {/* 3D Cube - Isometric gradient box */}
                        <div className="relative w-full max-w-[540px] aspect-square">
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
                    0 30px 60px -15px rgba(0, 255, 65, 0.3),
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
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
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
