#!/usr/bin/env node
/**
 * Generate branded editorial cover images for categories and articles.
 *
 * Output: public/images/covers/<slug>.png (1200x675) — original, license-safe,
 * dependency-free images generated locally with sharp. Replace individual covers
 * with real photos later by editing the article frontmatter.
 */
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images", "covers");
mkdirSync(outDir, { recursive: true });

const categories = [
  { slug: "technology", name: "Technology", color: "#0e766c" },
  { slug: "ai", name: "AI", color: "#5b21b6" },
  { slug: "mobile", name: "Mobile", color: "#0e7490" },
  { slug: "android", name: "Android", color: "#15803d" },
  { slug: "iphone", name: "iPhone", color: "#1d4ed8" },
  { slug: "laptops-computers", name: "Laptops & Computers", color: "#475569" },
  { slug: "windows", name: "Windows", color: "#0369a1" },
  { slug: "mac", name: "Mac", color: "#6b7280" },
  { slug: "apps-software", name: "Apps & Software", color: "#4f46e5" },
  { slug: "internet", name: "Internet", color: "#0f766e" },
  { slug: "gadgets", name: "Gadgets", color: "#b45309" },
  { slug: "how-to-guides", name: "How-To Guides", color: "#b91c1c" },
  { slug: "tutorials", name: "Tutorials", color: "#7c2d12" },
  { slug: "troubleshooting", name: "Troubleshooting", color: "#9a3412" },
  { slug: "tips-tricks", name: "Tips & Tricks", color: "#a16207" },
  { slug: "life-hacks", name: "Life Hacks", color: "#0d9488" },
  { slug: "productivity", name: "Productivity", color: "#2563eb" },
  { slug: "online-tools", name: "Online Tools", color: "#0891b2" },
  { slug: "cybersecurity", name: "Cybersecurity", color: "#334155" },
  { slug: "blogging-seo", name: "Blogging & SEO", color: "#0e7490" },
  { slug: "buying-guides", name: "Buying Guides", color: "#be185d" },
  { slug: "general-information", name: "General Information", color: "#44403c" },
];

function svgFor(cat, w, h) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const name = esc(cat.name);
  const dot = (i, j) => `<circle cx="${40 + i * 70}" cy="${40 + j * 70}" r="2.5" fill="#ffffff" opacity="0.14"/>`;
  const dots = [];
  for (let j = 0; j < 5; j++) for (let i = 0; i < 17; i++) dots.push(dot(i, j));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${cat.color}"/>
  <rect x="0" y="0" width="${w}" height="${h}" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.18"/>
  </linearGradient></defs>
  ${dots.join("")}
  <circle cx="88" cy="84" r="34" fill="#ffffff" opacity="0.96"/>
  <path d="M66 86l16 15 34-33" stroke="${cat.color}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="88" y="${h - 90}" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="42" font-weight="bold" fill="#ffffff" opacity="0.98">${name}</text>
  <text x="88" y="${h - 46}" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="20" fill="#ffffff" opacity="0.75">deli-dailyupdatesworld.com</text>
</svg>`;
}

async function main() {
  for (const cat of categories) {
    const svg = Buffer.from(svgFor(cat, 1200, 675));
    await sharp(svg).png().toFile(join(outDir, `${cat.slug}.png`));
    console.log("Generated", cat.slug + ".png");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
