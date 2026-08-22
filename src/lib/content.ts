import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;

export const ARTICLE_BASE = "/articles";

/** Astro stores the file path (with extension) as the entry id. */
export function entrySlug(entry: Article): string {
  return entry.id.replace(/\.(md|mdx)$/, "");
}

/** Published = not a draft, and its publish date is not in the future. */
export function isPublished(entry: Article): boolean {
  if (entry.data.draft) return false;
  if (new Date(entry.data.pubDate).getTime() > Date.now()) return false;
  return true;
}

export async function getAllArticles(): Promise<Article[]> {
  const entries = await getCollection("articles");
  return entries
    .filter(isPublished)
    .sort((a, b) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate));
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await getAllArticles();
  return articles.find((a) => entrySlug(a) === slug);
}

export async function getFeaturedArticles(limit = 4): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.filter((a) => a.data.featured).slice(0, limit);
}

export async function getLatestArticles(limit = 8): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.slice(0, limit);
}

/** "Popular" = recent featured articles across categories. */
export async function getPopularArticles(limit = 5): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.filter((a) => a.data.featured).slice(0, limit);
}

export async function getArticlesByCategory(slug: string): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.filter((a) => a.data.category === slug);
}

export async function getArticlesByTag(tag: string): Promise<Article[]> {
  const articles = await getAllArticles();
  const normalized = tag.toLowerCase();
  return articles.filter((a) =>
    a.data.tags.some((t) => t.toLowerCase() === normalized),
  );
}

export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const articles = await getAllArticles();
  const counts = new Map<string, number>();
  for (const a of articles) {
    for (const t of a.data.tags) {
      const key = t.toLowerCase();
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export async function getRelatedArticles(
  article: Article,
  limit = 3,
): Promise<Article[]> {
  const all = await getAllArticles();
  const others = all.filter((a) => entrySlug(a) !== entrySlug(article));
  const currentTokens = keywordTokens(article);

  const scored = others
    .map((candidate) => ({
      article: candidate,
      score: relatedScore(article, candidate, currentTokens),
    }))
    .sort((a, b) => b.score - a.score || +new Date(b.article.data.pubDate) - +new Date(a.article.data.pubDate));

  return scored.slice(0, limit).map((s) => s.article);
}

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "but", "for", "with", "your", "you", "how", "what",
  "why", "when", "to", "of", "in", "on", "at", "by", "is", "are", "it", "this", "that",
  "make", "can", "do", "get", "from", "up", "out", "over", "not", "if", "as", "no", "will",
]);

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));
}

function keywordTokens(entry: Article): Set<string> {
  const data = entry.data;
  const src = [
    data.title,
    data.description,
    ...data.tags,
    data.seo?.primaryKeyword || "",
    ...(data.seo?.keywords || []),
    ...(data.seo?.entities || []),
    ...(data.seo?.longTail || []),
  ].join(" ");
  return new Set(tokens(src));
}

/**
 * Relevance score between two articles, based on shared tags, category,
 * explicit related slugs, and keyword/entity/topic overlap. Not keyword
 * stuffing — just topic affinity.
 */
function relatedScore(a: Article, b: Article, aTokens: Set<string>): number {
  let score = 0;

  if (a.data.related.includes(entrySlug(b))) score += 100;

  if (a.data.category === b.data.category) score += 40;

  const aTags = new Set(a.data.tags.map((t) => t.toLowerCase()));
  const bTags = new Set(b.data.tags.map((t) => t.toLowerCase()));
  for (const t of bTags) if (aTags.has(t)) score += 15;

  const bTokens = keywordTokens(b);
  let overlap = 0;
  for (const t of bTokens) if (aTokens.has(t)) overlap++;
  score += Math.min(overlap, 10) * 2;

  const catBoost =
    b.data.seo?.primaryKeyword &&
    a.data.seo?.primaryKeyword &&
    b.data.seo.primaryKeyword === a.data.seo.primaryKeyword
      ? 8
      : 0;
  score += catBoost;

  return score;
}

export function articleUrl(entry: Article): string {
  return `${ARTICLE_BASE}/${entrySlug(entry)}`;
}
