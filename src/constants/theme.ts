/**
 * Theme Configuration for ArthaChain Website
 * Define colors, gradients, and visual constants
 */

export const colors = {
    primary: {
        light: '#00d4ff',
        main: '#0099ff',
        dark: '#0066cc',
        gradient: 'linear-gradient(135deg, #0099ff 0%, #00d4ff 100%)',
    },
    secondary: {
        light: '#ff6b9d',
        main: '#ff3366',
        dark: '#cc0033',
        gradient: 'linear-gradient(135deg, #ff3366 0%, #ff6b9d 100%)',
    },
    accent: {
        purple: '#a855f7',
        cyan: '#06b6d4',
        emerald: '#10b981',
        amber: '#f59e0b',
    },
    background: {
        dark: '#0a0a0f',
        darker: '#050508',
        card: 'rgba(15, 15, 25, 0.8)',
        cardHover: 'rgba(25, 25, 40, 0.9)',
    },
    text: {
        primary: '#ffffff',
        secondary: '#a0aec0',
        muted: '#718096',
    },
} as const;

export const gradients = {
    hero: 'radial-gradient(ellipse at top, rgba(0, 153, 255, 0.15), transparent 50%)',
    card: 'linear-gradient(135deg, rgba(0, 153, 255, 0.1) 0%, rgba(255, 51, 102, 0.1) 100%)',
    mesh: 'linear-gradient(120deg, #0099ff, #a855f7, #ff3366)',
    blockchain: 'linear-gradient(90deg, #06b6d4, #0099ff, #a855f7)',
} as const;

export const animations = {
    duration: {
        fast: 0.2,
        normal: 0.3,
        slow: 0.5,
        verySlow: 0.8,
    },
    easing: {
        easeOut: [0, 0.55, 0.45, 1],
        easeInOut: [0.42, 0, 0.58, 1],
        spring: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
} as const;

export const spacing = {
    section: {
        xs: '4rem',
        sm: '6rem',
        md: '8rem',
        lg: '10rem',
        xl: '12rem',
    },
    container: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
} as const;

export const effects = {
    blur: {
        sm: 'blur(4px)',
        md: 'blur(8px)',
        lg: 'blur(12px)',
        xl: 'blur(24px)',
    },
    shadow: {
        glow: '0 0 20px rgba(0, 153, 255, 0.3)',
        glowLarge: '0 0 40px rgba(0, 153, 255, 0.4)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        cardHover: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
} as const;
