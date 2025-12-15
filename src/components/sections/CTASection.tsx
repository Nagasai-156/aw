'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';


export default function CTASection() {
    return (
        <section className="relative w-full bg-black py-10 sm:py-14 md:py-16 lg:py-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Grid Pattern Match */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter text-white">
                        Ready to <span className="text-[#ff4080]">Build?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-medium">
                        Join thousands of developers building the future of decentralized applications
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/get-started"
                            className="flex items-center gap-2 px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm"
                        >
                            GET STARTED
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/docs"
                            className="px-12 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
                        >
                            VIEW DOCS
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
