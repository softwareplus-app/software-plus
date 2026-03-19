import React from 'react';

const serviceLinks = [
    "Web Applications",
    "Mobile Apps",
    "Enterprise Systems",
    "Cloud & DevOps",
    "Data & Analytics"
];

const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollTo = (href) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0F172A] rounded-t-[20px] pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-[190px]">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Logo & Tagline */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <img src="/logo.png" alt="Software Plus" className="h-[50px] w-auto" onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }} />
                            <div className="hidden items-center gap-1">
                                <svg width="50" height="50" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 3L37 12V30L21 39L5 30V12L21 3Z" fill="#5A57FF" />
                                    <text x="21" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="14" fill="white">S+</text>
                                </svg>
                            </div>
                            <span className="font-extrabold text-[40px] leading-[48px] text-white">Software Plus</span>
                        </div>
                        <p className="font-medium text-[16px] leading-[19px] text-[#818181]">We Build Software ,That Works</p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-[20px] leading-[24px] text-white uppercase mb-4">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {serviceLinks.map((service) => (
                                <li key={service}>
                                    <button
                                        onClick={() => scrollTo('#services')}
                                        className="font-medium text-[16px] leading-[19px] text-[#818181] hover:text-[#5A57FF] transition-colors"
                                    >
                                        {service}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-[20px] leading-[24px] text-white uppercase mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="font-medium text-[16px] leading-[19px] text-[#818181] hover:text-[#5A57FF] transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <div className="border-t border-white/[0.64] pt-6">
                    <div className="flex items-center justify-center gap-[10px]">
                        {/* Copyright icon */}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1" />
                            <text x="12" y="16" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="white">C</text>
                        </svg>
                        <p className="text-white text-[16px] leading-[19px]">
                            {currentYear} Software Plus .All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
