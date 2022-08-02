import {defineConfig} from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  vite: {
    ssr: {
      noExternal: ['components']
    },
    resolve: {
      dedupe: ['preact', 'preact/hooks'],
    },
    optimizeDeps: {
      include: ['components']
    }
  }
});
