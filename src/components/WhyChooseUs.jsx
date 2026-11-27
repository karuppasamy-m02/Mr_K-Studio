'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Cpu, 
  Sliders, 
  Receipt, 
  ShieldCheck, 
  MapPin, 
  MessagesSquare, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Creative-First Thinking",
      desc: "We prioritize bold visual identity and distinct aesthetics that prevent your brand from blending into a sea of generic competitors."
    },
    {
      icon: Cpu,
      title: "Modern Technology",
      desc: "Powered by modern frontend engineering, interactive 3D WebGL, and high-performance frameworks that deliver sub-second loading."
    },
    {
      icon: Sliders,
      title: "Personalized Business Strategies",
      desc: "Zero boilerplate strategies. Every campaign, reel calendar, and website funnel is tailored to your business sector and target market."
    },
    {
      icon: Receipt,
      title: "Transparent Pricing",
      desc: "Clear rupee-denominated pricing structures. You know exactly what is included, revision scopes, and ad spend separations."
    },
    {
      icon: ShieldCheck,
      title: "Quality-Driven Delivery",
      desc: "Strict quality control across typography, vector precision, color profiles, video bitrate, and responsive device testing."
    },
    {
      icon: MapPin,
      title: "Local Market Understanding",
      desc: "Deep knowledge of consumer behavior in Trichy, Tamil Nadu, and regional markets, giving your campaigns natural local resonance."
    },
    {
      icon: MessagesSquare,
      title: "Direct Communication",
      desc: "No call queues or ticketing delay. Rapid, direct communication through WhatsApp and scheduled strategy reviews."
    },
    {
      icon: TrendingUp,
      title: "Long-Term Growth Approach",
      desc: "We look beyond one-off transactions to build enduring brand equity that yields compounding business returns year after year."
    }
  ];

  return (
    <section className="relative py-28 bg-brand-deepBlack border-t border-white/5 overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The MR K Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            WHY BUSINESSES CHOOSE MR K
          </h2>
          <p className="text-base text-brand-grey max-w-2xl mx-auto leading-relaxed">
            We operate at the intersection of high-end design artistry and measurable business acquisition.
          </p>
        </div>

        {/* Pillars Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Subtle Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-brand-yellow group-hover:to-transparent transition-all duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-charcoal border border-brand-yellow/20 flex items-center justify-center text-brand-yellow mb-5 group-hover:border-brand-yellow/60 group-hover:scale-105 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-display font-bold text-brand-warmWhite mb-2 group-hover:text-brand-yellow transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-brand-grey leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-brand-grey font-semibold tracking-wider uppercase">
                  <span>Advantage 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow/40 group-hover:bg-brand-yellow transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
