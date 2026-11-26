import React from 'react';

export default function HeroTrustStrip() {
  return (
    <div className="w-full bg-[#080808] border-b border-white/[0.08] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em]">
          
          {/* Left Philosophy */}
          <div className="flex items-center gap-2 text-brand-grey font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            <span className="text-brand-warmWhite font-semibold">
              "CREATIVE THINKING. DIGITAL EXECUTION."
            </span>
          </div>

          {/* Right Service Scope */}
          <div className="text-brand-grey/80 tracking-[0.22em]">
            <span className="hover:text-brand-yellow transition-colors">BRANDING</span>
            <span className="text-white/20 mx-2">/</span>
            <span className="hover:text-brand-yellow transition-colors">MARKETING</span>
            <span className="text-white/20 mx-2">/</span>
            <span className="hover:text-brand-yellow transition-colors">DEVELOPMENT</span>
            <span className="text-white/20 mx-2">/</span>
            <span className="hover:text-brand-yellow transition-colors">GROWTH</span>
          </div>

        </div>
      </div>
    </div>
  );
}
