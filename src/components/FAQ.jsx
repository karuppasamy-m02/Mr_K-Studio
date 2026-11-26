import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqData } from '../data/faq';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappAskUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello MR K! I have a question regarding your digital growth services.")}`;

  return (
    <section className="relative py-28 bg-brand-secondaryBlack border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm text-brand-grey leading-relaxed">
            Clear, straightforward answers about how we partner with ambitious companies.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-brand-warmWhite pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-brand-charcoal text-brand-yellow shrink-0 transition-transform duration-300 ${
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
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-grey leading-relaxed border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-brand-deepBlack border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-display font-bold text-brand-warmWhite">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-brand-grey">
              Reach out directly on WhatsApp for an immediate response.
            </p>
          </div>
          <a
            href={whatsappAskUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-brand-charcoal text-brand-yellow border border-brand-yellow/30 hover:bg-brand-yellow hover:text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
