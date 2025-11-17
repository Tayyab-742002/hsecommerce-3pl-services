import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/ui/service-detail-page";
import {
  services,
  getServiceBySlug,
  getRelatedServices,
  serializeService,
} from "@/lib/services-data";

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
    description: service.overview.description,
    keywords: [
      service.title,
      "3PL",
      "fulfilment",
      "UK",
      "logistics",
      "warehousing",
      "e-commerce",
    ],
    openGraph: {
      title: `${service.title} - H&S E-commerce LTD`,
      description: service.tagline,
      images: [service.hero.image],
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

  return (
    <ServiceDetailPage
      service={serializedService}
      relatedServices={serializedRelatedServices}
    />
  );
}
