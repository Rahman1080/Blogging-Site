export interface Category {
  slug: string;
  name: string;
  description: string;
  /** Unique, search-friendly page title (without the site name suffix). */
  seoTitle?: string;
  /** Unique meta description that states the value of the category. */
  seoDescription?: string;
}

/**
 * Central site configuration.
 * Editing this file is the ONLY thing you need to touch to rebrand or
 * extend the site structure (e.g. add a new category).
 */
export const siteConfig = {
  name: "Info 24/7",
  shortName: "Info 24/7",
  legalName: "Info 24/7",
  url: "https://dailyupdatesworld.com",
  language: "en",
  locale: "en_US",
  description:
    "Clear, helpful guides and answers for everyday tech problems — tutorials, how-tos, troubleshooting, tips, buying guides, and life hacks you can actually use.",
  keywords:
    "how-to guides, tech tutorials, troubleshooting, tips and tricks, life hacks, buying guides, AI guides, Android, iPhone, Windows, Mac",
  author: {
    name: "Info 24/7 Editorial Team",
    url: "https://dailyupdatesworld.com/about",
  },
  social: {
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  email: "hello@dailyupdatesworld.com",
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
  {
    slug: "technology",
    name: "Technology",
    description: "Explanations of how modern technology works, in plain language.",
    seoTitle: "Technology Explained in Plain English",
    seoDescription: "How modern technology actually works — AI, phones, the internet, and everyday gadgets — explained clearly for non-experts, without the jargon.",
  },
  {
    slug: "ai",
    name: "AI",
    description: "Practical AI guides, tool walkthroughs, and plain-English explainers.",
    seoTitle: "AI Guides, Explainers & How-Tos",
    seoDescription: "Practical AI guides and plain-English explainers: what AI is, how to use it, and how to run it privately.",
  },
  {
    slug: "mobile",
    name: "Mobile",
    description: "Smartphone guides covering Android, iPhone, and general mobile help.",
    seoTitle: "Mobile Guides & How-Tos",
    seoDescription: "Smartphone help for Android and iPhone users: eSIMs, settings, connectivity, and everyday mobile guides that stay useful.",
  },
  {
    slug: "android",
    name: "Android",
    description: "Fix it and master it: Android tips, troubleshooting, and tutorials.",
    seoTitle: "Android Tips, Fixes & Tutorials",
    seoDescription: "Android troubleshooting, battery fixes, storage tips, and settings guides — step-by-step help that works on any phone.",
  },
  {
    slug: "iphone",
    name: "iPhone",
    description: "iPhone and iOS guides, fixes, tips, and feature explainers.",
    seoTitle: "iPhone Guides, Fixes & Tips",
    seoDescription: "iPhone and iOS help: backups, storage, settings, and practical guides written to stay current across iOS versions.",
  },
  {
    slug: "laptops-computers",
    name: "Laptops & Computers",
    description: "Desktop and laptop help: performance, upgrades, and maintenance.",
    seoTitle: "Laptop & Desktop Guides",
    seoDescription: "Make your laptop or desktop faster and more reliable — performance fixes, upgrades, and maintenance advice without the tech-speak.",
  },
  {
    slug: "windows",
    name: "Windows",
    description: "Windows tutorials, troubleshooting, and productivity tips.",
    seoTitle: "Windows 11 & 10 How-To Guides",
    seoDescription: "Windows troubleshooting, performance fixes, and productivity tips for Windows 11 and 10 — clear steps for everyday problems.",
  },
  {
    slug: "mac",
    name: "Mac",
    description: "macOS guides, fixes, and everyday tips for Mac users.",
    seoTitle: "Mac & macOS Guides",
    seoDescription: "macOS fixes, performance tips, and everyday guides for Mac users who want clear, practical answers.",
  },
  {
    slug: "apps-software",
    name: "Apps & Software",
    description: "App reviews, software guides, and smart tool recommendations.",
    seoTitle: "App & Software Guides",
    seoDescription: "Practical software guides: choosing tools, using them well, and getting more from the apps on your devices.",
  },
  {
    slug: "internet",
    name: "Internet",
    description: "Wi-Fi, broadband, browsers, and how to get the most from the web.",
    seoTitle: "Internet, Wi-Fi & Broadband Help",
    seoDescription: "Fix slow Wi-Fi, understand your broadband, and get more from the web — home networking help that actually works.",
  },
  {
    slug: "gadgets",
    name: "Gadgets",
    description: "Smart home, wearables, and everyday gadget guides.",
    seoTitle: "Gadgets & Smart Home Guides",
    seoDescription: "Guides for smart home gear, wearables, and everyday gadgets — setup help and honest advice for buying the right thing.",
  },
  {
    slug: "how-to-guides",
    name: "How-To Guides",
    description: "Step-by-step instructions for common tasks and problems.",
    seoTitle: "Step-by-Step How-To Guides",
    seoDescription: "Clear, step-by-step how-to guides for everyday tech tasks — written so you can follow along and finish in minutes.",
  },
  {
    slug: "tutorials",
    name: "Tutorials",
    description: "In-depth tutorials that take you from beginner to confident.",
    seoTitle: "Practical Tech Tutorials",
    seoDescription: "In-depth tutorials that take you from beginner to confident, with real steps you can follow on your own devices.",
  },
  {
    slug: "troubleshooting",
    name: "Troubleshooting",
    description: "Diagnose and fix tech problems with clear step-by-step fixes.",
    seoTitle: "Tech Troubleshooting That Works",
    seoDescription: "Diagnose and fix common tech problems — slow phones, dead Wi-Fi, full storage — with fixes ordered from quickest to most involved.",
  },
  {
    slug: "tips-tricks",
    name: "Tips & Tricks",
    description: "Small, practical tips that make daily tech use easier.",
    seoTitle: "Everyday Tech Tips & Tricks",
    seoDescription: "Small, practical tips that make daily tech use faster and easier — the kind you'll actually remember and use.",
  },
  {
    slug: "life-hacks",
    name: "Life Hacks",
    description: "Smart everyday shortcuts and practical life hacks.",
    seoTitle: "Practical Life Hacks for Tech",
    seoDescription: "Smart everyday shortcuts and practical hacks that make working with technology simpler, cheaper, and less frustrating.",
  },
  {
    slug: "productivity",
    name: "Productivity",
    description: "Work smarter with better systems, tools, and habits.",
    seoTitle: "Productivity Guides & Systems",
    seoDescription: "Work smarter with better systems, tools, and habits — practical productivity advice you can start using today.",
  },
  {
    slug: "online-tools",
    name: "Online Tools",
    description: "Free and useful web tools, tested and explained.",
    seoTitle: "Free Online Tools, Tested",
    seoDescription: "Free and useful web tools, tested and explained honestly — what they do, whether they're worth it, and how to use them.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    description: "Stay safe online with practical, jargon-free security advice.",
    seoTitle: "Online Security, Explained Simply",
    seoDescription: "Practical, jargon-free security advice: passwords, passkeys, scams, and account protection that works.",
  },
  {
    slug: "blogging-seo",
    name: "Blogging & SEO",
    description: "Honest, effective guidance for building a blog and getting found.",
    seoTitle: "Blogging & SEO, the Honest Way",
    seoDescription: "Honest, effective guidance for starting a blog and getting found in search — no tricks, no empty promises, just what works.",
  },
  {
    slug: "buying-guides",
    name: "Buying Guides",
    description: "Clear, unbiased advice to help you buy the right thing.",
    seoTitle: "Tech Buying Guides, Unbiased",
    seoDescription: "Clear, unbiased buying advice for laptops, phones, and gadgets — the specs that matter and the ones you can ignore.",
  },
  {
    slug: "general-information",
    name: "General Information",
    description: "Useful, evergreen answers to everyday questions.",
    seoTitle: "Everyday Tech Questions, Answered",
    seoDescription: "Useful, evergreen answers to the everyday technology questions people actually ask — accurate, current, and easy to understand.",
  },
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
    { label: "Content Ideas", href: "/content-ideas" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Authors", href: "/authors" },
    { label: "Editorial Policy", href: "/editorial-policy" },
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
