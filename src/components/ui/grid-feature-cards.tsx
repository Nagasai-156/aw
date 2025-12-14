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
    const p = genRandomPattern();

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

            {/* Solid color overlay on hover */}
            <div className="absolute inset-0 bg-[#8c52ff]/0 opacity-0 group-hover:bg-[#8c52ff]/3 group-hover:opacity-100 transition-all duration-500" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-transparent group-hover:border-[#8c52ff]/40 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-transparent group-hover:border-[#ff4080]/40 transition-all duration-300" />

            {/* Icon with enhanced styling */}
            <div className="relative z-10 mb-6 inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-[#8c52ff]/10 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                <div className="relative p-3 rounded-xl bg-black/5 group-hover:bg-[#8c52ff]/10 transition-all duration-300 border border-black/5 group-hover:border-[#8c52ff]/30 group-hover:shadow-lg group-hover:shadow-[#8c52ff]/10">
                    <feature.icon className="size-6 text-black/70 group-hover:text-[#8c52ff] transition-colors duration-300" strokeWidth={1.5} aria-hidden />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3">
                <h3 className="text-base md:text-lg font-bold text-black group-hover:text-[#8c52ff] transition-colors duration-300">
                    {feature.title}
                </h3>
                <p className="text-black/60 text-xs md:text-sm font-normal leading-relaxed group-hover:text-black/70 transition-colors duration-300">
                    {feature.description}
                </p>
            </div>

            {/* CTA with arrow animation */}
            {feature.cta && (
                <div className="relative z-10 mt-6 flex items-center gap-2 text-xs md:text-sm font-semibold text-[#8c52ff] group-hover:text-[#7a45e0] transition-colors duration-300">
                    <span>{feature.cta}</span>
                    <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                    'relative overflow-hidden p-8 group',
                    'hover:bg-white',
                    'transition-all duration-500',
                    'hover:shadow-xl hover:shadow-[#8c52ff]/5',
                    'hover:scale-[1.02] hover:z-10',
                    className
                )}
                {...props}
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

function genRandomPattern(length?: number): number[][] {
    length = length ?? 5;
    return Array.from({ length }, () => [
        Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
        Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
    ]);
}
