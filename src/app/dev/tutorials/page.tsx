'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Play, ChevronDown, ArrowRight, Clock, Users, Star, Code, Wallet, Rocket, Shield, Filter } from 'lucide-react';
import { useState, useRef } from 'react';

export default function TutorialsPage() {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const tutorials = [
        { title: 'Getting Started with ArthaChain', level: 'Beginner', duration: '10 min', category: 'basics', icon: Rocket, views: '12.4K', color: '#8c52ff' },
        { title: 'Deploy Your First Smart Contract', level: 'Beginner', duration: '15 min', category: 'contracts', icon: Code, views: '8.7K', color: '#ffc502' },
        { title: 'Connect Wallet to dApp', level: 'Beginner', duration: '8 min', category: 'basics', icon: Wallet, views: '15.2K', color: '#ff4080' },
        { title: 'Building DeFi Protocol', level: 'Advanced', duration: '45 min', category: 'defi', icon: Rocket, views: '5.1K', color: '#450693' },
        { title: 'Smart Contract Security', level: 'Intermediate', duration: '30 min', category: 'security', icon: Shield, views: '6.8K', color: '#8c52ff' },
        { title: 'WASM Contract Development', level: 'Advanced', duration: '40 min', category: 'contracts', icon: Code, views: '3.2K', color: '#ffc502' },
    ];

    const filters = [
        { key: 'all', label: 'All' },
        { key: 'basics', label: 'Basics' },
        { key: 'contracts', label: 'Contracts' },
        { key: 'defi', label: 'DeFi' },
        { key: 'security', label: 'Security' },
    ];

    const filteredTutorials = activeFilter === 'all' ? tutorials : tutorials.filter(t => t.category === activeFilter);

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <motion.div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff4080]/15 rounded-full blur-[150px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                            <BookOpen className="w-4 h-4 text-[#ff4080]" />
                            <span className="text-[12px] font-medium text-white/80 uppercase">Step-by-Step Guides</span>
                        </motion.div>

                        <motion.h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85]">
                            <span className="block text-white">TUTORIALS</span>
                        </motion.h1>

                        <motion.p className="text-white/50 text-lg max-w-2xl mx-auto mt-8 mb-12">
                            Learn to build on ArthaChain with hands-on tutorials. From basics to advanced topics.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-center gap-8">
                            {[{ label: 'Tutorials', value: '48+' }, { label: 'Video Hours', value: '24+' }, { label: 'Learners', value: '50K+' }].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl font-black text-[#ff4080]">{stat.value}</div>
                                    <div className="text-white/40 text-sm uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <ChevronDown className="text-white/40 w-8 h-8" />
                </motion.div>
            </section>

            <section className="relative py-32 px-8 bg-white">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-4 mb-12">
                        {filters.map((filter) => (
                            <button key={filter.key} onClick={() => setActiveFilter(filter.key)} className={`px-6 py-3 font-bold uppercase tracking-wide transition-colors ${activeFilter === filter.key ? 'bg-black text-white' : 'border-2 border-black text-black hover:bg-black hover:text-white'}`}>
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTutorials.map((tutorial, i) => {
                            const Icon = tutorial.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="border-4 border-black overflow-hidden cursor-pointer group">
                                    <div className="h-40 flex items-center justify-center relative" style={{ backgroundColor: tutorial.color }}>
                                        <Icon size={64} className="text-white/30" />
                                        <motion.div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity">
                                            <Play size={48} className="text-white" />
                                        </motion.div>
                                    </div>
                                    <div className="p-6 group-hover:bg-black transition-colors">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-xs font-bold px-2 py-1 ${tutorial.level === 'Beginner' ? 'bg-green-500' : tutorial.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'} text-white`}>{tutorial.level}</span>
                                            <span className="text-black/40 group-hover:text-white/40 text-sm flex items-center gap-1"><Clock size={12} />{tutorial.duration}</span>
                                        </div>
                                        <h3 className="font-black text-black group-hover:text-white text-lg mb-2">{tutorial.title}</h3>
                                        <div className="flex items-center gap-2 text-black/40 group-hover:text-white/40 text-sm">
                                            <Users size={14} />{tutorial.views} views
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
