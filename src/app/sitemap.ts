import type { MetadataRoute } from "next";
import { getPublishedInsights, insights } from "@/lib/insights";
import { absoluteUrl } from "@/lib/site";

const staticPaths = [
  "/",
  "/blogs",
  "/overview",
  "/team",
  "/join-us",
  "/contact",
  "/events",
  "/privacy-policy",
  "/academic-alliance",
  "/services/cloud-implementation",
  "/services/managed-cloud-services",
  "/services/devops-platform-engineering",
  "/services/application-services",
  "/services/cloud-ai-skills-enablement",
  "/services/ai-automation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const published = getPublishedInsights(insights);
  return [
    ...staticPaths.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: (path === "/blogs" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: path === "/" ? 1 : path === "/blogs" ? 0.8 : 0.6,
    })),
    ...published.map((article) => ({
      url: absoluteUrl(`/blogs/${article.slug}`),
      lastModified: article.updatedAt ?? article.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
