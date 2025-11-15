"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { CTASection } from "@/components/ui/cta-section";
import { ServiceListingCard } from "@/components/ui/service-listing-card";
import { services } from "@/lib/services-data";
import {
  Warehouse,
  PackageCheck,
  ShoppingCart,
  Gift,
  PackageOpen,
  Building2,
  Truck,
  RotateCcw,
  Container,
  type LucideIcon,
} from "lucide-react";

// Helper to get icon name from service
function getIconName(icon: LucideIcon): string {
  for (const [name, IconComponent] of Object.entries({
    Warehouse,
    PackageCheck,
    ShoppingCart,
    Gift,
    PackageOpen,
    Building2,
    Truck,
    RotateCcw,
    Container,
  })) {
    if (IconComponent === icon) {
      return name;
    }
  }
  return "PackageCheck";
}

const ServicesPage = () => {
  // Transform services for cards
  const serviceCards = useMemo(
    () =>
      services.map((service) => ({
        id: service.id,
        imageUrl: service.hero.image,
        imageAlt: service.title,
        iconName: getIconName(service.icon),
        title: service.title,
        tagline: service.tagline,
        overview: service.overview.description,
        href: `/services/${service.slug}`,
        stat: service.hero.stats[0], // Use first stat
      })),
    []
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-black py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                Our Services
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 font-heading">
              Complete 3PL Solutions
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Professional fulfilment services designed to scale with your
              business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ServiceListingCard
                  imageUrl={service.imageUrl}
                  imageAlt={service.imageAlt}
                  iconName={service.iconName}
                  title={service.title}
                  tagline={service.tagline}
                  overview={service.overview}
                  href={service.href}
                  stat={service.stat}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default ServicesPage;
