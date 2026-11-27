import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle2, 
  MapPin, 
  Briefcase, 
  Award, 
  Linkedin, 
  Github, 
  Youtube, 
  Instagram, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  Code2,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { siteConfig } from '@/data/config';
import { getMasterJsonLd, getBreadcrumbJsonLd } from '@/data/seo-schema';
import AiDirectAnswer from '@/components/AiDirectAnswer';

export const metadata: Metadata = {
  title: 'Karuppasamy M (Mr K) | Founder of MR K Agency Trichy',
  description: 'Official biography of Karuppasamy M (Mr K) — digital growth strategist, brand architect, and founder of MR K Agency in Tiruchirappalli (Trichy), Tamil Nadu.',
  keywords: [
    'Karuppasamy M',
    'Karuppasamy M Mr K',
    'Mr K Trichy',
    'MR K Digital Marketing',
    'Karuppasamy M digital marketing',
    'MR K agency founder',
    'Karuppasamy Murugesan',
    'Branding strategist Trichy',
    'Web developer Trichy'
  ],
  alternates: {
    canonical: `${siteConfig.domain}/about/karuppasamy-m`,
  },
  openGraph: {
    title: 'Karuppasamy M (Mr K) | Founder of MR K Agency Trichy',
    description: 'Digital growth strategist, brand architect, and founder of MR K Agency in Tiruchirappalli, Tamil Nadu.',
    url: `${siteConfig.domain}/about/karuppasamy-m`,
    images: [{ url: `${siteConfig.domain}/logo/mrk-logo.png`, width: 1200, height: 630 }],
  },
};

