'use client';

export default function CTASection() {
    return (
        <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start mb-10 md:mb-12 lg:mb-16">
                    {/* Left Column - Tagline */}
                    <div className="md:col-span-3">
                        <p className="text-base sm:text-[16px] md:text-[17px] font-normal leading-relaxed">
                            Don't build your<br />
                            creator career alone
                        </p>
                    </div>

                    {/* Center - Horizontal Line */}
                    <div className="hidden md:block md:col-span-4 flex items-center pt-3">
                        <div className="w-full h-[2px] bg-black"></div>
                    </div>

                    {/* Right - Star Icon */}
                    <div className="hidden md:flex md:col-span-1 justify-end">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00FF41] flex items-center justify-center">
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
                <div className="mb-12 sm:mb-14 md:mb-16 lg:mb-20">
                    <h2 className="text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-black leading-[0.85] tracking-tighter uppercase">
                        GROW YOUR BRAND
                    </h2>
                    <h2 className="text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-black leading-[0.85] tracking-tighter uppercase text-right -mt-2 sm:-mt-3 md:-mt-4">
                        WITH US!
                    </h2>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <button className="bg-black text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-medium tracking-[0.02em] uppercase hover:bg-black/90 transition-colors w-full sm:w-auto">
                        BECOME A MEMBER
                    </button>
                    <button className="bg-white text-black border-2 border-black px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-medium tracking-[0.02em] uppercase hover:bg-black/5 transition-colors w-full sm:w-auto">
                        GET EVENT ALERTS
                    </button>
                </div>
            </div>
        </section>
    );
}
