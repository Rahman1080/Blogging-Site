#!/usr/bin/env node
/**
 * Generate branded 1200x675 cover images for articles that don't have one yet.
 *
 * Reads each article's title + category from src/content/articles/*.md and renders
 * a license-safe branded cover into public/images/covers/<slug>.jpg. Existing cover
 * files are left untouched.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const articlesDir = join(root, "src", "content", "articles");
const outDir = join(root, "public", "images", "covers");

const categoryColor = {
  technology: "#0e766c",
  ai: "#5b21b6",
  mobile: "#0e7490",
  android: "#15803d",
  iphone: "#1d4ed8",
  "laptops-computers": "#475569",
  windows: "#0369a1",
  mac: "#6b7280",
  "apps-software": "#4f46e5",
  internet: "#0f766e",
  gadgets: "#b45309",
  "how-to-guides": "#b91c1c",
  tutorials: "#7c2d12",
  troubleshooting: "#9a3412",
  "tips-tricks": "#a16207",
  "life-hacks": "#0d9488",
  productivity: "#2563eb",
  "online-tools": "#0891b2",
  cybersecurity: "#334155",
  "blogging-seo": "#0e7490",
  "buying-guides": "#be185d",
  "general-information": "#44403c",
};

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function wrapWords(words, maxChars) {
  const lines = [];
  let cur = "";
  for (const w of words) {
    const cand = cur ? cur + " " + w : w;
    if (cand.length > maxChars && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = cand;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function titleLines(title, fontPx) {
  const maxChars = Math.max(14, Math.floor(1000 / (0.6 * fontPx)));
  let words = title.split(/\s+/);
  let f = fontPx;
  for (let attempt = 0; attempt < 6; attempt++) {
    const lines = wrapWords(words, Math.max(14, Math.floor(1000 / (0.6 * f))));
    if (lines.length <= 3) return { lines, f };
    f -= 5;
  }
  const lines = wrapWords(words, Math.max(14, Math.floor(1000 / (0.6 * f))));
  while (lines.length > 3) {
    const last = lines.pop();
    lines[lines.length - 1] = lines[lines.length - 1] + " " + last.split(/\s+/)[0] + "…";
  }
  return { lines, f };
}

function svgFor(title, color, w, h) {
  const { lines, f } = titleLines(title, 52);
  const lineH = Math.round(f * 1.22);
  const blockH = lines.length * lineH;
  const y0 = Math.round(h * 0.34 - blockH / 2 + lineH / 2);
  const dot = (i, j) =>
    `<circle cx="${40 + i * 70}" cy="${40 + j * 70}" r="2.5" fill="#ffffff" opacity="0.14"/>`;
  const dots = [];
  for (let j = 0; j < 5; j++) for (let i = 0; i < 17; i++) dots.push(dot(i, j));
  const texts = lines
    .map((ln, idx) => {
      const y = y0 + idx * lineH;
      return `<text x="88" y="${y}" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="${f}" font-weight="bold" fill="#ffffff" opacity="0.98">${esc(ln)}</text>`;
    })
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${color}"/>
  <rect x="0" y="0" width="${w}" height="${h}" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.18"/>
  </linearGradient></defs>
  ${dots.join("")}
  <circle cx="88" cy="84" r="34" fill="#ffffff" opacity="0.96"/>
  <path d="M66 86l16 15 34-33" stroke="${color}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  ${texts}
  <text x="88" y="${h - 46}" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="20" fill="#ffffff" opacity="0.75">dailyupdatesworld.com</text>
</svg>`;
}

function parseFrontmatter(file) {
  const s = readFileSync(file, "utf8");
  const m = s.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = m[1];
  const title = fm.match(/^title:\s*"(.*)"\s*$/m)?.[1];
  const category = fm.match(/^category:\s*"([a-z0-9-]+)"\s*$/m)?.[1];
  const slug = file.split("/").pop().replace(/\.md$/, "");
  return { slug, title, category };
}

async function main() {
  let made = 0;
  let skipped = 0;
  for (const file of readdirSync(articlesDir).filter((f) => f.endsWith(".md"))) {
    const meta = parseFrontmatter(join(articlesDir, file));
    if (!meta || !meta.title || !meta.category) continue;
    const out = join(outDir, `${meta.slug}.jpg`);
    if (existsSync(out)) {
      skipped++;
      continue;
    }
    const color = categoryColor[meta.category] || "#0e766c";
    const svg = Buffer.from(svgFor(meta.title, color, 1200, 675));
    await sharp(svg).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
    console.log("Generated", meta.slug + ".jpg", `(${meta.category})`);
    made++;
  }
  console.log(`\nDone: ${made} generated, ${skipped} skipped (already exist).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
