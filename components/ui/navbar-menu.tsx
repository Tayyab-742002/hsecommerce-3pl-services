"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Package, Menu, X } from "lucide-react";
import Image from "next/image";
import { services as servicesData } from "@/lib/services-data";

// Transform services data for navbar use
const getNavbarServices = () => {
  return servicesData.map((service) => ({
    title: service.title,
    description: service.tagline,
    detailedDescription: service.overview.description,
    href: `/services/${service.slug}`,
    image: service.hero.image,
  }));
};

export const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Get services for navbar
  const services = useMemo(() => getNavbarServices(), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-xl shadow-2xl" : "bg-black"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-primary rounded-sm flex items-center justify-center group-hover:bg-primary-dark transition-all duration-300">
                <Package className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-lg tracking-tight font-heading">
                  H&S E-COMMERCE
                </div>
                <div className="text-primary text-[10px] font-medium tracking-widest uppercase">
                  3PL Solutions
                </div>
              </div>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="px-5 py-2 text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                HOME
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="px-5 py-2 text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                  SERVICES
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px]"
                    >
                      <div className="bg-black border border-primary/20 shadow-2xl">
                        {/* View All Services Link */}
                        <div className="border-b border-primary/10">
                          <Link
                            href="/services"
                            className="block px-5 py-4 bg-primary/5 hover:bg-primary/10 transition-all duration-200 group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-200">
                                View All Services
                              </span>
                              <svg
                                className="w-4 h-4 text-primary/30 group-hover:text-primary transition-colors duration-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-px bg-primary/10">
                          {services.map((service, index) => (
                            <div
                              key={service.title}
                              className="relative"
                              onMouseEnter={() => setHoveredService(index)}
                              onMouseLeave={() => setHoveredService(null)}
                            >
                              <Link
                                href={service.href}
                                className="block bg-black p-5 hover:bg-primary/5 transition-all duration-200 group border-b border-r border-primary/10"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-200 mb-1">
                                      {service.title}
                                    </h4>
                                    <p className="text-xs text-white/50 leading-relaxed">
                                      {service.description}
                                    </p>
                                  </div>
                                  <div className="text-primary/30 group-hover:text-primary transition-colors duration-200 mt-0.5">
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </Link>

                              {/* Nested Dropdown on Hover */}
                              <AnimatePresence>
                                {hoveredService === index && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-full top-0 ml-1 w-[380px] z-50"
                                  >
                                    <div className="bg-black border border-primary/20 shadow-2xl overflow-hidden">
                                      {/* Image */}
                                      <div className="relative h-40 overflow-hidden">
                                        <Image
                                          src={service.image}
                                          alt={service.title}
                                          width={380}
                                          height={200}
                                          className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                                      </div>

                                      {/* Content */}
                                      <div className="p-5">
                                        <h3 className="text-base font-bold text-white mb-2 font-heading">
                                          {service.title}
                                        </h3>
                                        <p className="text-xs text-white/60 leading-relaxed mb-4">
                                          {service.detailedDescription}
                                        </p>
                                        <Link
                                          href={service.href}
                                          className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary-dark transition-colors duration-200"
                                        >
                                          Learn More
                                          <svg
                                            className="w-3.5 h-3.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M9 5l7 7-7 7"
                                            />
                                          </svg>
                                        </Link>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className="px-5 py-2 text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                ABOUT
              </Link>

              <Link
                href="/portal"
                className="px-5 py-2 text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                PORTAL
              </Link>

              <Link
                href="/contact"
                className="px-5 py-2 text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                CONTACT
              </Link>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="px-7 py-3 bg-primary hover:bg-primary-dark text-black font-bold text-[13px] tracking-wide transition-all duration-200"
            >
              GET QUOTE
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMobileMenuOpen
            ? "bg-black/95 backdrop-blur-xl shadow-2xl"
            : "bg-black"
        }`}
      >
        <div className="px-5">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5"
              onClick={closeMobileMenu}
            >
              <div className="w-9 h-9 bg-primary rounded-sm flex items-center justify-center">
                <Package className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-tight">
                  H&S E-COMMERCE
                </div>
                <div className="text-primary text-[9px] font-medium tracking-widest">
                  3PL SOLUTIONS
                </div>
              </div>
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-primary/20 bg-black"
            >
              <div className="px-5 py-5 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-primary/5 transition-all duration-200"
                >
                  HOME
                </Link>

                {/* Services */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-primary/5 transition-all duration-200"
                  >
                    SERVICES
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-px bg-primary/5 mt-1"
                      >
                        <Link
                          href="/services"
                          onClick={closeMobileMenu}
                          className="block px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-all duration-200 border-b border-primary/20"
                        >
                          View All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={closeMobileMenu}
                            className="block px-6 py-2.5 text-xs font-medium text-white/60 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-primary/5 transition-all duration-200"
                >
                  ABOUT
                </Link>

                <Link
                  href="/portal"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-primary/5 transition-all duration-200"
                >
                  PORTAL
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-primary/5 transition-all duration-200"
                >
                  CONTACT
                </Link>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full mt-4 px-6 py-3.5 bg-primary hover:bg-primary-dark text-black font-bold text-sm text-center transition-all duration-200"
                >
                  GET QUOTE
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
