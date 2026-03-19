import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const scrollTo = (href) => {
        if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveLink(href);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-[27px] px-4"
            >
                <div
                    className="flex items-center bg-white border border-[#C2C0FF] rounded-[50px] px-[34px] py-[8px] gap-[146px] max-w-[1030px] w-full"
                    style={{ height: '63px' }}
                >
                    {/* Logo */}
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="flex-shrink-0">
                        <img src="/logo.png" alt="Software Plus" className="h-[42px] w-auto" onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }} />
                        <div className="hidden items-center gap-1">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 3L37 12V30L21 39L5 30V12L21 3Z" fill="#5A57FF" />
                                <text x="21" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="14" fill="white">S+</text>
                            </svg>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-0 flex-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className={`px-[10px] py-[10px] font-semibold text-[18px] leading-[22px] transition-colors ${
                                    activeLink === link.href
                                        ? 'text-[#5A57FF]'
                                        : 'text-black hover:text-[#5A57FF]'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => scrollTo('#contact')}
                        className="hidden md:flex items-center justify-center px-[10px] py-[10px] bg-[#5A57FF] hover:bg-[#7B79FF] rounded-[40px] transition-colors flex-shrink-0"
                        style={{ width: '161px', height: '48px' }}
                    >
                        <span className="font-semibold text-[16px] leading-[19px] text-white">
                            Get Started
                        </span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-dark"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-white pt-28 px-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.label}
                                        onClick={() => scrollTo(link.href)}
                                        className={`text-xl font-semibold py-3 border-b border-[#C2C0FF] text-left ${
                                            activeLink === link.href ? 'text-[#5A57FF]' : 'text-black'
                                        }`}
                                    >
                                        {link.label}
                                    </button>
                                ))}
                                <button
                                    onClick={() => scrollTo('#contact')}
                                    className="bg-[#5A57FF] hover:bg-[#7B79FF] text-white rounded-[40px] mt-4 h-14 text-lg font-semibold transition-colors"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
