'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Layers, Brain, Fingerprint, Database, Box, Users, Globe, Code } from 'lucide-react';

const featuresData = [
    {
        id: '01',
        title: 'AI-POWERED CONSENSUS',
        subtitle: 'Neural Network Optimization',
        description: "ArthaChain uses a self-learning consensus layer powered by predictive machine learning models. The neural engine anticipates congestion, optimizes validator paths, and rebalances load in real-time, making the chain faster, smarter, and always adaptive.",
        link: { text: 'Explore AI Engine', href: '/features/ai' },
        icon: Brain,
        color: '#7c3aed',
        highlights: ['Predictive Routing', 'Auto-Optimization', 'Real-Time Learning'],
    },
    {
        id: '02',
        title: 'QUANTUM-RESISTANT SECURITY',
        subtitle: 'Future-Proof Protection',
        description: 'Built on NIST-approved post-quantum cryptography using lattice-based signature schemes (Dilithium-5 & ML-DSA-87). Your assets remain protected from both classical and next-era quantum attacks.',
        link: { text: 'Learn About Security', href: '/core/security' },
        icon: Shield,
        color: '#8c52ff',
        highlights: ['256-bit Post-Quantum Encryption', 'Zero-Knowledge Proofs', 'Multi-Sig & MPC Security'],
    },
    {
        id: '03',
        title: 'DECENTRALIZED IDENTITY',
        subtitle: 'Self-Sovereign Control',
        description: "ArthaChain features a native DID protocol enabling self-sovereign identity, verifiable credentials, and cross-chain/cross-platform authentication. Users own their identity, not platforms.",
        link: { text: 'Discover DID', href: '/features/did' },
        icon: Fingerprint,
        color: '#ff4080',
        highlights: ['Self-Sovereign Identity', 'Verifiable Credentials', 'Privacy-Preserving Authentication'],
    },
    {
        id: '04',
        title: 'INFINITE SCALABILITY',
        subtitle: 'Dynamic Sharding Architecture',
        description: "ArthaChain's hybrid sharding + DAG architecture enables unlimited horizontal scaling. State partitions grow automatically with demand, allowing the network to expand from thousands to billions of users without bottlenecks.",
        link: { text: 'View Architecture', href: '/core/architecture' },
        icon: Layers,
        color: '#ffc502',
        highlights: ['Auto-Sharding', 'Linear Scaling', 'Zero Bottlenecks'],
    },
    {
        id: '05',
        title: 'LIGHTNING PERFORMANCE',
        subtitle: '1M+ Transactions Per Second',
        description: 'Multi-threaded execution, DAG-parallel processing, and the dual-VM system deliver 1,000,000+ TPS with sub-second finality while maintaining full decentralization and security.',
        link: { text: 'See Benchmarks', href: '/technology' },
        icon: Zap,
        color: '#7c3aed',
        highlights: ['Sub-Second Finality', '1M+ TPS', '$0.001 Cost Per Transaction'],
    },
    {
        id: '06',
        title: 'DECENTRALIZED STORAGE',
        subtitle: 'SVDB Vector Database',
        description: 'ArthaChain includes a native SVDB (Sharded Vector Database) enabling ultra-fast search, vector embeddings, decentralized indexing, and permanent content addressing.',
        link: { text: 'Explore Storage', href: '/technology' },
        icon: Database,
        color: '#8c52ff',
        highlights: ['Vector Storage for AI Apps', 'No External Dependency', 'Permanent, Redundant Data'],
    },
    {
        id: '07',
        title: 'DUAL-VM ARCHITECTURE',
        subtitle: 'EVM + WASM Support',
        description: 'Developers can deploy using Solidity (EVM) or Rust/AssemblyScript (WASM) on the same network. Smart contracts run in parallel, enabling multi-language interoperability and higher execution throughput.',
        link: { text: 'Explore VMs', href: '/core/dual-vm' },
        icon: Box,
        color: '#ff4080',
        highlights: ['Full EVM Compatibility', 'WASM Native Runtime', 'Parallel Contract Execution'],
    },
    {
        id: '08',
        title: 'OPEN NODE NETWORK',
        subtitle: 'Validator Freedom',
        description: 'ArthaChain removes barriers. Anyone can run a node with no staking or lock-ins required. The network decentralizes automatically as more nodes join.',
        link: { text: 'Run a Node', href: '/dev/validators' },
        icon: Users,
        color: '#ffc502',
        highlights: ['No Staking Required', 'Open Participation', 'Auto-Scaling Validator Network'],
    },
    {
        id: '09',
        title: 'NATIVE INTEROPERABILITY',
        subtitle: 'Cross-Chain Connectivity',
        description: 'Built with a cross-chain messaging layer connecting EVM chains, WASM chains, rollups, and future networks. Move assets, identities, and proofs seamlessly.',
        link: { text: 'Explore Interop', href: '/technology' },
        icon: Globe,
        color: '#7c3aed',
        highlights: ['Cross-Chain Messaging', 'Bridges Without Middlemen', 'Unified Identity Across Chains'],
    },
    {
        id: '10',
        title: 'DEVELOPER-FIRST TOOLING',
        subtitle: 'Built for Builders',
        description: 'SDKs, APIs, on-chain debugging, localnet tools, faucet automation, vector DB integration, and AI-assisted smart contract tools.',
        link: { text: 'Start Building', href: '/dev' },
        icon: Code,
        color: '#8c52ff',
        highlights: ['Rust, Solidity, TypeScript SDKs', 'Self-evolving Smart Contracts', 'AI Smart Contract Generator'],
    },
];


