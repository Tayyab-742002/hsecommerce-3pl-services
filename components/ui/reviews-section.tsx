"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { StructuredData, getReviewSchema } from "@/components/seo/structured-data";

interface Review {
  author: string;
  rating: number; // 1-5
  reviewBody: string;
  datePublished?: string;
  company?: string;
}

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  reviews: Review[];
  className?: string;
}

export function ReviewsSection({
  title = "What Our Clients Say",
  subtitle,
  reviews,
  className = "",
}: ReviewsSectionProps) {
  // Generate review schema
  const reviewSchema = getReviewSchema(reviews);

  return (
    <>
      {reviewSchema && <StructuredData data={reviewSchema} />}
      <section className={`py-16 md:py-24 bg-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {title && (
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 font-heading">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "fill-primary text-primary"
                          : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{review.reviewBody}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-black font-heading">
                    {review.author}
                  </p>
                  {review.company && (
                    <p className="text-sm text-gray-600">{review.company}</p>
                  )}
                  {review.datePublished && (
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(review.datePublished).toLocaleDateString(
                        "en-GB",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

