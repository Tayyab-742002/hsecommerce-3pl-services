import Script from "next/script";

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "H&S E-commerce LTD",
  alternateName: "H&S E-commerce",
  url: "https://hsecommerce.co.uk",
  logo: "https://hsecommerce.co.uk/logo.JPG",
  description:
    "Professional 3PL services including warehousing, pick & pack, FBA/FBM fulfilment, kitting, and container handling. Reliable B2B & B2C e-commerce fulfilment solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Business Park, Unit 1 Carlinghurst Rd, George St W",
    addressLocality: "Blackburn",
    postalCode: "BB2 1PQ",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-7955-426807",
    contactType: "Customer Service",
    email: "info@hsecommerce.co.uk",
    areaServed: "GB",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.instagram.com/hs_ecommercex",
    "https://www.tiktok.com/@hsecommerce",
    "https://www.facebook.com/share/181eSxPLAm",
  ],
  foundingDate: "2015",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "50-100",
  },
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hsecommerce.co.uk/#organization",
  name: "H&S E-commerce LTD",
  image: "https://hsecommerce.co.uk/logo.JPG",
  description:
    "Professional 3PL services including warehousing, pick & pack, FBA/FBM fulfilment, kitting, and container handling.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Business Park, Unit 1 Carlinghurst Rd, George St W",
    addressLocality: "Blackburn",
    addressRegion: "Lancashire",
    postalCode: "BB2 1PQ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.74602544474228,
    longitude: -2.4940040223798143,
  },
  url: "https://hsecommerce.co.uk",
  telephone: "+44-7955-426807",
  email: "info@hsecommerce.co.uk",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "3PL Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Warehousing & Storage",
          description: "Secure storage with accurate stock tracking",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pick & Pack Fulfilment",
          description: "Fast, reliable picking & packing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "FBA & FBM Fulfilment",
          description: "Amazon & multi-channel handling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kitting & Bundling",
          description: "Ready-to-sell bundles & gift sets",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Container Unloading",
          description: "Professional unloading & handling of full containers",
        },
      },
    ],
  },
};

// Service Schema (for individual service pages)
export function getServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: "H&S E-commerce LTD",
      url: "https://hsecommerce.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    description: service.description,
    url: `https://hsecommerce.co.uk/services/${service.slug}`,
  };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQ Schema (can be added to pages with FAQs)
export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Review/Rating Schema
export function getReviewSchema(
  reviews: Array<{
    author: string;
    rating: number; // 1-5
    reviewBody: string;
    datePublished?: string;
  }>
) {
  const aggregateRating =
    reviews.length > 0
      ? {
          "@type": "AggregateRating",
          ratingValue: (
            reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
          ).toFixed(1),
          reviewCount: reviews.length,
          bestRating: "5",
          worstRating: "1",
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hsecommerce.co.uk/#organization",
    aggregateRating,
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.datePublished || new Date().toISOString(),
      reviewBody: review.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };
}

// VideoObject Schema
export function getVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate?: string;
  duration?: string; // ISO 8601 duration (e.g., "PT5M30S")
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    contentUrl: video.contentUrl,
    uploadDate: video.uploadDate || new Date().toISOString(),
    duration: video.duration,
    publisher: {
      "@type": "Organization",
      name: "H&S E-commerce LTD",
      logo: {
        "@type": "ImageObject",
        url: "https://hsecommerce.co.uk/logo.JPG",
      },
    },
  };
}
