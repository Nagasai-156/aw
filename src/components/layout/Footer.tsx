'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FlickeringGrid, useMediaQuery } from '@/components/ui/flickering-grid';

export default function Footer() {
    const tablet = useMediaQuery("(max-width: 1024px)");

    return (
        <footer className="relative w-full bg-black text-white overflow-hidden pb-0">
            {/* Vertical Bars Decoration */}
            <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-white overflow-hidden">
                <div className="max-w-[1600px] mx-auto h-full flex items-end gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
                    {[85, 45, 95, 60, 75, 50, 88, 65, 92, 55, 80, 48, 90, 58, 78, 52].map((height, i) => (
                        <div
                            key={i}
                            className="w-1 bg-black transition-all duration-300"
                            style={{ height: `${height}%` }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-10 sm:pb-12 md:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto">
                    {/* CTA Section */}
                    <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] mb-6 sm:mb-8 md:mb-10 max-w-[550px]">
                            Build the future with<br />
                            ArthaChain
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                            <button className="bg-[#8c52ff] hover:bg-[#ff4080] text-white px-8 sm:px-10 py-3 sm:py-4 text-[13px] sm:text-[14px] font-bold uppercase transition-all duration-200 w-full sm:w-auto">
                                Get Started
                            </button>
                            <button className="bg-white hover:bg-gray-100 text-black px-8 sm:px-10 py-3 sm:py-4 text-[13px] sm:text-[14px] font-bold uppercase transition-all duration-200 w-full sm:w-auto">
                                Request a demo
                            </button>
                        </div>
                    </div>

                    {/* Footer Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20 lg:mb-24">
                        {/* Logo */}
                        <div className="sm:col-span-2 lg:col-span-3">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-[#8c52ff] flex items-center justify-center flex-shrink-0">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-7 h-7"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="square"
                                    >
                                        <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" />
                                    </svg>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[22px] font-black tracking-tight leading-none">ARTHACHAIN</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="sm:col-span-1 lg:col-span-3">
                            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-7 text-[#8c52ff]">
                                RESOURCES
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Documentation', href: '/docs' },
                                    { title: 'Guides', href: '/guides' },
                                    { title: 'Whitepaper', href: '#' },
                                    { title: 'Changelog', href: '#' },
                                    { title: 'For Developers', href: '/dev' },
                                    { title: 'Articles', href: '#' }
                                ].map((link, i) => (
                                    <li key={i} className="group inline-flex cursor-pointer items-center justify-start gap-1">
                                        <Link href={link.href} className="text-[15px] hover:text-[#8c52ff] transition-colors">
                                            {link.title}
                                        </Link>
                                        <div className="flex size-4 items-center justify-center border border-white/20 rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="sm:col-span-1 lg:col-span-3">
                            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-7 text-[#ff4080]">
                                COMPANY
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { title: 'About', href: '/about' },
                                    { title: 'Blog', href: '#' },
                                    { title: 'Careers', href: '#' },
                                    { title: 'Contact us', href: '/community' },
                                    { title: 'Privacy Policy', href: '#' },
                                    { title: 'Terms of Service', href: '#' }
                                ].map((link, i) => (
                                    <li key={i} className="group inline-flex cursor-pointer items-center justify-start gap-1">
                                        <Link href={link.href} className="text-[15px] hover:text-[#ff4080] transition-colors">
                                            {link.title}
                                        </Link>
                                        <div className="flex size-4 items-center justify-center border border-white/20 rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Community */}
                        <div className="sm:col-span-2 lg:col-span-3">
                            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-7 text-[#ffc502]">
                                COMMUNITY
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { title: 'GitHub', href: '#' },
                                    { title: 'Discord', href: '#' },
                                    { title: 'Newsletter', href: '#' },
                                    { title: 'X (Twitter)', href: '#' },
                                    { title: 'YouTube', href: '#' },
                                    { title: 'LinkedIn', href: '#' }
                                ].map((link, i) => (
                                    <li key={i} className="group inline-flex cursor-pointer items-center justify-start gap-1">
                                        <Link href={link.href} className="text-[15px] hover:text-[#ffc502] transition-colors">
                                            {link.title}
                                        </Link>
                                        <div className="flex size-4 items-center justify-center border border-white/20 rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 md:pt-10 border-t border-gray-800">
                        <div className="flex items-baseline gap-2.5">
                            <span className="text-[26px] font-black tracking-tight">ARTHACHAIN</span>
                            <span className="text-[12px] font-normal tracking-[0.05em]">NETWORK</span>
                        </div>
                        <div className="text-[10px] text-gray-600 tracking-[0.08em] font-medium">
                            COPYRIGHT ©2025 ARTHACHAIN NETWORK, INC
                        </div>
                    </div>
                </div>
            </div>

            {/* Flickering Grid Animation */}
            <div className="w-full h-48 md:h-64 relative mt-24 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black z-10 from-40%" />
                <div className="absolute inset-0 mx-6">
                    <FlickeringGrid
                        text={tablet ? "ARTHACHAIN" : "ARTHACHAIN NETWORK"}
                        fontSize={tablet ? 60 : 90}
                        className="h-full w-full"
                        squareSize={2}
                        gridGap={tablet ? 2 : 3}
                        color="#8c52ff"
                        maxOpacity={0.3}
                        flickerChance={0.1}
                    />
                </div>
            </div>
        </footer>
    );
}
