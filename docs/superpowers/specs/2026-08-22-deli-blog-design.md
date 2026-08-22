# Deli Daily Updates World — Evergreen Blog Design Spec

**Date:** 2026-08-22
**Domain:** deli-dailyupdatesworld.com
**Status:** Approved architecture

## Overview

A modern, professional, evergreen blogging and information platform. It is **not** a daily-news site. It provides useful answers, tutorials, guides, tips, tricks, and solutions to everyday problems across many categories.

## Goals / Non-goals

Goals:
- Trustworthy editorial design, mobile-first, fast, accessible, SEO-strong.
- Easy content publishing without editing source code per article.
- AI-assisted drafting workflow with human review before publish.
- Runs on standard Hostinger shared hosting (no VPS/Docker/backend).

Non-goals:
- Daily-news cadence, high-volume low-quality content.
- Real-time features, WebSockets, permanent backend server.
- Guaranteed search rankings (we build the technical foundation only).

## Architecture

### Stack
- **Astro** static site generator (Node 22, npm).
- Markdown/MDX content in `src/content/articles/` via Content Collections.
- Zero client-side JS by default; hydration only where needed (search, mobile nav).
- Build output: pure static files in `dist/`, uploadable to Hostinger `public_html/`.

### Why Astro
- Static-first output = best Core Web Vitals and mobile performance.
- Built-in sitemap, RSS, content collections, image optimization.
- Content as Markdown is portable, git-versioned, and AI-friendly.
- Simplest production architecture that satisfies all constraints.

## Content Model

Each article is a Markdown file with frontmatter:

```yaml
title, slug, description, author, pubDate, updatedDate, readingTime (auto),
category, tags[], featured, draft, scheduledDate, canonicalURL (optional),
seo.title, seo.description, featuredImage (url, alt, caption, credit),
related (slugs[], auto-fallback), faq (optional list), type
```

Publishing rules:
- `draft: true` → excluded from build.
- `published` derives from `draft` + `pubDate` (future dates = scheduled).
- Sitemap, RSS, search index only include published articles.

### Categories
Extensible taxonomy defined in `src/data/site.ts`. Starting set (19): Technology, AI, Mobile, Android, iPhone, Laptops & Computers, Windows, Mac, Apps & Software, Internet, Gadgets, How-To Guides, Tutorials, Troubleshooting, Tips & Tricks, Life Hacks, Productivity, Online Tools, Cybersecurity, Blogging & SEO, Buying Guides, General Information. New categories = add one array entry + a slug page is generated automatically.

## AI-Assisted Publishing Workflow

Workflow: **Idea → AI draft → Human review → SEO check → Publish**.

- `docs/AI-PUBLISHING.md` — instructions for an AI assistant to generate drafts.
- `scripts/generate-draft.mjs` — CLI: `npm run draft -- "topic"` scaffolds a draft markdown file with full frontmatter and article structure.
- Drafts always `draft: true`; human flips to published after review.
- Drafts must include: title, outline, intro, step-by-step content, FAQ, SEO title, meta description, slug, category, tags, internal-link suggestions, image suggestions + alt text.

## Pages

- Home — hero, featured, latest, popular, category sections, newsletter, footer.
- Articles index (`/articles`) — paginated listing with search/filter.
- Article detail (`/articles/[slug]`) — full editorial layout.
- Category index (`/articles/category/[category]`) — auto-generated per category.
- Tag index (`/articles/tag/[tag]`) — auto-generated.
- Search (`/search`) — client-side search over a generated JSON index (titles, content, categories, tags) with debounced input.
- About, Contact, Privacy Policy, Terms, Disclaimer — static editorial pages.
- 404 page.

## Article Layout Elements

Title, intro, featured image (+caption/credit), author, published/updated dates, reading time, category, tags, breadcrumbs, table of contents (anchors), long-form content, step lists, FAQ block, related articles, social share links, sources/references, structured data (Article, BreadcrumbList, FAQ only when FAQ present).

## Design System

- **Fonts:** system font stack for performance; optional self-hosted serif for body if desired later.
- **Colors:** clean editorial neutrals + one trustworthy accent (deep teal/green); high-contrast, AA-compliant.
- **Dark mode:** not in v1 (keep simple, fast); readable on white/light.
- **Type scale:** clamp() fluid type; 18px+ base for body copy.
- Components: Header, Search, Cards, CategoryChip, Tag, Breadcrumbs, TOC, Newsletter, Footer, ShareButtons, RelatedArticles, AdSlot (placeholder for future monetization).
- Focus-visible states, skip-to-content link, semantic landmarks.

## SEO Implementation

- Editable `seo.title` / `seo.description` frontmatter per article/page.
- Canonical URLs on every page.
- Auto `sitemap.xml` (published articles + pages, lastmod) via `@astrojs/sitemap`.
- `robots.txt`: allow public crawl; disallow `/drafts/`, `/api/`, private areas; reference sitemap.
- RSS feed via `@astrojs/rss` (`/rss.xml`).
- Structured data: Article + BreadcrumbList + WebSite/Organization on home, FAQPage only when genuine FAQ exists. JSON-LD.
- Open Graph + Twitter cards, semantic HTML, heading hierarchy, image alt text, internal linking (related + inline editorial links).
- No keyword stuffing, no fake content.

## Search & Internal Linking

- Client-side search over generated JSON index (`/search-index.json`).
- Related articles: 3 articles from same category (plus explicit `related` overrides).
- Editorial internal-linking guidance in the AI publishing guide.

## Analytics & Monetization Readiness

- `site.config.ts` flags: `analytics.enabled`, Google Analytics ID / GTM container read from `.env` at build; only injected when present.
- AdSlot component as a styled placeholder; affiliate/sponsored fields in article frontmatter (`sponsored: true`, `affiliate: true`) that render labels — no damage to reading experience.
- Search Console: sitemap submission documented.

## Performance

- Zero-JS static pages; only search + mobile nav hydrate.
- Astro image optimization (`astro:assets`), lazy loading, responsive `srcset`.
- Minimal CSS (~1 file), no external font/script dependencies by default.
- Caching/compression on Hostinger (documented .htaccess gzip/brotli + caching headers).

## Accessibility

- Semantic landmarks (header/nav/main/footer), skip link, visible focus rings.
- Keyboard-accessible menu & search, labelled forms, contrast ≥ 4.5:1, alt text on all images.

## Security

- No secrets in repo; `.env.example` only.
- No backend/user input surface (static site) → sanitization limited to search term display (escape).
- Admin/private paths disallowed in robots; drafts never rendered.

## GitHub & Hostinger Deployment

- Source in GitHub (branch `main`).
- Local/CI build: `npm ci && npm run build` → `dist/`.
- Hostinger options: (1) upload `dist/` to `public_html/` via File Manager/SFTP; (2) Hostinger Git deploy pulling repo and running build.
- Build-time env vars via `.env` (never committed), `.env.example` committed.
- Deployment step-by-step guide in `docs/DEPLOYMENT.md`.

## Quality Checklist (final pass)

SEO issues, broken links, mobile issues, accessibility, performance, security, indexing, sitemap/robots, duplicate metadata, bad URLs, missing canonicals, missing structured data, deployment readiness.

## Deliverables

Working Astro site, ~6-10 starter articles across categories, AI publishing workflow, deployment guide, production build verified, local preview via deploy-website skill.
