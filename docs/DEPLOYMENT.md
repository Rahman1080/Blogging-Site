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

Hostinger's hPanel supports deploying straight from a Git repository.

1. Push this repository to a GitHub repository (private is fine).
2. In hPanel go to **Websites → your site → Git** (under Advanced).
3. Connect the repository and set the deploy command:

   ```bash
   npm ci && npm run build
   ```

4. Set the **Deployment path** to `public_html` and the **Application root** to `dist/`.
5. Add the environment variable `PUBLIC_SITE_URL=https://dailyupdatesworld.com`
   if Hostinger's Git app supports env vars; otherwise the default already matches.
6. Deploy. Hostinger runs the build and serves `dist/` from your domain.

## Environment variables

Copy `.env.example` to `.env` (never commit the real `.env`). All variables are optional:

| Variable | Purpose | Default |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | Canonical URL used in sitemap, RSS, canonical tags | `https://dailyupdatesworld.com` |
| `PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-XXXXXXX`) | off |
| `PUBLIC_GTM_ID` | Google Tag Manager container ID (`GTM-XXXX`) | off |
| `PUBLIC_ADS_ENABLED` | Render ad placeholders (`true`/`false`) | off |

## After deploying

1. **Google Search Console** — verify domain ownership (DNS TXT or HTML file), then submit
   `https://dailyupdatesworld.com/sitemap-index.xml`.
2. **Bing Webmaster Tools** — submit the same sitemap if you want Bing coverage.
3. Check `robots.txt` and `.htaccess` were uploaded (they are in `dist/`).
4. Test the site: homepage, an article page, `/search`, a category page, and the 404 page.

## Publishing an article (reminder)

See `docs/AI-PUBLISHING.md`. To publish: set `draft: false`, keep `pubDate` ≤ today,
rebuild, deploy.

## Troubleshooting

- **Links 404** — you uploaded the `dist/` folder instead of its contents, or the domain
  differs from `PUBLIC_SITE_URL`. Rebuild with the correct URL and upload again.
- **`.htaccess` not taking effect** — Hostinger uses LiteSpeed/Apache; confirm your plan
  supports `.htaccess` overrides (hPanel → your site → Advanced settings).
- **Broken images** — ensure `images/` and `_astro/` folders were uploaded (they are
  hidden in some file managers; enable "show hidden files").
