'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { faqData } from '@/data/faq';
import { siteConfig } from '@/data/config';
import { getFaqJsonLd } from '@/data/seo-schema';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'About & Founder', 'Services', 'Pricing', 'Technical SEO'];

  const filteredFaqs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(f => f.category === activeCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = getFaqJsonLd(faqData);

  return (
    <section className="relative py-28 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Linked FAQPage Schema for Search Results Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-mono uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Answered Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
            Direct, transparent answers regarding our agency, pricing, founder Karuppasamy M, and project execution.
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-yellow text-brand-deepBlack font-bold'
                    : 'bg-[#141414] text-brand-grey hover:text-brand-warmWhite border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#0E0E0E] rounded-xl border border-white/[0.08] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-brand-warmWhite pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-brand-charcoal text-brand-yellow shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-yellow text-brand-deepBlack' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-grey leading-relaxed border-t border-white/[0.04]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#0E0E0E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-display font-bold text-brand-warmWhite">
              Have a specific business inquiry not listed here?
            </h4>
            <p className="text-xs text-brand-grey">
              Speak directly with Karuppasamy M (Mr K) on WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent("Hello Karuppasamy M! I have a question regarding MR K growth services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-none bg-brand-charcoal text-brand-yellow border border-brand-yellow/30 hover:bg-brand-yellow hover:text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
