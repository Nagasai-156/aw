'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
            <div className="max-w-[1400px] mx-auto px-8">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-11 h-11 bg-black flex items-center justify-center flex-shrink-0">
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
                            <span className="text-[28px] font-black tracking-tight leading-none">ARTHACHAIN</span>
                            <span className="text-[13px] font-normal tracking-[0.05em] leading-none">NETWORK</span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-10">
                        <Link
                            href="/about"
                            className="text-[13px] font-medium tracking-[0.02em] hover:opacity-60 transition-opacity"
                        >
                            / ABOUT
                        </Link>
                        <Link
                            href="/technology"
                            className="text-[13px] font-medium tracking-[0.02em] hover:opacity-60 transition-opacity"
                        >
                            / TECHNOLOGY
                        </Link>
                        <Link
                            href="/features"
                            className="text-[13px] font-medium tracking-[0.02em] hover:opacity-60 transition-opacity"
                        >
                            / FEATURES
                        </Link>
                        <Link
                            href="/ecosystem"
                            className="text-[13px] font-medium tracking-[0.02em] hover:opacity-60 transition-opacity"
                        >
                            / ECOSYSTEM
                        </Link>
                        <Button
                            asChild
                            className="bg-black text-white hover:bg-black/90 px-9 py-6 text-[13px] font-medium tracking-[0.02em] rounded-none h-auto"
                        >
                            <Link href="/contact">CONTACT</Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
