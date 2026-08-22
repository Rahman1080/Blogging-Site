# AI-Assisted Publishing Workflow

**Idea → AI research/draft → Human review → SEO check → Publish**

This site intentionally uses a static Markdown content system. AI never publishes
automatically — AI produces drafts, a human reviews and publishes them.

## Quick start

1. Give an AI assistant (e.g. this agent, ChatGPT, Claude) an article brief:

   > Create an article explaining how to fix an Android phone that is running slowly.

2. Have the AI output a **complete Markdown draft** matching the template below, with
   `draft: true`.
3. Save it to `src/content/articles/<slug>.md` (or ask the AI/agent to write it there).
4. Review and edit the content.
5. Preview locally with `npm run dev`.
6. When ready: set `draft: false`, keep `pubDate` today (or set a future date to schedule),
   rebuild, and deploy.

## Creating a blank draft (this agent or any CLI)

```bash
npm run draft -- "How to fix a slow Android phone" --category android --tags fix,performance
```

This scaffolds a draft file with the full frontmatter and article outline.

## Article brief template (give this to the AI)

Copy the block below and replace the topic. Ask the AI to return only the Markdown file
content.

```text
You are a careful, accurate technology writer for "Info 24/7",
an evergreen help-and-answers website.

Write a complete Markdown article draft for this topic:
<topic here>

Requirements:
- Frontmatter: title, slug, description (1-2 sentences, 150-160 chars),
  author "Info 24/7 Editorial Team", pubDate today, category (choose a
  slug from the category list below), tags (3-5), type (how-to|tutorial|troubleshooting|
  tips|life-hack|explainer|ai-guide|gadget-guide|buying-guide|comparison|general),
  draft: true, featured false, and optional faq + sources.
- Do NOT invent facts. If unsure, say so. Prefer well-established, version-independent advice.
- Structure with clear H2/H3 headings. Use numbered steps for procedures.
- Include a short "What you'll need" list when relevant.
- Include 3-5 genuinely useful FAQ questions and answers (only if real).
- Include internal-link suggestions at the end (links to other relevant articles/categories).
- Include image suggestions: for each, propose a subject, a source type
  (public domain / official / generated / original), and exact alt text.
- Output the full article markdown inside a code block.
```

Categories (slug → name):
technology, ai, mobile, android, iphone, laptops-computers, windows, mac,
apps-software, internet, gadgets, how-to-guides, tutorials, troubleshooting,
tips-tricks, life-hacks, productivity, online-tools, cybersecurity,
blogging-seo, buying-guides, general-information

## The review checklist

Before publishing (set `draft: false`), a human should verify:

- [ ] Content is accurate and not obviously wrong or outdated
- [ ] Title and meta description are honest (no clickbait, no keyword stuffing)
- [ ] Slug is clean and descriptive
- [ ] Category and tags are correct
- [ ] Featured image has alt text and respects its license/credit
- [ ] FAQ schema is only used when real questions exist
- [ ] Internal links point to real pages
- [ ] Affiliate/sponsored disclosures are set in the frontmatter when applicable

## Notes on evergreen quality

- Prefer advice that stays valid: mention "check your device's settings" over
  screenshots that will go stale.
- Update `updatedDate` whenever you revise a published article.
- One good article beats ten rushed ones — this site prioritizes quality.

## Publishing mechanics

- `draft: true` or a `pubDate` in the future → the article is excluded from the
  production build (sitemap, RSS, search, listing all exclude it).
- To publish: set `draft: false`, ensure `pubDate` ≤ today, rebuild (`npm run build`),
  deploy `dist/`.
- To schedule: keep a future `pubDate` (and `draft: false`); it appears after a build
  that runs on/after that date.
