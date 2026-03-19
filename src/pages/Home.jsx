import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import ServicesSection from '@/components/landing/ServicesSection';
import ProcessSection from '@/components/landing/ProcessSection';
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProcessSection />
            <WhyChooseUsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
