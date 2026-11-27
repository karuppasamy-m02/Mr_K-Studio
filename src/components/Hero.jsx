'use client';

import React from 'react';
import HeroHeadline from './hero/HeroHeadline';
import HeroActions from './hero/HeroActions';
import HeroVisual from './hero/HeroVisual';
import ScrollingRibbon from './hero/ScrollingRibbon';
import HeroTrustStrip from './hero/HeroTrustStrip';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 bg-[#080808] text-white overflow-hidden"
    >
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-subtle-grid opacity-50 pointer-events-none" />

      {/* Controlled Luxury Ambient Gold Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#FFD700]/[0.045] rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] bg-[#D4AF37]/[0.025] rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Main Two-Column Editorial Composition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full py-6 lg:py-10">
          
          {/* Left Column: Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left z-20">
            <HeroHeadline />
            <HeroActions />
          </div>

          {/* Right Column: 3D Intertwined Metallic Gold Sculpture */}
          <div className="lg:col-span-6 flex justify-center items-center relative z-10 w-full">
            <HeroVisual />
          </div>

        </div>
      </div>

      {/* Advanced Animated Scrolling Ribbon */}
      <div className="relative z-10 border-t border-[#D4AF37]/25">
        <ScrollingRibbon />
      </div>

      {/* Lower Minimal Trust Strip */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <HeroTrustStrip />
      </div>
    </section>
  );
}
