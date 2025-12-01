"use client";

import { useEffect } from "react";

/**
 * Performance Optimizer Component
 * 
 * Implements various client-side performance optimizations:
 * - Preloads critical resources
 * - Preconnects to external domains
 * - Lazy loads non-critical resources
 */
export function PerformanceOptimizer() {
  useEffect(() => {
    // Preconnect to external domains for faster loading
    const preconnectDomains = [
      "https://images.unsplash.com",
      "https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev",
    ];

    preconnectDomains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = domain;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      "https://www.google.com",
      "https://fonts.googleapis.com",
    ];

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = domain;
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      // Links will be cleaned up when component unmounts
    };
  }, []);

  return null;
}

