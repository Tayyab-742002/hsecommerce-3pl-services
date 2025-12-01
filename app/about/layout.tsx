import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - H&S E-commerce LTD | 3PL Fulfilment Experts Since 2015",
  description:
    "Learn about H&S E-commerce LTD, a leading 3PL fulfilment provider in the UK. Since 2015, we've helped over 500 businesses streamline their logistics operations with industry-leading 99.8% accuracy.",
  keywords: [
    "about H&S E-commerce",
    "3PL company UK",
    "fulfilment company history",
    "warehousing company UK",
    "logistics experts",
    "e-commerce fulfilment provider",
    "Blackburn logistics company",
  ],
  openGraph: {
    title: "About Us - H&S E-commerce LTD | 3PL Experts Since 2015",
    description:
      "Learn about H&S E-commerce LTD, a leading 3PL fulfilment provider in the UK. Since 2015, we've helped over 500 businesses streamline their logistics operations.",
    url: "https://hsecommerce.co.uk/about",
    type: "website",
  },
  alternates: {
    canonical: "https://hsecommerce.co.uk/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
