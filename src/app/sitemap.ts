import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;
  const currentDate = new Date().toISOString();

  // Core Pages
  const routes = [
    '',
    '/about/karuppasamy-m',
    '/links',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
    '/reviews/submit',
    
    // Core Services Local SEO
    '/digital-marketing-agency-trichy',
    '/branding-agency-trichy',
    '/website-development-trichy',
    '/social-media-marketing-trichy',
    '/seo-services-trichy',
    '/logo-design-trichy',
    '/video-editing-services-trichy',

    // Regional & Area Landing Pages
    '/digital-marketing-thillai-nagar',
    '/digital-marketing-srirangam',
    '/digital-marketing-thanjavur',
    '/digital-marketing-karur',
    '/digital-marketing-madurai',
    '/digital-marketing-coimbatore',
    '/digital-marketing-chennai',

    // Blog In-depth Guides
    '/blog/digital-marketing-cost-trichy-2026',
    '/blog/how-to-choose-branding-agency-trichy',
    '/blog/why-every-trichy-business-needs-website'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : route.startsWith('/blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/digital-marketing-agency') ? 0.9 : 0.8,
  }));
}
