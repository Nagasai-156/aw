'use client';

import React from 'react';
import { Brain, Zap, Shield, Layers, Fingerprint, Database, Globe, Code, Cpu, TrendingUp } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
    {
        title: 'Developer Portal',
        icon: Code,
        description: 'Comprehensive documentation, interactive tutorials, step-by-step guides, and battle-tested best practices.',
        cta: 'Open Developer Portal →',
        href: '/dev',
    },
    {
        title: 'SDKs & APIs',
        icon: Cpu,
        description: 'Solidity SDK (EVM), Rust SDK (WASM), TypeScript SDK, and AI Tools SDK. Everything you need in one place.',
        cta: 'View SDKs →',
        href: '/dev/sdks',
    },
    {
        title: 'Smart Contract Tools',
        icon: Zap,
        description: 'AI Smart Contract Generator, on-chain debugger, WASM Playground, and instant Localnet Launcher.',
        cta: 'Open Tools →',
        href: '/dev/tools',
    },
    {
        title: 'Testnet & Faucet',
        icon: Database,
        description: 'Deploy instantly on Artha Devnet with free test tokens. No signup required.',
        cta: 'Get Test Tokens →',
        href: '/dev/faucet',
    },
    {
        title: 'Templates & Starter Kits',
        icon: Layers,
        description: 'AI Agent Starter Pack, autonomous dApp templates, Rust/Solidity boilerplates, and DeAI compute templates.',
        cta: 'Download Templates →',
        href: '/dev/templates',
    },
    {
        title: 'GitHub Repositories',
        icon: Globe,
        description: 'Open-source core repositories: consensus engine, storage layer, SVDB, comprehensive SDKs, and more.',
        cta: 'Explore GitHub →',
        href: 'https://github.com/arthachain',
    },
];

export default function AdvancedGridFeaturesSection() {
    return (
        <section className="relative w-full bg-black py-10 md:py-14 overflow-hidden">
            {/* Enhanced Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

            {/* Solid Color Orbs (no gradients) */}
            <motion.div
                className="absolute -top-20 right-1/4 w-[600px] h-[600px] bg-[#8c52ff]/8 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-[#ff4080]/8 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                    x: [0, -40, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#ffc502]/6 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative z-10 mx-auto w-full max-w-[1400px] space-y-12 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <AnimatedContainer className="mx-auto max-w-4xl text-center space-y-6">
                    {/* Enhanced Badge */}
                    <motion.div
                        className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#8c52ff]/5 border border-[#8c52ff]/20 backdrop-blur-md rounded-full shadow-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8c52ff] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8c52ff]"></span>
                        </span>
                        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/70">
                            Developer Resources
                        </span>
                    </motion.div>

                    {/* Title with solid colors */}
                    <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-black tracking-tight text-balance leading-[1.05]">
                        <span className="text-white">
                            Built for{' '}
                        </span>
                        <span className="text-[#8c52ff]">
                            Developers
                        </span>
                    </h2>

                    {/* Enhanced Description */}
                    <p className="text-white/60 text-base sm:text-lg md:text-xl tracking-wide text-balance max-w-3xl mx-auto leading-relaxed font-medium">
                        Everything you need to start building on ArthaChain.{' '}
                        <span className="text-[#8c52ff] font-semibold">From comprehensive SDKs to AI-powered tools</span>, we've got you covered.
                    </p>
                </AnimatedContainer>

                {/* Two Column Layout: Code + Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {/* Left Side - Code Typing Effect */}
                    <div className="order-2 lg:order-1">
                        <CodeTypingEffect />
                    </div>

                    {/* Right Side - Terminal Stats */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center gap-4">
                        <TerminalStat
                            label="SDKs Available"
                            value="4+"
                            color="#8c52ff"
                            delay={0}
                        />
                        <TerminalStat
                            label="Open Source Packages"
                            value="100%"
                            color="#ff4080"
                            delay={0.2}
                        />
                        <TerminalStat
                            label="Developer Support"
                            value="24/7"
                            color="#ffc502"
                            delay={0.4}
                        />
                    </div>
                </div>

                <AnimatedContainer
                    delay={0.3}
                    className="grid grid-cols-1 divide-white/[0.1] divide-x divide-y divide-dashed border-2 border-dashed border-white/[0.1] sm:grid-cols-2 lg:grid-cols-3 bg-white/[0.03] backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
                >
                    {features.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} index={i} />
                    ))}
                </AnimatedContainer>

                {/* Enhanced Bottom CTA Section */}
                <AnimatedContainer delay={0.5} className="text-center pt-8 space-y-6">
                    <p className="text-white/50 text-sm font-medium">
                        Join thousands of developers building the future of blockchain
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.a
                            href="/dev"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#8c52ff] hover:bg-[#7a45e0] text-white text-sm font-bold tracking-wide rounded-full transition-all duration-300 shadow-lg shadow-[#8c52ff]/25 hover:shadow-xl hover:shadow-[#8c52ff]/40"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Start Building Now</span>
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="/dev/sdks"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white border-2 border-white/20 hover:border-[#8c52ff]/50 text-sm font-bold tracking-wide rounded-full transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Explore Documentation</span>
                        </motion.a>
                    </div>
                </AnimatedContainer>
            </div>
        </section>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: React.ComponentProps<typeof motion.div>['className'];
    children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(8px)', translateY: 20, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay, duration: 0.6, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Terminal-Style Stat Component
function TerminalStat({ label, value, color, delay }: { label: string; value: string; color: string; delay: number }) {
    const [displayValue, setDisplayValue] = React.useState('');
    const [showCursor, setShowCursor] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= value.length) {
                    setDisplayValue(value.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setShowCursor(false);
                }
            }, 100);

            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return (
        <motion.div
            className="relative flex items-center gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/10 font-mono"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
        >
            <div className="flex items-center gap-2">
                <span className="text-white/40 text-sm">$</span>
                <span className="text-white/60 text-sm">{label}:</span>
            </div>
            <div className="flex-1 flex items-center gap-1">
                <span
                    className="text-lg md:text-xl font-bold"
                    style={{ color }}
                >
                    {displayValue}
                </span>
                {showCursor && (
                    <motion.span
                        className="inline-block w-2 h-5 ml-1"
                        style={{ backgroundColor: color }}
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    />
                )}
            </div>
            <div className="absolute -right-1 -bottom-1 w-8 h-8 blur-xl opacity-50" style={{ backgroundColor: color }} />
        </motion.div>
    );
}

