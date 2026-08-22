import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { siteConfig } from "./src/data/site";

const siteUrl = (process.env.PUBLIC_SITE_URL || siteConfig.url).replace(/\/$/, "");

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: "static",
  integrations: [
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
      filter: (page) => {
        // Exclude administrative / private paths from the sitemap.
        return !/(?:^|\/)(404|drafts|admin|search|content-ideas)(?:\/|$)/.test(new URL(page).pathname);
      },
    }),
  ],
  server: {
    allowedHosts: [".monkeycode-ai.live"],
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
