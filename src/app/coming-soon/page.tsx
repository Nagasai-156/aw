'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Rocket, Clock, Bell } from 'lucide-react';

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

            {/* Animated circles */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#8c52ff] blur-[100px] opacity-20"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#ff4080] blur-[100px] opacity-20"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.2, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Icon */}
                    <motion.div
                        className="inline-block mb-8"
                        animate={{
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Rocket className="w-20 h-20 sm:w-24 sm:h-24 text-[#8c52ff]" />
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                        Coming Soon
                    </h1>

                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        We're building something amazing. This feature will be available soon.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                        {[
                            { icon: Clock, text: 'In Development' },
                            { icon: Rocket, text: 'Launching Soon' },
                            { icon: Bell, text: 'Stay Tuned' }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * i }}
                                    className="bg-white/5 border-2 border-white/10 p-6 sm:p-8"
                                >
                                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 text-[#ffc502]" />
                                    <p className="text-base sm:text-lg font-bold">{item.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#8c52ff] text-white font-black uppercase tracking-wider hover:bg-[#ff4080] transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
