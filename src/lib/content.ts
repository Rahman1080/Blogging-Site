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

  const explicit = others.filter((a) => article.data.related.includes(entrySlug(a)));

  const sameCategory = others
    .filter((a) => a.data.category === article.data.category)
    .filter((a) => !explicit.includes(a))
    .slice(0, limit - explicit.length);

  const rest = others
    .filter((a) => !explicit.includes(a) && !sameCategory.includes(a))
    .slice(0, Math.max(0, limit - explicit.length - sameCategory.length));

  return [...explicit, ...sameCategory, ...rest].slice(0, limit);
}

export function articleUrl(entry: Article): string {
  return `${ARTICLE_BASE}/${entrySlug(entry)}`;
}
