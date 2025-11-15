"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AboutSnapshotProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  primaryImageSrc: string;
  secondaryImageSrc: string;
  reverseLayout?: boolean;
  stats?: { value: string; label: string }[];
  ctaText?: string;
  ctaHref?: string;
}

const AboutSnapshot: React.FC<AboutSnapshotProps> = ({
  title,
  description,
  primaryImageSrc,
  secondaryImageSrc,
  reverseLayout = false,
  stats,
  ctaText,
  ctaHref,
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2";
  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      <div className="container max-w-[1400px] w-full px-8 relative z-10 mx-auto">
        <motion.div
          className={`grid grid-cols-1 gap-16 md:gap-12 w-full items-center ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Content */}
          <motion.div
            className={`flex flex-col items-start gap-6 max-w-[600px] mx-auto md:mx-0 ${textOrderClass}`}
            variants={itemVariants as Variants}
          >
            <div className="w-12 h-1 bg-primary"></div>

            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading">
              {title}
            </h2>

            <div className="text-white/60 text-base md:text-lg leading-relaxed space-y-4">
              {description}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-8 w-full pt-6 border-t border-white/10">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1 font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200 mt-4"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </Link>
            )}
          </motion.div>

          {/* Image Content */}
          <motion.div
            className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[350px] md:max-w-[550px]`}
            variants={itemVariants as Variants}
          >
            {/* Decorative Background Element */}
            <motion.div
              className="absolute w-[300px] h-[320px] md:w-[500px] md:h-[520px] bg-primary/5 z-0"
              style={{
                top: reverseLayout ? "auto" : "10%",
                bottom: reverseLayout ? "10%" : "auto",
                left: reverseLayout ? "auto" : "-15%",
                right: reverseLayout ? "-15%" : "auto",
                transform: reverseLayout
                  ? "translate(0, 0)"
                  : "translateY(10%)",
              }}
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? -20 : -30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${secondaryImageSrc})`,
                }}
              />
            </motion.div>

            {/* Main Image Card */}
            <motion.div
              className="relative w-full h-[420px] md:h-[650px] bg-white/5 backdrop-blur-sm border border-white/10 z-10 overflow-hidden"
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? 20 : 30 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="p-0 h-full">
                <div
                  className="h-full relative"
                  style={{
                    backgroundSize: "100% 100%",
                  }}
                >
                  {/* Primary Image */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${primaryImageSrc})`,
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div
        className="absolute w-full h-px bottom-0 left-0 z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(253,185,19,0.2) 0%, rgba(253,185,19,0) 100%)",
        }}
      />
    </section>
  );
};

// Main Export Component with H&S E-commerce data
export const AboutSnapshotSection = () => {
  return (
    <>
      <AboutSnapshot
        title="Professional 3PL Services You Can Trust"
        description={
          <>
            <p>
              H&S E-commerce LTD provides reliable 3PL services to help
              eCommerce businesses grow. From container unloading to order
              fulfilment, we manage your inventory efficiently so you can focus
              on sales.
            </p>
            <p>
              Our state-of-the-art warehouse facilities in the UK are equipped
              with advanced technology and staffed by experienced logistics
              professionals. We understand the challenges of modern e-commerce
              and provide solutions that scale with your business.
            </p>
          </>
        }
        primaryImageSrc="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=1000&fit=crop&q=80"
        secondaryImageSrc="https://images.unsplash.com/photo-1592228533283-d78f7c1cf453?w=800&h=1000&fit=crop&q=80"
        reverseLayout={false}
        stats={[
          { value: "10K+", label: "SQ FT Warehouse" },
          { value: "500+", label: "Clients" },
          { value: "24/7", label: "Support" },
        ]}
        ctaText="Learn More About Us"
        ctaHref="/about"
      />

      {/* <AboutSnapshot
        title="Technology-Driven Fulfilment Solutions"
        description={
          <>
            <p>
              We leverage cutting-edge warehouse management systems and
              real-time inventory tracking to ensure accuracy and efficiency at
              every step. Our technology integrates seamlessly with all major
              e-commerce platforms.
            </p>
            <p>
              From Amazon FBA preparation to B2B wholesale fulfilment, our
              flexible solutions adapt to your specific needs. Every client
              receives a dedicated account manager and transparent reporting on
              all operations.
            </p>
          </>
        }
        primaryImageSrc="https://images.unsplash.com/photo-1698321170838-27f96d9463af?w=800&h=1000&fit=crop&q=80"
        secondaryImageSrc="https://images.unsplash.com/photo-1641290451977-a427586acf49?w=800&h=1000&fit=crop&q=80"
        reverseLayout={true}
        stats={[
          { value: "99.8%", label: "Accuracy" },
          { value: "1M+", label: "Items/Month" },
          { value: "Same Day", label: "Dispatch" },
        ]}
        ctaText="View Our Services"
        ctaHref="/services"
      /> */}
    </>
  );
};

export default AboutSnapshot;
