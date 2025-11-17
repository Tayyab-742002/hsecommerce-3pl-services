"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./section-header";
import { services } from "@/lib/services-data";

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
        paddingLeft: "8px",
        paddingRight: "8px",
      }}
      className="sm:px-3"
    >
      <div className="relative h-screen min-h-[600px] sm:min-h-[700px]">
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
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12"
    >
      <div className="max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Heading */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <p className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">
            {subheading}
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] sm:leading-[1.05] font-heading">
            {heading}
          </h3>
        </div>

        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-3xl">
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 mb-6 sm:mb-8 md:mb-10 max-h-[200px] sm:max-h-none overflow-y-auto sm:overflow-visible">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <div className="w-1 h-1 bg-primary mt-1.5 sm:mt-2 shrink-0 rounded-full"></div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <Link
            href={href}
            className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 bg-primary hover:bg-primary-dark text-black font-bold text-xs sm:text-sm transition-all duration-200 group"
          >
            Learn More
            <ArrowRight
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ViewMoreServicesCard = () => {
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
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12"
    >
      <div className="max-w-6xl w-full">
        <div className="bg-black border-2 border-primary p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-6 font-heading">
            Explore All Services
          </h3>
          <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
            Discover our complete range of 3PL solutions designed to streamline
            your e-commerce operations.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-primary hover:bg-primary-dark text-black font-bold text-sm sm:text-base transition-all duration-200 group"
          >
            View More Services
            <ArrowRight
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
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
          className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto text-center mt-4 sm:mt-6"
        >
          From warehousing to final mile delivery, we provide end-to-end
          fulfilment services designed to scale with your business.
        </motion.p>
      </div>

      {/* Parallax Services - Show only first 3 */}
      {services.slice(0, 4).map((service, index) => {
        // For the last card (3rd one), show "View More Services" instead
        if (index === 3) {
          return (
            <div
              key={`view-more-${index}`}
              style={{
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
              className="sm:px-3"
            >
              <div className="relative h-screen min-h-[600px] sm:min-h-[700px]">
                <StickyImage imgUrl={service.hero.image} />
                <ViewMoreServicesCard />
              </div>
            </div>
          );
        }

        return (
          <TextParallaxContent
            key={index}
            imgUrl={service.hero.image}
            subheading={service.title}
            heading={service.title}
            description={service.overview.description}
            features={service.overview.features}
            href={`/services/${service.slug}`}
          />
        );
      })}

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
