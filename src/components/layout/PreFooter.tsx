'use client';

import Link from 'next/link';

export default function PreFooter() {
    return (
        <section className="relative w-full bg-white border-t border-black/10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left Column - Logo, Social, Contact */}
                    <div className="lg:col-span-5 lg:pr-16 lg:border-r border-black/10">
                        {/* Logo */}
                        <div className="mb-10 sm:mb-16">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-black flex items-center justify-center">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-6 h-6 sm:w-7 sm:h-7"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="square"
                                    >
                                        <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" />
                                    </svg>
                                </div>
                                <div className="flex items-baseline gap-2.5">
                                    <span className="text-2xl sm:text-[32px] font-black tracking-tight leading-none">ARTHACHAIN</span>
                                </div>
                            </div>
                            <div className="text-[12px] sm:text-[14px] font-medium tracking-[0.08em] ml-12 sm:ml-14">
                                NETWORK
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mb-10 sm:mb-16">
                            <h3 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 sm:mb-6 text-black">
                                SOCIAL
                            </h3>
                            <ul className="flex flex-wrap gap-4 sm:block sm:space-y-3">
                                <li>
                                    <Link href="#" className="text-[14px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                        DISCORD
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-[14px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                        TWITTER
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-[14px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                        GITHUB
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-[14px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                        TELEGRAM
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="hidden lg:block">
                            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 text-black">
                                CONTACT
                            </h3>
                            <a
                                href="mailto:HELLO@ARTHACHAIN.IO"
                                className="text-[15px] font-normal hover:opacity-60 transition-opacity"
                            >
                                HELLO@ARTHACHAIN.IO
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Links & Subscribe */}
                    <div className="lg:col-span-7">
                        {/* Top Section - Quick Links & Meta */}
                        <div className="grid grid-cols-2 gap-8 sm:gap-16 mb-12 sm:mb-20">
                            {/* Quick Links */}
                            <div>
                                <h3 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 sm:mb-6 text-black">
                                    QUICK LINKS
                                </h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    <li>
                                        <Link href="/about" className="text-[13px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            / ABOUT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/technology" className="text-[13px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            / TECHNOLOGY
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="text-[13px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            / BLOG
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="text-[13px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            / FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h3 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 sm:mb-6 text-black">
                                    RESOURCES
                                </h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    <li>
                                        <Link href="#" className="text-[13px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            DOCUMENTATION
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-[13px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            WHITEPAPER
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-[13px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            API REFERENCE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-[13px] sm:text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            DEVELOPER TOOLS
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Subscribe Section */}
                        <div className="relative">
                            {/* Star Icon (top right) */}
                            <div className="absolute -top-16 sm:-top-24 right-0 hidden sm:block">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#00FF41] flex items-center justify-center">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-6 h-6 sm:w-7 sm:h-7"
                                        stroke="black"
                                        strokeWidth="2.5"
                                        strokeLinecap="square"
                                    >
                                        <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 sm:mb-8 text-black">
                                SUBSCRIBE FOR UPDATES
                            </h3>
                            <form className="space-y-4 sm:space-y-5">
                                <input
                                    type="email"
                                    placeholder="EMAIL ADDRESS"
                                    className="w-full border border-black px-4 sm:px-6 py-3 sm:py-4 text-[12px] sm:text-[13px] font-medium tracking-[0.05em] placeholder:text-gray-400 focus:outline-none focus:border-black/60"
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto border border-black px-8 sm:px-10 py-3 sm:py-4 text-[12px] sm:text-[13px] font-medium tracking-[0.05em] hover:bg-black hover:text-white transition-all duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-black/10">
                    <p className="text-[12px] sm:text-[13px] font-normal text-center sm:text-left">
                        Copyright © 2025 ArthaChain Network. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
