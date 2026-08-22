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
  /** Set to "published" (with article slug) once the piece is live. */
  status?: "published" | "in-progress";
  article?: string;
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
        topic: "AI scam calls and deepfakes: how to spot and stop them",
        category: "Cybersecurity",
        why: "Search interest in 'deepfake' has roughly quadrupled over the last five years, and voice-cloning scams are now a focus of FTC and FBI warnings. Demand is high and evergreen; most coverage is either too technical or too shallow.",
        intent: "How-to",
        relatedKeywords: ["ai scam calls", "voice cloning scam", "deepfake scam"],
        longTail: ["how to spot ai voice scam calls", "can scammers clone my voice"],
        relatedQuestions: ["How do scammers clone voices?", "What do I do if I sent money in a scam?"],
        status: "published",
        article: "ai-scams-deepfake-calls",
      },
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
        status: "published",
        article: "passkeys-explained",
      },
      {
        topic: "eSIM: what it is and how to set it up",
        category: "Mobile",
        why: "eSIM support is now standard on iPhones and most Androids, and Apple has dropped the physical SIM tray in the US. Travel-data and dual-SIM questions keep growing.",
        intent: "Tutorial",
        relatedKeywords: ["what is esim", "how to set up esim"],
        longTail: ["how to add esim to iphone", "best esim for travel"],
        relatedQuestions: ["Is eSIM better than a SIM card?", "Can I use eSIM and physical SIM together?"],
        status: "published",
        article: "esim-explained",
      },
      {
        topic: "How to run AI on your own computer (local AI)",
        category: "AI",
        why: "Rising interest in private, offline, and free AI as cloud subscriptions and data concerns grow. Most existing guides assume technical comfort; a true beginner guide stands out.",
        intent: "Tutorial",
        relatedKeywords: ["local ai", "run llm on pc", "ollama"],
        longTail: ["how to run chatgpt on my computer offline", "best local ai models for pc"],
        relatedQuestions: ["Is local AI private?", "Do I need a powerful PC for local AI?"],
        status: "published",
        article: "run-ai-on-your-computer-local-ai",
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
        topic: "AI agents explained (what they can do today and what's next)",
        category: "AI",
        why: "The next major AI wave: 'computer use' agents from OpenAI and Anthropic, plus on-device agents coming to phones. Search interest is early but growing fast; a plain-English explainer can own the topic.",
        intent: "Explainer",
        relatedKeywords: ["ai agents", "computer use ai", "ai agents explained"],
        longTail: ["what are ai agents and how do they work", "ai agents examples"],
        relatedQuestions: ["What's the difference between a chatbot and an AI agent?", "Are AI agents safe?"],
        status: "published",
        article: "ai-agents-explained",
      },
      {
        topic: "On-device AI: what AI features are coming to phones",
        category: "AI",
        why: "Apple, Google, and Samsung are pushing on-device AI assistants. How-to and 'what is it' searches will spike around each new phone and OS release for the next several years.",
        intent: "Explainer",
        relatedKeywords: ["on device ai", "phone ai features"],
        longTail: ["what is on-device ai", "ai features on new phones"],
        relatedQuestions: ["Is on-device AI private?", "Do I need a new phone for AI features?"],
      },
      {
        topic: "AI search engines compared (Google, Perplexity, and the rest)",
        category: "AI",
        why: "'AI search' is a fast-growing query category as Google rolls out AI Overviews and tools like Perplexity gain users. A practical, updated comparison rewards structured evergreen content.",
        intent: "Comparison",
        relatedKeywords: ["ai search engines", "perplexity vs google"],
        longTail: ["best ai search engine", "is google dead for search"],
        relatedQuestions: ["Should I switch from Google to an AI search engine?", "Are AI search answers accurate?"],
      },
      {
        topic: "Quantum computing in plain English",
        category: "Technology",
        why: "Quantum computing keeps moving toward practical use and generates steady, high-intent 'explain it to me' searches. Thin competition for genuinely plain-language explainers.",
        intent: "Explainer",
        relatedKeywords: ["quantum computing explained", "what is a qubit"],
        longTail: ["quantum computing for beginners", "when will quantum computers be useful"],
        relatedQuestions: ["Will quantum computers replace normal computers?", "What can quantum computers do?"],
      },
      {
        topic: "AI regulation: what the new rules mean for you",
        category: "AI",
        why: "Search interest in 'AI Act' and 'AI regulation' has grown enormously. As laws land in the EU and elsewhere, users will search for plain-language explanations of what's now restricted.",
        intent: "Explainer",
        relatedKeywords: ["ai act", "ai regulation explained"],
        longTail: ["what does the eu ai act mean", "is deepfake content illegal"],
        relatedQuestions: ["Can I still use AI tools after the new rules?", "What is the EU AI Act?"],
      },
      {
        topic: "How to check if an AI was used to make something",
        category: "AI",
        why: "As AI-generated text, images, and video spread, 'detect AI content' queries are rising. An honest guide about the limits of detection tools would fill a real gap.",
        intent: "How-to",
        relatedKeywords: ["detect ai content", "ai detector"],
        longTail: ["can ai detectors be trusted", "how to tell if text is ai written"],
        relatedQuestions: ["Are AI detectors accurate?", "Can watermarking really work?"],
      },
      {
        topic: "Smart rings and the next wave of wearables",
        category: "Gadgets",
        why: "Wearable interest is moving from smartwatches to smart rings and e-textiles. Early explainer and comparison content earns long-tail searches as adoption grows.",
        intent: "Buying guide / explainer",
        relatedKeywords: ["smart ring", "smart ring vs smartwatch"],
        longTail: ["what can a smart ring do", "is a smart ring worth it"],
        relatedQuestions: ["Do smart rings need a phone?", "Which smart ring should I buy?"],
      },
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
