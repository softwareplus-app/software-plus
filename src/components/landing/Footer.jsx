import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">S+</span>
                        </div>
                        <span className="text-xl font-semibold text-white">Software Plus</span>
                    </motion.div>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-sm">
                        <a 
                            href="https://softwareplus.app" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                        >
                            softwareplus.app
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-slate-500 text-sm">
                        © {currentYear} Software Plus. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}