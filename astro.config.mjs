import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mucunguzi256.github.io',
  base: '/katolabanfoundation',
  integrations: [tailwind()],
  build: {
    format: 'file'
  }
});