import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'services', 'work', 'packages', 'reviews', 'trichy-local', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const whatsappQuickUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello MR K! I would like to discuss a digital branding & growth project for my business.")}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/[0.08] py-4'
          : 'bg-[#080808] border-b border-white/[0.06] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="MR K Studio Home"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/[0.15] group-hover:border-brand-yellow transition-colors bg-[#080808] flex items-center justify-center p-0.5">
              <img
                src="/logo/mrk-logo.png"
                alt="MR K Logo"
                className="w-full h-full object-cover rounded-full"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-wider text-brand-warmWhite group-hover:text-brand-yellow transition-colors leading-none">
                MR K
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-brand-grey font-medium mt-1">
                Studio
              </span>
            </div>
          </a>

          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs uppercase font-display tracking-[0.18em] font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
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
                </a>
              );
            })}
          </nav>

          {/* Right Action / Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappQuickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none bg-transparent text-brand-grey hover:text-brand-yellow border border-white/[0.1] hover:border-brand-yellow/60 transition-all"
              aria-label="Direct WhatsApp Message"
              title="Chat on WhatsApp (+91 8270374293)"
            >
              <MessageCircle className="w-4 h-4 text-brand-yellow" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 rounded-none bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-[0.14em] hover:bg-[#F2CA2C] active:scale-[0.98] transition-all flex items-center gap-2 group"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={whatsappQuickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-brand-yellow border border-white/[0.1]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-warmWhite border border-white/[0.1] hover:border-brand-yellow focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-yellow" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[65px] bg-[#080808]/98 z-40 transition-all duration-300 md:hidden flex flex-col justify-between px-6 py-8 border-t border-white/[0.08] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand-yellow font-bold pb-2 border-b border-white/[0.08]">
            Index
          </p>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-display tracking-wider uppercase py-2 flex items-center justify-between border-b border-white/[0.04] ${
                  isActive ? 'text-brand-yellow font-bold' : 'text-brand-grey hover:text-brand-warmWhite'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs text-brand-grey/50">→</span>
              </a>
            );
          })}
        </div>

        <div className="pt-6 border-t border-white/[0.08] space-y-3">
          <div className="text-[11px] text-brand-grey space-y-0.5">
            <p className="text-brand-warmWhite font-bold">MR K Studio</p>
            <p>Tiruchirappalli, Tamil Nadu, India</p>
            <p className="text-brand-yellow">+91 8270374293</p>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full py-3.5 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
