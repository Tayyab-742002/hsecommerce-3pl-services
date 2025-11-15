"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Warehouse,
  PackageCheck,
  ShoppingCart,
  Gift,
  PackageOpen,
  Building2,
  Truck,
  RotateCcw,
  Container,
  type LucideIcon,
} from "lucide-react";

interface ServiceListingCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt: string;
  iconName: string;
  title: string;
  tagline: string;
  overview: string;
  href: string;
  stat?: {
    value: string;
    label: string;
  };
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Warehouse,
  PackageCheck,
  ShoppingCart,
  Gift,
  PackageOpen,
  Building2,
  Truck,
  RotateCcw,
  Container,
};

const ServiceListingCard = React.forwardRef<
  HTMLDivElement,
  ServiceListingCardProps
>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      iconName,
      title,
      tagline,
      overview,
      href,
      stat,
      ...props
    },
    ref
  ) => {
    const Icon = iconMap[iconName] || PackageCheck;

    return (
      <Link href={href} className="group block h-full">
        <div
          ref={ref}
          className={cn(
            "group relative w-full h-[500px] overflow-hidden rounded-xl border border-border bg-card shadow-lg",
            "transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2",
            className
          )}
          {...props}
        >
          {/* Background Image with Zoom Effect on Hover */}
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            quality={90}
          />

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/30"></div>

          {/* Content Container */}
          <div className="relative flex h-full flex-col justify-between p-6 text-card-foreground">
            {/* Top Section: Icon */}
            <div className="flex h-40 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 bg-black/20 backdrop-blur-sm">
                <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Middle Section: Details (slides up on hover) */}
            <div className="space-y-4 transition-transform duration-500 ease-in-out group-hover:-translate-y-16">
              <div>
                <h3 className="text-3xl font-bold text-white font-heading">
                  {title}
                </h3>
                <p className="text-sm text-white/80 mt-1">{tagline}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  OVERVIEW
                </h4>
                <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                  {overview}
                </p>
              </div>
            </div>

            {/* Bottom Section: Stat and Button (revealed on hover) */}
            <div className="absolute -bottom-20 left-0 w-full p-6 opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
              <div className="flex items-end justify-between gap-4">
                {stat && (
                  <div>
                    <span className="text-3xl font-bold text-primary font-heading">
                      {stat.value}
                    </span>
                    <span className="text-white/80 text-sm block mt-1">
                      {stat.label}
                    </span>
                  </div>
                )}
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200 text-sm">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);
ServiceListingCard.displayName = "ServiceListingCard";

export { ServiceListingCard };

