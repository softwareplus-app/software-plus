import React from 'react';
import { motion } from "framer-motion";

function PlayIcon() {
    return (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5479 9.22979L2.79229 0.239168C2.46009 0.0530839 2.07912 -0.0274521 1.70003 0.00827229C1.32095 0.0439967 0.961725 0.194288 0.670142 0.439157C0.37856 0.684025 0.168438 1.01186 0.0677272 1.37907C-0.0329841 1.74627 -0.0195119 2.13543 0.106352 2.49479L2.93573 10.8723L0.106352 19.2498C0.00687908 19.5324 -0.0234164 19.8348 0.0180033 20.1315C0.059423 20.4282 0.171351 20.7107 0.344412 20.9553C0.517473 21.1999 0.746627 21.3994 1.01268 21.5372C1.27873 21.675 1.57392 21.7471 1.87354 21.7473C2.19574 21.7466 2.51238 21.6633 2.79323 21.5054L2.80166 21.4998L18.5517 12.4932C18.8404 12.3298 19.0807 12.0926 19.2478 11.8059C19.415 11.5192 19.503 11.1933 19.503 10.8615C19.503 10.5297 19.415 10.2038 19.2478 9.91711C19.0807 9.63044 18.8404 9.39326 18.5517 9.22979H18.5479ZM2.5476 19.0529L4.93073 11.9973H10.1235C10.4219 11.9973 10.7081 11.8788 10.919 11.6678C11.13 11.4568 11.2485 11.1707 11.2485 10.8723C11.2485 10.5739 11.13 10.2878 10.919 10.0768C10.7081 9.86582 10.4219 9.74729 10.1235 9.74729H4.93073L2.54666 2.68979L16.8679 10.862L2.5476 19.0529Z" fill="#5A57FF"/>
        </svg>
    );
}

const features = [
    {
        title: "Custom Solutions",
        description: "Built from scratch to fit your unique operational workflows and business logic."
    },
    {
        title: "Automation",
        description: "Streamline day-to-day operations with intelligent triggers and integrated data pipelines."
    },
    {
        title: "Scalable systems",
        description: "Cloud -native architectures that handle 10x growth without breaking a sweat."
    }
];

const images = [
    { src: "/about-1.png", alt: "Mobile development" },
    { src: "/about-2.png", alt: "Global reach" },
    { src: "/about-3.png", alt: "Security" },
    { src: "/about-4.png", alt: "System architecture" }
];

function ImagePlaceholder({ alt, className }) {
    return (
        <div className={`bg-gradient-to-br from-[#F4F2FF] to-[#E8E5FF] rounded-[20px] flex items-center justify-center border border-[#C2C0FF] ${className}`}>
            <div className="text-center text-[#5A57FF]/30 p-4">
                <svg className="w-10 h-10 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs">{alt}</p>
            </div>
        </div>
    );
}

export default function AboutSection() {
    return (
        <section className="py-20 md:py-28 bg-[#F4F2FF]">
            <div className="max-w-[1440px] mx-auto px-[100px]">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left side - Text & Features */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-extrabold text-[48px] leading-[58px] text-[#0F172A] mb-10">
                            We Build Software
                            <br />
                            Around{' '}
                            <span className="text-[#5A57FF]">Your Business</span>
                        </h2>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        <PlayIcon />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[24px] leading-[29px] text-[#0F172A] mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[#818181] text-[16px] leading-[19px]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side - Image grid (asymmetric layout per Figma) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                        style={{ width: '660px', height: '545px' }}
                    >
                        {/* Top-left: 263x263 */}
                        <div className="absolute" style={{ left: 0, top: 0, width: '263px', height: '263px' }}>
                            <img src="/about-1.png" alt="Mobile development" className="w-full h-full" />
                        </div>
                        {/* Top-right: 349x233, offset 30px down */}
                        <div className="absolute" style={{ left: '283px', top: '30px', width: '349px', height: '233px' }}>
                            <img src="/about-2.png" alt="Global reach" className="w-full h-full" />
                        </div>
                        {/* Bottom-left: 376x247 */}
                        <div className="absolute" style={{ left: '2px', top: '285px', width: '376px', height: '247px' }}>
                            <img src="/about-3.png" alt="Security" className="w-full h-full" />
                        </div>
                        {/* Bottom-right: 260x260 */}
                        <div className="absolute" style={{ left: '400px', top: '285px', width: '260px', height: '260px' }}>
                            <img src="/about-4.png" alt="System architecture" className="w-full h-full" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
