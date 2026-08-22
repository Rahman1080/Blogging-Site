/**
 * Content opportunity dashboard.
 *
 * This is a planning aid, not a traffic promise. Every idea is grounded in
 * observed signals (search volume, Google Trends, help-forum activity, product
 * releases) but no ranking or traffic is ever guaranteed. Research each topic
 * before writing, following docs/AI-PUBLISHING.md.
 */
export interface Idea {
  topic: string;
  category: string;
  why: string;
  intent?: string;
  relatedKeywords?: string[];
  longTail?: string[];
  relatedQuestions?: string[];
}

export interface IdeaSection {
  id: string;
  label: string;
  description: string;
  ideas: Idea[];
}

export const contentIdeas: IdeaSection[] = [
  {
    id: "trending",
    label: "Trending Topics",
    description:
      "Topics with strong current search demand. Write only if you can add genuinely useful, evergreen value — not just another SEO page.",
    ideas: [
      {
        topic: "How to clear ChatGPT / AI chatbot history and data",
        category: "AI",
        why: "Consistently asked by users of every major chatbot as privacy questions grow; demand rises with every new model release.",
        intent: "How-to / troubleshooting",
        relatedKeywords: ["clear chatgpt history", "delete chatgpt data", "ai chat privacy"],
        longTail: ["how to delete chatgpt conversations on iphone", "does chatgpt save my data"],
        relatedQuestions: ["Does ChatGPT store my chats?", "How do I stop ChatGPT from using my data?"],
      },
      {
        topic: "How to update a router's firmware safely",
        category: "Internet",
        why: "Router security stories keep renewing interest, and firmware updates are rarely explained well for non-experts.",
        intent: "Tutorial",
        relatedKeywords: ["update router firmware", "router security"],
        longTail: ["how to update asus router firmware", "how often should i update my router"],
        relatedQuestions: ["Why does my router need updates?", "Will updating my router reset it?"],
      },
      {
        topic: "How to fix slow internet when everyone is home",
        category: "Internet",
        why: "Persistent long-tail demand for practical home-network fixes; evergreen and searchable all year round.",
        intent: "Troubleshooting",
        relatedKeywords: ["slow internet", "wifi slow"],
        longTail: ["how to improve wifi speed at home", "internet slow on one device"],
        relatedQuestions: ["Why is my internet slower at night?", "Does more devices slow wifi?"],
      },
      {
        topic: "How to stop spam and robocalls on any phone",
        category: "Mobile",
        why: "Huge, evergreen demand with weak, outdated content. Covers both Android and iPhone with built-in and carrier options.",
        intent: "How-to",
        relatedKeywords: ["stop robocalls", "block spam calls android"],
        longTail: ["how to stop spam calls on samsung", "why do i keep getting spam calls"],
        relatedQuestions: ["Is it safe to answer unknown numbers?", "Do carrier call-blocking apps work?"],
      },
    ],
  },
  {
    id: "rising",
    label: "Rising Topics",
    description:
      "Searches trending upward over recent months. Worth acting on before the curve flattens, with evergreen framing.",
    ideas: [
      {
        topic: "How to use AI features built into your phone (Gemini, Siri, Galaxy AI)",
        category: "AI",
        why: "Every new phone OS release adds AI features; users search how-to questions weeks after each launch.",
        intent: "Tutorial",
        relatedKeywords: ["galaxy ai features", "gemini on android", "siri tips"],
        longTail: ["how to use ai on samsung phone", "what is galaxy ai"],
        relatedQuestions: ["Is Galaxy AI free?", "How do I turn off AI on my phone?"],
      },
      {
        topic: "How to set up passkeys on iPhone and Android",
        category: "Cybersecurity",
        why: "Passkeys are rolling out across major platforms; interest is rising as password managers and OSes push adoption.",
        intent: "Tutorial",
        relatedKeywords: ["what are passkeys", "set up passkeys"],
        longTail: ["how to use passkeys on iphone", "passkey vs password"],
        relatedQuestions: ["Are passkeys safe?", "Do passkeys work across devices?"],
      },
      {
        topic: "How to make your laptop battery last longer",
        category: "Laptops & Computers",
        why: "Battery-health questions keep rising as more people work portably; advice changes with new charging practices.",
        intent: "Tips / troubleshooting",
        relatedKeywords: ["laptop battery health", "battery draining fast"],
        longTail: ["how to extend laptop battery life", "is it bad to leave laptop charging overnight"],
        relatedQuestions: ["Should I charge my laptop to 100%?", "How do I check laptop battery health?"],
      },
      {
        topic: "How to stop apps tracking you on your phone",
        category: "Privacy",
        why: "Privacy settings updates (iOS, Android) drive recurring interest every time OS settings change.",
        intent: "How-to",
        relatedKeywords: ["stop app tracking", "app tracking transparency"],
        longTail: ["how to turn off tracking on android", "what does allow apps to track me mean"],
        relatedQuestions: ["Should I turn off app tracking?", "Can apps track me if I disable it?"],
      },
    ],
  },
  {
    id: "lowCompetition",
    label: "Low-Competition Opportunities",
    description:
      "Strong, recurring demand but thin or poor-quality coverage. These reward a genuinely useful, well-structured answer.",
    ideas: [
      {
        topic: "How to clear junk files on Windows without third-party cleaners",
        category: "Windows",
        why: "Readers want the built-in methods; most results push bloated 'cleaner' apps. Room for a definitive, safe guide.",
        intent: "Tutorial",
        relatedKeywords: ["clear junk files windows", "disk cleanup"],
        longTail: ["how to free up disk space windows 11 without apps", "is disk cleanup safe"],
        relatedQuestions: ["Do I need a PC cleaner?", "What can I safely delete from my PC?"],
      },
      {
        topic: "How to safely buy a used phone (checklist before you pay)",
        category: "Buying Guides",
        why: "High intent, often low-quality listicles. A checklist-based evergreen guide with real steps can stand out.",
        intent: "Buying guide",
        relatedKeywords: ["buy used phone checklist", "is it safe to buy a refurbished phone"],
        longTail: ["how to check a used iphone before buying", "used samsung phone checklist"],
        relatedQuestions: ["Should I buy a refurbished phone?", "How do I check a phone's battery health when buying used?"],
      },
      {
        topic: "How to export and back up your browsing data",
        category: "Apps & Software",
        why: "Practical but under-covered: bookmarks, passwords, and settings export from Chrome, Safari, Edge and Firefox.",
        intent: "Tutorial",
        relatedKeywords: ["export bookmarks", "back up browser data"],
        longTail: ["how to move bookmarks from chrome to edge", "export safari bookmarks to chrome"],
        relatedQuestions: ["How do I transfer bookmarks to a new computer?", "Where are browser passwords stored?"],
      },
      {
        topic: "How to set up parental controls on any device",
        category: "Gadgets",
        why: "Strong demand, fragmented answers. A device-by-device evergreen guide with a clear structure fills a gap.",
        intent: "How-to",
        relatedKeywords: ["parental controls iphone", "parental controls android"],
        longTail: ["how to block apps on child's iphone", "best parental control settings"],
        relatedQuestions: ["Can I see my child's screen time remotely?", "Do parental controls work on all apps?"],
      },
    ],
  },
  {
    id: "future",
    label: "Future Opportunities",
    description:
      "Likely to grow over the next 6–36 months around AI, software, smartphones, gadgets, privacy and emerging digital services. Build authority early with honest, non-hyped content.",
    ideas: [
      {
        topic: "How to evaluate AI tools for real-world work (not hype)",
        category: "AI",
        why: "As AI tools multiply, users will increasingly search for practical evaluation frameworks rather than feature lists.",
        intent: "Explainer / comparison",
        relatedKeywords: ["best ai tools", "how to choose ai tool"],
        longTail: ["how to compare ai writing tools", "which ai tool for my use case"],
        relatedQuestions: ["Are AI tools worth paying for?", "How do I test an AI tool before buying?"],
      },
      {
        topic: "AI privacy: what your data is used for and how to opt out",
        category: "Privacy",
        why: "Privacy scrutiny of AI services is growing and will intensify; clear opt-out guides will be searched for years.",
        intent: "Explainers / how-to",
        relatedKeywords: ["ai data privacy", "opt out ai training"],
        longTail: ["how to opt out of chatgpt training data", "do ai apps sell my data"],
        relatedQuestions: ["Can I stop AI companies using my data?", "Is it safe to upload documents to AI tools?"],
      },
      {
        topic: "Smart home setup that actually stays simple",
        category: "Gadgets",
        why: "Smart-home ownership keeps rising; beginners repeatedly search for simple, standards-based setups (Matter, Thread).",
        intent: "Tutorial",
        relatedKeywords: ["smart home setup", "matter standard", "thread smart home"],
        longTail: ["smart home for beginners", "best smart home hub 2026"],
        relatedQuestions: ["Do I need a smart home hub?", "What is Matter and do I need it?"],
      },
      {
        topic: "How to manage digital subscriptions you forgot about",
        category: "Productivity",
        why: "Subscription fatigue is a growing, evergreen problem; a repeatable management system is genuinely useful content.",
        intent: "Tutorial / life-hack",
        relatedKeywords: ["cancel subscriptions", "track subscriptions"],
        longTail: ["how to find all my subscriptions", "subscriptions i forgot about"],
        relatedQuestions: ["How do I cancel app subscriptions?", "What's the easiest way to track subscriptions?"],
      },
    ],
  },
  {
    id: "refresh",
    label: "Content Refresh Ideas",
    description:
      "Existing published articles worth reviewing, updating, and re-submitting to IndexNow. Refresh beats new content when the core topic is already covered.",
    ideas: [
      {
        topic: "Refresh: backup-iphone-guide",
        category: "iPhone",
        why: "iPhone backup options and defaults change with iOS releases; verify steps still match current software and add new cloud options.",
      },
      {
        topic: "Refresh: how-to-choose-a-laptop-buying-guide",
        category: "Buying Guides",
        why: "Processor lines, memory baselines, and battery expectations shift yearly. Update benchmarks and price guidance; keep timeless principles.",
      },
      {
        topic: "Refresh: speed-up-windows-11-pc",
        category: "Windows",
        why: "Windows 11 feature updates move settings around. Re-verify menu paths and add current settings names.",
      },
      {
        topic: "Refresh: what-is-ai-explained",
        category: "AI",
        why: "AI definitions and examples evolve quickly. Keep core concepts evergreen but update examples and add a plain-English glossary.",
      },
    ],
  },
];

export function getIdeaCount(): number {
  return contentIdeas.reduce((n, s) => n + s.ideas.length, 0);
}
