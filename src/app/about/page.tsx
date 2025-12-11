'use client';

import { motion } from 'framer-motion';
import { Target, Users, Zap, Globe } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

const values = [
    {
        icon: Target,
        title: 'INNOVATION FIRST',
        description: 'Pushing boundaries with AI-powered consensus and quantum-resistant security',
        color: '#8c52ff',
    },
    {
        icon: Users,
        title: 'COMMUNITY DRIVEN',
        description: 'Built by developers, for developers, with the community at our core',
        color: '#450693',
    },
    {
        icon: Zap,
        title: 'PERFORMANCE',
        description: 'Uncompromising speed and scalability for the next billion users',
        color: '#ff4080',
    },
    {
        icon: Globe,
        title: 'GLOBAL IMPACT',
        description: 'Democratizing access to blockchain technology worldwide',
        color: '#ffc502',
    },
];

const team = [
    { name: 'Dr. Sarah Chen', role: 'Chief Technology Officer', specialty: 'Distributed Systems' },
    { name: 'Marcus Williams', role: 'Head of Engineering', specialty: 'Blockchain Architecture' },
    { name: 'Aisha Patel', role: 'Lead Cryptographer', specialty: 'Quantum Security' },
    { name: 'James Rodriguez', role: 'AI Research Lead', specialty: 'Neural Networks' },
];

const milestones = [
    { year: '2023 Q1', event: 'Project Inception', description: 'Research and initial development', color: '#8c52ff' },
    { year: '2023 Q3', event: 'Testnet Launch', description: 'Public testing phase begins', color: '#ff4080' },
    { year: '2024 Q1', event: 'Mainnet Beta', description: 'Limited mainnet deployment', color: '#ffc502' },
    { year: '2024 Q4', event: 'Full Launch', description: 'Public mainnet release', color: '#8c52ff' },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-4 sm:px-6 lg:px-8">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="relative z-10 max-w-[1400px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 sm:mb-8 text-[#8c52ff]">
                            ABOUT ARTHACHAIN
                        </div>
                        <h1 className="text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-black leading-[0.9] mb-6 sm:mb-8">
                            BUILDING THE
                            <br />
                            <span className="text-[#ff4080]">FUTURE</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            We're on a mission to create the most advanced, scalable, and secure blockchain infrastructure for the decentralized future
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 sm:mb-6 text-[#8c52ff]">
                                OUR MISSION
                            </div>
                            <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-black leading-[0.95] mb-6 sm:mb-8">
                                POWERING THE NEXT GENERATION OF WEB3
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                                ArthaChain was born from a simple belief: blockchain technology should be fast, secure, and accessible to everyone. We're building infrastructure that doesn't compromise on any of these principles.
                            </p>
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                                By combining cutting-edge AI, quantum-resistant cryptography, and innovative consensus mechanisms, we're creating a platform that's ready for the next billion users.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square bg-gradient-to-br from-[#8c52ff] via-[#ff4080] to-[#ffc502] p-0.5">
                                <div className="w-full h-full bg-white flex items-center justify-center">
                                    <div className="text-center p-8 sm:p-12">
                                        <div className="text-[64px] sm:text-[80px] md:text-[96px] font-black text-[#8c52ff] mb-4">
                                            1M+
                                        </div>
                                        <div className="text-xl sm:text-2xl font-bold uppercase tracking-wider">
                                            Transactions Per Second
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-black mb-6">
                            OUR <span className="text-[#8c52ff]">VALUES</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            The principles that guide every decision we make
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group border-2 border-white/10 p-8 sm:p-10 hover:border-white/30 transition-all duration-300"
                                >
                                    <div
                                        className="w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center border-2 group-hover:scale-110 transition-transform"
                                        style={{ borderColor: value.color }}
                                    >
                                        <Icon size={32} style={{ color: value.color }} />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-black uppercase mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-black mb-6">
                            MEET THE <span className="text-[#ff4080]">TEAM</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                            World-class experts from blockchain, AI, and cryptography
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group border-2 border-black p-6 sm:p-8 hover:bg-black hover:text-white transition-all duration-300"
                            >
                                {/* Placeholder Avatar */}
                                <div className="w-full aspect-square bg-gradient-to-br from-[#8c52ff] to-[#ff4080] mb-6"></div>

                                <h3 className="text-xl sm:text-2xl font-black mb-2">
                                    {member.name}
                                </h3>
                                <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#8c52ff] mb-3">
                                    {member.role}
                                </div>
                                <p className="text-sm text-gray-600 group-hover:text-gray-400">
                                    {member.specialty}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline/Milestones */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-black mb-6">
                            OUR <span className="text-[#ffc502]">JOURNEY</span>
                        </h2>
                    </div>

                    <div className="space-y-8 md:space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center"
                            >
                                <div className="md:w-1/4">
                                    <div
                                        className="text-2xl sm:text-3xl md:text-4xl font-black"
                                        style={{ color: milestone.color }}
                                    >
                                        {milestone.year}
                                    </div>
                                </div>
                                <div
                                    className="md:w-3/4 border-l-4 pl-6 md:pl-8"
                                    style={{ borderColor: milestone.color }}
                                >
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-3">
                                        {milestone.event}
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-700">
                                        {milestone.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </main>
    );
}
