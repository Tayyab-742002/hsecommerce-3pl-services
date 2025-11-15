"use client";

import React from "react";
import Link from "next/link";
import { Package, Mail, Phone, MapPin } from "lucide-react";
import { services } from "@/lib/services-data";

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Client Portal", href: "/portal" },
];

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <div className="w-12 h-12 bg-primary flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300">
                <Package className="w-7 h-7 text-black" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-xl tracking-tight font-[family-name:var(--font-heading)]">
                  H&S E-COMMERCE
                </div>
                <div className="text-primary text-[10px] font-medium tracking-widest uppercase">
                  3PL Solutions
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Professional 3PL fulfilment services for growing e-commerce
              businesses across the UK.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <span className="text-white/60 hover:text-primary text-sm font-bold">
                  in
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <span className="text-white/60 hover:text-primary text-sm font-bold">
                  𝕏
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <span className="text-white/60 hover:text-primary text-sm font-bold">
                  f
                </span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/60 text-sm hover:text-primary transition-colors duration-200 inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-sm hover:text-primary transition-colors duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@hsecommerce.co.uk"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-primary transition-colors duration-200 group"
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-primary"
                    strokeWidth={2}
                  />
                  <span>info@hsecommerce.co.uk</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+441234567890"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-primary transition-colors duration-200 group"
                >
                  <Phone
                    className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-primary"
                    strokeWidth={2}
                  />
                  <span>+44 1234 567890</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span>
                    Warehouse Address
                    <br />
                    United Kingdom
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} H&S E-commerce LTD. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-white/40 text-xs hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/40 text-xs hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
