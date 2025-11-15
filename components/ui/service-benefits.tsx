"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ServiceBenefitsProps {
  benefits: string[];
  overview: string;
}

export const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
  benefits,
  overview,
}) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-heading">
              Why Choose Us
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {overview}
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white border border-black/5 hover:border-primary/30 transition-all duration-300"
              >
                <CheckCircle2
                  className="w-6 h-6 text-primary shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <p className="text-base text-text-primary leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
