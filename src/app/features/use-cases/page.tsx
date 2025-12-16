'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, TrendingUp, Building2, Users, Database, Gamepad2, Cpu, GraduationCap, Code2, CheckCircle2, ArrowUpRight, Zap, Lock, Eye, Award, Coins, Network, Globe, Heart, MessageCircle, Layers, Target, Activity, Sparkles, Server, Cloud, Wifi } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function UseCasesPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO - NETWORK WEB VISUALIZATION */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                {/* Network nodes scattered */}
                <div className="absolute inset-0 opacity-30">
                    {[
                        { top: '20%', left: '10%', color: '#8c52ff', size: 'w-4 h-4' },
                        { top: '30%', left: '80%', color: '#ff4080', size: 'w-6 h-6' },
                        { top: '60%', left: '15%', color: '#ffc502', size: 'w-5 h-5' },
                        { top: '70%', left: '85%', color: '#8c52ff', size: 'w-4 h-4' },
                        { top: '40%', left: '50%', color: '#ff4080', size: 'w-8 h-8' }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            className={`absolute ${node.size} rounded-full`}
                            style={{ top: node.top, left: node.left, backgroundColor: node.color }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
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
                            Use Cases
                        </div>
                        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter mb-12">
                            The Convergence<br />
                            <span className="text-[#8c52ff]">Network</span>
                        </h1>

                        {/* Hexagonal badge grid */}
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
                            {['AI', 'Finance', 'Identity', 'Gaming', 'Social', 'Enterprise'].map((item, i) => {
                                const colors = ['#8c52ff', '#ff4080', '#ffc502'];
                                const color = colors[i % 3];
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 * i, type: 'spring' }}
                                        className="px-6 py-3 text-white font-black text-sm sm:text-base"
                                        style={{
                                            backgroundColor: color,
                                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                                        }}
                                    >
                                        {item}
                                    </motion.div>
                                );
                            })}
                        </div>

                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto">
                            A decentralized ecosystem where everything connects.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 1 - AI ECOSYSTEM (MOLECULE STRUCTURE) */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <div className="inline-block px-6 py-3 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-wider mb-6">
                                Section 1
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">AI Ecosystem</h2>
                        </div>
                    </StaggerItem>

                    {/* Molecule structure - center core with orbiting items */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Center core */}
                        <div className="flex justify-center mb-16">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#8c52ff] flex items-center justify-center">
                                <Brain className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
                            </div>
                        </div>

                        {/* Orbiting items in a circle pattern */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                { title: 'AI Agent Economies', desc: 'AI agents with DID identities perform tasks, trade, manage resources autonomously.', icon: Users },
                                { title: 'On-chain AI Memory', desc: 'Store embeddings, model vectors, and personalized AI states inside ArthaFlow.', icon: Database },
                                { title: 'Intelligent Contracts', desc: 'Contracts optimized via AI-based load prediction and gas auto-adjustment.', icon: Zap },
                                { title: 'AI Models as Services', desc: 'Deploy and monetize inference, fine-tuning, AI microservices, model-level APIs.', icon: Network }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <StaggerItem key={i}>
                                        <motion.div
                                            className="bg-black text-white p-6 sm:p-8 relative"
                                            whileHover={{ y: -10 }}
                                        >
                                            {/* Connecting dot */}
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#8c52ff]" />

                                            <Icon className="w-12 h-12 sm:w-14 sm:h-14 mb-4 text-[#8c52ff] mx-auto mt-4" />
                                            <h3 className="text-lg sm:text-xl font-black mb-3 text-center">{item.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-400 text-center">{item.desc}</p>
                                        </motion.div>
                                    </StaggerItem>
                                );
                            })}
                        </div>
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 2 - DID LAYER (TRIANGLE CONSTELLATION) - KEEP AS IS */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <div className="inline-block px-6 py-3 bg-[#ff4080] text-white text-sm font-black uppercase tracking-wider mb-6">
                                Section 2
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Digital Identity & Authentication</h2>
                        </div>
                    </StaggerItem>

                    {/* Triangle constellation - responsive layout */}
                    <div className="max-w-6xl mx-auto">
                        {/* Top item */}
                        <StaggerItem>
                            <div className="flex justify-center mb-12 md:mb-20">
                                <div className="w-full max-w-md bg-white text-black p-8 sm:p-10 relative">
                                    <Shield className="w-16 h-16 mb-6 text-[#ff4080] mx-auto" />
                                    <h3 className="text-xl sm:text-2xl font-black mb-4 text-center">Universal DID Identity</h3>
                                    <p className="text-sm sm:text-base text-gray-700 text-center">Users, devices, apps, and AIs have unique identities with PQC security.</p>
                                    <div
                                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                                        style={{
                                            borderLeft: '20px solid transparent',
                                            borderRight: '20px solid transparent',
                                            borderTop: '20px solid white'
                                        }}
                                    />
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Bottom two items */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                            <StaggerItem>
                                <div className="bg-white text-black p-8 sm:p-10 relative">
                                    <Eye className="w-16 h-16 mb-6 text-[#ff4080] mx-auto" />
                                    <h3 className="text-xl sm:text-2xl font-black mb-4 text-center">Biometric-Backed Privacy</h3>
                                    <p className="text-sm sm:text-base text-gray-700 text-center">On-chain verifications using face embeddings, zero-knowledge proofs, age/KYC proofs.</p>
                                    <div
                                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 hidden md:block"
                                        style={{
                                            borderLeft: '20px solid transparent',
                                            borderRight: '20px solid transparent',
                                            borderBottom: '20px solid white'
                                        }}
                                    />
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="bg-white text-black p-8 sm:p-10 relative">
                                    <Building2 className="w-16 h-16 mb-6 text-[#ff4080] mx-auto" />
                                    <h3 className="text-xl sm:text-2xl font-black mb-4 text-center">Identity-as-a-Service</h3>
                                    <p className="text-sm sm:text-base text-gray-700 text-center">For schools, enterprises, governments, gaming studios.</p>
                                    <div
                                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 hidden md:block"
                                        style={{
                                            borderLeft: '20px solid transparent',
                                            borderRight: '20px solid transparent',
                                            borderBottom: '20px solid white'
                                        }}
                                    />
                                </div>
                            </StaggerItem>
                        </div>

                        {/* Connecting lines - desktop only */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ top: 0, left: 0 }}>
                            <line x1="50%" y1="30%" x2="25%" y2="70%" stroke="#ff4080" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="50%" y1="30%" x2="75%" y2="70%" stroke="#ff4080" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="25%" y1="85%" x2="75%" y2="85%" stroke="#ff4080" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 3 - DEFI (INTERLOCKING GEARS) */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <div className="inline-block px-6 py-3 bg-[#ffc502] text-black text-sm font-black uppercase tracking-wider mb-6">
                                Section 3
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">DeFi & Finance</h2>
                        </div>
                    </StaggerItem>

                    {/* Interlocking gears layout - 2x2 grid with overlapping effect */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-5xl mx-auto">
                        {[
                            { title: 'Quantum-Safe DeFi', desc: 'DeFi protocols secured with post-quantum signatures.', icon: Lock, position: 'top-left' },
                            { title: 'High-Frequency Trading', desc: 'Thanks to infinite scalability and <1s finality.', icon: TrendingUp, position: 'top-right' },
                            { title: 'Smart Credit & Lending', desc: 'Based on DID reputation + AI scoring.', icon: Award, position: 'bottom-left' },
                            { title: 'Multi-Chain Bridges', desc: 'Quantum-secured bridges for stable transfers.', icon: Network, position: 'bottom-right' }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            const isTop = i < 2;
                            const isLeft = i % 2 === 0;

                            return (
                                <StaggerItem key={i}>
                                    <motion.div
                                        className="bg-black text-white p-8 sm:p-10 md:p-12 relative"
                                        style={{
                                            marginTop: isTop ? 0 : '-2rem',
                                            marginLeft: isLeft ? 0 : '-2rem',
                                            zIndex: i
                                        }}
                                        whileHover={{ scale: 1.05, zIndex: 10 }}
                                    >
                                        {/* Gear tooth effect */}
                                        <div className="absolute top-0 right-0 w-8 h-8 bg-[#ffc502]" style={{
                                            clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
                                        }} />

                                        <Icon className="w-14 h-14 sm:w-16 sm:h-16 mb-6 text-[#ffc502]" />
                                        <h3 className="text-xl sm:text-2xl font-black mb-4">{item.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-400">{item.desc}</p>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 4 - ENTERPRISE (PYRAMID STACK) */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <div className="inline-block px-6 py-3 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-wider mb-6">
                                Section 4
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Enterprise & Governments</h2>
                        </div>
                    </StaggerItem>

                    {/* Pyramid stack - progressively wider */}
                    <div className="space-y-6 max-w-6xl mx-auto">
                        {[
                            { title: 'Autonomous Enterprise Systems', desc: 'AI-driven HR, procurement, supply chains, treasury management.', icon: Building2, width: 'max-w-md' },
                            { title: 'Secure Document Infrastructure', desc: 'PQC-backed contracts, certificates, and verifiable credentials.', icon: Lock, width: 'max-w-2xl' },
                            { title: 'Decentralized Cloud & Compute', desc: 'Use ArthaFlow and SVDB for document storage, embeddings, software state, digital twins.', icon: Cloud, width: 'max-w-4xl' },
                            { title: 'Smart Governance Stack', desc: 'For governments, colleges, corporates.', icon: Award, width: 'max-w-6xl' }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className={`${item.width} mx-auto bg-white text-black p-6 sm:p-8 md:p-10`}>
                                        <div className="flex flex-col sm:flex-row items-center gap-6">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[#8c52ff] flex-shrink-0">
                                                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                            </div>
                                            <div className="text-center sm:text-left">
                                                <h3 className="text-xl sm:text-2xl font-black mb-2">{item.title}</h3>
                                                <p className="text-sm sm:text-base text-gray-700">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 5 - SOCIALFI (FLOWING CHAT BUBBLES) */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <div className="inline-block px-6 py-3 bg-[#ff4080] text-white text-sm font-black uppercase tracking-wider mb-6">
                                Section 5
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">SocialFi & Communication</h2>
                        </div>
                    </StaggerItem>

                    {/* Flowing chat bubbles - alternating left/right */}
                    <div className="space-y-8 max-w-4xl mx-auto">
                        {[
                            { title: 'Creator-Driven Economies', desc: 'Native token rewards, fan economies, micro-income streams.', icon: Coins, side: 'left' },
                            { title: 'Bot-Free Social Media', desc: 'AI + DID identity ensures safe communities, spam-free, bot-proof.', icon: Shield, side: 'right' },
                            { title: 'Decentralized Messaging', desc: 'Quantum-secured communication.', icon: MessageCircle, side: 'left' },
                            { title: 'Social Reputation Layer', desc: 'Cross-app credibility backed by DID + AI score.', icon: Award, side: 'right' }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            const isLeft = item.side === 'left';
                            return (
                                <StaggerItem key={i}>
                                    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                                        <div className={`w-full sm:w-4/5 md:w-3/4 bg-[#ff4080] text-white p-6 sm:p-8 relative ${isLeft ? 'rounded-br-3xl' : 'rounded-bl-3xl'}`}>
                                            <Icon className="w-12 h-12 sm:w-14 sm:h-14 mb-4" />
                                            <h3 className="text-xl sm:text-2xl font-black mb-3">{item.title}</h3>
                                            <p className="text-sm sm:text-base">{item.desc}</p>
                                            {/* Chat tail */}
                                            <div
                                                className={`absolute bottom-0 ${isLeft ? '-left-4' : '-right-4'} w-8 h-8 bg-[#ff4080]`}
                                                style={{ clipPath: isLeft ? 'polygon(100% 0, 0 100%, 100% 100%)' : 'polygon(0 0, 0 100%, 100% 100%)' }}
                                            />
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 6 - DATA STORAGE (LAYERED DATABASE) */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <div className="inline-block px-6 py-3 bg-[#ffc502] text-black text-sm font-black uppercase tracking-wider mb-6">
                                Section 6
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Data, Storage & Compute</h2>
                        </div>
                    </StaggerItem>

                    {/* Layered database visualization - 3 stacked layers */}
                    <div className="space-y-0 max-w-5xl mx-auto">
                        {[
                            { title: 'Decentralized Vector Storage', desc: 'For embeddings, documents, files, digital certificates.', icon: Database, layer: 1 },
                            { title: 'Distributed Compute Engines', desc: 'Nodes perform inference, ZK verification, heavy computations.', icon: Cpu, layer: 2 },
                            { title: 'Data Markets', desc: 'Creators and enterprises can create protected data vaults.', icon: Server, layer: 3 }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div
                                        className="bg-white text-black p-6 sm:p-8 md:p-10 relative"
                                        style={{
                                            marginTop: i > 0 ? '-1rem' : 0,
                                            zIndex: 3 - i,
                                            borderTop: `6px solid #ffc502`
                                        }}
                                    >
                                        <div className="flex flex-col sm:flex-row items-center gap-6">
                                            <div className="relative">
                                                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#ffc502] flex items-center justify-center">
                                                    <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                                                </div>
                                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-[#ffc502] rounded-full flex items-center justify-center text-sm font-black">
                                                    {item.layer}
                                                </div>
                                            </div>
                                            <div className="text-center sm:text-left">
                                                <h3 className="text-2xl sm:text-3xl font-black mb-3">{item.title}</h3>
                                                <p className="text-sm sm:text-base text-gray-700">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 7 - GAMING (ISOMETRIC CUBE GRID) */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <div className="inline-block px-6 py-3 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-wider mb-6">
                                Section 7
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Gaming, XR & Metaverse</h2>
                        </div>
                    </StaggerItem>

                    {/* Isometric cube grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { title: 'AI-Powered NPCs', desc: 'NPCs with memory and personality via vector embeddings.', icon: Brain },
                            { title: 'Real-Time Worlds', desc: 'Infinite sharding supports massive multiplayer games.', icon: Globe },
                            { title: 'Cross-Game Identity', desc: 'Player identity persists across games and XR systems.', icon: Shield },
                            { title: 'Ultra-Low Latency Trading', desc: 'Skins, weapons, avatars trade instantly (<1s finality).', icon: Zap },
                            { title: 'Creator-Owned Economies', desc: 'Players own land, worlds, items.', icon: Coins }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={i}>
                                    <motion.div
                                        className="bg-black text-white p-6 sm:p-8 relative overflow-hidden"
                                        whileHover={{ y: -10, rotateX: 5 }}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {/* Isometric top face */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-8 bg-[#8c52ff]"
                                            style={{
                                                clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)',
                                                transform: 'translateY(-50%)'
                                            }}
                                        />

                                        <Icon className="w-14 h-14 sm:w-16 sm:h-16 mb-4 text-[#8c52ff] mt-4" />
                                        <h3 className="text-lg sm:text-xl font-black mb-3">{item.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-400">{item.desc}</p>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 8 - IOT (HONEYCOMB HEXAGONS) */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <div className="inline-block px-6 py-3 bg-[#ff4080] text-white text-sm font-black uppercase tracking-wider mb-6">
                                Section 8
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Autonomous Infrastructure & IoT</h2>
                        </div>
                    </StaggerItem>

                    {/* Honeycomb hexagons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Smart City Infrastructure', desc: 'IoT devices with DID identities: traffic lights, sensors, energy grids, public hardware.', icon: Building2 },
                            { title: 'AI-Prediction Utilities', desc: 'Energy demand prediction, smart routing, emergency optimization.', icon: Activity },
                            { title: 'Autonomous Machines', desc: 'Drones, vehicles, robots, industrial hardware acting as independent agents.', icon: Cpu }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div
                                        className="bg-white text-black p-8 sm:p-10 relative"
                                        style={{
                                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                                        }}
                                    >
                                        <div className="w-20 h-20 mx-auto mb-6 bg-[#ff4080] flex items-center justify-center" style={{
                                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                                        }}>
                                            <Icon className="w-12 h-12 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-black mb-4 text-center">{item.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-700 text-center">{item.desc}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 9 - EDUCATION (CIRCULAR PROGRESS RINGS) */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <div className="inline-block px-6 py-3 bg-[#ffc502] text-black text-sm font-black uppercase tracking-wider mb-6">
                                Section 9
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Education, Health & Research</h2>
                        </div>
                    </StaggerItem>

                    {/* Circular progress rings - concentric circles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Decentralized Universities', desc: 'Credentials, certificates, learning profiles stored in DID.', icon: GraduationCap, ring: 1 },
                            { title: 'Medical Identity & Records', desc: 'Encrypted, PQC-secured health data.', icon: Heart, ring: 2 },
                            { title: 'AI Research Networks', desc: 'Collaborative training communities.', icon: Network, ring: 3 }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-black text-white p-8 sm:p-10 relative">
                                        {/* Concentric rings */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                            <div className="w-32 h-32 rounded-full border-4 border-[#ffc502]" />
                                            <div className="absolute w-24 h-24 rounded-full border-4 border-[#ffc502]" />
                                            <div className="absolute w-16 h-16 rounded-full border-4 border-[#ffc502]" />
                                        </div>

                                        <div className="relative">
                                            <div className="w-20 h-20 mx-auto mb-6 bg-[#ffc502] rounded-full flex items-center justify-center">
                                                <Icon className="w-12 h-12 text-black" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-black mb-4 text-center">{item.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-400 text-center">{item.desc}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 10 - DEVELOPER (TERMINAL CODE BLOCKS) */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-7xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <div className="inline-block px-6 py-3 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-wider mb-6">
                                Section 10
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Developer-Focused Use Cases</h2>
                        </div>
                    </StaggerItem>

                    {/* Terminal code blocks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Zero-Infra Deployment', desc: 'Build apps without servers or cloud.', icon: Code2, command: '$ artha deploy' },
                            { title: 'Universal VM Execution', desc: 'Deploy EVM, WASM, Rust, Python AI pipelines.', icon: Layers, command: '$ artha run --vm=all' },
                            { title: 'Autonomous DevOps Agents', desc: 'AI agents optimize gas, performance, and node behavior.', icon: Brain, command: '$ artha agent start' },
                            { title: 'Enterprise Integrations', desc: 'Plugins for SAP, Salesforce, Azure, Google Workspace.', icon: Building2, command: '$ artha connect --sap' }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="bg-white text-black font-mono">
                                        {/* Terminal header */}
                                        <div className="bg-gray-200 px-4 py-3 flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                            <span className="ml-2 text-xs text-gray-600">terminal</span>
                                        </div>

                                        {/* Terminal body */}
                                        <div className="p-6 sm:p-8 bg-[#1e1e1e] text-green-400">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Icon className="w-10 h-10 text-[#8c52ff]" />
                                                <span className="text-sm sm:text-base">{item.command}</span>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-black text-white mb-2">{item.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-400 font-sans">{item.desc}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* Continue with remaining sections... */}

            {/* FINAL STATEMENT */}
            <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#8c52ff] text-white relative">
                <StaggerContainer className="max-w-5xl mx-auto text-center">
                    <StaggerItem>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
                            ArthaChain is not just an AI chain. It is a universal infrastructure where AI, identity, finance, gaming, social, and enterprises converge into one intelligent decentralized network.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link href="/coming-soon" className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#8c52ff] font-black text-base sm:text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Start Building <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/arthaverse/features" className="px-8 sm:px-10 py-4 sm:py-5 border-4 border-white text-white font-black text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-[#8c52ff] transition-all duration-300 inline-flex items-center justify-center gap-3">
                                Explore Features <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>
        </div>
    );
}
