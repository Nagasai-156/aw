'use client';

import Link from 'next/link';

export default function PreFooter() {
    return (
        <section className="relative w-full bg-white border-t border-black/10">
            <div className="max-w-[1400px] mx-auto px-8 py-16">
                <div className="grid grid-cols-12 gap-16">
                    {/* Left Column - Logo, Social, Contact */}
                    <div className="col-span-5 pr-16 border-r border-black/10">
                        {/* Logo */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-11 h-11 bg-black flex items-center justify-center">
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
                                <div className="flex items-baseline gap-2.5">
                                    <span className="text-[32px] font-black tracking-tight leading-none">CREATOR</span>
                                </div>
                            </div>
                            <div className="text-[14px] font-medium tracking-[0.08em] ml-14">
                                COLLECTIVE
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mb-16">
                            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 text-black">
                                SOCIAL
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                        INSTAGRAM
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                        TIKTOK
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                        YOUTUBE
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                        X
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 text-black">
                                CONTACT
                            </h3>
                            <a
                                href="mailto:HELLO@BAM.DESIGN"
                                className="text-[15px] font-normal hover:opacity-60 transition-opacity"
                            >
                                HELLO@BAM.DESIGN
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Links & Subscribe */}
                    <div className="col-span-7">
                        {/* Top Section - Quick Links & Meta */}
                        <div className="grid grid-cols-2 gap-16 mb-20">
                            {/* Quick Links */}
                            <div>
                                <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 text-black">
                                    QUICK LINKS
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            / ABOUT EVENT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            / EVENT SCHEDULE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            / TESTIMONIAL
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            / CONTACT
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Meta */}
                            <div>
                                <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 text-black">
                                    META
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            STYLE GUIDE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            LICENSE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            CHANGELOG
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-[15px] font-normal hover:opacity-60 transition-opacity">
                                            404 PAGE
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Subscribe Section */}
                        <div className="relative">
                            {/* Star Icon (top right) */}
                            <div className="absolute -top-24 right-0">
                                <div className="w-11 h-11 bg-[#00FF41] flex items-center justify-center">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-7 h-7"
                                        stroke="black"
                                        strokeWidth="2.5"
                                        strokeLinecap="square"
                                    >
                                        <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-8 text-black">
                                SUBSCRIBE US
                            </h3>
                            <form className="space-y-5">
                                <input
                                    type="email"
                                    placeholder="EMAIL ADDRESS"
                                    className="w-full border border-black px-6 py-4 text-[13px] font-medium tracking-[0.05em] placeholder:text-gray-400 focus:outline-none focus:border-black/60"
                                />
                                <button
                                    type="submit"
                                    className="border border-black px-10 py-4 text-[13px] font-medium tracking-[0.05em] hover:bg-black hover:text-white transition-all duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-16 pt-8 border-t border-black/10">
                    <p className="text-[13px] font-normal">
                        Copyright © 2025 Creator Collective by{' '}
                        <span className="font-bold">BAM</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
