import React from 'react';
import { motion } from "framer-motion";
import { 
    Globe, 
    Database,
    ArrowUpRight
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Web Applications",
        description: "Custom web platforms and dashboards built with modern technologies.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Database,
        title: "Enterprise Systems",
        description: "ERP, CRM, and business management systems tailored to your workflows.",
        gradient: "from-orange-500 to-red-500"
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4 block">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        Our Services
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Software development services designed to transform your business.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-7 h-7 text-white" />
                            </div>
                            
                            <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                {service.title}
                                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-400" />
                            </h3>
                            
                            <p className="text-slate-500 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}