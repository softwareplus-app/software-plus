import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-slate-950/90 backdrop-blur-lg border-b border-white/5' 
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S+</span>
                            </div>
                            <span className="text-xl font-semibold text-white hidden sm:block">Software Plus</span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Button 
                                onClick={() => scrollTo('#contact')}
                                className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-6"
                            >
                                Get Started
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
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
                        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-lg pt-24 px-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.label}
                                        onClick={() => scrollTo(link.href)}
                                        className="text-2xl font-medium text-white py-3 border-b border-white/10 text-left"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                                <Button 
                                    onClick={() => scrollTo('#contact')}
                                    className="bg-white text-slate-900 hover:bg-slate-100 rounded-full mt-4 h-14 text-lg"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}