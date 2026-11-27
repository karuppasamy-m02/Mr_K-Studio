import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly allow leading AI search crawlers for GEO
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai'
        ],
        allow: '/',
      }
    ],
    sitemap: `${siteConfig.domain}/sitemap.xml`,
  };
}
