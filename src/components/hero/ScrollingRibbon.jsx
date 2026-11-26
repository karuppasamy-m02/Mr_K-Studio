import React from 'react';

export default function ScrollingRibbon() {
  const ribbonItems = [
    { text: "BRAND STRATEGY", highlight: true },
    { text: "DIGITAL EXPERIENCE", highlight: false },
    { text: "CREATIVE DIRECTION", highlight: true },
    { text: "SOCIAL GROWTH", highlight: false },
    { text: "WEB DEVELOPMENT", highlight: true },
  ];

  const renderTrack = () => (
    <div className="flex items-center shrink-0">
      {ribbonItems.map((item, idx) => (
        <div key={idx} className="flex items-center shrink-0">
          <span
            className={`font-display text-sm sm:text-base md:text-lg font-bold tracking-[0.22em] uppercase px-4 sm:px-6 transition-colors ${
              item.highlight ? 'text-brand-yellow' : 'text-brand-warmWhite'
            }`}
          >
            {item.text}
          </span>
          <span className="text-xs text-white/20 select-none">✳</span>
        </div>
      ))}
    </div>
  );

  return (
    <aside
      aria-label="Core Capabilities Marquee"
      className="w-full border-y border-white/[0.08] bg-[#0A0A0A] py-3.5 sm:py-4 overflow-hidden relative select-none"
    >
      {/* Left/Right Subtle Vignette Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-brand-deepBlack to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-brand-deepBlack to-transparent z-10 pointer-events-none" />

      {/* Dual Duplicate Tracks for Pure 100% Seamless Loop */}
      <div className="animate-marquee-smooth flex items-center">
        {renderTrack()}
        {renderTrack()}
      </div>
    </aside>
  );
}
