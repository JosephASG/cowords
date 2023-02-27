import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://cowords.vercel.app',
  integrations: [tailwind(), react(), sitemap({
    changefreq: 'daily',
    priority: 1.0,
  })]
});