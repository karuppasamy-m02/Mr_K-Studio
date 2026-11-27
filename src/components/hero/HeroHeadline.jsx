'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroHeadline() {
  const shouldReduceMotion = useReducedMotion();

  const lines = [
    { text: "WE DON'T JUST", highlight: false },
    { text: "BUILD BUSINESSES.", highlight: false },
    { text: "WE BUILD", highlight: false },
    { text: "BRANDS THAT", highlight: true },
    { text: "MATTER.", highlight: true },
  ];

  const lineVariants = {
    hidden: { y: shouldReduceMotion ? 0 : "100%", opacity: shouldReduceMotion ? 0 : 0.2 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.15 + i * 0.1,
      },
    }),
  };

  return (
    <div className="space-y-4">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
        <p className="font-display text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-brand-yellow">
          DIGITAL BRANDING STUDIO · TRICHY, INDIA
        </p>
      </motion.div>

      {/* Main Headline with Masked Line Reveals */}
      <h1 className="font-display font-black text-[clamp(2.5rem,6.2vw,5.6rem)] leading-[0.94] tracking-tight uppercase text-brand-warmWhite">
        {lines.map((line, idx) => (
          <div key={idx} className="overflow-hidden">
            <motion.div
              custom={idx}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className={line.highlight ? "text-brand-yellow" : "text-brand-warmWhite"}
            >
              {line.text}
            </motion.div>
          </div>
        ))}
      </h1>
    </div>
  );
}
