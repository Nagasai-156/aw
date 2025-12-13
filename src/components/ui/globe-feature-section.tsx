"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [140 / 255, 82 / 255, 255 / 255], // #8c52ff
    glowColor: [0.3, 0.2, 0.5],
    markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
        { location: [51.5074, -0.1278], size: 0.08 },
        { location: [35.6762, 139.6503], size: 0.09 },
        { location: [-33.8688, 151.2093], size: 0.06 },
        { location: [1.3521, 103.8198], size: 0.07 },
    ],
};

export function Globe({
    className,
    config = GLOBE_CONFIG,
}: {
    className?: string;
    config?: COBEOptions;
}) {
    let phi = 0;
    let width = 0;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);
    const [r, setR] = useState(0);

    const updatePointerInteraction = (value: number | null) => {
        pointerInteracting.current = value;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value ? "grabbing" : "grab";
        }
    };

    const updateMovement = (clientX: number) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            setR(delta / 200);
        }
    };

    const onRender = useCallback(
        (state: Record<string, unknown>) => {
            if (!pointerInteracting.current) phi += 0.005;
            state.phi = phi + r;
            state.width = width * 2;
            state.height = width * 2;
        },
        [r]
    );

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current!, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender,
        });

        setTimeout(() => {
            if (canvasRef.current) {
                canvasRef.current.style.opacity = "1";
            }
        });
        return () => globe.destroy();
    }, []);

    return (
        <div
            className={cn(
                "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
                className
            )}
        >
            <canvas
                className={cn(
                    "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
                )}
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(
                        e.clientX - pointerInteractionMovement.current
                    )
                }
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    );
}

export default function GlobeFeatureSection() {
    return (
        <section className="relative w-full max-w-[1400px] mx-auto overflow-hidden rounded-3xl bg-black border border-zinc-800 shadow-2xl px-6 py-16 md:px-16 md:py-24">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8c52ff]/20 rounded-full blur-[150px]" />

            <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
                <div className="z-10 max-w-xl text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#ffc502] animate-pulse" />
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                            The Vision
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                        Autonomous World
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
                        A new internet where applications <span className="text-[#8c52ff] font-medium">evolve</span>, <span className="text-[#ff4080] font-medium">learn</span>, and <span className="text-[#ffc502] font-medium">scale</span> without limits.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/about">
                            <Button className="inline-flex items-center gap-2 rounded-full bg-[#8c52ff] hover:bg-[#7c3aed] px-6 py-3 text-sm font-semibold text-white transition">
                                Explore the Vision <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/dev">
                            <Button className="rounded-full bg-transparent border border-zinc-600 text-white hover:bg-zinc-800 px-6 py-3 text-sm font-semibold">
                                Start Building
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="relative h-[300px] md:h-[400px] w-full max-w-xl">
                    <Globe className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-40 scale-125 md:scale-150" />
                </div>
            </div>
        </section>
    );
}
