'use client';

import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Volume2, VolumeX, Pause, Play, Sparkles, TrendingUp, Award, Star } from 'lucide-react';
import HeroHeadline from './hero/HeroHeadline';
import HeroActions from './hero/HeroActions';
import ScrollingRibbon from './hero/ScrollingRibbon';
import HeroTrustStrip from './hero/HeroTrustStrip';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 bg-[#080808] text-white overflow-hidden"
    >
      {/* 1. Cinematic Full-Bleed Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 select-none">
        <video
          ref={videoRef}
          src="/videos/hero-sculpture.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12] saturate-[1.1] scale-105"
        />

        {/* Sophisticated Luxury Editorial Gradients for Razor-Sharp Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/90 via-[#080808]/50 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/65 to-[#080808]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#080808_92%)]" />
        <div className="absolute inset-0 bg-subtle-grid opacity-25" />
      </div>

      {/* 2. Main Hero Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-8 lg:py-12">
          
          {/* Left Column: Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left z-20">
            <HeroHeadline />
            <HeroActions />
          </div>

          {/* Right Column: Editorial Agency Highlights & Video Live Indicator */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center relative z-20 w-full space-y-4">
            
            {/* Glassmorphism Luxury Feature Card */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md p-6 sm:p-7 rounded-2xl bg-[#101010]/80 border border-[#D4AF37]/25 backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.08)] relative overflow-hidden group"
            >
              {/* Gold Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-[1px] bg-[#FFD700]" />
              <div className="absolute top-2 left-2 h-3 w-[1px] bg-[#FFD700]" />
              <div className="absolute top-2 right-2 w-3 h-[1px] bg-[#D4AF37]" />
              <div className="absolute top-2 right-2 h-3 w-[1px] bg-[#D4AF37]" />
              <div className="absolute bottom-2 left-2 w-3 h-[1px] bg-[#D4AF37]" />
              <div className="absolute bottom-2 left-2 h-3 w-[1px] bg-[#D4AF37]" />
              <div className="absolute bottom-2 right-2 w-3 h-[1px] bg-[#FFD700]" />
              <div className="absolute bottom-2 right-2 h-3 w-[1px] bg-[#FFD700]" />

              {/* Status Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-ping" />
                  <span className="text-[10px] font-mono tracking-widest text-[#E8D6A3] uppercase">
                    MR K STUDIO · TRICHY
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#FFD700]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-white">5.0</span>
                  <span className="text-[10px] text-[#A1A1A1]">(Top Rated)</span>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2 text-[#FFD700] mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xl sm:text-2xl font-display font-black text-white">100+</span>
                  </div>
                  <p className="text-[11px] text-[#A1A1A1] font-sans">Brands Transformed</p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-xl sm:text-2xl font-display font-black text-white">₹50Cr+</span>
                  </div>
                  <p className="text-[11px] text-[#A1A1A1] font-sans">Client Revenue Impact</p>
                </div>
              </div>

              {/* Founder Tagline */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#A1A1A1]">
                <span className="flex items-center gap-1.5 text-white/90">
                  <Sparkles className="w-3 h-3 text-[#FFD700]" />
                  Founder-Led Strategy
                </span>
                <span className="font-mono text-[10px] text-[#FFD700]">Karuppasamy M</span>
              </div>
            </motion.div>

            {/* Video Controls Pill */}
            <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#101010]/80 border border-white/[0.1] backdrop-blur-md text-[11px] text-[#A1A1A1] shadow-lg">
              <span className="text-[10px] font-mono tracking-wider text-[#A1A1A1]">BACKGROUND MOTION</span>
              <div className="w-[1px] h-3 bg-white/20" />
              <button
                type="button"
                onClick={togglePlay}
                className="hover:text-[#FFD700] transition-colors p-1"
                aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="hover:text-[#FFD700] transition-colors p-1"
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Advanced Animated Scrolling Ribbon */}
      <div className="relative z-10 border-t border-[#D4AF37]/25">
        <ScrollingRibbon />
      </div>

      {/* 4. Lower Minimal Trust Strip */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <HeroTrustStrip />
      </div>
    </section>
  );
}
