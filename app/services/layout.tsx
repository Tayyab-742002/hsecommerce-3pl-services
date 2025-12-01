import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Complete 3PL Solutions | H&S E-commerce LTD",
  description:
    "Discover our comprehensive 3PL services including warehousing, pick & pack, FBA/FBM fulfilment, kitting, container handling, and more. Professional fulfilment solutions for UK e-commerce businesses.",
  keywords: [
    "3PL services UK",
    "fulfilment services",
    "warehousing services",
    "pick and pack services",
    "FBA fulfilment",
    "FBM fulfilment",
    "kitting services",
    "container handling",
    "returns management",
    "cross docking",
    "B2B fulfilment",
    "e-commerce logistics",
  ],
  openGraph: {
    title: "Our Services - Complete 3PL Solutions | H&S E-commerce LTD",
    description:
      "Discover our comprehensive 3PL services including warehousing, pick & pack, FBA/FBM fulfilment, and more.",
    url: "https://hsecommerce.co.uk/services",
    type: "website",
  },
  alternates: {
    canonical: "https://hsecommerce.co.uk/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

