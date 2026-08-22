import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getAllArticles, articleUrl } from "../lib/content";
import { getCategory, siteConfig } from "../data/site";

export async function GET(context: APIContext) {
  const articles = await getAllArticles();
  const site = context.site || new URL(siteConfig.url);

  return rss({
    title: `${siteConfig.name} — Feed`,
    description: siteConfig.description,
    site: site.toString(),
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: new Date(a.data.pubDate),
      link: articleUrl(a),
      categories: [
        ...(a.data.category ? [getCategory(a.data.category)?.name || a.data.category] : []),
        ...a.data.tags,
      ],
    })),
    customData: "<language>en-us</language>",
  });
}
