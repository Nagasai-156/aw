import { ArthaChainGlobe } from "@/components/ui/arthachain-globe"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GlobalNetworkPage() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8c52ff]/10 via-transparent to-transparent" />

            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

                    {/* Left Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#ffc502] animate-pulse" />
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/70">
                                The Vision
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                            Autonomous World
                        </h1>

                        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
                            A new internet where applications <span className="text-[#8c52ff] font-semibold">evolve</span>, <span className="text-[#ff4080] font-semibold">learn</span>, and <span className="text-[#ffc502] font-semibold">scale</span> without limits.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/about">
                                <Button className="inline-flex items-center gap-2 rounded-full bg-[#8c52ff] hover:bg-[#7c3aed] px-8 py-6 text-base font-bold text-white transition-colors">
                                    Explore the Vision <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/dev">
                                <Button className="rounded-full bg-transparent border-2 border-white/20 text-white hover:bg-white/5 px-8 py-6 text-base font-bold transition-colors">
                                    Start Building
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Globe */}
                    <div className="relative flex items-center justify-center order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px]">
                        <ArthaChainGlobe className="top-0" />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,82,255,0.1),transparent_70%)]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
