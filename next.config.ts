import type { NextConfig } from "next";
import { legacyRedirects } from "./src/lib/legacy-redirects";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  productionBrowserSourceMaps: false,
  serverExternalPackages: [
    "@aws-sdk/client-sesv2",
    "@aws-sdk/client-dynamodb",
  ],
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
      ...legacyRedirects,
    ];
  },
};

export default nextConfig;
