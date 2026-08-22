export interface Category {
  slug: string;
  name: string;
  description: string;
}

/**
 * Central site configuration.
 * Editing this file is the ONLY thing you need to touch to rebrand or
 * extend the site structure (e.g. add a new category).
 */
export const siteConfig = {
  name: "Deli Daily Updates World",
  shortName: "Deli Daily Updates",
  legalName: "Deli Daily Updates World",
  url: "https://deli-dailyupdatesworld.com",
  language: "en",
  locale: "en_US",
  description:
    "Clear, helpful guides and answers for everyday tech problems — tutorials, how-tos, troubleshooting, tips, buying guides, and life hacks you can actually use.",
  keywords:
    "how-to guides, tech tutorials, troubleshooting, tips and tricks, life hacks, buying guides, AI guides, Android, iPhone, Windows, Mac",
  author: {
    name: "Deli Daily Updates Editorial Team",
    url: "https://deli-dailyupdatesworld.com/about",
  },
  social: {
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  email: "hello@deli-dailyupdatesworld.com",
  newsletter: {
    enabled: true,
    title: "Get the useful stuff, weekly",
    blurb:
      "One practical email a week: tutorials, tips, and fixes our readers actually use. No spam, ever.",
  },
  analytics: {
    gaId: import.meta.env.PUBLIC_GA_ID || "",
    gtmId: import.meta.env.PUBLIC_GTM_ID || "",
    siteVerification: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  pagination: {
    pageSize: 12,
  },
  build: {
    // Set true while the site is still in early development to stop
    // search engines indexing it. Flip to false when you launch.
    noindex: false,
  },
} as const;

/**
 * Taxonomy. Add a new category here and every category page,
 * listing, breadcrumb, and the sitemap will pick it up automatically.
 */
export const categories: Category[] = [
  { slug: "technology", name: "Technology", description: "Explanations of how modern technology works, in plain language." },
  { slug: "ai", name: "AI", description: "Practical AI guides, tool walkthroughs, and plain-English explainers." },
  { slug: "mobile", name: "Mobile", description: "Smartphone guides covering Android, iPhone, and general mobile help." },
  { slug: "android", name: "Android", description: "Fix it and master it: Android tips, troubleshooting, and tutorials." },
  { slug: "iphone", name: "iPhone", description: "iPhone and iOS guides, fixes, tips, and feature explainers." },
  { slug: "laptops-computers", name: "Laptops & Computers", description: "Desktop and laptop help: performance, upgrades, and maintenance." },
  { slug: "windows", name: "Windows", description: "Windows tutorials, troubleshooting, and productivity tips." },
  { slug: "mac", name: "Mac", description: "macOS guides, fixes, and everyday tips for Mac users." },
  { slug: "apps-software", name: "Apps & Software", description: "App reviews, software guides, and smart tool recommendations." },
  { slug: "internet", name: "Internet", description: "Wi-Fi, broadband, browsers, and how to get the most from the web." },
  { slug: "gadgets", name: "Gadgets", description: "Smart home, wearables, and everyday gadget guides." },
  { slug: "how-to-guides", name: "How-To Guides", description: "Step-by-step instructions for common tasks and problems." },
  { slug: "tutorials", name: "Tutorials", description: "In-depth tutorials that take you from beginner to confident." },
  { slug: "troubleshooting", name: "Troubleshooting", description: "Diagnose and fix tech problems with clear step-by-step fixes." },
  { slug: "tips-tricks", name: "Tips & Tricks", description: "Small, practical tips that make daily tech use easier." },
  { slug: "life-hacks", name: "Life Hacks", description: "Smart everyday shortcuts and practical life hacks." },
  { slug: "productivity", name: "Productivity", description: "Work smarter with better systems, tools, and habits." },
  { slug: "online-tools", name: "Online Tools", description: "Free and useful web tools, tested and explained." },
  { slug: "cybersecurity", name: "Cybersecurity", description: "Stay safe online with practical, jargon-free security advice." },
  { slug: "blogging-seo", name: "Blogging & SEO", description: "Honest, effective guidance for building a blog and getting found." },
  { slug: "buying-guides", name: "Buying Guides", description: "Clear, unbiased advice to help you buy the right thing." },
  { slug: "general-information", name: "General Information", description: "Useful, evergreen answers to everyday questions." },
];

export const categoryMap: Map<string, Category> = new Map(
  categories.map((c) => [c.slug, c]),
);

/** Categories shown in the compact topic strip. */
export const featuredCategories = [
  "android",
  "iphone",
  "windows",
  "ai",
  "troubleshooting",
  "how-to-guides",
  "tips-tricks",
  "buying-guides",
];

export const navigation = [
  { label: "Articles", href: "/articles" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  explore: [
    { label: "Articles", href: "/articles" },
    { label: "Categories", href: "/categories" },
    { label: "Search", href: "/search" },
    { label: "RSS Feed", href: "/rss.xml" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
  topics: categories.map((c) => ({ label: c.name, href: `/articles/category/${c.slug}` })),
};

export function getCategory(slug: string): Category | undefined {
  return categoryMap.get(slug);
}

export function categoryUrl(slug: string): string {
  return `/articles/category/${slug}`;
}

export function formatDate(date: Date, opts?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...opts,
  }).format(date);
}
