"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Ship to Us",
    description: "Send inventory to our warehouse",
    details:
      "Container unloading, intake, and initial processing handled by our expert team",
  },
  {
    id: 2,
    number: "02",
    title: "We Receive",
    description: "Inspection and stock updates",
    details: "Quality checks, inventory logging, and real-time system updates",
  },
  {
    id: 3,
    number: "03",
    title: "We Fulfil",
    description: "Pick, pack, and dispatch orders",
    details:
      "Same-day processing with quality packaging and carrier integration",
  },
  {
    id: 4,
    number: "04",
    title: "Returns",
    description: "Efficient reverse logistics",
    details: "Complete returns management with inspection and restocking",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative bg-black py-32">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader
          subtitle="How it works"
          title="Four simple steps"
          variant="dark"
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Main Card */}
              <div className="relative bg-white/5 border border-white/10 p-8 min-h-[280px] flex flex-col">
                {/* Number */}
                <div className="text-[120px] font-bold leading-none text-white/5 absolute top-4 right-6">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                    Step {step.number}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                    <span className="font-heading">{step.title}</span>
                  </h3>

                  <p className="text-sm text-white/60 mb-6">
                    {step.description}
                  </p>

                  {/* Accent line */}
                  <div className="w-12 h-px bg-primary mt-auto"></div>
                </div>
              </div>

              {/* Floating Detail Card - Appears after animation */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: -12, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-black border-2 border-primary px-5 py-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
              >
                <p className="text-xs text-white/80 leading-relaxed text-center">
                  {step.details}
                </p>
                {/* Arrow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r-2 border-b-2 border-primary rotate-45"></div>
              </motion.div>

              {/* Connector Line (not for last item on desktop) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="hidden lg:block absolute top-1/2 -right-6 w-6 h-px bg-white/20"
                  style={{ transformOrigin: "left" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12"
        >
          <div>
            <p className="text-white/60 text-lg mb-2">Start with us today</p>
            <p className="text-white text-sm">
              Join 500+ UK businesses using our 3PL services
            </p>
          </div>
          <a
            href="/contact"
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200"
          >
            Get Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};
