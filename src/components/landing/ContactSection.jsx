import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Send,
    Mail,
    CheckCircle2
} from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(
            `New inquiry from ${formData.name}${formData.company ? ` (${formData.company})` : ''}`
        );
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\n${formData.message}`
        );

        window.location.href = `mailto:info@softwareplus.app?subject=${subject}&body=${body}`;
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    return (
        <section id="contact" className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left side - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4 block">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Let's Build Something Amazing
                        </h2>
                        <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                            Tell us about your project and we'll get back to you within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Email us</div>
                                    <a href="mailto:info@softwareplus.app" className="text-slate-900 font-medium hover:text-blue-600 transition-colors">
                                        info@softwareplus.app
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border-2 border-slate-900">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-slate-500">
                                        We'll get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-slate-700">Your Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="John Smith"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                                className="bg-white border-slate-200 focus:border-blue-500 h-12 rounded-xl"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-slate-700">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                className="bg-white border-slate-200 focus:border-blue-500 h-12 rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-slate-700">Company / Organization</Label>
                                        <Input
                                            id="company"
                                            placeholder="Your company name"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="bg-white border-slate-200 focus:border-blue-500 h-12 rounded-xl"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-slate-700">Tell us about your project</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Describe your project, goals, and any specific requirements..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            rows={5}
                                            className="bg-white border-slate-200 focus:border-blue-500 rounded-xl resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 rounded-xl text-base font-medium"
                                    >
                                        Send Message
                                        <Send className="w-5 h-5 ml-2" />
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}