'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Package, Download, Code, Terminal, ChevronDown, ArrowRight, Check, Copy, ExternalLink } from 'lucide-react';
import { useState, useRef } from 'react';

export default function SDKsPage() {
    const [activeTab, setActiveTab] = useState<'javascript' | 'python' | 'rust' | 'go'>('javascript');
    const [copied, setCopied] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    const sdks = {
        javascript: {
            name: 'JavaScript/TypeScript',
            package: '@arthachain/sdk',
            install: 'npm install @arthachain/sdk',
            version: 'v2.4.1',
            downloads: '284K',
            color: '#ffc502',
            code: `import { ArthaClient } from '@arthachain/sdk';

const client = new ArthaClient({
    network: 'mainnet',
    apiKey: process.env.ARTHA_API_KEY
});

// Get account balance
const balance = await client.getBalance('0x...');

// Send transaction
const tx = await client.sendTransaction({
    to: '0x...',
    value: '1.0',
    data: '0x'
});`,
        },
        python: {
            name: 'Python',
            package: 'arthachain-sdk',
            install: 'pip install arthachain-sdk',
            version: 'v1.8.3',
            downloads: '156K',
            color: '#8c52ff',
            code: `from arthachain import ArthaClient

client = ArthaClient(
    network="mainnet",
    api_key=os.environ["ARTHA_API_KEY"]
)

# Get account balance
balance = client.get_balance("0x...")

# Send transaction
tx = client.send_transaction(
    to="0x...",
    value="1.0",
    data="0x"
)`,
        },
        rust: {
            name: 'Rust',
            package: 'arthachain-rs',
            install: 'cargo add arthachain-rs',
            version: 'v0.9.2',
            downloads: '48K',
            color: '#ff4080',
            code: `use arthachain::Client;

let client = Client::new()
    .network("mainnet")
    .api_key(env::var("ARTHA_API_KEY")?)
    .build()?;

// Get account balance
let balance = client.get_balance("0x...").await?;

// Send transaction
let tx = client.send_transaction()
    .to("0x...")
    .value("1.0")
    .send().await?;`,
        },
        go: {
            name: 'Go',
            package: 'github.com/arthachain/go-sdk',
            install: 'go get github.com/arthachain/go-sdk',
            version: 'v1.2.0',
            downloads: '32K',
            color: '#450693',
            code: `import "github.com/arthachain/go-sdk"

client, err := arthachain.NewClient(
    arthachain.WithNetwork("mainnet"),
    arthachain.WithAPIKey(os.Getenv("ARTHA_API_KEY")),
)

// Get account balance
balance, err := client.GetBalance("0x...")

// Send transaction
tx, err := client.SendTransaction(&arthachain.TxParams{
    To:    "0x...",
    Value: "1.0",
})`,
        },
    };

    const activeSDK = sdks[activeTab];

    const copyInstall = () => {
        navigator.clipboard.writeText(activeSDK.install);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* HERO */}
            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <motion.div
                    className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#ffc502]/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
                    <motion.div style={{ y }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full mb-8"
                        >
                            <Package className="w-4 h-4 text-[#ffc502]" />
                            <span className="text-[12px] font-medium text-white/80 tracking-wider uppercase">Software Development Kits</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-[64px] sm:text-[96px] lg:text-[130px] font-black leading-[0.85] tracking-[-0.04em]">
                                <motion.span
                                    className="block text-white"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    SDKS
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mt-8 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Official client libraries for JavaScript, Python, Rust, and Go. Build applications faster with type-safe APIs.
                        </motion.p>

                        {/* Language Tabs */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-2 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {Object.entries(sdks).map(([key, sdk]) => (
                                <motion.button
                                    key={key}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveTab(key as keyof typeof sdks)}
                                    className={`px-6 py-3 font-bold uppercase tracking-wide transition-all ${activeTab === key
                                            ? 'text-black'
                                            : 'bg-transparent border-2 border-white/20 text-white/60'
                                        }`}
                                    style={activeTab === key ? { backgroundColor: sdk.color } : {}}
                                >
                                    {sdk.name.split('/')[0]}
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="text-white/40 w-8 h-8" />
                </motion.div>
            </section>

            {/* SDK DETAILS */}
            <section className="relative py-32 px-8 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid lg:grid-cols-2 gap-12"
                    >
                        {/* Left - Info */}
                        <div>
                            <div
                                className="w-20 h-20 flex items-center justify-center mb-6"
                                style={{ backgroundColor: activeSDK.color }}
                            >
                                <Package size={40} className="text-white" />
                            </div>
                            <h2 className="text-[40px] font-black text-black mb-4">{activeSDK.name} SDK</h2>

                            {/* Stats */}
                            <div className="flex gap-6 mb-8">
                                <div>
                                    <div className="text-2xl font-black" style={{ color: activeSDK.color }}>{activeSDK.version}</div>
                                    <div className="text-black/40 text-sm uppercase">Version</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black" style={{ color: activeSDK.color }}>{activeSDK.downloads}</div>
                                    <div className="text-black/40 text-sm uppercase">Downloads</div>
                                </div>
                            </div>

                            {/* Install Command */}
                            <div className="border-4 border-black p-4 mb-8">
                                <div className="flex items-center justify-between">
                                    <code className="font-mono text-black">{activeSDK.install}</code>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={copyInstall}
                                        className="p-2 hover:bg-black/10 transition-colors"
                                    >
                                        {copied ? <Check size={20} /> : <Copy size={20} />}
                                    </motion.button>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="space-y-3">
                                {[
                                    { label: 'Documentation', href: '#' },
                                    { label: 'API Reference', href: '#' },
                                    { label: 'GitHub Repository', href: '#', external: true },
                                    { label: 'Changelog', href: '#' },
                                ].map((link, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-2 font-bold text-black hover:text-[#8c52ff] transition-colors"
                                        >
                                            {link.label}
                                            {link.external ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Code */}
                        <div className="border-4 border-black overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-3 bg-black">
                                <div className="flex items-center gap-2">
                                    <Code size={16} className="text-white/60" />
                                    <span className="text-white/60 text-sm font-mono">example.{activeTab === 'python' ? 'py' : activeTab === 'rust' ? 'rs' : activeTab === 'go' ? 'go' : 'ts'}</span>
                                </div>
                            </div>
                            <pre className="p-6 bg-black/95 text-sm font-mono text-white/80 overflow-x-auto">
                                <code>{activeSDK.code}</code>
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="relative py-32 px-8 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold text-[#ff4080] uppercase tracking-widest mb-4 block">Why Use Our SDKs</span>
                        <h2 className="text-[48px] lg:text-[64px] font-black text-white">
                            Built for <span className="text-[#ff4080]">Developers</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Code, title: 'Type-Safe', desc: 'Full TypeScript support with auto-completion' },
                            { icon: Download, title: 'Lightweight', desc: 'Minimal dependencies, fast installation' },
                            { icon: Terminal, title: 'Easy Debug', desc: 'Detailed error messages and stack traces' },
                            { icon: Package, title: 'Modular', desc: 'Import only what you need' },
                        ].map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="border-2 border-white/10 p-6 hover:border-[#ff4080] transition-colors cursor-pointer"
                                >
                                    <Icon size={32} className="text-[#ff4080] mb-4" />
                                    <h3 className="font-black text-white mb-2">{feature.title}</h3>
                                    <p className="text-white/50 text-sm">{feature.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
