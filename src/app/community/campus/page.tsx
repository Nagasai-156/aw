'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Code2, Brain, GraduationCap, Building2, Zap, Shield, Database, Network, Award, Target, Sparkles, GitBranch, BookOpen, Cpu, Lock, Layers, Rocket, Star, CheckCircle2, ArrowUpRight, Video, FileText, Mic, Globe, MessageCircle, Lightbulb, TrendingUp, UserPlus, Briefcase, Trophy, Calendar } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function CampusPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - CIRCUIT GROWTH ANIMATION */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Animated circuit paths */}
                <div className="absolute inset-0 opacity-20">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-px bg-gradient-to-r from-transparent via-[#8c52ff] to-transparent"
                            style={{
                                top: `${20 + i * 15}%`,
                                left: 0,
                                right: 0
                            }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scaleX: [0.8, 1, 0.8]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.3
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <div className="inline-block px-6 py-3 bg-[#8c52ff] text-white text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-8">
                            Artha Campus Program
                        </div>

                        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter mb-8">
                            Empowering India's<br />
                            Next Generation of<br />
                            <span className="text-[#8c52ff]">AI</span>{' '}
                            <span className="text-[#ffc502]">&</span>{' '}
                            <span className="text-[#ff4080]">Blockchain</span>{' '}
                            Innovators
                        </h1>

                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
                            A nationwide initiative to bring AI, blockchain, decentralized identity, and quantum-secure technologies into universities, enabling students to build the future of the intelligent internet.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#join" className="px-8 py-4 bg-[#8c52ff] text-white font-black uppercase tracking-wider hover:bg-[#ff4080] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Start a Campus Chapter <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="#leader" className="px-8 py-4 border-4 border-white text-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Become a Campus Leader
                            </Link>
                            <Link href="#guide" className="px-8 py-4 bg-[#ffc502] text-black font-black uppercase tracking-wider hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Get the Student Guide
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STORY - DIAGONAL SPLIT BLOCKS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                                India has the world's largest student developer population.<br />
                                Now it needs the right platform.
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="space-y-0">
                        <StaggerItem>
                            <div className="bg-black text-white p-8 sm:p-12 md:p-16 relative" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">
                                    ArthaChain is built on the belief that the next global wave of innovation will come from young minds.
                                </p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-[#8c52ff] text-white p-8 sm:p-12 md:p-16 relative" style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%)' }}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <p className="text-3xl sm:text-4xl font-black mb-2">Not from</p>
                                        <p className="text-xl sm:text-2xl">Silicon Valley</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl sm:text-4xl font-black mb-2">Not from</p>
                                        <p className="text-xl sm:text-2xl">Old Institutions</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl sm:text-4xl font-black mb-2 text-[#ffc502]">But from</p>
                                        <p className="text-xl sm:text-2xl font-bold">Indian Students</p>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-[#ff4080] text-white p-8 sm:p-12 md:p-16 relative" style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)' }}>
                                <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed">
                                    The Campus Program brings ArthaChain's intelligent infrastructure directly into universities. AI Consensus, Dual VM, DID, Quantum Security, SVDB Storage.
                                </p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-[#ffc502] text-black p-8 sm:p-12 md:p-16 text-center">
                                <p className="text-3xl sm:text-4xl md:text-5xl font-black">
                                    So students can learn, build, innovate, and lead the decentralized future.
                                </p>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* WHAT WE OFFER - BENTO GRID */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">What the Campus Program Offers</h2>
                            <p className="text-xl sm:text-2xl text-gray-400">A modern education experience that universities don't teach yet</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: BookOpen,
                                title: 'Blockchain + AI Curriculum',
                                items: ['Hands-on modules', 'Dual-VM smart contract tutorials', 'AI-powered blockchain labs', 'Quantum security basics'],
                                color: '#8c52ff'
                            },
                            {
                                icon: Users,
                                title: 'Campus Chapters',
                                items: ['Self-organized student groups', 'Guided by Artha mentors', 'Regular meetups', 'Collaborative learning'],
                                color: '#ff4080'
                            },
                            {
                                icon: Cpu,
                                title: 'Research Labs & Projects',
                                items: ['AI scoring models', 'Sharding systems', 'ZK circuits', 'Decentralized identity'],
                                color: '#ffc502'
                            },
                            {
                                icon: Code2,
                                title: 'Student Developer Tools',
                                items: ['Local testnet kits', 'Code templates', 'SDKs', 'Debugging sandboxes', 'Practice challenges'],
                                color: '#8c52ff'
                            },
                            {
                                icon: Users,
                                title: 'Industry Mentorship',
                                items: ['Diigoo Tech engineers', 'ArthaCore protocol architects', 'AI researchers', 'Startup founders'],
                                color: '#ff4080'
                            },
                            {
                                icon: Briefcase,
                                title: 'Opportunities Beyond Campus',
                                items: ['Internships', 'Job placements', 'Hackathons', 'Grants', 'Accelerator programs'],
                                color: '#ffc502'
                            }
                        ].map((offer, i) => {
                            const Icon = offer.icon;
                            return (
                                <StaggerItem key={i}>
                                    <motion.div
                                        className="bg-white text-black p-6 sm:p-8 h-full"
                                        whileHover={{ y: -10 }}
                                    >
                                        <div
                                            className="w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center"
                                            style={{ backgroundColor: offer.color }}
                                        >
                                            <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-black mb-4">{offer.title}</h3>
                                        <div className="space-y-2">
                                            {offer.items.map((item, j) => (
                                                <div key={j} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: offer.color }} />
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

            {/* HOW CHAPTER WORKS - TIMELINE FLOW */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">How a Campus Chapter Works</h2>
                            <p className="text-xl sm:text-2xl text-gray-600">Simple, scalable, powerful</p>
                        </div>
                    </StaggerItem>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute top-0 left-4 sm:left-1/2 w-1 h-full bg-gradient-to-b from-[#8c52ff] via-[#ff4080] to-[#ffc502] hidden md:block" />

                        <div className="space-y-12">
                            {[
                                {
                                    step: '01',
                                    title: 'Form a Core Team',
                                    desc: '3 to 6 dedicated students become the Artha Leads',
                                    roles: ['Technical Lead', 'Community Lead', 'Research Lead', 'Events Lead'],
                                    color: '#8c52ff',
                                    side: 'left'
                                },
                                {
                                    step: '02',
                                    title: 'Official Chapter Setup',
                                    desc: 'ArthaChain provides everything you need',
                                    roles: ['Chapter DID Credential', 'Branding Kit', 'Mentor assignment', 'Starter kit (slides, flyers, curriculum)'],
                                    color: '#ff4080',
                                    side: 'right'
                                },
                                {
                                    step: '03',
                                    title: 'Run Events & Workshops',
                                    desc: 'Chapters conduct regular activities',
                                    roles: ['Bootcamps', 'Hackathons', 'Study groups', 'Protocol deep dives', 'AI agent building sessions'],
                                    color: '#ffc502',
                                    side: 'left'
                                },
                                {
                                    step: '04',
                                    title: 'Build & Showcase Projects',
                                    desc: 'All chapter projects go into the ecosystem',
                                    roles: ['ArthaChain Showcase', 'Innovation Challenges', 'Fellowship & Grant Pool'],
                                    color: '#8c52ff',
                                    side: 'right'
                                }
                            ].map((step, i) => (
                                <StaggerItem key={i}>
                                    <div className={`flex flex-col md:flex-row items-center gap-6 ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="flex-1 md:w-1/2" />
                                        <div
                                            className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center flex-shrink-0 z-10"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            <span className="text-3xl sm:text-4xl font-black text-white">{step.step}</span>
                                        </div>
                                        <div className="flex-1 md:w-1/2">
                                            <div className="bg-black text-white p-6 sm:p-8">
                                                <h3 className="text-2xl sm:text-3xl font-black mb-3">{step.title}</h3>
                                                <p className="text-base sm:text-lg mb-4 text-gray-400">{step.desc}</p>
                                                <div className="space-y-2">
                                                    {step.roles.map((role, j) => (
                                                        <div key={j} className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                                                            <span className="text-sm sm:text-base">{role}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </div>
                </StaggerContainer>
            </section>

            {/* STUDENT PATHWAY - 4 TRACK CARDS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Choose Your Journey</h2>
                            <p className="text-xl sm:text-2xl text-gray-400">The Student Pathway</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {[
                            {
                                icon: Code2,
                                title: 'Blockchain Developer Track',
                                desc: 'Learn Dual-VM: Solidity + Rust + WASM. Deploy smart contracts in parallel lanes.',
                                color: '#8c52ff'
                            },
                            {
                                icon: Brain,
                                title: 'AI Engineer Track',
                                desc: 'Work on NodeScore AI, predictive routing, self-healing network models.',
                                color: '#ff4080'
                            },
                            {
                                icon: Cpu,
                                title: 'Research & Protocol Track',
                                desc: 'Explore Quantum-SVBFT, PQ signatures, sharding algorithms, DAG ordering.',
                                color: '#ffc502'
                            },
                            {
                                icon: Rocket,
                                title: 'Builder Track',
                                desc: 'For founders & creators. Build SocialFi, DeFi, DID, Gaming, AI tools. Launch your first startup on ArthaChain.',
                                color: '#8c52ff'
                            }
                        ].map((track, i) => {
                            const Icon = track.icon;
                            return (
                                <StaggerItem key={i}>
                                    <motion.div
                                        className="bg-white text-black p-8 sm:p-10 h-full relative overflow-hidden"
                                        whileHover={{
                                            boxShadow: `0 0 40px ${track.color}`,
                                            scale: 1.05
                                        }}
                                    >
                                        <div
                                            className="absolute top-0 right-0 w-32 h-32 opacity-10"
                                            style={{ backgroundColor: track.color }}
                                        />
                                        <Icon className="w-14 h-14 sm:w-16 sm:h-16 mb-6 relative z-10" style={{ color: track.color }} />
                                        <h3 className="text-2xl sm:text-3xl font-black mb-4 relative z-10">{track.title}</h3>
                                        <p className="text-base sm:text-lg text-gray-700 relative z-10">{track.desc}</p>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* BADGES & CREDENTIALS - SHOWCASE GRID */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Badges, Credentials & On-Chain Identity</h2>
                            <p className="text-xl sm:text-2xl text-gray-600">Students LOVE credentials</p>
                        </div>
                    </StaggerItem>

                    {/* DID Credential */}
                    <StaggerItem>
                        <div className="bg-[#8c52ff] text-white p-8 sm:p-12 md:p-16 mb-12">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <Award className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0" />
                                <div>
                                    <h3 className="text-3xl sm:text-4xl font-black mb-4">DID Student Credential</h3>
                                    <p className="text-xl sm:text-2xl mb-6">Each student receives a decentralized identity verifying:</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                                        {['Skills', 'Contributions', 'Projects', 'Attendance', 'Leadership roles'].map((item, i) => (
                                            <div key={i} className="bg-white text-[#8c52ff] px-4 py-3 text-center font-black text-sm sm:text-base">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Achievement Badges */}
                    <StaggerItem>
                        <div className="mb-12">
                            <h3 className="text-3xl sm:text-4xl font-black mb-8 text-center">Achievement Badges</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                                {[
                                    { label: 'Chapter Lead', icon: Star, color: '#8c52ff' },
                                    { label: 'Developer', icon: Code2, color: '#ff4080' },
                                    { label: 'Researcher', icon: Brain, color: '#ffc502' },
                                    { label: 'Innovator', icon: Lightbulb, color: '#8c52ff' },
                                    { label: 'Event Organizer', icon: Calendar, color: '#ff4080' },
                                    { label: 'Hackathon Winner', icon: Trophy, color: '#ffc502' },
                                    { label: 'Protocol Scholar', icon: BookOpen, color: '#8c52ff' }
                                ].map((badge, i) => {
                                    const Icon = badge.icon;
                                    return (
                                        <div key={i} className="text-center">
                                            <div
                                                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: badge.color }}
                                            >
                                                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                            </div>
                                            <p className="text-xs sm:text-sm font-bold">{badge.label}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Portfolio Ready */}
                    <StaggerItem>
                        <div className="bg-black text-white p-8 sm:p-12 text-center">
                            <h3 className="text-3xl sm:text-4xl font-black mb-6">Portfolio Ready</h3>
                            <p className="text-xl sm:text-2xl mb-8">Everything is verified on-chain. Students can share it on:</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {['LinkedIn', 'Resumes', 'Job interviews', 'Scholarship applications'].map((platform, i) => (
                                    <div key={i} className="px-6 py-3 bg-[#8c52ff] text-white font-black text-base sm:text-lg">
                                        {platform}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* HOW TO JOIN - 3 STEP PROCESS */}
            <section id="join" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">How to Join</h2>
                            <p className="text-xl sm:text-2xl text-gray-400">Simple 3-step process</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                        {[
                            { step: '1', title: 'Fill the Campus Chapter Application', color: '#8c52ff' },
                            { step: '2', title: 'Interview with ArthaCore Community Team', color: '#ff4080' },
                            { step: '3', title: 'Get your Chapter DID + Starter Kit', color: '#ffc502' }
                        ].map((step, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white text-black p-8 text-center h-full">
                                    <div
                                        className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        <span className="text-4xl font-black text-white">{step.step}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black">{step.title}</h3>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>

                    {/* Eligibility */}
                    <StaggerItem>
                        <div className="bg-white text-black p-8 sm:p-12">
                            <h3 className="text-3xl sm:text-4xl font-black mb-6 text-center">Eligibility</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'University-affiliated',
                                    'Minimum team of 3 students',
                                    'Must commit to 3 to 4 events per semester'
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
                            Become one of the founding campuses of the Intelligent Decentralized Movement.
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                            <Link href="/contact" className="px-8 py-5 bg-white text-[#8c52ff] font-black text-base sm:text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Start a Chapter <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="px-8 py-5 border-4 border-white text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-[#8c52ff] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Become a Campus Leader
                            </Link>
                            <Link href="#guide" className="px-8 py-5 bg-[#ffc502] text-black font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Download the Guide <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
