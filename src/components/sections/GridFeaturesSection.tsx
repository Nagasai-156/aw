'use client';

import { Brain, Cpu, Fingerprint, TrendingUp, Layers, Building2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
    {
        title: 'AI-Native Applications',
        icon: Brain,
        description: 'AI agents, autonomous dApps, and self-learning applications powered by on-chain neural computation.',
    },
    {
        title: 'DeAI & Compute Networks',
        icon: Cpu,
        description: 'Decentralized AI training, inference, vector databases, and compute routing powered by AI Consensus + SVDB.',
    },
    {
        title: 'Identity & Social Intelligence',
        icon: Fingerprint,
        description: 'DID system enabling AI profiles, autonomous social identities, reputation models, and secure authentication.',
    },
    {
        title: 'Autonomous Finance (AI-DeFi)',
        icon: TrendingUp,
        description: 'AI-powered liquidity managers, predictive risk engines, and ML-driven order routing for next-gen DeFi.',
    },
    {
        title: 'Infinite-Scale Infrastructure',
        icon: Layers,
        description: 'Dynamic sharding, DAG parallelism, Dual-VM (EVM + WASM), and permissionless validators at any scale.',
    },
    {
        title: 'Real-World AI Integrations',
        icon: Building2,
        description: 'Enterprise-grade post-quantum security, auditable AI pipelines, IoT integration, and government-grade identity.',
    },
];

export default function GridFeaturesSection() {
    return (
        <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
            {/* Background Grid - Light theme */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="relative z-10 mx-auto w-full max-w-[1400px] space-y-10 px-4 sm:px-6 lg:px-8">
                <AnimatedContainer className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/5 border border-black/10 backdrop-blur-sm rounded-full mb-5">
                        <span className="w-2 h-2 rounded-full bg-[#8c52ff] animate-pulse" />
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/60">
                            Build on ArthaChain
                        </span>
                    </div>
                    <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-black tracking-tight text-balance text-black leading-[1.1]">
                        The <span className="text-[#8c52ff]">AI-Native</span> Layer-1
                    </h2>
                    <p className="text-black/50 mt-4 text-sm sm:text-base tracking-wide text-balance max-w-2xl mx-auto">
                        Where artificial intelligence lives ON the blockchain. Deploy autonomous agents, AI-powered dApps, and intelligent infrastructure.
                    </p>
                </AnimatedContainer>

                <AnimatedContainer
                    delay={0.4}
                    className="grid grid-cols-1 divide-black/10 divide-x divide-y divide-dashed border border-dashed border-black/10 sm:grid-cols-2 md:grid-cols-3 bg-white"
                >
                    {features.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} index={i} />
                    ))}
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
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
