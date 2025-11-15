"use client";

import React from "react";
import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface ServiceStatsProps {
  stats: Stat[];
}

export const ServiceStats: React.FC<ServiceStatsProps> = ({ stats }) => {
  return (
    <section className="py-24 bg-white border-y border-black/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-text-secondary font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
