import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, AlertCircle, HelpCircle, Layers, Globe } from 'lucide-react';
import { monthlyPackages, webPackages, pricingTerms } from '../data/packages';
import { buildWhatsAppUrl, formatPackageMessage } from '../utils/whatsapp';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('monthly'); // 'monthly' | 'website'

  const handleSelectPackage = (name, price) => {
    const text = formatPackageMessage(name, price);
    const url = buildWhatsAppUrl(text);
    window.open(url, '_blank');
  };

  return (
    <section id="packages" className="relative py-28 bg-brand-secondaryBlack border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            PRICING & GROWTH PACKAGES
          </h2>
          <p className="text-base text-brand-grey max-w-2xl mx-auto leading-relaxed">
            Predictable, honest, and high-ROI investment plans in INR (₹). Built for serious businesses ready to expand.
          </p>

          {/* Tab Selector */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-full glass-panel border border-white/10 bg-brand-deepBlack/80">
              <button
                onClick={() => setActiveTab('monthly')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'monthly'
                    ? 'bg-brand-yellow text-brand-deepBlack shadow-[0_0_15px_rgba(255,217,67,0.3)]'
                    : 'text-brand-grey hover:text-brand-warmWhite'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Monthly Growth Retainers</span>
              </button>
              <button
                onClick={() => setActiveTab('website')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'website'
                    ? 'bg-brand-yellow text-brand-deepBlack shadow-[0_0_15px_rgba(255,217,67,0.3)]'
                    : 'text-brand-grey hover:text-brand-warmWhite'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Website Development</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Monthly Social & Growth Packages */}
        {activeTab === 'monthly' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {monthlyPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.recommended
                    ? 'bg-gradient-to-b from-brand-charcoal via-brand-secondaryBlack to-brand-deepBlack border-2 border-brand-yellow shadow-[0_0_35px_rgba(255,217,67,0.2)] md:-translate-y-2'
                    : 'glass-panel border border-white/10 hover:border-brand-yellow/40'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-yellow text-brand-deepBlack text-[11px] font-display font-black tracking-widest uppercase shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="font-display font-black text-xl text-brand-warmWhite uppercase tracking-wide mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-brand-grey leading-relaxed min-h-[36px]">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-display font-black text-brand-warmWhite">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-brand-yellow font-semibold tracking-wider uppercase">
                        {pkg.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] uppercase tracking-wider text-brand-grey font-bold font-display">
                      Included Deliverables:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-brand-warmWhite/90">
                          <Check className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Conditions Mini Note */}
                  <p className="text-[10px] text-brand-grey/80 leading-relaxed italic mb-6">
                    * {pkg.conditions}
                  </p>

                  {/* Action CTA */}
                  <button
                    onClick={() => handleSelectPackage(pkg.name, pkg.price + pkg.period)}
                    className={`w-full py-3.5 px-6 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                      pkg.recommended
                        ? 'bg-brand-yellow text-brand-deepBlack hover:bg-brand-yellowHover shadow-[0_0_20px_rgba(255,217,67,0.35)]'
                        : 'bg-brand-charcoal text-brand-warmWhite hover:bg-brand-yellow hover:text-brand-deepBlack border border-white/10'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Website Development Packages */}
        {activeTab === 'website' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {webPackages.map((wp) => (
              <div
                key={wp.id}
                className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between border border-white/10 group"
              >
                <div>
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-lg text-brand-warmWhite group-hover:text-brand-yellow transition-colors">
                      {wp.name}
                    </h3>
                    <p className="text-xs text-brand-grey mt-1">
                      {wp.subtitle}
                    </p>
                  </div>

                  <div className="mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-display font-black text-brand-warmWhite">
                        {wp.price}
                      </span>
                      <span className="text-xs text-brand-yellow font-medium">
                        {wp.period}
                      </span>
                    </div>
                    <span className="text-[10px] text-brand-grey font-mono block mt-1">
                      Est. Timeline: {wp.turnaround}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {wp.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-brand-warmWhite/90">
                        <Check className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectPackage(wp.name, `${wp.price} ${wp.period}`)}
                  className="w-full py-3 px-4 rounded-full bg-brand-charcoal text-brand-yellow hover:bg-brand-yellow hover:text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider border border-brand-yellow/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </motion.div>
        )}

        {/* Pricing Transparency & Terms Banner */}
        <div className="mt-16 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 text-brand-yellow" />
            <h4 className="font-display font-bold text-sm text-brand-warmWhite uppercase tracking-wider">
              Transparent Business Conditions & Scope
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {pricingTerms.map((term, tIdx) => (
              <p key={tIdx} className="text-xs text-brand-grey leading-relaxed flex items-start gap-2">
                <span className="text-brand-yellow font-bold mt-0.5">•</span>
                <span>{term}</span>
              </p>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-grey">
            <span>Need a custom quotation tailored to your enterprise scope?</span>
            <a
              href="#contact"
              className="text-brand-yellow font-display font-bold hover:underline flex items-center gap-1"
            >
              <span>Request Custom Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
