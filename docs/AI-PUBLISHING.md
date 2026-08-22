# AI-Assisted Publishing Workflow

**Research → AI Draft → Humanize → Fact Check → SEO → Human Review → Publish**

This site intentionally uses a static Markdown content system. AI never publishes
automatically — AI produces drafts, a human humanizes, fact-checks, reviews, and
publishes them.

## Quick start

1. Pick an idea (see `docs/CONTENT-RESEARCH.md` and `/content-ideas`).
2. Give an AI assistant (e.g. this agent, ChatGPT, Claude) an article brief (below).
3. Have the AI output a **complete Markdown draft** matching the template, with `draft: true`.
4. Save it to `src/content/articles/<slug>.md` (or ask the AI/agent to write it there).
5. **Humanize** the draft (checklist below) so it reads like a person wrote it.
6. Fact-check, then check the SEO block (keywords, internal links, alt text).
7. Preview locally with `npm run dev` and give it a final human review.
8. Publish: set `draft: false`, keep `pubDate` today (or set a future date to schedule),
   rebuild, deploy, and run `npm run indexnow`.

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
- Do NOT invent facts, statistics, quotes, or experiences. If unsure, say so.
  Prefer well-established, version-independent advice.
- Structure with clear H2/H3 headings. Use numbered steps for procedures.
- Include a short "What you'll need" list when relevant.
- Include 3-5 genuinely useful FAQ questions and answers (only if real).
- Include internal-link suggestions at the end (links to other relevant articles/categories).
- Include image suggestions: for each, propose a subject, a source type
  (public domain / official / generated / original), and exact alt text.
- Write like a competent human writer: short sentences mixed with longer ones,
  natural transitions, concrete examples, and a direct conversational tone.
  Vary paragraph lengths. Do not start every paragraph the same way.
- Output the full article markdown inside a code block.
```

Categories (slug → name):
technology, ai, mobile, android, iphone, laptops-computers, windows, mac,
apps-software, internet, gadgets, how-to-guides, tutorials, troubleshooting,
tips-tricks, life-hacks, productivity, online-tools, cybersecurity,
blogging-seo, buying-guides, general-information

## Humanize step (required before fact-checking)

Rewrite the draft so it reads naturally. A human reviewer should check that it does
**not** have these AI tells:

- [ ] No repetitive openings like "In today's fast-paced digital world" or "In this article"
- [ ] No robotic phrases: "It's important to note", "Furthermore", "Moreover", "In conclusion"
- [ ] No keyword stuffing — keywords appear where they belong, not everywhere
- [ ] No filler paragraphs that add no information
- [ ] No fake statistics, fake reviews, fake experiences, or fake quotes
- [ ] Sentence length varies; paragraphs are not all the same size
- [ ] Uses concrete, practical examples and specific steps the reader can follow
- [ ] Tone is helpful and direct, like one competent person explaining to another
- [ ] Introductions set up the real problem instead of generic preamble

## The review checklist

Before publishing (set `draft: false`), a human should verify:

- [ ] Content is accurate and not obviously wrong or outdated
- [ ] Title and meta description are honest (no clickbait, no keyword stuffing)
- [ ] Slug is clean and descriptive
- [ ] Category and tags are correct
- [ ] Primary keyword / related queries are answered in the content (not forced in)
- [ ] Featured image has alt text and respects its license/credit
- [ ] FAQ schema is only used when real questions exist
- [ ] Internal links point to real pages and add value
- [ ] Affiliate/sponsored disclosures are set in the frontmatter when applicable
- [ ] Article reads human-written after the humanize pass

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
- After deploying new or updated URLs, notify search engines:
  `npm run indexnow` (Bing IndexNow; see `docs/DEPLOYMENT.md`).
