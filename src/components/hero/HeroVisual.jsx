import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-md lg:max-w-none flex justify-center lg:justify-end select-none"
    >
      {/* Studio Display Plinth / Showcase Frame */}
      <div className="relative w-full bg-[#0E0E0E] border border-white/[0.08] p-7 sm:p-10 shadow-2xl transition-all duration-500 hover:border-brand-yellow/30 group">
        
        {/* Architectural Fine Corner Hairlines */}
        <div className="absolute top-0 left-0 w-3 h-[1px] bg-brand-yellow" />
        <div className="absolute top-0 left-0 h-3 w-[1px] bg-brand-yellow" />
        <div className="absolute top-0 right-0 w-3 h-[1px] bg-white/20" />
        <div className="absolute top-0 right-0 h-3 w-[1px] bg-white/20" />
        <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-white/20" />
        <div className="absolute bottom-0 left-0 h-3 w-[1px] bg-white/20" />
        <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-brand-yellow" />
        <div className="absolute bottom-0 right-0 h-3 w-[1px] bg-brand-yellow" />

        {/* Top Architectural Metadata */}
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] text-[10px] font-mono tracking-wider text-brand-grey uppercase">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-brand-yellow" />
            MR K BRAND ARCHITECTURE
          </span>
          <span className="text-brand-yellow font-semibold">EST. TRICHY</span>
        </div>

        {/* Central Brand Emblem Showcase */}
        <div className="py-8 sm:py-12 flex flex-col items-center justify-center relative">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute w-56 h-56 rounded-full bg-brand-yellow/[0.045] blur-3xl pointer-events-none" />

          {/* Authentic Original MR K Logo Emblem */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden p-1.5 bg-[#080808] border-2 border-brand-yellow/60 shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            <img
              src="/logo/mrk-logo.png"
              alt="MR K Official Brand Logo"
              className="w-full h-full object-cover rounded-full"
              loading="eager"
            />
          </div>
        </div>

        {/* Bottom Architectural Caption */}
        <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-[10px] uppercase font-mono tracking-wider">
          <span className="text-brand-grey">IDENTITY NO. 01</span>
          <span className="text-brand-warmWhite font-semibold">TAMIL NADU, INDIA</span>
        </div>

      </div>
    </motion.div>
  );
}
