'use client';

import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
                <div className="max-w-[900px] mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#00FF41] hover:text-white transition-colors mb-6 sm:mb-8"
                    >
                        <ArrowLeft size={20} />
                        BACK TO BLOG
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Category Badge */}
                        <span className="inline-block text-xs sm:text-sm font-bold uppercase px-4 py-2 bg-[#00FF41] text-black mb-6">
                            ANNOUNCEMENT
                        </span>

                        {/* Title */}
                        <h1 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] font-black leading-[0.95] mb-6 sm:mb-8">
                            Introducing ArthaChain: The Next-Generation Blockchain
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-400">
                            <div className="flex items-center gap-2">
                                <User size={18} />
                                <span>Dr. Sarah Chen</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <span>December 5, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} />
                                <span>5 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 md:-mt-16">
                <div className="max-w-[1200px] mx-auto">
                    <div className="aspect-video bg-gradient-to-br from-[#00FF41] via-[#00E0FF] to-[#FF00E5] border-4 sm:border-8 border-white shadow-2xl"></div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[800px] mx-auto">
                    {/* Share Buttons - Desktop Sidebar */}
                    <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2">
                        <div className="flex flex-col gap-4">
                            <button className="w-12 h-12 border-2 border-black hover:bg-black hover:text-[#00FF41] transition-all flex items-center justify-center">
                                <Share2 size={20} />
                            </button>
                            <button className="w-12 h-12 border-2 border-black hover:bg-black hover:text-[#00FF41] transition-all flex items-center justify-center">
                                <Twitter size={20} />
                            </button>
                            <button className="w-12 h-12 border-2 border-black hover:bg-black hover:text-[#00FF41] transition-all flex items-center justify-center">
                                <Linkedin size={20} />
                            </button>
                            <button className="w-12 h-12 border-2 border-black hover:bg-black hover:text-[#00FF41] transition-all flex items-center justify-center">
                                <Facebook size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800 leading-relaxed mb-8">
                            Today marks a significant milestone in blockchain technology. We're thrilled to announce ArthaChain,
                            a next-generation Layer 1 blockchain that pushes the boundaries of what's possible in decentralized infrastructure.
                        </p>

                        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-black uppercase mt-12 mb-6">
                            Why We Built ArthaChain
                        </h2>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                            The blockchain industry has made incredible progress, but significant challenges remain: scalability limitations,
                            high transaction costs, and complex development experiences. We founded ArthaChain to address these challenges head-on.
                        </p>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                            Our vision was clear: create a blockchain that doesn't compromise on speed, security, or decentralization.
                            A platform that's ready for the next billion users and the next generation of decentralized applications.
                        </p>

                        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-black uppercase mt-12 mb-6">
                            Revolutionary Technology
                        </h2>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                            ArthaChain introduces several groundbreaking innovations:
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                                <span className="w-2 h-2 bg-[#00FF41] mt-2 flex-shrink-0"></span>
                                <span><strong>AI-Powered Consensus:</strong> Neural networks optimize block production and adapt to network conditions in real-time</span>
                            </li>
                            <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                                <span className="w-2 h-2 bg-[#00FF41] mt-2 flex-shrink-0"></span>
                                <span><strong>Quantum-Resistant Security:</strong> Post-quantum cryptography ensures long-term security</span>
                            </li>
                            <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                                <span className="w-2 h-2 bg-[#00FF41] mt-2 flex-shrink-0"></span>
                                <span><strong>Multi-Layer Architecture:</strong> Modular design with separate consensus, execution, and data layers</span>
                            </li>
                            <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                                <span className="w-2 h-2 bg-[#00FF41] mt-2 flex-shrink-0"></span>
                                <span><strong>1M+ TPS:</strong> Industry-leading throughput with sub-second finality</span>
                            </li>
                        </ul>

                        {/* Quote Block */}
                        <div className="my-12 border-l-4 border-[#00FF41] pl-6 sm:pl-8 py-4">
                            <p className="text-xl sm:text-2xl font-semibold italic text-gray-800">
                                "We're not just building another blockchain. We're building the infrastructure for the decentralized future."
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 mt-4">
                                - Dr. Sarah Chen, CTO
                            </p>
                        </div>

                        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-black uppercase mt-12 mb-6">
                            Performance That Matters
                        </h2>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                            During our testnet phase, ArthaChain consistently demonstrated:
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-12">
                            {[
                                { value: '1M+', label: 'Transactions/Sec' },
                                { value: '<1s', label: 'Block Finality' },
                                { value: '99.9%', label: 'Network Uptime' },
                                { value: '$0.0001', label: 'Avg TX Fee' },
                            ].map((stat, index) => (
                                <div key={index} className="border-2 border-black p-6 text-center">
                                    <div className="text-[32px] sm:text-[40px] md:text-[48px] font-black text-[#00FF41] mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm sm:text-base font-semibold uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-black uppercase mt-12 mb-6">
                            What's Next
                        </h2>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                            This is just the beginning. Over the coming months, we'll be rolling out:
                        </p>

                        <ul className="space-y-3 mb-8 text-base sm:text-lg text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-[#00FF41] mt-2 flex-shrink-0"></span>
                                Enhanced developer tools and SDKs
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-[#00FF41] mt-2 flex-shrink-0"></span>
                                Mainnet beta launch
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-[#00FF41] mt-2 flex-shrink-0"></span>
                                Grant programs for builders
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-[#00FF41] mt-2 flex-shrink-0"></span>
                                Ecosystem partnerships
                            </li>
                        </ul>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                            Join us in building the future of decentralized technology. Visit our developer portal,
                            join our Discord community, and start building on ArthaChain today.
                        </p>
                    </div>

                    {/* Mobile Share Buttons */}
                    <div className="lg:hidden mt-12 pt-8 border-t-2 border-gray-200">
                        <div className="text-sm font-bold uppercase tracking-wider mb-4">Share This Article</div>
                        <div className="flex gap-3">
                            <button className="flex-1 border-2 border-black hover:bg-black hover:text-[#00FF41] transition-all py-3 flex items-center justify-center gap-2 text-sm font-bold">
                                <Twitter size={18} /> Twitter
                            </button>
                            <button className="flex-1 border-2 border-black hover:bg-black hover:text-[#00FF41] transition-all py-3 flex items-center justify-center gap-2 text-sm font-bold">
                                <Linkedin size={18} /> LinkedIn
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-black mb-8 sm:mb-12">
                        RELATED <span className="text-[#00FF41]">ARTICLES</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="border-2 border-black bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,255,65,1)] transition-all duration-300">
                                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 border-b-2 border-black"></div>
                                <div className="p-6">
                                    <span className="text-[10px] sm:text-[11px] font-bold uppercase px-2.5 py-1 bg-black text-[#00FF41]">
                                        Technology
                                    </span>
                                    <h3 className="text-lg sm:text-xl font-black mt-4 mb-3">
                                        Related Article Title {i}
                                    </h3>
                                    <p className="text-sm text-gray-700 mb-4">
                                        Brief excerpt of the related article...
                                    </p>
                                    <button className="text-sm font-bold hover:text-[#00FF41] transition-colors uppercase">
                                        READ MORE →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
