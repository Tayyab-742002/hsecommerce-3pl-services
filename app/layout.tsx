import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar-menu";
import { Footer } from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/next";
import { StructuredData, organizationSchema, localBusinessSchema } from "@/components/seo/structured-data";
import { PerformanceOptimizer } from "@/components/ui/performance-optimizer";
// Primary font for body text - clean and professional
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Secondary font for headings - bold and modern
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Third font for headings - bold and modern
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://hsecommerce.co.uk"),
  title: {
    default: "H&S E-commerce LTD - Your Trusted 3PL Fulfilment Partner in the UK",
    template: "%s | H&S E-commerce LTD",
  },
  description:
    "Professional 3PL services including warehousing, pick & pack, FBA/FBM fulfilment, kitting, and container handling. Reliable B2B & B2C e-commerce fulfilment solutions to help your business grow.",
  keywords: [
    "3PL",
    "fulfilment",
    "warehousing",
    "FBA",
    "FBM",
    "pick and pack",
    "UK logistics",
    "e-commerce fulfilment",
    "B2B fulfilment",
    "B2C fulfilment",
    "3PL UK",
    "third party logistics",
    "fulfilment centre UK",
    "warehouse management",
    "Amazon FBA prep",
    "order fulfilment",
    "logistics solutions",
    "Blackburn logistics",
    "UK warehousing",
  ],
  authors: [{ name: "H&S E-commerce LTD" }],
  creator: "H&S E-commerce LTD",
  publisher: "H&S E-commerce LTD",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://hsecommerce.co.uk",
    siteName: "H&S E-commerce LTD",
    title: "H&S E-commerce LTD - 3PL Fulfilment Services UK",
    description:
      "Professional 3PL services for e-commerce businesses. Warehousing, fulfilment, and logistics solutions.",
    images: [
      {
        url: "https://hsecommerce.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&S E-commerce LTD - 3PL Fulfilment Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "H&S E-commerce LTD - 3PL Fulfilment Services UK",
    description:
      "Professional 3PL services for e-commerce businesses. Warehousing, fulfilment, and logistics solutions.",
    images: ["https://hsecommerce.co.uk/og-image.jpg"],
    creator: "@hsecommerce",
  },
  alternates: {
    canonical: "https://hsecommerce.co.uk",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
  category: "Logistics & Fulfilment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${montserrat.variable} antialiased font-sans`}
      >
        <PerformanceOptimizer />
        <StructuredData data={organizationSchema} />
        <StructuredData data={localBusinessSchema} />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
