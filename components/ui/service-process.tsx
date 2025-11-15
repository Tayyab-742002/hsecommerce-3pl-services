"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

interface ServiceProcessProps {
  process: ProcessStep[];
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ process }) => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            How It Works
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our streamlined process ensures efficiency and accuracy at every
            step
          </p>
        </motion.div>

        <div className="space-y-24">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-16`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-primary/10" />
                </div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary flex items-center justify-center text-4xl font-bold text-black font-heading">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="text-primary text-sm font-medium mb-3 tracking-widest uppercase">
                  Step {step.step}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                  {step.title}
                </h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
