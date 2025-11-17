"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FinancialHero } from "@/components/ui/financial-hero";
import { PortalFeatures } from "@/components/ui/portal-features";

export default function PortalPage() {
  const handleRedirect = () => {
    window.location.href = "https://dashboard.hsecommerce.co.uk";
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <FinancialHero
        title={
          <>
            Access Your
            <br />
            <span className="text-primary">Dashboard</span>
          </>
        }
        description="Manage your orders, track inventory, and monitor your fulfilment operations from one secure platform."
        buttonText="Go to Dashboard"
        buttonLink="https://dashboard.hsecommerce.co.uk"
        imageUrl1="/dashboard-5.png"
        imageUrl2="/dashboard-1.png"
        className="bg-white"
      />

      {/* Features Section */}
      <PortalFeatures />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-heading">
                Ready to Access Your Portal?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Click the button below to securely access your dashboard and
                start managing your fulfilment operations.
              </p>
              <motion.button
                onClick={handleRedirect}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-black font-bold text-lg transition-all duration-200 rounded-md shadow-lg hover:shadow-xl group"
              >
                Access Dashboard
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2.5}
                />
              </motion.button>
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Secure connection to dashboard.hsecommerce.co.uk</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
