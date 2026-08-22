#!/usr/bin/env node
/**
 * Submit URLs to Bing IndexNow.
 *
 * The verification key file lives in public/<key>.txt and the host is in
 * public/indexnow.txt (both are part of the deployed site, which is how Bing
 * verifies ownership).
 *
 * Usage:
 *   npm run indexnow              # submit all sitemap URLs
 *   npm run indexnow -- --dry-run # list URLs without submitting
 *   node scripts/submit-indexnow.mjs --urls https://site.com/a,https://site.com/b
 *
 * Env:
 *   INDEXNOW_KEY  (optional; falls back to the key file in public/)
 *   INDEXNOW_HOST (optional; falls back to public/indexnow.txt)
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

function readKey() {
  if (process.env.INDEXNOW_KEY) return process.env.INDEXNOW_KEY.trim();
  const candidates = readdirSync(publicDir).filter((f) => /^[0-9a-f]{32}\.txt$/.test(f));
  if (candidates.length === 0) {
    throw new Error("No IndexNow key file found in public/. Run with INDEXNOW_KEY set.");
  }
  return candidates[0].replace(/\.txt$/, "");
}

function readHost() {
  if (process.env.INDEXNOW_HOST) return process.env.INDEXNOW_HOST.trim();
  return readFileSync(join(publicDir, "indexnow.txt"), "utf8").trim();
}

function sitemapUrls() {
  const file = join(root, "dist", "sitemap-0.xml");
  const xml = readFileSync(file, "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const urlsArg = args.find((a) => a.startsWith("--urls="));
const urls = urlsArg
  ? urlsArg.slice(7).split(",").map((s) => s.trim()).filter(Boolean)
  : sitemapUrls();

const host = readHost();
const key = readKey();
const keyLocation = `https://${host}/${key}.txt`;

if (urls.length === 0) {
  console.error("No URLs to submit.");
  process.exit(1);
}

console.log(`Host: ${host}`);
console.log(`Key: ${key}`);
console.log(`Key location: ${keyLocation}`);
console.log(`URLs to submit: ${urls.length}`);
if (dryRun) {
  urls.slice(0, 20).forEach((u) => console.log("  " + u));
  if (urls.length > 20) console.log(`  … and ${urls.length - 20} more`);
  process.exit(0);
}

const payload = { host, key, keyLocation, urlList: urls };
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

console.log(`IndexNow API responded with HTTP ${res.status}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
console.log("Submitted successfully.");
