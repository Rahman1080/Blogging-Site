/**
 * Curated tag registry.
 *
 * Tags are a small, hand-picked vocabulary — not an every-keyword bucket.
 * Every tag here has a real description and a set of related tags so tag
 * pages stay useful and never become thin duplicates of category pages.
 * Tags used in articles that aren't in this registry are deprecated in
 * favour of a registry entry (see src/content/articles).
 */
export interface TagInfo {
  /** Canonical lowercase key (used in the URL). */
  key: string;
  /** Display name. */
  name: string;
  /** One-to-two sentence description shown at the top of the tag page. */
  description: string;
  /** Related tag keys, used to cross-link tag pages. */
  related: string[];
}

const registry: Record<string, TagInfo> = {
  android: {
    key: "android",
    name: "Android",
    description:
      "Guides and fixes for Android phones: troubleshooting, battery life, storage, and everyday settings.",
    related: ["iphone", "battery", "performance"],
  },
  iphone: {
    key: "iphone",
    name: "iPhone",
    description:
      "iPhone and iOS help: backups, storage, settings, and practical guides that stay current across iOS versions.",
    related: ["android", "backup", "storage"],
  },
  windows: {
    key: "windows",
    name: "Windows",
    description:
      "Windows performance, troubleshooting, and everyday maintenance — written for Windows 11 and 10.",
    related: ["performance", "pc", "startup"],
  },
  mac: {
    key: "mac",
    name: "Mac",
    description:
      "macOS guides, fixes, and tips for Mac users.",
    related: ["windows", "laptops"],
  },
  performance: {
    key: "performance",
    name: "Performance",
    description:
      "Make devices and computers faster: clearing slowdowns, freeing resources, and the fixes that actually work.",
    related: ["troubleshooting", "windows", "android"],
  },
  troubleshooting: {
    key: "troubleshooting",
    name: "Troubleshooting",
    description:
      "Step-by-step diagnosis and fixes for common tech problems, ordered from quickest to most involved.",
    related: ["performance", "wifi", "internet"],
  },
  storage: {
    key: "storage",
    name: "Storage",
    description:
      "Free up space and manage storage on phones and computers without risky cleaner apps.",
    related: ["android", "iphone", "performance"],
  },
  backup: {
    key: "backup",
    name: "Backup",
    description:
      "Back up your data safely so a lost, broken, or stolen device is an inconvenience, not a disaster.",
    related: ["iphone", "icloud", "security"],
  },
  icloud: {
    key: "icloud",
    name: "iCloud",
    description:
      "iCloud backups, storage plans, and Apple's cloud services explained in plain English.",
    related: ["backup", "iphone"],
  },
  battery: {
    key: "battery",
    name: "Battery",
    description:
      "Extend battery life on phones and laptops, understand charging habits, and check battery health.",
    related: ["android", "performance", "tips"],
  },
  security: {
    key: "security",
    name: "Security",
    description:
      "Practical, jargon-free advice for staying safe online: passwords, passkeys, scams, and account protection.",
    related: ["passwords", "privacy", "scams"],
  },
  passwords: {
    key: "passwords",
    name: "Passwords",
    description:
      "Password managers, passkeys, and the habits that stop account takeovers.",
    related: ["security", "authentication", "privacy"],
  },
  passkeys: {
    key: "passkeys",
    name: "Passkeys",
    description:
      "Passkeys are the password-free login standard from Apple, Google, and Microsoft. Guides to what they are and how to use them.",
    related: ["passwords", "security", "authentication"],
  },
  authentication: {
    key: "authentication",
    name: "Authentication",
    description:
      "How you prove who you are online — passwords, passkeys, two-factor authentication, and what to use where.",
    related: ["passwords", "passkeys", "security"],
  },
  privacy: {
    key: "privacy",
    name: "Privacy",
    description:
      "Keep your data and activity private: app tracking, AI data use, and limiting what companies collect.",
    related: ["security", "ai", "passwords"],
  },
  scams: {
    key: "scams",
    name: "Scams",
    description:
      "How modern scams work — including AI voice cloning and deepfakes — and how to spot them before you lose money.",
    related: ["security", "ai", "privacy"],
  },
  deepfake: {
    key: "deepfake",
    name: "Deepfakes",
    description:
      "AI-generated fake audio and video: how it works, how it's used in scams, and how to verify what you see and hear.",
    related: ["scams", "ai", "security"],
  },
  ai: {
    key: "ai",
    name: "AI",
    description:
      "Practical AI guides and plain-English explainers — what AI is, how to use it, and how to run it privately.",
    related: ["chatgpt", "privacy", "technology"],
  },
  chatgpt: {
    key: "chatgpt",
    name: "ChatGPT",
    description:
      "ChatGPT and chatbot guides: using them, understanding them, and managing your data.",
    related: ["ai", "privacy", "technology"],
  },
  explainer: {
    key: "explainer",
    name: "Explainers",
    description:
      "Plain-English explanations of technology — AI, agents, eSIMs, and other topics, without the jargon.",
    related: ["ai", "technology"],
  },
  technology: {
    key: "technology",
    name: "Technology",
    description:
      "How modern technology actually works, explained clearly for non-experts.",
    related: ["ai", "explainer", "gadgets"],
  },
  mobile: {
    key: "mobile",
    name: "Mobile",
    description:
      "Smartphone guides covering Android, iPhone, eSIMs, and everyday mobile help.",
    related: ["android", "iphone", "travel"],
  },
  sim: {
    key: "sim",
    name: "SIM & eSIM",
    description:
      "Physical SIMs and eSIMs: what they are, how to set them up, and the best way to get connected when travelling.",
    related: ["mobile", "travel", "wifi"],
  },
  travel: {
    key: "travel",
    name: "Travel",
    description:
      "Tech tips for travelling: eSIM data plans, staying connected, and avoiding roaming charges.",
    related: ["sim", "mobile", "wifi"],
  },
  wifi: {
    key: "wifi",
    name: "Wi-Fi",
    description:
      "Fix Wi-Fi that drops or crawls, improve your home network, and get the speeds you pay for.",
    related: ["internet", "router", "troubleshooting"],
  },
  internet: {
    key: "internet",
    name: "Internet",
    description:
      "Broadband, browsing, and home networking help for everyday users.",
    related: ["wifi", "router"],
  },
  router: {
    key: "router",
    name: "Routers",
    description:
      "Router setup, firmware updates, placement, and the settings that make your home network faster and safer.",
    related: ["wifi", "internet", "troubleshooting"],
  },
  gadgets: {
    key: "gadgets",
    name: "Gadgets",
    description:
      "Smart home, wearables, and everyday gadget guides that help you get more from your gear.",
    related: ["technology", "buying-guide"],
  },
  laptops: {
    key: "laptops",
    name: "Laptops",
    description:
      "Choosing, upgrading, and maintaining laptops — from specs that matter to real-world performance.",
    related: ["windows", "mac", "buying-guide"],
  },
  "buying-guide": {
    key: "buying-guide",
    name: "Buying Guides",
    description:
      "Clear, unbiased buying advice: laptops, phones, and other tech, without the marketing spin.",
    related: ["laptops", "comparison", "gadgets"],
  },
  comparison: {
    key: "comparison",
    name: "Comparisons",
    description:
      "Head-to-head comparisons that help you pick the right option — without the brand bias.",
    related: ["buying-guide", "laptops"],
  },
  blogging: {
    key: "blogging",
    name: "Blogging",
    description:
      "Practical, honest guidance for starting and growing a blog the sustainable way.",
    related: ["seo", "content", "ai"],
  },
  seo: {
    key: "seo",
    name: "SEO",
    description:
      "Search engine optimization done honestly: helpful content, clear structure, and no tricks.",
    related: ["blogging", "content"],
  },
  content: {
    key: "content",
    name: "Content",
    description:
      "Creating and publishing useful content that people actually search for.",
    related: ["blogging", "seo", "ai"],
  },
  wordpress: {
    key: "wordpress",
    name: "WordPress",
    description:
      "WordPress setup, hosting, and maintenance for bloggers and small sites.",
    related: ["blogging", "content"],
  },
  software: {
    key: "software",
    name: "Software",
    description:
      "Practical software guides: installing, using, and getting the most from the tools on your devices.",
    related: ["ai", "technology"],
  },
  startup: {
    key: "startup",
    name: "Startup Apps",
    description:
      "What launches when your computer boots, why it slows you down, and how to control it.",
    related: ["windows", "performance"],
  },
  pc: {
    key: "pc",
    name: "PC",
    description:
      "Desktop and laptop PC help: performance, upgrades, and everyday maintenance.",
    related: ["windows", "performance", "laptops"],
  },
  tips: {
    key: "tips",
    name: "Tips & Tricks",
    description:
      "Small, practical tips that make everyday tech use faster and easier.",
    related: ["performance", "battery"],
  },
  "how-to": {
    key: "how-to",
    name: "How-To",
    description:
      "Step-by-step guides that show you exactly how to get something done on your phone, computer, or online accounts.",
    related: ["troubleshooting", "tips"],
  },
};

/** Resolve a tag key to its canonical info. Unknown tags fall back to a plain label. */
export function getTagInfo(key: string): TagInfo | undefined {
  return registry[key.toLowerCase()];
}

export function isRegisteredTag(key: string): boolean {
  return key.toLowerCase() in registry;
}

export function allTags(): TagInfo[] {
  return Object.values(registry).sort((a, b) => a.name.localeCompare(b.name));
}
