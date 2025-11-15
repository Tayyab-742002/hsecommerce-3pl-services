"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./section-header";

const servicesData = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1727199079123-ba845d5ab4f6?w=2000&h=1200&fit=crop&q=80",
    subheading: "Storage Solutions",
    heading: "Warehousing & Storage",
    description:
      "State-of-the-art warehouse facilities with 24/7 security, climate control, and advanced inventory management systems.",
    features: [
      "Real-time stock tracking and reporting",
      "Secure, climate-controlled facilities",
      "Flexible storage options (pallets, shelving, bulk)",
      "Advanced warehouse management system",
    ],
    href: "/services#warehousing",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1703925152869-0a4e47c74bc3?w=2000&h=1200&fit=crop&q=80",
    subheading: "Order Fulfilment",
    heading: "Pick & Pack Services",
    description:
      "Fast, accurate order processing with same-day dispatch available. Professional packaging materials and quality checks ensure products arrive safely.",
    features: [
      "Same-day dispatch for urgent orders",
      "Quality control at every stage",
      "Custom packaging solutions",
      "Integration with all major platforms",
    ],
    href: "/services#pick-pack",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?w=2000&h=1200&fit=crop&q=80",
    subheading: "Amazon Ready",
    heading: "FBA & FBM Fulfilment",
    description:
      "Expert Amazon preparation services including labeling, inspection, and shipment creation. Free product inspection with every FBA/FBM order.",
    features: [
      "Free product inspection included",
      "Amazon-compliant labeling and prep",
      "Fast turnaround times",
      "Multi-channel fulfilment support",
    ],
    href: "/services#fba-fbm",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1600186755589-84242bd8368f?w=2000&h=1200&fit=crop&q=80",
    subheading: "Product Assembly",
    heading: "Kitting & Bundling",
    description:
      "Custom product bundling and kit assembly services. Perfect for promotional packages, gift sets, and multi-item product combinations.",
    features: [
      "Custom bundle creation",
      "Gift set assembly and wrapping",
      "Promotional package preparation",
      "Quality control and inspection",
    ],
    href: "/services#kitting",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1617909517211-c4e4275bf5b6?w=2000&h=1200&fit=crop&q=80",
    subheading: "B2B Solutions",
    heading: "Wholesale Fulfilment",
    description:
      "Specialized B2B fulfilment for wholesale orders. Pallet management, bulk picking, and customized shipping solutions for trade customers.",
    features: [
      "Bulk order processing",
      "Pallet management and shipping",
      "Customized B2B solutions",
      "EDI integration available",
    ],
    href: "/services#wholesale",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1703194531119-e8b98a555cb6?w=2000&h=1200&fit=crop&q=80",
    subheading: "Logistics",
    heading: "Container Unloading",
    description:
      "Expert container unloading and devanning services. Full inventory check-in, damage assessment, and immediate warehouse allocation.",
    features: [
      "Professional unloading team",
      "Damage assessment and reporting",
      "Immediate inventory check-in",
      "Fast warehouse allocation",
    ],
    href: "/services#container-unloading",
  },
];

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  description,
  features,
  href,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  description: string;
  features: string[];
  href: string;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-100vh">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy
          heading={heading}
          subheading={subheading}
          description={description}
          features={features}
          href={href}
        />
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-black/60"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
  description,
  features,
  href,
}: {
  subheading: string;
  heading: string;
  description: string;
  features: string[];
  href: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute inset-0 flex items-center justify-center px-6 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <div className="mb-8 lg:mb-12">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-3">
            {subheading}
          </p>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] font-heading">
            {heading}
          </h3>
        </div>

        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 sm:p-10 lg:p-12 max-w-3xl">
          <p className="text-white text-base sm:text-lg leading-relaxed mb-8">
            {description}
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1 h-1 bg-primary mt-2 shrink-0 rounded-full"></div>
                <p className="text-sm text-white/90">{feature}</p>
              </div>
            ))}
          </div>

          <Link
            href={href}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-black font-bold text-sm transition-all duration-200 group"
          >
            Learn More
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesParallaxSection = () => {
  return (
    <div className="bg-white">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <SectionHeader
          subtitle="Our Services"
          title="Complete 3PL Solutions"
          variant="light"
          align="center"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-text-secondary max-w-2xl mx-auto text-center"
        >
          From warehousing to final mile delivery, we provide end-to-end
          fulfilment services designed to scale with your business.
        </motion.p>
      </div>

      {/* Parallax Services */}
      {servicesData.map((service, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={service.imgUrl}
          subheading={service.subheading}
          heading={service.heading}
          description={service.description}
          features={service.features}
          href={service.href}
        />
      ))}

      {/* CTA Section */}
      {/* <div className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
            Ready to streamline your fulfilment?
          </h3>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help your business
            grow with professional 3PL services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </Link>
        </div>
      </div> */}
    </div>
  );
};
