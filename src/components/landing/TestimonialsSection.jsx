import React from 'react';
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Software Plus delivered a custom CRM that perfectly fits our workflow. Professional, responsive, and exceeded expectations.",
        author: "Sarah Mitchell",
        role: "CEO, TechFlow Industries",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
        quote: "They took our complex requirements and delivered an elegant solution that our entire team loves.",
        author: "Michael Chen",
        role: "Operations Director, GlobalServe",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
        quote: "Our new platform handles 10x the traffic and dramatically improved our customer experience.",
        author: "Emily Rodriguez",
        role: "CTO, NextGen Solutions",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        What Clients Say
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Hear from organizations we've helped succeed.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 h-full flex flex-col">
                                {/* Quote icon */}
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                    <Quote className="w-6 h-6 text-blue-500" />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="font-semibold text-slate-900">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-slate-500">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}