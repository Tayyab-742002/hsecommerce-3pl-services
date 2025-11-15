import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Replace with your desired hostname
        port: "", // Optional: Specify a port if needed
        pathname: "/**", // Optional: Specify a path pattern
      },
    ],
  },
};

export default nextConfig;
