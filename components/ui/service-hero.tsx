"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SerializedService } from "@/lib/services-data";

interface ServiceHeroProps {
  service: SerializedService;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Content Section with Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:max-w-none xl:max-w-2xl"
          >
            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4 sm:mb-6"
            >
              <p className="text-primary text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
                {service.tagline}
              </p>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-[1.05] tracking-tight font-heading"
              style={{ wordBreak: "break-word" }}
            >
              {service.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-12 leading-relaxed max-w-xl"
            >
              {service.overview.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-black font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base group w-full sm:w-auto"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image with 3D Shadow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] mt-8 lg:mt-0"
          >
            <div className="relative h-full w-full">
              {/* Image Container with 3D Effect */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative h-full w-full rounded-lg overflow-hidden"
                style={{
                  boxShadow: `
                    0 25px 80px rgba(100, 100, 100, 0.4),
                    0 15px 40px rgba(80, 80, 80, 0.3),
                    0 8px 20px rgba(60, 60, 60, 0.2),
                    0 0 0 1px rgba(255, 255, 255, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.08)
                  `,
                }}
              >
                <Image
                  src={service.hero.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"
      />
    </section>
  );
}
