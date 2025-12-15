'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, MessageCircle, Send, ArrowUpRight, Clock, ArrowRight, Globe, Twitter, Github, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export default function ContactPage() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Email recipients
        const recipients = 'sainath@diigoo.com,nagasai@diigoo.com';

        // Create email subject
        const subject = `[ArthaChain Contact] ${formData.topic} - ${formData.name}`;

        // Create email body
        const body = `Hello ArthaChain Team,

Name: ${formData.name}
Email: ${formData.email}
Topic: ${formData.topic}

Message:
${formData.message}

---
Sent from ArthaChain Contact Form`;

        // Create mailto link and open it
        const mailtoLink = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');

        // Show success message
        setSubmitStatus('success');

        // Reset form after a delay
        setTimeout(() => {
            setFormData({ name: '', email: '', topic: '', message: '' });
            setSubmitStatus('idle');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-white selection:bg-[#ffc502] selection:text-black">

            {/* HERO */}
            <section className="relative min-h-[80vh] flex items-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="inline-block px-6 py-2 bg-[#ff4080] text-white text-sm font-black uppercase tracking-[0.3em] mb-8">
                                    Contact
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
                            >
                                Let's <span className="text-[#ff4080]">Talk</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl text-gray-400 mb-8 max-w-md"
                            >
                                Have a question, partnership inquiry, or just want to say hello? We'd love to hear from you.
                            </motion.p>

                            <motion.a
                                href="mailto:sainath@diigoo.com"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-2xl text-white hover:text-[#ff4080] transition-colors inline-flex items-center gap-3 group font-bold"
                            >
                                sainath@diigoo.com
                                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>
                        </div>

                        {/* Right - Contact Methods */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="space-y-4"
                        >
                            {[
                                { icon: Mail, label: 'Email', value: 'sainath@diigoo.com', href: 'mailto:sainath@diigoo.com', color: '#ff4080' },
                                { icon: MessageCircle, label: 'Discord', value: 'Join Our Community', href: '#', color: '#8c52ff' },
                                { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null, color: '#ffc502' },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                const Wrapper = item.href ? 'a' : 'div';
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                                    >
                                        <Wrapper
                                            {...(item.href ? { href: item.href } : {})}
                                            className="flex items-center gap-6 p-6 border border-white/10 hover:border-white/30 transition-all group cursor-pointer"
                                        >
                                            <div
                                                className="w-14 h-14 flex items-center justify-center border-4"
                                                style={{ borderColor: item.color }}
                                            >
                                                <Icon size={24} style={{ color: item.color }} />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="text-white/40 text-sm uppercase tracking-wider">{item.label}</div>
                                                <div className="text-white font-bold text-lg">{item.value}</div>
                                            </div>
                                            {item.href && (
                                                <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" />
                                            )}
                                        </Wrapper>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

                <StaggerContainer className="max-w-3xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#ff4080] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Get in Touch
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-4">
                                Send a <span className="text-[#ff4080]">Message</span>
                            </h2>
                            <p className="text-xl text-gray-600">
                                Fill out the form below and we'll get back to you shortly.
                            </p>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="flex items-center gap-3 p-4 bg-green-50 border-4 border-green-500 text-green-700">
                                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                                    <p className="font-medium">Your email client will open. Please send the email to complete your message!</p>
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        required
                                        className={`w-full px-6 py-5 border-4 bg-white text-black font-medium outline-none transition-all ${focusedField === 'name' ? 'border-[#ff4080]' : 'border-black'}`}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        required
                                        className={`w-full px-6 py-5 border-4 bg-white text-black font-medium outline-none transition-all ${focusedField === 'email' ? 'border-[#ff4080]' : 'border-black'}`}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                            </div>

                            <div>
                                <select
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full px-6 py-5 border-4 bg-white text-black font-medium outline-none transition-all appearance-none cursor-pointer ${focusedField === 'topic' ? 'border-[#ff4080]' : 'border-black'}`}
                                    onFocus={() => setFocusedField('topic')}
                                    onBlur={() => setFocusedField(null)}
                                >
                                    <option value="" disabled>Select a Topic</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Technical Support">Technical Support</option>
                                    <option value="Press & Media">Press & Media</option>
                                    <option value="Investment">Investment</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    placeholder="Your Message"
                                    required
                                    className={`w-full px-6 py-5 border-4 bg-white text-black font-medium outline-none transition-all resize-none ${focusedField === 'message' ? 'border-[#ff4080]' : 'border-black'}`}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-6 font-bold uppercase tracking-wider text-lg flex items-center justify-center gap-3 transition-all bg-black text-white hover:bg-[#ff4080]"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* QUICK CONNECT */}
            <section className="py-24 px-6 bg-black text-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />

                <StaggerContainer className="max-w-6xl mx-auto relative z-10">
                    <StaggerItem>
                        <div className="text-center mb-16">
                            <span className="inline-block px-6 py-2 bg-[#8c52ff] text-white text-sm font-black uppercase tracking-[0.3em] mb-6">
                                Quick Connect
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black">
                                Join Our <span className="text-[#8c52ff]">Community</span>
                            </h2>
                        </div>
                    </StaggerItem>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { name: 'Twitter', handle: '@ArthaChain', icon: Twitter, color: '#ff4080' },
                            { name: 'Discord', handle: 'Join Server', icon: MessageCircle, color: '#8c52ff' },
                            { name: 'GitHub', handle: 'arthachain', icon: Github, color: '#ffc502' },
                            { name: 'Telegram', handle: '@arthachain', icon: Globe, color: '#ff4080' },
                        ].map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <StaggerItem key={i}>
                                    <a
                                        href="#"
                                        className="block p-8 border border-white/10 hover:border-white/30 transition-all group"
                                    >
                                        <Icon className="w-8 h-8 mb-4" style={{ color: social.color }} />
                                        <h3 className="text-xl font-black mb-2">{social.name}</h3>
                                        <p className="text-gray-400 group-hover:text-white transition-colors">{social.handle}</p>
                                    </a>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>



            {/* CTA */}
            <section className="py-40 px-6 bg-black text-white overflow-hidden border-t border-white/10 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />

                <StaggerContainer className="max-w-7xl mx-auto text-center relative z-10">
                    <StaggerItem>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter">
                            Ready to <span className="text-[#ff4080]">Connect</span>?
                        </h2>
                    </StaggerItem>

                    <StaggerItem>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16">
                            Whether you're a developer, investor, or enthusiast, we're here to help you get started.
                        </p>
                    </StaggerItem>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        {[
                            { text: 'Email Us', href: 'mailto:sainath@diigoo.com', primary: true },
                            { text: 'Join Discord', href: '#', primary: false },
                            { text: 'Follow on Twitter', href: '#', primary: false }
                        ].map((link, i) => (
                            <StaggerItem key={i}>
                                <a
                                    href={link.href}
                                    className={`group flex items-center justify-between gap-6 w-full md:w-auto min-w-[260px] px-8 py-6 font-bold uppercase tracking-widest transition-all duration-300 ${link.primary
                                        ? 'bg-[#ff4080] text-white hover:bg-[#8c52ff]'
                                        : 'bg-white/5 border border-white/10 text-white hover:border-white/50 hover:bg-white/10 backdrop-blur-sm'
                                        }`}
                                >
                                    <span className="text-sm">{link.text}</span>
                                    <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${link.primary ? 'text-white' : 'text-[#ff4080] group-hover:text-white'}`} />
                                </a>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>
        </div>
    );
}
