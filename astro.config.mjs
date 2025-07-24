// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  prefetch: process.env.NODE_ENV === 'production' ? { prefetchAll: true } : false,
  site: 'https://www.animapulchra.windofbloom.com/',
  integrations: [icon()]
});