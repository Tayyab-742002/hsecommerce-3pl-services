import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/ui/service-detail-page";
import {
  services,
  getServiceBySlug,
  getRelatedServices,
  serializeService,
} from "@/lib/services-data";
import { StructuredData, getServiceSchema, getBreadcrumbSchema } from "@/components/seo/structured-data";

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Prevent 404s for unknown slugs - return 404 instead
export const dynamicParams = false;

// Generate metadata for each service
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found - H&S E-commerce",
    };
  }

  return {
    title: `${service.title} - H&S E-commerce LTD`,
    description: `${service.overview.description} Professional ${service.title.toLowerCase()} services in the UK. Get a free quote today.`,
    keywords: [
      service.title,
      service.title.toLowerCase() + " UK",
      "3PL",
      "fulfilment",
      "UK",
      "logistics",
      "warehousing",
      "e-commerce",
      "Blackburn " + service.title.toLowerCase(),
    ],
    openGraph: {
      title: `${service.title} - H&S E-commerce LTD`,
      description: service.tagline,
      url: `https://hsecommerce.co.uk/services/${service.slug}`,
      images: [
        {
          url: service.hero.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - H&S E-commerce LTD`,
      description: service.tagline,
      images: [service.hero.image],
    },
    alternates: {
      canonical: `https://hsecommerce.co.uk/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.id);

  // Serialize services to remove icon components (functions) before passing to client
  const serializedService = serializeService(service);
  const serializedRelatedServices = relatedServices.map(serializeService);

  // Structured data for SEO
  const serviceSchema = getServiceSchema({
    title: service.title,
    description: service.overview.description,
    slug: service.slug,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://hsecommerce.co.uk" },
    { name: "Services", url: "https://hsecommerce.co.uk/services" },
    { name: service.title, url: `https://hsecommerce.co.uk/services/${service.slug}` },
  ]);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <ServiceDetailPage
        service={serializedService}
        relatedServices={serializedRelatedServices}
      />
    </>
  );
}
