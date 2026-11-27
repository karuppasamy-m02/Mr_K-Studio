import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | MR K Digital Growth Agency',
  description: 'Terms of Service governing digital marketing, branding, web development, and media production engagements with MR K Digital Growth Agency.',
  alternates: {
    canonical: `${siteConfig.domain}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 pb-20 bg-brand-deepBlack text-brand-warmWhite min-h-screen text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-grey hover:text-brand-yellow transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-mono font-bold">
            <FileText className="w-3.5 h-3.5" />
            <span>CONTRACTUAL AGREEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-brand-grey">
            Effective Date: February 2026 · MR K Digital Growth Agency (Tiruchirappalli, Tamil Nadu)
          </p>
        </header>

        <article className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 text-xs sm:text-sm text-brand-grey leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">1. Engagement Overview</h2>
            <p>
              These Terms of Service govern the professional business relationship between MR K Digital Growth Agency ("Agency", "MR K", led by Karuppasamy M) and the client entity ("Client") contracting for digital branding, web engineering, SEO, video production, and advertising management services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">2. Scope of Work & Deliverables</h2>
            <p>
              All service deliverables, milestones, and delivery schedules are formally outlined in mutual Service Agreements, Proposals, or WhatsApp project confirmations. Any modifications or additional feature requests outside the agreed scope will be quoted as separate work orders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">3. Intellectual Property Rights</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Brand Identity & Logos:</strong> Upon full and final settlement of agreed project fees, complete worldwide commercial ownership and copyright of finalized logos and brand assets transfer unconditionally to the Client.</li>
              <li><strong>Custom Websites & Source Code:</strong> Custom website source codes and assets developed specifically for the client are handed over with complete administrative access upon final project payment.</li>
              <li><strong>Proprietary Frameworks:</strong> Internal marketing playbooks, proprietary workflow scripts, and analytical calculation models developed independently by MR K remain the intellectual property of the Agency.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">4. Advertising Spend & Third-Party Platforms</h2>
            <p>
              Unless explicitly specified under a comprehensive all-inclusive contract, media ad spend (payable to Meta Ads, Google Ads, or LinkedIn Ads) is directly billed to the Client’s own credit card or corporate ad billing account. The Agency manages the strategy, targeting, and optimization of campaigns but cannot be held liable for arbitrary third-party platform policy updates or ad account suspensions caused by external network changes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">5. Performance & Growth Expectations</h2>
            <p>
              MR K deploys best-in-class, mathematically grounded performance funnels, technical SEO, and conversion architectures. However, ultimate sales conversion and customer lifetime value also depend on Client factors including product quality, pricing competitiveness, sales team response time, and local market supply-and-demand dynamics.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and any related agreements are governed by the substantive laws of India. Any legal dispute or proceeding arising out of or related to these services shall be subject to the exclusive jurisdiction of the competent courts in Tiruchirappalli, Tamil Nadu.
            </p>
          </section>
        </article>

      </div>
    </div>
  );
}
