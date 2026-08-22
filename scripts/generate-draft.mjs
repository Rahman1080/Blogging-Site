#!/usr/bin/env node
/**
 * Scaffold a new article draft.
 *
 * Usage:
 *   npm run draft -- "How to fix a slow Android phone"
 *   npm run draft -- "Topic here" --category android --author "Jane Doe" --tags fix,android,performance
 *
 * Creates src/content/articles/<slug>.md with draft: true and the full
 * frontmatter + article outline. Nothing is published until you review it
 * and set draft: false (and the pubDate is in the past).
 */
import { mkdirSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const positional = [];
const flags = {};
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith("--")) {
    const key = args[i].slice(2);
    const val = args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : "";
    flags[key] = val;
    if (val) i++;
  } else {
    positional.push(args[i]);
  }
}

const topic = positional.join(" ").trim();
if (!topic) {
  console.error("Usage: npm run draft -- \"Your article topic\" [--category slug] [--author name] [--tags a,b,c]");
  process.exit(1);
}

const slugify = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const slug = slugify(topic);
const dir = join(__dirname, "..", "src", "content", "articles");

if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const existing = readdirSync(dir).map((f) => f.replace(/\.md$/, ""));
if (existing.includes(slug)) {
  console.error(`A draft with slug "${slug}" already exists. Pick a different title or edit it.`);
  process.exit(1);
}

const now = new Date();
const today = now.toISOString().slice(0, 10);
const author = flags.author || "Deli Daily Updates Editorial Team";
const category = flags.category || "general-information";
const tags = (flags.tags || "")
  .split(",")
  .map((t) => t.trim())
  .filter(Boolean);

const frontmatter = `---
title: "${topic}"
slug: "${slug}"
description: "TODO: Write a 1-2 sentence description shown in search results and cards."
author: "${author}"
pubDate: ${today}
# updatedDate: ${today}
category: "${category}"
tags: ${JSON.stringify(tags)}
type: "how-to"
draft: true
featured: false
# seo:
#   title: ""
#   description: ""
featuredImage:
  src: ""
  alt: ""
  # caption: ""
  # credit: ""
# related:
#   - another-article-slug
# faq:
#   - question: "Example question?"
#     answer: "Example answer."
# sponsored: false
# affiliate: false
# sources:
#   - https://example.com/reference
---

## Introduction

TODO: 2-3 sentences. What problem does this solve, and who is it for?

## What you'll need

- TODO

## Step 1: ...

TODO: Write clear step-by-step instructions. Use numbered lists for steps,
short paragraphs, and subheadings (## / ###) to structure the article.

## Step 2: ...

## Common problems and fixes

TODO: Troubleshooting notes.

## FAQ

TODO: Only add genuinely useful questions to the frontmatter "faq" list above.

## Wrapping up

TODO: A short summary and a call to action / next steps.
`;

const file = join(dir, `${slug}.md`);
writeFileSync(file, frontmatter, "utf8");

console.log("");
console.log("Draft created: src/content/articles/" + slug + ".md");
console.log("");
console.log("Next steps:");
console.log("  1. Open the file and write the article content (markdown).");
console.log("  2. Fill in the description, featuredImage, tags, and any faq/sources.");
console.log("  3. Preview locally:  npm run dev");
console.log("  4. When ready, set draft: false and (re)deploy the site.");
console.log("");
console.log("See docs/AI-PUBLISHING.md for the full AI-assisted workflow.");
