import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Globe, 
  MessageCircle, 
  Phone, 
  Mail, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Github, 
  ExternalLink, 
  MapPin, 
  Sparkles,
  FileText
} from 'lucide-react';
import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Official Links & Profiles | Karuppasamy M (Mr K)',
  description: 'Verified link-in-bio directory for Karuppasamy M (Mr K) and MR K Digital Growth Agency. Connect across social media, GitHub, LinkedIn, and WhatsApp.',
  alternates: {
    canonical: `${siteConfig.domain}/links`,
  },
};

export default function LinksPage() {
  const links = [
    {
      title: "Official Agency Website",
      desc: "MR K Digital Growth Agency — Homepage & Services",
      url: "/",
      icon: Globe,
      highlight: true
    },
    {
      title: "Direct WhatsApp Consultation",
      desc: "Chat directly with Karuppasamy M (+91 8270374293)",
      url: `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent("Hello Karuppasamy M (Mr K)! Connecting via your Links page.")}`,
      icon: MessageCircle,
      highlight: true
    },
    {
      title: "Founder Biography & Credentials",
      desc: "Full story, achievements, and E-E-A-T credentials of Mr K",
      url: "/about/karuppasamy-m",
      icon: FileText,
      highlight: false
    },
    {
      title: "LinkedIn Executive Profile",
      desc: "Professional insights, client updates, and B2B articles",
      url: siteConfig.socials.linkedin,
      icon: Linkedin,
      highlight: false
    },
    {
      title: "Instagram (@mr_k_studio)",
      desc: "Behind the scenes, design typography, reels production",
      url: siteConfig.socials.instagram,
      icon: Instagram,
      highlight: false
    },
    {
      title: "YouTube Channel",
      desc: "Digital growth tutorials, brand documentaries, client results",
      url: siteConfig.socials.youtube,
      icon: Youtube,
      highlight: false
    },
    {
      title: "GitHub Developer Repository",
      desc: "Open source engineering, Next.js architecture, and code",
      url: siteConfig.socials.github,
      icon: Github,
      highlight: false
    },
    {
      title: "Google Business Profile (Trichy)",
      desc: "Official local search listing, verified client reviews & map directions",
      url: siteConfig.socials.googleBusiness,
      icon: MapPin,
      highlight: false
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080808] text-brand-warmWhite min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 text-center space-y-6">
        
        {/* Profile Card Header */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-yellow p-1 bg-[#0E0E0E] shadow-[0_0_25px_rgba(255,217,67,0.3)]">
            <img
              src="/logo/mrk-logo.png"
              alt="Karuppasamy M (Mr K) Link Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div>
            <h1 className="font-display font-black text-2xl text-brand-warmWhite flex items-center justify-center gap-1.5">
              <span>Karuppasamy M</span>
              <span className="text-brand-yellow text-sm font-mono">(Mr K)</span>
            </h1>
            <p className="text-xs text-brand-yellow font-mono uppercase tracking-widest mt-0.5">
              Digital Growth Strategist · Agency Founder
            </p>
            <p className="text-[11px] text-brand-grey mt-1">
              Tiruchirappalli (Trichy), Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* Links Stack */}
        <div className="space-y-3 pt-2">
          {links.map((link, idx) => {
            const Icon = link.icon;
            const isExternal = link.url.startsWith('http');
            return (
              <a
                key={idx}
                href={link.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all group ${
                  link.highlight
                    ? 'bg-brand-yellow text-brand-deepBlack border-brand-yellow hover:bg-[#F2CA2C] shadow-md font-bold'
                    : 'bg-[#0E0E0E] text-brand-warmWhite border-white/10 hover:border-brand-yellow/60 hover:bg-[#141414]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-2 rounded-lg ${link.highlight ? 'bg-black/10' : 'bg-brand-charcoal text-brand-yellow'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-display font-bold leading-tight">
                      {link.title}
                    </h2>
                    <p className={`text-[10px] mt-0.5 line-clamp-1 ${link.highlight ? 'text-brand-deepBlack/80' : 'text-brand-grey'}`}>
                      {link.desc}
                    </p>
                  </div>
                </div>

                <ExternalLink className={`w-4 h-4 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity ${link.highlight ? 'text-brand-deepBlack' : 'text-brand-yellow'}`} />
              </a>
            );
          })}
        </div>

        <div className="pt-4 text-xs text-brand-grey">
          <p>© {new Date().getFullYear()} MR K · Official Profile Directory</p>
        </div>

      </div>
    </div>
  );
}
