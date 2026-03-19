import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    CheckCircle2
} from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        label: "Location",
        value: "USA"
    },
    {
        icon: Mail,
        label: "Email us",
        value: "info@softwareplus.app",
        href: "mailto:info@softwareplus.app"
    }
];

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
        <section id="contact" className="py-20 md:py-28 bg-[#F4F2FF]">
            <div className="max-w-[1440px] mx-auto px-[100px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="font-bold text-[20px] leading-[24px] text-[#5A57FF] mb-3 block">
                        GET IN TOUCH
                    </span>
                    <h2 className="font-extrabold text-[48px] leading-[58px] text-[#0F172A] mb-4">
                        Let's Build Something{' '}
                        <span className="text-[#5A57FF]">Amazing</span>
                    </h2>
                    <p className="text-[16px] leading-[19px] text-[#818181] max-w-[510px] mx-auto">
                        Tell us about your project and we'll get back to you within 24 hours.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[715px_1fr] gap-10 items-start">
                    {/* Left side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-[#F5F3FF] border border-[#C2C0FF] rounded-[20px] p-8">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-[#818181]">
                                        We'll get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-medium text-[20px] leading-[24px] text-[#0F172A] mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John Smith"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                                className="w-full h-[60px] bg-white border border-[#C2C0FF] rounded-[20px] px-[25px] text-[16px] leading-[19px] text-[#0F172A] placeholder-[#8F8F8F] focus:border-[#5A57FF] focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium text-[20px] leading-[24px] text-[#0F172A] mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="john@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                className="w-full h-[60px] bg-white border border-[#C2C0FF] rounded-[20px] px-[25px] text-[16px] leading-[19px] text-[#0F172A] placeholder-[#8F8F8F] focus:border-[#5A57FF] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-medium text-[20px] leading-[24px] text-[#0F172A] mb-2">
                                            Company / Organization
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your company name"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full h-[60px] bg-white border border-[#C2C0FF] rounded-[20px] px-[25px] text-[16px] leading-[19px] text-[#0F172A] placeholder-[#8F8F8F] focus:border-[#5A57FF] focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-medium text-[20px] leading-[24px] text-[#0F172A] mb-2">
                                            Tell us about your project
                                        </label>
                                        <textarea
                                            placeholder="Describe your project, Goals, and any specific requirements..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            rows={5}
                                            className="w-full bg-white border border-[#C2C0FF] rounded-[20px] px-[25px] py-[15px] text-[16px] leading-[19px] text-[#0F172A] placeholder-[#8F8F8F] focus:border-[#5A57FF] focus:outline-none transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full h-[48px] bg-[#5A57FF] hover:bg-[#7B79FF] text-white rounded-[40px] font-semibold text-[16px] leading-[19px] transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Right side - Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-5 pt-4"
                    >
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#C2C0FF] rounded-[20px] px-6 py-4"
                                style={{ height: '76px' }}
                            >
                                <div className="flex items-center gap-4 h-full">
                                    <info.icon className="w-[22.5px] h-[22.5px] text-[#5A57FF] flex-shrink-0" strokeWidth={2} />
                                    <div>
                                        <div className="font-medium text-[16px] leading-[19px] text-[#818181]">{info.label}</div>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="font-medium text-[20px] leading-[24px] text-[#0F172A] hover:text-[#5A57FF] transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <div className="font-medium text-[20px] leading-[24px] text-[#0F172A]">{info.value}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
