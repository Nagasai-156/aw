'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Layers, Brain, Fingerprint, Database } from 'lucide-react';

const featuresData = [
    {
        id: '01',
        title: 'AI-POWERED CONSENSUS',
        subtitle: 'Neural Network Optimization',
        description: 'Our revolutionary AI engine predicts transaction patterns and dynamically adjusts consensus parameters. Machine learning algorithms continuously optimize network performance for maximum throughput.',
        link: { text: 'Explore AI Engine', href: '/technology' },
        icon: Brain,
        color: '#450693',
        highlights: ['Predictive routing', 'Auto-optimization', 'Real-time learning'],
    },
    {
        id: '02',
        title: 'QUANTUM-RESISTANT SECURITY',
        subtitle: 'Future-Proof Protection',
        description: 'Built with post-quantum cryptography using lattice-based signatures. Your assets are protected against both current threats and future quantum computing attacks with military-grade encryption.',
        link: { text: 'Learn About Security', href: '/technology' },
        icon: Shield,
        color: '#8c52ff',
        highlights: ['256-bit encryption', 'Zero-knowledge proofs', 'Multi-sig support'],
    },
    {
        id: '03',
        title: 'DECENTRALIZED IDENTITY',
        subtitle: 'Self-Sovereign Control',
        description: 'Integrated DID system gives users complete control over their digital identity. Verifiable credentials, privacy-preserving authentication, and seamless cross-platform identity portability.',
        link: { text: 'Discover DID', href: '/technology' },
        icon: Fingerprint,
        color: '#ff4080',
        highlights: ['Self-sovereign', 'Verifiable credentials', 'Privacy-first'],
    },
    {
        id: '04',
        title: 'INFINITE SCALABILITY',
        subtitle: 'Dynamic Sharding Architecture',
        description: 'Revolutionary sharding technology with dynamic state partitioning. Scale from thousands to billions of users seamlessly without compromising speed or decentralization.',
        link: { text: 'View Architecture', href: '/technology' },
        icon: Layers,
        color: '#ffc502',
        highlights: ['Auto-sharding', 'Linear scaling', 'No bottlenecks'],
    },
    {
        id: '05',
        title: 'LIGHTNING PERFORMANCE',
        subtitle: '1M+ Transactions Per Second',
        description: 'Achieve unprecedented throughput with sub-second finality. Our optimized consensus mechanism processes over 1 million transactions per second while maintaining full decentralization.',
        link: { text: 'See Benchmarks', href: '/technology' },
        icon: Zap,
        color: '#450693',
        highlights: ['<1s finality', '1M+ TPS', '$0.001 per tx'],
    },
    {
        id: '06',
        title: 'DECENTRALIZED STORAGE',
        subtitle: 'SVDB Vector Database',
        description: 'Sharded Vector Database for scalable decentralized storage. Content addressing, erasure coding, and IPFS integration provide reliable, permanent data availability for your applications.',
        link: { text: 'Explore Storage', href: '/technology' },
        icon: Database,
        color: '#8c52ff',
        highlights: ['Vector storage', 'IPFS integrated', 'Permanent data'],
    },
];

export default function TimelineSection() {
    return (
        <section className="relative w-full bg-black overflow-hidden">
            {/* Hero-like Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

            {/* Subtle Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#450693]/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#8c52ff]/6 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">

                {/* Header */}
                <motion.div
                    className="text-center mb-14 sm:mb-18"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-5">
                        <span className="w-2 h-2 rounded-full bg-[#8c52ff] animate-pulse" />
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                            Platform Features
                        </span>
                    </div>
                    <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-black text-white leading-[1.05]">
                        Built for the <span className="text-[#8c52ff]">Next Era</span>
                    </h2>
                    <p className="text-white/40 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                        Every feature designed to deliver unprecedented performance, security, and developer experience.
                    </p>
                </motion.div>

                {/* Features List */}
                <div className="space-y-0">
                    {featuresData.map((item, index) => {
                        const Icon = item.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="border-t border-white/10 py-12 sm:py-16"
                            >
                                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>

                                    {/* Number + Icon Side */}
                                    <div className={`lg:col-span-2 ${isEven ? 'lg:order-1' : 'lg:order-1'}`}>
                                        <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                                            {/* Big Number */}
                                            <span
                                                className="text-[64px] sm:text-[80px] lg:text-[100px] font-black leading-none"
                                                style={{ color: `${item.color}40` }}
                                            >
                                                {item.id}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-3'}`}>
                                        {/* Icon + Subtitle */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <div
                                                className="w-10 h-10 flex items-center justify-center"
                                                style={{ backgroundColor: item.color }}
                                            >
                                                <Icon size={20} className="text-white" />
                                            </div>
                                            <span
                                                className="text-[11px] font-bold tracking-[0.15em] uppercase"
                                                style={{ color: item.color }}
                                            >
                                                {item.subtitle}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[24px] sm:text-[32px] md:text-[40px] font-black text-white leading-[1.1] mb-4">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/50 text-sm sm:text-[15px] leading-relaxed mb-5 max-w-xl">
                                            {item.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {item.highlights.map((h, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border"
                                                    style={{
                                                        borderColor: `${item.color}30`,
                                                        color: item.color,
                                                        backgroundColor: `${item.color}15`,
                                                    }}
                                                >
                                                    {h}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Link */}
                                        <Link
                                            href={item.link.href}
                                            className="inline-flex items-center gap-2 group"
                                        >
                                            <span
                                                className="text-[12px] font-bold tracking-wider uppercase"
                                                style={{ color: item.color }}
                                            >
                                                {item.link.text}
                                            </span>
                                            <div
                                                className="w-7 h-7 flex items-center justify-center transition-transform group-hover:translate-x-1"
                                                style={{ backgroundColor: item.color }}
                                            >
                                                <ArrowRight size={14} className="text-white" />
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Visual Side */}
                                    <div className={`lg:col-span-4 ${isEven ? 'lg:order-3' : 'lg:order-2'}`}>
                                        <div
                                            className="relative aspect-[4/3] overflow-hidden"
                                            style={{ backgroundColor: `${item.color}15` }}
                                        >
                                            {/* Decorative Pattern */}
                                            <div
                                                className="absolute inset-0 opacity-10"
                                                style={{
                                                    backgroundImage: `radial-gradient(circle at 30% 30%, ${item.color} 0%, transparent 50%), radial-gradient(circle at 70% 70%, ${item.color} 0%, transparent 50%)`,
                                                }}
                                            />

                                            {/* Icon Large */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Icon
                                                    size={80}
                                                    className="sm:w-24 sm:h-24"
                                                    style={{ color: `${item.color}30` }}
                                                />
                                            </div>

                                            {/* Number Overlay */}
                                            <div className="absolute bottom-3 right-4">
                                                <span
                                                    className="text-[48px] sm:text-[56px] font-black"
                                                    style={{ color: item.color }}
                                                >
                                                    {item.id}
                                                </span>
                                            </div>

                                            {/* Corner Accents */}
                                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: item.color }} />
                                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: item.color }} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-12 sm:mt-16 pt-12 border-t border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="/features"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#8c52ff] hover:bg-[#7a45e0] transition-colors group"
                    >
                        <span className="text-white text-[13px] font-bold tracking-wider uppercase">
                            Explore All Features
                        </span>
                        <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
