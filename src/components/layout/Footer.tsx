'use client';

import Link from 'next/link';
import { ArrowUpRight, Github, Twitter, MessageCircle, Linkedin, Mail } from 'lucide-react';
import { FlickeringGrid, useMediaQuery } from '@/components/ui/flickering-grid';

export default function Footer() {
    const tablet = useMediaQuery("(max-width: 1024px)");

    return (
        <footer className="relative w-full bg-black text-white overflow-hidden">

            {/* White Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, white 1px, transparent 1px),
                        linear-gradient(to bottom, white 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-20 pb-12">



                {/* Links Grid - Bold Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

                    {/* Resources */}
                    <div className="group">
                        <div className="relative mb-6 pb-3">
                            <h3 className="text-2xl font-black uppercase tracking-tight relative inline-block">
                                Resources
                                <div className="absolute -bottom-0 left-0 w-0 h-1 bg-[#8c52ff] group-hover:w-full transition-all duration-500" />
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                'Documentation',
                                'Guides',
                                'Whitepaper',
                                'API Reference',
                                'Developer Tools'
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href="#"
                                        className="group/link flex items-center gap-2 text-base text-gray-300 hover:text-[#ff4080] transition-colors font-medium"
                                    >
                                        <div className="w-0 h-[2px] bg-[#ff4080] group-hover/link:w-4 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="group">
                        <div className="relative mb-6 pb-3">
                            <h3 className="text-2xl font-black uppercase tracking-tight relative inline-block">
                                Company
                                <div className="absolute -bottom-0 left-0 w-0 h-1 bg-[#ff4080] group-hover:w-full transition-all duration-500" />
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                'About',
                                'Blog',
                                'Careers',
                                'Press Kit',
                                'Contact'
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href="#"
                                        className="group/link flex items-center gap-2 text-base hover:text-[#ff4080] transition-colors font-medium"
                                    >
                                        <div className="w-0 h-[2px] bg-[#ff4080] group-hover/link:w-4 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div className="group">
                        <div className="relative mb-6 pb-3">
                            <h3 className="text-2xl font-black uppercase tracking-tight relative inline-block">
                                Community
                                <div className="absolute -bottom-0 left-0 w-0 h-1 bg-[#ffc502] group-hover:w-full transition-all duration-500" />
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: 'GitHub', icon: Github },
                                { name: 'Discord', icon: MessageCircle },
                                { name: 'Twitter', icon: Twitter },
                                { name: 'LinkedIn', icon: Linkedin }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href="#"
                                        className="group/link flex items-center gap-3 text-base hover:text-[#ffc502] transition-colors font-medium"
                                    >
                                        <item.icon className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="group">
                        <div className="relative mb-6 pb-3">
                            <h3 className="text-2xl font-black uppercase tracking-tight relative inline-block">
                                Subscribe
                                <div className="absolute -bottom-0 left-0 w-0 h-1 bg-[#8c52ff] group-hover:w-full transition-all duration-500" />
                            </h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4 font-medium">
                            Weekly updates delivered to your inbox
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:border-pink-500 focus:outline-none text-sm font-medium text-white placeholder:text-gray-400 transition-colors"
                            />
                            <button className="w-full px-4 py-3 bg-white hover:bg-pink-500 text-black hover:text-white font-bold uppercase text-sm tracking-wider transition-colors flex items-center justify-center gap-2">
                                Subscribe
                                <Mail className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flickering Grid Animation - CLEAN */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-black">

                {/* Gradient Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10 opacity-80" />

                {/* FlickeringGrid */}
                <div className="absolute inset-0 mx-6 z-0">
                    <FlickeringGrid
                        text="ARTHACHAIN"
                        fontSize={tablet ? 70 : 120}
                        className="h-full w-full"
                        squareSize={3}
                        gridGap={tablet ? 3 : 4}
                        color="#8c52ff"
                        textColor="#ff4080"
                        maxOpacity={0.5}
                        flickerChance={0.15}
                    />
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-black text-white py-6 text-center border-t border-white/10">
                <p className="text-xs font-bold tracking-[0.2em] uppercase">
                    COPYRIGHT ©2025 DIIGOO TECH PRIVATE LIMITED
                </p>
            </div>
        </footer>
    );
}
