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
    // Dev preview only (e.g. the MonkeyCode *.monkeycode-ai.live host).
    // `import.meta.env.DEV` is true for `astro dev`/`astro preview` and false for
    // `astro build`, so this option is never set during the Hostinger deploy build.
    allowedHosts: import.meta.env.DEV ? [".monkeycode-ai.live"] : undefined,
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
