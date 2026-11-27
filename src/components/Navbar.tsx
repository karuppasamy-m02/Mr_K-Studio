'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MessageCircle, Menu, X, ArrowRight, Languages } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: 'Founder', href: '/about/karuppasamy-m' },
    { name: t.nav.services, href: '/#services' },
    { name: t.nav.work, href: '/#work' },
    { name: t.nav.pricing, href: '/#packages' },
    { name: t.nav.reviews, href: '/#reviews' },
    { name: t.nav.blog, href: '/blog' },
    { name: 'Links', href: '/links' },
    { name: t.nav.contact, href: '/#contact' },
  ];

  const whatsappQuickUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent("Hello Karuppasamy M (Mr K)! I would like to get a free consultation for my business.")}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-[#080808] border-b border-white/[0.06] py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="MR K Studio Home"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-brand-yellow transition-colors bg-[#080808] flex items-center justify-center p-0.5 shadow-md">
              <img
                src="/logo/mrk-logo.png"
                alt="MR K Digital Growth Agency — Founder Karuppasamy M"
                className="w-full h-full object-cover rounded-full"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-wider text-brand-warmWhite group-hover:text-brand-yellow transition-colors leading-none">
                MR K
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase text-brand-grey font-medium mt-1">
                Agency · Trichy
              </span>
            </div>
          </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase font-display tracking-[0.16em] font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-brand-yellow font-bold'
                      : 'text-brand-grey hover:text-brand-yellow'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-brand-yellow" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle (EN / தமிழ்) */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-none border border-white/10 hover:border-brand-yellow/50 text-xs font-mono uppercase tracking-wider text-brand-grey hover:text-brand-yellow transition-all"
              aria-label="Switch Language (English / Tamil)"
              title="Toggle English / தமிழ்"
            >
              <Languages className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{lang === 'en' ? 'தமிழ்' : 'EN'}</span>
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href={whatsappQuickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none text-brand-grey hover:text-brand-yellow border border-white/10 hover:border-brand-yellow/50 transition-all"
              aria-label="Direct WhatsApp Message"
              title="Chat on WhatsApp (+91 8270374293)"
            >
              <MessageCircle className="w-4 h-4 text-brand-yellow" />
            </a>

            {/* Consultation CTA */}
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-none bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-[0.14em] hover:bg-[#F2CA2C] active:scale-[0.98] transition-all flex items-center gap-2 group shadow-sm"
            >
              <span>{t.cta.getConsultation}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="px-2.5 py-1.5 border border-white/10 text-xs font-mono text-brand-yellow"
              aria-label="Switch Language"
            >
              {lang === 'en' ? 'தமிழ்' : 'EN'}
            </button>

            <a
              href={whatsappQuickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-brand-yellow border border-white/10"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-warmWhite border border-white/10 hover:border-brand-yellow focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-yellow" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#080808]/98 z-40 flex flex-col justify-between px-6 py-8 border-t border-white/[0.08] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-brand-yellow font-bold pb-2 border-b border-white/[0.08]">
              Navigation
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-display tracking-wider uppercase py-2 flex items-center justify-between border-b border-white/[0.04] text-brand-grey hover:text-brand-yellow"
              >
                <span>{link.name}</span>
                <span className="text-xs text-brand-grey/50">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-4">
            <div className="text-[11px] text-brand-grey space-y-1">
              <p className="text-brand-warmWhite font-bold">MR K Digital Growth Agency</p>
              <p>Founder: Karuppasamy M</p>
              <p>Tiruchirappalli (Trichy), Tamil Nadu, India</p>
              <p className="text-brand-yellow">{siteConfig.contact.phone}</p>
            </div>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>{t.cta.getConsultation}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
