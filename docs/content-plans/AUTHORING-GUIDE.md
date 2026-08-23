# Article Authoring Guide (Shared Instructions)

You are writing articles for **Info 24/7** (dailyupdatesworld.com), an evergreen
help-and-answers tech website. The site is a static Astro site where every article is a
Markdown file in `src/content/articles/`. Read your category brief file for the exact 10
topics and write **all 10** article files. **You MUST also read
`docs/content-plans/SLUG-MAP.md`** and use the exact slugs listed there for your
filenames and for every internal link.

## Frontmatter schema (exact fields)

Create each file as `src/content/articles/<slug>.md` with this frontmatter:

```yaml
---
title: "The Article Title (Search-Optimized, Honest)"
description: "One to two sentences, 150-160 chars, that answer the core question."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "<valid category slug, see list>"
tags: ["tag1", "tag2", "tag3", "tag4"]   # 3-5 tags, MUST be registered (see below)
type: "how-to"   # how-to | tutorial | troubleshooting | tips | life-hack | explainer | ai-guide | gadget-guide | buying-guide | comparison | general
draft: false
featured: false
featuredImage:
  src: "/images/covers/<slug>.jpg"
  alt: "<descriptive alt text from your brief, NOT keyword-stuffed>"
seo:
  title: "<SEO title, often differs slightly from H1, under 60 chars>"
  description: "<SEO meta description, 150-160 chars>"
  primaryKeyword: "<primary keyword>"
  keywords: ["secondary1", "secondary2", "secondary3", "secondary4", "secondary5"]
  longTail:
    - "<long-tail query 1>"
    - "<long-tail query 2>"
    - "<long-tail query 3>"
  relatedQuestions:
    - "<related question 1>"
    - "<related question 2>"
    - "<related question 3>"
  entities: ["<entity 1>", "<entity 2>", "<entity 3>"]
related:
  - "<existing-article-slug-1>"
faq:
  - question: "Real question a reader asks?"
    answer: "A genuinely useful, accurate answer (2-4 sentences)."
sources:
  - "https://official-documentation-or-authoritative-source.example"
---
```

- `slug` = filename. Use lowercase-kebab-case. **Use the exact slug from
  `docs/content-plans/SLUG-MAP.md` for your 10 articles.**
- `pubDate`/`lastReviewed`: exactly `2026-08-23`.
- `featuredImage.src` MUST be `/images/covers/<slug>.jpg` (covers are generated
  automatically after you finish; do NOT create image files yourself).
- Only include `faq` when there are genuinely useful questions (2-4 items).
- Only include `sources` when facts are version-specific or time-sensitive; link to
  official docs / manufacturers / reputable orgs. Never invent a source URL.
- `entities`: real companies, products, platforms, or concepts the article genuinely
  covers.

## Valid category slugs

`ai`, `cybersecurity`, `android`, `iphone`, `windows`, `internet`, `mobile`,
`laptops-computers`, `mac`, `how-to-guides`, `troubleshooting`, `tips-tricks`,
`buying-guides`, `apps-software`, `gadgets`, `productivity`, `blogging-seo`,
`general-information`, `technology`, `tutorials`, `online-tools`, `life-hacks`

## Tags (MUST be registered tags only)

Use only these tags (from `src/data/tags.ts`). Match them to the article's real content;
3-5 tags per article, no tag-stuffing:

`android, iphone, windows, mac, performance, troubleshooting, storage, backup, icloud,
battery, security, passwords, passkeys, authentication, privacy, scams, deepfake, ai,
chatgpt, explainer, technology, mobile, sim, travel, wifi, internet, router, gadgets,
laptops, buying-guide, comparison, blogging, seo, content, wordpress, software, startup,
pc, tips, how-to`

## Body requirements (quality bar)

- One H1 (`#`) only — the `<title>` in frontmatter is separate from the H1. The H1 is
  the first `# Heading` in the body and should be a strong, natural title (you may make
  it identical to `title:` if it reads well).
