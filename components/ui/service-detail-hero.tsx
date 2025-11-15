"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceDetailHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
}

export const ServiceDetailHero: React.FC<ServiceDetailHeroProps> = ({
  title,
  subtitle,
  heroImage,
  description,
}) => {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="relative h-[70vh] min-h-[600px]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-8 w-full pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-primary text-sm font-medium mb-4 tracking-widest uppercase"
              >
                {subtitle}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] font-heading"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl"
              >
                {description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

