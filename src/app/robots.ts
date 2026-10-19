import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/case-studies",
        "/case-studies/",
        "/team",
        "/team/",
        "/admin",
        "/admin/",
        "/motivalogic-academy",
        "/motivalogic-academy/",
        "/academic-alliance/aws-",
      ],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