- Immediately answer the core question in the first 1-2 paragraphs. No generic
  preamble, no "In today's fast-paced digital world".
- Use H2 (`##`) sections and H3 (`###`) for sub-steps where useful.
- Use numbered steps for procedures. Include a short "What you'll need" list when
  relevant.
- Use real, concrete examples. Prefer version-independent advice ("open your phone's
  Settings", "check the app's own menu") over steps that go stale.
- Match the voice of `src/content/articles/passkeys-explained.md`: direct, helpful,
  conversational, short sentences mixed with longer ones, varied paragraph lengths,
  zero robotic AI phrases.
- **Never invent** product specs, prices, statistics, benchmarks, security claims,
  quotes, experiences, or software features. If a number would be a guess, leave it out
  or describe it qualitatively ("most phones these days", "a mid-range model is plenty").
- **No keyword stuffing.** Keywords appear where they belong, not everywhere.
- End with a "Wrapping up" section (short). Include an FAQ section ONLY if you also set
  `faq:` in frontmatter (keep both in sync — the schema renders the FAQ from frontmatter,
  so a body FAQ heading is optional; prefer just frontmatter).
- Aim for **900-1,600 words** of body content. Be genuinely useful enough that a reader
  doesn't need to search elsewhere.

## Internal linking (REQUIRED)

Every article MUST contain at least 2-3 natural internal links to existing articles
(use the exact slugs from your brief), plus at least one link to the article's category
page (`/articles/category/<slug>`). Existing articles you can link to:

- `/articles/passkeys-explained` — Passkeys Explained
- `/articles/password-manager-guide` — Password Managers Explained
- `/articles/ai-scams-deepfake-calls` — AI Scam Calls & Deepfakes
- `/articles/what-is-ai-explained` — What Is AI?
- `/articles/ai-agents-explained` — AI Agents Explained
- `/articles/run-ai-on-your-computer-local-ai` — Run AI on Your Computer
- `/articles/android-phone-running-slow` — Fix a Slow Android Phone
- `/articles/extend-android-battery-life` — Make Android Battery Last
- `/articles/backup-iphone-guide` — Back Up Your iPhone
- `/articles/esim-explained` — eSIM Explained
- `/articles/free-up-storage-phone` — Free Up Phone Storage
- `/articles/how-to-choose-a-laptop-buying-guide` — How to Choose a Laptop
- `/articles/how-to-start-a-blog` — How to Start a Blog
- `/articles/speed-up-windows-11-pc` — Speed Up Windows 11
- `/articles/wifi-not-working-fixes` — Wi-Fi Slow or Dropping

Use descriptive anchor text, not "click here" or bare URLs. Links must be genuinely
relevant to the sentence. Do not add unrelated links for SEO.

## Verification before you finish

After writing all 10 files, run this quick frontmatter/YAML validation from `/workspace`
(it needs no install):

```bash
python3 - <<'PY'
import glob, re, sys
files = glob.glob("src/content/articles/*.md")
need = ["title","description","pubDate","category","tags","type","draft","featuredImage"]
bad = 0
for f in files:
    s = open(f).read()
    if not s.startswith("---"):
        print("NO FRONTMATTER", f); bad += 1; continue
    fm = s.split("---",2)[1]
    if "seo:" not in fm: print("MISSING seo", f); bad += 1
    for k in need:
        if not re.search(rf"^{re.escape(k)}:", fm, re.M):
            print("MISSING", k, f); bad += 1
print("checked", len(files), "files,", bad, "problems")
sys.exit(1 if bad else 0)
PY
```

It must print `0 problems` for your batch (the 15 existing files are expected to be
fine too). This validates the frontmatter shape only. The full `astro check` and build
are run by the coordinator after all batches are in.

Also make sure every internal link you wrote points to a real slug: existing articles
(listed above) or another article in your own batch (use the exact SLUG-MAP slug for it).

Return a concise summary listing the 10 slugs you created and the validation result.
