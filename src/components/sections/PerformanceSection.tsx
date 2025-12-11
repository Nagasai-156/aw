'use client';

import { motion } from 'framer-motion';

const metrics = [
    {
        value: '1M+',
        label: 'TPS',
        description: 'Transactions Per Second',
        comparison: 'vs ~15 TPS on legacy chains',
        color: '#8c52ff'
    },
    {
        value: '<1s',
        label: 'FINALITY',
        description: 'Transaction Finality',
        comparison: 'vs ~6 min on legacy chains',
        color: '#ff4080'
    },
    {
        value: '$0.0001',
        label: 'AVG FEE',
        description: 'Per Transaction',
        comparison: 'vs ~$5 on legacy chains',
        color: '#ffc502'
    },
    {
        value: '99.99%',
        label: 'UPTIME',
        description: 'Network Reliability',
        comparison: 'Enterprise-grade SLA',
        color: '#450693'
    }
];

export default function PerformanceSection() {
    return (
        <section className="relative w-full bg-white py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[3px] w-8 bg-[#8c52ff]" />
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40">Unmatched Performance</span>
                        <div className="h-[3px] w-8 bg-[#8c52ff]" />
                    </div>

                    <h2 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-black text-black leading-[1] tracking-[-0.03em] mb-4">
                        Built For <span className="text-[#8c52ff]">Speed</span>
                    </h2>

                    <p className="text-black/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Experience blockchain performance that outpaces traditional networks by orders of magnitude
                    </p>
                </motion.div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white border-2 border-black/5 p-6 sm:p-8 hover:border-black/10 transition-all duration-300"
                        >
                            {/* Content */}
                            <div className="relative z-10">
                                {/* Value */}
                                <div
                                    className="text-[36px] sm:text-[44px] md:text-[52px] font-black leading-none mb-2"
                                    style={{ color: metric.color }}
                                >
                                    {metric.value}
                                </div>

                                {/* Label */}
                                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/30 mb-4">
                                    {metric.label}
                                </div>

                                {/* Divider */}
                                <div
                                    className="h-[3px] w-12 mb-4"
                                    style={{ backgroundColor: metric.color }}
                                />

                                {/* Description */}
                                <div className="text-black/70 text-sm font-medium mb-1">
                                    {metric.description}
                                </div>

                                {/* Comparison */}
                                <div className="text-black/40 text-xs">
                                    {metric.comparison}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats Row */}
                <motion.div
                    className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 border-t border-black/10 pt-10 sm:pt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="text-center">
                        <div className="text-[28px] sm:text-[36px] md:text-[42px] font-black text-black">50K+</div>
                        <div className="text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-black/40">Validators</div>
                    </div>
                    <div className="text-center">
                        <div className="text-[28px] sm:text-[36px] md:text-[42px] font-black text-black">200+</div>
                        <div className="text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-black/40">dApps Built</div>
                    </div>
                    <div className="text-center">
                        <div className="text-[28px] sm:text-[36px] md:text-[42px] font-black text-black">$2B+</div>
                        <div className="text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-black/40">TVL Secured</div>
                    </div>
                    <div className="text-center">
                        <div className="text-[28px] sm:text-[36px] md:text-[42px] font-black text-black">10M+</div>
                        <div className="text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-black/40">Transactions</div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="mt-10 sm:mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <button className="group inline-flex items-center gap-3 bg-black text-white px-8 sm:px-12 py-4 sm:py-5 text-[13px] font-bold tracking-wider uppercase hover:bg-[#8c52ff] transition-colors duration-300">
                        View Full Benchmarks
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
