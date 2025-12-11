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
        color: '#00FF41',
        accent: 'rgba(0, 255, 65, 0.08)'
    },
    {
        id: 2,
        number: '02',
        word: 'SECURE',
        fullTitle: 'QUANTUM-RESISTANT',
        description: 'Post-quantum cryptography with lattice-based signatures. Your assets protected against future quantum computing threats.',
        color: '#0066FF',
        accent: 'rgba(0, 102, 255, 0.08)'
    },
    {
        id: 3,
        number: '03',
        word: 'SCALE',
        fullTitle: 'INFINITE SCALABILITY',
        description: 'Sharded architecture with dynamic state partitioning. Scale from thousands to billions of users seamlessly.',
        color: '#FF00E5',
        accent: 'rgba(255, 0, 229, 0.08)'
    },
    {
        id: 4,
        number: '04',
        word: 'SMART',
        fullTitle: 'AI-POWERED CONSENSUS',
        description: 'Neural networks predict transaction patterns and dynamically optimize consensus parameters in real-time.',
        color: '#FF6B00',
        accent: 'rgba(255, 107, 0, 0.08)'
    },
];

export default function MissionSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Auto-rotate when not hovering
    useEffect(() => {
        if (isHovering) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % featureItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovering]);

    const activeItem = featureItems[activeIndex];

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen bg-white overflow-hidden flex items-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Dynamic Background Glow */}
            <motion.div
                className="absolute inset-0 opacity-40"
                animate={{
                    background: `radial-gradient(circle at 70% 50%, ${activeItem.accent} 0%, transparent 50%)`
                }}
                transition={{ duration: 1 }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Giant Background Number */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeItem.number}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{ opacity: 0.04, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 1.2, rotateY: 90 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="text-[40vw] md:text-[50vw] font-black text-black select-none leading-none"
                        style={{ fontFamily: 'system-ui' }}
                    >
                        {activeItem.number}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 w-full py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Interactive Word Display */}
                    <div className="relative">
                        {/* Section Label */}
                        <motion.div
                            className="flex items-center gap-4 mb-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="h-[2px] w-8"
                                animate={{ backgroundColor: activeItem.color }}
                                transition={{ duration: 0.5 }}
                            />
                            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40">KEY FEATURES</span>
                        </motion.div>

                        {/* Dynamic Word */}
                        <div className="relative h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={activeItem.word}
                                    initial={{ opacity: 0, y: 100, rotateX: -45 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    exit={{ opacity: 0, y: -100, rotateX: 45 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-black leading-[0.8] tracking-[-0.05em]"
                                    style={{
                                        color: activeItem.color,
                                        textShadow: `0 0 80px ${activeItem.accent}`
                                    }}
                                >
                                    {activeItem.word}
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex gap-3 mt-8">
                            {featureItems.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className="relative group"
                                >
                                    <motion.div
                                        className="w-3 h-3 rounded-full transition-all duration-300"
                                        animate={{
                                            backgroundColor: index === activeIndex ? activeItem.color : 'rgba(0,0,0,0.15)',
                                            scale: index === activeIndex ? 1.3 : 1
                                        }}
                                    />
                                    {index === activeIndex && (
                                        <motion.div
                                            layoutId="activeDot"
                                            className="absolute inset-[-4px] rounded-full border-2"
                                            style={{ borderColor: activeItem.color }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Content Cards Stack */}
                    <div className="relative">
                        <div className="space-y-4">
                            {featureItems.map((item, index) => {
                                const isActive = index === activeIndex;

                                return (
                                    <motion.div
                                        key={item.id}
                                        onClick={() => setActiveIndex(index)}
                                        animate={{
                                            opacity: isActive ? 1 : 0.4,
                                            x: isActive ? 0 : 20,
                                            scale: isActive ? 1 : 0.98,
                                        }}
                                        transition={{ duration: 0.4 }}
                                        className={`relative p-6 sm:p-8 cursor-pointer transition-all duration-300 border-l-4`}
                                        style={{
                                            borderColor: isActive ? item.color : 'rgba(0,0,0,0.1)',
                                            backgroundColor: isActive ? item.accent : 'transparent'
                                        }}
                                    >
                                        {/* Number & Title Row */}
                                        <div className="flex items-start gap-4 sm:gap-6 mb-4">
                                            <span
                                                className="text-[32px] sm:text-[40px] md:text-[48px] font-black leading-none transition-colors duration-300"
                                                style={{ color: isActive ? item.color : 'rgba(0,0,0,0.2)' }}
                                            >
                                                {item.number}
                                            </span>
                                            <div>
                                                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                                                    {item.fullTitle}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description - Only show when active */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-black/60 text-sm sm:text-base leading-relaxed pl-0 sm:pl-[56px] md:pl-[64px]"
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
                            className="mt-10 sm:mt-12 pl-0 sm:pl-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <button
                                className="group flex items-center gap-4 text-black/50 hover:text-black transition-colors"
                            >
                                <span className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase">Explore All Features</span>
                                <motion.div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
                                    style={{ backgroundColor: activeItem.color }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                animate={{
                    background: `linear-gradient(90deg, transparent, ${activeItem.color}, transparent)`
                }}
                transition={{ duration: 0.5 }}
            />
        </section>
    );
}
