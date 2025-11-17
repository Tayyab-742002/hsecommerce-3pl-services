"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1724709162875-fe100dd0e04b?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1685119166946-d4050647b0e3?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1607227063002-677dc5fdf96f?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1664735245698-b05abf000d4c?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1609143739217-01b60dad1c67?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1594392175511-30eca83d51c8?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1709715357564-ab64e091ead9?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1721937127582-ed331de95a04?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1608535002897-27b2aa592456?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1721937718756-3bfec49f42a2?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1672552226380-486fe900b322?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1605705658744-45f0fe8f9663?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1736951889122-c189f9f2911e?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1747006116196-fc20e136e4c0?w=400&h=400&fit=crop&q=80",
  },
];

const shuffle = (array: typeof squareData) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full overflow-hidden bg-transparent"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());
  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };
  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] gap-1 bg-transparent">
      {squares.map((sq) => sq)}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative bg-white pt-20 sm:pt-24 lg:pt-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-20 min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] py-8 sm:py-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-4 sm:pt-0"
          >
            <span className="inline-block mb-4 sm:mb-6 text-[10px] sm:text-xs font-bold text-black uppercase tracking-widest border-l-4 border-primary pl-3 sm:pl-4">
              UK&apos;s Leading 3PL Provider
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 sm:mb-8 leading-[1.05] tracking-tight font-heading">
              Your Trusted
              <br />
              3PL Fulfilment
              <br />
              Partner
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-8 sm:mb-10 leading-relaxed max-w-xl">
              E-commerce (B2B & B2C) Fulfilment, Storage, Container Handling &
              More. We manage your inventory efficiently so you can focus on
              sales.
            </p>

            {/* Features List */}
            {/* <div className="space-y-3 mb-10">
              {[
                "Free FBA/FBM Product Inspection",
                "Same-Day Dispatch Available",
                "Real-Time Inventory Tracking",
                "Dedicated Account Manager",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-primary shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-sm font-medium text-text-primary">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-16">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-black font-bold text-sm sm:text-base transition-all duration-200"
              >
                Get a Quote
                <ArrowRight
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2.5}
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-black text-black font-bold text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-200"
              >
                View Services
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-black mb-1 font-heading">
                  50K+
                </div>
                <div className="text-xs text-text-secondary font-medium uppercase tracking-wider">
                  Orders Monthly
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-black mb-1 font-heading">
                  99.8%
                </div>
                <div className="text-xs text-text-secondary font-medium uppercase tracking-wider">
                  Accuracy Rate
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-black mb-1 font-heading">
                  24/7
                </div>
                <div className="text-xs text-text-secondary font-medium uppercase tracking-wider">
                  Support
                </div>
              </div>
            </div> */}
          </motion.div>

          {/* Right Side: Shuffle Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ShuffleGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
