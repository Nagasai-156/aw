'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Code2, Brain, GraduationCap, Building2, Zap, Shield, Database, Network, Award, Target, Sparkles, GitBranch, BookOpen, Cpu, Lock, Layers, Rocket, Star, CheckCircle2, ArrowUpRight, Video, FileText, Mic, Globe, MessageCircle, Lightbulb, TrendingUp, UserPlus } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function AmbassadorsPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - RADIAL SPOTLIGHT */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Radial spotlight effect */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8c52ff] rounded-full blur-[120px] opacity-20" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff4080] rounded-full blur-[100px] opacity-20" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <div className="inline-block px-6 py-3 bg-[#8c52ff] text-white text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-8">
                            Artha Ambassadors
                        </div>

                        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter mb-8">
                            Lead, Inspire,<br />
                            and Shape the Future<br />
                            of <span className="text-[#8c52ff]">Intelligent</span>{' '}
                            <span className="text-[#ff4080]">Decentralization</span>
                        </h1>

                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
                            Artha Ambassadors are not just promoters. They are knowledge leaders, educators, creators, and community architects representing ArthaChain across the world.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#apply" className="px-8 py-4 bg-[#8c52ff] text-white font-black uppercase tracking-wider hover:bg-[#ff4080] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Apply as Ambassador <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="#guide" className="px-8 py-4 border-4 border-white text-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Download Ambassador Guide
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STORY - CASCADING BLOCKS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                                In a world shifting to AI and decentralized systems,<br />people need leaders.
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="space-y-8">
                        <StaggerItem>
                            <div className="bg-black text-white p-8 sm:p-12 transform sm:translate-x-0">
                                <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed">
                                    ArthaChain introduces a new era of blockchain, one powered by AI, secured by quantum cryptography, and scaled across a dual-chain architecture.
                                </p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-[#8c52ff] text-white p-8 sm:p-12 transform sm:translate-x-12">
                                <p className="text-xl sm:text-2xl leading-relaxed">
                                    But technologies don't spread by themselves. People spread ideas. Communities spread change.
                                </p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-[#ff4080] text-white p-8 sm:p-12 transform sm:translate-x-24">
                                <p className="text-xl sm:text-2xl leading-relaxed">
                                    Ambassadors carry the torch of innovation, teaching, sharing, inspiring, and helping the world understand the future of intelligent blockchains.
                                </p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-[#ffc502] text-black p-8 sm:p-12 md:p-16 text-center">
                                <p className="text-3xl sm:text-4xl md:text-5xl font-black">
                                    This program is built for individuals who want to lead movements, not just participate in communities.
                                </p>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* WHO ARE AMBASSADORS - CIRCULAR ORBIT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Who Are Artha Ambassadors?</h2>
                        </div>
                    </StaggerItem>

                    {/* Profile icons in circular layout */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
                        {[
                            { icon: Mic, label: 'Tech Evangelists', color: '#8c52ff' },
                            { icon: Brain, label: 'AI Researchers', color: '#ff4080' },
                            { icon: Code2, label: 'Blockchain Devs', color: '#ffc502' },
                            { icon: GraduationCap, label: 'Student Leaders', color: '#8c52ff' },
                            { icon: Video, label: 'Content Creators', color: '#ff4080' },
                            { icon: Sparkles, label: 'Designers', color: '#ffc502' },
                            { icon: Rocket, label: 'Startup Founders', color: '#8c52ff' },
                            { icon: Users, label: 'Community Managers', color: '#ff4080' }
                        ].map((profile, i) => {
                            const Icon = profile.icon;
                            return (
                                <StaggerItem key={i}>
                                    <motion.div
                                        className="text-center"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div
                                            className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: profile.color }}
                                        >
                                            <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                                        </div>
                                        <p className="text-sm sm:text-base font-bold">{profile.label}</p>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </div>

                    {/* Core Identity */}
                    <StaggerItem>
                        <div className="bg-white text-black p-8 sm:p-12 md:p-16">
                            <h3 className="text-3xl sm:text-4xl font-black mb-8 text-center">Core Identity</h3>
                            <p className="text-xl sm:text-2xl mb-8 text-center">Ambassadors represent ArthaChain in:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                {['Their city', 'Their company/startup', 'Their university', 'Their online communities'].map((place, i) => (
                                    <div key={i} className="bg-[#8c52ff] text-white p-6 text-center">
                                        <p className="text-lg sm:text-xl font-black">{place}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xl sm:text-2xl font-bold text-center mt-8">
                                They are the frontline educators and guardians of the Artha ecosystem.
                            </p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* RESPONSIBILITIES - PENTAGON CARDS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Responsibilities</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                        {[
                            {
                                icon: GraduationCap,
                                title: 'Educate',
                                items: ['Host workshops', 'Run webinars', 'Teach ArthaCore', 'Explain AI Consensus', 'Cover DID & Security'],
                                color: '#8c52ff'
                            },
                            {
                                icon: FileText,
                                title: 'Create',
                                items: ['Write blogs', 'Produce videos', 'Build guides', 'Research summaries', 'Visual explainers'],
                                color: '#ff4080'
                            },
                            {
                                icon: Mic,
                                title: 'Advocate',
                                items: ['Attend hackathons', 'Speak at conferences', 'Join campus events', 'Represent online', 'Build presence'],
                                color: '#ffc502'
                            },
                            {
                                icon: UserPlus,
                                title: 'Onboard',
                                items: ['Help build dApps', 'Integrate DID', 'Migrate to Artha', 'Deploy AI agents', 'Use SVDB'],
                                color: '#8c52ff'
                            },
                            {
                                icon: Users,
                                title: 'Support',
                                items: ['Run local groups', 'Language chats', 'Study circles', 'Builder guilds', 'Regional communities'],
                                color: '#ff4080'
                            }
                        ].map((resp, i) => {
                            const Icon = resp.icon;
                            return (
                                <StaggerItem key={i}>
                                    <motion.div
                                        className="bg-black text-white p-6 sm:p-8 h-full"
                                        whileHover={{ y: -10 }}
                                    >
                                        <div
                                            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: resp.color }}
                                        >
                                            <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-black mb-6 text-center">{resp.title}</h3>
                                        <div className="space-y-2">
                                            {resp.items.map((item, j) => (
                                                <div key={j} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: resp.color }} />
                                                    <span className="text-sm sm:text-base">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* BADGES & RECOGNITION - LEVEL PROGRESSION */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Badges & Recognition</h2>
                        </div>
                    </StaggerItem>

                    {/* DID Badge */}
                    <StaggerItem>
                        <div className="bg-[#8c52ff] text-white p-8 sm:p-12 md:p-16 mb-12 text-center">
                            <Award className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6" />
                            <h3 className="text-3xl sm:text-4xl font-black mb-4">DID Ambassador Credential</h3>
                            <p className="text-xl sm:text-2xl">
                                Every ambassador receives an on-chain DID Ambassador Badge, verified and soulbound.
                            </p>
                        </div>
                    </StaggerItem>

                    {/* Ranking System - Staircase */}
                    <StaggerItem>
                        <div className="mb-12">
                            <h3 className="text-3xl sm:text-4xl font-black mb-8 text-center">Ranking System</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { level: 'Level 1', title: 'Initiator', desc: 'Intro-level contribution', color: '#8c52ff', height: 'h-40' },
                                    { level: 'Level 2', title: 'Builder', desc: 'Workshops, guides, content', color: '#ff4080', height: 'h-48' },
                                    { level: 'Level 3', title: 'Architect', desc: 'Regional leadership, large events', color: '#ffc502', height: 'h-56' },
                                    { level: 'Level 4', title: 'Master Ambassador', desc: 'Global leader, core evangelist', color: '#8c52ff', height: 'h-64' }
                                ].map((rank, i) => (
                                    <StaggerItem key={i}>
                                        <div
                                            className={`bg-white text-black p-6 sm:p-8 ${rank.height} flex flex-col justify-end`}
                                        >
                                            <div
                                                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: rank.color }}
                                            >
                                                <span className="text-xl sm:text-2xl font-black text-white">{i + 1}</span>
                                            </div>
                                            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2" style={{ color: rank.color }}>
                                                {rank.level}
                                            </p>
                                            <h4 className="text-xl sm:text-2xl font-black mb-2">{rank.title}</h4>
                                            <p className="text-sm sm:text-base text-gray-700">{rank.desc}</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Perks */}
                    <StaggerItem>
                        <div className="bg-white text-black p-8 sm:p-12">
                            <h3 className="text-3xl sm:text-4xl font-black mb-8 text-center">Perks</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { icon: Award, text: 'Exclusive merch & brand kits' },
                                    { icon: Zap, text: 'Access to Alpha Testnet' },
                                    { icon: Globe, text: 'Invitations to global events' },
                                    { icon: Sparkles, text: 'Early access to tech updates' },
                                    { icon: Star, text: 'Feature on official website' },
                                    { icon: Users, text: 'Private sessions with core team' }
                                ].map((perk, i) => {
                                    const Icon = perk.icon;
                                    return (
                                        <div key={i} className="flex items-center gap-4 p-4 border-l-4 border-[#8c52ff]">
                                            <Icon className="w-8 h-8 text-[#8c52ff] flex-shrink-0" />
                                            <p className="text-sm sm:text-base font-bold">{perk.text}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* PROGRAM TRACKS - 4 PATHS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Choose Your Path</h2>
                            <p className="text-xl sm:text-2xl text-gray-600">Program Tracks</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {[
                            {
                                icon: Code2,
                                title: 'Developer Ambassador',
                                desc: 'Lead technical workshops, build tutorials, help developers deploy.',
                                color: '#8c52ff'
                            },
                            {
                                icon: Brain,
                                title: 'AI Ambassador',
                                desc: 'Focus on AI tools, NodeScore models, AI Agents, and SVDB use cases.',
                                color: '#ff4080'
                            },
                            {
                                icon: Users,
                                title: 'Community Ambassador',
                                desc: 'Organize meetups, chapters, and regional communities.',
                                color: '#ffc502'
                            },
                            {
                                icon: Building2,
                                title: 'Enterprise Ambassador',
                                desc: 'Connect enterprises, institutions, and founders to Artha solutions.',
                                color: '#8c52ff'
                            }
                        ].map((track, i) => {
                            const Icon = track.icon;
                            return (
                                <StaggerItem key={i}>
                                    <motion.div
                                        className="bg-black text-white p-8 sm:p-10 md:p-12 h-full"
                                        whileHover={{
                                            boxShadow: `0 0 40px ${track.color}`,
                                            scale: 1.05
                                        }}
                                    >
                                        <div
                                            className="w-20 h-20 sm:w-24 sm:h-24 mb-6 flex items-center justify-center"
                                            style={{ backgroundColor: track.color }}
                                        >
                                            <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">{track.title}</h3>
                                        <p className="text-base sm:text-lg text-gray-400">{track.desc}</p>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* HOW TO APPLY - 3 STEP FUNNEL */}
            <section id="apply" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">How to Apply</h2>
                            <p className="text-xl sm:text-2xl text-gray-400">3-Step Application Funnel</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-8">
                        {[
                            {
                                step: '01',
                                title: 'Submit Application Form',
                                desc: 'Basic details and motivation',
                                color: '#8c52ff'
                            },
                            {
                                step: '02',
                                title: 'Complete Ambassador Task',
                                desc: 'Write a technical explainer, host a mini-event, create an infographic, or record a short lecture',
                                color: '#ff4080'
                            },
                            {
                                step: '03',
                                title: 'Interview with ArthaCore Team',
                                desc: 'Final selection and onboarding',
                                color: '#ffc502'
                            }
                        ].map((step, i) => (
                            <StaggerItem key={i}>
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div
                                        className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        <span className="text-4xl sm:text-5xl font-black text-white">{step.step}</span>
                                    </div>
                                    <div className="flex-1 bg-white text-black p-6 sm:p-8 text-center md:text-left">
                                        <h3 className="text-2xl sm:text-3xl font-black mb-3">{step.title}</h3>
                                        <p className="text-base sm:text-lg text-gray-700">{step.desc}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    {/* Eligibility */}
                    <StaggerItem>
                        <div className="bg-white text-black p-8 sm:p-12 mt-12">
                            <h3 className="text-3xl sm:text-4xl font-black mb-6 text-center">Eligibility</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Must be 18+',
                                    'Must understand blockchain OR be willing to learn',
                                    'Must represent Artha professionally',
                                    'Must be active on at least one platform'
                                ].map((req, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#8c52ff] flex-shrink-0" />
                                        <span className="text-base sm:text-lg font-bold">{req}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* FINAL CTA */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#8c52ff] text-white relative">
                <StaggerContainer className="max-w-5xl mx-auto text-center">
                    <StaggerItem>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 leading-tight">
                            Become the voice of ArthaChain in your region.
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                            <Link href="/contact" className="px-8 py-5 bg-white text-[#8c52ff] font-black text-base sm:text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Apply Now <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="#guide" className="px-8 py-5 border-4 border-white text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-[#8c52ff] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Download Program Guide
                            </Link>
                            <Link href="/community/collective" className="px-8 py-5 bg-black text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-[#ff4080] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Join Ambassador Community <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