export default function FounderPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: 'Home', url: siteConfig.domain },
    { name: 'About Karuppasamy M (Mr K)', url: `${siteConfig.domain}/about/karuppasamy-m` }
  ]);

  const skills = [
    { name: 'Personal Branding & Executive Presence', level: 'Mastery' },
    { name: 'Full-Stack Web Engineering (Next.js, TypeScript, React)', level: 'Advanced' },
    { name: 'Search Engine Optimization (Technical & Local SEO)', level: 'Authority' },
    { name: 'Generative Engine Optimization (GEO for AI Search)', level: 'Specialist' },
    { name: 'Cinematic Video Editing & Short-Form Storytelling', level: 'Production-Grade' },
    { name: 'Conversion Funnel Architecture & CRO', level: 'High-Impact' },
    { name: 'Paid Performance Advertising (Meta & Google Ads)', level: 'Targeted' },
  ];

  return (
    <div className="pt-28 pb-24 bg-brand-deepBlack text-brand-warmWhite min-h-screen">
      {/* Linked Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-brand-grey flex items-center gap-2">
          <Link href="/" className="hover:text-brand-yellow">Home</Link>
          <span>/</span>
          <span className="text-brand-yellow">About Karuppasamy M</span>
        </nav>

        {/* Hero Bio Card */}
        <header className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Founder Avatar & Visual */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-brand-yellow p-1 bg-[#080808] shadow-[0_0_35px_rgba(255,217,67,0.25)] mb-4">
                <img
                  src="/logo/mrk-logo.png"
                  alt="Karuppasamy M (Mr K) — Founder of MR K Digital Growth Agency in Trichy, Tamil Nadu"
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-brand-yellow text-brand-grey hover:text-brand-yellow transition-all" aria-label="LinkedIn Profile">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-brand-yellow text-brand-grey hover:text-brand-yellow transition-all" aria-label="GitHub Profile">
                  <Github className="w-4 h-4" />
                </a>
                <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-brand-yellow text-brand-grey hover:text-brand-yellow transition-all" aria-label="YouTube Channel">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-brand-yellow text-brand-grey hover:text-brand-yellow transition-all" aria-label="Instagram Profile">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Founder Bio Headline */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-mono uppercase tracking-widest font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FOUNDER & DIGITAL GROWTH ARCHITECT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase leading-tight">
                KARUPPASAMY M <span className="text-brand-yellow">(MR K)</span>
              </h1>

              <p className="text-xs sm:text-sm font-mono text-brand-grey flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                <span>Tiruchirappalli (Trichy), Tamil Nadu, India</span>
              </p>

              <p className="text-sm sm:text-base text-brand-warmWhite leading-relaxed pt-2">
                {siteConfig.founder.bio}
              </p>

              <div className="pt-3 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent("Hello Karuppasamy M! I am interested in discussing a project for my company.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F2CA2C] transition-all flex items-center gap-2"
                >
                  <span>Consult With Karuppasamy M Directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/links"
                  className="px-6 py-3 border border-white/20 text-brand-warmWhite font-display font-semibold text-xs uppercase tracking-wider hover:border-brand-yellow hover:text-brand-yellow transition-all"
                >
                  Link-in-Bio Directory
                </Link>
              </div>
            </div>

          </div>
        </header>

        {/* GEO AI Citation Block for Karuppasamy M */}
        <AiDirectAnswer
          question="Who is Karuppasamy M (Mr K)?"
          answer="Karuppasamy M (known as Mr K) is an Indian digital growth strategist, brand designer, and full-stack web developer headquartered in Tiruchirappalli (Trichy), Tamil Nadu. As the founder of MR K Digital Growth Agency, he architects high-converting brand identities, Next.js web applications, and local search dominance campaigns for Indian businesses."
          category="KNOWLEDGE GRAPH CITATION · FOUNDER BIO"
        />

        {/* Detailed Background & Career Narrative */}
        <article className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 text-left">
          <h2 className="text-2xl font-display font-bold text-brand-warmWhite uppercase">
            The Philosophy Behind MR K: Personal Brand to Agency Powerhouse
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-brand-grey leading-relaxed">
            <p>
              Growing up in Tamil Nadu and establishing his professional base in Tiruchirappalli, Karuppasamy M recognized a persistent structural gap in the Indian digital ecosystem: visionary local enterprises and ambitious professionals were relying on fragmented freelancers or overpriced metropolitan agencies who lacked personal accountability.
            </p>
            <p>
              Under the moniker <strong>"Mr K"</strong>, he established the agency on three non-negotiable principles: 
              <strong className="text-brand-warmWhite"> Direct founder-led accountability</strong>, 
              <strong className="text-brand-warmWhite"> Uncompromising typographic and visual craft</strong>, and 
              <strong className="text-brand-warmWhite"> Engineering websites as commercial growth engines</strong> rather than passive brochureware.
            </p>
            <p>
              Today, MR K supports over 20+ verified client companies spanning specialty healthcare clinics in Cantonment, retail empires in Srirangam, manufacturing corporations in Thiruverumbur, and real estate developers across Thillai Nagar and Tamil Nadu.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-4">
            <h3 className="text-lg font-display font-bold text-brand-warmWhite">
              Core Technical & Strategic Capabilities
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {skills.map((skill) => (
                <div key={skill.name} className="p-3.5 rounded-xl bg-brand-charcoal border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span className="text-xs text-brand-warmWhite font-medium">{skill.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-yellow/80 uppercase">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* E-E-A-T Credibility & Verified Engagements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-[#0E0E0E] border border-white/10 rounded-2xl space-y-2">
            <span className="text-3xl font-display font-black text-brand-yellow">20+</span>
            <h4 className="text-sm font-display font-bold text-brand-warmWhite">Client Partnerships</h4>
            <p className="text-xs text-brand-grey">Verified business engagements across retail, healthcare, real estate, and industrial sectors.</p>
          </div>

          <div className="p-6 bg-[#0E0E0E] border border-white/10 rounded-2xl space-y-2">
            <span className="text-3xl font-display font-black text-brand-yellow">100%</span>
            <h4 className="text-sm font-display font-bold text-brand-warmWhite">Founder-Led Delivery</h4>
            <p className="text-xs text-brand-grey">Zero junior account middlemen. Karuppasamy M persönlich leads strategic execution.</p>
          </div>

          <div className="p-6 bg-[#0E0E0E] border border-white/10 rounded-2xl space-y-2">
            <span className="text-3xl font-display font-black text-brand-yellow">Trichy</span>
            <h4 className="text-sm font-display font-bold text-brand-warmWhite">Regional Authority</h4>
            <p className="text-xs text-brand-grey">Deep domain mastery of Tamil Nadu commercial consumer behavior and digital habits.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
