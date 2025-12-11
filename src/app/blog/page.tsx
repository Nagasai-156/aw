'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

const blogPosts = [
    {
        id: 1,
        title: 'Introducing ArthaChain: The Next-Generation Blockchain',
        excerpt: 'Discover how our AI-powered consensus mechanism is revolutionizing blockchain scalability and security.',
        author: 'Dr. Sarah Chen',
        date: 'Dec 5, 2024',
        category: 'Announcement',
        readTime: '5 min read',
        featured: true,
    },
    {
        id: 2,
        title: 'Quantum-Resistant Cryptography: Why It Matters',
        excerpt: 'Understanding the importance of post-quantum security in blockchain infrastructure.',
        author: 'Aisha Patel',
        date: 'Dec 1, 2024',
        category: 'Technology',
        readTime: '8 min read',
        featured: false,
    },
    {
        id: 3,
        title: 'Achieving 1M+ Transactions Per Second',
        excerpt: 'A deep dive into our multi-layer architecture and parallel execution engine.',
        author: 'Marcus Williams',
        date: 'Nov 28, 2024',
        category: 'Performance',
        readTime: '6 min read',
        featured: false,
    },
    {
        id: 4,
        title: 'Building Decentralized Social Networks on ArthaChain',
        excerpt: 'How our built-in social layer enables next-generation dApps.',
        author: 'James Rodriguez',
        date: 'Nov 25, 2024',
        category: 'Development',
        readTime: '7 min read',
        featured: false,
    },
    {
        id: 5,
        title: 'Testnet Results: Breaking Records',
        excerpt: 'Our testnet phase exceeded all expectations. Here are the numbers.',
        author: 'Dr. Sarah Chen',
        date: 'Nov 20, 2024',
        category: 'Updates',
        readTime: '4 min read',
        featured: false,
    },
    {
        id: 6,
        title: 'Smart Contracts in the Age of AI',
        excerpt: 'How machine learning is transforming smart contract development and execution.',
        author: 'Marcus Williams',
        date: 'Nov 15, 2024',
        category: 'Technology',
        readTime: '9 min read',
        featured: false,
    },
];

const categories = ['All', 'Announcement', 'Technology', 'Performance', 'Development', 'Updates'];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center bg-black text-white overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="relative z-10 max-w-[1400px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 sm:mb-8 text-[#8c52ff]">
                            ARTHACHAIN BLOG
                        </div>
                        <h1 className="text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-black leading-[0.9] mb-6 sm:mb-8">
                            INSIGHTS &
                            <br />
                            <span className="text-[#ff4080]">UPDATES</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
                            Latest news, technical deep-dives, and thought leadership from the ArthaChain team
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="sticky top-16 sm:top-20 z-40 bg-white border-b-2 border-black py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`text-xs sm:text-sm font-bold uppercase tracking-wider px-4 sm:px-6 py-2 sm:py-3 whitespace-nowrap transition-all duration-200 ${selectedCategory === category
                                    ? 'bg-black text-[#8c52ff] border-2 border-black'
                                    : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {selectedCategory === 'All' && blogPosts.filter(p => p.featured).map((post) => (
                <section key={post.id} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 sm:mb-8 text-[#8c52ff]">
                            FEATURED POST
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="aspect-video bg-gradient-to-br from-[#8c52ff] to-[#ff4080]"></div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs sm:text-sm font-bold uppercase px-3 py-1.5 bg-black text-[#8c52ff] border-2 border-black">
                                        {post.category}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                                        <Calendar size={14} />
                                        {post.date}
                                    </span>
                                </div>
                                <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-black leading-tight mb-4 sm:mb-6">
                                    {post.title}
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                                        <User size={16} />
                                        {post.author}
                                    </div>
                                    <button className="flex items-center gap-2 text-sm sm:text-base font-bold hover:text-[#8c52ff] transition-colors">
                                        READ MORE <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Blog Grid */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredPosts.filter(p => !p.featured).map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group border-2 border-black hover:shadow-[8px_8px_0px_0px_#8c52ff] transition-all duration-300 bg-white"
                            >
                                {/* Thumbnail */}
                                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 border-b-2 border-black"></div>

                                {/* Content */}
                                <div className="p-6 sm:p-8">
                                    {/* Meta */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[10px] sm:text-[11px] font-bold uppercase px-2.5 py-1 bg-black text-[#8c52ff]">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-gray-600">{post.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-black leading-tight mb-3 sm:mb-4 group-hover:text-[#8c52ff] transition-colors">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200">
                                        <div className="text-xs sm:text-sm text-gray-600">
                                            {post.readTime}
                                        </div>
                                        <button className="flex items-center gap-2 text-xs sm:text-sm font-bold hover:text-[#8c52ff] transition-colors uppercase">
                                            READ <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12 sm:mt-16">
                        <button className="bg-black text-white hover:bg-[#8c52ff] px-8 sm:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200 border-2 border-black hover:border-[#8c52ff]">
                            LOAD MORE POSTS
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </main>
    );
}
