/**
 * TypeScript type definitions for ArthaChain website
 */

export interface BlockchainNode {
    id: string;
    position: [number, number, number];
    connections: string[];
    type: 'validator' | 'relay' | 'storage';
    status: 'active' | 'inactive' | 'syncing';
}

export interface Transaction {
    hash: string;
    from: string;
    to: string;
    value: number;
    timestamp: number;
    status: 'pending' | 'confirmed' | 'failed';
}

export interface RoadmapItem {
    id: string;
    quarter: string;
    year: number;
    title: string;
    description: string;
    items: string[];
    status: 'completed' | 'in-progress' | 'planned';
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    socials: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
}

export interface Particle {
    id: number;
    position: [number, number, number];
    velocity: [number, number, number];
    color: string;
    size: number;
}

export interface AnimationProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export interface ThreeSceneProps {
    camera?: {
        position?: [number, number, number];
        fov?: number;
    };
    lights?: boolean;
    controls?: boolean;
}
