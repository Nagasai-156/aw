"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function SparklesSection() {
    return (
        <section className="relative w-full bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
                {/* Main Heading */}
                <h1 className="text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[180px] font-black text-center text-white relative z-20 mb-6 sm:mb-8">
                    ARTHACHAIN
                </h1>

                {/* Sparkles Container */}
                <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-32 sm:h-36 md:h-40 relative">
                    {/* Gradient Lines */}
                    <div className="absolute inset-x-10 sm:inset-x-16 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#00FF41] to-transparent h-[2px] w-3/4 blur-sm mx-auto left-0 right-0" />
                    <div className="absolute inset-x-10 sm:inset-x-16 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#00FF41] to-transparent h-px w-3/4 mx-auto left-0 right-0" />
                    <div className="absolute inset-x-20 sm:inset-x-40 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[5px] w-1/4 blur-sm mx-auto left-0 right-0" />
                    <div className="absolute inset-x-20 sm:inset-x-40 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px w-1/4 mx-auto left-0 right-0" />

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
                <p className="text-sm sm:text-base md:text-lg lg:text-[18px] xl:text-[22px] font-normal text-gray-400 text-center mt-6 sm:mt-8 max-w-xl sm:max-w-2xl px-4">
                    The next-generation Layer 1 blockchain for decentralized applications
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-10 md:mt-12 w-full sm:w-auto px-4 sm:px-0">
                    <button className="bg-[#00FF41] hover:bg-[#00DD35] text-black px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200 w-full sm:w-auto">
                        GET STARTED
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200 w-full sm:w-auto">
                        READ DOCS
                    </button>
                </div>
            </div>
        </section>
    );
}
