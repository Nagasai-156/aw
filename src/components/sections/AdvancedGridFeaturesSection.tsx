'use client';

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
        <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
            {/* Enhanced Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />

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
                        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-black/70">
                            Developer Resources
                        </span>
                    </motion.div>

                    {/* Title with solid colors */}
                    <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-black tracking-tight text-balance leading-[1.05]">
                        <span className="text-black">
                            Built for{' '}
                        </span>
                        <span className="text-[#8c52ff]">
                            Developers
                        </span>
                    </h2>

                    {/* Enhanced Description */}
                    <p className="text-black/60 text-base sm:text-lg md:text-xl tracking-wide text-balance max-w-3xl mx-auto leading-relaxed font-medium">
                        Everything you need to start building on ArthaChain.{' '}
                        <span className="text-[#8c52ff] font-semibold">From comprehensive SDKs to AI-powered tools</span>, we've got you covered.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-[#8c52ff]">4+</div>
                            <div className="text-xs text-black/50 font-medium uppercase tracking-wider">SDKs</div>
                        </div>
                        <div className="w-px h-8 bg-black/10" />
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-[#ff4080]">100%</div>
                            <div className="text-xs text-black/50 font-medium uppercase tracking-wider">Open Source</div>
                        </div>
                        <div className="w-px h-8 bg-black/10" />
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-[#ffc502]">24/7</div>
                            <div className="text-xs text-black/50 font-medium uppercase tracking-wider">Support</div>
                        </div>
                    </div>
                </AnimatedContainer>

                <AnimatedContainer
                    delay={0.3}
                    className="grid grid-cols-1 divide-black/[0.08] divide-x divide-y divide-dashed border-2 border-dashed border-black/[0.08] sm:grid-cols-2 lg:grid-cols-3 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl shadow-black/5"
                >
                    {features.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} index={i} />
                    ))}
                </AnimatedContainer>

                {/* Enhanced Bottom CTA Section */}
                <AnimatedContainer delay={0.5} className="text-center pt-8 space-y-6">
                    <p className="text-black/50 text-sm font-medium">
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
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-black/5 text-black border-2 border-black/10 hover:border-[#8c52ff]/30 text-sm font-bold tracking-wide rounded-full transition-all duration-300"
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
