import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://abbyeg.github.io',
  integrations: [react()]
});