"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

const css = `
.candy-bg {
  background-color: hsl(0 0% 96%, 2%);
  background-image: linear-gradient(
    135deg,
    hsl(0 0% 96% / 0.15) 25%,
    transparent 25.5%,
    transparent 50%,
    hsl(0 0% 96% / 0.15) 50.5%,
    hsl(0 0% 96% / 0.15) 75%,
    transparent 75.5%,
    transparent
  );
  background-size: 10px 10px;
}`;

interface BarChartProps {
  value: number;
  label: string;
  className?: string;
  showToolTip?: boolean;
  delay?: number;
}

const BarChart = ({
  value,
  label,
  className = "",
  showToolTip = false,
  delay = 0,
}: BarChartProps) => {
  const [isInView, setIsInView] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="group relative h-full w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: "spring",
        damping: 10,
      }}
    >
      <div className="candy-bg relative h-full w-full overflow-hidden rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem]">
        <motion.div
          initial={{ opacity: 0, y: 100, height: 0 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, height: `${value}%` }
              : { opacity: 0, y: 100, height: 0 }
          }
          transition={{ duration: 0.8, type: "spring", damping: 20, delay }}
          className={cn(
            "absolute bottom-0 mt-auto w-full rounded-2xl sm:rounded-[2.5rem] md:rounded-[40px] bg-primary/50 p-2 sm:p-2.5 md:p-3 text-white",
            className
          )}
        >
          <div className="relative flex h-10 sm:h-12 md:h-15 w-full items-center justify-center gap-1 sm:gap-2 rounded-full bg-black/20 tracking-tighter">
            {isInView && (
              <NumberFlow
                value={value}
                suffix="%"
                className="text-xs sm:text-sm md:text-base font-bold"
              />
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100, height: 0 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, height: `${value}%` }
            : { opacity: 0, y: 100, height: 0 }
        }
        transition={{ duration: 0.8, type: "spring", damping: 15, delay }}
        className="absolute bottom-0 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={
            isInView
              ? {
                  opacity: showToolTip ? 1 : 0,
                  y: showToolTip ? 0 : 100,
                }
              : { opacity: 0, y: 100 }
          }
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 15,
            delay: delay + 0.3,
          }}
          className={cn(
            "absolute -top-7 sm:-top-8 md:-top-9 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg sm:rounded-xl bg-primary px-1.5 sm:px-2 py-0.5 sm:py-1 text-black font-bold text-xs sm:text-sm whitespace-nowrap",
            className
          )}
        >
          <div
            className={cn(
              "absolute -bottom-7 sm:-bottom-8 md:-bottom-9 left-1/2 size-3 sm:size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-primary transition-all duration-300 ease-in-out"
            )}
          />
          <svg
            className={cn(
              "absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5",
              className.includes("bg-sky-400") ? "text-sky-400" : "text-primary"
            )}
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.83855 8.41381C4.43827 9.45255 5.93756 9.45255 6.53728 8.41381L9.65582 3.01233C10.2555 1.97359 9.50589 0.675159 8.30646 0.675159H2.06937C0.869935 0.675159 0.120287 1.97359 0.720006 3.01233L3.83855 8.41381Z"
              fill="currentColor"
            />
          </svg>
          conversions
        </motion.div>
      </motion.div>
      <p className="absolute -bottom-6 sm:-bottom-7 md:-bottom-8 left-1/2 -translate-x-1/2 w-full text-center tracking-tight text-white/70 text-xs sm:text-sm px-1 wrap-break-word">
        {label}
      </p>
    </motion.div>
  );
};

interface StatsSectionProps {
  title?: string;
  description?: string;
  stats?: Array<{
    value: number;
    label: string;
    className?: string;
    showToolTip?: boolean;
    delay?: number;
  }>;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  title = "We don't believe in talk we Deliver Results",
  description = "Our accuracy and performance metrics speak for themselves",
  stats = [
    { value: 78, label: "Industry Average", delay: 0.2 },
    { value: 85, label: "Top Competitors", delay: 0.4 },
    {
      value: 99.8,
      label: "H&S E-commerce",
      className: "bg-primary",
      showToolTip: true,
      delay: 0.6,
    },
    { value: 82, label: "Market Standard", delay: 0.8 },
  ],
}) => {
  return (
    <section className="bg-black py-20 md:py-32 border-t border-white/10">
      <style>{css}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full font-heading font-medium text-white px-2 sm:px-0"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="my-3 sm:my-4 tracking-tight text-white/60 px-4 sm:px-6 md:px-8 lg:px-15 text-sm sm:text-base md:text-lg"
          >
            {description}
          </motion.p>
        </div>
        <div className="relative mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex h-48 sm:h-64 md:h-80 lg:h-96 xl:h-112 max-w-4xl items-center justify-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-6 px-2 sm:px-0 pb-8 sm:pb-10 md:pb-12">
          {stats.map((stat, index) => (
            <BarChart key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
