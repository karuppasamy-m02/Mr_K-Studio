'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroActions() {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-7 pt-2"
    >
      {/* Editorial Description */}
      <p className="text-base sm:text-lg lg:text-xl text-[#A1A1A1] font-normal max-w-xl leading-relaxed">
        Transforming ambitious ideas into extraordinary digital experiences through technology, creativity, and intelligent solutions.
      </p>

      {/* Two CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        {/* Secondary: EXPLORE OUR WORK */}
        <button
          onClick={() => scrollTo('work')}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FFD700] text-[#080808] font-display font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#E5C100] active:scale-[0.98] transition-all duration-200 group rounded-md shadow-[0_0_30px_rgba(255,215,0,0.25)] hover:shadow-[0_0_45px_rgba(255,215,0,0.5)]"
        >
          <span>EXPLORE OUR WORK</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Primary: START A PROJECT */}
        <button
          onClick={() => scrollTo('contact')}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#D4AF37]/50 text-white font-display font-semibold text-xs uppercase tracking-[0.18em] hover:border-[#FFD700] hover:text-[#FFD700] hover:bg-[#FFD700]/[0.06] active:scale-[0.98] transition-all duration-200 group rounded-md bg-[#101010]/80 backdrop-blur-md"
        >
          <span>START A PROJECT</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FFD700]" />
        </button>
      </div>

      {/* Understated Brand Information */}
      <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-[#737373]">
        <div className="flex items-center gap-2 text-[#A1A1A1]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shrink-0" />
          <span>FOUNDER-LED STUDIO</span>
        </div>
        <div className="hidden sm:block text-white/10">•</div>
        <div className="flex items-center gap-2 text-[#A1A1A1]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
          <span>ESTABLISHED IN TRICHY</span>
        </div>
        <div className="hidden sm:block text-white/10">•</div>
        <div className="flex items-center gap-2 text-[#A1A1A1]">
          <span>SERVING INDIA & GLOBALLY</span>
        </div>
      </div>
    </motion.div>
  );
}
