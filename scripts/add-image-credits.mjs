#!/usr/bin/env node
/**
 * Add featuredImage caption + credit (license attribution) to the 100 new
 * articles using docs/image-sources.json (written by fetch-article-images.mjs).
 *
 * Usage: node scripts/add-image-credits.mjs
 *
 * - Only touches articles whose slug has ok:true metadata.
 * - Preserves existing src/alt and any existing caption/credit (replaces credit).
 * - Credit format: "Photo via <Source> (<license>)" + " — <artist>" when known.
 * - Caption: cleaned image title when it looks meaningful, else omitted.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const metaPath = join(root, "docs", "image-sources.json");
const articlesDir = join(root, "src", "content", "articles");

const meta = JSON.parse(readFileSync(metaPath, "utf8"));

const SOURCE_LABELS = {
  wikimedia: "Wikimedia Commons",
  flickr: "Flickr",
  stocksnap: "StockSnap",
  rawpixel: "Rawpixel",
  openverse: "Openverse",
};

function cleanTitle(title) {
  if (!title) return null;
  let t = title.replace(/^File:/i, "").trim();
  t = t.replace(/\s*\.(jpe?g|png|webp)$/i, "");
  if (t.length < 4 || t.length > 110) return null;
  if (/^\d+$/.test(t)) return null;
  if (/<div|http|\{\{|\[\[/.test(t)) return null;
  return t;
}

const LIC_NORM = {
  cc0: "CC0",
  by: "CC BY",
  "by-sa": "CC BY-SA",
  pd: "Public domain",
  pdm: "Public domain",
};

function creditFor(entry) {
  const src = SOURCE_LABELS[entry.source] || (entry.source ? entry.source : "open photo library");
  const lic = LIC_NORM[entry.license.toLowerCase()] || entry.license;
  let credit = `Photo via ${src} (${lic})`;
  if (entry.artist && !/^\s*$/.test(entry.artist) && entry.source !== "rawpixel") {
    credit += ` — ${entry.artist}`;
  }
  return credit;
}

function updateFrontmatter(content, credit, caption) {
  const lines = content.split("\n");
  const idx = lines.findIndex((l) => l.trim() === "featuredImage:");
  if (idx === -1) return content;
  let end = idx + 1;
  while (end < lines.length && /^\s+\S/.test(lines[end])) end++;
  const block = lines.slice(idx, end);
  const blockLines = block.slice(1);
  const out = [block[0]];
  let captionInserted = false;
  let creditInserted = false;
  for (const l of blockLines) {
    if (/^\s*caption:\s*/.test(l)) { out.push(l); captionInserted = true; continue; }
    if (/^\s*credit:\s*/.test(l)) {
      if (credit) out.push(`  credit: "${credit}"`);
      creditInserted = true;
      continue;
    }
    out.push(l);
  }
  if (caption && !captionInserted) out.push(`  caption: "${caption}"`);
  if (credit && !creditInserted) out.push(`  credit: "${credit}"`);
  lines.splice(idx, end - idx, ...out);
  return lines.join("\n");
}

let updated = 0, skipped = 0;
for (const file of readdirSync(articlesDir).filter((f) => f.endsWith(".md"))) {
  const slug = file.replace(/\.md$/, "");
  const entry = meta[slug];
  if (!entry || !entry.ok) { skipped++; continue; }
  const path = join(articlesDir, file);
  let content = readFileSync(path, "utf8");
  const credit = creditFor(entry);
  const caption = cleanTitle(entry.title);
  const next = updateFrontmatter(content, credit, caption);
  if (next !== content) {
    writeFileSync(path, next);
    updated++;
  } else {
    skipped++;
  }
}
console.log(`Credits added: ${updated} articles (skipped ${skipped}).`);
