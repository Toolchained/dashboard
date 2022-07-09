import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";


// import rss from "@astrojs/rss";



// https://astro.build/config
export default defineConfig({
  site: "https://toolchained.github.io",
  base: (process.env.PUBLIC_BASE_URL || "/dashboard"),
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  integrations: [tailwind(), preact(), sitemap()],
});