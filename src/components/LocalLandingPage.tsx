import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Building2, 
  Compass, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '@/data/config';
import { getServiceJsonLd, getFaqJsonLd, getBreadcrumbJsonLd } from '@/data/seo-schema';
import AiDirectAnswer from '@/components/AiDirectAnswer';

export interface LocalPageProps {
  slug: string;
  h1: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  primaryLocation: string;
  aiQuestion: string;
  aiAnswer: string;
  introHeading: string;
  introParagraphs: string[];
  serviceOfferings: { title: string; desc: string; deliverables: string[] }[];
  localRelevanceText: string;
  faqs: { question: string; answer: string }[];
  localities: string[];
}

export default function LocalLandingPage({ data }: { data: LocalPageProps }) {
  const serviceSchema = getServiceJsonLd(data.h1, data.metaDescription, data.slug);
  const faqSchema = getFaqJsonLd(data.faqs);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: 'Home', url: siteConfig.domain },
    { name: data.h1, url: `${siteConfig.domain}/${data.slug}` }
  ]);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(`Hello Karuppasamy M! I am interested in ${data.h1} for my company.`)}`;

  return (
    <div className="pt-28 pb-20 bg-brand-deepBlack text-brand-warmWhite min-h-screen text-left">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-brand-grey flex items-center gap-2">
          <Link href="/" className="hover:text-brand-yellow">Home</Link>
          <span>/</span>
          <span className="text-brand-yellow truncate">{data.h1}</span>
        </nav>

        {/* Hero Section */}
        <header className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-mono uppercase tracking-widest font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{data.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-black text-brand-warmWhite uppercase leading-[1.05] tracking-tight mb-4">
            {data.h1}
          </h1>

          <p className="text-xs sm:text-sm font-mono text-brand-yellow flex items-center gap-2 mb-6">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Serving {data.primaryLocation} & Tamil Nadu · Led by Karuppasamy M (Mr K)</span>
          </p>

          <p className="text-sm sm:text-base text-brand-grey leading-relaxed max-w-3xl mb-8">
            {data.metaDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#F2CA2C] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Get Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="px-8 py-4 border border-white/20 text-brand-warmWhite font-display font-semibold text-xs uppercase tracking-[0.16em] hover:border-brand-yellow hover:text-brand-yellow transition-all flex items-center justify-center gap-2"
            >
              <span>Call +91 8270374293</span>
            </a>
          </div>
        </header>

        {/* Direct GEO Answer Box */}
        <AiDirectAnswer
          question={data.aiQuestion}
          answer={data.aiAnswer}
          category={`AI KNOWLEDGE CITATION · ${data.primaryLocation.toUpperCase()}`}
        />

        {/* In-Depth Core Overview (>600 words structured content) */}
        <article className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-warmWhite uppercase tracking-tight">
            {data.introHeading}
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-brand-grey leading-relaxed">
            {data.introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Detailed Service Capabilities */}
          <div className="pt-6 border-t border-white/[0.08] space-y-6">
            <h3 className="text-xl font-display font-bold text-brand-warmWhite uppercase tracking-wide">
              Key Deliverables & Commercial Solutions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.serviceOfferings.map((svc, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-brand-charcoal border border-white/5 space-y-3">
                  <h4 className="text-sm font-display font-bold text-brand-warmWhite flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>{svc.title}</span>
                  </h4>
                  <p className="text-xs text-brand-grey leading-relaxed">
                    {svc.desc}
                  </p>
                  <ul className="space-y-1.5 pt-2 border-t border-white/5 text-[11px] text-brand-warmWhite">
                    {svc.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5 text-brand-grey">
                        <span className="text-brand-yellow">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Market Context */}
          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <h3 className="text-lg font-display font-bold text-brand-warmWhite uppercase">
              Local Market Mastery in {data.primaryLocation}
            </h3>
            <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
              {data.localRelevanceText}
            </p>
          </div>
        </article>

        {/* Local FAQ Section */}
        <section className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-2 text-brand-yellow text-xs font-mono uppercase tracking-widest font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>LOCAL FAQS FOR {data.primaryLocation.toUpperCase()}</span>
          </div>

          <h3 className="text-2xl font-display font-bold text-brand-warmWhite uppercase">
            Frequently Asked Questions in {data.primaryLocation}
          </h3>

          <div className="space-y-4 pt-2">
            {data.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="p-5 rounded-xl bg-brand-charcoal border border-white/5 space-y-2">
                <h4 className="text-sm font-display font-bold text-brand-warmWhite">
                  {faq.question}
                </h4>
                <p className="text-xs text-brand-grey leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Embedded Map & Complete NAP Block */}
        <section className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow font-bold block">
                LOCAL HEADQUARTERS & NAP
              </span>
              <h3 className="text-xl font-display font-bold text-brand-warmWhite">
                MR K Digital Growth Agency
              </h3>
              <p className="text-xs text-brand-grey leading-relaxed">
                Direct founder-led growth agency by Karuppasamy M. Serving businesses across {data.localities.join(", ")}.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/[0.08] text-xs text-brand-warmWhite">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>{siteConfig.contact.address.streetAddress}, {siteConfig.contact.address.addressLocality}, TN - {siteConfig.contact.address.postalCode}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-brand-yellow">{siteConfig.contact.phone}</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-yellow">{siteConfig.contact.email}</a>
                </p>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="w-full h-52 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title={`MR K Agency — ${data.primaryLocation} Map`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(data.primaryLocation + ', Tamil Nadu, India')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.2)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-secondaryBlack via-brand-charcoal to-brand-secondaryBlack border border-brand-yellow/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-display font-bold text-brand-warmWhite uppercase">
              Ready to dominate your market in {data.primaryLocation}?
            </h4>
            <p className="text-xs text-brand-grey mt-1">
              Speak directly with founder Karuppasamy M (Mr K) for a tailored growth roadmap.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F2CA2C] transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg"
          >
            <span>Start Your Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
