import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const trustStripItems = [
    { label: "10+ COMPANIES", highlight: true },
    { label: "BRANDING", highlight: false },
    { label: "DIGITAL MARKETING", highlight: false },
    { label: "WEB DEVELOPMENT", highlight: false },
    { label: "CREATIVE MEDIA", highlight: false },
  ];

  // Motion variants for restrained editorial animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 bg-brand-deepBlack text-brand-warmWhite overflow-hidden"
    >
      {/* Subtle Studio Lighting Backdrops (Controlled, Cinematic) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-yellow/[0.035] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full py-8 lg:py-12"
        >
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              <p className="font-display text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-brand-yellow">
                DIGITAL BRANDING & GROWTH STUDIO · TRICHY, INDIA
              </p>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] tracking-tight leading-[0.98] uppercase text-brand-warmWhite"
            >
              WE TURN<br />
              BUSINESSES INTO<br />
              <span className="text-brand-yellow">UNFORGETTABLE</span><br />
              BRANDS.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-brand-grey font-normal max-w-xl leading-relaxed"
            >
              We create powerful brand identities, digital experiences and marketing strategies that help ambitious businesses stand out and grow.
            </motion.p>

            {/* CTA Group & Trust Statement */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                {/* Primary CTA */}
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-none bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#F2CA2C] active:scale-[0.98] transition-all duration-200 group shadow-sm"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Secondary CTA */}
                <button
                  onClick={() => scrollTo('work')}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-none border border-white/20 text-brand-warmWhite font-display font-semibold text-xs uppercase tracking-[0.16em] hover:border-brand-yellow hover:text-brand-yellow hover:bg-white/[0.02] active:scale-[0.98] transition-all duration-200"
                >
                  EXPLORE OUR WORK
                </button>
              </div>

              {/* Subtle Trust Statement */}
              <div className="flex items-center gap-2 pt-1 text-xs text-brand-grey font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                <span>Trusted by 10+ companies across Trichy and Tamil Nadu</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Architectural Brand-Led Composition */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Studio Display Plinth / Showcase Frame */}
              <div className="relative bg-[#0E0E0E] border border-white/[0.08] p-7 sm:p-10 shadow-2xl transition-all duration-500 hover:border-brand-yellow/30 group">
                
                {/* Hairline Corner Accent Lines */}
                <div className="absolute top-0 left-0 w-3 h-[1px] bg-brand-yellow" />
                <div className="absolute top-0 left-0 h-3 w-[1px] bg-brand-yellow" />
                <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-brand-yellow" />
                <div className="absolute bottom-0 right-0 h-3 w-[1px] bg-brand-yellow" />

                {/* Top Architectural Metadata */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] text-[10px] font-mono tracking-wider text-brand-grey uppercase">
                  <span>MR K BRAND ARCHITECTURE</span>
                  <span className="text-brand-yellow font-semibold">REF: 01</span>
                </div>

                {/* Central Emblem Showcase */}
                <div className="py-8 sm:py-12 flex flex-col items-center justify-center relative">
                  
                  {/* Subtle Controlled Radial Studio Light */}
                  <div className="absolute w-56 h-56 rounded-full bg-brand-yellow/[0.04] blur-2xl pointer-events-none" />

                  {/* Original MR K Logo Emblem (Unchanged & Pristine) */}
                  <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden p-1.5 bg-[#080808] border-2 border-brand-yellow/60 shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <img
                      src="/logo/mrk-logo.png"
                      alt="MR K Official Brand Logo"
                      className="w-full h-full object-cover rounded-full select-none"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Bottom Architectural Caption */}
                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-[10px] uppercase font-mono tracking-wider">
                  <span className="text-brand-grey">IDENTITY & GROWTH</span>
                  <span className="text-brand-warmWhite font-bold">TIRUCHIRAPPALLI</span>
                </div>

              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Horizontal Trust Strip */}
      <div className="w-full border-t border-white/[0.08] bg-[#0A0A0A]/90 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs font-display tracking-[0.2em] uppercase font-semibold">
            {trustStripItems.map((item, idx) => (
              <React.Fragment key={item.label}>
                <span
                  className={
                    item.highlight
                      ? 'text-brand-yellow flex items-center gap-2'
                      : 'text-brand-grey hover:text-brand-warmWhite transition-colors'
                  }
                >
                  {item.highlight && <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />}
                  {item.label}
                </span>

                {idx < trustStripItems.length - 1 && (
                  <span className="hidden md:inline-block text-white/[0.15]">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
