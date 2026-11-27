import { siteConfig } from "./config";

/**
 * Master Linked JSON-LD Graph for MR K & Karuppasamy M
 */
export function getMasterJsonLd() {
  const orgId = `${siteConfig.domain}/#organization`;
  const personId = `${siteConfig.domain}/#founder`;
  const websiteId = `${siteConfig.domain}/#website`;
  const localBusinessId = `${siteConfig.domain}/#localbusiness`;

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
        "url": siteConfig.domain,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.domain}/logo/mrk-logo.png`,
          "width": "1254",
          "height": "1254",
          "caption": "MR K Digital Growth Agency Logo"
        },
        "image": `${siteConfig.domain}/logo/mrk-logo.png`,
        "founder": { "@id": personId },
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
        "address": {
          "@type": "PostalAddress",
          "addressLocality": siteConfig.contact.address.addressLocality,
          "addressRegion": siteConfig.contact.address.addressRegion,
          "addressCountry": "IN"
        }
      },

      // 4. LocalBusiness & ProfessionalService Schema
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": localBusinessId,
        "name": siteConfig.name,
        "url": siteConfig.domain,
        "parentOrganization": { "@id": orgId },
        "telephone": siteConfig.contact.phone,
        "priceRange": "₹₹",
        "image": `${siteConfig.domain}/logo/mrk-logo.png`,
        "logo": `${siteConfig.domain}/logo/mrk-logo.png`,
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
        "areaServed": siteConfig.serviceAreas.map(area => ({
          "@type": "AdministrativeArea",
          "name": area
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "24",
          "bestRating": "5",
          "worstRating": "1"
        }
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
