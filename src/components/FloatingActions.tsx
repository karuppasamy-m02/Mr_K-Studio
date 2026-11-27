'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/config';

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMsg = encodeURIComponent("Hello Karuppasamy M (Mr K)! I visited your website and would like to get a free consultation for my business.");
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${whatsappMsg}`;

  return (
    <aside aria-label="Direct Quick Contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="p-3 rounded-full bg-[#1A1A1A]/90 text-brand-yellow border border-white/10 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-deepBlack transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Phone Call Button */}
      <a
        href={`tel:${siteConfig.contact.phone}`}
        aria-label="Direct Phone Call to MR K (+91 8270374293)"
        className="p-3.5 rounded-full bg-[#1A1A1A] text-brand-warmWhite border border-white/15 hover:border-brand-yellow hover:text-brand-yellow hover:scale-105 active:scale-95 transition-all shadow-xl group flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-yellow"
        title="Call directly"
      >
        <Phone className="w-5 h-5 text-brand-yellow group-hover:animate-pulse" />
      </a>

      {/* Floating WhatsApp Action with Pulsating Ring */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with MR K"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </aside>
  );
}
