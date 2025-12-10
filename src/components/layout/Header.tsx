'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-black flex items-center justify-center flex-shrink-0">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-5 h-5 sm:w-7 sm:h-7"
                                stroke="white"
                                strokeWidth="2.5"
                                strokeLinecap="square"
                            >
                                <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" />
                            </svg>
                        </div>
                        <div className="flex items-baseline gap-1.5 sm:gap-2.5">
                            <span className="text-lg sm:text-xl md:text-[28px] font-black tracking-tight leading-none">ARTHACHAIN</span>
                            <span className="hidden sm:inline text-[11px] md:text-[13px] font-normal tracking-[0.05em] leading-none">NETWORK</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-10">
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
                            className="bg-black text-white hover:bg-black/90 px-7 xl:px-9 py-5 xl:py-6 text-[13px] font-medium tracking-[0.02em] rounded-none h-auto"
                        >
                            <Link href="/contact">CONTACT</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 hover:bg-black/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-black/10 py-4 space-y-1">
                        <Link
                            href="/about"
                            className="block px-4 py-3 text-[13px] font-medium tracking-[0.02em] hover:bg-black/5 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            / ABOUT
                        </Link>
                        <Link
                            href="/technology"
                            className="block px-4 py-3 text-[13px] font-medium tracking-[0.02em] hover:bg-black/5 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            / TECHNOLOGY
                        </Link>
                        <Link
                            href="/features"
                            className="block px-4 py-3 text-[13px] font-medium tracking-[0.02em] hover:bg-black/5 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            / FEATURES
                        </Link>
                        <Link
                            href="/ecosystem"
                            className="block px-4 py-3 text-[13px] font-medium tracking-[0.02em] hover:bg-black/5 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            / ECOSYSTEM
                        </Link>
                        <div className="px-4 pt-2">
                            <Button
                                asChild
                                className="w-full bg-black text-white hover:bg-black/90 px-6 py-5 text-[13px] font-medium tracking-[0.02em] rounded-none h-auto"
                            >
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
