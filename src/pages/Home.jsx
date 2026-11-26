import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrandStats from '../components/BrandStats';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Clients from '../components/Clients';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import LocalSEO from '../components/LocalSEO';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';
import ScrollProgress from '../components/ScrollProgress';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-deepBlack text-brand-warmWhite font-sans selection:bg-brand-yellow selection:text-brand-deepBlack">
      {/* Interactive Micro-Utilities */}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Main Flow */}
      <main id="main-content">
        <Hero />
        <BrandStats />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Clients />
        <Pricing />
        <Testimonials />
        <LocalSEO />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Floating Utilities */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
