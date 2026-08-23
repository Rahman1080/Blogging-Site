#!/usr/bin/env node
/**
 * Generate contact sheets of article covers for visual review.
 * Usage: node scripts/make-contact-sheets.mjs [outputDir] [cols]
 * Writes contact-sheet-<n>.jpg grids (300px wide thumbs) into outputDir.
 */
import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const coversDir = join(root, "public", "images", "covers");
const outDir = process.argv[2] || "/tmp";
const cols = parseInt(process.argv[3] || "5", 10);

const files = readdirSync(coversDir).filter((f) => f.endsWith(".jpg")).sort();
const PER_SHEET = cols * cols;
const cw = 300, ch = 169, pad = 8;

async function main() {
  let sheet = 0;
  for (let start = 0; start < files.length; start += PER_SHEET) {
    const batch = files.slice(start, start + PER_SHEET);
    const thumbs = await Promise.all(
      batch.map((f) => sharp(join(coversDir, f)).resize(cw, ch, { fit: "cover" }).jpeg().toBuffer())
    );
    const rows = Math.ceil(thumbs.length / cols);
    const W = cols * cw + (cols + 1) * pad;
    const H = rows * ch + (rows + 1) * pad;
    const bg = { r: 20, g: 20, b: 24 };
    const comp = [];
    for (let i = 0; i < thumbs.length; i++) {
      const col = i % cols, row = Math.floor(i / cols);
      comp.push({ input: thumbs[i], left: pad + col * (cw + pad), top: pad + row * (ch + pad) });
    }
    const out = join(outDir, `contact-sheet-${++sheet}.jpg`);
    await sharp({ create: { width: W, height: H, channels: 3, background: bg } })
      .composite(comp)
      .jpeg({ quality: 80 })
      .toFile(out);
    console.log(`${out}: ${batch.length} covers`);
  }
  console.log(`Total sheets: ${sheet}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
