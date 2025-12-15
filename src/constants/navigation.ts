/**
 * Navigation Configuration
 */

export interface NavItem {
    label: string;
    href: string;
    description?: string;
    external?: boolean;
}

export interface NavCategory {
    label: string;
    icon?: string;
    href?: string;
    dropdown?: NavItem[];
}

export const mainNavigation: NavCategory[] = [
    { label: 'Home', href: '/' },
    {
        label: 'About ArthaChain',
        icon: '🟣',
        dropdown: [
            { label: 'What is ArthaChain', href: '/what-is-arthachain', description: 'Product & technology overview' },
            { label: 'Mission & Vision', href: '/mission', description: 'Our goals and purpose' },
            { label: 'About Us', href: '/about', description: 'Learn about our vision' },
            { label: 'Technology Overview', href: '/technology', description: 'Technical foundation' },
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
            { label: 'Docs', href: '#docs', description: 'Developer documentation' },
            { label: 'SDKs', href: '#sdks', description: 'Software development kits' },
            { label: 'Explorer', href: '#explorer', description: 'Blockchain explorer' },
            { label: 'Testnet / Faucet', href: '#testnet', description: 'Test network access' },
            { label: 'Validator Hub', href: '#validators', description: 'Run a validator' },
            { label: 'Bounties & Grants', href: '#bounties', description: 'Funding opportunities' },
            { label: 'Tutorials', href: '#tutorials', description: 'Step-by-step guides' },
            { label: 'GitHub', href: 'https://github.com/arthachain', description: 'Source code', external: true },
        ],
    },
    {
        label: 'ArthaVerse',
        icon: '💛',
        dropdown: [
            { label: 'DID (Identity Layer)', href: '/features#did', description: 'Decentralized identity' },
            { label: 'AI Suite', href: '/features#ai', description: 'AI-powered tools' },
            { label: 'SocialFi', href: '/features#social', description: 'Social finance' },
            { label: 'Enterprise', href: '/features#enterprise', description: 'Business solutions' },
            { label: 'DeFi', href: '/features#defi', description: 'Decentralized finance' },
            { label: 'Gaming / XR', href: '/features#gaming', description: 'Gaming & metaverse' },
            { label: 'Use Cases', href: '/features', description: 'Real-world applications' },
        ],
    },
    {
        label: 'Learn',
        icon: '⚪',
        dropdown: [
            { label: 'Whitepaper', href: '#whitepaper', description: 'Complete technical paper' },
            { label: 'Roadmap', href: '#roadmap', description: 'Development timeline' },
            { label: 'Blog', href: '/blog', description: 'Latest updates & insights' },
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
            { label: 'Artha Collective', href: '#collective', description: 'Join our community' },
            { label: 'Ambassadors', href: '#ambassadors', description: 'Become an ambassador' },
            { label: 'Campus Program', href: '#campus', description: 'University initiatives' },
            { label: 'Events', href: '#events', description: 'Upcoming events' },
            { label: 'Rewards', href: '#rewards', description: 'Earn rewards' },
            { label: 'Careers', href: '#careers', description: 'Join the team' },
            { label: 'Newsletter', href: '#newsletter', description: 'Stay updated' },
            { label: 'FAQ', href: '/faq', description: 'Common questions answered' },
            { label: 'Discord', href: 'https://discord.gg/arthachain', description: 'Join our Discord', external: true },
            { label: 'X (Twitter)', href: 'https://twitter.com/arthachain', description: 'Follow us on X', external: true },
            { label: 'Telegram', href: 'https://t.me/arthachain', description: 'Join Telegram group', external: true },
            { label: 'GitHub', href: 'https://github.com/arthachain', description: 'View source code', external: true },
            { label: 'LinkedIn', href: 'https://linkedin.com/company/arthachain', description: 'Connect on LinkedIn', external: true },
        ],
    },
];

export const footerNavigation = {
    about: [
        { label: 'What is ArthaChain', href: '/about' },
        { label: 'Mission & Vision', href: '/about#mission' },
        { label: 'Technology', href: '/technology' },
        { label: 'Contact', href: '#contact' },
    ],
    developers: [
        { label: 'Documentation', href: '/docs' },
        { label: 'GitHub', href: 'https://github.com/arthachain', external: true },
        { label: 'Testnet', href: '#testnet' },
        { label: 'SDKs', href: '#sdks' },
    ],
    products: [
        { label: 'Features', href: '/features' },
        { label: 'DID System', href: '/features#did' },
        { label: 'AI Suite', href: '/features#ai' },
        { label: 'Enterprise', href: '/features#enterprise' },
    ],
    community: [
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Events', href: '#events' },
        { label: 'Careers', href: '#careers' },
    ],
};

export const socialLinks = [
    {
        name: 'Discord',
        href: 'https://discord.gg/arthachain',
        icon: 'discord',
    },
    {
        name: 'X (Twitter)',
        href: 'https://twitter.com/arthachain',
        icon: 'twitter',
    },
    {
        name: 'Telegram',
        href: 'https://t.me/arthachain',
        icon: 'telegram',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/arthachain',
        icon: 'github',
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/arthachain',
        icon: 'linkedin',
    },
];
