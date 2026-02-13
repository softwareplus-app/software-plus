import React from 'react';
import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discovery",
        description: "Understanding your business, goals, and challenges."
    },
    {
        number: "02",
        icon: PenTool,
        title: "Design",
        description: "Creating wireframes and prototypes aligned with your vision."
    },
    {
        number: "03",
        icon: Code2,
        title: "Development",
        description: "Building your software with regular progress updates."
    },
    {
        number: "04",
        icon: Rocket,
        title: "Launch",
        description: "Testing and deployment to ensure everything works perfectly."
    },
    {
        number: "05",
        icon: Headphones,
        title: "Support",
        description: "Ongoing maintenance and updates for peak performance."
    }
];

export default function ProcessSection() {
    return (
        <section className="py-32 bg-gradient-to-b from-white to-slate-50 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4 block">
                        How We Work
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        Our Process
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        A proven methodology for delivering projects on time and on budget.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connection line */}
                    <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent hidden lg:block" />
                    
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative text-center group"
                            >
                                {/* Step circle */}
                                <div className="relative mx-auto mb-6">
                                    <div className="w-20 h-20 mx-auto rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-xl group-hover:shadow-blue-500/10 transition-all duration-300 relative z-10">
                                        <step.icon className="w-8 h-8 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                                        {step.number}
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}