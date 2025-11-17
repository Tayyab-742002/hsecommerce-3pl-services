import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar-menu";
import { Footer } from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/next";
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
  title: "H&S E-commerce LTD - Your Trusted 3PL Fulfilment Partner in the UK",
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
  ],
  authors: [{ name: "H&S E-commerce LTD" }],
  openGraph: {
    title: "H&S E-commerce LTD - 3PL Fulfilment Services UK",
    description:
      "Professional 3PL services for e-commerce businesses. Warehousing, fulfilment, and logistics solutions.",
    type: "website",
    locale: "en_GB",
  },
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
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