// Code Typing Effect Component
function CodeTypingEffect() {
    const codeLines = [
        'import { ArthaChain } from "@arthachain/sdk";',
        '',
        'const chain = new ArthaChain({',
        '  network: "mainnet",',
        '  ai: { enabled: true }',
        '});',
        '',
        'await chain.deploy({',
        '  contract: MyNFT,',
        '  gas: "auto"',
        '});'
    ];

    const [displayedLines, setDisplayedLines] = React.useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = React.useState(0);
    const [currentCharIndex, setCurrentCharIndex] = React.useState(0);

    React.useEffect(() => {
        if (currentLineIndex >= codeLines.length) {
            // Reset after showing all lines
            const resetTimer = setTimeout(() => {
                setDisplayedLines([]);
                setCurrentLineIndex(0);
                setCurrentCharIndex(0);
            }, 3000);
            return () => clearTimeout(resetTimer);
        }

        const currentLine = codeLines[currentLineIndex];

        if (currentCharIndex < currentLine.length) {
            const charTimer = setTimeout(() => {
                setDisplayedLines(prev => {
                    const newLines = [...prev];
                    if (!newLines[currentLineIndex]) {
                        newLines[currentLineIndex] = '';
                    }
                    newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
                    return newLines;
                });
                setCurrentCharIndex(prev => prev + 1);
            }, 50);
            return () => clearTimeout(charTimer);
        } else {
            // Move to next line
            const lineTimer = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1);
                setCurrentCharIndex(0);
            }, 200);
            return () => clearTimeout(lineTimer);
        }
    }, [currentLineIndex, currentCharIndex]);

    return (
        <motion.div
            className="h-full p-3 sm:p-4 md:p-6 rounded-lg bg-black/60 border border-[#8c52ff]/20 backdrop-blur-sm font-mono text-[10px] sm:text-xs shadow-xl flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
        >
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 pb-2 border-b border-white/5">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff4080]" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ffc502]" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#8c52ff]" />
                <span className="text-white/40 ml-1 sm:ml-2 text-[9px] sm:text-[10px]">deploy.ts</span>
            </div>
            <div className="space-y-0.5 sm:space-y-1 overflow-x-auto flex-1">
                {displayedLines.map((line, i) => (
                    <div key={i} className="flex items-start gap-1.5 sm:gap-2">
                        <span className="text-white/20 select-none w-4 sm:w-6 text-right flex-shrink-0 text-[9px] sm:text-[10px]">{i + 1}</span>
                        <span className="text-[#8c52ff]/90 break-all sm:break-normal">{line}</span>
                        {i === currentLineIndex && (
                            <motion.span
                                className="inline-block w-1 h-3 sm:w-1.5 sm:h-4 bg-[#8c52ff] flex-shrink-0"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
