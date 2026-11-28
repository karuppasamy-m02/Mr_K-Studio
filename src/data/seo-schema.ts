import { siteConfig } from "./config";
import { faqData } from "./faq";

/**
 * Master Linked JSON-LD Graph for MR K & Karuppasamy M
 * Built for Google Search Console, Google Knowledge Graph, and Generative Engine Optimization (GEO)
 * Compatible with Googlebot, ChatGPT Search, Perplexity AI, Claude Search, and Gemini
 */
export function getMasterJsonLd() {
  const orgId = `${siteConfig.domain}/#organization`;
  const personId = `${siteConfig.domain}/#founder`;
  const websiteId = `${siteConfig.domain}/#website`;
  const localBusinessId = `${siteConfig.domain}/#localbusiness`;
  const faqId = `${siteConfig.domain}/#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Schema with SearchAction
      {
        "@type": "WebSite",
        "@id": websiteId,
        "url": siteConfig.domain,
        "name": siteConfig.name,
        "alternateName": siteConfig.alternateNames,
        "description": siteConfig.description,
        "publisher": { "@id": orgId },
        "inLanguage": ["en-IN", "ta-IN"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteConfig.domain}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },

      // 2. Organization Schema
      {
        "@type": "Organization",
        "@id": orgId,
        "name": siteConfig.name,
        "alternateName": siteConfig.alternateNames,
        "legalName": "MR K Digital Growth Agency",
        "url": siteConfig.domain,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.domain}/logo/mrk-logo.png`,
          "width": "1254",
          "height": "1254",
          "caption": "MR K Digital Growth Agency Official Logo"
        },
        "image": `${siteConfig.domain}/logo/mrk-logo.png`,
        "founder": { "@id": personId },
        "foundingLocation": {
          "@type": "Place",
          "name": "Tiruchirappalli, Tamil Nadu, India"
        },
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.email,
        "sameAs": [
          siteConfig.socials.instagram,
          siteConfig.socials.linkedin,
          siteConfig.socials.youtube,
          siteConfig.socials.facebook,
          siteConfig.socials.github,
          siteConfig.socials.behance,
          siteConfig.socials.twitter,
          siteConfig.socials.googleBusiness
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "customer service",
          "availableLanguage": ["English", "Tamil"],
          "areaServed": "IN"
        }
      },

      // 3. Person Schema for Karuppasamy M ("Mr K")
      {
        "@type": "Person",
        "@id": personId,
        "name": siteConfig.founder.name,
        "alternateName": siteConfig.founder.alternateName,
        "jobTitle": siteConfig.founder.jobTitle,
        "description": siteConfig.founder.bio,
        "worksFor": { "@id": orgId },
        "url": `${siteConfig.domain}/about/karuppasamy-m`,
        "image": `${siteConfig.domain}/logo/mrk-logo.png`,
        "sameAs": [
          siteConfig.socials.linkedin,
          siteConfig.socials.github,
          siteConfig.socials.youtube,
          siteConfig.socials.instagram,
          siteConfig.socials.behance
        ],
        "knowsAbout": siteConfig.founder.knowsAbout,
        "nationality": {
          "@type": "Country",
          "name": "India"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": siteConfig.contact.address.addressLocality,
          "addressRegion": siteConfig.contact.address.addressRegion,
          "addressCountry": "IN"
        }
      },

      // 4. LocalBusiness & ProfessionalService Schema with GeoCoordinates & Service Catalog
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": localBusinessId,
        "name": siteConfig.name,
        "legalName": "MR K Digital Growth Agency",
        "url": siteConfig.domain,
        "parentOrganization": { "@id": orgId },
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.email,
        "priceRange": "₹₹",
        "currenciesAccepted": "INR, USD",
        "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer, Net Banking",
        "image": `${siteConfig.domain}/logo/mrk-logo.png`,
        "logo": `${siteConfig.domain}/logo/mrk-logo.png`,
        "hasMap": "https://maps.google.com/maps?q=Tiruchirappalli%2C%20Tamil%20Nadu%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.contact.address.streetAddress,
          "addressLocality": siteConfig.contact.address.addressLocality,
          "addressRegion": siteConfig.contact.address.addressRegion,
          "postalCode": siteConfig.contact.address.postalCode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": siteConfig.contact.geo.latitude,
          "longitude": siteConfig.contact.geo.longitude
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        // Hyper-local & Regional Area Coverage
        "areaServed": [
          {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": siteConfig.contact.geo.latitude,
              "longitude": siteConfig.contact.geo.longitude
            },
            "geoRadius": "100000"
          },
          ...siteConfig.serviceAreas.map(area => ({
            "@type": "AdministrativeArea",
            "name": area
          }))
        ],
        // Itemized Service Catalog
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "MR K Digital Services & Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Branding & Personal Branding",
                "description": "Complete corporate brand identity systems, vector logo design, typography kits, and executive authority branding.",
                "url": `${siteConfig.domain}/branding-agency-trichy`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Converting Website Development",
                "description": "Fast Next.js websites, mobile-responsive web applications, landing pages, and search-optimized digital platforms.",
                "url": `${siteConfig.domain}/website-development-trichy`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local SEO & Google Business Profile Dominance",
                "description": "Targeted Google Maps 3-Pack rankings, local citation building, and review growth for businesses in Trichy and Tamil Nadu.",
                "url": `${siteConfig.domain}/seo-services-trichy`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Marketing & Content Management",
                "description": "Strategic social media management, creative campaign assets, viral Instagram Reels, and community engagement.",
                "url": `${siteConfig.domain}/social-media-marketing-trichy`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cinematic Video Production & Commercial Editing",
                "description": "Professional 4K commercial video production, founder interviews, product showcases, and high-retention short-form video reels.",
                "url": `${siteConfig.domain}/video-editing-services-trichy`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Paid Ads & Performance Lead Generation",
                "description": "Data-driven Meta Ads and Google Ads campaigns engineered for maximum return on ad spend (ROAS) and qualified B2B/B2C leads.",
                "url": `${siteConfig.domain}/digital-marketing-agency-trichy`
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "48",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Dr. S. Vignesh" },
            "datePublished": "2026-01-14",
            "reviewBody": "MR K transformed our medical practice web presence in Trichy. The website speed and Google Maps ranking delivered immediate new patient inquiries.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh Kumar M" },
            "datePublished": "2026-02-02",
            "reviewBody": "Outstanding branding and video editing. Karuppasamy M personally directed our brand strategy, resulting in a 400% surge in social engagement.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },

      // 5. FAQPage Schema for Rich Snippets on Google Search
      {
        "@type": "FAQPage",
        "@id": faqId,
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };
}

/**
 * Service Page Specific Schema
 */
export function getServiceJsonLd(serviceName: string, serviceDescription: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.domain}/${slug}#service`,
    "name": serviceName,
    "serviceType": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "url": siteConfig.domain,
      "telephone": siteConfig.contact.phone
    },
    "areaServed": siteConfig.serviceAreas.map(area => ({
      "@type": "AdministrativeArea",
      "name": area
    })),
    "termsOfService": `${siteConfig.domain}/terms-of-service`
  };
}

/**
 * FAQPage Schema Generator
 */
export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Breadcrumbs Schema Generator
 */
export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
