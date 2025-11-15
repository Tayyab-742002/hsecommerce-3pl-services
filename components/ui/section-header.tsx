"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  variant?: "dark" | "light";
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  variant = "dark",
  className = "",
  align = "left",
}) => {
  const subtitleClasses =
    variant === "dark"
      ? "text-primary text-sm font-medium mb-4 tracking-widest uppercase"
      : "text-sm font-bold text-black uppercase tracking-widest mb-4";

  const titleClasses =
    variant === "dark"
      ? "text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading"
      : "text-4xl lg:text-5xl font-bold text-black font-heading";

  const alignClasses = align === "center" ? "text-center" : "";

  return (
    <div className={`mb-24 ${className} ${alignClasses}`}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={subtitleClasses}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={titleClasses}
      >
        {title}
      </motion.h2>
    </div>
  );
};
