"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

export default function SparklesSection() {
    return (
        <section className="relative w-full bg-black py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
            <StaggerContainer className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
                {/* Main Heading */}
                <StaggerItem>
                    <h1 className="text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[180px] font-black text-center text-white relative z-20 mb-0">
                        ARTHACHAIN
                    </h1>
                </StaggerItem>

                {/* Sparkles Container - Reduced Height */}
                <StaggerItem className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-20 sm:h-24 md:h-28 relative -mt-2">
                    {/* Gradient Lines */}
                    <div className="absolute inset-x-10 sm:inset-x-16 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#8c52ff] to-transparent h-[2px] w-3/4 blur-sm mx-auto left-0 right-0" />
                    <div className="absolute inset-x-10 sm:inset-x-16 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#8c52ff] to-transparent h-px w-3/4 mx-auto left-0 right-0" />
                    <div className="absolute inset-x-20 sm:inset-x-40 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#ffc502] to-transparent h-[5px] w-1/4 blur-sm mx-auto left-0 right-0" />
                    <div className="absolute inset-x-20 sm:inset-x-40 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#ffc502] to-transparent h-px w-1/4 mx-auto left-0 right-0" />

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
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_150px_at_top,transparent_20%,white)]"></div>
                </StaggerItem>

                {/* Tagline - Reduced margin */}
                <StaggerItem>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[18px] xl:text-[22px] font-normal text-gray-400 text-center mt-2 sm:mt-3 max-w-xl sm:max-w-2xl px-4">
                        The next-generation Layer 1 blockchain for decentralized applications
                    </p>
                </StaggerItem>

                {/* CTA Buttons - Reduced margin */}
                <StaggerItem className="w-full">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 w-full sm:w-auto px-4 sm:px-0">
                        <button className="bg-[#8c52ff] hover:bg-[#7a45e0] text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200 w-full sm:w-auto">
                            GET STARTED
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200 w-full sm:w-auto">
                            READ DOCS
                        </button>
                    </div>
                </StaggerItem>
            </StaggerContainer>
        </section>
    );
}
