'use client';

export default function CTASection() {
    return (
        <section className="relative w-full bg-white py-32 px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-12 gap-8 items-start mb-16">
                    {/* Left Column - Tagline */}
                    <div className="col-span-3">
                        <p className="text-[17px] font-normal leading-relaxed">
                            Don't build your<br />
                            creator career alone
                        </p>
                    </div>

                    {/* Center - Horizontal Line */}
                    <div className="col-span-4 flex items-center pt-3">
                        <div className="w-full h-[2px] bg-black"></div>
                    </div>

                    {/* Right - Star Icon */}
                    <div className="col-span-1 flex justify-end">
                        <div className="w-12 h-12 bg-[#00FF41] flex items-center justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-7 h-7"
                                stroke="black"
                                strokeWidth="2.5"
                                strokeLinecap="square"
                            >
                                <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Massive Heading */}
                <div className="mb-20">
                    <h2 className="text-[140px] font-black leading-[0.85] tracking-tighter uppercase">
                        GROW YOUR BRAND
                    </h2>
                    <h2 className="text-[140px] font-black leading-[0.85] tracking-tighter uppercase text-right -mt-4">
                        WITH US!
                    </h2>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-6">
                    <button className="bg-black text-white px-12 py-5 text-[14px] font-medium tracking-[0.02em] uppercase hover:bg-black/90 transition-colors">
                        BECOME A MEMBER
                    </button>
                    <button className="bg-white text-black border-2 border-black px-12 py-5 text-[14px] font-medium tracking-[0.02em] uppercase hover:bg-black/5 transition-colors">
                        GET EVENT ALERTS
                    </button>
                </div>
            </div>
        </section>
    );
}
