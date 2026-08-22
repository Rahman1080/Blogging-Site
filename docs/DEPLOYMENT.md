# Deployment Guide

This site is a **static Astro site**. Deployment means building the site and uploading the
resulting `dist/` folder to your Hostinger account. No server, database, or runtime is
required — anything that can serve static files works.

## What you deploy

Running `npm run build` produces a `dist/` folder containing:

- `index.html` and all article/category/tag/page HTML files
- `_astro/` hashed CSS/JS assets
- `sitemap-index.xml`, `sitemap-0.xml`, `rss.xml`, `search-index.json`
- `robots.txt`, `.htaccess`, favicons, and `images/covers/*.png`

Upload this folder's **contents** to your Hostinger `public_html/` directory.

## Prerequisites

- Node.js 20+ and npm on your local machine (or use Hostinger's Git-based deploy, below)
- A Hostinger account with a domain pointed at it (DNS A record or nameservers)
- Ownership verified in Google Search Console

## Option A — Upload `dist/` manually

1. Build locally:

   ```bash
   npm ci
   npm run build
   ```

2. Connect to your Hostinger account via **File Manager** or SFTP (e.g. with FileZilla).
3. Navigate to `public_html/` and delete/overwrite its contents with the **contents** of
   `dist/` (copy the files, not the `dist/` folder itself).
4. Set the site URL environment variable before building so links match your domain:

   ```bash
   PUBLIC_SITE_URL=https://dailyupdatesworld.com npm run build
   ```

   The default in `src/data/site.ts` is already the production URL, so this is optional.

## Option B — Hostinger Git deployment (recommended)

Hostinger's hPanel supports deploying straight from a Git repository. The site is fully
static (`output: "static"`), so Hostinger just needs to run the build and serve the files
from your document root — no Node.js process, VPS, or backend is required.

### Git settings

In hPanel go to **Websites → your site → Advanced → Git** and fill in:

| Setting | Value |
| --- | --- |
| Repository URL | `https://github.com/Rahman1080/Blogging-Site` |
| Branch | `master` |
| Build command | `npm ci && npm run build` |
| Output / deploy directory (Application root) | `dist/` |
| Document root (Deployment path) | `public_html/` |

Deploy steps:

1. Connect the repository, select branch `master`, and enter the build command above.
2. Point the **Application root** at `dist/` and the **Deployment path** at `public_html/`.
   Hostinger builds the project and copies the **contents** of `dist/` (index.html,
   _astro/, sitemap files, robots.txt, .htaccess, images) directly into `public_html/`.
3. Required environment variables: **none**. `siteConfig.url` in `src/data/site.ts`
   already defaults to `https://dailyupdatesworld.com`, so canonical tags, the sitemap,
   and RSS are correct even without setting anything in Hostinger's Git settings.
4. Press **Deploy**. When it finishes, open `https://dailyupdatesworld.com` and verify
   the homepage, an article, and `/404` render.

> If the deploy lands in a subfolder (e.g. `public_html/dist/…`), the domain shows **403
> Forbidden** because no `index.html` exists at the document root. Point the deploy output
> at `public_html/` itself (see Troubleshooting below).

## Environment variables

Copy `.env.example` to `.env` (never commit the real `.env`). All variables are optional:

| Variable | Purpose | Default |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | Canonical URL used in sitemap, RSS, canonical tags | `https://dailyupdatesworld.com` |
| `PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-XXXXXXX`) | off |
| `PUBLIC_GTM_ID` | Google Tag Manager container ID (`GTM-XXXX`) | off |
| `PUBLIC_ADS_ENABLED` | Render ad placeholders (`true`/`false`) | off |
| `INDEXNOW_KEY` | IndexNow key (optional; auto-detected from `public/<key>.txt`) | auto |

## After deploying

1. **Google Search Console** — verify domain ownership (DNS TXT or HTML file), then submit
   `https://dailyupdatesworld.com/sitemap-index.xml`.
2. **Bing Webmaster Tools** — verify the site (your IndexNow key file doubles as a
   verification file), then submit the sitemap.
3. **Bing IndexNow** — notify Bing of new/updated URLs after every deploy:

   ```bash
   npm run indexnow
   ```

   The key file (`public/<key>.txt`) and `public/indexnow.txt` are already in `dist/`, so
   no extra setup is needed on the server. Use `--dry-run` to preview the URL list first.
   Yandex does not use IndexNow; it picks up the same XML sitemap and robots.txt.
4. Check `robots.txt` and `.htaccess` were uploaded (they are in `dist/`).
5. Test the site: homepage, an article page, `/search`, a category page, an author page,
   and the 404 page.

## Publishing an article (reminder)

See `docs/AI-PUBLISHING.md`. To publish: set `draft: false`, keep `pubDate` ≤ today,
rebuild, deploy.

## Troubleshooting

- **403 Forbidden on the whole domain** — the files are not at the document root. This
  happens when the Git deploy copies the `dist/` **folder** (or its build output) into a
  subfolder such as `public_html/dist/` instead of into `public_html/` itself, leaving no
  `index.html` at the site root. Fix: set the deploy's document root / deployment path to
  `public_html/` and the application root to `dist/`, then redeploy. After a correct
  deploy, `https://dailyupdatesworld.com/index.html` must exist.
- **403 on a specific folder** — directory listing is disabled (`Options -Indexes` in the
  shipped `.htaccess`) and that folder has no `index.html`. All real routes have one;
  if you see it, you are browsing an empty directory. The shipped `.htaccess` also maps
  `ErrorDocument 403 /404.html`, so stray 403s render the styled 404 page.
- **Links 404** — you uploaded the `dist/` folder instead of its contents, or the domain
  differs from `PUBLIC_SITE_URL`. Rebuild with the correct URL and upload again.
- **`.htaccess` not taking effect** — Hostinger uses LiteSpeed/Apache; confirm your plan
  supports `.htaccess` overrides (hPanel → your site → Advanced settings).
- **Broken images** — ensure `images/` and `_astro/` folders were uploaded (they are
  hidden in some file managers; enable "show hidden files").
