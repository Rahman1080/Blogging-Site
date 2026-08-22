import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    /** The entry id (filename or frontmatter "slug") is used as the URL slug. */
    description: z.string(),
    author: z.string().default("Deli Daily Updates Editorial Team"),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Must be one of the slugs in src/data/site.ts → categories. */
    category: z.string(),
    tags: z.array(z.string()).default([]),
    type: z
      .enum([
        "how-to",
        "tutorial",
        "troubleshooting",
        "tips",
        "life-hack",
        "explainer",
        "ai-guide",
        "gadget-guide",
        "buying-guide",
        "comparison",
        "general",
      ])
      .default("general"),
    /** true → excluded from the production build until you set it to false. */
    draft: z.boolean().default(false),
    /** Show this article in the featured/popular sections. */
    featured: z.boolean().default(false),
    seo: z
      .object({
        /** Defaults to the article title. */
        title: z.string().optional(),
        /** Defaults to the article description. */
        description: z.string().optional(),
        /** Custom canonical URL (rarely needed). */
        canonicalURL: z.string().optional(),
        noindex: z.boolean().optional(),
      })
      .optional(),
    featuredImage: z
      .object({
        /** Remote URL or local path (public/). */
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
        credit: z.string().optional(),
      })
      .optional(),
    /** Explicit related-article slugs. Fallback: same category. */
    related: z.array(z.string()).default([]),
    /** Only add when there is a genuinely useful FAQ section. */
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),
    sponsored: z.boolean().default(false),
    affiliate: z.boolean().default(false),
    /** Reference/source URLs shown at the end of the article. */
    sources: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
