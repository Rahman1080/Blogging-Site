import type { Article } from "./content";
import { siteConfig } from "../data/site";
import { articleUrl } from "./content";

function siteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Organization + WebSite schema, used on every page. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteUrl("/logo.svg"),
    description: siteConfig.description,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl("/search")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleSchema(entry: Article) {
  const url = siteUrl(articleUrl(entry));
  const data = entry.data;
  const authorName = data.author || siteConfig.author.name;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.seo?.title || data.title,
    description: data.seo?.description || data.description,
    image: data.featuredImage ? [siteUrl(data.featuredImage.src)] : undefined,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorName === siteConfig.author.name ? siteConfig.author.url : undefined,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteUrl("/logo.svg"),
      },
    },
    datePublished: new Date(data.pubDate).toISOString(),
    dateModified: data.updatedDate
      ? new Date(data.updatedDate).toISOString()
      : new Date(data.pubDate).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: siteUrl(item.url),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export { siteUrl };
