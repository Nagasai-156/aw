'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const featureItems = [
    {
        id: 1,
        number: '01',
        word: 'SPEED',
        fullTitle: 'LIGHTNING FAST TPS',
        description: 'Process over 1 million transactions per second with AI-optimized consensus. Sub-second finality means your users never wait.',
        color: '#8c52ff',
        accent: 'rgba(140, 82, 255, 0.1)'
    },
    {
        id: 2,
        number: '02',
        word: 'SECURE',
        fullTitle: 'QUANTUM-RESISTANT',
        description: 'Post-quantum cryptography with lattice-based signatures. Your assets protected against future quantum computing threats.',
        color: '#450693',
        accent: 'rgba(69, 6, 147, 0.1)'
    },
    {
        id: 3,
        number: '03',
        word: 'SCALE',
        fullTitle: 'INFINITE SCALABILITY',
        description: 'Sharded architecture with dynamic state partitioning. Scale from thousands to billions of users seamlessly.',
        color: '#ff4080',
        accent: 'rgba(255, 64, 128, 0.1)'
    },
    {
        id: 4,
        number: '04',
        word: 'SMART',
        fullTitle: 'AI-POWERED CONSENSUS',
        description: 'Neural networks predict transaction patterns and dynamically optimize consensus parameters in real-time.',
        color: '#ffc502',
        accent: 'rgba(255, 197, 2, 0.12)'
    },
];

export default function MissionSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-rotate
    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % featureItems.length);
            }, 3000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused]);

    const activeItem = featureItems[activeIndex];

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 5000);
    };

    return (
        <section className="relative w-full bg-white overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-12">
                    <div
                        className="h-[3px] w-10 transition-colors duration-500"
                        style={{ backgroundColor: activeItem.color }}
                    />
                    <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40">KEY FEATURES</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left Side - Dynamic Word (shows FIRST on mobile) */}
                    <div className="relative">
                        {/* Giant Word */}
                        <div className="min-h-[100px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[220px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={activeItem.word}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="text-[52px] sm:text-[72px] md:text-[96px] lg:text-[110px] xl:text-[130px] font-black leading-[0.9] tracking-[-0.04em]"
                                    style={{ color: activeItem.color }}
                                >
                                    {activeItem.word}
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex gap-3 mt-6">
                            {featureItems.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleCardClick(index)}
                                    className="relative p-1"
                                    aria-label={`View ${item.word}`}
                                >
                                    <div
                                        className="w-3 h-3 rounded-full transition-all duration-300"
                                        style={{
                                            backgroundColor: index === activeIndex ? item.color : 'rgba(0,0,0,0.15)',
                                            transform: index === activeIndex ? 'scale(1.4)' : 'scale(1)'
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Content Cards (shows SECOND on mobile) */}
                    <div>
                        <div className="space-y-2 sm:space-y-3">
                            {featureItems.map((item, index) => {
                                const isActive = index === activeIndex;

                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => handleCardClick(index)}
                                        className="relative p-4 sm:p-5 cursor-pointer border-l-4 transition-all duration-300"
                                        style={{
                                            borderColor: isActive ? item.color : 'rgba(0,0,0,0.08)',
                                            backgroundColor: isActive ? item.accent : 'transparent',
                                            opacity: isActive ? 1 : 0.5
                                        }}
                                    >
                                        {/* Number & Title Row */}
                                        <div className="flex items-center gap-4">
                                            <span
                                                className="text-[28px] sm:text-[32px] md:text-[38px] font-black leading-none transition-colors duration-300"
                                                style={{ color: isActive ? item.color : 'rgba(0,0,0,0.15)' }}
                                            >
                                                {item.number}
                                            </span>
                                            <h3 className="text-sm sm:text-base md:text-lg font-black text-black uppercase tracking-tight">
                                                {item.fullTitle}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        {isActive && (
                                            <p className="text-black/60 text-sm leading-relaxed mt-3 pl-[44px] sm:pl-[52px] md:pl-[58px]">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            <button className="group flex items-center gap-3 text-black/50 hover:text-black transition-colors">
                                <span className="text-[12px] sm:text-[13px] font-bold tracking-wider uppercase">Explore All Features</span>
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                                    style={{ backgroundColor: activeItem.color }}
                                >
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500"
                style={{
                    background: `linear-gradient(90deg, transparent, ${activeItem.color}, transparent)`
                }}
            />
        </section>
    );
}
