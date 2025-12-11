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

    // Auto-rotate - fixed for all devices
    useEffect(() => {
        const startRotation = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            intervalRef.current = setInterval(() => {
                if (!isPaused) {
                    setActiveIndex((prev) => (prev + 1) % featureItems.length);
                }
            }, 3000);
        };

        startRotation();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused]);

    const activeItem = featureItems[activeIndex];

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
        // Pause rotation briefly when user interacts
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 5000);
    };

    return (
        <section className="relative w-full bg-white overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
            {/* Dynamic Background Glow */}
            <motion.div
                className="absolute inset-0 opacity-50"
                animate={{
                    background: `radial-gradient(circle at 30% 50%, ${activeItem.accent} 0%, transparent 40%)`
                }}
                transition={{ duration: 1 }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Giant Background Number - positioned behind content */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden w-1/2 lg:w-2/5">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeItem.number}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="text-[50vw] sm:text-[40vw] md:text-[35vw] lg:text-[30vw] font-black text-black select-none leading-none text-center"
                    >
                        {activeItem.number}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Section Label */}
                <motion.div
                    className="flex items-center gap-4 mb-10 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="h-[3px] w-10"
                        animate={{ backgroundColor: activeItem.color }}
                        transition={{ duration: 0.5 }}
                    />
                    <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40">KEY FEATURES</span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Side - Dynamic Word */}
                    <div className="lg:col-span-5 relative">
                        <div className="h-[120px] sm:h-[160px] md:h-[200px] lg:h-[260px] flex items-center overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={activeItem.word}
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -60 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-black leading-[0.9] tracking-[-0.04em]"
                                    style={{ color: activeItem.color }}
                                >
                                    {activeItem.word}
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex gap-3 mt-6 sm:mt-8">
                            {featureItems.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleCardClick(index)}
                                    className="relative group p-1"
                                >
                                    <motion.div
                                        className="w-3 h-3 rounded-full transition-all duration-300"
                                        animate={{
                                            backgroundColor: index === activeIndex ? activeItem.color : 'rgba(0,0,0,0.15)',
                                            scale: index === activeIndex ? 1.4 : 1
                                        }}
                                    />
                                    {index === activeIndex && (
                                        <motion.div
                                            layoutId="activeDot"
                                            className="absolute inset-0 rounded-full border-2"
                                            style={{ borderColor: activeItem.color }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Content Cards */}
                    <div className="lg:col-span-7">
                        <div className="space-y-3 sm:space-y-4">
                            {featureItems.map((item, index) => {
                                const isActive = index === activeIndex;

                                return (
                                    <motion.div
                                        key={item.id}
                                        onClick={() => handleCardClick(index)}
                                        animate={{
                                            opacity: isActive ? 1 : 0.5,
                                            scale: isActive ? 1 : 0.98,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="relative p-4 sm:p-6 cursor-pointer border-l-4 transition-all duration-300"
                                        style={{
                                            borderColor: isActive ? item.color : 'rgba(0,0,0,0.08)',
                                            backgroundColor: isActive ? item.accent : 'transparent'
                                        }}
                                    >
                                        {/* Number & Title Row */}
                                        <div className="flex items-center gap-4 sm:gap-5">
                                            <span
                                                className="text-[28px] sm:text-[36px] md:text-[42px] font-black leading-none transition-colors duration-300"
                                                style={{ color: isActive ? item.color : 'rgba(0,0,0,0.15)' }}
                                            >
                                                {item.number}
                                            </span>
                                            <h3 className="text-base sm:text-lg md:text-xl font-black text-black uppercase tracking-tight">
                                                {item.fullTitle}
                                            </h3>
                                        </div>

                                        {/* Description - Only show when active */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-black/60 text-sm sm:text-[15px] leading-relaxed pl-[44px] sm:pl-[56px] md:pl-[62px] overflow-hidden"
                                                >
                                                    {item.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <motion.div
                            className="mt-8 sm:mt-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <button
                                className="group flex items-center gap-3 text-black/50 hover:text-black transition-colors"
                            >
                                <span className="text-[12px] sm:text-[13px] font-bold tracking-wider uppercase">Explore All Features</span>
                                <motion.div
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: activeItem.color }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                animate={{
                    background: `linear-gradient(90deg, transparent, ${activeItem.color}, transparent)`
                }}
                transition={{ duration: 0.5 }}
            />
        </section>
    );
}
