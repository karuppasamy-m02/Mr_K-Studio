import type { Metadata, Viewport } from 'next';
import '@/index.css';
import { siteConfig } from '@/data/config';
import { getMasterJsonLd } from '@/data/seo-schema';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'MR K | Digital Growth & Branding Agency Trichy',
    template: '%s | MR K Agency Trichy',
  },
  description: 'Premier digital growth agency in Tiruchirappalli (Trichy), Tamil Nadu. Founded by Karuppasamy M (Mr K). Branding, high-converting websites, video production & SEO.',
  keywords: [
    'Karuppasamy M',
    'Mr K',
    'Mr K Trichy',
    'MR K Digital Marketing',
    'Digital Marketing Agency in Trichy',
    'Branding Agency in Trichy',
    'Website Development Trichy',
    'SEO Services Tiruchirappalli',
    'Social Media Marketing Trichy',
    'Video Editing Services Trichy',
    'Tamil Nadu Digital Growth Agency'
  ],
  authors: [{ name: 'Karuppasamy M (Mr K)', url: `${siteConfig.domain}/about/karuppasamy-m` }],
  creator: 'Karuppasamy M',
  publisher: 'MR K Digital Growth Agency',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.domain,
    languages: {
      'en-IN': siteConfig.domain,
      'ta-IN': `${siteConfig.domain}/ta`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.domain,
    siteName: 'MR K Digital Growth Agency',
    title: 'MR K | Digital Growth & Branding Agency Trichy',
    description: 'We turn businesses into unforgettable brands. Founded by Karuppasamy M in Tiruchirappalli, Tamil Nadu.',
    images: [
      {
        url: `${siteConfig.domain}/logo/mrk-logo.png`,
        width: 1200,
        height: 630,
        alt: 'MR K Digital Growth Agency — Founder Karuppasamy M',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MR K | Digital Growth & Branding Agency Trichy',
    description: 'We turn businesses into unforgettable brands. Founded by Karuppasamy M in Tiruchirappalli, Tamil Nadu.',
    images: [`${siteConfig.domain}/logo/mrk-logo.png`],
    creator: '@mrk_agency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo/mrk-logo.png',
    apple: '/logo/mrk-logo.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google88508b1f83aa1a3b',
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Tiruchirappalli, Tamil Nadu, India',
    'geo.position': '10.7905;78.7047',
    'ICBM': '10.7905, 78.7047',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getMasterJsonLd();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts preconnect and stylesheets for Space Grotesk, Inter, and Noto Sans Tamil */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Tamil:wght@400;600;700&family=Space+Grotesk:wght@500;600;700;900&display=swap"
        />

        {/* Linked JSON-LD Master Graph for Google & AI Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Geographic / Local SEO Meta Tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Tiruchirappalli, Tamil Nadu, India" />
        <meta name="geo.position" content="10.7905;78.7047" />
        <meta name="ICBM" content="10.7905, 78.7047" />

        {/* Generative Engine Optimization (GEO) & AI Discovery Links */}
        <link rel="author" href="https://mrk-pearl.vercel.app/about/karuppasamy-m" />
        <link rel="alternate" type="text/plain" href="https://mrk-pearl.vercel.app/llms.txt" title="LLM Content Manifest" />
      </head>
      <body className="bg-brand-deepBlack text-brand-warmWhite font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepBlack overflow-x-hidden min-h-screen flex flex-col justify-between">
        <LanguageProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
