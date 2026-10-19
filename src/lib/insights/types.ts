export const INSIGHT_CATEGORIES = [
  "AI & Automation",
  "AWS & Cloud",
  "DevOps & Platform Engineering",
  "Cloud Operations",
  "FinOps",
  "Security",
  "Application Modernisation",
  "Company News",
] as const;

export type InsightCategory = (typeof INSIGHT_CATEGORIES)[number];

export type InsightStatus = "draft" | "published";

export type InsightCta = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  label: string;
};

export type RelatedService = {
  title: string;
  href: string;
  body: string;
};

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      fit?: "contain" | "cover";
    };

export type Insight = {
  slug: string;
  status: InsightStatus;
  featured?: boolean;
  title: string;
  excerpt: string;
  category: InsightCategory;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  author: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageFit: "contain" | "cover";
  seoTitle: string;
  seoDescription: string;
  source?: {
    label: string;
    url: string;
    note: string;
  };
  relatedServices: RelatedService[];
  cta: InsightCta;
  content: ContentBlock[];
};

export type InsightCardData = Pick<
  Insight,
  | "slug"
  | "title"
  | "excerpt"
  | "category"
  | "publishedAt"
  | "heroImage"
  | "heroImageAlt"
  | "heroImageFit"
>;

export const INSIGHTS_PAGE_SIZE = 9;
export const WORDS_PER_MINUTE = 200;

function blockText(block: ContentBlock): string {
  if (block.type === "ul" || block.type === "ol") return block.items.join(" ");
  if (block.type === "image") return `${block.alt} ${block.caption ?? ""}`;
  if (block.type === "quote") return `${block.text} ${block.attribution ?? ""}`;
  return block.text;
}

export function insightWordCount(article: Insight): number {
  const raw = [article.title, article.excerpt, ...article.content.map(blockText)]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  if (!raw) return 0;
  return raw.split(" ").length;
}

export function readingTimeMinutes(article: Insight): number {
  return Math.max(1, Math.round(insightWordCount(article) / WORDS_PER_MINUTE));
}

export function formatInsightDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function toInsightCard(article: Insight): InsightCardData {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    publishedAt: article.publishedAt,
    heroImage: article.heroImage,
    heroImageAlt: article.heroImageAlt,
    heroImageFit: article.heroImageFit,
  };
}

export function isPublicInsight(article: Insight): boolean {
  return article.status === "published" && article.content.length > 0;
}

export function getPublishedInsights(articles: Insight[]): Insight[] {
  return articles
    .filter(isPublicInsight)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title));
}

export function getInsightBySlug(
  articles: Insight[],
  slug: string,
  { publishedOnly = true } = {},
): Insight | undefined {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return undefined;
  if (publishedOnly && !isPublicInsight(article)) return undefined;
  return article;
}

export function getFeaturedInsight(articles: Insight[]): Insight | undefined {
  const published = getPublishedInsights(articles);
  const featured = published.filter((item) => item.featured);
  if (featured.length === 1) return featured[0];
  if (featured.length > 1) return featured[0];
  return published[0];
}

export function getPublishedCategories(articles: Insight[]): InsightCategory[] {
  const present = new Set(getPublishedInsights(articles).map((item) => item.category));
  return INSIGHT_CATEGORIES.filter((category) => present.has(category));
}

export function getRelatedInsights(article: Insight, articles: Insight[], limit = 3): Insight[] {
  const candidates = getPublishedInsights(articles).filter((item) => item.slug !== article.slug);
  const ranked = candidates
    .map((item) => {
      let score = 0;
      if (item.category === article.category) score += 10;
      score += item.tags.filter((tag) => article.tags.includes(tag)).length * 3;
      return { item, score };
    })
    .sort((a, b) => b.score - a.score || b.item.publishedAt.localeCompare(a.item.publishedAt));
  return ranked.slice(0, limit).map((entry) => entry.item);
}

export function getInsightsByTags(
  articles: Insight[],
  tags: string[],
  limit = 3,
): Insight[] {
  const published = getPublishedInsights(articles);
  const ranked = published
    .map((item) => {
      let score = item.tags.filter((tag) => tags.includes(tag)).length;
      if (item.category === "AI & Automation") score += 2;
      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || b.item.publishedAt.localeCompare(a.item.publishedAt),
    );
  return ranked.slice(0, limit).map((entry) => entry.item);
}
