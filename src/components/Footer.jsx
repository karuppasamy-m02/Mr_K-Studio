import React from 'react';
import { MessageCircle, MapPin, ArrowUp, Instagram, Linkedin, Facebook, Youtube, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER, DISPLAY_PHONE, BUSINESS_LOCATION } from '../utils/whatsapp';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About MR K', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'work' },
    { name: 'Pricing & Packages', id: 'packages' },
    { name: 'Client Reviews', id: 'reviews' },
    { name: 'Trichy Presence', id: 'trichy-local' },
    { name: 'Contact Agency', id: 'contact' },
  ];

  const serviceLinks = [
    'Brand Identity & Personal Branding',
    'Social Media Management',
    'Video Production & Reels',
    'Website Development',
    'Digital Marketing & Meta Ads',
    'Local SEO in Trichy',
    'AI & Business Automation',
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/' },
  ];

  return (
    <footer className="relative bg-brand-deepBlack border-t border-white/10 pt-20 pb-12 overflow-hidden text-brand-grey">
      {/* Subtle Top Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-yellow bg-brand-deepBlack flex items-center justify-center shadow-[0_0_15px_rgba(255,217,67,0.3)]">
                <img
                  src="/logo/mrk-logo.png"
                  alt="MR K Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-black text-2xl text-brand-warmWhite tracking-wider">
                  MR K
                </span>
                <span className="block text-[10px] tracking-widest uppercase text-brand-yellow font-semibold">
                  BUILD. BRAND. GROW.
                </span>
              </div>
            </div>

            <p className="text-xs text-brand-grey leading-relaxed max-w-sm">
              MR K is a premier digital growth and branding company based in Tiruchirappalli (Trichy), Tamil Nadu. We engineer timeless brand identities, modern web experiences, and high-impact digital marketing engines for ambitious companies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-brand-charcoal text-brand-warmWhite hover:text-brand-yellow hover:bg-brand-charcoal/80 border border-white/10 hover:border-brand-yellow/50 transition-all flex items-center justify-center text-xs"
                    aria-label={s.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-warmWhite">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-xs text-brand-grey hover:text-brand-yellow transition-colors font-medium flex items-center gap-1.5 focus:outline-none"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-yellow/50" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column (Col 8-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-warmWhite">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((svc, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-xs text-brand-grey hover:text-brand-yellow transition-colors font-medium text-left focus:outline-none"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Col 10-12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-warmWhite">
              Official Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] uppercase text-brand-yellow font-semibold block">WhatsApp & Call</span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-warmWhite hover:text-brand-yellow transition-colors font-bold"
                >
                  {DISPLAY_PHONE}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase text-brand-yellow font-semibold block">Headquarters</span>
                <p className="text-brand-warmWhite leading-relaxed">
                  {BUSINESS_LOCATION}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello MR K! I would like to schedule a consultation.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-[11px] font-bold hover:bg-brand-yellow hover:text-brand-deepBlack transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-grey">
          <p>© 2026 MR K. All Rights Reserved. Premium Digital Growth Agency.</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for New Projects
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[11px]">Tiruchirappalli, Tamil Nadu</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
