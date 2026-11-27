import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/data/config';
import { getBreadcrumbJsonLd } from '@/data/seo-schema';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  Sparkles,
  Phone,
  MessageSquare
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | MR K Insights`,
    description: post.metaDescription,
    alternates: {
      canonical: `${siteConfig.domain}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.domain}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.domain}/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.metaDescription,
    image: `${siteConfig.domain}/logo/mrk-logo.png`,
    author: {
      '@type': 'Person',
      name: 'Karuppasamy M',
      url: `${siteConfig.domain}/about/karuppasamy-m`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}/logo/mrk-logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
  };

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: 'Home', url: siteConfig.domain },
    { name: 'Blog', url: `${siteConfig.domain}/blog` },
    { name: post.title, url: `${siteConfig.domain}/blog/${post.slug}` },
  ]);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(`Hello Karuppasamy M! I just read your article "${post.title}" and would like to discuss it.`)}`;

  return (
    <div className="pt-28 pb-20 bg-brand-deepBlack text-brand-warmWhite min-h-screen text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link & Breadcrumbs */}
        <div className="flex items-center justify-between text-xs font-mono text-brand-grey border-b border-white/5 pb-4">
          <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-brand-yellow transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
          <span className="text-brand-yellow">{post.category}</span>
        </div>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>IN-DEPTH INDUSTRY ANALYSIS</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-brand-warmWhite uppercase leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs text-brand-grey">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-yellow/40">
                <Image
                  src="/logo/mrk-logo.png"
                  alt="Karuppasamy M"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Link href="/about/karuppasamy-m" className="font-display font-bold text-brand-warmWhite hover:text-brand-yellow block">
                  {post.author.name}
                </Link>
                <span className="text-[11px] font-mono text-brand-grey">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-yellow" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <nav aria-label="Table of contents" className="p-6 rounded-2xl bg-brand-charcoal border border-white/10 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-brand-yellow font-bold">
              TABLE OF CONTENTS
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-grey">
              {post.tableOfContents.map((toc, idx) => (
                <li key={idx}>
                  <a href={`#${toc.id}`} className="hover:text-brand-yellow transition-colors flex items-center gap-2">
                    <span className="text-brand-yellow font-mono text-xs">0{idx + 1}.</span>
                    <span>{toc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Article Body */}
        {post.content ? (
          <article 
            className="prose prose-invert prose-yellow max-w-none space-y-8 text-sm sm:text-base text-brand-grey leading-relaxed border-b border-white/10 pb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <div className="p-8 rounded-2xl bg-brand-charcoal border border-white/10 text-center space-y-4">
            <p className="text-brand-warmWhite text-sm">
              This masterclass outline is currently reserved for private briefing sessions with founder Karuppasamy M.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F2CA2C] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Private Masterclass Briefing</span>
            </a>
          </div>
        )}

        {/* Author Bio Box */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#0E0E0E] border border-white/10 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-brand-yellow shrink-0">
            <Image
              src="/logo/mrk-logo.png"
              alt="Karuppasamy M"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2 text-left">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-yellow font-bold block">
              WRITTEN BY THE FOUNDER
            </span>
            <h3 className="text-lg font-display font-bold text-brand-warmWhite">
              Karuppasamy M (Mr K)
            </h3>
            <p className="text-xs text-brand-grey leading-relaxed">
              Founder of MR K Digital Growth Agency in Tiruchirappalli, Tamil Nadu. Karuppasamy combines performance advertising, brand architecture, and modern web engineering to scale regional and national enterprises.
            </p>
            <div className="pt-2">
              <Link href="/about/karuppasamy-m" className="text-xs font-bold text-brand-yellow inline-flex items-center gap-1 hover:underline">
                <span>View Full Founder Profile & Credentials</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Consultation CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-secondaryBlack to-brand-charcoal border border-brand-yellow/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-display font-bold text-brand-warmWhite uppercase">
              Need these strategies implemented in your business?
            </h4>
            <p className="text-xs text-brand-grey">
              Book a 1-on-1 growth audit directly with Karuppasamy M.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-3 bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F2CA2C] transition-all flex items-center justify-center gap-2"
            >
              <span>WhatsApp Mr K</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
