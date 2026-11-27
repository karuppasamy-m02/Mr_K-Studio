'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const defaultMessage = encodeURIComponent(
    "Hello MR K! I visited your website and would like to discuss a digital branding & marketing project for my business."
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Direct WhatsApp Consultation with MR K"
      >
        {/* Pulsating ambient ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:opacity-100" />
        
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />

        {/* Desktop floating pill tooltip */}
        <div
          className={`absolute left-16 px-3.5 py-1.5 rounded-lg bg-brand-deepBlack/95 text-brand-warmWhite text-xs font-medium border border-brand-cardBorder whitespace-nowrap shadow-xl pointer-events-none transition-all duration-200 hidden md:block ${
            hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          <span className="text-brand-yellow font-semibold">Direct WhatsApp:</span> +91 8270374293
        </div>
      </a>
    </aside>
  );
}
