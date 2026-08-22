import type { APIRoute } from "astro";
import { getAllArticles, articleUrl } from "../lib/content";
import { getCategory, siteConfig } from "../data/site";
import { stripMarkdown } from "../lib/utils";

export const GET: APIRoute = async () => {
  const articles = await getAllArticles();
  const base = siteConfig.url.replace(/\/$/, "");

  const index = articles.map((a) => ({
    title: a.data.title,
    url: `${base}${articleUrl(a)}`,
    category: getCategory(a.data.category)?.name || a.data.category,
    categoryUrl: `/articles/category/${a.data.category}`,
    tags: a.data.tags,
    description: a.data.description,
    content: stripMarkdown(a.body).slice(0, 4000),
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
