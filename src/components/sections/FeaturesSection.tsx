"use client";

import { Brain, Shield, Users, Cpu, Database } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const arthachainFeatures = [
    {
        id: 1,
        title: "AI Optimization",
        date: "Q1 2024",
        content: "Neural network-driven consensus optimization with predictive transaction routing and adaptive resource allocation for maximum efficiency.",
        category: "AI",
        icon: Brain,
        relatedIds: [2, 3],
        status: "completed" as const,
        energy: 95,
    },
    {
        id: 2,
        title: "DID System",
        date: "Q2 2024",
        content: "Decentralized Identity infrastructure with self-sovereign control, verifiable credentials, and privacy-preserving authentication.",
        category: "Identity",
        icon: Shield,
        relatedIds: [1, 4],
        status: "completed" as const,
        energy: 88,
    },
    {
        id: 3,
        title: "Social Layer",
        date: "Q3 2024",
        content: "Built-in social graph and reputation system enabling decentralized social applications with on-chain identity verification.",
        category: "Social",
        icon: Users,
        relatedIds: [1, 2, 5],
        status: "in-progress" as const,
        energy: 65,
    },
    {
        id: 4,
        title: "Quantum-Proof",
        date: "Q4 2024",
        content: "Post-quantum cryptography implementation with lattice-based signatures ensuring long-term security against quantum attacks.",
        category: "Security",
        icon: Cpu,
        relatedIds: [2, 5],
        status: "in-progress" as const,
        energy: 55,
    },
    {
        id: 5,
        title: "SVDB Storage",
        date: "Q1 2025",
        content: "Sharded Vector Database for scalable decentralized storage with content addressing, erasure coding, and IPFS integration.",
        category: "Storage",
        icon: Database,
        relatedIds: [3, 4],
        status: "pending" as const,
        energy: 40,
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative w-full bg-black">
            {/* Title */}
            <div className="absolute top-12 left-0 right-0 z-10">
                <div className="max-w-[1400px] mx-auto px-8 text-center">
                    <div className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 text-[#00FF41]">
                        CORE FEATURES
                    </div>
                    <h2 className="text-[48px] md:text-[64px] font-black text-white mb-4">
                        Explore ArthaChain
                    </h2>
                    <p className="text-[16px] text-gray-400 max-w-2xl mx-auto">
                        Click on any feature to discover how ArthaChain is revolutionizing blockchain technology
                    </p>
                </div>
            </div>

            {/* Orbital Timeline */}
            <RadialOrbitalTimeline timelineData={arthachainFeatures} />
        </section>
    );
}
