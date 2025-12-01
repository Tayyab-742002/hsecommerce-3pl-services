"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/cta-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-12 font-heading">
              Let&apos;s work together
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-black font-bold text-lg transition-all duration-300"
              >
                Get a Quote
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={2.5}
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/portal"
                className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg transition-all duration-300"
              >
                Client Portal
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
