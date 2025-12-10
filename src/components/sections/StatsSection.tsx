'use client';

export default function StatsSection() {
    const stats = [
        {
            logo: 'POLYGON',
            metric: '1M+',
            description: 'Transactions per second',
            hasLink: true,
        },
        {
            logo: 'ETHEREUM',
            metric: '50x',
            description: 'Faster than traditional chains',
            hasLink: false,
        },
        {
            logo: 'SOLANA',
            metric: '<1s',
            description: 'Average block finality',
            hasLink: true,
        },
        {
            logo: 'AVALANCHE',
            metric: '99.9%',
            description: 'Network uptime',
            hasLink: true,
        },
    ];

    return (
        <section className="relative w-full bg-[#FAFAFA] py-24 px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="text-[11px] font-medium tracking-[0.15em] uppercase mb-6">
                        DRIVING RESULTS
                    </div>
                    <h2 className="text-[52px] font-bold leading-[1.1] mb-8 max-w-[600px]">
                        Outsized impact for the biggest brands in AI
                    </h2>
                    <button className="border border-black px-6 py-3 text-[13px] font-medium hover:bg-black hover:text-white transition-colors inline-flex items-center gap-2">
                        Read customer stories
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
                        </svg>
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-0 mb-20 mt-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`p-8 border-l border-black ${index === 0 ? 'border-l-0' : ''}`}
                        >
                            {/* Logo & Link */}
                            <div className="flex items-start justify-between mb-12">
                                <div className="text-[15px] font-bold tracking-tight">
                                    {stat.logo}
                                </div>
                                {stat.hasLink && (
                                    <button className="text-[11px] font-medium hover:opacity-60 transition-opacity inline-flex items-center gap-1">
                                        Read story
                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {/* Metric */}
                            <div className="text-[72px] font-bold leading-none mb-4">
                                {stat.metric}
                            </div>

                            {/* Description */}
                            <div className="text-[15px] leading-relaxed">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="text-center max-w-[900px] mx-auto py-12">
                    <blockquote className="text-[28px] font-normal leading-[1.4] mb-6">
                        "Every new AI project starts with evals in Braintrust—it's a game changer."
                    </blockquote>
                    <div className="flex flex-col items-center gap-3">
                        <div className="text-[11px] tracking-[0.1em] uppercase font-medium">
                            LEE WEISBERGER, ENGINEERING MANAGER AT AIRTABLE
                        </div>
                        <div className="text-[16px] font-bold">
                            🪂 Airtable
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
