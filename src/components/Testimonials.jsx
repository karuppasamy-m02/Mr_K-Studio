'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  X, 
  ArrowRight,
  Pause,
  Play,
  Layers
} from 'lucide-react';
import { testimonialsData, reviewsSummary } from '../data/testimonials';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function Testimonials() {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Split reviews into two streams for parallel auto-scrolling
  const midpoint = Math.ceil(testimonialsData.length / 2);
  const rowOne = testimonialsData.slice(0, midpoint);
  const rowTwo = testimonialsData.slice(midpoint);

  const handleDiscuss = (clientName, company) => {
    const text = `Hello MR K! I was impressed by the client review from *${clientName}* (${company}) on your website. I would like to explore working with your team.`;
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  const renderReviewCard = (review, uniqueKey) => (
    <article
      key={uniqueKey}
      onClick={() => setSelectedReview(review)}
      className="w-[340px] sm:w-[400px] shrink-0 bg-[#0E0E0E] border border-white/[0.08] hover:border-brand-yellow/50 p-6 rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)] group select-none text-left"
    >
      <div>
        {/* Top Header: Rating, Service & Verified Tag */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-1 text-brand-yellow">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-brand-yellow" />
            ))}
            <span className="text-xs font-mono font-bold text-brand-warmWhite ml-1.5">5.0</span>
          </div>

          <span className="text-[10px] font-mono uppercase tracking-wider text-brand-yellow px-2 py-0.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20">
            {review.service}
          </span>
        </div>

        {/* Review Quote Snippet */}
        <blockquote className="text-xs sm:text-sm text-brand-warmWhite leading-relaxed font-normal line-clamp-4 mb-6 group-hover:text-white transition-colors">
          "{review.reviewText}"
        </blockquote>
      </div>

      {/* Author & Company Credentials */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 flex items-center justify-center font-display font-bold text-brand-yellow text-xs shrink-0">
            {review.clientName.charAt(0)}
          </div>
          <div>
            <h4 className="text-xs font-display font-bold text-brand-warmWhite group-hover:text-brand-yellow transition-colors flex items-center gap-1.5">
              <span>{review.clientName}</span>
              <CheckCircle className="w-3 h-3 text-brand-yellow shrink-0" />
            </h4>
            <p className="text-[10px] text-brand-grey truncate max-w-[190px]">
              {review.role} · <span className="text-brand-warmWhite/80">{review.company}</span>
            </p>
          </div>
        </div>

        <span className="text-[9px] uppercase font-mono tracking-wider text-brand-grey shrink-0">
          {review.location.split(',')[0]}
        </span>
      </div>
    </article>
  );

  return (
    <section id="reviews" className="relative py-28 bg-brand-deepBlack border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-yellow/[0.035] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-[0.2em] font-display">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Client Impact</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
              WHAT OUR CLIENTS SAY
            </h2>
            
            <p className="text-sm sm:text-base text-brand-grey font-normal leading-relaxed">
              Real testimonials from founders, managing directors, and business owners across Tiruchirappalli and Tamil Nadu who grow with MR K.
            </p>
          </div>

          {/* Aggregate Rating Badge & Controls */}
          <div className="flex flex-wrap items-center gap-4 self-start md:self-end">
            <div className="glass-panel px-4 py-2.5 rounded-2xl border border-white/10 flex items-center gap-3">
              <div className="flex text-brand-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                ))}
              </div>
              <div className="text-left border-l border-white/10 pl-3">
                <span className="text-xs font-display font-bold text-brand-warmWhite block">
                  5.0 ★ Rating
                </span>
                <span className="text-[10px] text-brand-grey font-mono uppercase tracking-wider block">
                  {reviewsSummary.verifiedCount} Verified Partners
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-3 rounded-2xl glass-panel border border-white/10 hover:border-brand-yellow/40 text-brand-grey hover:text-brand-yellow transition-all"
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>

      {/* Auto-Scrolling Stream Container */}
      <div className={`relative space-y-5 select-none ${isPaused ? '[&_*]:[animation-play-state:paused]' : ''}`}>
        
        {/* Left & Right Smooth Gradient Vignette Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-brand-deepBlack to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-brand-deepBlack to-transparent z-20 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="overflow-hidden">
          <div className="animate-marquee-smooth flex items-center gap-5">
            {/* Track 1 */}
            <div className="flex items-center gap-5 shrink-0">
              {rowOne.map((rev) => renderReviewCard(rev, `r1-t1-${rev.id}`))}
            </div>
            {/* Track 2 (Duplicate for 100% seamless infinite loop) */}
            <div className="flex items-center gap-5 shrink-0">
              {rowOne.map((rev) => renderReviewCard(rev, `r1-t2-${rev.id}`))}
            </div>
          </div>
        </div>

        {/* Row 2: Scrolling Right (Reverse Track) */}
        <div className="overflow-hidden">
          <div className="animate-marquee-reverse flex items-center gap-5">
            {/* Track 1 */}
            <div className="flex items-center gap-5 shrink-0">
              {rowTwo.map((rev) => renderReviewCard(rev, `r2-t1-${rev.id}`))}
            </div>
            {/* Track 2 (Duplicate for 100% seamless infinite loop) */}
            <div className="flex items-center gap-5 shrink-0">
              {rowTwo.map((rev) => renderReviewCard(rev, `r2-t2-${rev.id}`))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Sub-info Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <p className="text-[11px] font-mono tracking-wider uppercase text-brand-grey flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
          <span>Hover over any review card to pause and inspect authentic client testimonials</span>
        </p>
      </div>

      {/* Expanded Modal Review Preview */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-xl w-full bg-[#0E0E0E] rounded-3xl p-7 sm:p-9 border border-brand-yellow/40 shadow-2xl space-y-6 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-brand-charcoal text-brand-grey hover:text-brand-warmWhite transition-colors"
                aria-label="Close review"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-between pr-8">
                <div className="flex items-center gap-1.5 text-brand-yellow">
                  {[...Array(selectedReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                  ))}
                  <span className="text-xs font-mono font-bold text-brand-warmWhite ml-1.5">5.0 Star Rating</span>
                </div>
                
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-yellow px-2.5 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30">
                  {selectedReview.service}
                </span>
              </div>

              {/* Full Review Text */}
              <blockquote className="text-base sm:text-lg font-display text-brand-warmWhite leading-relaxed border-l-2 border-brand-yellow pl-4 italic">
                "{selectedReview.reviewText}"
              </blockquote>

              {/* Author & Verification Card */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-display font-bold text-brand-warmWhite flex items-center gap-1.5">
                    <span>{selectedReview.clientName}</span>
                    <CheckCircle className="w-4 h-4 text-brand-yellow" />
                  </h4>
                  <p className="text-xs text-brand-grey">
                    {selectedReview.role} · <strong className="text-brand-warmWhite">{selectedReview.company}</strong>
                  </p>
                  <p className="text-[10px] text-brand-yellow/90 mt-0.5">
                    {selectedReview.location} · {selectedReview.date}
                  </p>
                </div>

                <button
                  onClick={() => handleDiscuss(selectedReview.clientName, selectedReview.company)}
                  className="px-4 py-2 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F2CA2C] transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
