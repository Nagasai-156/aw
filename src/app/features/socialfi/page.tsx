'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Brain, Shield, Sparkles, CheckCircle2, ArrowUpRight, Zap, Lock, Eye, TrendingUp, Heart, MessageCircle, Share2, Award, Coins, Target, Database, Code2, Activity, X, Circle } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function SocialFiPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - ZIGZAG SPLIT LAYOUT */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Zigzag Divider */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 90% 100%, 80% 50%, 70% 100%, 60% 50%, 50% 100%, 40% 50%, 30% 100%, 20% 50%, 10% 100%, 0 50%)' }} />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-16 sm:mb-20"
                    >
                        <div className="inline-block px-6 py-3 bg-[#ff4080] text-white text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-8">
                            SocialFi
                        </div>
                        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.9] tracking-tighter mb-8">
                            Where Identity,<br />
                            <span className="text-[#ff4080]">Intelligence,</span><br />
                            and Social Value<br />
                            <span className="text-[#ffc502]">Converge.</span>
                        </h1>
                    </motion.div>

                    {/* Diagonal Comparison Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
                        {/* Traditional - Rotated */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -2 }}
                            animate={{ opacity: 1, rotate: -2 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white text-black p-8 sm:p-10 md:p-12 border-8 border-red-500"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <X className="w-10 h-10 text-red-500" />
                                <h3 className="text-2xl sm:text-3xl font-black">Traditional Social</h3>
                            </div>
                            <div className="space-y-4">
                                {['Products', 'Data Points', 'Monetization Targets'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-red-500 flex items-center justify-center">
                                            <X className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-lg sm:text-xl font-bold line-through text-gray-500">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ArthaVerse - Rotated opposite */}
                        <motion.div
                            initial={{ opacity: 0, rotate: 2 }}
                            animate={{ opacity: 1, rotate: 2 }}
                            transition={{ delay: 0.5 }}
                            className="bg-[#ff4080] text-white p-8 sm:p-10 md:p-12 border-8 border-[#ffc502]"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <CheckCircle2 className="w-10 h-10" />
                                <h3 className="text-2xl sm:text-3xl font-black">ArthaVerse</h3>
                            </div>
                            <div className="space-y-4">
                                {['Owners', 'Sovereign Identities', 'Value Creators', 'AI Economy Participants'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-white flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-[#ff4080]" />
                                        </div>
                                        <span className="text-lg sm:text-xl font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-center mt-16 sm:mt-20 bg-[#ffc502] text-black p-8 sm:p-12 inline-block"
                    >
                        <p className="text-2xl sm:text-3xl md:text-4xl font-black">
                            This is Cognitive Social Networks.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5 BREAKTHROUGHS - STAIRCASE LAYOUT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">5 Breakthroughs</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600">"Your identity. Your data. Your value. Your AI."</p>
                        </div>
                    </StaggerItem>

                    {/* Staircase Layout */}
                    <div className="space-y-0">
                        {[
                            { title: 'Identity-first social layer', desc: 'DID is the social passport.', color: '#8c52ff', icon: Shield },
                            { title: 'AI-personalized feeds', desc: 'Owned by the user, powered by on-chain AI.', color: '#ff4080', icon: Brain },
                            { title: 'Creator-owned content economy', desc: 'Royalties auto-enforced through smart contracts.', color: '#ffc502', icon: Coins },
                            { title: 'Tokenized social reputation', desc: 'Verified by AI, not bought by bots.', color: '#8c52ff', icon: Award },
                            { title: 'Zero-ads, zero-surveillance', desc: 'Monetization flows entirely to users and creators.', color: '#ff4080', icon: Eye }
                        ].map((breakthrough, i) => {
                            const Icon = breakthrough.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div
                                        className="bg-black text-white p-8 sm:p-10 md:p-12 border-t-8"
                                        style={{
                                            borderTopColor: breakthrough.color,
                                            marginLeft: `${i * 2}rem`,
                                            marginRight: `${(4 - i) * 2}rem`
                                        }}
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: breakthrough.color }}>
                                                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">{breakthrough.title}</h3>
                                                <p className="text-base sm:text-lg md:text-xl text-gray-400">{breakthrough.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* 7 PILLARS - MASONRY GRID */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">7 Pillars of Artha SocialFi</h2>
                        </div>
                    </StaggerItem>

                    {/* Masonry-style Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                num: '01',
                                title: 'DID-Centric Social Identity',
                                desc: 'Self-sovereign identity profile backed by ArthaChain\'s DID system.',
                                features: ['Verified humans', 'Portable identity', 'Zero fake accounts', 'Face-embedding verification'],
                                tagline: 'Your DID is your identity.',
                                color: '#8c52ff',
                                icon: Shield,
                                span: 'md:col-span-2'
                            },
                            {
                                num: '02',
                                title: 'AI-Personalized Feeds',
                                desc: 'Personal AI agent curates your experience.',
                                features: ['Curates feed', 'Filters noise', 'Blocks bots', 'Manages well-being'],
                                tagline: 'You control the algorithm.',
                                color: '#ff4080',
                                icon: Brain,
                                span: 'md:col-span-1'
                            },
                            {
                                num: '03',
                                title: 'CreatorFi Economy',
                                desc: 'Tokenize everything you create.',
                                features: ['100% data ownership', 'Instant payouts', 'Immutable royalties'],
                                tagline: 'Creators own their audience.',
                                color: '#ffc502',
                                icon: Coins,
                                span: 'md:col-span-1'
                            },
                            {
                                num: '04',
                                title: 'Social Reputation Engine',
                                desc: 'AI-verified reputation.',
                                features: ['Authenticity', 'Zero bot activity', 'ZK-verified achievements'],
                                tagline: 'Truth-Based Reputation.',
                                color: '#8c52ff',
                                icon: Award,
                                span: 'md:col-span-2'
                            },
                            {
                                num: '05',
                                title: 'Tokenized Social Graph',
                                desc: 'Relationships become programmable assets.',
                                features: ['Watch-to-earn', 'Community economies', 'Fan tokens'],
                                tagline: 'Communities are micro-economies.',
                                color: '#ff4080',
                                icon: Users,
                                span: 'md:col-span-2'
                            },
                            {
                                num: '06',
                                title: 'Content Memory Layer',
                                desc: 'Vector embeddings storage.',
                                features: ['Smart search', 'Semantic browsing', 'Knowledge graphs'],
                                tagline: 'Your personal knowledge space.',
                                color: '#ffc502',
                                icon: Database,
                                span: 'md:col-span-1'
                            },
                            {
                                num: '07',
                                title: 'Creator-AI Agents',
                                desc: 'Autonomous AI assistants.',
                                features: ['Auto-manage community', 'Respond to fans', 'Track analytics'],
                                tagline: 'Digital employees for creators.',
                                color: '#8c52ff',
                                icon: Sparkles,
                                span: 'md:col-span-3'
                            }
                        ].map((pillar, i) => {
                            const Icon = pillar.icon;

                            return (
                                <StaggerItem key={i} className={pillar.span}>
                                    <div className="bg-white text-black p-8 sm:p-10 h-full border-8" style={{ borderColor: pillar.color }}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: pillar.color }}>
                                                <span className="text-3xl font-black text-white">{pillar.num}</span>
                                            </div>
                                            <Icon className="w-12 h-12" style={{ color: pillar.color }} />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-black mb-3">{pillar.title}</h3>
                                        <p className="text-base sm:text-lg text-gray-700 mb-6">{pillar.desc}</p>

                                        <div className="space-y-2 mb-6">
                                            {pillar.features.map((item, j) => (
                                                <div key={j} className="flex items-center gap-2">
                                                    <Circle className="w-2 h-2 fill-current" style={{ color: pillar.color }} />
                                                    <span className="text-sm sm:text-base">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="p-4 border-l-4" style={{ borderLeftColor: pillar.color, backgroundColor: '#f5f5f5' }}>
                                            <p className="text-sm sm:text-base font-bold">{pillar.tagline}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* DEVELOPER CAPABILITIES - CIRCULAR ARRANGEMENT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Developer Capabilities</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: Code2, title: 'SocialGraph SDK', desc: 'Build apps reading & writing to Artha\'s tokenized graph.', color: '#8c52ff' },
                            { icon: Database, title: 'Vector Feed API', desc: 'Create semantic discovery layers using SVDB embeddings.', color: '#ff4080' },
                            { icon: Award, title: 'Reputation Oracle', desc: 'Access trust scores for matchmaking, moderation, or curation.', color: '#ffc502' },
                            { icon: Shield, title: 'DID Auth & Sessionless Login', desc: 'Zero-password login flow powered by DID + PQC keys.', color: '#8c52ff' },
                            { icon: Activity, title: 'AI-Moderation Service', desc: 'Use in-protocol AI to detect spam, toxicity, bots.', color: '#ff4080' }
                        ].map((tool, i) => {
                            const Icon = tool.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-black text-white p-8 sm:p-10 h-full relative overflow-hidden">
                                        {/* Corner accent */}
                                        <div className="absolute top-0 right-0 w-20 h-20" style={{ backgroundColor: tool.color, clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

                                        <div className="relative">
                                            <Icon className="w-12 h-12 sm:w-16 sm:h-16 mb-6" style={{ color: tool.color }} />
                                            <h3 className="text-xl sm:text-2xl font-black mb-4">{tool.title}</h3>
                                            <p className="text-base sm:text-lg text-gray-400">{tool.desc}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* USE CASES - OVERLAPPING CARDS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Use Cases</h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">Enterprise & App Builders</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { title: 'Social Apps', items: ['AI-powered social networks', 'Decentralized microblogging', 'Knowledge networks', 'Celebrity fan communities'], color: '#8c52ff' },
                            { title: 'Creator Platforms', items: ['NFT marketplaces', 'Token-gated clubs', 'Creator tokens', 'AI-driven content platforms'], color: '#ff4080' },
                            { title: 'Community Networks', items: ['DAOs', 'Learning communities', 'Social identity apps'], color: '#ffc502' },
                            { title: 'Brands', items: ['Loyalty programs', 'Gamified social engagement', 'Hyper-personalized experiences'], color: '#8c52ff' }
                        ].map((category, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white text-black p-8 sm:p-10 md:p-12 h-full border-t-8" style={{ borderTopColor: category.color }}>
                                    <h3 className="text-2xl sm:text-3xl font-black mb-6" style={{ color: category.color }}>{category.title}</h3>
                                    <div className="space-y-3">
                                        {category.items.map((item, j) => (
                                            <div key={j} className="flex items-start gap-3">
                                                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: category.color }}>
                                                    <span className="text-white text-xs font-black">{j + 1}</span>
                                                </div>
                                                <span className="text-base sm:text-lg">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* WHY ARTHACHAIN - PYRAMID LAYOUT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">Why ArthaChain Is Best for SocialFi</h2>
                        </div>
                    </StaggerItem>

                    <div className="space-y-6">
                        {[
                            { num: '1', reason: 'Ultra-high TPS', desc: 'Supports millions of daily social interactions', color: '#8c52ff' },
                            { num: '2', reason: 'DID-native', desc: 'No bots, no fake accounts', color: '#ff4080' },
                            { num: '3', reason: 'AI-native', desc: 'Personalized feeds, automated moderation', color: '#ffc502' },
                            { num: '4', reason: 'Vector-native', desc: 'Semantic social graph', color: '#8c52ff' },
                            { num: '5', reason: 'Quantum-secure', desc: 'Social identity protected forever', color: '#ff4080' },
                            { num: '6', reason: 'DualChain architecture', desc: 'Content storage + fast execution', color: '#ffc502' },
                            { num: '7', reason: 'Micro-economies', desc: 'Every community becomes its own economy', color: '#8c52ff' }
                        ].map((item, i) => (
                            <StaggerItem key={i}>
                                <div
                                    className="bg-black text-white p-6 sm:p-8 flex items-center gap-4 sm:gap-6"
                                    style={{
                                        marginLeft: `${i * 1.5}rem`,
                                        marginRight: `${i * 1.5}rem`
                                    }}
                                >
                                    <div className="w-16 h-16 flex items-center justify-center flex-shrink-0 border-4" style={{ borderColor: item.color }}>
                                        <span className="text-3xl font-black" style={{ color: item.color }}>{item.num}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black mb-1">{item.reason}</h3>
                                        <p className="text-sm sm:text-base text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem>
                        <div className="mt-12 sm:mt-16 bg-[#ff4080] text-white p-8 sm:p-12 md:p-16 text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black">
                                No other blockchain provides this combination.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* FINAL STATEMENT - NO GRADIENT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-5xl mx-auto text-center relative z-10">
                    <StaggerItem>
                        <div className="border-8 border-[#ff4080] p-8 sm:p-12 md:p-16 mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
                                Artha SocialFi transforms social networks from consumption platforms into intelligent, sovereign economies powered by identity, AI, and decentralized ownership.
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link href="/coming-soon" className="px-8 sm:px-10 py-4 sm:py-5 bg-[#ff4080] text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Start Building <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/arthaverse/features" className="px-8 sm:px-10 py-4 sm:py-5 border-4 border-white text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3">
                                All Features <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
