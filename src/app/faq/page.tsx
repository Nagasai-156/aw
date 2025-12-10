'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqCategories = [
    {
        category: 'Getting Started',
        icon: HelpCircle,
        questions: [
            {
                q: 'What is ArthaChain?',
                a: 'ArthaChain is a next-generation Layer 1 blockchain platform designed for speed, security, and scalability. It combines AI-powered consensus, quantum-resistant cryptography, and a multi-layer architecture to deliver over 1 million transactions per second with sub-second finality.',
            },
            {
                q: 'How do I get started with ArthaChain?',
                a: 'Getting started is easy! First, check out our documentation to understand the platform. Then, create a wallet, get some test tokens from our faucet, and start building or testing applications on our testnet. Our developer portal provides comprehensive guides and tutorials.',
            },
            {
                q: 'Is ArthaChain compatible with Ethereum?',
                a: 'Yes! ArthaChain supports EVM compatibility, which means you can deploy existing Ethereum smart contracts with minimal modifications. Our WebAssembly-based VM also supports multiple programming languages for maximum flexibility.',
            },
        ],
    },
    {
        category: 'Technology',
        icon: HelpCircle,
        questions: [
            {
                q: 'What makes ArthaChain different from other blockchains?',
                a: 'ArthaChain stands out through its AI-powered consensus mechanism, quantum-resistant security, and multi-layer architecture. We achieve 1M+ TPS with sub-second finality while maintaining strong security guarantees and low transaction costs.',
            },
            {
                q: 'What is AI-powered consensus?',
                a: 'Our AI-powered consensus uses neural networks to optimize block production, predict network conditions, and dynamically adjust parameters for peak performance. This allows us to maintain high throughput while adapting to changing network conditions in real-time.',
            },
            {
                q: 'How does quantum-resistant security work?',
                a: 'We implement post-quantum cryptography using lattice-based signatures and encryption schemes that remain secure even against attacks from quantum computers. This future-proofs the network against emerging threats.',
            },
            {
                q: 'What is the multi-layer architecture?',
                a: 'Our architecture separates consensus, execution, and data availability into distinct layers. This modular design allows each layer to be optimized independently while maintaining composability and interoperability.',
            },
        ],
    },
    {
        category: 'Development',
        icon: HelpCircle,
        questions: [
            {
                q: 'What programming languages are supported?',
                a: 'Our WebAssembly-based VM supports multiple languages including Solidity (for EVM compatibility), Rust, Go, and AssemblyScript. This gives developers the flexibility to use the tools and languages they\'re most comfortable with.',
            },
            {
                q: 'Where can I find developer documentation?',
                a: 'Our comprehensive developer documentation is available at docs.arthachain.network. It includes API references, tutorials, code examples, and best practices for building on ArthaChain.',
            },
            {
                q: 'Is there a testnet available?',
                a: 'Yes! Our public testnet is live and available for developers to test their applications. You can get test tokens from our faucet and deploy contracts without any cost. Testnet explorer and tools are available at testnet.arthachain.network.',
            },
        ],
    },
    {
        category: 'Security & Validators',
        icon: HelpCircle,
        questions: [
            {
                q: 'How can I become a validator?',
                a: 'To become a validator, you need to stake a minimum amount of ARTHA tokens and run validator node software. Visit our validator documentation for detailed requirements, setup instructions, and staking guidelines.',
            },
            {
                q: 'What are the staking requirements?',
                a: 'The minimum stake for validators is 100,000 ARTHA tokens. Delegators can participate with as little as 10 ARTHA. All stakers earn rewards based on their stake and network participation.',
            },
            {
                q: 'How is network security maintained?',
                a: 'Network security is maintained through our Proof-of-Stake consensus with slashing conditions, quantum-resistant cryptography, formal verification of critical components, regular security audits, and bug bounty programs.',
            },
        ],
    },
    {
        category: 'Tokens & Economics',
        icon: HelpCircle,
        questions: [
            {
                q: 'What is the ARTHA token?',
                a: 'ARTHA is the native token of the ArthaChain network. It\'s used for transaction fees, staking, governance, and accessing network services. The total supply is capped at 1 billion tokens with a deflationary mechanism built into the protocol.',
            },
            {
                q: 'How are transaction fees calculated?',
                a: 'Transaction fees are dynamically calculated based on network congestion and computational complexity. Our efficient architecture keeps fees extremely low, typically around $0.0001 per transaction, making the network accessible for all use cases.',
            },
            {
                q: 'What is the token distribution?',
                a: 'Token distribution: 30% community & ecosystem development, 25% team & advisors (4-year vesting), 20% public sale, 15% foundation reserve, 10% early backers (2-year vesting). This ensures long-term alignment and sustainable growth.',
            },
        ],
    },
];

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [openQuestions, setOpenQuestions] = useState<number[]>([]);

    const toggleQuestion = (index: number) => {
        setOpenQuestions(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="relative z-10 max-w-[1400px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 sm:mb-8 text-[#00FF41]">
                            FREQUENTLY ASKED QUESTIONS
                        </div>
                        <h1 className="text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-black leading-[0.9] mb-6 sm:mb-8">
                            GOT
                            <br />
                            <span className="text-[#00FF41]">QUESTIONS?</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
                            Find answers to common questions about ArthaChain
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Category Navigation */}
                        <div className="lg:col-span-3">
                            <div className="lg:sticky lg:top-24 space-y-3">
                                <div className="text-sm font-bold uppercase tracking-wider mb-6 hidden lg:block">
                                    Categories
                                </div>

                                {/* Mobile Dropdown */}
                                <div className="lg:hidden">
                                    <select
                                        value={activeCategory}
                                        onChange={(e) => setActiveCategory(Number(e.target.value))}
                                        className="w-full px-4 py-3 border-2 border-black bg-white text-black font-bold uppercase text-sm"
                                    >
                                        {faqCategories.map((cat, index) => (
                                            <option key={index} value={index}>
                                                {cat.category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Desktop Navigation */}
                                <div className="hidden lg:block space-y-2">
                                    {faqCategories.map((cat, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveCategory(index)}
                                            className={`w-full text-left px-4 py-3 font-bold uppercase text-sm transition-all duration-200 border-2 ${activeCategory === index
                                                    ? 'bg-black text-[#00FF41] border-black'
                                                    : 'bg-white text-black border-black hover:bg-black hover:text-white'
                                                }`}
                                        >
                                            {cat.category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Questions */}
                        <div className="lg:col-span-9">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-black mb-6 sm:mb-8">
                                        {faqCategories[activeCategory].category}
                                    </h2>

                                    {faqCategories[activeCategory].questions.map((faq, index) => {
                                        const globalIndex = activeCategory * 100 + index;
                                        const isOpen = openQuestions.includes(globalIndex);

                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="border-2 border-black overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => toggleQuestion(globalIndex)}
                                                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between hover:bg-black/5 transition-colors text-left"
                                                >
                                                    <span className="text-base sm:text-lg md:text-xl font-black pr-4">
                                                        {faq.q}
                                                    </span>
                                                    <ChevronDown
                                                        className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                                            }`}
                                                        size={24}
                                                    />
                                                </button>

                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            animate={{ height: 'auto' }}
                                                            exit={{ height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="px-6 sm:px-8 py-5 sm:py-6 bg-[#FAFAFA] border-t-2 border-black">
                                                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                                                    {faq.a}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h2 className="text-[40px] sm:text-[56px] md:text-[72px] font-black mb-6 sm:mb-8">
                        STILL HAVE <span className="text-[#00FF41]">QUESTIONS?</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12">
                        Can't find what you're looking for? Our team is here to help
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                        <button className="bg-[#00FF41] hover:bg-[#00DD35] text-black px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200">
                            CONTACT SUPPORT
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.02em] uppercase transition-all duration-200">
                            JOIN DISCORD
                        </button>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-black text-center mb-12 sm:mb-16">
                        HELPFUL <span className="text-[#00FF41]">RESOURCES</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Documentation', desc: 'Comprehensive guides and API references', link: '#' },
                            { title: 'Whitepaper', desc: 'Technical deep-dive into ArthaChain', link: '#' },
                            { title: 'Developer Portal', desc: 'Tools and resources for builders', link: '#' },
                            { title: 'Community Forum', desc: 'Connect with other developers', link: '#' },
                        ].map((resource, index) => (
                            <motion.a
                                key={index}
                                href={resource.link}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group border-2 border-black p-6 sm:p-8 hover:bg-black hover:text-white transition-all duration-300"
                            >
                                <h3 className="text-xl sm:text-2xl font-black mb-3 uppercase">
                                    {resource.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300">
                                    {resource.desc}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
