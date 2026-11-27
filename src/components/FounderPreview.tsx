import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Award, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/config';

export default function FounderPreview() {
  return (
    <section className="py-24 bg-brand-deepBlack border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0E0E0E] border border-brand-yellow/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Founder Avatar / Monogram Card */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-brand-yellow bg-brand-deepBlack p-1.5 shadow-[0_0_30px_rgba(255,217,67,0.2)] mb-4">
                <img
                  src="/logo/mrk-logo.png"
                  alt="Karuppasamy M (Mr K) — Founder & Lead Strategist"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-display font-black text-xl text-brand-warmWhite">
                Karuppasamy M
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-brand-yellow mt-0.5">
                Known as "Mr K"
              </p>
              <p className="text-[11px] text-brand-grey flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-brand-yellow" />
                <span>Tiruchirappalli, Tamil Nadu</span>
              </p>
            </div>

            {/* Right: Bio & Authority */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-brand-yellow font-bold">
                <Award className="w-4 h-4" />
                <span>MEET THE FOUNDER</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-black text-brand-warmWhite uppercase leading-tight">
                "WE DON'T MAKE NOISE. WE BUILD DIGITAL ASSETS THAT PRODUCE REVENUE."
              </h2>

              <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
                {siteConfig.founder.bio}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-warmWhite">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>Direct founder strategy on every client account</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>20+ Commercial partnerships in Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>Full-stack Web + Performance Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>Trichy local market authority & regional reach</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about/karuppasamy-m"
                  className="px-6 py-3 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F2CA2C] transition-all flex items-center gap-2"
                >
                  <span>Read Full Founder Bio & Credentials</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/links"
                  className="px-6 py-3 border border-white/20 text-brand-warmWhite font-display font-semibold text-xs uppercase tracking-wider hover:border-brand-yellow hover:text-brand-yellow transition-all"
                >
                  View All Verified Profiles
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
