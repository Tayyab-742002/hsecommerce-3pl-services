import { Metadata } from "next";
import { HeroSection } from "@/components/ui/hero-section";
import { ServicesParallaxSection } from "@/components/ui/services-parallax";
import { AboutSnapshotSection } from "@/components/ui/about-snapshopt";
import { HowItWorks } from "@/components/ui/how-it-works";
import { CTASection } from "@/components/ui/cta-section";
import { ReviewsSection } from "@/components/ui/reviews-section";

export const metadata: Metadata = {
  title: "H&S E-commerce LTD - Your Trusted 3PL Fulfilment Partner in the UK",
  description:
    "Professional 3PL services including warehousing, pick & pack, FBA/FBM fulfilment, kitting, and container handling. Reliable B2B & B2C e-commerce fulfilment solutions to help your business grow. Serving UK businesses since 2015.",
  keywords: [
    "3PL UK",
    "fulfilment services UK",
    "warehousing UK",
    "pick and pack services",
    "FBA fulfilment UK",
    "FBM fulfilment",
    "e-commerce fulfilment",
    "B2B fulfilment",
    "B2C fulfilment",
    "third party logistics UK",
    "fulfilment centre",
    "order fulfilment UK",
    "logistics solutions",
    "Blackburn warehousing",
  ],
  openGraph: {
    title: "H&S E-commerce LTD - 3PL Fulfilment Services UK",
    description:
      "Professional 3PL services for e-commerce businesses. Warehousing, fulfilment, and logistics solutions. Serving UK businesses since 2015.",
    url: "https://hsecommerce.co.uk",
    siteName: "H&S E-commerce LTD",
    images: [
      {
        url: "https://hsecommerce.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&S E-commerce LTD - 3PL Fulfilment Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "H&S E-commerce LTD - 3PL Fulfilment Services UK",
    description:
      "Professional 3PL services for e-commerce businesses. Warehousing, fulfilment, and logistics solutions.",
    images: ["https://hsecommerce.co.uk/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hsecommerce.co.uk",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AboutSnapshotSection />
        <ServicesParallaxSection />
        <HowItWorks />
        <ReviewsSection
          title="Trusted by Leading E-commerce Brands"
          subtitle="See what our clients say about working with us"
          reviews={[
            {
              author: "Sarah Johnson",
              rating: 5,
              reviewBody:
                "H&S E-commerce has transformed our fulfilment operations. Their accuracy and speed have significantly improved our customer satisfaction. Highly recommend!",
              company: "Tech Solutions Ltd",
              datePublished: "2024-01-15",
            },
            {
              author: "Michael Chen",
              rating: 5,
              reviewBody:
                "Outstanding service from day one. The team is professional, responsive, and their FBA prep is flawless. Our Amazon business has never run smoother.",
              company: "Global Retail Co",
              datePublished: "2024-01-10",
            },
            {
              author: "Emma Williams",
              rating: 5,
              reviewBody:
                "The best 3PL partner we've worked with. Real-time tracking, same-day dispatch options, and 99.8% accuracy - they deliver on every promise.",
              company: "Fashion Forward Ltd",
              datePublished: "2024-01-08",
            },
          ]}
        />
        <CTASection />
      </main>
    </div>
  );
}
