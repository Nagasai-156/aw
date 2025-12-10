'use client';

export default function PerformanceSection() {
    return (
        <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left Column - Text Content */}
                    <div className="lg:col-span-5">
                        {/* Label */}
                        <div className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-8 text-[#00FF41]">
                            UNMATCHED PERFORMANCE
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] mb-10 md:mb-12 lg:mb-16 text-black">
                            ArthaChain is built for blockchain scalability
                        </h2>

                        {/* Description */}
                        <p className="text-sm sm:text-[15px] md:text-[16px] leading-relaxed mb-6 md:mb-8 text-gray-700">
                            Traditional blockchains can't handle the demands of modern decentralized applications. ArthaChain is designed specifically for high-throughput DeFi, NFTs, and enterprise use cases. Execute, validate, and finalize transactions 100x faster with ArthaChain.
                        </p>

                        {/* CTA Button */}
                        <button className="border border-black px-6 md:px-8 py-3 md:py-4 text-[13px] font-medium tracking-[0.02em] hover:bg-black hover:text-white transition-all duration-200 inline-flex items-center gap-2 mb-12 md:mb-16 lg:mb-20 w-full sm:w-auto justify-center sm:justify-start">
                            View benchmarks
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                            </svg>
                        </button>

                        {/* Testimonial */}
                        <blockquote className="mb-8">
                            <p className="text-base sm:text-[17px] md:text-[18px] leading-relaxed mb-4 md:mb-6 text-gray-800">
                                "ArthaChain has completely changed how our team builds DeFi products. We've been able to scale to millions of users by achieving transaction speeds in seconds that would previously take hours."
                            </p>
                            <div className="text-[11px] tracking-[0.08em] uppercase text-gray-600 mb-3">
                                SARAH ZHANG, ENGINEERING LEAD AT DEFIBRIDGE
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-black flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="white" strokeWidth="2.5">
                                        <path d="M12 2L12 22M2 12L22 12" />
                                    </svg>
                                </div>
                                <span className="text-[14px] font-bold">DeFiBridge</span>
                            </div>
                        </blockquote>

                        {/* Read Story Link */}
                        <button className="text-[13px] font-medium hover:opacity-60 transition-opacity inline-flex items-center gap-1 border-b border-black pb-1">
                            Read story
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Column - Performance Metrics */}
                    <div className="lg:col-span-7 flex flex-col justify-center gap-8 md:gap-10 lg:gap-12">
                        {/* Metric 1 */}
                        <div>
                            <div className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold leading-none mb-4 md:mb-6 text-black">
                                100,000<span className="text-[#00FF41]">x</span>
                                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-gray-600 ml-2 md:ml-3 block sm:inline mt-2 sm:mt-0">
                                    higher transaction throughput
                                </span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase w-32">
                                        ARTHACHAIN
                                    </div>
                                    <div className="flex-1 h-2 bg-[#00FF41] relative">
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-black">
                                            1,000,000 TPS
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase w-32 text-gray-400">
                                        LEGACY CHAINS
                                    </div>
                                    <div className="flex-1 h-2 bg-gray-200 relative" style={{ width: '30%' }}>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-medium text-gray-500">
                                            ~10 TPS
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Metric 2 */}
                        <div>
                            <div className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold leading-none mb-4 md:mb-6 text-black">
                                500<span className="text-[#00FF41]">x</span>
                                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-gray-600 ml-2 md:ml-3 block sm:inline mt-2 sm:mt-0">
                                    faster finality time
                                </span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase w-32">
                                        ARTHACHAIN
                                    </div>
                                    <div className="flex-1 h-2 bg-[#00FF41]" style={{ width: '25%' }}>
                                        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 text-[11px] font-bold text-black whitespace-nowrap">
                                            0.8 SEC
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase w-32 text-gray-400">
                                        LEGACY CHAINS
                                    </div>
                                    <div className="flex-1 h-2 bg-gray-200 relative">
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-medium text-gray-500">
                                            ~400 SEC
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Metric 3 */}
                        <div>
                            <div className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold leading-none mb-4 md:mb-6 text-black">
                                50<span className="text-[#00FF41]">x</span>
                                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-gray-600 ml-2 md:ml-3 block sm:inline mt-2 sm:mt-0">
                                    lower transaction cost
                                </span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase w-32">
                                        ARTHACHAIN
                                    </div>
                                    <div className="flex-1 h-2 bg-[#00FF41]" style={{ width: '20%' }}>
                                        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 text-[11px] font-bold text-black whitespace-nowrap">
                                            $0.0001
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase w-32 text-gray-400">
                                        LEGACY CHAINS
                                    </div>
                                    <div className="flex-1 h-2 bg-gray-200 relative">
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-medium text-gray-500">
                                            ~$0.005
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
