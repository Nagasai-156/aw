'use client';

import React from 'react';

export default function ScrollingMarquee() {
    const marqueeText = [
        'BLOCKCHAIN VALIDATORS',
        'SMART CONTRACT DEVELOPERS',
        'DAPP BUILDERS',
        'WEB3 INNOVATORS',
        'CRYPTO ENTHUSIASTS',
        'DEFI CREATORS',
    ];

    return (
        <section className="relative w-full overflow-hidden bg-black border-y border-white/10">
            {/* Top Gradient Line */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#8c52ff] to-transparent opacity-70" />

            {/* Scrolling Text Container */}
            <div className="relative w-full bg-black py-5 sm:py-6 md:py-8 overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />

                {/* Scrolling Text */}
                <div className="flex gap-8 sm:gap-12 md:gap-16 animate-marquee">
                    {[...Array(3)].map((_, setIndex) => (
                        <div key={setIndex} className="flex gap-8 sm:gap-12 md:gap-16 items-center shrink-0">
                            {marqueeText.map((text, index) => (
                                <React.Fragment key={`${setIndex}-${index}`}>
                                    {/* Decorative Star */}
                                    <span className="text-[#ffc502] text-[20px] sm:text-[28px] md:text-[36px] shrink-0 opacity-90">✦</span>

                                    {/* Text */}
                                    <span
                                        className="text-white/90 text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-black tracking-[-0.02em] whitespace-nowrap uppercase shrink-0 hover:text-[#ff4080] transition-colors cursor-default"
                                        style={{ fontWeight: 900 }}
                                    >
                                        {text}
                                    </span>
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff4080] to-transparent opacity-70" />
        </section>
    );
}
