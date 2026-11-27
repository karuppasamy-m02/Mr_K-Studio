'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { Star, MessageSquare, CheckCircle2, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

export default function ReviewSubmitPage() {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !review) return;

    // Direct WhatsApp prefilled verification to founder Karuppasamy M
    const message = `*NEW CLIENT VERIFIED REVIEW*\n\n*Name:* ${name}\n*Company:* ${company || 'Independent Client'}\n*Rating:* ${'⭐'.repeat(rating)}\n\n*Review:*\n"${review}"\n\nSubmitted via MR K Client Review Portal`;
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-brand-deepBlack text-brand-warmWhite min-h-screen text-left">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-grey hover:text-brand-yellow transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-mono font-bold">
            <Star className="w-3.5 h-3.5" />
            <span>CLIENT REPUTATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight">
            Share Your Experience With MR K
          </h1>
          <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
            Your honest feedback directly supports Karuppasamy M and helps prospective businesses in Tamil Nadu choose the right growth partner.
          </p>
        </header>

        {submitted ? (
          <div className="bg-[#0E0E0E] border border-brand-yellow/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-brand-yellow/10 border border-brand-yellow/40 flex items-center justify-center mx-auto text-brand-yellow">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold text-brand-warmWhite">
                Thank You for Your Feedback!
              </h2>
              <p className="text-xs sm:text-sm text-brand-grey max-w-md mx-auto">
                Your review has been forwarded to Karuppasamy M. If you have 30 seconds, please also post this directly to our Google Business Profile:
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.socials.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F2CA2C] transition-all flex items-center gap-2"
              >
                <span>Post on Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/"
                className="px-6 py-3 border border-white/20 text-brand-warmWhite font-display font-bold text-xs uppercase tracking-wider hover:border-brand-yellow transition-all"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6">
            
            {/* Rating Stars */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-brand-yellow font-bold block">
                Overall Experience Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-110 transition-transform focus:outline-none"
                    aria-label={`${star} Star Rating`}
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating
                          ? 'text-brand-yellow fill-brand-yellow'
                          : 'text-brand-charcoal'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-mono text-brand-grey ml-2">
                  ({rating} out of 5 Stars)
                </span>
              </div>
            </div>

            {/* Client Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-brand-grey block">
                Your Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Anand R."
                className="w-full px-4 py-3 bg-brand-charcoal border border-white/10 rounded-xl text-xs sm:text-sm text-brand-warmWhite focus:border-brand-yellow focus:outline-none"
              />
            </div>

            {/* Company / Brand */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-xs font-mono uppercase tracking-wider text-brand-grey block">
                Company Name / City
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Apex Health Clinic, Thillai Nagar"
                className="w-full px-4 py-3 bg-brand-charcoal border border-white/10 rounded-xl text-xs sm:text-sm text-brand-warmWhite focus:border-brand-yellow focus:outline-none"
              />
            </div>

            {/* Review Text */}
            <div className="space-y-1.5">
              <label htmlFor="review" className="text-xs font-mono uppercase tracking-wider text-brand-grey block">
                Your Review & Feedback *
              </label>
              <textarea
                id="review"
                required
                rows={5}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="How did MR K and Karuppasamy M help your brand grow? What results did you achieve?"
                className="w-full px-4 py-3 bg-brand-charcoal border border-white/10 rounded-xl text-xs sm:text-sm text-brand-warmWhite focus:border-brand-yellow focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F2CA2C] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Submit & Forward Verified Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] font-mono text-brand-grey text-center">
              Your feedback is verified directly via WhatsApp before publication.
            </p>
          </form>
        )}

      </div>
    </div>
  );
}
