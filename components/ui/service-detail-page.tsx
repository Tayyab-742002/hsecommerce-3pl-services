"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Warehouse,
  PackageCheck,
  ShoppingCart,
  Gift,
  PackageOpen,
  Building2,
  Truck,
  RotateCcw,
  Container,
  Shield,
  Zap,
  TrendingUp,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { SerializedService } from "@/lib/services-data";

interface ServiceDetailPageProps {
  service: SerializedService;
  relatedServices: SerializedService[];
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Warehouse,
  PackageCheck,
  ShoppingCart,
  Gift,
  PackageOpen,
  Building2,
  Truck,
  RotateCcw,
  Container,
  Shield,
  Zap,
  TrendingUp,
  Clock,
};

// Helper component for rendering icons
const IconRenderer: React.FC<{
  iconName: string;
  className?: string;
  strokeWidth?: number;
}> = ({ iconName, className, strokeWidth }) => {
  const Icon = iconMap[iconName] || PackageCheck;
  return <Icon className={className} strokeWidth={strokeWidth} />;
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  relatedServices,
}) => {
  const ServiceIcon = iconMap[service.iconName] || PackageCheck;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src={service.hero.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/30"></div>

        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Icon Badge */}
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                <ServiceIcon className="w-8 h-8 text-black" strokeWidth={2.5} />
              </div>

              <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">
                {service.tagline}
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 font-heading">
                {service.title}
              </h1>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 md:gap-12">
                {service.hero.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1 font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/70 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-heading">
                Service Overview
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                {service.overview.description}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {service.overview.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-surface border-l-4 border-primary"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-sm text-text-primary">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Black Background */}
      <section className="bg-black py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
              {service.process.title}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 border border-white/10 p-6 h-full">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary/20 mb-4 font-heading">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-heading">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line - Desktop Only */}
                {index < service.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-primary/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 lg:py-24">
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
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {service.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 md:h-80 overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`${service.title} ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
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
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="group block"
                  >
                    <div className="border border-border hover:border-primary/50 transition-colors duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedService.hero.image}
                          alt={relatedService.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          quality={85}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

                        <div className="absolute bottom-4 left-4">
                          <div className="w-10 h-10 bg-primary flex items-center justify-center">
                            <IconRenderer
                              iconName={relatedService.iconName}
                              className="w-5 h-5 text-black"
                              strokeWidth={2.5}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-black mb-2 group-hover:text-primary transition-colors duration-300 font-heading">
                          {relatedService.title}
                        </h3>
                        <p className="text-sm text-text-secondary mb-4">
                          {relatedService.tagline}
                        </p>
                        <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                          Learn More
                          <ArrowRight
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
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
