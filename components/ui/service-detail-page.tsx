"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SerializedService } from "@/lib/services-data";
import { ServiceHero } from "./service-hero";
import { ServiceCard } from "./service-card";
import { ServiceListingCard } from "./service-listing-card";
import { StickyFeatureSection } from "./sticky-feature-section";
import { CardCarousel } from "./card-carousel";

interface ServiceDetailPageProps {
  service: SerializedService;
  relatedServices: SerializedService[];
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  relatedServices,
}) => {
  const countImages = [
    "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-Fp7XiuBxhDetY0FU7RQ74iZ5Ml6USM.png&w=500&q=75",
    "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-eXTE0KiYYudOsTnvuG6ZIe5GywPdMW.png&w=160&q=75",
    "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-enUUxdx7zdeqdIC51LoiELeIco9Nd6.png&w=160&q=75",
    "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-YORDIzVL3jnkehE8pOzcX351YW5aue.png&w=160&q=75",
    "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-WkqjrHTxCGRoWQ3CYvp7D9jjDnuXvW.png&w=160&q=75",
  ];
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <ServiceHero service={service} />

      {/* Overview Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            className="max-w-3xl"
            >
              <div className="w-12 h-1 bg-primary mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-heading">
                Service Overview
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                {service.overview.description}
              </p>
            </motion.div>
        </div>
      </section>

      {/* Features Section with Sticky Cards */}
      <StickyFeatureSection
        title="Key Features"
        subtitle="Discover what makes our service stand out"
        features={service.overview.features.map((feature, index) => {
          // Ensure each feature gets a different image by cycling through gallery
          // If gallery has fewer images than features, cycle through them
          const allImages = [
            ...service.gallery,
            service.hero.image, // Add hero as fallback
          ];
          const featureImage = allImages[index % allImages.length];

          return {
            title: feature,
            description: `Enhance your operations with ${feature.toLowerCase()} as part of our ${service.title.toLowerCase()} solution.`,
            imageUrl: featureImage,
          };
        })}
        className=""
      />

      {/* Process Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
              {service.process.title}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.process.steps.map((step, index) => {
              // Use gallery images or hero image for decorative images
              const decorativeImage = countImages[index];

              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard
                    variant="default"
                    title={step.title}
                    description={step.description}
                    stepNumber={step.number}
                    imgSrc={decorativeImage}
                    imgAlt={`${step.title} illustration`}
                    className="bg-black/95 border border-white/10 text-white h-full"
                  />
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-heading">
              Key Benefits
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <IconRenderer
                    iconName={benefit.iconName}
                    className="w-8 h-8 text-primary"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-lg font-bold text-black mb-2 font-heading">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading">
              Gallery
            </h2>
          </motion.div>
          <CardCarousel
            images={service.gallery.map((image, index) => ({
              src: image,
              alt: `${service.title} gallery ${index + 1}`,
            }))}
            autoplayDelay={3000}
            showPagination={true}
            showNavigation={true}
          />
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-black font-heading">
                Related Services
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedServices.map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceListingCard
                    imageUrl={relatedService.hero.image}
                    imageAlt={relatedService.title}
                    iconName={relatedService.iconName}
                    title={relatedService.title}
                    tagline={relatedService.tagline}
                    overview={relatedService.overview.description}
                    href={`/services/${relatedService.slug}`}
                    stat={relatedService.hero.stats[0]}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-black py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
              Ready to get started?
            </h2>
            <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Contact our team to discuss how {service.title.toLowerCase()} can
              benefit your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-bold transition-all duration-200"
              >
                All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
