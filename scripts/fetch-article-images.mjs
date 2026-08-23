#!/usr/bin/env node
/**
 * Fetch license-safe photos from Openverse / Wikimedia Commons (CC0 / CC BY / CC BY-SA / PD / GFDL)
 * for articles and generate 1200x675 covers at public/images/covers/<slug>.jpg.
 *
 * Usage:
 *   node scripts/fetch-article-images.mjs                 # all article queries
 *   node scripts/fetch-article-images.mjs <slug> [slug2]  # specific articles only
 *
 * - Each slug has an ordered list of topical queries (fallback chain).
 * - For every query: Openverse is tried first, then Wikimedia Commons.
 * - Candidates filtered for raster images, min resolution, wide aspect, acceptable license.
 * - Best match chosen by keyword overlap with the query; ties keep source order.
 * - Skips candidates already used by another article (dedupe).
 * - Writes attribution metadata to docs/image-sources.json.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "images", "covers");
const metaPath = join(root, "docs", "image-sources.json");

const OV_API = "https://api.openverse.org/v1/images/";
const COMMONS_API = "https://commons.wikimedia.org/w/api.php";

// Hand-verified Wikimedia Commons file picks for slugs where search-based
// sourcing kept landing on weak or duplicated images.
const MANUAL = {
  "how-to-secure-your-home-wifi-network": "File:ASUS Wi-Fi ROUTER TUF 6500.jpg",
  "how-to-speed-up-home-internet": "File:Wi-fi router.jpg",
  "wifi-network-not-showing-up": "File:FRITZ!Box 7390 - Wifi antenna-7364.jpg",
  "wifi-connected-no-internet-windows": "File:Arris TM 1602 cable modem branded with Optimum.jpg",
  "what-is-5g-explained": "File:2019-07-21 - Vodafone 5G Standort Hattstedt.jpg",
  "what-is-a-qr-code": "File:Huge QR code billboard in central Shibuya, readable even behind trees.jpg",
  "ssd-vs-hdd-explained": "File:2017 Dysk SSD Plextor M8Pe(Y) 256GB.jpg",
  "how-to-set-up-parental-controls": "File:Children's Heaven Computer Class.JPG",
  "how-to-stop-app-notifications": "File:Notification tai facebook.jpg",
  "iphone-getting-hot": "File:Apple-iphone-smartphone-technology-1 (24218252052).jpg",
  "how-to-screen-record-iphone": "File:IPhone models.jpg",
  "how-to-save-webpage-as-pdf": "File:Laptop computer.jpeg",
  "best-budget-laptops": "File:HP Pavilion Computer laptop keyboard closeup.jpg",
  "email-hacked-what-to-do": "File:Email de Christophe Barman.png",
  "how-to-use-phone-as-hotspot": "File:Apple-iphone-smartphone-fruits (23699680083).jpg",
  "how-to-clear-app-cache-android-iphone": "File:Fediverse smartphone apps (photo by Elena Rossini).jpg",
  "tablets-vs-laptops": "File:Framework Tablet Complete Build.jpg",
};

const QUERIES = {
  "how-to-explain-ai-vs-ml-vs-dl": ["artificial intelligence", "neural network"],
  "how-to-write-better-chatgpt-prompts": ["chatgpt", "chatbot"],
  "best-free-ai-tools-2026": ["artificial intelligence robot", "robot"],
  "how-to-edit-photos-with-ai": ["photo editing", "image editing", "photoshop", "photo editor"],
  "ai-in-everyday-life-examples": ["smartphone apps", "artificial intelligence"],
  "ai-hallucinations-fact-check": ["artificial intelligence robot", "robot"],
  "how-to-make-ai-videos": ["video production", "video camera", "film studio", "video editing"],
  "will-ai-replace-programmers": ["programmer coding", "computer programmer", "programming code", "software developer"],
  "ai-chatbot-privacy-data": ["smartphone", "data privacy", "computer lock", "chat app"],
  "how-to-use-chatgpt-on-phone": ["chatgpt", "smartphone texting"],

  // Cybersecurity
  "how-to-create-a-strong-password": ["password lock", "password keyboard"],
  "two-factor-authentication-explained": ["two factor authentication", "smartphone login"],
  "how-to-spot-phishing-email": ["phishing email", "phishing"],
  "how-to-protect-your-identity-online": ["identity security", "fingerprint", "identity card", "privacy"],
  "what-is-a-vpn": ["vpn", "network firewall", "computer security", "router"],
  "is-public-wifi-safe": ["coffee shop", "cafe", "wifi", "laptop cafe"],
  "signs-device-hacked": ["computer virus", "malware"],
  "ransomware-explained": ["ransomware", "computer lock"],
  "what-to-do-after-data-breach": ["hacker computer", "data security", "computer security", "hacker"],
  "how-to-identify-ai-scam-message": ["spam email", "scam call", "phishing", "phone message"],

  // Android
  "android-phone-not-charging": ["android charging cable", "smartphone charging"],
  "how-to-transfer-data-new-android": ["smartphone hand", "android phone", "samsung", "mobile phone", "samsung phone", "android hand"],
  "android-privacy-settings": ["android phone", "android settings"],
  "android-phone-overheating": ["smartphone", "android phone"],
  "should-you-close-background-apps-android": ["android apps", "android phone"],
  "how-to-clear-cache-android": ["android phone", "smartphone"],
  "android-apps-keep-crashing": ["android smartphone", "android phone", "smartphone screen", "mobile phone"],
  "how-to-take-a-screenshot-android": ["android phone", "smartphone screen", "mobile device", "phone"],
  "how-to-auto-update-apps-android": ["android phone", "android smartphone", "mobile phone"],
  "android-screen-black-not-turning-on": ["android phone", "smartphone", "black phone", "phone dark"],

  // iPhone
  "iphone-wont-turn-on": ["iphone charging", "iphone"],
  "how-to-transfer-photos-iphone-computer": ["iphone", "apple phone", "iphone computer", "smartphone"],
  "iphone-storage-full-after-deleting-photos": ["iphone", "apple iphone", "smartphone"],
  "iphone-battery-draining-fast": ["iphone battery", "iphone", "smartphone"],
  "how-to-speed-up-slow-iphone": ["iphone", "apple iphone", "smartphone"],
  "iphone-getting-hot": ["iphone", "smartphone", "apple phone", "phone battery", "apple iphone"],
  "iphone-apps-keep-crashing": ["iphone apps", "iphone", "apple smartphone", "apple iphone", "smartphone apps", "apps"],
  "face-id-not-working": ["iphone camera", "iphone"],
  "how-to-screen-record-iphone": ["iphone screen", "iphone", "smartphone", "video recording phone", "apple iphone"],
  "how-to-cancel-icloud-storage": ["icloud", "iphone", "data storage", "server", "server room", "data center"],

  // Windows
  "windows-11-taskbar-not-working": ["windows 11", "windows desktop", "windows computer", "desktop screen"],
  "how-to-check-pc-specs-windows": ["computer motherboard", "computer hardware"],
  "wifi-connected-no-internet-windows": ["wifi router", "wireless router", "router", "internet router", "network", "modem", "wifi", "cable modem"],
  "how-to-update-drivers-windows-11": ["computer hardware", "motherboard"],
  "windows-update-stuck": ["windows computer", "windows desktop", "computer screen", "laptop"],
  "how-to-free-up-disk-space-windows": ["hard drive", "computer hard drive"],
  "windows-pc-wont-boot": ["desktop computer", "computer power"],
  "how-to-uninstall-programs-windows-11": ["windows desktop", "windows 11", "computer", "laptop"],
  "blue-screen-of-death-explained": ["blue screen of death", "blue screen computer"],
  "how-to-reset-windows-pc": ["desktop computer", "windows computer", "computer", "laptop"],

  // Internet
  "how-to-speed-up-home-internet": ["wifi router", "home network", "internet", "computer network"],
  "mesh-wifi-vs-extender": ["wifi router", "wireless router", "router", "network device", "mesh network", "wireless"],
  "how-to-set-up-a-new-router": ["wifi router", "router", "ethernet", "network setup"],
  "wifi-vs-ethernet": ["ethernet cable", "network cable"],
  "how-to-find-your-ip-address": ["computer network", "network server"],
  "internet-slow-at-night": ["wifi router", "router", "internet", "network", "home router"],
  "fiber-vs-cable-internet": ["fiber optic", "fiber optic cable", "ethernet cable", "network cable"],
  "how-to-choose-internet-plan": ["wifi router", "home network", "internet", "router"],
  "how-to-secure-your-home-wifi-network": ["wifi router", "router", "network security", "computer security", "wireless", "network router", "security"],
  "wifi-network-not-showing-up": ["wifi router", "wifi", "wireless", "laptop wifi", "wireless router", "wifi signal", "internet", "wireless signal", "router antenna", "wifi antenna"],

  // Mobile
  "how-to-reduce-mobile-data": ["smartphone", "android phone", "mobile phone"],
  "what-is-a-qr-code": ["qr code", "qr", "qrcode", "barcode", "qr code scan"],
  "how-to-stop-app-notifications": ["smartphone notification", "phone screen", "smartphone", "phone notifications", "android"],
  "how-to-find-a-lost-phone": ["smartphone map", "gps phone", "gps map", "gps", "location"],
  "how-to-use-phone-as-hotspot": ["smartphone", "phone wifi", "mobile phone", "android", "wifi phone", "mobile"],
  "what-is-rcs-messaging": ["smartphone text", "phone messages"],
  "how-to-clear-app-cache-android-iphone": ["smartphone apps", "smartphone", "android", "phone apps", "phone"],
  "apps-not-updating-fix": ["smartphone apps", "app store", "smartphone", "mobile apps"],
  "how-to-scan-documents-with-phone": ["smartphone", "scanner", "document scan", "mobile phone"],
  "how-to-take-better-phone-photos": ["smartphone camera", "phone photography"],

  // Computers (Mac & laptops)
  "mac-basics-beginners": ["macbook", "apple laptop"],
  "how-to-take-a-screenshot-on-mac": ["macbook", "apple computer", "laptop keyboard", "mac"],
  "mac-storage-full": ["macbook", "laptop desk"],
  "laptop-battery-draining-fast": ["laptop battery", "laptop charger", "laptop", "power adapter"],
  "how-to-speed-up-a-mac": ["macbook", "apple laptop", "laptop", "computer desk"],
  "desktop-vs-laptop": ["desktop computer", "laptop computer"],
  "how-to-connect-laptop-to-tv": ["laptop tv", "television", "hdmi", "tv screen"],
  "windows-vs-mac": ["laptop computer", "laptop", "computer", "desktop"],
  "laptop-wont-turn-on": ["laptop power", "laptop"],
  "how-to-choose-computer-college": ["student laptop", "laptop backpack"],

  // How-to
  "how-to-clear-cache-browser": ["web browser", "browser", "computer screen", "firefox"],
  "email-hacked-what-to-do": ["email", "email inbox", "computer", "laptop", "laptop email", "computer email"],
  "how-to-transfer-files-phone-computer-wireless": ["smartphone laptop", "wireless", "wifi", "bluetooth", "wireless transfer", "usb cable", "file transfer"],
  "how-to-fix-printer-offline": ["printer", "office printer"],
  "how-to-set-up-parental-controls": ["parent child computer", "family computer", "child tablet", "tablet child", "parent child"],
  "how-to-recover-deleted-photos": ["photo album", "camera photos"],
  "how-to-save-webpage-as-pdf": ["computer screen", "laptop", "pdf"],
  "how-to-organize-digital-files": ["file folders", "documents", "organizing", "files", "organize", "file folder", "office desk"],
  "no-sound-on-computer": ["computer headphones", "speakers computer"],
  "common-tech-problems-and-fixes": ["computer repair", "repair tools"],

  // Buying guides
  "best-budget-phones": ["budget smartphone", "android phone"],
  "best-budget-laptops": ["laptop computer", "laptop", "budget laptop"],
  "how-much-ram-do-you-need": ["computer memory", "ram"],
  "ssd-vs-hdd-explained": ["hard drive", "solid state drive", "computer storage"],
  "what-is-5g-explained": ["5g", "5g network", "smartphone", "mobile network"],
  "refurbished-vs-new-phones": ["used smartphone", "smartphone", "mobile phone", "android"],
  "how-to-check-a-used-phone-before-buying": ["used phone", "smartphone", "android phone", "mobile phone", "smartphone hand"],
  "how-to-choose-a-monitor": ["computer monitor", "monitor screen", "computer screen", "display"],
  "mechanical-vs-membrane-keyboard": ["mechanical keyboard", "keyboard"],
  "tablets-vs-laptops": ["tablet", "tablet computer", "laptop", "ipad"]
};

const LIC_OK = new Set(["cc0", "by", "by-sa"]);
const LIC_OK_RE = /(CC0|CC BY|CC BY-SA|Public domain|PD|GFDL)/i;
const LIC_BAD_RE = /(NC|ND|fair use)/i;

function licOk(license) {
  if (!license) return false;
  if (LIC_OK.has(license.toLowerCase())) return true;
  if (LIC_BAD_RE.test(license)) return false;
  return LIC_OK_RE.test(license);
}

async function fetchByTitle(title) {
  const params = new URLSearchParams({
    action: "query", titles: title, prop: "imageinfo",
    iiprop: "url|size|mime|extmetadata", iiurlwidth: "1600",
    format: "json", redirects: "1",
  });
  await throttle();
  const res = await fetch(`${COMMONS_API}?${params}`, { headers: { "User-Agent": "Info247-article-images/1.0 (https://dailyupdatesworld.com)" } });
  if (!res.ok) throw new Error(`Commons ${res.status}`);
  const d = await res.json();
  const pages = (d.query && d.query.pages) || {};
  const pg = Object.values(pages)[0];
  if (!pg || pg.missing) return null;
  const ii = (pg.imageinfo || [])[0] || {};
  const ex = ii.extmetadata || {};
  return {
    title: pg.title || "",
    url: ii.thumburl || ii.url || "",
    width: ii.width || 0,
    height: ii.height || 0,
    license: ((ex.LicenseShortName || {}).value || "").trim(),
    artist: stripHtml(((ex.Artist || {}).value || "").trim()),
    pageUrl: ii.descriptionurl || "",
    source: "wikimedia",
    attribution: "",
  };
}

async function searchOpenverse(query) {
  await throttle();
  const params = new URLSearchParams({ q: query, license: "cc0,by,by-sa", page_size: "20" });
  const res = await fetch(`${OV_API}?${params}`, { headers: { "User-Agent": "Info247-article-images/1.0" } });
  if (!res.ok) throw new Error(`Openverse ${res.status}`);
  return (await res.json()).results || [];
}

async function searchCommons(query) {
  await throttle();
  const params = new URLSearchParams({
    action: "query", generator: "search",
    gsrsearch: `filetype:bitmap ${query}`, gsrnamespace: "6", gsrlimit: "20",
    prop: "imageinfo", iiprop: "url|size|mime|extmetadata", iiurlwidth: "1600",
    format: "json",
  });
  const res = await fetch(`${COMMONS_API}?${params}`, { headers: { "User-Agent": "Info247-article-images/1.0 (https://dailyupdatesworld.com)" } });
  if (!res.ok) throw new Error(`Commons ${res.status}`);
  const d = await res.json();
  const pages = (d.query && d.query.pages) || {};
  return Object.values(pages).map((pg) => {
    const ii = (pg.imageinfo || [])[0] || {};
    const ex = ii.extmetadata || {};
    return {
      title: pg.title || "",
      url: ii.thumburl || ii.url || "",
      width: ii.width || 0,
      height: ii.height || 0,
      license: ((ex.LicenseShortName || {}).value || "").trim(),
      artist: stripHtml(((ex.Artist || {}).value || "").trim()),
      pageUrl: ii.descriptionurl || "",
      source: "wikimedia",
      attribution: "",
    };
  });
}

function stripHtml(s) {
  return s.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#160;/g, " ").replace(/\s+/g, " ").trim().slice(0, 120);
}

function validCandidates(results) {
  return results.filter((r) => {
    if (!licOk(r.license)) return false;
    if (!/\.(jpe?g|png|webp)(\?|$)/i.test(r.url || "")) return false;
    const w = r.width || 0, h = r.height || 0;
    if (w < 900 || h < 700) return false;
    if (w / h < 1.1) return false;
    return true;
  });
}

function scoreCandidates(cands, query) {
  const tokens = query.toLowerCase().split(/\s+/).filter((t) => t.length > 3);
  return cands.map((c) => {
    const title = (c.title || "").toLowerCase();
    const overlap = tokens.filter((t) => title.includes(t)).length;
    const srcBonus = c.source === "wikimedia" ? 0.2 : 0;
    return { c, overlap: overlap + srcBonus };
  }).sort((a, b) => b.overlap - a.overlap);
}

const BROWSER_UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

async function downloadImage(url) {
  await throttleDownload();
  for (let attempt = 0; attempt < 3; attempt++) {
    const ac = new AbortController();
    const timer = setTimeout(() => ac.abort(), 8000);
    try {
      const res = await fetch(url, { headers: { "User-Agent": BROWSER_UA, "Accept": "image/*" }, signal: ac.signal });
      if (res.status === 429) {
        clearTimeout(timer);
        await sleep(1200 * (attempt + 1));
        continue;
      }
      clearTimeout(timer);
      if (!res.ok) return null;
      const ct = res.headers.get("content-type") || "";
      if (!ct.startsWith("image/")) return null;
      return Buffer.from(await res.arrayBuffer());
    } catch {
      clearTimeout(timer);
      return null;
    }
  }
  return null;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let lastReq = 0;
async function throttle() {
  const now = Date.now();
  const wait = Math.max(0, 400 - (now - lastReq));
  if (wait) await sleep(wait);
  lastReq = Date.now();
}

let lastDl = 0;
async function throttleDownload() {
  const now = Date.now();
  const wait = Math.max(0, 1500 - (now - lastDl));
  if (wait) await sleep(wait);
  lastDl = Date.now();
}

async function main() {
  const only = process.argv.slice(2);
  const slugs = (only.length ? only : Object.keys(QUERIES)).filter((s) => QUERIES[s]);
  let prevJson = {};
  try { prevJson = JSON.parse(await (await import("node:fs/promises")).readFile(metaPath, "utf8")); } catch {}
  const meta = { ...prevJson };

  let ok = 0;
  const used = new Set();
  if (process.env.SEED_USED === "1") {
    for (const e of Object.values(meta)) if (e && e.ok && e.url) used.add(e.url);
    console.log(`Seeding used set with ${used.size} existing image URLs.`);
  }
  console.log(`Sourcing ${slugs.length} covers (Openverse -> Commons)...`);
  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    try {
      let chosen = null, chosenQuery = null, chosenOverlap = 0, buf = null;
      if (MANUAL[slug]) {
        const c = await fetchByTitle(MANUAL[slug]);
        if (c && validCandidates([c]).length && !used.has(c.url)) {
          const b = await downloadImage(c.url);
          if (b) {
            chosen = c; chosenQuery = MANUAL[slug]; chosenOverlap = 1; buf = b;
          }
        }
      }
      if (!chosen) {
      for (const q of QUERIES[slug]) {
        let cands = validCandidates(await searchOpenverse(q));
        if (!cands.length) cands = validCandidates(await searchCommons(q));
        const ranked = scoreCandidates(cands, q);
        for (const { c, overlap } of ranked) {
          if (used.has(c.url)) continue;
          const b = await downloadImage(c.url);
          if (!b) continue;
          chosen = c; chosenQuery = q; chosenOverlap = overlap; buf = b;
          break;
        }
        if (chosen) break;
        await sleep(200);
      }
      }
      if (!chosen || !buf) {
        meta[slug] = { slug, ok: false, reason: "no usable candidate" };
        console.log(`  [${i + 1}/${slugs.length}] ${slug}: SKIP (no candidate)`);
        await sleep(300);
        continue;
      }
      const out = join(outDir, `${slug}.jpg`);
      await sharp(buf).rotate().resize(1200, 675, { fit: "cover", position: "attention" }).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
      used.add(chosen.url);
      const rel = chosenOverlap >= 1 ? "RELEVANT" : "LOW-MATCH";
      meta[slug] = {
        slug, ok: true, query: chosenQuery,
        title: chosen.title || "", url: chosen.url, pageUrl: chosen.pageUrl || "",
        width: chosen.width, height: chosen.height,
        artist: chosen.artist || "", license: chosen.license,
        source: chosen.source || "", relevance: rel,
      };
      console.log(`  [${i + 1}/${slugs.length}] ${slug}: OK [${rel}] <- "${(chosen.title || "").slice(0, 70)}" (${chosen.license}) [${chosen.source}]`);
      ok++;
    } catch (e) {
      meta[slug] = { slug, ok: false, reason: e.message };
      console.log(`  [${i + 1}/${slugs.length}] ${slug}: ERROR ${e.message}`);
    }
    await sleep(300);
  }

  mkdirSync(join(root, "docs"), { recursive: true });
  writeFileSync(metaPath, JSON.stringify(meta, null, 2));
  console.log(`\nDone: ${ok}/${slugs.length} succeeded. Metadata in docs/image-sources.json.`);
  for (const r of slugs.map((s) => meta[s]).filter((r) => r && !r.ok)) console.log("  FAILED:", r.slug, "-", r.reason);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
