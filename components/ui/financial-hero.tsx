import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define the props for the component
interface FinancialHeroProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl1: string;
  imageUrl2: string;
  className?: string;
}

// Reusable animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

/**
 * A responsive hero section component with animated text and card images.
 */
export const FinancialHero = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl1,
  imageUrl2,
  className,
}: FinancialHeroProps) => {
  // Inline style for the grid background to easily use CSS variables
  const gridBackgroundStyle = {
    backgroundImage:
      "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)",
    backgroundSize: "3rem 3rem",
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-background text-foreground",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-30 md:opacity-100"
        style={gridBackgroundStyle}
      />
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background" />

      <motion.div
        className="relative container mx-auto flex min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] items-center justify-between px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 lg:flex-row flex-col gap-8 md:gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 w-full z-10">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-4 md:mt-6 max-w-xl text-base sm:text-lg text-gray-600 md:text-muted-foreground"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-6 md:mt-8">
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 h-11 md:h-12 px-6 md:px-8 text-sm md:text-base font-bold bg-primary hover:bg-primary-dark text-black rounded-md transition-all duration-200 shadow-lg hover:shadow-xl">
                {buttonText}
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right: Card Images */}
        <motion.div
          className="relative lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center my-8 lg:my-0"
          variants={cardsVariants as Variants}
        >
          {/* Back Card */}
          <motion.div
            variants={cardItemVariants as Variants}
            whileHover={{ y: -10, rotate: -5, transition: { duration: 0.3 } }}
            className="absolute h-[200px] w-[280px] sm:h-[240px] sm:w-[340px] md:h-[280px] md:w-[400px] lg:h-80 lg:w-[450px] rounded-xl md:rounded-2xl shadow-2xl transform rotate-[-4deg] md:rotate-[-6deg] translate-x-8 sm:translate-x-12 md:translate-x-16 lg:translate-x-24 overflow-hidden"
          >
            <Image
              src={imageUrl2}
              alt="Dashboard Card Back"
              width={450}
              height={320}
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Front Card */}
          <motion.div
            variants={cardItemVariants as Variants}
            whileHover={{ y: -10, rotate: 5, transition: { duration: 0.3 } }}
            className="absolute h-[200px] w-[280px] sm:h-[240px] sm:w-[340px] md:h-[280px] md:w-[400px] lg:h-80 lg:w-[450px] rounded-xl md:rounded-2xl shadow-2xl transform rotate-[4deg] md:rotate-6 shadow-2xl -translate-x-8 sm:-translate-x-12 md:-translate-x-16 lg:-translate-x-16 overflow-hidden"
          >
            <Image
              src={imageUrl1}
              alt="Dashboard Card Front"
              width={450}
              height={320}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
