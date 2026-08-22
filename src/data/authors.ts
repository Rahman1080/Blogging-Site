/**
 * Authors. Add a new author here and create/assign it to articles via the
 * `author` frontmatter field (the display name). Author pages at
 * `/authors/<slug>` are generated automatically.
 */
export interface Author {
  slug: string;
  name: string;
  bio: string;
  /** Optional avatar, placed in public/images/authors/. */
  image?: string;
  /** Optional external links. */
  social?: { label: string; url: string }[];
}

export const authors: Author[] = [
  {
    slug: "info-24-7-editorial-team",
    name: "Info 24/7 Editorial Team",
    bio: "The Info 24/7 editorial team researches, tests, and writes practical evergreen guides on everyday technology — from fixing a slow phone to understanding AI. Every article is drafted, humanized, fact-checked, and reviewed before it is published. We do not chase daily news; we publish guides that stay useful for years.",
  },
];

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name === name);
}

/** URL-safe slug for an author, derived from the authors list or the name. */
export function authorSlugFromName(name: string): string {
  return getAuthorByName(name)?.slug || slugify(name);
}

export function authorUrlFor(name: string): string {
  return `/authors/${authorSlugFromName(name)}`;
}
