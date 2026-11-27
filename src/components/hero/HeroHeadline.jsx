'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroHeadline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-6">
      {/* Editorial Eyebrow Tag */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#101010]/90 border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
        <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#E8D6A3]">
          DIGITAL BRANDING & GROWTH STUDIO · TRICHY, INDIA
        </span>
      </motion.div>

      {/* Main Luxury Editorial Headline */}
      <motion.h1
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] leading-[0.98] tracking-tight uppercase text-white"
      >
        <span>WE DON&apos;T JUST</span> <br />
        <span>BUILD BUSINESSES.</span> <br />
        <span className="text-[#A1A1A1]">WE BUILD </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#F0D892] to-[#D4AF37] drop-shadow-[0_2px_20px_rgba(255,215,0,0.25)]">
          BRANDS THAT MATTER.
        </span>
      </motion.h1>
    </div>
  );
}