export default function TimelineSection() {
    return (
        <section className="relative w-full bg-black overflow-hidden">
            {/* Hero-like Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

            {/* Subtle Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#7c3aed]/8 rounded-full blur-[120px]" />
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

                                            {/* Mascot Image for AI-POWERED CONSENSUS (01) */}
                                            {item.id === '01' ? (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <motion.img
                                                        src="/images/arthachain-mascot.png"
                                                        alt="ArthaChain AI Mascot"
                                                        className="w-full h-full object-contain p-4 sm:p-6"
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    />
                                                </div>
                                            ) : item.id === '02' ? (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <motion.img
                                                        src="/images/mascot-security.png"
                                                        alt="ArthaChain Security Mascot"
                                                        className="w-full h-full object-contain p-4 sm:p-6"
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    />
                                                </div>
                                            ) : item.id === '03' ? (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <motion.img
                                                        src="/images/mascot-identity.png"
                                                        alt="ArthaChain Identity Mascot"
                                                        className="w-full h-full object-contain p-4 sm:p-6"
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    />
                                                </div>
                                            ) : item.id === '04' ? (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <motion.img
                                                        src="/images/mascot-scale.png"
                                                        alt="ArthaChain Scalability Mascot"
                                                        className="w-full h-full object-cover"
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    />
                                                </div>
                                            ) : item.id === '06' ? (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <motion.img
                                                        src="/images/mascot-storage.png"
                                                        alt="ArthaChain Storage Mascot"
                                                        className="w-full h-full object-contain p-4 sm:p-6"
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    />
                                                </div>
                                            ) : item.id === '07' ? (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <motion.img
                                                        src="/images/mascot-dualvm.png"
                                                        alt="ArthaChain Dual-VM Mascot"
                                                        className="w-full h-full object-contain p-4 sm:p-6"
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    />
                                                </div>
                                            ) : item.id === '08' ? (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <motion.img
                                                        src="/images/mascot-network.png"
                                                        alt="ArthaChain Network Mascot"
                                                        className="w-full h-full object-contain p-4 sm:p-6"
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    />
                                                </div>
                                            ) : (
                                                /* Icon Large for other items */
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Icon
                                                        size={80}
                                                        className="sm:w-24 sm:h-24"
                                                        style={{ color: `${item.color}30` }}
                                                    />
                                                </div>
                                            )}

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
