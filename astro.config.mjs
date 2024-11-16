// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://chovyena.github.io',
  base: '/blog',
  outDir: './dist',
  build: {
    assets: 'assets',
  },
  integrations: [tailwind(), alpinejs()],
  trailingSlash: 'always',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@config': '/src/config'
      }
    }
  }
});