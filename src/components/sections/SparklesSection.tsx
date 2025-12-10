"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function SparklesSection() {
    return (
        <section className="relative w-full bg-black py-20 px-8 flex flex-col items-center justify-center overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
                {/* Main Heading */}
                <h1 className="text-[100px] md:text-[140px] lg:text-[180px] font-black text-center text-white relative z-20 mb-8">
                    ARTHACHAIN
                </h1>

                {/* Sparkles Container */}
                <div className="w-full max-w-4xl h-40 relative">
                    {/* Gradient Lines */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#00FF41] to-transparent h-[2px] w-3/4 blur-sm mx-auto left-0 right-0" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#00FF41] to-transparent h-px w-3/4 mx-auto left-0 right-0" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[5px] w-1/4 blur-sm mx-auto left-0 right-0" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px w-1/4 mx-auto left-0 right-0" />

                    {/* Sparkles Core */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient Mask */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>

                {/* Tagline */}
                <p className="text-[18px] md:text-[22px] font-normal text-gray-400 text-center mt-8 max-w-2xl">
                    The next-generation Layer 1 blockchain for decentralized applications
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-6 justify-center mt-12">
                    <button className="bg-[#00FF41] hover:bg-[#00DD35] text-black px-12 py-5 text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200">
                        GET STARTED
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-12 py-5 text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200">
                        READ DOCS
                    </button>
                </div>
            </div>
        </section>
    );
}
