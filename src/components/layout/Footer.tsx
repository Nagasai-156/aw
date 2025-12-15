'use client';

import Link from 'next/link';
import { ArrowUpRight, Github, Twitter, MessageCircle, Linkedin, Mail } from 'lucide-react';
import { FlickeringGrid, useMediaQuery } from '@/components/ui/flickering-grid';

export default function Footer() {
    const tablet = useMediaQuery("(max-width: 1024px)");

    return (
        <footer className="relative w-full bg-white text-black overflow-hidden">

            {/* White Vertical Bars - At Top */}
            <div className="relative w-full h-20 sm:h-24 md:h-32 bg-black overflow-hidden">
                <div className="max-w-[1600px] mx-auto h-full flex items-end gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
                    {[85, 45, 95, 60, 75, 50, 88, 65, 92, 55, 80, 48, 90, 58, 78, 52].map((height, i) => (
                        <div
                            key={i}
                            className="w-1 bg-white transition-all duration-300 hover:bg-[#8c52ff]"
                            style={{ height: `${height}%` }}
                        />
                    ))}
                </div>
            </div>

            {/* Black Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, black 1px, transparent 1px),
                        linear-gradient(to bottom, black 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-20 pb-12">

                {/* Hero Section - Large CTA */}
                <div className="mb-24 text-center">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                        <span className="inline-block hover:scale-105 transition-transform duration-300">Ready</span>{' '}
                        <span className="inline-block hover:scale-105 transition-transform duration-300">to</span>{' '}
                        <span className="text-[#8c52ff] inline-block hover:scale-110 transition-transform duration-300">
                            Build?
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Join thousands of developers building the future of decentralized applications
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/dev"
                            className="group relative px-10 py-5 bg-black text-white rounded-none text-base font-bold uppercase tracking-wider overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2 justify-center">
                                Get Started
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-[#8c52ff] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </Link>
                        <Link
                            href="/docs"
                            className="px-10 py-5 border-4 border-black hover:bg-black hover:text-white text-black rounded-none text-base font-bold uppercase tracking-wider transition-all"
                        >
                            View Docs
                        </Link>
                    </div>
                </div>

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
                                        className="group/link flex items-center gap-2 text-base hover:text-[#8c52ff] transition-colors font-medium"
                                    >
                                        <div className="w-0 h-[2px] bg-[#8c52ff] group-hover/link:w-4 transition-all" />
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
                        <p className="text-sm text-gray-600 mb-4 font-medium">
                            Weekly updates delivered to your inbox
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 border-2 border-black focus:border-[#8c52ff] focus:outline-none text-sm font-medium transition-colors"
                            />
                            <button className="w-full px-4 py-3 bg-black hover:bg-[#8c52ff] text-white font-bold uppercase text-sm tracking-wider transition-colors flex items-center justify-center gap-2">
                                Subscribe
                                <Mail className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flickering Grid Animation - CLEAN */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-white">

                {/* Gradient Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white z-10 opacity-80" />

                {/* FlickeringGrid */}
                <div className="absolute inset-0 mx-6 z-0">
                    <FlickeringGrid
                        text="ARTHACHAIN"
                        fontSize={tablet ? 70 : 120}
                        className="h-full w-full"
                        squareSize={3}
                        gridGap={tablet ? 3 : 4}
                        color="#8c52ff"
                        maxOpacity={0.5}
                        flickerChance={0.15}
                    />
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-black text-white py-6 text-center">
                <p className="text-xs font-bold tracking-[0.2em] uppercase">
                    COPYRIGHT ©2025 ARTHACHAIN NETWORK, INC
                </p>
            </div>
        </footer>
    );
}
