"use client"

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const arthachainCards = [
    {
        title: "AI-Driven Consensus",
        description:
            "Neural network optimization predicts transaction patterns and dynamically adjusts consensus parameters for maximum efficiency and throughput.",
    },
    {
        title: "Developer First",
        description:
            "Comprehensive SDKs, clear documentation, and intuitive APIs make building on ArthaChain effortless for developers of all levels.",
    },
    {
        title: "Infinite Scalability",
        description:
            "Sharded architecture with dynamic state partitioning enables unlimited horizontal scaling. Whether you're processing thousands or millions of transactions per second, ArthaChain adapts seamlessly. Built-in load balancing, parallel execution, and efficient state management ensure your dApps scale without compromise.",
    },
    {
        title: "Quantum-Resistant",
        description:
            "Post-quantum cryptography implementation protects your assets against future quantum computing threats with lattice-based signatures.",
    },
    {
        title: "Sub-Second Finality",
        description:
            "Lightning-fast transaction confirmation in under 1 second, enabling real-time applications and instant user experiences.",
    },
]


const PlusCard: React.FC<{
    className?: string
    title: string
    description: string
}> = ({
    className = "",
    title,
    description,
}) => {
        return (
            <div
                className={cn(
                    "relative border border-dashed border-black/40 dark:border-zinc-700 rounded-lg p-6 bg-white dark:bg-zinc-950 min-h-[200px]",
                    "flex flex-col justify-between hover:border-black transition-all duration-300 group",
                    className
                )}
            >
                <CornerPlusIcons />
                {/* Content */}
                <div className="relative z-10 space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-black transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{description}</p>
                </div>
            </div>
        )
    }

const CornerPlusIcons = () => (
    <>
        <PlusIcon className="absolute -top-3 -left-3" />
        <PlusIcon className="absolute -top-3 -right-3" />
        <PlusIcon className="absolute -bottom-3 -left-3" />
        <PlusIcon className="absolute -bottom-3 -right-3" />
    </>
)

const PlusIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className={`dark:text-white text-black size-6 ${className}`}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
)

export default function ArthaChainBentoCards() {
    return (
        <section className="bg-white dark:bg-black dark:bg-transparent border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto container border-x border-gray-200 dark:border-gray-800 py-12 px-4">
                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
                    <PlusCard {...arthachainCards[0]} className="lg:col-span-3 lg:row-span-2" />
                    <PlusCard {...arthachainCards[1]} className="lg:col-span-2 lg:row-span-2" />
                    <PlusCard {...arthachainCards[2]} className="lg:col-span-4 lg:row-span-1" />
                    <PlusCard {...arthachainCards[3]} className="lg:col-span-2 lg:row-span-1" />
                    <PlusCard {...arthachainCards[4]} className="lg:col-span-2 lg:row-span-1" />
                </div>

                {/* Section Footer Heading */}
                <div className="max-w-2xl ml-auto text-right px-4 mt-6 lg:-mt-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
                        Built for scale. Designed for speed.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        ArthaChain provides enterprise-grade blockchain infrastructure with unmatched performance. Each feature is thoughtfully designed to be scalable, secure, and developer-friendly.
                    </p>
                </div>
            </div>
        </section>
    )
}
