/**
 * Navigation Configuration
 */

export interface NavItem {
    label: string;
    href: string;
    description?: string;
}

export const mainNavigation: NavItem[] = [
    {
        label: 'Home',
        href: '/',
        description: 'Back to homepage',
    },
    {
        label: 'About',
        href: '/about',
        description: 'Learn about ArthaChain',
    },
    {
        label: 'Technology',
        href: '/technology',
        description: 'Explore our technology stack',
    },
    {
        label: 'Ecosystem',
        href: '/ecosystem',
        description: 'Discover the ecosystem',
    },
    {
        label: 'Docs',
        href: '/docs',
        description: 'Read the documentation',
    },
];

export const footerNavigation = {
    product: [
        { label: 'Features', href: '#features' },
        { label: 'Technology', href: '/technology' },
        { label: 'Roadmap', href: '#roadmap' },
        { label: 'Whitepaper', href: '#' },
    ],
    developers: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '#' },
        { label: 'GitHub', href: '#' },
        { label: 'SDKs', href: '#' },
    ],
    company: [
        { label: 'About', href: '/about' },
        { label: 'Team', href: '#team' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
    ],
    community: [
        { label: 'Discord', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'Telegram', href: '#' },
        { label: 'Forum', href: '#' },
    ],
};

export const socialLinks = [
    {
        name: 'Twitter',
        href: '#',
        icon: 'twitter',
    },
    {
        name: 'Discord',
        href: '#',
        icon: 'discord',
    },
    {
        name: 'GitHub',
        href: '#',
        icon: 'github',
    },
    {
        name: 'Telegram',
        href: '#',
        icon: 'telegram',
    },
];
