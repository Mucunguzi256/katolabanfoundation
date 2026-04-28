import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://katolabanfoundation.org',
  base: '/',
  integrations: [tailwind()],
});