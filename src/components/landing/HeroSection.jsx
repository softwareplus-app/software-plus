import React from 'react';
import { motion } from "framer-motion";

export default function HeroSection() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative pt-[155px] pb-20 overflow-hidden bg-[#F4F2FF]">
            <div className="max-w-[1440px] mx-auto px-[90px]">
                <div className="flex items-center gap-12">
                    {/* Left side - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-[620px] flex-shrink-0"
                    >
                        <h1 className="font-black text-[64px] leading-[77px] text-black mb-6">
                            We Build{' '}
                            <span className="text-[#5A57FF]">Software</span>
                            <br />
                            That{' '}
                            <span className="text-[#5A57FF]">Works</span>
                        </h1>

                        <p className="font-medium text-[18px] leading-[22px] text-[#0F172A] mb-10 max-w-[533px]">
                            We design and build tailored software solutions for small businesses to automate processes,improve efficiency, and scale with confidence.
                        </p>

                        <div className="flex flex-row gap-6">
                            {/* Primary CTA */}
                            <button
                                onClick={scrollToContact}
                                className="flex items-center justify-center px-[10px] py-[10px] bg-[#5A57FF] hover:bg-[#7B79FF] rounded-[40px] transition-colors"
                                style={{ width: '210px', height: '48px' }}
                            >
                                <span className="font-semibold text-[16px] leading-[19px] text-white">
                                    Start Your Project
                                </span>
                            </button>

                            {/* Secondary CTA */}
                            <button
                                onClick={scrollToServices}
                                className="flex items-center justify-center px-[10px] py-[10px] border border-[#7B79FF] rounded-[40px] hover:bg-[#5A57FF]/5 transition-colors"
                                style={{ width: '210px', height: '48px' }}
                            >
                                <span className="font-semibold text-[16px] leading-[19px] text-[#5A57FF]">
                                    Explore Services
                                </span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right side - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:block flex-shrink-0"
                        style={{ width: '685px', height: '457px' }}
                    >
                        <img
                            src="/hero-illustration.png"
                            alt="Software development illustration"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-[#F4F2FF] to-[#E8E5FF] rounded-3xl items-center justify-center hidden">
                            <div className="text-center text-[#5A57FF]/40">
                                <svg className="w-20 h-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                                <p className="text-sm font-medium">Hero Illustration</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
