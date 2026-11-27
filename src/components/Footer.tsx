import React from 'react';
import Link from 'next/link';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Github, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '@/data/config';

export default function Footer() {
  const servicePages = [
    { name: "Digital Marketing in Trichy", href: "/digital-marketing-agency-trichy" },
    { name: "Branding Agency in Trichy", href: "/branding-agency-trichy" },
    { name: "Website Development Trichy", href: "/website-development-trichy" },
    { name: "Social Media Marketing Trichy", href: "/social-media-marketing-trichy" },
    { name: "Local SEO Services Trichy", href: "/seo-services-trichy" },
    { name: "Logo Design Studio Trichy", href: "/logo-design-trichy" },
    { name: "Video Production & Reels", href: "/video-editing-services-trichy" },
  ];

  const areaPages = [
    { name: "Thillai Nagar", href: "/digital-marketing-thillai-nagar" },
    { name: "Srirangam", href: "/digital-marketing-srirangam" },
    { name: "Thanjavur", href: "/digital-marketing-thanjavur" },
    { name: "Karur", href: "/digital-marketing-karur" },
    { name: "Madurai", href: "/digital-marketing-madurai" },
    { name: "Coimbatore", href: "/digital-marketing-coimbatore" },
    { name: "Chennai", href: "/digital-marketing-chennai" },
  ];

  const quickLinks = [
    { name: "About Karuppasamy M (Mr K)", href: "/about/karuppasamy-m" },
    { name: "Client Portfolio", href: "/#work" },
    { name: "Verified Client Reviews", href: "/#reviews" },
    { name: "Growth Packages & Pricing", href: "/#packages" },
    { name: "All Links & Profiles", href: "/links" },
    { name: "Blog & SEO Guides", href: "/blog" },
    { name: "Submit a Review", href: "/reviews/submit" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden text-brand-grey text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/[0.08]">
          
          {/* Column 1: Identity & Complete NAP (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-yellow/80 bg-[#080808] p-0.5 shadow-md">
                <img
                  src="/logo/mrk-logo.png"
                  alt="MR K Digital Growth Agency — Founder Karuppasamy M"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-display font-black text-xl text-brand-warmWhite tracking-wider block">
                  MR K
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-brand-yellow font-bold block">
                  Digital Growth Agency
                </span>
              </div>
            </Link>

            <p className="text-xs text-brand-grey leading-relaxed max-w-sm">
              Founded and led by <strong>Karuppasamy M (Mr K)</strong> in Tiruchirappalli, Tamil Nadu. We engineer category-defining brand identities, ultra-fast Next.js websites, and performance digital marketing systems for ambitious businesses.
            </p>

            {/* Official NAP Block */}
            <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs">
              <p className="flex items-start gap-2 text-brand-warmWhite">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.streetAddress}, {siteConfig.contact.address.addressLocality}, {siteConfig.contact.address.addressRegion} - {siteConfig.contact.address.postalCode}, India
                </span>
              </p>
              <p className="flex items-center gap-2 text-brand-warmWhite">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-brand-yellow transition-colors font-medium">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-brand-warmWhite">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-yellow transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-2 pt-3">
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-brand-yellow text-brand-warmWhite hover:text-brand-yellow transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-brand-yellow text-brand-warmWhite hover:text-brand-yellow transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-brand-yellow text-brand-warmWhite hover:text-brand-yellow transition-all" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-brand-yellow text-brand-warmWhite hover:text-brand-yellow transition-all" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Dedicated Local Services (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-warmWhite">
              Services in Trichy
            </h4>
            <ul className="space-y-2">
              {servicePages.map((page) => (
                <li key={page.name}>
                  <Link href={page.href} className="hover:text-brand-yellow transition-colors flex items-center gap-1.5">
                    <span className="text-brand-yellow/60">/</span>
                    <span>{page.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional Area Hubs (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-warmWhite">
              Area Hubs
            </h4>
            <ul className="space-y-2">
              {areaPages.map((area) => (
                <li key={area.name}>
                  <Link href={area.href} className="hover:text-brand-yellow transition-colors flex items-center gap-1.5">
                    <span className="text-brand-yellow/60">/</span>
                    <span>{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Legal (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-warmWhite">
              Authority & Resources
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-yellow transition-colors flex items-center justify-between">
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Geographic Service Coverage Strip (Local SEO) */}
        <div className="py-6 border-b border-white/[0.06] text-[11px] text-brand-grey leading-relaxed">
          <p className="font-semibold text-brand-warmWhite uppercase tracking-wider mb-1.5">
            Geographic Service Coverage:
          </p>
          <p>
            {siteConfig.serviceAreas.join(" • ")}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} MR K. All Rights Reserved. Founder & Lead Strategist: Karuppasamy M.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Accepting Ambitious Clients
            </span>
            <span className="text-white/20">|</span>
            <span>Tiruchirappalli, Tamil Nadu</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
