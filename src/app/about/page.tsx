'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Zap, Shield, Cpu, Network, Globe, Users, Code2, GitBranch, Fingerprint, BrainCircuit, Layers } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* SECTION 1 - HERO */}
            <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }} />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-8">
                            About ArthaChain
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
                    >
                        A New Era of<br />
                        <span className="text-[#ff4080]">Intelligent</span> Decentralization
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto font-medium"
                    >
                        Researched & Developed by <span className="text-white font-bold">DIIGOO TECH PRIVATE LIMITED</span> | India's Deep-Tech Innovation Lab.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        ArthaChain is the world's first <span className="text-[#8c52ff] font-bold">AI-native</span>, <span className="text-[#ff4080] font-bold">quantum-secure</span>, <span className="text-[#ffc502] font-bold">infinitely scalable</span> Layer-1 blockchain - inspired by ancient Indian knowledge systems and engineered for global open innovation.
                    </motion.p>
                </div>
            </section>

            {/* SECTION 2 - WHO WE ARE */}
            <section className="py-20 px-6 bg-white">
                <StaggerContainer className="max-w-6xl mx-auto">
                    <StaggerItem>
                        <div className="text-center mb-12">
                            <span className="inline-block px-6 py-2 bg-black text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Who We Are
                            </span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                                The Meaning of <span className="text-[#8c52ff]">"Artha"</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <StaggerItem>
                            <div className="space-y-8">
                                <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                                    "Artha" comes from ancient Indian philosophy - representing <span className="text-[#8c52ff]">purpose</span>, <span className="text-[#ff4080]">value</span>, <span className="text-[#ffc502]">knowledge</span>, and meaningful prosperity.
                                </p>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    ArthaChain carries this timeless wisdom into the digital age.
                                </p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-black p-12 text-white">
                                <p className="text-2xl font-black mb-6 leading-tight">
                                    We are not just building technology.
                                </p>
                                <p className="text-xl leading-relaxed">
                                    We are building a <span className="text-[#ff4080]">new digital civilization</span> powered by intelligence, purpose, and decentralization.
                                </p>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* SECTION 3 - THE DIIGOO STORY */}
            <section className="relative py-20 px-6 bg-black text-white overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <StaggerContainer>
                        <StaggerItem>
                            <div className="text-center mb-12">
                                <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                    The DIIGOO Story
                                </span>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
                                    Built by <span className="text-[#ff4080]">DIIGOO TECH</span><br />
                                    PRIVATE LIMITED <span className="text-[#ffc502]">| India</span>
                                </h2>
                            </div>
                        </StaggerItem>

                        {/* DIIGOO - Compact Capsule Accordion */}
                        <StaggerItem>
                            <div className="mb-20 flex justify-center">
                                <div className="flex flex-col md:flex-row h-[600px] md:h-[250px] w-full max-w-6xl bg-black rounded-3xl overflow-hidden border border-white/10">
                                    {[
                                        { letter: 'D', word: 'DECENTRALISED', color: '#8c52ff', text: 'white' },
                                        { letter: 'I', word: 'INDIAN', color: '#ff4080', text: 'white' },
                                        { letter: 'I', word: 'INNOVATION', color: '#ffc502', text: 'black' },
                                        { letter: 'G', word: 'GLOBAL', color: '#8c52ff', text: 'white' },
                                        { letter: 'O', word: 'OPEN', color: '#ff4080', text: 'white' },
                                        { letter: 'O', word: 'OPPORTUNITIES', color: '#ffc502', text: 'black' },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="group relative flex-1 hover:flex-[5] transition-all duration-500 ease-in-out border-b md:border-b-0 border-white/10 md:border-r last:border-b-0 md:last:border-r-0 cursor-pointer overflow-hidden"
                                            style={{ '--hover-color': item.color } as React.CSSProperties}
                                        >
                                            {/* Normal State: Black BG */}
                                            <div className="absolute inset-0 bg-black group-hover:bg-[var(--hover-color)] transition-colors duration-500" />

                                            {/* Centered Content */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                                {/* The Letter */}
                                                <span
                                                    className="text-6xl md:text-8xl font-black text-white group-hover:scale-75 group-hover:-translate-y-8 transition-all duration-500"
                                                    style={{ color: 'white' }}
                                                >
                                                    {item.letter}
                                                </span>

                                                {/* Revealed Word */}
                                                <div
                                                    className="absolute top-1/2 left-0 right-0 text-center opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-500 delay-75 px-2"
                                                >
                                                    <h3
                                                        className="text-lg md:text-2xl font-black uppercase tracking-tight leading-none"
                                                        style={{ color: item.text }}
                                                    >
                                                        {item.word}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Mission Statement */}
                        <StaggerItem>
                            <div className="max-w-5xl mx-auto mb-20">
                                <div className="border-4 border-white p-12 md:p-16">
                                    <p className="text-2xl md:text-3xl leading-relaxed mb-8 font-medium">
                                        Diigoo Tech Private Limited is an <span className="text-[#ff4080] font-black">Indian deep-tech research company</span> focused on creating global-scale technologies rooted in India's culture of innovation.
                                    </p>
                                    <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-300">
                                        Our mission is to build <span className="text-[#ffc502] font-black">decentralized systems</span> that empower billions - without borders, barriers, or limitations.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Focus Areas */}
                        <StaggerItem>
                            <div className="max-w-7xl mx-auto mt-32">
                                <h3 className="text-4xl md:text-5xl font-black mb-16 text-center">
                                    <span className="text-white">Core</span> <span className="text-[#8c52ff]">Focus Areas</span>
                                </h3>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { icon: Network, text: 'Blockchain', color: '#8c52ff', sub: 'Layer 1 Protocol' },
                                        { icon: Cpu, text: 'Decentralized AI', color: '#ff4080', sub: 'Native Intelligence' },
                                        { icon: Shield, text: 'Cryptography', color: '#ffc502', sub: 'Post-Quantum' },
                                        { icon: Zap, text: 'Real-time Networks', color: '#8c52ff', sub: 'Low Latency' },
                                        { icon: Globe, text: 'Distributed Compute', color: '#ff4080', sub: 'Global Power' },
                                        { icon: Sparkles, text: 'Self-Sovereign Identity', color: '#ffc502', sub: 'User Control' },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="group relative h-64 border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10"
                                        >
                                            {/* Glowing Background on Hover */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                                                style={{ backgroundColor: item.color }}
                                            />

                                            {/* Corner Accents */}
                                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:w-full group-hover:h-full group-hover:border-white/10 transition-all duration-700" />
                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:w-full group-hover:h-full group-hover:border-white/10 transition-all duration-700" />

                                            <div className="relative z-10 flex flex-col items-center gap-6">
                                                <div
                                                    className="p-4 rounded-full bg-black/50 border border-white/10 group-hover:scale-110 transition-transform duration-500 mb-2"
                                                    style={{ borderColor: `${item.color}40` }}
                                                >
                                                    <item.icon
                                                        className="w-10 h-10 transition-colors duration-300"
                                                        style={{ color: item.color }}
                                                    />
                                                </div>

                                                <div>
                                                    <h4 className="text-2xl font-black text-white mb-2">{item.text}</h4>
                                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{item.sub}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* SECTION 4 - WHY WE BUILT ARTHACHAIN */}
            <section className="relative py-20 px-6 bg-white overflow-hidden">
                {/* Grid Background - Light Mode */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, black 1px, transparent 1px),
                            linear-gradient(to bottom, black 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
                <div className="max-w-7xl mx-auto">
                    <StaggerContainer>
                        <StaggerItem>
                            <div className="text-center mb-20">
                                <span className="inline-block px-6 py-2 bg-black text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                    Why We Built ArthaChain
                                </span>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                                    The Current Blockchain<br />World Is <span className="text-[#ff4080]">Broken</span>
                                </h2>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            {/* Creative asymmetric grid */}
                            <div className="space-y-4">
                                {/* Row 1 - 3 items */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        'High transaction fees',
                                        'Slow confirmation times',
                                        'Outdated architectures',
                                    ].map((problem, i) => (
                                        <div key={i} className="relative group overflow-visible">
                                            <div className="bg-black p-8 hover:bg-[#8c52ff] transition-all duration-500 cursor-pointer relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-[#ff4080]/50">
                                                {/* Animated border that draws in on hover */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#ffc502] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffc502] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right delay-100" />
                                                    <div className="absolute left-0 top-0 w-0.5 h-full bg-[#ffc502] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top delay-200" />
                                                    <div className="absolute right-0 top-0 w-0.5 h-full bg-[#ffc502] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom delay-300" />
                                                </div>

                                                {/* Text with fade and line-through on hover */}
                                                <p className="text-xl font-black text-white relative z-10 group-hover:opacity-60 transition-opacity duration-300">
                                                    <span className="relative">
                                                        {problem}
                                                        <span className="absolute inset-0 flex items-center">
                                                            <span className="w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            {/* Label changes from PROBLEM to SOLVED */}
                                            <div className="absolute -top-3 -right-3 z-20 shadow-lg transition-all duration-300">
                                                <div className="relative">
                                                    <div className="bg-[#ff4080] text-white px-3 py-1 text-xs font-black uppercase transform rotate-3 group-hover:opacity-0 group-hover:scale-50 transition-all duration-300">
                                                        PROBLEM
                                                    </div>
                                                    <div className="absolute inset-0 bg-[#ffc502] text-black px-3 py-1 text-xs font-black uppercase transform -rotate-3 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                                        SOLVED ✓
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Row 2 - 2 items */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-12">
                                    {[
                                        'Centralized staking & validator control',
                                        'No built-in AI capabilities',
                                    ].map((problem, i) => (
                                        <div key={i} className="relative group overflow-visible">
                                            <div className="bg-black p-10 hover:bg-[#8c52ff] transition-all duration-500 cursor-pointer relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-[#ff4080]/50">
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#ffc502] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffc502] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right delay-100" />
                                                    <div className="absolute left-0 top-0 w-0.5 h-full bg-[#ffc502] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top delay-200" />
                                                    <div className="absolute right-0 top-0 w-0.5 h-full bg-[#ffc502] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom delay-300" />
                                                </div>
                                                <p className="text-xl font-black text-white relative z-10 group-hover:opacity-60 transition-opacity duration-300">
                                                    <span className="relative">
                                                        {problem}
                                                        <span className="absolute inset-0 flex items-center">
                                                            <span className="w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="absolute -top-3 -right-3 z-20 shadow-lg transition-all duration-300">
                                                <div className="relative">
                                                    <div className="bg-[#ff4080] text-white px-3 py-1 text-xs font-black uppercase transform -rotate-6 group-hover:opacity-0 group-hover:scale-50 transition-all duration-300">
                                                        PROBLEM
                                                    </div>
                                                    <div className="absolute inset-0 bg-[#ffc502] text-black px-3 py-1 text-xs font-black uppercase transform rotate-6 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                                        SOLVED ✓
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Row 3 - 3 items */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        'Vulnerable to future quantum attacks',
                                        'Limited scalability',
                                        'Too many cloned or forked chains',
                                    ].map((problem, i) => (
                                        <div key={i} className="relative group overflow-visible">
                                            <div className="bg-black p-8 hover:bg-[#8c52ff] transition-all duration-500 cursor-pointer relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-[#ff4080]/50">
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#ffc502] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffc502] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right delay-100" />
                                                    <div className="absolute left-0 top-0 w-0.5 h-full bg-[#ffc502] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top delay-200" />
                                                    <div className="absolute right-0 top-0 w-0.5 h-full bg-[#ffc502] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom delay-300" />
                                                </div>
                                                <p className="text-xl font-black text-white relative z-10 group-hover:opacity-60 transition-opacity duration-300">
                                                    <span className="relative">
                                                        {problem}
                                                        <span className="absolute inset-0 flex items-center">
                                                            <span className="w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="absolute -top-3 -right-3 z-20 shadow-lg transition-all duration-300">
                                                <div className="relative">
                                                    <div className="bg-[#ff4080] text-white px-3 py-1 text-xs font-black uppercase transform -rotate-12 group-hover:opacity-0 group-hover:scale-50 transition-all duration-300">
                                                        PROBLEM
                                                    </div>
                                                    <div className="absolute inset-0 bg-[#ffc502] text-black px-3 py-1 text-xs font-black uppercase transform rotate-12 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                                        SOLVED ✓
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Row 4 - Single large item */}
                                <div className="md:px-32">
                                    <div className="relative group overflow-visible">
                                        <div className="bg-black p-12 hover:bg-[#8c52ff] transition-all duration-500 cursor-pointer relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-[#ff4080]/50">
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#ffc502] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffc502] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right delay-100" />
                                                <div className="absolute left-0 top-0 w-0.5 h-full bg-[#ffc502] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top delay-200" />
                                                <div className="absolute right-0 top-0 w-0.5 h-full bg-[#ffc502] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom delay-300" />
                                            </div>
                                            <p className="text-2xl font-black text-white text-center relative z-10 group-hover:opacity-60 transition-opacity duration-300">
                                                <span className="relative">
                                                    No unified identity layer
                                                    <span className="absolute inset-0 flex items-center">
                                                        <span className="w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                                                    </span>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="absolute top-1/2 -right-6 z-20 shadow-lg transition-all duration-300 transform -translate-y-1/2 rotate-90">
                                            <div className="relative">
                                                <div className="bg-[#ff4080] text-white px-4 py-2 text-sm font-black uppercase group-hover:opacity-0 group-hover:scale-50 transition-all duration-300">
                                                    CRITICAL
                                                </div>
                                                <div className="absolute inset-0 bg-[#ffc502] text-black px-4 py-2 text-sm font-black uppercase opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                                    SOLVED ✓
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="mt-20 text-center relative">
                                {/* Decorative elements */}
                                <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#8c52ff]" />
                                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-[#ff4080]" />

                                <div className="text-4xl md:text-5xl font-black max-w-4xl mx-auto leading-tight">
                                    ArthaChain was engineered to{' '}
                                    <span className="relative inline-block">
                                        <span className="text-[#8c52ff]">solve all of these</span>
                                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#ffc502]" />
                                    </span>
                                    {' '}from the ground up.
                                </div>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* SECTION 5 - WHAT MAKES ARTHACHAIN DIFFERENT */}
            <section className="relative py-20 px-6 bg-black text-white overflow-hidden">
                {/* Grid Background - Dark Mode */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
                <div className="max-w-7xl mx-auto">
                    <StaggerContainer>
                        <StaggerItem>
                            <div className="text-center mb-12">
                                <span className="inline-block px-6 py-2 bg-[#ff4080] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                    What Makes Us Different
                                </span>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
                                    Game-Changing<br />Innovation
                                </h2>
                            </div>
                        </StaggerItem>

                        <div className="flex flex-col border-t border-white/20">
                            {[
                                {
                                    number: '01',
                                    title: 'AI at the Protocol Layer',
                                    description: 'ArthaChain is not a blockchain with AI added on top - it is a blockchain powered by AI from within the consensus engine itself.',
                                    color: '#8c52ff'
                                },
                                {
                                    number: '02',
                                    title: 'Quantum-Secure Foundations',
                                    description: 'Native implementation of Dilithium-5 and ML-DSA-87 post-quantum signature algorithms.',
                                    color: '#ff4080'
                                },
                                {
                                    number: '03',
                                    title: 'Infinite Scalability',
                                    description: 'Hybrid DAG + Dynamic Sharding enables horizontal expansion without bottlenecks.',
                                    color: '#ffc502'
                                },
                                {
                                    number: '04',
                                    title: 'Dual-VM Execution',
                                    description: 'EVM + WASM running in parallel, enhanced by AI-driven optimization.',
                                    color: '#8c52ff'
                                }
                            ].map((feature, i) => (
                                <StaggerItem key={i}>
                                    <div
                                        className="group relative border-b border-white/20 py-16 px-4 md:px-8 hover:bg-white/5 transition-colors duration-500"
                                    >
                                        <div className="flex flex-col md:flex-row gap-10 md:gap-32 items-baseline">
                                            {/* Massive Number */}
                                            <span
                                                className="text-5xl md:text-9xl font-black text-white/10 group-hover:text-white transition-colors duration-500 font-sans tracking-tighter shrink-0"
                                                style={{
                                                    textShadow: '0 0 0 transparent', // Default no shadow
                                                    '--hover-color': feature.color
                                                } as React.CSSProperties}
                                            >
                                                {feature.number}
                                            </span>

                                            {/* Text Content */}
                                            <div className="flex flex-col gap-6 max-w-3xl">
                                                <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.1] group-hover:text-[var(--hover-color)] transition-colors duration-300">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed group-hover:text-gray-200 transition-colors">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Subtle colored accent line on left (optional luxury touch) */}
                                        <div
                                            className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center"
                                            style={{ backgroundColor: feature.color }}
                                        />
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* SECTION 6 - OUR PHILOSOPHY */}
            <section className="relative py-20 px-6 bg-black text-white overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <StaggerContainer>
                        <StaggerItem>
                            <div className="text-center mb-12">
                                <span className="inline-block px-6 py-2 bg-[#ffc502] text-black text-sm font-black uppercase tracking-[0.3em] mb-6">
                                    Our Philosophy
                                </span>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
                                    Ancient Wisdom.<br />
                                    <span className="text-[#ffc502]">Modern Engineering.</span>
                                </h2>
                            </div>
                        </StaggerItem>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Ancient Inspirations Card */}
                            <StaggerItem>
                                <div className="h-full relative overflow-hidden group border border-[#ffc502]/30 bg-gray-900/50 backdrop-blur-sm p-10 md:p-14 rounded-3xl hover:bg-gray-900/80 transition-all duration-500">

                                    <h3 className="text-3xl font-black mb-8 text-[#ffc502]">
                                        The Roots
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
                                        ArthaChain isn't just code. It draws deep structural inspiration from India's legacy of knowledge systems.
                                    </p>

                                    <ul className="space-y-6">
                                        {[
                                            'Vedic mathematics algorithms',
                                            'Indian philosophical frameworks',
                                            'Decentralised Gurukula structures',
                                            'Self-sovereignty & Identity'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 group/item">
                                                <div className="w-10 h-10 rounded-full bg-[#ffc502]/10 flex items-center justify-center border border-[#ffc502]/20 group-hover/item:bg-[#ffc502] transition-all duration-300">
                                                    <div className="w-2 h-2 bg-[#ffc502] rounded-full group-hover/item:bg-black transition-colors" />
                                                </div>
                                                <span className="text-lg font-bold text-gray-200 group-hover/item:text-[#ffc502] transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </StaggerItem>

                            {/* Future Systems Card */}
                            <StaggerItem>
                                <div className="h-full relative overflow-hidden group border border-[#8c52ff]/30 bg-gray-900/50 backdrop-blur-sm p-10 md:p-14 rounded-3xl hover:bg-gray-900/80 transition-all duration-500">

                                    <h3 className="text-3xl font-black mb-8 text-[#8c52ff]">
                                        The Future
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
                                        We translate these timeless principles into a resilient, self-adjusting digital civilization.
                                    </p>

                                    <ul className="space-y-6">
                                        {[
                                            'Resilient & Antifragile',
                                            'Infinitely Scalable',
                                            'Self-adjusting Consensus',
                                            'Community-first Governance',
                                            'Built for Generations'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 group/item">
                                                <div className="w-10 h-10 rounded-full bg-[#8c52ff]/10 flex items-center justify-center border border-[#8c52ff]/20 group-hover/item:bg-[#8c52ff] transition-all duration-300">
                                                    <CheckCircle2 className="w-5 h-5 text-[#8c52ff] group-hover/item:text-white transition-colors" />
                                                </div>
                                                <span className="text-lg font-bold text-gray-200 group-hover/item:text-[#8c52ff] transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* SECTION 7 - COMMITMENT */}
            <section className="relative py-20 px-6 bg-white overflow-hidden">
                {/* Grid Background - Light Mode */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, black 1px, transparent 1px),
                            linear-gradient(to bottom, black 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <StaggerItem>
                            <div className="text-center mb-12">
                                <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                    Our Commitment
                                </span>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                                    Built in <span className="text-[#ff4080]">India</span>.<br />
                                    Designed for <span className="text-[#8c52ff]">Everyone</span>.
                                </h2>
                                <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
                                    ArthaChain is deeply rooted in India - yet built for billions worldwide.
                                </p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="flex flex-col">
                                {[
                                    { text: "Advancing India's deep-tech revolution", color: "#8c52ff", sub: "Innovation" },
                                    { text: "Bringing decentralized identity to global users", color: "#ff4080", sub: "Identity" },
                                    { text: "Supporting developers, founders & students", color: "#ffc502", sub: "Community" },
                                    { text: "Open-sourcing innovation for global access", color: "#8c52ff", sub: "Open Source" },
                                    { text: "Making AI + blockchain simple for all", color: "#ff4080", sub: "Accessibility" }
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="group relative border-b border-gray-200 py-12 cursor-pointer transition-all duration-500 hover:bg-black hover:px-8"
                                    >
                                        <div className="flex items-center justify-between relative z-10 w-full">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">
                                                    0{i + 1} / {item.sub}
                                                </span>
                                                <h3
                                                    className="text-3xl md:text-5xl font-black text-black group-hover:text-white transition-colors duration-300"
                                                >
                                                    {item.text}
                                                </h3>
                                            </div>

                                            <div
                                                className="w-16 h-16 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-10 group-hover:translate-x-0 transition-all duration-500"
                                                style={{ backgroundColor: item.color }}
                                            >
                                                <ArrowRight className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* SECTION 9 - TIMELINE */}
            <section className="relative py-20 px-6 bg-black text-white overflow-hidden">
                {/* Grid Background - Dark Mode */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                           linear-gradient(to right, white 1px, transparent 1px),
                           linear-gradient(to bottom, white 1px, transparent 1px)
                       `,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <StaggerContainer>
                        <StaggerItem>
                            <div className="text-center mb-12">
                                <span className="inline-block px-6 py-2 bg-[#ff4080] text-white text-sm font-black uppercase tracking-[0.3em] mb-4">
                                    Our Journey
                                </span>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
                                    Timeline / Achievements
                                </h2>
                            </div>
                        </StaggerItem>

                        <div className="relative mt-20 max-w-5xl mx-auto">
                            {/* Vertical Line */}
                            <div className="absolute left-[9px] md:left-0 top-0 bottom-0 w-px bg-white/10" />

                            <div className="space-y-0">
                                {[
                                    { year: '2023', event: 'ArthaChain research initiated', color: '#8c52ff' },
                                    { year: '2024 May', event: 'Architecture design & Consensus prototyping', color: '#ff4080' },
                                    { year: '2025 March', event: 'AI Consensus & Quantum Integration completed', color: '#ffc502' },
                                    { year: '2025 May', event: 'Diigoo Tech Private Limited incorporated', color: '#8c52ff' },
                                    { year: '2025 July', event: 'Dual-VM engine completed', color: '#ff4080' },
                                    { year: '2025 Aug', event: 'Launched Alpha TestNet V1', color: '#ffc502' },
                                    { year: '2025 Sep', event: 'Launched Alpha TestNet V4', color: '#8c52ff' },
                                    { year: '2025 Nov', event: 'Testnet Ready for Launch', color: '#ff4080' },
                                    { year: 'Upcoming', event: 'Token, Developer Tools & Mainnet Beta', color: '#ffc502', highlight: true }
                                ].map((item, i) => (
                                    <StaggerItem key={i}>
                                        <div className="group relative pl-12 md:pl-24 py-8 md:py-12 border-l border-transparent hover:bg-white/5 transition-all duration-500 rounded-r-3xl cursor-default">

                                            {/* Node */}
                                            <div className="absolute left-[5px] md:left-[-4px] top-12 md:top-16 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-black border border-white/30 group-hover:scale-150 group-hover:bg-[var(--color)] group-hover:border-[var(--color)] transition-all duration-500 z-10" style={{ '--color': item.color } as React.CSSProperties}>
                                                <div className="absolute inset-0 rounded-full bg-[var(--color)] opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />
                                            </div>

                                            {/* Line Segment Highlight */}
                                            <div className="absolute left-[9px] md:left-[-1px] top-0 bottom-0 w-px bg-[var(--color)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" style={{ '--color': item.color } as React.CSSProperties} />

                                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-16">
                                                <span className="text-4xl md:text-6xl font-black text-white/20 group-hover:text-[var(--color)] transition-colors duration-500 tracking-tighter w-64 shrink-0" style={{ '--color': item.color } as React.CSSProperties}>
                                                    {item.year.split(' ')[0]}<span className="text-lg md:text-2xl tracking-normal opacity-50 ml-3 font-bold text-white group-hover:opacity-100 transition-all">{item.year.split(' ').slice(1).join(' ')}</span>
                                                </span>
                                                <p className="text-xl md:text-3xl font-bold text-gray-500 group-hover:text-white transition-colors duration-300 leading-tight">
                                                    {item.event}
                                                </p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* SECTION 10 - EXPLORE CTA */}
            <section className="relative py-32 px-6 bg-black text-white overflow-hidden border-t border-white/10">
                {/* Grid Pattern Match */}
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <StaggerContainer>
                        <StaggerItem>
                            <h2 className="text-7xl md:text-9xl font-black mb-16 tracking-tighter">
                                Ready to <span className="text-[#8c52ff]">Explore?</span>
                            </h2>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="flex flex-col md:flex-row gap-6 justify-center">
                                {[
                                    { text: 'Explore Our Vision', href: '/mission', hoverClass: 'hover:bg-[#8c52ff] hover:border-[#8c52ff]' },
                                    { text: 'Learn the Technology', href: '/technology', hoverClass: 'hover:bg-[#ffc502] hover:border-[#ffc502] hover:text-black' },
                                    { text: 'Meet the Team', href: '/team', hoverClass: 'hover:bg-[#ff4080] hover:border-[#ff4080]' }
                                ].map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.href}
                                        className={`group flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold uppercase tracking-widest transition-all duration-300 rounded-sm hover:-translate-y-1 ${link.hoverClass}`}
                                    >
                                        {link.text}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                ))}
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
