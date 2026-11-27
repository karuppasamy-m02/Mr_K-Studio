import React from 'react';
import { Search, Compass, Code, TrendingUp, Sparkles } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Discovery & Market Audit",
      desc: "We analyze your regional competitors in Trichy and Tamil Nadu, audit your customer touchpoints, and uncover high-intent market gaps."
    },
    {
      num: "02",
      icon: Compass,
      title: "Strategic Brand Architecture",
      desc: "Crafting memorable identity systems, positioning manifestos, and messaging guidelines that immediately set you apart from generic operators."
    },
    {
      num: "03",
      icon: Code,
      title: "High-Performance Engineering",
      desc: "Developing bespoke Next.js websites, mobile-first sales funnels, and cinematic video assets optimized for sub-second load times."
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Local Dominance & Scaling",
      desc: "Deploying Google Business Profile ranking, hyper-targeted Meta/Google ad campaigns, and automated WhatsApp inquiry funnels."
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Execution Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            THE 4-STAGE GROWTH SPRINT
          </h2>
          <p className="text-xs sm:text-sm text-brand-grey max-w-xl mx-auto">
            How Karuppasamy M and the MR K team consistently transform ambitious businesses into category leaders.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#0E0E0E] border border-white/[0.08] hover:border-brand-yellow/50 p-7 rounded-2xl relative transition-all duration-300 group text-left"
              >
                <span className="font-display font-black text-3xl text-white/10 group-hover:text-brand-yellow/30 transition-colors block mb-4">
                  {step.num}
                </span>
                
                <div className="w-10 h-10 rounded-xl bg-brand-charcoal text-brand-yellow border border-brand-yellow/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-display font-bold text-base text-brand-warmWhite mb-2 group-hover:text-brand-yellow transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-xs text-brand-grey leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
