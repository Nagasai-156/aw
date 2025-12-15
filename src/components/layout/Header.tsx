'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavDropdownItem {
    label: string;
    href: string;
    description: string;
    external?: boolean;
}

interface NavItem {
    label: string;
    href?: string;
    icon?: string;
    dropdown?: NavDropdownItem[];
}


const navigationItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'About ArthaChain',
        icon: '🟣',
        dropdown: [
            { label: 'About', href: '/about', description: 'Learn about our vision' },
            { label: 'What is ArthaChain', href: '/what-is-arthachain', description: 'Discover the platform' },
            { label: 'Mission & Vision', href: '/mission', description: 'Our goals and purpose' },
            { label: 'Technology', href: '/technology', description: 'Technical foundation' },
            { label: 'Contact Us', href: '/contact', description: 'Get in touch' },
        ],
    },
    {
        label: 'ArthaCore',
        icon: '🟣',
        dropdown: [
            { label: 'Technology', href: '/core-technology', description: 'Core protocol overview' },
            { label: 'Architecture', href: '/core/architecture', description: 'System design' },
            { label: 'Dual-Chain System', href: '/core/dual-chain', description: 'Two-layer approach' },
            { label: 'Dual VM (EVM + WASM)', href: '/core/dual-vm', description: 'Virtual machines' },
            { label: 'Consensus', href: '/core/consensus', description: 'Agreement protocol' },
            { label: 'Security Model', href: '/core/security', description: 'Protection mechanisms' },
            { label: 'Network Status', href: '/core/network-status', description: 'Live network stats' },
            { label: 'Protocol Papers', href: '/core/papers', description: 'Technical documentation' },
        ],
    },
    {
        label: 'ArthaDev Hub',
        icon: '⚫',
        dropdown: [
            { label: 'Docs', href: '/dev/docs', description: 'Developer documentation' },
            { label: 'SDKs', href: '/dev/sdks', description: 'Software development kits' },
            { label: 'Explorer', href: '/dev/explorer', description: 'Blockchain explorer' },
            { label: 'Testnet / Faucet', href: '/dev/testnet', description: 'Test network access' },
            { label: 'Validator Hub', href: '/dev/validators', description: 'Run a validator' },
            { label: 'Bounties & Grants', href: '/dev/bounties', description: 'Funding opportunities' },
            { label: 'Tutorials', href: '/dev/tutorials', description: 'Step-by-step guides' },
            { label: 'GitHub', href: 'https://github.com/arthachain', description: 'Source code', external: true },
        ],
    },
    {
        label: 'ArthaVerse',
        icon: '💛',
        dropdown: [
            { label: 'Features', href: '/features', description: 'All ArthaChain features' },
            { label: 'DID (Identity Layer)', href: '/features/did', description: 'Decentralized identity' },
            { label: 'AI Suite', href: '/features/ai', description: 'AI-powered tools' },
            { label: 'SocialFi', href: '/features/socialfi', description: 'Social finance' },
            { label: 'Enterprise', href: '/features/enterprise', description: 'Business solutions' },
            { label: 'DeFi', href: '/features/defi', description: 'Decentralized finance' },
            { label: 'Gaming / XR', href: '/features/gaming', description: 'Gaming & metaverse' },
            { label: 'Use Cases', href: '/features/use-cases', description: 'Real-world applications' },
        ],
    },
    {
        label: 'Learn',
        icon: '⚪',
        dropdown: [
            { label: 'Blog', href: '/blog', description: 'Latest updates & insights' },
            { label: 'FAQ', href: '/faq', description: 'Common questions answered' },
            { label: 'Whitepaper', href: '#whitepaper', description: 'Complete technical paper' },
            { label: 'Roadmap', href: '#roadmap', description: 'Development timeline' },
            { label: 'Beginner Guides', href: '#guides', description: 'Getting started' },
            { label: 'Research', href: '#research', description: 'Academic papers' },
            { label: 'E-books', href: '#ebooks', description: 'Educational resources' },
            { label: 'Security Audits', href: '#audits', description: 'Security reports' },
        ],
    },
    {
        label: 'Community',
        icon: '💗',
        dropdown: [
            { label: 'Artha Collective', href: '/community/collective', description: 'Join our community' },
            { label: 'Ambassadors', href: '/community/ambassadors', description: 'Become an ambassador' },
            { label: 'Campus Program', href: '/community/campus', description: 'University initiatives' },
            { label: 'Events', href: '/community/events', description: 'Upcoming events' },
            { label: 'Rewards', href: '/community/rewards', description: 'Earn rewards' },
            { label: 'Careers', href: '/community/careers', description: 'Join the team' },
            { label: 'Newsletter', href: '/community/newsletter', description: 'Stay updated' },
            { label: 'Discord', href: 'https://discord.gg/arthachain', description: 'Join our Discord', external: true },
            { label: 'X (Twitter)', href: 'https://twitter.com/arthachain', description: 'Follow us on X', external: true },
            { label: 'Telegram', href: 'https://t.me/arthachain', description: 'Join Telegram group', external: true },
            { label: 'GitHub', href: 'https://github.com/arthachain', description: 'View source code', external: true },
            { label: 'LinkedIn', href: 'https://linkedin.com/company/arthachain', description: 'Connect on LinkedIn', external: true },
        ],
    },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileOpenMenus, setMobileOpenMenus] = useState<string[]>([]);

    const toggleMobileSubmenu = (label: string) => {
        setMobileOpenMenus(prev =>
            prev.includes(label)
                ? prev.filter(item => item !== label)
                : [...prev, label]
        );
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 bg-black flex items-center justify-center group-hover:bg-[#8c52ff] transition-colors">
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
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl sm:text-[22px] font-black tracking-tight leading-none">ARTHACHAIN</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navigationItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {item.dropdown ? (
                                    <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-bold uppercase tracking-wide hover:text-[#8c52ff] transition-colors">
                                        {item.label}
                                        <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href || '#'}
                                        className="px-4 py-2 text-[13px] font-bold uppercase tracking-wide hover:text-[#8c52ff] transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* Mega Menu Dropdown */}
                                {item.dropdown && activeDropdown === item.label && (
                                    <div className={`absolute top-full mt-0 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                                        // Right-align for ArthaVerse, Learn, and Community (last 3 items)
                                        ['ArthaVerse', 'Learn', 'Community'].includes(item.label)
                                            ? (item.dropdown.length > 8 ? 'w-[800px] right-0' :
                                                item.dropdown.length > 4 ? 'w-[600px] right-0' :
                                                    'w-[400px] right-0')
                                            : (item.dropdown.length > 8 ? 'w-[800px] left-0' :
                                                item.dropdown.length > 4 ? 'w-[600px] left-0' :
                                                    'w-[400px] left-0')
                                        }`}>
                                        <div className={`grid ${item.dropdown.length > 8 ? 'grid-cols-3' :
                                            item.dropdown.length > 4 ? 'grid-cols-2' :
                                                'grid-cols-1'
                                            } gap-0`}>
                                            {item.dropdown.map((subItem, index) => (
                                                <Link
                                                    key={index}
                                                    href={subItem.href}
                                                    target={subItem.external ? '_blank' : undefined}
                                                    rel={subItem.external ? 'noopener noreferrer' : undefined}
                                                    className="group px-6 py-4 border-b border-r border-black/10 last:border-b-0 hover:bg-black hover:text-white transition-all duration-200"
                                                >
                                                    <div className="text-sm font-bold uppercase mb-1 flex items-center gap-2">
                                                        {subItem.label}
                                                        {subItem.external && (
                                                            <span className="text-xs">↗</span>
                                                        )}
                                                    </div>
                                                    <div className="text-xs text-gray-600 group-hover:text-gray-300 line-clamp-2">
                                                        {subItem.description}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:block">
                        <Link
                            href="#waitlist"
                            className="inline-block bg-[#8c52ff] text-white hover:bg-[#ff4080] px-6 py-3 text-[13px] font-bold uppercase tracking-wide transition-colors border-2 border-[#8c52ff] hover:border-[#ff4080]"
                        >
                            GET STARTED
                        </Link>
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
                    <div className="lg:hidden border-t-2 border-black py-4 space-y-1 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
                        {navigationItems.map((item) => (
                            <div key={item.label}>
                                {item.dropdown ? (
                                    <div>
                                        <button
                                            onClick={() => toggleMobileSubmenu(item.label)}
                                            className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold uppercase hover:bg-black/5 transition-colors"
                                        >
                                            {item.label}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform ${mobileOpenMenus.includes(item.label) ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {/* Mobile Submenu */}
                                        {mobileOpenMenus.includes(item.label) && (
                                            <div className="bg-gray-50 border-y border-gray-200">
                                                {item.dropdown.map((subItem, index) => (
                                                    <Link
                                                        key={index}
                                                        href={subItem.href}
                                                        target={subItem.external ? '_blank' : undefined}
                                                        rel={subItem.external ? 'noopener noreferrer' : undefined}
                                                        className="block px-8 py-3 text-sm hover:bg-black hover:text-[#8c52ff] transition-colors"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <div className="font-bold mb-0.5">
                                                            {subItem.label}
                                                            {subItem.external && <span className="ml-1 text-xs">↗</span>}
                                                        </div>
                                                        <div className="text-xs text-gray-600">
                                                            {subItem.description}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href || '#'}
                                        className="block px-4 py-3 text-sm font-bold uppercase hover:bg-black hover:text-[#8c52ff] transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile CTA */}
                        <div className="px-4 pt-4">
                            <Link
                                href="#waitlist"
                                className="block text-center bg-[#8c52ff] text-white hover:bg-[#ff4080] px-6 py-3 text-sm font-bold uppercase transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                GET STARTED
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
