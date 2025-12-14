import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';

type FeatureType = {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
    cta?: string;
    href?: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
    feature: FeatureType;
    index?: number;
};

export function FeatureCard({ feature, className, index, ...props }: FeatureCardPorps) {
    // Use index as seed for deterministic but unique patterns per card
    const p = genRandomPattern(index !== undefined ? index * 1000 + 123 : undefined);

    const CardContent = () => (
        <>
            {/* Animated background pattern */}
            <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                <div className="absolute inset-0 opacity-100">
                    <GridPattern
                        width={20}
                        height={20}
                        x="-12"
                        y="4"
                        squares={p}
                        className="fill-foreground/5 stroke-foreground/20 absolute inset-0 h-full w-full mix-blend-overlay group-hover:stroke-[#8c52ff]/30 transition-colors duration-500"
                    />
                </div>
            </div>

            {/* Removed hover overlay */}

            {/* Removed corner accents */}

            {/* Icon with enhanced styling */}
            <div className="relative z-10 mb-6 inline-flex items-center justify-center">
                <div className="relative p-3 rounded-xl bg-white/5 border border-white/10">
                    <feature.icon className="size-6 text-white/70" strokeWidth={1.5} aria-hidden />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3">
                <h3 className="text-base md:text-lg font-bold text-white">
                    {feature.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm font-normal leading-relaxed">
                    {feature.description}
                </p>
            </div>

            {/* CTA with arrow */}
            {feature.cta && (
                <div className="relative z-10 mt-6 flex items-center gap-2 text-xs md:text-sm font-semibold text-[#8c52ff]">
                    <span>{feature.cta}</span>
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            )}
        </>
    );

    if (feature.href) {
        return (
            <Link
                href={feature.href}
                className={cn(
                    'relative overflow-hidden p-8',
                    className
                )}
            >
                <CardContent />
            </Link>
        );
    }

    return (
        <div className={cn('relative overflow-hidden p-8', className)} {...props}>
            <CardContent />
        </div>
    );
}

function GridPattern({
    width,
    height,
    x,
    y,
    squares,
    ...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
    const patternId = React.useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y], index) => (
                        <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
                    ))}
                </svg>
            )}
        </svg>
    );
}

// Seeded random number generator for deterministic patterns
function seededRandom(seed: number): () => number {
    let value = seed;
    return () => {
        value = (value * 9301 + 49297) % 233280;
        return value / 233280;
    };
}

function genRandomPattern(seed?: number, length?: number): number[][] {
    const actualSeed = seed ?? 12345; // Default seed
    length = length ?? 5;
    const rng = seededRandom(actualSeed);

    return Array.from({ length }, () => [
        Math.floor(rng() * 4) + 7, // random x between 7 and 10
        Math.floor(rng() * 6) + 1, // random y between 1 and 6
    ]);
}
