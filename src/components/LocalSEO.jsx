'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, PhoneCall, TrendingUp, Compass, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function LocalSEO() {
  const localities = [
    { name: "Thillai Nagar", note: "Commercial & Healthcare Hub" },
    { name: "Cantonment", note: "Corporate & Central Business District" },
    { name: "Tennur", note: "Established Business & Retail Corridor" },
    { name: "Srirangam", note: "Cultural & Heritage Commercial Center" },
    { name: "Woraiyur", note: "Traditional Trade & Thriving Markets" },
    { name: "KK Nagar", note: "High-Growth Residential & Commercial Zone" },
    { name: "Thiruverumbur", note: "Industrial & Technical Corridor" },
    { name: "Puthur", note: "Medical & Academic Business Area" },
    { name: "Anna Nagar", note: "Prominent Retail & Urban Neighborhood" },
    { name: "Palakarai", note: "Vibrant Wholesale & Merchant District" }
  ];

  const localKeywords = [
    "Digital Marketing Agency in Trichy",
    "Branding Agency in Trichy",
    "Social Media Marketing in Tiruchirappalli",
    "Website Development in Trichy",
    "Logo Design in Trichy",
    "Video Editing Services in Trichy",
    "SEO Services in Tiruchirappalli",
    "Digital Marketing Company in Tamil Nadu"
  ];

  const handleLocalEnquiry = () => {
    const text = "Hello MR K! My business is located in Tiruchirappalli (Trichy) and I would like to discuss local digital marketing and branding.";
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="trichy-local" className="relative py-28 bg-brand-deepBlack border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-brand-yellow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <MapPin className="w-3.5 h-3.5" />
            <span>Rooted in Tiruchirappalli</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            TRICHY DIGITAL GROWTH PARTNER
          </h2>
          <p className="text-base sm:text-lg text-brand-grey leading-relaxed">
            Helping local business owners in Tiruchirappalli, Tamil Nadu, and across South India capture market dominance with world-class digital marketing and branding.
          </p>
        </div>

        {/* 2-Column Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Local Market Value & SEO Ecosystem */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="text-2xl font-display font-black text-brand-warmWhite uppercase">
                Why Local Market Dominance Matters in Trichy
              </h3>
              <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
                When consumers in Tiruchirappalli search for your products, clinic, showroom, or professional services, generic agencies from metropolitan cities lack the on-the-ground understanding of Trichy's regional consumer psychology.
              </p>
              <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
                <strong className="text-brand-warmWhite">MR K</strong> combines deep familiarity with Trichy's bustling commercial districts with high-standard creative design and technical precision, ensuring your brand stands head and shoulders above local competitors.
              </p>

              {/* Keyword Cloud Badges (Natural SEO Architecture) */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider text-brand-yellow font-bold font-display mb-3 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  <span>Specialized Local Competencies</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {localKeywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-full bg-brand-charcoal text-brand-warmWhite/90 border border-white/5 hover:border-brand-yellow/40 transition-colors"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Local Consultation CTA Strip */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-brand-secondaryBlack via-brand-charcoal to-brand-secondaryBlack border border-brand-yellow/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div>
                <h4 className="text-base font-display font-bold text-brand-warmWhite">
                  Have a business in Tiruchirappalli?
                </h4>
                <p className="text-xs text-brand-grey mt-0.5">
                  Let's meet for a cup of coffee or jump on a quick WhatsApp call.
                </p>
              </div>
              <button
                onClick={handleLocalEnquiry}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-yellowHover transition-all flex items-center justify-center gap-2 shrink-0 shadow-md"
              >
                <span>Connect Locally</span>
                <PhoneCall className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Local Service Areas */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-7 border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-display font-bold text-brand-warmWhite">
                    Commercial Localities Served
                  </h4>
                  <p className="text-[11px] text-brand-grey">
                    Providing digital services for businesses situated in:
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-charcoal text-brand-yellow border border-brand-yellow/20">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              {/* Localities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {localities.map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-brand-secondaryBlack/70 border border-white/5 space-y-0.5 hover:border-brand-yellow/30 transition-colors"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      <h5 className="text-xs font-bold text-brand-warmWhite">{loc.name}</h5>
                    </div>
                    <p className="text-[10px] text-brand-grey pl-3">
                      {loc.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Transparency Notice */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-[11px] text-brand-grey/80 leading-relaxed italic flex items-start gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                  <span>
                    Service-area reference: We deliver digital branding, web design, and advertising solutions for businesses across these localities without claiming physical office branches in each neighborhood.
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
