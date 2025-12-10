'use client';

import React from 'react';

export default function ScrollingMarquee() {
    // EXACT text from reference
    const marqueeText = [
        'BLOCKCHAIN VALIDATORS',
        'SMART CONTRACT DEVELOPERS',
        'DAPP BUILDERS',
        'WEB3 INNOVATORS',
        'CRYPTO ENTHUSIASTS',
        'DEFI CREATORS',
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* Top Green Band - Even thinner */}
            <div className="w-full h-[22px] bg-[#00FF41]" />

            {/* Scrolling Text Container - WHITE background with BLACK text, reduced padding */}
            <div className="relative w-full bg-white py-4 overflow-hidden">
                {/* Scrolling Text - Infinite Loop with slant */}
                <div className="flex gap-12 animate-marquee -skew-x-6">
                    {/* Repeat the content multiple times for smooth infinite scroll */}
                    {[...Array(3)].map((_, setIndex) => (
                        <div key={setIndex} className="flex gap-12 items-center shrink-0">
                            {marqueeText.map((text, index) => (
                                <React.Fragment key={`${setIndex}-${index}`}>
                                    {/* Star symbol BEFORE text */}
                                    <span className="text-black text-[40px] font-normal shrink-0">✦</span>

                                    {/* BLACK text on WHITE background - EXACT match with slant */}
                                    <span
                                        className="text-black text-[68px] font-black tracking-[-0.02em] whitespace-nowrap uppercase shrink-0"
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

            {/* Bottom Green Band - Even thinner */}
            <div className="w-full h-[22px] bg-[#00FF41]" />
        </section>
    );
}
