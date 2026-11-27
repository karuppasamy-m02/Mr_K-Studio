'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Share2, 
  Film, 
  Globe, 
  TrendingUp, 
  MapPin, 
  Bot, 
  ArrowRight, 
  Check,
  MessageSquare
} from 'lucide-react';
import { servicesData } from '../data/services';
import { buildWhatsAppUrl, formatServiceQuoteMessage } from '../utils/whatsapp';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const iconMap = {
    Sparkles: Sparkles,
    Share2: Share2,
    Film: Film,
    Globe: Globe,
    TrendingUp: TrendingUp,
    MapPin: MapPin,
    Bot: Bot,
  };

  const handleGetQuote = (serviceTitle) => {
    const message = formatServiceQuoteMessage(serviceTitle);
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="relative py-28 bg-brand-secondaryBlack border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            Comprehensive Growth Services
          </h2>
          <p className="text-base text-brand-grey max-w-2xl mx-auto leading-relaxed">
            Every service is engineered with deliberate focus on creative excellence, modern technical execution, and commercial results for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.map((svc, idx) => {
            const Icon = iconMap[svc.icon] || Sparkles;

            return (
              <motion.article
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between border border-white/10 group overflow-hidden"
              >
                {/* Background Subtle Gradient Glow */}
                <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${svc.accentGlow} rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125`} />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl text-white/20 group-hover:text-brand-yellow/40 transition-colors">
                      {svc.number}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-brand-charcoal text-brand-yellow border border-brand-yellow/20 group-hover:border-brand-yellow group-hover:scale-110 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-display font-bold text-brand-warmWhite mb-2 group-hover:text-brand-yellow transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-brand-yellow font-medium mb-3 italic">
                    "{svc.tagline}"
                  </p>
                  <p className="text-xs text-brand-grey leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                    <p className="text-[11px] uppercase tracking-wider text-brand-warmWhite font-bold font-display">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-1.5">
                      {svc.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-brand-grey/90">
                          <Check className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-brand-grey uppercase tracking-wider">
                    {svc.highlight}
                  </span>
                  
                  <button
                    onClick={() => handleGetQuote(svc.title)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-charcoal text-brand-yellow font-display font-bold text-xs uppercase tracking-wider border border-brand-yellow/30 hover:bg-brand-yellow hover:text-brand-deepBlack active:scale-95 transition-all duration-200 shadow-sm"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass-panel px-6 py-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-brand-yellow" />
              <p className="text-xs sm:text-sm text-brand-warmWhite font-medium">
                Need a multi-service package customized for your business in Tamil Nadu?
              </p>
            </div>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-yellowHover transition-colors shrink-0"
            >
              Request Custom Proposal
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
