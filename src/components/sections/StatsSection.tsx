'use client';

export default function StatsSection() {
    const stats = [
        {
            logo: 'ARTHACHAIN',
            metric: '1M+',
            description: 'Transactions per second',
            hasLink: true,
        },
        {
            logo: 'PERFORMANCE',
            metric: '50x',
            description: 'Faster than traditional chains',
            hasLink: false,
        },
        {
            logo: 'FINALITY',
            metric: '<1s',
            description: 'Average block finality',
            hasLink: true,
        },
        {
            logo: 'RELIABILITY',
            metric: '99.9%',
            description: 'Network uptime',
            hasLink: true,
        },
    ];

    return (
        <section className="relative w-full bg-[#FAFAFA] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-8 md:mb-10 lg:mb-12">
                    <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-3 md:mb-4 text-[#00FF41]">
                        DRIVING RESULTS
                    </div>
                    <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[52px] font-black leading-[1.1] mb-5 md:mb-6 max-w-[600px]">
                        Outsized Impact for Enterprise Blockchain
                    </h2>
                    <button className="border-2 border-black px-5 sm:px-6 py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-semibold hover:bg-black hover:text-white transition-colors inline-flex items-center gap-2">
                        Read customer stories
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
                        </svg>
                    </button>
                </div>

                {/* Stats Grid - Optimized for tablet */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-0 mb-10 md:mb-14 lg:mb-20 mt-6 md:mt-10 lg:mt-14">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`p-5 sm:p-6 md:p-5 lg:p-8 border-black sm:border-l ${index === 0 || index === 2 ? 'sm:border-l-0' : ''} ${index === 0 ? 'md:border-l-0' : 'md:border-l'} border-2 sm:border-2 sm:border-t-0 sm:border-b-0 sm:border-r-0`}
                        >
                            {/* Logo & Link */}
                            <div className="flex items-start justify-between mb-8 md:mb-10 lg:mb-12">
                                <div className="text-[12px] sm:text-[13px] md:text-[12px] lg:text-[14px] font-bold tracking-tight">
                                    {stat.logo}
                                </div>
                                {stat.hasLink && (
                                    <button className="text-[10px] sm:text-[11px] font-medium hover:opacity-60 transition-opacity inline-flex items-center gap-1">
                                        Read story
                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {/* Metric - tablet optimized */}
                            <div className="text-[40px] sm:text-[48px] md:text-[44px] lg:text-[56px] xl:text-[72px] font-black leading-none mb-3 md:mb-4">
                                {stat.metric}
                            </div>

                            {/* Description */}
                            <div className="text-[13px] sm:text-[14px] md:text-[13px] lg:text-[15px] leading-relaxed text-gray-700">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial - tablet optimized */}
                <div className="text-center max-w-[900px] mx-auto py-6 md:py-8 lg:py-12">
                    <blockquote className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[28px] font-normal leading-[1.4] mb-4 md:mb-5">
                        "Every decentralized project should start with ArthaChain. It's a game changer."
                    </blockquote>
                    <div className="flex flex-col items-center gap-2 sm:gap-3">
                        <div className="text-[10px] sm:text-[11px] tracking-[0.1em] uppercase font-medium">
                            ALEX CHEN, CTO AT DEFIBRIDGE
                        </div>
                        <div className="text-[14px] sm:text-[16px] font-bold">
                            ⚡ DeFiBridge
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
