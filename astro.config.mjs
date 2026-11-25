// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://bettyspearschildcare.org.au',
  integrations: [sitemap(), react()],
  vite: {
    // Pre-bundle React for the dev server; without this, react-dom/client is
    // served as raw CommonJS and the About tabs fail to start in dev
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', '@base-ui/react/tabs'],
    },
  },
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