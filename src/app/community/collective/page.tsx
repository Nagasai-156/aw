'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Code2, Brain, GraduationCap, Building2, Zap, Shield, Database, Network, Award, Target, Sparkles, GitBranch, BookOpen, Cpu, Lock, Layers, Rocket, Star, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function CollectivePage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - NETWORK GROWTH VISUALIZATION */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Animated network nodes */}
                <div className="absolute inset-0">
                    {[
                        { top: '20%', left: '15%', color: '#8c52ff', delay: 0 },
                        { top: '30%', left: '75%', color: '#ff4080', delay: 0.2 },
                        { top: '60%', left: '25%', color: '#ffc502', delay: 0.4 },
                        { top: '70%', left: '80%', color: '#8c52ff', delay: 0.6 },
                        { top: '45%', left: '50%', color: '#ff4080', delay: 0.8 }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 rounded-full"
                            style={{ top: node.top, left: node.left, backgroundColor: node.color }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: node.delay
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
                            Artha Collectives
                        </div>

                        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter mb-8">
                            The Global Network<br />
                            Building the<br />
                            <span className="text-[#8c52ff]">Intelligent</span>{' '}
                            <span className="text-[#ff4080]">Decentralized</span>{' '}
                            <span className="text-[#ffc502]">Future</span>
                        </h1>

                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-12">
                            A decentralized community of engineers, founders, researchers, and creators contributing to ArthaChain's evolution from core protocol to AI systems.
                        </p>

                        {/* Network icons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { icon: Code2, label: 'Devs', color: '#8c52ff' },
                                { icon: Rocket, label: 'Startups', color: '#ff4080' },
                                { icon: Brain, label: 'AI Agents', color: '#ffc502' },
                                { icon: GraduationCap, label: 'Students', color: '#8c52ff' },
                                { icon: Building2, label: 'Enterprises', color: '#ff4080' }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 * i, type: 'spring' }}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <div
                                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: item.color }}
                                        >
                                            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                        </div>
                                        <span className="text-xs sm:text-sm font-bold">{item.label}</span>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#join" className="px-8 py-4 bg-[#8c52ff] text-white font-black uppercase tracking-wider hover:bg-[#ff4080] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Join the Collective <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="#contribute" className="px-8 py-4 border-4 border-white text-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Contribute to Core Tech
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STORY - SCROLL-REVEAL NARRATIVE */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-5xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">A Movement Rooted in India,<br />Built for the World</h2>
                        </div>
                    </StaggerItem>

                    <div className="space-y-12">
                        <StaggerItem>
                            <div className="bg-black text-white p-8 sm:p-12 md:p-16">
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">
                                    ArthaChain did not begin as a product. It started as a research movement inside Diigoo Tech.
                                </p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-[#8c52ff] text-white p-8 sm:p-12 md:p-16">
                                <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed">
                                    Inspired by ancient Indian knowledge systems where learning was collaborative, self-organized, and decentralized, Artha Collectives bring the same philosophy to blockchain and AI.
                                </p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-[#ff4080] text-white p-8 sm:p-10">
                                    <h3 className="text-2xl sm:text-3xl font-black mb-4">Just like Gurukulas</h3>
                                    <p className="text-base sm:text-lg">Where students and teachers co-created knowledge...</p>
                                </div>
                                <div className="bg-[#ffc502] text-black p-8 sm:p-10">
                                    <h3 className="text-2xl sm:text-3xl font-black mb-4">Artha Collectives</h3>
                                    <p className="text-base sm:text-lg">Are self-driven circles of innovation that shape the network itself.</p>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-black text-white p-8 sm:p-12 md:p-16 text-center border-8 border-[#8c52ff]">
                                <p className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">This is not a fan club.</p>
                                <p className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">Not a Discord server.</p>
                                <p className="text-3xl sm:text-4xl md:text-5xl font-black mb-8">Not a passive community.</p>
                                <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#8c52ff]">
                                    This is the intelligence layer behind ArthaChain.
                                </p>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* COLLECTIVE MODEL - 3 EXPANDING PANELS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">How We Work</h2>
                            <p className="text-xl sm:text-2xl text-gray-400">The Collective Model</p>
                        </div>
                    </StaggerItem>

                    <div className="space-y-6">
                        {[
                            {
                                num: '01',
                                title: 'Micro Teams',
                                desc: 'Small, autonomous groups solve highly focused problems',
                                points: ['Improving consensus', 'Building libraries', 'Testing sharding', 'Writing developer tools', 'Creating AI models for NodeScore'],
                                color: '#8c52ff'
                            },
                            {
                                num: '02',
                                title: 'Contribution Tracks',
                                desc: 'Each contributor self-selects their path',
                                points: ['Core Protocol', 'AI Infrastructure', 'Tools & SDKs', 'Documentation', 'Security Research', 'Product & Design', 'Startup Builders', 'Enterprise Integrations'],
                                color: '#ff4080'
                            },
                            {
                                num: '03',
                                title: 'Collective Intelligence',
                                desc: 'Every contribution becomes part of the Artha Intelligence Layer',
                                points: ['On-chain DID credentials', 'Vector memories in ArthaFlow', 'AI-processed cluster insights'],
                                color: '#ffc502'
                            }
                        ].map((model, i) => (
                            <StaggerItem key={i}>
                                <motion.div
                                    className="bg-white text-black p-8 sm:p-10 md:p-12"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div
                                            className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: model.color }}
                                        >
                                            <span className="text-4xl sm:text-5xl font-black text-white">{model.num}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-3xl sm:text-4xl font-black mb-3">{model.title}</h3>
                                            <p className="text-lg sm:text-xl mb-6 text-gray-700">{model.desc}</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {model.points.map((point, j) => (
                                                    <div key={j} className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: model.color }} />
                                                        <span className="text-sm sm:text-base">{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* WHO IS IT FOR - PENTAGON LAYOUT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Who Is Artha Collectives For?</h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                        {[
                            { icon: Code2, title: 'Developers', desc: 'Build protocol modules, SDKs, tools, libraries, and audits.', color: '#8c52ff' },
                            { icon: Brain, title: 'AI Researchers', desc: 'Train models, optimize inference, improve NodeScore logic.', color: '#ff4080' },
                            { icon: GraduationCap, title: 'Students', desc: 'Learn, build real projects, get DID credentials, join testnet research.', color: '#ffc502' },
                            { icon: Rocket, title: 'Startups', desc: 'Launch AI, DID, SocialFi, DeFi, and enterprise-grade apps on ArthaChain.', color: '#8c52ff' },
                            { icon: Building2, title: 'Enterprises', desc: 'Collaborate on security, digital identity, decentralized compute, and data sovereignty use cases.', color: '#ff4080' }
                        ].map((audience, i) => {
                            const Icon = audience.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-black text-white p-6 sm:p-8 h-full text-center">
                                        <div
                                            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: audience.color }}
                                        >
                                            <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-black mb-4">{audience.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-400">{audience.desc}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* CONTRIBUTION PATHWAYS - GLOWING GRID */}
            <section id="contribute" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Contribution Pathways</h2>
                            <p className="text-xl sm:text-2xl text-gray-400">Choose Your Path</p>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                title: 'Core Protocol',
                                tech: 'SVCP, Quantum-SVBFT, DAG, Sharding, Dual VM',
                                for: 'For hardcore Rust, cryptography, and systems engineers.',
                                icon: Cpu,
                                color: '#8c52ff'
                            },
                            {
                                title: 'AI Systems',
                                tech: 'NodeScore neural models, predictive routing, AI consensus optimization',
                                for: 'For ML, data science, and AI devs.',
                                icon: Brain,
                                color: '#ff4080'
                            },
                            {
                                title: 'Distributed Compute',
                                tech: 'Execution lanes, cluster scheduling, AI inference engines',
                                for: 'For distributed systems & HPC experts.',
                                icon: Network,
                                color: '#ffc502'
                            },
                            {
                                title: 'Security Research',
                                tech: 'PQ cryptography, ZK circuits, threat modeling',
                                for: 'For cybersecurity and cryptography researchers.',
                                icon: Shield,
                                color: '#8c52ff'
                            },
                            {
                                title: 'Developer Tools',
                                tech: 'SDKs, APIs, CLI tools, debugging utilities',
                                for: 'For JavaScript, Rust, Python, TypeScript devs.',
                                icon: Code2,
                                color: '#ff4080'
                            },
                            {
                                title: 'dApp Builders',
                                tech: 'SocialFi, DeFi, Gaming, Identity, Enterprise apps',
                                for: 'For founders & startups.',
                                icon: Rocket,
                                color: '#ffc502'
                            },
                            {
                                title: 'Content & Documentation',
                                tech: 'Docs, tutorials, guides',
                                for: 'For writers, educators, creators.',
                                icon: BookOpen,
                                color: '#8c52ff'
                            }
                        ].map((pathway, i) => {
                            const Icon = pathway.icon;
                            return (
                                <StaggerItem key={i}>
                                    <motion.div
                                        className="bg-white text-black p-6 sm:p-8 h-full relative overflow-hidden"
                                        whileHover={{
                                            boxShadow: `0 0 30px ${pathway.color}`,
                                            y: -10
                                        }}
                                    >
                                        <div
                                            className="absolute top-0 right-0 w-24 h-24 opacity-10"
                                            style={{ backgroundColor: pathway.color }}
                                        />

                                        <Icon className="w-12 h-12 sm:w-14 sm:h-14 mb-4" style={{ color: pathway.color }} />
                                        <h3 className="text-2xl sm:text-3xl font-black mb-4">{pathway.title}</h3>
                                        <p className="text-sm sm:text-base mb-4 text-gray-700">{pathway.tech}</p>
                                        <p className="text-xs sm:text-sm font-bold" style={{ color: pathway.color }}>{pathway.for}</p>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* RECOGNITION SYSTEM - BADGE SHOWCASE */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Proof of Contribution</h2>
                            <p className="text-xl sm:text-2xl text-gray-600">Recognition System</p>
                        </div>
                    </StaggerItem>

                    {/* DID Badges */}
                    <StaggerItem>
                        <div className="mb-16">
                            <h3 className="text-3xl sm:text-4xl font-black mb-8 text-center">Artha DID Badges</h3>
                            <p className="text-lg sm:text-xl text-center mb-12 text-gray-600">
                                Each contributor gets a verifiable decentralized identity badge
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                                {[
                                    { label: 'Code Contributor', icon: Code2, color: '#8c52ff' },
                                    { label: 'Protocol Researcher', icon: Cpu, color: '#ff4080' },
                                    { label: 'AI Engineer', icon: Brain, color: '#ffc502' },
                                    { label: 'Community Mentor', icon: Users, color: '#8c52ff' },
                                    { label: 'Founder/Builder', icon: Rocket, color: '#ff4080' },
                                    { label: 'Enterprise Innovator', icon: Building2, color: '#ffc502' }
                                ].map((badge, i) => {
                                    const Icon = badge.icon;
                                    return (
                                        <StaggerItem key={i}>
                                            <div className="text-center">
                                                <div
                                                    className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: badge.color }}
                                                >
                                                    <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                                                </div>
                                                <p className="text-xs sm:text-sm font-bold">{badge.label}</p>
                                            </div>
                                        </StaggerItem>
                                    );
                                })}
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Ranks */}
                    <StaggerItem>
                        <div className="bg-black text-white p-8 sm:p-12 md:p-16 mb-16">
                            <h3 className="text-3xl sm:text-4xl font-black mb-8 text-center">Gamified XP System</h3>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                                {[
                                    { rank: 'Seeker', color: '#8c52ff' },
                                    { rank: 'Scholar', color: '#ff4080' },
                                    { rank: 'Architect', color: '#ffc502' },
                                    { rank: 'Sage', color: '#8c52ff' }
                                ].map((rank, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Star className="w-8 h-8" style={{ color: rank.color, fill: rank.color }} />
                                        <span className="text-xl sm:text-2xl font-black">{rank.rank}</span>
                                        {i < 3 && <ArrowRight className="w-6 h-6 text-gray-600 hidden sm:block" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Rewards */}
                    <StaggerItem>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: Zap, text: 'Early testnet access', color: '#8c52ff' },
                                { icon: Users, text: 'Private research calls', color: '#ff4080' },
                                { icon: Award, text: 'Recognition in protocol paper', color: '#ffc502' },
                                { icon: Star, text: 'Feature in Developer Hall of Fame', color: '#8c52ff' }
                            ].map((reward, i) => {
                                const Icon = reward.icon;
                                return (
                                    <div key={i} className="bg-black text-white p-6 text-center">
                                        <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: reward.color }} />
                                        <p className="text-sm sm:text-base font-bold">{reward.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* JOIN CTA - FINAL CALL */}
            <section id="join" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#8c52ff] text-white relative">
                <StaggerContainer className="max-w-5xl mx-auto text-center">
                    <StaggerItem>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-12 leading-tight">
                            Become Part of the Intelligent Decentralized Revolution
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-2xl sm:text-3xl md:text-4xl font-bold">
                            <p>Contribute what you know.</p>
                            <p>Learn what you don't.</p>
                            <p>Build what you dream.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                            <Link href="/contact" className="px-8 py-5 bg-white text-[#8c52ff] font-black text-base sm:text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Apply to Join Artha Collectives <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="px-8 py-5 border-4 border-white text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-[#8c52ff] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Start a Campus Chapter
                            </Link>
                            <Link href="/dev/docs" className="px-8 py-5 bg-black text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-[#ff4080] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Build Your First App <ArrowUpRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://github.com" target="_blank" className="px-8 py-5 border-4 border-white text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-[#8c52ff] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Explore GitHub <GitBranch className="w-5 h-5" />
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
