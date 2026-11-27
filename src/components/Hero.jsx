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
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 bg-brand-deepBlack text-brand-warmWhite overflow-hidden"
    >
      {/* Subtle Studio Lighting Backdrops (Controlled, Cinematic) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-yellow/[0.035] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Two-Column Editorial Composition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full py-8 lg:py-12">
          
          {/* Left Column: Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <HeroHeadline />
            <HeroActions />
          </div>

          {/* Right Column: Architectural Brand Emblem */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>

        </div>
      </div>

      {/* Advanced Animated Scrolling Ribbon */}
      <ScrollingRibbon />

      {/* Lower Minimal Trust Strip */}
      <HeroTrustStrip />
    </section>
  );
}
