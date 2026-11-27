'use client';

import React, { useState, useRef, useEffect } from 'react';
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

  // Guarantee browser autoplay by forcing native muted property on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // If browser blocks autoplay, keep muted and try on first user interaction
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => { });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 bg-[#080808] text-white overflow-hidden"
    >
      {/* 1. Cinematic Full-Bleed Video Background (z-0 sits above section background) */}
      <div className="absolute inset-0 w-full h-[1000px]  pointer-events-none z-0 select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105 saturate-110 transform scale-[1.02]"
        >
          <source src="/videos/hero-sculpture.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Sophisticated Luxury Gradient: Left side shaded for crisp typography, right side transparent so gold sculpture shines */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/70 to-[#080808]/30 lg:to-transparent z-10" />

        {/* Top & Bottom Cinematic Edge Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-transparent to-[#080808] z-10" />

        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-subtle-grid opacity-20 z-10" />
      </div>

      {/* 2. Main Hero Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-8 lg:py-12">

          {/* Left Column: Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left z-20">
            <HeroHeadline />
            <HeroActions />
          </div>

          {/* Right Column: Editorial Agency Highlights & Video Live Indicator */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center relative z-20 w-full space-y-4">

            {/* Glassmorphism Luxury Feature Card */}







          </div>

        </div>
      </div>

      {/* 3. Advanced Animated Scrolling Ribbon */}
      <div className="relative z-20 border-t border-[#D4AF37]/25">
        <ScrollingRibbon />
      </div>

      {/* 4. Lower Minimal Trust Strip */}
      <div className="relative z-20 border-t border-white/[0.06]">
        <HeroTrustStrip />
      </div>
    </section >
  );
}
