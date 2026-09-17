import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/cloud-training",
        destination: "/services/cloud-ai-skills-enablement",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
