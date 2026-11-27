'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

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
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6 pt-2"
    >
      {/* Supporting Copy */}
      <p className="text-base sm:text-lg text-brand-grey font-normal max-w-xl leading-relaxed">
        We transform ambitious businesses into recognisable brands through strategic creativity, digital experiences and modern marketing.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
        {/* Primary CTA */}
        <button
          onClick={() => scrollTo('contact')}
          className="relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#F2CA2C] active:scale-[0.98] transition-all duration-200 group shadow-sm"
        >
          <span>START YOUR PROJECT</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Secondary CTA */}
        <button
          onClick={() => scrollTo('work')}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-brand-warmWhite font-display font-semibold text-xs uppercase tracking-[0.16em] hover:border-brand-yellow hover:text-brand-yellow hover:bg-white/[0.02] active:scale-[0.98] transition-all duration-200 group"
        >
          <span>VIEW OUR WORK</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Sub-CTA Trust Statement */}
      <div className="pt-1">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-brand-grey font-medium flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
          <span>10+ COMPANIES SERVED · TRICHY BASED · DIGITAL FIRST</span>
        </p>
      </div>
    </motion.div>
  );
}
