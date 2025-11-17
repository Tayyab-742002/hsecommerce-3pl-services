import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

// CVA for card variants
const cardVariants = cva(
  "relative flex flex-col justify-between w-full p-6 overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 ease-in-out group hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        red: "bg-red-500/90 text-primary-foreground",
        blue: "bg-blue-500/90 text-primary-foreground",
        gray: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ServiceCardProps
  extends Omit<
      React.HTMLAttributes<HTMLDivElement>,
      | "onDrag"
      | "onDragStart"
      | "onDragEnd"
      | "onDragEnter"
      | "onDragExit"
      | "onDragLeave"
      | "onDragOver"
      | "onAnimationStart"
      | "onAnimationEnd"
      | "onAnimationIteration"
    >,
    VariantProps<typeof cardVariants> {
  /**
   * The main title of the card.
   */
  title: string;
  /**
   * The URL the card's link should point to.
   */
  href?: string;
  /**
   * The source URL for the decorative image.
   */
  imgSrc?: string;
  /**
   * The alt text for the decorative image, for accessibility.
   */
  imgAlt?: string;
  /**
   * Optional description text.
   */
  description?: string;
  /**
   * Optional step number.
   */
  stepNumber?: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  (
    {
      className,
      variant,
      title,
      href,
      imgSrc,
      imgAlt,
      description,
      stepNumber,
      ...props
    },
    ref
  ) => {
    // Animation variants for Framer Motion
    const cardAnimation = {
      hover: {
        scale: 1.02,
        transition: { duration: 0.3 },
      },
    };

    const imageAnimation = {
      hover: {
        scale: 1.1,
        rotate: 3,
        x: 10,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    };

    const arrowAnimation = {
      hover: {
        x: 5,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse" as const,
        },
      },
    };

    const content = (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        variants={cardAnimation}
        whileHover="hover"
        {...props}
      >
        <div className="relative z-10 flex flex-col h-full">
          {/* {stepNumber && (
            <div className="text-6xl font-bold text-primary/20 mb-2 font-heading leading-none">
              {stepNumber}
            </div>
          )} */}
          <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 font-heading text-primary">
            {title}
          </h3>
          {description && (
            <p className="text-sm leading-relaxed mb-4 opacity-70">
              {description}
            </p>
          )}
          {href && (
            <a
              href={href}
              aria-label={`Learn more about ${title}`}
              className="mt-auto flex items-center text-sm font-semibold group-hover:underline"
            >
              LEARN MORE
              <motion.div variants={arrowAnimation as Variants}>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </a>
          )}
        </div>

        {imgSrc && (
          <motion.img
            src={imgSrc}
            alt={imgAlt || title}
            className="absolute -right-8 -bottom-8 w-40 h-40 object-contain opacity-30 group-hover:opacity-100"
            variants={imageAnimation as Variants}
          />
        )}
      </motion.div>
    );

    return content;
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
