"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  ctaText: string;
  ctaHref: string;
  title: string;
}

export const ServiceCTA: React.FC<ServiceCTAProps> = ({
  ctaText,
  ctaHref,
  title,
}) => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Ready to Get Started with {title}?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Contact our team today to discuss how we can help streamline your
            operations and scale your business.
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200 group"
          >
            {ctaText}
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              strokeWidth={2.5}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
