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
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12">



                {/* Links Grid - Professional Layout with mobile optimization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">

                    {/* About ArthaChain */}
                    <div className="group">
                        <div className="relative mb-6 pb-3">
                            <h3 className="text-2xl font-black uppercase tracking-tight relative inline-block">
                                About ArthaChain
                                <div className="absolute -bottom-0 left-0 w-0 h-1 bg-[#8c52ff] group-hover:w-full transition-all duration-500" />
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: 'About', href: '/about' },
                                { name: 'What is ArthaChain', href: '/what-is-arthachain' },
                                { name: 'Mission & Vision', href: '/mission' },
                                { name: 'Technology', href: '/technology' },
                                { name: 'Contact Us', href: '/contact' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className="group/link flex items-center gap-2 text-base text-gray-300 hover:text-[#8c52ff] transition-colors font-medium"
                                    >
                                        <div className="w-0 h-[2px] bg-[#8c52ff] group-hover/link:w-4 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ArthaCore */}
                    <div className="group">
                        <div className="relative mb-6 pb-3">
                            <h3 className="text-2xl font-black uppercase tracking-tight relative inline-block">
                                ArthaCore
                                <div className="absolute -bottom-0 left-0 w-0 h-1 bg-[#8c52ff] group-hover:w-full transition-all duration-500" />
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: 'Technology', href: '/core-technology' },
                                { name: 'Architecture', href: '/core/architecture' },
                                { name: 'Dual-Chain System', href: '/core/dual-chain' },
                                { name: 'Dual VM', href: '/core/dual-vm' },
                                { name: 'Consensus', href: '/core/consensus' },
                                { name: 'Security Model', href: '/core/security' },
                                { name: 'Protocol Papers', href: '/core/papers' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className="group/link flex items-center gap-2 text-base text-gray-300 hover:text-[#8c52ff] transition-colors font-medium"
                                    >
                                        <div className="w-0 h-[2px] bg-[#8c52ff] group-hover/link:w-4 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ArthaVerse */}
                    <div className="group">
                        <div className="relative mb-6 pb-3">
                            <h3 className="text-2xl font-black uppercase tracking-tight relative inline-block">
                                ArthaVerse
                                <div className="absolute -bottom-0 left-0 w-0 h-1 bg-[#ffc502] group-hover:w-full transition-all duration-500" />
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: 'Features', href: '/arthaverse/features' },
                                { name: 'DID (Identity Layer)', href: '/features/did' },
                                { name: 'AI Suite', href: '/features/ai' },
                                { name: 'SocialFi', href: '/features/socialfi' },
                                { name: 'Enterprise', href: '/features/enterprise' },
                                { name: 'DeFi', href: '/features/defi' },
                                { name: 'Gaming / XR', href: '/features/gaming' },
                                { name: 'Use Cases', href: '/features/use-cases' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className="group/link flex items-center gap-2 text-base text-gray-300 hover:text-[#ffc502] transition-colors font-medium"
                                    >
                                        <div className="w-0 h-[2px] bg-[#ffc502] group-hover/link:w-4 transition-all" />
                                        {item.name}
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
                                <div className="absolute -bottom-0 left-0 w-0 h-1 bg-[#ff4080] group-hover:w-full transition-all duration-500" />
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: 'Artha Collective', href: '/community/collective' },
                                { name: 'Ambassadors', href: '/community/ambassadors' },
                                { name: 'Campus Program', href: '/community/campus' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className="group/link flex items-center gap-2 text-base text-gray-300 hover:text-[#ff4080] transition-colors font-medium"
                                    >
                                        <div className="w-0 h-[2px] bg-[#ff4080] group-hover/link:w-4 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-white/10">
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">Social</p>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/arthachain' },
                                        { name: 'X (Twitter)', icon: Twitter, href: 'https://twitter.com/arthachain' },
                                        { name: 'Telegram', icon: MessageCircle, href: 'https://t.me/arthachain' },
                                        { name: 'GitHub', icon: Github, href: 'https://github.com/arthachain' },
                                        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/arthachain' }
                                    ].map((item, i) => (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link flex items-center gap-3 text-sm hover:text-[#ff4080] transition-colors font-medium"
                                        >
                                            <item.icon className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Future sections will go here - ready for 3 more columns */}
                    {/* When adding new sections, change lg:grid-cols-4 to lg:grid-cols-5, lg:grid-cols-6, lg:grid-cols-7 */}
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
