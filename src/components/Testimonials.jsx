import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { testimonialsData, reviewsSummary } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeReview = testimonialsData[currentIndex];

  return (
    <section id="reviews" className="relative py-28 bg-brand-deepBlack border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-yellow/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Authentic Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-base text-brand-grey max-w-2xl mx-auto leading-relaxed">
            Genuine experiences from business owners and company founders who partner with MR K.
          </p>
        </div>

        {/* Featured Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeReview.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="relative glass-panel rounded-3xl p-8 sm:p-12 border border-brand-yellow/30 shadow-2xl bg-gradient-to-br from-brand-secondaryBlack/90 via-brand-charcoal/80 to-brand-secondaryBlack"
          >
            {/* Top Quote Icon & Rating */}
            <div className="flex items-center justify-between mb-8">
              <div className="p-3.5 rounded-2xl bg-brand-yellow text-brand-deepBlack shadow-[0_0_20px_rgba(255,217,67,0.3)]">
                <Quote className="w-6 h-6 fill-brand-deepBlack" />
              </div>

              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-deepBlack/80 border border-brand-yellow/30">
                <div className="flex text-brand-yellow">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                  ))}
                </div>
                <span className="text-xs font-bold text-brand-warmWhite ml-1 font-display">5.0</span>
              </div>
            </div>

            {/* Review Statement */}
            <blockquote className="text-lg sm:text-2xl font-display font-medium text-brand-warmWhite leading-relaxed mb-8">
              "{activeReview.reviewText}"
            </blockquote>

            {/* Client Profile Info & Review Metadata */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-yellow/20 border-2 border-brand-yellow flex items-center justify-center font-display font-bold text-brand-yellow text-lg">
                  {activeReview.clientName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-brand-warmWhite flex items-center gap-2">
                    {activeReview.clientName}
                    <CheckCircle className="w-4 h-4 text-brand-yellow" />
                  </h4>
                  <p className="text-xs text-brand-grey font-medium">
                    {activeReview.role} • <span className="text-brand-warmWhite">{activeReview.company}</span>
                  </p>
                  <p className="text-[11px] text-brand-yellow/80 mt-0.5">
                    {activeReview.location}
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <button
                  onClick={prevReview}
                  className="p-3 rounded-full bg-brand-charcoal text-brand-warmWhite hover:text-brand-yellow border border-white/10 hover:border-brand-yellow/50 transition-colors focus:outline-none"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-brand-grey font-mono">
                  0{currentIndex + 1} / 0{testimonialsData.length}
                </span>
                <button
                  onClick={nextReview}
                  className="p-3 rounded-full bg-brand-charcoal text-brand-warmWhite hover:text-brand-yellow border border-white/10 hover:border-brand-yellow/50 transition-colors focus:outline-none"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Thumbnail Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {testimonialsData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border ${
                  currentIndex === idx
                    ? 'bg-brand-charcoal border-brand-yellow shadow-md'
                    : 'glass-panel border-white/5 opacity-60 hover:opacity-100'
                }`}
              >
                <p className="text-xs font-display font-bold text-brand-warmWhite truncate">
                  {item.clientName}
                </p>
                <p className="text-[10px] text-brand-grey truncate">
                  {item.company}
                </p>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
