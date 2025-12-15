'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Gamepad2, Zap, Brain, Shield, Users, Eye, CheckCircle2, ArrowUpRight, Activity, Award, Coins, X, Layers, Network, Target, Sparkles, Globe, Box, Cpu, Database, TrendingUp, Code2 } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function GamingPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - TETRIS BLOCKS LAYOUT */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Tetris-style blocks scattered */}
                <div className="absolute top-20 left-10 w-24 h-24 bg-[#8c52ff]" />
                <div className="absolute top-20 left-34 w-24 h-24 bg-[#ff4080]" />
                <div className="absolute top-44 left-10 w-24 h-24 bg-[#ffc502]" />
                <div className="absolute bottom-20 right-10 w-24 h-48 bg-[#8c52ff]" />
                <div className="absolute bottom-20 right-34 w-24 h-24 bg-[#ff4080]" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#8c52ff] text-white text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-8">
                            <Gamepad2 className="w-5 h-5" />
                            <span>Gaming & XR</span>
                        </div>
                        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter mb-8 max-w-5xl">
                            A Hyper-Realistic,<br />
                            <span className="text-[#8c52ff]">AI-Powered,</span><br />
                            Infinitely Scalable<br />
                            <span className="text-[#ff4080]">Universe</span><br />
                            Built on ArthaChain.
                        </h1>

                        {/* Scattered Feature Blocks */}
                        <div className="relative h-[400px] max-w-5xl mt-12 hidden md:block">
                            {[
                                { text: 'Real-time physics', top: '0%', left: '0%', color: '#8c52ff' },
                                { text: 'AI-driven NPCs', top: '0%', left: '25%', color: '#ff4080' },
                                { text: 'Virtual economies', top: '0%', left: '50%', color: '#ffc502' },
                                { text: 'Player-owned assets', top: '0%', left: '75%', color: '#8c52ff' },
                                { text: 'Cross-platform identities', top: '33%', left: '12.5%', color: '#ff4080' },
                                { text: 'Creator-built worlds', top: '33%', left: '37.5%', color: '#ffc502' },
                                { text: 'XR experiences', top: '33%', left: '62.5%', color: '#8c52ff' },
                                { text: 'High concurrency', top: '66%', left: '25%', color: '#ff4080' }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * i, type: 'spring' }}
                                    className="absolute bg-white text-black p-4 sm:p-6 border-4"
                                    style={{
                                        borderColor: feature.color,
                                        top: feature.top,
                                        left: feature.left,
                                        width: '22%'
                                    }}
                                >
                                    <p className="text-xs sm:text-sm font-black">{feature.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile: Simple Grid */}
                        <div className="grid grid-cols-2 gap-3 md:hidden mt-12">
                            {['Real-time physics', 'AI-driven NPCs', 'Virtual economies', 'Player-owned assets', 'Cross-platform identities', 'Creator-built worlds', 'XR experiences', 'High concurrency'].map((feature, i) => {
                                const colors = ['#8c52ff', '#ff4080', '#ffc502'];
                                const color = colors[i % 3];
                                return (
                                    <div key={i} className="bg-white text-black p-4 border-4" style={{ borderColor: color }}>
                                        <p className="text-xs font-black">{feature}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12 bg-[#ffc502] text-black p-6 sm:p-8 inline-block">
                            <p className="text-xl sm:text-2xl md:text-3xl font-black">
                                ArthaChain enables true digital worlds.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHY ARTHACHAIN - RADIAL SPOKE LAYOUT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Why ArthaChain is Built for Gaming & XR</h2>
                        </div>
                    </StaggerItem>

                    {/* Radial spoke cards */}
                    <div className="relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                            {[
                                {
                                    num: '1',
                                    title: 'Infinite Concurrency',
                                    desc: 'Millions of simultaneous interactions with zero congestion.',
                                    color: '#8c52ff',
                                    icon: Users
                                },
                                {
                                    num: '2',
                                    title: 'Sub-Second Finality',
                                    desc: 'PvP, eSports, real-time combat at real-world speed.',
                                    color: '#ff4080',
                                    icon: Zap
                                },
                                {
                                    num: '3',
                                    title: 'AI-Driven NPCs',
                                    desc: 'NPCs with vector memory that learn from players.',
                                    color: '#ffc502',
                                    icon: Brain
                                },
                                {
                                    num: '4',
                                    title: 'True Ownership',
                                    desc: 'PQC-secured assets. Ownership is eternal.',
                                    color: '#8c52ff',
                                    icon: Shield
                                },
                                {
                                    num: '5',
                                    title: 'Cross-Game Identity',
                                    desc: 'Carry identity across all games and XR worlds.',
                                    color: '#ff4080',
                                    icon: Award
                                },
                                {
                                    num: '6',
                                    title: 'Zero Downtime',
                                    desc: '99.9%+ uptime. Games never go offline.',
                                    color: '#ffc502',
                                    icon: Activity
                                }
                            ].map((reason, i) => {
                                const Icon = reason.icon;
                                return (
                                    <StaggerItem key={i}>
                                        <div className="bg-black text-white p-8 sm:p-10 h-full relative">
                                            {/* Connecting line visual */}
                                            <div className="absolute -top-4 left-1/2 w-1 h-8 hidden lg:block" style={{ backgroundColor: reason.color }} />

                                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: reason.color }}>
                                                <span className="text-3xl font-black text-white">{reason.num}</span>
                                            </div>

                                            <Icon className="w-12 h-12 mb-4 mx-auto" style={{ color: reason.color }} />
                                            <h3 className="text-2xl sm:text-3xl font-black mb-4 text-center">{reason.title}</h3>
                                            <p className="text-base sm:text-lg text-gray-400 text-center">{reason.desc}</p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </div>
                    </div>
                </StaggerContainer>
            </section>

            {/* 5 INNOVATIONS - LAYERED CARDS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">5 Gaming & XR Innovations</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">Unique to ArthaChain</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-16">
                        {[
                            {
                                num: '01',
                                title: 'AI-Native NPC Intelligence Layer',
                                subtitle: 'NPCs that actually think',
                                features: [
                                    { label: 'Vector embeddings', icon: Brain },
                                    { label: 'Personality profiles', icon: Users },
                                    { label: 'Memory', icon: Database },
                                    { label: 'Adaptive behavior', icon: Activity },
                                    { label: 'Strategic planning', icon: Target }
                                ],
                                result: 'NPCs become unpredictable, emotional, evolving, story-aware, and persistent across sessions.',
                                color: '#8c52ff'
                            },
                            {
                                num: '02',
                                title: 'Infinite World Sharding',
                                subtitle: 'Worlds that expand naturally',
                                features: [
                                    { label: 'Zone splits', icon: Layers },
                                    { label: 'Micro-zones', icon: Box },
                                    { label: 'Smooth gameplay', icon: Zap },
                                    { label: '10,000+ players', icon: Users },
                                    { label: 'No lag', icon: CheckCircle2 }
                                ],
                                result: 'Massive events (10,000+ players fighting a boss) no longer lag.',
                                color: '#ff4080'
                            },
                            {
                                num: '03',
                                title: 'DualChain Asset Framework',
                                subtitle: 'Logic + Massive Data',
                                features: [
                                    { label: 'ArthaCore: Logic', icon: Cpu },
                                    { label: 'ArthaFlow: Assets', icon: Database },
                                    { label: 'Textures & Models', icon: Box },
                                    { label: 'AI memories', icon: Brain },
                                    { label: 'No bloat', icon: CheckCircle2 }
                                ],
                                result: 'Games can store enormous data without bloating the ledger.',
                                color: '#ffc502'
                            },
                            {
                                num: '04',
                                title: 'Real-Time In-Game Economies',
                                subtitle: 'Living, breathing markets',
                                features: [
                                    { label: 'Instant trading', icon: Zap },
                                    { label: 'Sharded marketplaces', icon: Network },
                                    { label: 'Dynamic pricing', icon: TrendingUp },
                                    { label: 'Player-driven', icon: Users },
                                    { label: 'Event payouts', icon: Coins }
                                ],
                                result: 'Games and XR worlds feel alive.',
                                color: '#8c52ff'
                            },
                            {
                                num: '05',
                                title: 'XR-Ready Identity & Spatial Anchors',
                                subtitle: 'One identity, all realities',
                                features: [
                                    { label: 'VR avatars', icon: Eye },
                                    { label: 'AR objects', icon: Box },
                                    { label: 'Holographic characters', icon: Sparkles },
                                    { label: 'Virtual spaces', icon: Globe },
                                    { label: 'DID-based', icon: Shield }
                                ],
                                result: 'Walk across AR overlays, VR metaverses, mixed-reality simulations with the same identity.',
                                color: '#ff4080'
                            }
                        ].map((innovation, i) => (
                            <StaggerItem key={i}>
                                <div className="relative">
                                    {/* Layered background effect */}
                                    <div className="absolute inset-0 bg-white transform translate-x-4 translate-y-4" />
                                    <div className="absolute inset-0 transform translate-x-2 translate-y-2" style={{ backgroundColor: innovation.color }} />

                                    <div className="relative bg-white text-black p-8 sm:p-10 md:p-12">
                                        <div className="flex items-start gap-6 mb-8">
                                            <div className="text-6xl sm:text-7xl font-black" style={{ color: innovation.color }}>{innovation.num}</div>
                                            <div>
                                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2">{innovation.title}</h3>
                                                <p className="text-lg sm:text-xl" style={{ color: innovation.color }}>{innovation.subtitle}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                                            {innovation.features.map((feature, j) => {
                                                const Icon = feature.icon;
                                                return (
                                                    <div key={j} className="text-center">
                                                        <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: innovation.color }}>
                                                            <Icon className="w-8 h-8 text-white" />
                                                        </div>
                                                        <p className="text-xs sm:text-sm font-bold">{feature.label}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="p-6 bg-black text-white">
                                            <p className="text-base sm:text-lg font-bold">{innovation.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* DEVELOPER TOOLS - SKILL TREE LAYOUT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Developer Tech Tree</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">Unlock Your Game Development Powers</p>
                        </div>
                    </StaggerItem>

                    {/* Skill Tree Layout - 3 Tiers */}
                    <div className="space-y-12">
                        {/* Tier 1 - Foundation */}
                        <StaggerItem>
                            <div className="text-center mb-8">
                                <div className="inline-block px-6 py-3 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-wider">
                                    Tier 1: Foundation
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {[
                                    { title: 'Game SDKs', desc: 'Unity, Unreal, Godot integration', color: '#8c52ff', icon: Code2 },
                                    { title: 'Real-Time State Sync', desc: 'Combat, movement, stats, events at sharded speed', color: '#8c52ff', icon: Zap }
                                ].map((tool, i) => {
                                    const Icon = tool.icon;
                                    return (
                                        <div key={i} className="relative">
                                            {/* Connecting line to next tier */}
                                            <div className="absolute bottom-0 left-1/2 w-1 h-12 transform translate-y-full -translate-x-1/2 bg-[#8c52ff] hidden sm:block" />

                                            <div className="bg-black text-white p-8 relative">
                                                <div className="absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center" style={{ backgroundColor: tool.color }}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-black mb-3 pt-4">{tool.title}</h3>
                                                <p className="text-sm sm:text-base text-gray-400">{tool.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </StaggerItem>

                        {/* Tier 2 - Advanced */}
                        <StaggerItem>
                            <div className="text-center mb-8">
                                <div className="inline-block px-6 py-3 bg-[#ff4080] text-white text-sm font-black uppercase tracking-wider">
                                    Tier 2: Advanced
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {[
                                    { title: 'Asset Minting APIs', desc: 'Mint skins, weapons, badges, XP tokens instantly', color: '#ff4080', icon: Coins },
                                    { title: 'AI NPC Toolkit', desc: 'Create intelligent NPCs with memory and personality', color: '#ff4080', icon: Brain }
                                ].map((tool, i) => {
                                    const Icon = tool.icon;
                                    return (
                                        <div key={i} className="relative">
                                            {/* Connecting line to next tier */}
                                            <div className="absolute bottom-0 left-1/2 w-1 h-12 transform translate-y-full -translate-x-1/2 bg-[#ff4080] hidden sm:block" />

                                            <div className="bg-black text-white p-8 relative">
                                                <div className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center" style={{ backgroundColor: tool.color }}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-black mb-3 pt-4">{tool.title}</h3>
                                                <p className="text-sm sm:text-base text-gray-400">{tool.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </StaggerItem>

                        {/* Tier 3 - Master */}
                        <StaggerItem>
                            <div className="text-center mb-8">
                                <div className="inline-block px-6 py-3 bg-[#ffc502] text-white text-sm font-black uppercase tracking-wider">
                                    Tier 3: Master
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {[
                                    { title: 'XR Spatial Identity Kit', desc: 'Anchor DIDs to physical or virtual coordinates', color: '#ffc502', icon: Eye },
                                    { title: 'Cross-Game Inventory System', desc: 'Items move between games with standardized schemas', color: '#ffc502', icon: Layers }
                                ].map((tool, i) => {
                                    const Icon = tool.icon;
                                    return (
                                        <div key={i} className="bg-black text-white p-8 relative">
                                            <div className="absolute -bottom-4 -left-4 w-12 h-12 flex items-center justify-center" style={{ backgroundColor: tool.color }}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-black mb-3">{tool.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-400 pb-4">{tool.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* USE CASES - GAME CARDS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Game Genres</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'AAA Games', items: ['Battle royales', 'Open world adventure', 'PvP arenas', 'MMORPGs'], color: '#8c52ff', icon: Gamepad2 },
                            { title: 'Metaverse / XR', items: ['VR social hubs', 'AR-enhanced cities', 'Virtual campuses', 'Digital concerts'], color: '#ff4080', icon: Eye },
                            { title: 'AI-Simulated Worlds', items: ['Evolving NPC civilizations', 'Real-time storylines', 'Dynamic factions', 'Emergent behaviors'], color: '#ffc502', icon: Brain },
                            { title: 'Esports', items: ['Secure match logs', 'Instant payouts', 'Match verification', 'Zero cheating'], color: '#8c52ff', icon: Award },
                            { title: 'UGC Worlds', items: ['Custom maps', 'Avatars', 'Quests', 'Weapons'], color: '#ff4080', icon: Target }
                        ].map((genre, i) => {
                            const Icon = genre.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white text-black p-8 sm:p-10 h-full relative overflow-hidden">
                                        {/* Corner fold effect */}
                                        <div className="absolute top-0 right-0 w-16 h-16" style={{
                                            backgroundColor: genre.color,
                                            clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                                        }} />

                                        <div className="relative">
                                            <Icon className="w-16 h-16 mb-6" style={{ color: genre.color }} />
                                            <h3 className="text-2xl sm:text-3xl font-black mb-6" style={{ color: genre.color }}>{genre.title}</h3>
                                            <div className="space-y-3">
                                                {genre.items.map((item, j) => (
                                                    <div key={j} className="flex items-center gap-3">
                                                        <div className="w-6 h-6 flex items-center justify-center" style={{ backgroundColor: genre.color }}>
                                                            <span className="text-white text-xs font-black">✓</span>
                                                        </div>
                                                        <span className="text-sm sm:text-base">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* FINAL STATEMENT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#8c52ff] text-white relative">
                <StaggerContainer className="max-w-5xl mx-auto text-center">
                    <StaggerItem>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
                            Artha Gaming/XR: The next evolution of worlds. Intelligent, scalable, and truly owned by players.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link href="/dev/docs" className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#8c52ff] font-black text-base sm:text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Start Building <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/arthaverse/features" className="px-8 sm:px-10 py-4 sm:py-5 border-4 border-white text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-[#8c52ff] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                All Features <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
