/**
 * Content opportunity dashboard.
 *
 * This is a planning aid, not a traffic promise. Scores are honest estimates
 * built from observable signals (search volume, Google Trends, help-forum
 * activity, product releases, and the current quality of existing results).
 * No ranking or traffic is ever guaranteed. Research each topic before
 * writing, following docs/AI-PUBLISHING.md.
 */

export interface IdeaSignal {
  label: string;
  strength: "high" | "medium" | "low";
  /** The evidence for this signal — always specific, never a guarantee. */
  note: string;
}

export interface Idea {
  topic: string;
  category: string;
  why: string;
  /** 0–100 opportunity estimate (demand × gap × fit). Not a promise. */
  score: number;
  /** Specific questions people actually type. Prioritize these. */
  searchQuestions: string[];
  /** Why existing results look weak, outdated, or incomplete. */
  gap?: string;
  signals: IdeaSignal[];
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

export function opportunityLabel(score: number): "Strong" | "Moderate" | "Exploratory" {
  if (score >= 70) return "Strong";
  if (score >= 50) return "Moderate";
  return "Exploratory";
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
        why: "Search interest in 'deepfake' has roughly quadrupled over the last five years, and voice-cloning scams are now a focus of FTC and FBI warnings. The problem is evergreen and growing.",
        score: 82,
        searchQuestions: [
          "how to know if a phone call is AI",
          "can scammers clone my voice",
          "grandparent scam voice cloning",
          "what to do if you get scammed",
        ],
        gap: "Most results are news stories or vendor pages; there's little calm, practical protection guidance aimed at families.",
        intent: "How-to",
        signals: [
          { label: "Search demand", strength: "high", note: "'Deepfake' searches roughly 4x over five years; FTC/FBI warnings active." },
          { label: "Competition quality", strength: "high", note: "Few definitive, non-scary consumer guides; coverage is scattered." },
          { label: "Site fit", strength: "high", note: "Matches our cybersecurity + AI explainer strengths." },
        ],
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
        score: 74,
        searchQuestions: [
          "how to delete chatgpt conversations",
          "does chatgpt save my chats",
          "how to stop chatgpt using my data",
        ],
        gap: "Official docs are buried; third-party answers quickly go stale across model/app versions.",
        intent: "How-to / troubleshooting",
        signals: [
          { label: "Search demand", strength: "high", note: "Recurring how-to queries tied to every chatbot release." },
          { label: "Competition quality", strength: "medium", note: "Constant churn in steps across platforms — room for a maintained guide." },
          { label: "Site fit", strength: "high", note: "Privacy angle matches our AI + privacy coverage." },
        ],
        relatedKeywords: ["clear chatgpt history", "delete chatgpt data", "ai chat privacy"],
        longTail: ["how to delete chatgpt conversations on iphone", "does chatgpt save my data"],
        relatedQuestions: ["Does ChatGPT store my chats?", "How do I stop ChatGPT from using my data?"],
      },
      {
        topic: "How to update a router's firmware safely",
        category: "Internet",
        why: "Router security stories keep renewing interest, and firmware updates are rarely explained well for non-experts.",
        score: 62,
        searchQuestions: ["how to update router firmware", "is router firmware update safe"],
        gap: "Per-brand instructions are scattered and outdated; few explain why updates matter and what to back up first.",
        intent: "Tutorial",
        signals: [
          { label: "Search demand", strength: "medium", note: "Steady, evergreen queries that spike with router vulnerability news." },
          { label: "Competition quality", strength: "medium", note: "Fragmented brand-specific answers leave room for a definitive guide." },
          { label: "Site fit", strength: "high", note: "Fits our Wi-Fi/router coverage." },
        ],
        relatedKeywords: ["update router firmware", "router security"],
        longTail: ["how to update asus router firmware", "how often should i update my router"],
        relatedQuestions: ["Why does my router need updates?", "Will updating my router reset it?"],
      },
      {
        topic: "How to fix slow internet when everyone is home",
        category: "Internet",
        why: "Persistent long-tail demand for practical home-network fixes; evergreen and searchable all year round.",
        score: 71,
        searchQuestions: ["internet slow at night", "why is wifi slow on one device"],
        gap: "Answers are either ISP marketing or generic 'restart your router' pages with no ordering of fixes.",
        intent: "Troubleshooting",
        signals: [
          { label: "Search demand", strength: "high", note: "Large, recurring long-tail query base." },
          { label: "Competition quality", strength: "medium", note: "Most pages are thin or recycled advice." },
          { label: "Site fit", strength: "high", note: "Directly complements wifi-not-working-fixes." },
        ],
        relatedKeywords: ["slow internet", "wifi slow"],
        longTail: ["how to improve wifi speed at home", "internet slow on one device"],
        relatedQuestions: ["Why is my internet slower at night?", "Does more devices slow wifi?"],
      },
      {
        topic: "How to stop spam and robocalls on any phone",
        category: "Mobile",
        why: "Huge, evergreen demand with weak, outdated content. Covers both Android and iPhone with built-in and carrier options.",
        score: 76,
        searchQuestions: ["how to stop robocalls", "why do i keep getting spam calls"],
        gap: "Top results are years old and don't cover current built-in call screening on both platforms.",
        intent: "How-to",
        signals: [
          { label: "Search demand", strength: "high", note: "Persistent high-volume consumer problem." },
          { label: "Competition quality", strength: "high", note: "Outdated, platform-specific lists dominate the results." },
          { label: "Site fit", strength: "high", note: "Fits mobile + privacy strengths." },
        ],
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
        score: 68,
        searchQuestions: ["how to use galaxy ai", "what is gemini on android", "turn off ai on my phone"],
        gap: "Coverage is tied to launch news and ages fast; a maintained, OS-by-OS guide is rare.",
        intent: "Tutorial",
        signals: [
          { label: "Growth", strength: "high", note: "Spikes after every phone and OS launch; sustained year over year." },
          { label: "Competition quality", strength: "medium", note: "News-driven pieces churn quickly; evergreen gaps remain." },
          { label: "Site fit", strength: "high", note: "Smartphones + AI is a core overlap." },
        ],
        relatedKeywords: ["galaxy ai features", "gemini on android", "siri tips"],
        longTail: ["how to use ai on samsung phone", "what is galaxy ai"],
        relatedQuestions: ["Is Galaxy AI free?", "How do I turn off AI on my phone?"],
      },
      {
        topic: "How to set up passkeys on iPhone and Android",
        category: "Cybersecurity",
        why: "Passkeys are rolling out across major platforms; interest is rising as password managers and OSes push adoption.",
        score: 79,
        searchQuestions: ["what are passkeys", "how to use passkeys on iphone", "passkey vs password"],
        gap: "Documentation is scattered across Apple/Google pages; few guides cover cross-device sync and recovery clearly.",
        intent: "Tutorial",
        signals: [
          { label: "Growth", strength: "high", note: "Platform adoption (Apple, Google, Microsoft) is actively driving queries." },
          { label: "Competition quality", strength: "medium", note: "Most results are vendor docs; few are complete beginner guides." },
          { label: "Site fit", strength: "high", note: "Extends our password-manager guide naturally." },
        ],
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
        score: 73,
        searchQuestions: ["what is an esim", "how to add esim to iphone", "best esim for travel"],
        gap: "Mixed coverage between carrier docs and travel-marketing content; few neutral, step-by-step guides.",
        intent: "Tutorial",
        signals: [
          { label: "Growth", strength: "high", note: "Hardware defaults keep pushing eSIM into mainstream queries." },
          { label: "Competition quality", strength: "medium", note: "Heavy affiliate noise around travel eSIMs; neutral guidance is rarer." },
          { label: "Site fit", strength: "high", note: "Fits mobile + travel + connectivity coverage." },
        ],
        relatedKeywords: ["what is esim", "how to set up esim"],
        longTail: ["how to add esim to iphone", "best esim for travel"],
        relatedQuestions: ["Is eSIM better than a SIM card?", "Can I use eSIM and physical SIM together?"],
        status: "published",
        article: "esim-explained",
      },
      {
        topic: "How to run AI on your own computer (local AI)",
        category: "AI",
        why: "Rising interest in private, offline, and free AI as cloud subscriptions and data concerns grow. Most existing guides assume technical comfort.",
        score: 75,
        searchQuestions: ["how to run ai on my computer offline", "is local ai private", "ollama for beginners"],
        gap: "Existing guides assume terminal comfort; a true beginner, hardware-realistic walkthrough is scarce.",
        intent: "Tutorial",
        signals: [
          { label: "Growth", strength: "high", note: "Local-model tools (Ollama, LM Studio) are seeing strong, sustained interest." },
          { label: "Competition quality", strength: "medium", note: "Most tutorials target developers, not regular users." },
          { label: "Site fit", strength: "high", note: "Privacy + AI is a core theme." },
        ],
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
        score: 70,
        searchQuestions: ["how to extend laptop battery life", "should i charge my laptop to 100"],
        gap: "Plenty of listicles, few that explain the actual chemistry trade-offs and OS settings that matter.",
        intent: "Tips / troubleshooting",
        signals: [
          { label: "Search demand", strength: "high", note: "Recurring, evergreen query base." },
          { label: "Competition quality", strength: "medium", note: "Most answers recycle myths rather than current guidance." },
          { label: "Site fit", strength: "high", note: "Extends our laptop and Windows coverage." },
        ],
        relatedKeywords: ["laptop battery health", "battery draining fast"],
        longTail: ["how to extend laptop battery life", "is it bad to leave laptop charging overnight"],
        relatedQuestions: ["Should I charge my laptop to 100%?", "How do I check laptop battery health?"],
      },
      {
        topic: "How to stop apps tracking you on your phone",
        category: "Privacy",
        why: "Privacy settings updates (iOS, Android) drive recurring interest every time OS settings change.",
        score: 72,
        searchQuestions: ["how to stop apps tracking me", "what does allow apps to track me mean"],
        gap: "Steps change with every OS version; most guides are outdated within months.",
        intent: "How-to",
        signals: [
          { label: "Growth", strength: "medium", note: "OS-level privacy features keep renewing demand." },
          { label: "Competition quality", strength: "medium", note: "Stale step-by-step content creates a maintenance advantage." },
          { label: "Site fit", strength: "high", note: "Privacy is a stated content pillar." },
        ],
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
        why: "Readers want the built-in methods; most results push bloated 'cleaner' apps.",
        score: 69,
        searchQuestions: ["how to clear junk files windows 11 without apps", "is disk cleanup safe"],
        gap: "Top results push third-party cleaners; a definitive built-in-methods guide is rare.",
        intent: "Tutorial",
        signals: [
          { label: "Competition quality", strength: "high", note: "Existing coverage is ad-driven and biased toward cleaner apps." },
          { label: "Search demand", strength: "high", note: "Persistent Windows maintenance queries." },
          { label: "Site fit", strength: "high", note: "Extends speed-up-windows-11-pc." },
        ],
        relatedKeywords: ["clear junk files windows", "disk cleanup"],
        longTail: ["how to free up disk space windows 11 without apps", "is disk cleanup safe"],
        relatedQuestions: ["Do I need a PC cleaner?", "What can I safely delete from my PC?"],
      },
      {
        topic: "How to safely buy a used phone (checklist before you pay)",
        category: "Buying Guides",
        why: "High intent, often low-quality listicles. A checklist-based evergreen guide with real steps can stand out.",
        score: 74,
        searchQuestions: ["how to check a used iphone before buying", "is it safe to buy a refurbished phone"],
        gap: "Answers are generic listicles; few give a concrete pre-payment checklist for both platforms.",
        intent: "Buying guide",
        signals: [
          { label: "Competition quality", strength: "high", note: "Low-quality listicles dominate; real checklists are rare." },
          { label: "Search demand", strength: "medium", note: "Recurring, high-intent purchasing queries." },
          { label: "Site fit", strength: "high", note: "Fits buying-guides category." },
        ],
        relatedKeywords: ["buy used phone checklist", "is it safe to buy a refurbished phone"],
        longTail: ["how to check a used iphone before buying", "used samsung phone checklist"],
        relatedQuestions: ["Should I buy a refurbished phone?", "How do I check a phone's battery health when buying used?"],
      },
      {
        topic: "How to export and back up your browsing data",
        category: "Apps & Software",
        why: "Practical but under-covered: bookmarks, passwords, and settings export from Chrome, Safari, Edge and Firefox.",
        score: 63,
        searchQuestions: ["how to export bookmarks", "move bookmarks to new computer"],
        gap: "Answers are browser-specific and scattered; a cross-browser guide is scarce.",
        intent: "Tutorial",
        signals: [
          { label: "Competition quality", strength: "high", note: "Thin, fragmented coverage across four browsers." },
          { label: "Search demand", strength: "medium", note: "Steady migration and backup queries." },
          { label: "Site fit", strength: "medium", note: "Fits apps-and-software coverage." },
        ],
        relatedKeywords: ["export bookmarks", "back up browser data"],
        longTail: ["how to move bookmarks from chrome to edge", "export safari bookmarks to chrome"],
        relatedQuestions: ["How do I transfer bookmarks to a new computer?", "Where are browser passwords stored?"],
      },
      {
        topic: "How to set up parental controls on any device",
        category: "Gadgets",
        why: "Strong demand, fragmented answers. A device-by-device evergreen guide with a clear structure fills a gap.",
        score: 67,
        searchQuestions: ["how to block apps on child's iphone", "best parental control settings"],
        gap: "Answers vary wildly by device and OS version; a structured cross-device guide is missing.",
        intent: "How-to",
        signals: [
          { label: "Competition quality", strength: "high", note: "Fragmented, often ad-heavy coverage." },
          { label: "Search demand", strength: "medium", note: "Recurring parenting queries with high intent." },
          { label: "Site fit", strength: "medium", note: "Fits gadgets + how-to coverage." },
        ],
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
        why: "The next major AI wave: 'computer use' agents from OpenAI and Anthropic, plus on-device agents coming to phones.",
        score: 80,
        searchQuestions: ["what are ai agents", "ai agents explained", "can ai agents book flights"],
        gap: "Coverage is either hype or deeply technical; a plain-English explainer can own the early queries.",
        intent: "Explainer",
        signals: [
          { label: "Growth", strength: "high", note: "Agent products are shipping now; query volume is early and rising fast." },
          { label: "Competition quality", strength: "high", note: "Most early results are announcements or dense technical posts." },
          { label: "Site fit", strength: "high", note: "Explainer format matches what-is-ai-explained." },
        ],
        relatedKeywords: ["ai agents", "computer use ai", "ai agents explained"],
        longTail: ["what are ai agents and how do they work", "ai agents examples"],
        relatedQuestions: ["What's the difference between a chatbot and an AI agent?", "Are AI agents safe?"],
        status: "published",
        article: "ai-agents-explained",
      },
      {
        topic: "On-device AI: what AI features are coming to phones",
        category: "AI",
        why: "Apple, Google, and Samsung are pushing on-device AI assistants. How-to and 'what is it' searches will spike around each release.",
        score: 71,
        searchQuestions: ["what is on-device ai", "ai features on new phones", "is on-device ai private"],
        gap: "Coverage is fragmented across vendor launches; a neutral explainer with privacy framing is scarce.",
        intent: "Explainer",
        signals: [
          { label: "Growth", strength: "high", note: "Vendor roadmaps guarantee sustained releases for years." },
          { label: "Competition quality", strength: "medium", note: "News-driven and fragmented at present." },
          { label: "Site fit", strength: "high", note: "Smartphones + AI + privacy overlap." },
        ],
        relatedKeywords: ["on device ai", "phone ai features"],
        longTail: ["what is on-device ai", "ai features on new phones"],
        relatedQuestions: ["Is on-device AI private?", "Do I need a new phone for AI features?"],
      },
      {
        topic: "AI search engines compared (Google, Perplexity, and the rest)",
        category: "AI",
        why: "'AI search' is a fast-growing query category as Google rolls out AI Overviews and tools like Perplexity gain users.",
        score: 68,
        searchQuestions: ["best ai search engine", "perplexity vs google"],
        gap: "Comparisons go stale quickly; a maintained, honest comparison with accuracy caveats is valuable.",
        intent: "Comparison",
        signals: [
          { label: "Growth", strength: "high", note: "AI search adoption is climbing; comparison queries follow." },
          { label: "Competition quality", strength: "medium", note: "Plenty of content, little that's maintained and honest about limits." },
          { label: "Site fit", strength: "high", note: "Fits AI explainer + comparison formats." },
        ],
        relatedKeywords: ["ai search engines", "perplexity vs google"],
        longTail: ["best ai search engine", "is google dead for search"],
        relatedQuestions: ["Should I switch from Google to an AI search engine?", "Are AI search answers accurate?"],
      },
      {
        topic: "Quantum computing in plain English",
        category: "Technology",
        why: "Quantum computing keeps moving toward practical use and generates steady, high-intent 'explain it to me' searches.",
        score: 55,
        searchQuestions: ["quantum computing explained", "what is a qubit", "quantum computer for beginners"],
        gap: "Plain-language explainers are rare; most content assumes a physics background.",
        intent: "Explainer",
        signals: [
          { label: "Growth", strength: "medium", note: "Steady upward interest as quantum moves toward real applications." },
          { label: "Competition quality", strength: "high", note: "Few genuinely beginner-friendly explainers." },
          { label: "Site fit", strength: "medium", note: "Fits technology explainer format." },
        ],
        relatedKeywords: ["quantum computing explained", "what is a qubit"],
        longTail: ["quantum computing for beginners", "when will quantum computers be useful"],
        relatedQuestions: ["Will quantum computers replace normal computers?", "What can quantum computers do?"],
      },
      {
        topic: "AI regulation: what the new rules mean for you",
        category: "AI",
        why: "Search interest in 'AI Act' and 'AI regulation' has grown enormously. As laws land, users will want plain-language explanations.",
        score: 66,
        searchQuestions: ["what is the eu ai act", "is deepfake content illegal"],
        gap: "Coverage is legalistic and news-driven; few practical 'what does this mean for me' explainers.",
        intent: "Explainer",
        signals: [
          { label: "Growth", strength: "high", note: "Regulatory milestones (EU AI Act) generate durable interest." },
          { label: "Competition quality", strength: "medium", note: "Legal-tech coverage dominates; practical framing is scarce." },
          { label: "Site fit", strength: "medium", note: "Fits AI + privacy explainers." },
        ],
        relatedKeywords: ["ai act", "ai regulation explained"],
        longTail: ["what does the eu ai act mean", "is deepfake content illegal"],
        relatedQuestions: ["Can I still use AI tools after the new rules?", "What is the EU AI Act?"],
      },
      {
        topic: "How to check if an AI was used to make something",
        category: "AI",
        why: "As AI-generated text, images, and video spread, 'detect AI content' queries are rising.",
        score: 58,
        searchQuestions: ["how to tell if text is ai written", "can ai detectors be trusted"],
        gap: "Detector marketing overpromises; an honest guide about limits fills a real gap.",
        intent: "How-to",
        signals: [
          { label: "Growth", strength: "medium", note: "Rising alongside AI content volume." },
          { label: "Competition quality", strength: "high", note: "Most content is detector-vendor marketing, not honest guidance." },
          { label: "Site fit", strength: "medium", note: "Fits AI explainer format." },
        ],
        relatedKeywords: ["detect ai content", "ai detector"],
        longTail: ["can ai detectors be trusted", "how to tell if text is ai written"],
        relatedQuestions: ["Are AI detectors accurate?", "Can watermarking really work?"],
      },
      {
        topic: "Smart rings and the next wave of wearables",
        category: "Gadgets",
        why: "Wearable interest is moving from smartwatches to smart rings and e-textiles.",
        score: 57,
        searchQuestions: ["what can a smart ring do", "smart ring vs smartwatch"],
        gap: "Comparisons are thin and device-specific; a neutral explainer is rare.",
        intent: "Buying guide / explainer",
        signals: [
          { label: "Growth", strength: "medium", note: "Adoption is rising steadily across brands." },
          { label: "Competition quality", strength: "high", note: "Few neutral, comprehensive guides." },
          { label: "Site fit", strength: "medium", note: "Fits gadgets buying-guide format." },
        ],
        relatedKeywords: ["smart ring", "smart ring vs smartwatch"],
        longTail: ["what can a smart ring do", "is a smart ring worth it"],
        relatedQuestions: ["Do smart rings need a phone?", "Which smart ring should I buy?"],
      },
      {
        topic: "How to evaluate AI tools for real-world work (not hype)",
        category: "AI",
        why: "As AI tools multiply, users will increasingly search for practical evaluation frameworks rather than feature lists.",
        score: 65,
        searchQuestions: ["how to choose an ai tool", "best ai tool for my use case"],
        gap: "Listicles compare features, not real-world fit; a framework approach is under-served.",
        intent: "Explainer / comparison",
        signals: [
          { label: "Growth", strength: "medium", note: "Tool proliferation drives evaluation queries." },
          { label: "Competition quality", strength: "high", note: "Feature-list content dominates; honest frameworks are rare." },
          { label: "Site fit", strength: "high", note: "Matches our practical, no-hype AI stance." },
        ],
        relatedKeywords: ["best ai tools", "how to choose ai tool"],
        longTail: ["how to compare ai writing tools", "which ai tool for my use case"],
        relatedQuestions: ["Are AI tools worth paying for?", "How do I test an AI tool before buying?"],
      },
      {
        topic: "AI privacy: what your data is used for and how to opt out",
        category: "Privacy",
        why: "Privacy scrutiny of AI services is growing and will intensify; clear opt-out guides will be searched for years.",
        score: 77,
        searchQuestions: ["how to opt out of chatgpt training data", "do ai apps sell my data"],
        gap: "Opt-out steps vary by provider and change often; a maintained, provider-by-provider guide is scarce.",
        intent: "Explainers / how-to",
        signals: [
          { label: "Growth", strength: "high", note: "Long-duration growth in AI-data-privacy queries." },
          { label: "Competition quality", strength: "high", note: "Provider docs are scattered; consumer-facing opt-out guides are rare." },
          { label: "Site fit", strength: "high", note: "Privacy + AI is a core pillar." },
        ],
        relatedKeywords: ["ai data privacy", "opt out ai training"],
        longTail: ["how to opt out of chatgpt training data", "do ai apps sell my data"],
        relatedQuestions: ["Can I stop AI companies using my data?", "Is it safe to upload documents to AI tools?"],
      },
      {
        topic: "Smart home setup that actually stays simple",
        category: "Gadgets",
        why: "Smart-home ownership keeps rising; beginners repeatedly search for simple, standards-based setups (Matter, Thread).",
        score: 64,
        searchQuestions: ["smart home for beginners", "do i need a smart home hub"],
        gap: "Most guides are product lists; few teach a simple, standards-first setup.",
        intent: "Tutorial",
        signals: [
          { label: "Growth", strength: "medium", note: "Standards (Matter/Thread) are maturing and simplifying setups." },
          { label: "Competition quality", strength: "medium", note: "Ad-heavy product lists dominate; simple systems are rare." },
          { label: "Site fit", strength: "medium", note: "Fits gadgets category." },
        ],
        relatedKeywords: ["smart home setup", "matter standard", "thread smart home"],
        longTail: ["smart home for beginners", "best smart home hub 2026"],
        relatedQuestions: ["Do I need a smart home hub?", "What is Matter and do I need it?"],
      },
      {
        topic: "How to manage digital subscriptions you forgot about",
        category: "Productivity",
        why: "Subscription fatigue is a growing, evergreen problem; a repeatable management system is genuinely useful content.",
        score: 70,
        searchQuestions: ["how to find all my subscriptions", "how to cancel app subscriptions"],
        gap: "Answers are platform-specific cancellation links; a neutral management system is under-covered.",
        intent: "Tutorial / life-hack",
        signals: [
          { label: "Search demand", strength: "high", note: "Large, recurring consumer pain point." },
          { label: "Competition quality", strength: "medium", note: "Thin on genuinely useful systems." },
          { label: "Site fit", strength: "high", note: "Fits productivity + life-hacks." },
        ],
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
        score: 60,
        searchQuestions: ["does icloud backup include everything", "how often should i back up iphone"],
        signals: [
          { label: "Currency risk", strength: "medium", note: "iOS updates can change settings paths." },
          { label: "Site fit", strength: "high", note: "Already-ranking page; refresh preserves authority." },
        ],
      },
      {
        topic: "Refresh: how-to-choose-a-laptop-buying-guide",
        category: "Buying Guides",
        why: "Processor lines, memory baselines, and battery expectations shift yearly. Update benchmarks and price guidance; keep timeless principles.",
        score: 62,
        searchQuestions: ["how much ram do i need in a laptop 2026"],
        signals: [
          { label: "Currency risk", strength: "high", note: "Specs and price points change every year." },
          { label: "Site fit", strength: "high", note: "Core buying-guide authority page." },
        ],
      },
      {
        topic: "Refresh: speed-up-windows-11-pc",
        category: "Windows",
        why: "Windows 11 feature updates move settings around. Re-verify menu paths and add current settings names.",
        score: 63,
        searchQuestions: ["why is my windows 11 pc so slow"],
        signals: [
          { label: "Currency risk", strength: "medium", note: "Settings names shift between feature updates." },
          { label: "Site fit", strength: "high", note: "Featured page; keep it the best answer on the topic." },
        ],
      },
      {
        topic: "Refresh: what-is-ai-explained",
        category: "AI",
        why: "AI definitions and examples evolve quickly. Keep core concepts evergreen but update examples and add a plain-English glossary.",
        score: 61,
        searchQuestions: ["what is artificial intelligence in simple terms"],
        signals: [
          { label: "Currency risk", strength: "high", note: "AI examples age fast; core concepts stay stable." },
          { label: "Site fit", strength: "high", note: "Hub page linking to AI agent/local-AI guides." },
        ],
      },
    ],
  },
];

export function getIdeaCount(): number {
  return contentIdeas.reduce((n, s) => n + s.ideas.length, 0);
}
