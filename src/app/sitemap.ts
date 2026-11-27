import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/config';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;
  const currentDate = new Date().toISOString();

  // 1. Core Pages
  const coreRoutes = [
    '',
    '/about/karuppasamy-m',
    '/links',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
    '/reviews/submit',
  ];

  // 2. Core Services Local SEO Landing Pages
  const serviceRoutes = [
    '/digital-marketing-agency-trichy',
    '/branding-agency-trichy',
    '/website-development-trichy',
    '/social-media-marketing-trichy',
    '/seo-services-trichy',
    '/logo-design-trichy',
    '/video-editing-services-trichy',
  ];

  // 3. Regional GEO Landing Pages (Trichy & Surrounding Hubs)
  const regionalRoutes = [
    '/digital-marketing-thillai-nagar',
    '/digital-marketing-srirangam',
    '/digital-marketing-thanjavur',
    '/digital-marketing-karur',
    '/digital-marketing-madurai',
    '/digital-marketing-coimbatore',
    '/digital-marketing-chennai',
  ];

  // 4. In-Depth Blog & Thought Leadership Guides (10 Posts)
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: (route === '' ? 'daily' : 'weekly') as const,
      priority: route === '' ? 1.0 : 0.85,
    })),
    ...serviceRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...regionalRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    ...blogRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ];
}
