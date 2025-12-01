import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Quote | H&S E-commerce LTD",
  description:
    "Get in touch with H&S E-commerce LTD for professional 3PL fulfilment services. Contact us for a free quote on warehousing, pick & pack, FBA/FBM fulfilment, and more. Located in Blackburn, UK.",
  keywords: [
    "contact 3PL UK",
    "fulfilment quote",
    "warehouse quote",
    "3PL contact",
    "Blackburn logistics",
    "get quote",
    "3PL enquiry",
    "fulfilment services contact",
  ],
  openGraph: {
    title: "Contact Us - Get a Free Quote | H&S E-commerce LTD",
    description:
      "Get in touch with H&S E-commerce LTD for professional 3PL fulfilment services. Contact us for a free quote.",
    url: "https://hsecommerce.co.uk/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://hsecommerce.co.uk/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

