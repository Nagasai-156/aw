"use client"

import { ArthaChainGlobe } from "@/components/ui/arthachain-globe"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GlobeSection() {
    return (
        <section className="relative w-full bg-black overflow-hidden py-16 md:py-24">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8c52ff]/10 via-transparent to-transparent" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Content Container with Crazy Border */}
                <div className="relative">

                    {/* Animated Gradient Border */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-[#8c52ff] via-[#ff4080] to-[#ffc502] rounded-3xl opacity-75 blur-sm animate-pulse" />
                    {/* Corner Accents */}
                    <div className="absolute -top-2 -left-2 w-20 h-20 border-t-4 border-l-4 border-[#8c52ff] rounded-tl-3xl animate-pulse" />
                    <div className="absolute -top-2 -right-2 w-20 h-20 border-t-4 border-r-4 border-[#ff4080] rounded-tr-3xl animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-4 border-l-4 border-[#ffc502] rounded-bl-3xl animate-pulse" />
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-4 border-r-4 border-[#8c52ff] rounded-br-3xl animate-pulse" />

                    {/* Glow Effects */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8c52ff]/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-10 left-1/4 w-64 h-64 bg-[#ff4080]/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute top-1/2 -right-10 w-64 h-64 bg-[#ffc502]/20 rounded-full blur-3xl animate-pulse" />

                    {/* Content Container */}
                    <div className="relative bg-black rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-xl border-2 border-white/10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Left Content */}
                            <div className="text-center lg:text-left order-1 lg:order-1">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <span className="w-2 h-2 rounded-full bg-[#ffc502] animate-pulse" />
                                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/70">
                                        The Vision
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-6">
                                    Autonomous World
                                </h2>

                                <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                                    A new internet where applications <span className="text-[#8c52ff] font-semibold">evolve</span>, <span className="text-[#ff4080] font-semibold">learn</span>, and <span className="text-[#ffc502] font-semibold">scale</span> without limits.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Link href="/about">
                                        <Button className="inline-flex items-center gap-2 rounded-full bg-[#8c52ff] hover:bg-[#7c3aed] px-6 py-2.5 text-sm font-bold text-white transition-colors">
                                            Explore the Vision <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link href="/dev">
                                        <Button className="rounded-full bg-transparent border-2 border-white/20 text-white hover:bg-white/5 px-6 py-2.5 text-sm font-bold transition-colors">
                                            Start Building
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Globe */}
                            <div className="relative flex items-center justify-center order-2 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px]">
                                <ArthaChainGlobe className="top-0" />
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,82,255,0.1),transparent_70%)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
