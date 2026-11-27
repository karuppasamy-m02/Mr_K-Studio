import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/data/config';
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen, User } from 'lucide-react';
import { getBreadcrumbJsonLd } from '@/data/seo-schema';

export const metadata: Metadata = {
  title: 'Digital Marketing & Growth Blog | Insights by Karuppasamy M (MR K)',
  description: 'Authoritative guides on digital marketing costs, branding strategy, SEO, and web engineering in Trichy and Tamil Nadu by Karuppasamy M.',
  alternates: {
    canonical: `${siteConfig.domain}/blog`,
  },
  openGraph: {
    title: 'Digital Marketing & Growth Blog | MR K Agency',
    description: 'Expert analysis on performance marketing, brand architecture, and local business scaling in Tamil Nadu.',
    url: `${siteConfig.domain}/blog`,
  },
};

export default function BlogIndexPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: 'Home', url: siteConfig.domain },
    { name: 'Growth Insights & Blog', url: `${siteConfig.domain}/blog` },
  ]);

  return (
    <div className="pt-28 pb-20 bg-brand-deepBlack text-brand-warmWhite min-h-screen text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-brand-grey flex items-center gap-2">
          <Link href="/" className="hover:text-brand-yellow">Home</Link>
          <span>/</span>
          <span className="text-brand-yellow">Blog & Insights</span>
        </nav>

        {/* Header */}
        <header className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-mono uppercase tracking-widest font-bold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>MR K KNOWLEDGE VAULT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-brand-warmWhite uppercase tracking-tight mb-4">
            Growth Strategies & Industry Truths
          </h1>
          <p className="text-sm sm:text-base text-brand-grey max-w-3xl leading-relaxed">
            Unfiltered frameworks, financial breakdowns, and technical playbooks authored by Karuppasamy M (Mr K) for entrepreneurs in Trichy, Tamil Nadu, and across India.
          </p>
        </header>

        {/* Featured Guides (Top 3 Full In-Depth Articles) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-xl font-display font-bold text-brand-warmWhite uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              <span>Comprehensive 2026 In-Depth Guides</span>
            </h2>
            <span className="text-xs font-mono text-brand-yellow">1,200+ Words Each</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="bg-[#0E0E0E] border border-white/10 hover:border-brand-yellow/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-grey">
                    <span className="px-2.5 py-1 rounded bg-brand-charcoal text-brand-yellow border border-white/5 font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-yellow" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-brand-warmWhite group-hover:text-brand-yellow transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-brand-grey line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-brand-yellow/40">
                      <Image
                        src="/logo/mrk-logo.png"
                        alt="Karuppasamy M"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-mono text-brand-warmWhite">{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-brand-yellow inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* All Articles Section */}
        <section className="space-y-6 pt-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xl font-display font-bold text-brand-warmWhite uppercase">
              All Strategic Insights & Masterclasses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogPosts.slice(3).map((post) => (
              <article
                key={post.slug}
                className="bg-[#0E0E0E] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-yellow/40 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-grey">
                    <span className="text-brand-yellow">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-brand-warmWhite hover:text-brand-yellow transition-colors">
                    <Link href={post.content ? `/blog/${post.slug}` : `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(`Hello Mr K! I would like to request early access or consultation on your guide: ${post.title}`)}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-brand-grey leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-brand-grey font-mono text-[11px] flex items-center gap-1">
                    <User className="w-3 h-3 text-brand-yellow" />
                    Karuppasamy M
                  </span>

                  {post.content ? (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-brand-yellow font-bold inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  ) : (
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(`Hello Mr K! I would like insights on: ${post.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-grey hover:text-brand-yellow font-mono text-[11px] inline-flex items-center gap-1"
                    >
                      <span>Request Briefing</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
