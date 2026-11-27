'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Eye, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function About() {
  const values = [
    {
      title: "Direct Founder Commitment",
      desc: "No middlemen or junior account handlers. You collaborate directly with the creative and strategic mind building your brand."
    },
    {
      title: "Craft Over Templates",
      desc: "Every visual asset, video cut, and line of frontend code is intentionally customized to elevate your specific market position."
    },
    {
      title: "Transparent Business Ethics",
      desc: "Honest timelines, clear deliverables, and straightforward pricing with zero hidden fees or overpromised gimmicks."
    },
    {
      title: "Growth That Converts",
      desc: "We balance stunning artistic design with commercial utility — turning brand awareness into quantifiable customer inquiries."
    }
  ];

  const handleConsultation = () => {
    const url = buildWhatsAppUrl("Hello MR K! I read about your agency and would like to schedule a strategic discussion for my business.");
    window.open(url, '_blank');
  };

  return (
    <section id="about" className="relative py-28 bg-brand-deepBlack overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About MR K</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase leading-tight tracking-tight">
            MORE THAN AN AGENCY.{' '}
            <span className="text-gradient-yellow">YOUR DIGITAL GROWTH PARTNER.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-grey font-normal leading-relaxed pt-2">
            MR K is a creative digital branding and marketing company focused on helping businesses establish a powerful digital identity. We combine creative thinking, modern technology, strategic marketing and digital experiences to help brands move forward.
          </p>
        </div>

        {/* Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Brand Composition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative glass-panel rounded-3xl p-8 border border-white/10 overflow-hidden shadow-2xl">
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />

              {/* Logo Presentation */}
              <div className="flex flex-col items-center text-center space-y-6 py-6">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-brand-yellow/80 shadow-[0_0_40px_rgba(255,217,67,0.35)] bg-brand-deepBlack p-1">
                  <img
                    src="/logo/mrk-logo.png"
                    alt="Official MR K Brand Identity"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-black text-brand-warmWhite uppercase tracking-wide">
                    MR K
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-widest text-brand-yellow">
                    BUILD • BRAND • GROW
                  </p>
                  <p className="text-xs text-brand-grey max-w-xs mx-auto pt-1">
                    Based in Tiruchirappalli (Trichy), serving visionary businesses across Tamil Nadu and expanding internationally.
                  </p>
                </div>

                <div className="w-full pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
                  <div className="bg-brand-secondaryBlack/70 p-3.5 rounded-xl border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-brand-yellow font-semibold block">Headquarters</span>
                    <span className="text-xs text-brand-warmWhite font-medium">Trichy, Tamil Nadu</span>
                  </div>
                  <div className="bg-brand-secondaryBlack/70 p-3.5 rounded-xl border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-brand-yellow font-semibold block">Specialization</span>
                    <span className="text-xs text-brand-warmWhite font-medium">Branding & Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Note Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 flex items-center justify-center text-brand-yellow font-bold text-sm">
                  K
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-brand-warmWhite">The Founder Behind MR K</h4>
                  <p className="text-[11px] text-brand-yellow font-medium">Founder & Creative Director</p>
                </div>
              </div>
              <p className="text-xs text-brand-grey leading-relaxed">
                "I started MR K with a clear determination: local businesses in Trichy and Tamil Nadu deserve world-class branding and digital experiences that rival global leaders. We don't make generic marketing noise. We build memorable identities and digital engines that generate respect and real business revenue."
              </p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Strategic Approach */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3 relative group hover:border-brand-yellow/40 transition-colors">
                <div className="p-3 rounded-xl bg-brand-charcoal text-brand-yellow w-fit border border-brand-yellow/20">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-bold text-brand-warmWhite">Our Mission</h4>
                <p className="text-xs text-brand-grey leading-relaxed">
                  To empower ambitious business owners with strategic branding, cutting-edge websites, cinematic video storytelling, and data-backed digital marketing that turns curiosity into customer loyalty.
                </p>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3 relative group hover:border-brand-yellow/40 transition-colors">
                <div className="p-3 rounded-xl bg-brand-charcoal text-brand-yellow w-fit border border-brand-yellow/20">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-bold text-brand-warmWhite">Our Vision</h4>
                <p className="text-xs text-brand-grey leading-relaxed">
                  To be the premier digital growth partner emerging from Tiruchirappalli, celebrated across India for uncompromising design standards, technological fluency, and genuine commercial impact.
                </p>
              </div>
            </div>

            {/* Our Business Approach */}
            <div className="glass-panel rounded-2xl p-7 border border-white/10 space-y-5">
              <div className="flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-brand-yellow" />
                <h3 className="text-lg font-display font-bold text-brand-warmWhite uppercase tracking-wide">
                  The MR K Business Approach
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {values.map((val, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                      <h5 className="text-sm font-semibold text-brand-warmWhite">{val.title}</h5>
                    </div>
                    <p className="text-xs text-brand-grey pl-6 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-brand-secondaryBlack via-brand-charcoal to-brand-secondaryBlack border border-brand-yellow/30 shadow-lg">
              <div>
                <p className="text-sm font-display font-bold text-brand-warmWhite">
                  Ready to upgrade your brand’s digital presence?
                </p>
                <p className="text-xs text-brand-grey">
                  Schedule a one-on-one consultation with MR K directly.
                </p>
              </div>
              <button
                onClick={handleConsultation}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-yellowHover transition-all shadow-[0_0_20px_rgba(255,217,67,0.3)] flex items-center justify-center gap-2 shrink-0"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
