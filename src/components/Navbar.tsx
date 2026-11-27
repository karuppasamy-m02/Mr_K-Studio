'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Languages } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Practice', href: '/#services' },
    { name: 'Projects', href: '/#work' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#180306]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3.5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.85)]'
        : 'bg-[#180306]/60 backdrop-blur-md border-b border-white/[0.05] py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Identity / Home Anchor */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="MR K Studio — Home"
          >
            <span className="font-display font-black text-lg sm:text-xl tracking-[0.2em] text-[#F5EBDD] group-hover:text-[#FFF0A8] transition-colors">
              MR K
            </span>
            <span className="hidden sm:inline-block text-[9px] font-mono tracking-[0.25em] text-[#A1A1A1] uppercase border-l border-white/10 pl-3">
              CREATIVE &amp; TECHNOLOGY
            </span>
          </Link>

          {/* Minimal Luxury Navigation (Left: Practice, Projects | Right: About, Contact) */}
          <nav
            className="hidden md:flex items-center space-x-10 text-xs font-mono uppercase tracking-[0.28em]"
            aria-label="Studio Navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#F5EBDD]/80 hover:text-[#FFF0A8] transition-colors py-1 relative group"
              >
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Far Right: Original MR K Brand Symbol & Quick Actions */}
          <div className="flex items-center gap-4">

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#A1A1A1] hover:text-[#FFF0A8] border border-white/10 hover:border-[#D4AF37]/40 rounded-none transition-colors"
              aria-label="Switch Language"
            >
              <Languages className="w-3 h-3 text-[#D4AF37]" />
              <span>{lang === 'en' ? 'தமிழ்' : 'EN'}</span>
            </button>

            {/* Original MR K Brand Symbol (Pristine, Uncropped & Bordered) */}
            <Link
              href="/#home"
              className="flex items-center gap-2 group"
              aria-label="MR K Brand Emblem"
              title="MR K Digital Growth Agency"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#D4AF37]/60 group-hover:border-[#FFF0A8] transition-all duration-300 bg-[#080808] p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:shadow-[0_0_25px_rgba(255,240,168,0.45)] shrink-0">
                <img
                  src="/logo/mrk-logo.png"
                  alt="Original MR K Brand Logo"
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                />
              </div>
            </Link>

            {/* Mobile Navigation Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F5EBDD] hover:text-[#FFF0A8] border border-white/10 focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#180306]/98 backdrop-blur-2xl z-40 flex flex-col justify-between px-6 py-8 border-t border-[#D4AF37]/20 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37] p-0.5 bg-[#080808] shrink-0">
                <img
                  src="/logo/mrk-logo.png"
                  alt="MR K Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-display font-black text-white text-base tracking-widest">MR K</p>
                <p className="text-[10px] font-mono text-[#D4AF37]">DIGITAL &amp; TECHNOLOGY STUDIO</p>
              </div>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold pt-2">
              Menu Navigation
            </p>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif tracking-wider uppercase py-3 flex items-center justify-between border-b border-white/[0.04] text-[#F5EBDD] hover:text-[#FFF0A8] transition-colors"
              >
                <span>{item.name}</span>
                <span className="text-xs text-[#D4AF37]">→</span>
              </Link>
            ))}

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-serif tracking-wider uppercase py-3 flex items-center justify-between border-b border-white/[0.04] text-[#A1A1A1] hover:text-[#FFF0A8] transition-colors"
            >
              <span>Insights &amp; Blog</span>
              <span className="text-xs text-[#D4AF37]">→</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-4">
            <div className="text-xs text-[#A1A1A1] space-y-1 font-mono">
              <p className="text-white font-bold tracking-wider">MR K STUDIO</p>
              <p>Founder: Karuppasamy M</p>
              <p>Trichy, Tamil Nadu, India</p>
              <p className="text-[#D4AF37]">{siteConfig.contact.phone}</p>
            </div>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-[#D4AF37] text-[#180306] font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
