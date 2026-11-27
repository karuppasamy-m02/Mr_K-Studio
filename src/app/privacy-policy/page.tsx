import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | MR K Digital Growth Agency',
  description: 'Privacy Policy for MR K Digital Growth Agency. Learn how we collect, protect, and handle client information and inquiry data in compliance with Indian IT laws.',
  alternates: {
    canonical: `${siteConfig.domain}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-brand-deepBlack text-brand-warmWhite min-h-screen text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-grey hover:text-brand-yellow transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LEGAL COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-brand-grey">
            Last updated: February 2026 · MR K Digital Growth Agency (Tiruchirappalli, Tamil Nadu)
          </p>
        </header>

        <article className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 text-xs sm:text-sm text-brand-grey leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">1. Introduction</h2>
            <p>
              MR K Digital Growth Agency ("MR K", "we", "us", or "our"), founded and operated by Karuppasamy M in Tiruchirappalli, Tamil Nadu, India, respects your privacy and is dedicated to protecting the personal data of our website visitors, clients, and partners. This Privacy Policy details how we collect, utilize, disclose, and protect your information when you visit our website ({siteConfig.domain}) or interact with our digital marketing and branding services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">2. Information We Collect</h2>
            <p>We may collect information you voluntarily provide to us when you submit an inquiry form, contact us via WhatsApp, call our office, or engage our services:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact Identifiers:</strong> Name, phone number, WhatsApp contact number, email address, and company name.</li>
              <li><strong>Project Specifications:</strong> Business requirements, current website URLs, target audience details, and commercial budget ranges.</li>
              <li><strong>Technical Browsing Data:</strong> IP addresses, browser types, operating systems, referring URLs, and interaction timestamps collected automatically via server logs and anonymous performance analytics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">3. How We Use Your Information</h2>
            <p>Your information is used strictly for legitimate commercial and operational purposes, including:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Providing customized strategy consultations and proposals for your enterprise.</li>
              <li>Executing and managing digital advertising campaigns, SEO optimization, and web engineering deliverables.</li>
              <li>Direct client communication via telephone, WhatsApp, or email regarding project timelines and updates.</li>
              <li>Complying with applicable Indian commercial laws and taxation regulations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">4. Zero Data Selling Commitment</h2>
            <p>
              We maintain a strict policy: <strong>We do not sell, rent, trade, or monetize your personal or business data to third-party data brokers or marketing lists.</strong> Any data shared with advertising networks (such as Google Ads or Meta Ads) is strictly encrypted and used solely for the configuration of your own approved advertising accounts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">5. Data Security</h2>
            <p>
              We implement industry-standard encryption, SSL/TLS transmission protocols, and strict access controls to safeguard your personal data from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold text-brand-warmWhite uppercase">6. Contact & Grievance Officer</h2>
            <p>
              For any questions, requests for data deletion, or grievances regarding this Privacy Policy, please contact our founder directly:
            </p>
            <div className="p-4 rounded-xl bg-brand-charcoal text-brand-warmWhite font-mono text-xs space-y-1">
              <p><strong>Karuppasamy M (Founder)</strong></p>
              <p>MR K Digital Growth Agency</p>
              <p>Trichy, Tamil Nadu, India</p>
              <p>Email: {siteConfig.contact.email}</p>
              <p>Phone: {siteConfig.contact.phone}</p>
            </div>
          </section>
        </article>

      </div>
    </div>
  );
}
