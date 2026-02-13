import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2, Users, Clock, Award, HeartHandshake, Lightbulb } from "lucide-react";

const reasons = [
    {
        icon: Lightbulb,
        title: "Tailored Solutions",
        description: "Every project is built from the ground up to match your specific needs."
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description: "Work directly with experienced developers committed to your success."
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Clear milestones and transparent communication keep your project on track."
    },
    {
        icon: Award,
        title: "Quality First",
        description: "Best practices ensure your software is reliable, secure, and scalable."
    },
    {
        icon: HeartHandshake,
        title: "Long-Term Partnership",
        description: "Partners invested in your growth with ongoing support and maintenance."
    },
    {
        icon: CheckCircle2,
        title: "Proven Track Record",
        description: "Trusted by organizations to deliver mission-critical software solutions."
    }
];

export default function WhyChooseUsSection() {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-4 block">
                        Why Software Plus
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Built Different
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Technical excellence meets business understanding.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                                    <reason.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {reason.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}