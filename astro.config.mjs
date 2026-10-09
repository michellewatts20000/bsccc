// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bettyspearschildcare.org.au',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Baloo 2',
      cssVariable: '--font-heading',
      weights: [500, 700],
      subsets: ['latin'],
      fallbacks: ['Trebuchet MS', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Quicksand',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700],
      subsets: ['latin'],
      fallbacks: ['Segoe UI', 'sans-serif'],
    },
  ],
});
