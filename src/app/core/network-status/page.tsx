'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Activity, Server, Globe, Zap, CheckCircle2, Network, Wifi, Clock, TrendingUp, Users, Box } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function NetworkStatusPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO */}
            <section className="relative min-h-[80vh] flex items-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-6 py-2 bg-[#00c853] text-white text-sm font-black uppercase tracking-[0.3em] mb-8">
                            All Systems Operational
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
                    >
                        Network <span className="text-[#ffc502]">Status</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Live network statistics and performance metrics for ArthaChain Testnet.
                    </motion.p>
                </div>
            </section>

            {/* LIVE STATS */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Live Stats
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black">
                                Testnet <span className="text-[#8c52ff]">Metrics</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: '1,247', label: 'Block Height', icon: Box, color: '#8c52ff' },
                            { value: '23,891', label: 'Transactions', icon: Activity, color: '#ff4080' },
                            { value: '156', label: 'Active Validators', icon: Server, color: '#ffc502' },
                            { value: '99.9%', label: 'Uptime', icon: TrendingUp, color: '#00c853' },
                        ].map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="border-4 border-black p-6 text-center hover:bg-black hover:text-white transition-all group">
                                        <Icon className="w-8 h-8 mx-auto mb-4" style={{ color: stat.color }} />
                                        <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                                        <div className="text-gray-600 group-hover:text-gray-300 text-sm uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* PERFORMANCE */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#ffc502] text-black text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Performance
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black">
                                Network <span className="text-[#ffc502]">Speed</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { label: 'Block Time', value: '1.2s', desc: 'Average block production time', icon: Clock },
                            { label: 'TPS', value: '2,450', desc: 'Current transactions per second', icon: Zap },
                            { label: 'Finality', value: '0.8s', desc: 'Time to transaction finality', icon: CheckCircle2 },
                        ].map((metric, i) => {
                            const Icon = metric.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className="border border-white/10 p-8 text-center hover:border-[#ffc502] transition-colors">
                                        <Icon className="w-10 h-10 mx-auto mb-4 text-[#ffc502]" />
                                        <div className="text-5xl font-black text-[#ffc502] mb-2">{metric.value}</div>
                                        <div className="text-xl font-bold mb-2">{metric.label}</div>
                                        <p className="text-gray-400">{metric.desc}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>

            {/* NETWORK TOPOLOGY */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#ff4080] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                P2P Network
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black">
                                Neural Network <span className="text-[#ff4080]">Topology</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <StaggerItem>
                            <div className="bg-gray-50 p-8 h-full">
                                <Network className="w-10 h-10 text-[#ff4080] mb-4" />
                                <h3 className="text-2xl font-black mb-4">libp2p Based</h3>
                                <div className="space-y-3">
                                    {[
                                        'GossipSub v1.1',
                                        'Noise-based encryption',
                                        'Yamux multiplexing',
                                        'QUIC for ultra-low latency'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#ff4080]" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="bg-gray-50 p-8 h-full">
                                <Globe className="w-10 h-10 text-[#8c52ff] mb-4" />
                                <h3 className="text-2xl font-black mb-4">Self-Healing</h3>
                                <div className="space-y-3">
                                    {[
                                        'Predictive routing',
                                        'Automatic peer discovery',
                                        'Dynamic topology adaptation',
                                        'Self-healing infrastructure'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#8c52ff]" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    </div>

                    <StaggerItem>
                        <p className="text-center text-xl font-bold text-gray-600">
                            The network routes itself like a <span className="text-[#ff4080]">living organism</span>.
                        </p>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* NODE DISTRIBUTION */}
            <section className="py-24 px-6 bg-[#8c52ff] text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black">
                                Global Distribution
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        {[
                            { region: 'North America', nodes: '45' },
                            { region: 'Europe', nodes: '38' },
                            { region: 'Asia Pacific', nodes: '52' },
                            { region: 'South America', nodes: '12' },
                            { region: 'Africa', nodes: '9' },
                        ].map((region, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-black/20 backdrop-blur-sm p-6 hover:bg-black/40 transition-colors">
                                    <div className="text-4xl font-black text-[#ffc502] mb-2">{region.nodes}</div>
                                    <div className="text-sm">{region.region}</div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* CTA */}
            <section className="py-40 px-6 bg-black text-white overflow-hidden border-t border-white/10 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />

                <StaggerContainer className="max-w-7xl mx-auto text-center relative z-10">
                    <StaggerItem>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                            Run a <span className="text-[#ffc502]">Node</span>
                        </h2>
                    </StaggerItem>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        {[
                            { text: 'Become a Validator', href: '/dev/validators', primary: true },
                            { text: 'Get Testnet Tokens', href: '/dev/testnet', primary: false },
                            { text: 'View Explorer', href: '/dev/explorer', primary: false }
                        ].map((link, i) => (
                            <StaggerItem key={i}>
                                <Link
                                    href={link.href}
                                    className={`group flex items-center justify-between gap-6 w-full md:w-auto min-w-[260px] px-8 py-6 font-bold uppercase tracking-widest transition-all duration-300 ${link.primary
                                            ? 'bg-[#ffc502] text-black hover:bg-[#ff4080] hover:text-white'
                                            : 'bg-white/5 border border-white/10 text-white hover:border-white/50 hover:bg-white/10'
                                        }`}
                                >
                                    <span className="text-sm">{link.text}</span>
                                    <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${link.primary ? 'text-black group-hover:text-white' : 'text-[#ffc502]'}`} />
                                </Link>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>
        </div>
    );
}
