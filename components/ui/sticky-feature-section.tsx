"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Custom Hook for Scroll Animation
const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};

interface Feature {
  title: string;
  description: string;
  imageUrl?: string;
  bgColor?: string;
  textColor?: string;
}

interface StickyFeatureSectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
}

// Header Component
const AnimatedHeader = ({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) => {
  const [headerRef, headerInView] = useScrollAnimation();
  const [pRef, pInView] = useScrollAnimation();

  if (!title && !subtitle) return null;

  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {title && (
        <h2
          ref={headerRef}
          className={`text-5xl font-bold transition-all duration-700 ease-out text-white font-heading ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          ref={pRef}
          className={`text-lg text-white/70 mt-4 transition-all duration-700 ease-out delay-200 ${
            pInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export function StickyFeatureSection({
  title,
  subtitle,
  features,
  className = "",
}: StickyFeatureSectionProps) {
  // Dark yellow background colors for cards
  const defaultBgColors = ["bg-primary"];

  const defaultTextColors = "text-foreground/50";

  return (
    <div className={`bg-black font-sans ${className}`}>
      <div className="px-4 sm:px-6 md:px-8 lg:px-[5%]">
        <div className="max-w-7xl mx-auto">
          <section className="py-24 md:py-48 flex flex-col items-center">
            <AnimatedHeader title={title} subtitle={subtitle} />

            <div className="w-full">
              {features.map((feature, index) => {
                const bgColor =
                  feature.bgColor ||
                  defaultBgColors[index % defaultBgColors.length];
                const textColor = feature.textColor || defaultTextColors;
                const imageUrl =
                  feature.imageUrl ||
                  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80";

                return (
                  <div
                    key={index}
                    className={`${bgColor} grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 p-8 md:p-12  mb-16 sticky shadow-2xl border border-gray-600`}
                    style={{ top: "120px" }}
                  >
                    {/* Card Content */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground font-heading">
                        {feature.title}
                      </h3>
                      <p className={textColor}>{feature.description}</p>
                    </div>

                    {/* Card Image */}
                    <div className="image-wrapper mt-8 md:mt-0">
                      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={imageUrl}
                          alt={feature.title}
                          fill
                          className="object-cover"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
