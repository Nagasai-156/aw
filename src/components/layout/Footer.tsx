'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative w-full bg-black text-white overflow-hidden">
            {/* Vertical Bars Decoration */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-white overflow-hidden">
                <div className="max-w-[1600px] mx-auto h-full flex items-end gap-8 px-8">
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
            <div className="pt-40 pb-16 px-8">
                <div className="max-w-[1400px] mx-auto">
                    {/* CTA Section */}
                    <div className="mb-32">
                        <h2 className="text-[52px] font-semibold leading-[1.1] mb-10 max-w-[550px]">
                            Bring structure to your<br />
                            AI agent development
                        </h2>
                        <div className="flex gap-5">
                            <button className="bg-[#5B5FED] hover:bg-[#4F46E5] text-white px-10 py-4 text-[14px] font-semibold rounded-lg transition-all duration-200">
                                Sign up
                            </button>
                            <button className="bg-white hover:bg-gray-100 text-black px-10 py-4 text-[14px] font-semibold rounded-lg transition-all duration-200">
                                Request a demo
                            </button>
                        </div>
                    </div>

                    {/* Footer Links Grid */}
                    <div className="grid grid-cols-12 gap-12 mb-24">
                        {/* Logo */}
                        <div className="col-span-3">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-white flex items-center justify-center flex-shrink-0">
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
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[22px] font-black tracking-tight leading-none">ARTHACHAIN</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="col-span-3">
                            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-7 text-gray-500">
                                RESOURCES
                            </h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Documentation</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Guides</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Whitepaper</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Changelog</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">For Developers</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Articles</Link></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="col-span-3">
                            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-7 text-gray-500">
                                COMPANY
                            </h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">About</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Blog</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Careers</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Contact us</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>

                        {/* Community */}
                        <div className="col-span-3">
                            <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-7 text-gray-500">
                                COMMUNITY
                            </h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">GitHub</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Discord</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">Newsletter</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">X (Twitter)</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">YouTube</Link></li>
                                <li><Link href="#" className="text-[15px] hover:text-gray-400 transition-colors">LinkedIn</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex items-center justify-between pt-10 border-t border-gray-800">
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
        </footer>
    );
}
