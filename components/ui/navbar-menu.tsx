"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Package, Menu, X } from "lucide-react";
import Image from "next/image";
import { services } from "@/lib/services-data";

// Map services data to navbar format
const navbarServices = services.map((service) => ({
  title: service.title,
  description: service.tagline,
  detailedDescription: service.overview.description,
  href: `/services/${service.slug}`,
  image: service.hero.image,
}));

export const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
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
              <div className="w-12 h-12 bg-primary flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300">
                <Image
                  src="/logo.JPG"
                  alt="H&S E-commerce"
                  width={44}
                  height={44}
                />
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[900px] shadow-2xl"
                      onMouseLeave={() => {
                        if (hoverTimeoutRef.current) {
                          clearTimeout(hoverTimeoutRef.current);
                        }
                        hoverTimeoutRef.current = setTimeout(() => {
                          setHoveredService(null);
                        }, 200);
                      }}
                      onMouseEnter={() => {
                        if (hoverTimeoutRef.current) {
                          clearTimeout(hoverTimeoutRef.current);
                        }
                      }}
                    >
                      <div className="bg-white border border-gray-400 p-2 shadow-2xl overflow-hidden">
                        {/* Services Grid */}
                        <div className="grid grid-cols-3 gap-px bg-gray-100">
                          {navbarServices.map((service, index) => (
                            <div
                              key={service.title}
                              className="relative bg-white"
                              onMouseEnter={() => setHoveredService(index)}
                            >
                              {/* Service Item */}
                              <Link
                                href={service.href}
                                className={`block bg-white p-4 transition-all duration-200 group relative ${
                                  hoveredService === index
                                    ? "bg-primary! shadow-sm"
                                    : ""
                                }`}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex-1">
                                    <h4
                                      className={`text-sm font-semibold transition-colors duration-200 mb-1 ${
                                        hoveredService === index
                                          ? "text-black"
                                          : "text-black group-hover:text-primary"
                                      }`}
                                    >
                                      {service.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 group-hover:text-gray-900 transition-colors">
                                      {service.description}
                                    </p>
                                  </div>
                                  <div
                                    className={`transition-all duration-200 mt-0.5 shrink-0 ${
                                      hoveredService === index
                                        ? "text-black"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    <ChevronDown
                                      className={`w-4 h-4 transition-all duration-200 ${
                                        hoveredService === index
                                          ? "rotate-180"
                                          : "group-hover:translate-x-0.5"
                                      }`}
                                      strokeWidth={2.5}
                                    />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>

                        {/* Preview Panel */}
                        <AnimatePresence mode="wait">
                          {hoveredService !== null && (
                            <motion.div
                              key={hoveredService}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                              }}
                              className="overflow-hidden border-t-2 border-gray-300 mt-3"
                              onMouseEnter={() => {
                                if (hoverTimeoutRef.current) {
                                  clearTimeout(hoverTimeoutRef.current);
                                }
                                setHoveredService(hoveredService);
                              }}
                            >
                              <div className="bg-white pt-2">
                                <div className="grid grid-cols-2 gap-0">
                                  {/* Image Section */}
                                  <div className="relative h-64 overflow-hidden">
                                    <Image
                                      src={navbarServices[hoveredService].image}
                                      alt={navbarServices[hoveredService].title}
                                      width={450}
                                      height={256}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>

                                  {/* Content Section */}
                                  <div className="p-6 flex flex-col justify-center bg-white">
                                    <h3 className="text-xl font-bold text-black mb-3 font-heading">
                                      {navbarServices[hoveredService].title}
                                    </h3>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-5">
                                      {
                                        navbarServices[hoveredService]
                                          .detailedDescription
                                      }
                                    </p>
                                    <Link
                                      href={navbarServices[hoveredService].href}
                                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-200 group/link"
                                    >
                                      Learn More
                                      <svg
                                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* View All Services Button */}
                        <div className="border-t border-gray-300 mt-3 pt-3">
                          <Link
                            href="/services"
                            className="block w-full text-center px-4 py-3 bg-primary hover:bg-primary-dark text-black font-bold text-sm transition-all duration-200"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            View All Services
                          </Link>
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
              <div className="w-12 h-12 bg-primary flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300">
                <Image
                  src="/logo.JPG"
                  alt="H&S E-commerce"
                  width={44}
                  height={44}
                />
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
                        {navbarServices.map((service) => (
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
