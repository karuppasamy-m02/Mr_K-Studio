'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Move3D, Sparkles } from 'lucide-react';
import GoldRibbonSculpture from './GoldRibbonSculpture';

export default function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full flex flex-col items-center justify-center select-none"
    >
      {/* 3D Sculpture Showcase Plinth Container */}
      <div className="relative w-full flex items-center justify-center">
        
        {/* Fine Architectural Corner Hairlines in Gold */}
        <div className="absolute top-2 left-2 w-4 h-[1px] bg-[#FFD700]/60 pointer-events-none" />
        <div className="absolute top-2 left-2 h-4 w-[1px] bg-[#FFD700]/60 pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-[1px] bg-[#D4AF37]/60 pointer-events-none" />
        <div className="absolute top-2 right-2 h-4 w-[1px] bg-[#D4AF37]/60 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-4 h-[1px] bg-[#D4AF37]/60 pointer-events-none" />
        <div className="absolute bottom-2 left-2 h-4 w-[1px] bg-[#D4AF37]/60 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-4 h-[1px] bg-[#FFD700]/60 pointer-events-none" />
        <div className="absolute bottom-2 right-2 h-4 w-[1px] bg-[#FFD700]/60 pointer-events-none" />

        {/* Floating Top Architectural Pill */}
        <div className="absolute top-4 left-6 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010]/80 border border-[#D4AF37]/25 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#E8D6A3] z-20 pointer-events-none">
          <Sparkles className="w-3 h-3 text-[#FFD700]" />
          <span>3D BRAND SCULPTURE</span>
        </div>

        {/* Real-Time Interactive 3D Gold Ribbon Canvas */}
        <GoldRibbonSculpture />

        {/* Floating Bottom Interaction Hint */}
        <div className="absolute bottom-4 right-6 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010]/80 border border-white/10 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#A1A1A1] z-20 pointer-events-none">
          <Move3D className="w-3.5 h-3.5 text-[#FFD700]" />
          <span>DRAG & MOVE TO EXPLORE</span>
        </div>

      </div>
    </motion.div>
  );
}
