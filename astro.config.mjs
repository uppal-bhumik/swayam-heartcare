// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://swayamheartcare.com',
  // Off so review screenshots show the design, not the dev overlay.
  devToolbar: { enabled: false },
  // Astro's default is "_astro", but some static hosts reserve paths beginning
  // with an underscore, so the built assets go in a plainly-named directory.
  build: { assets: 'assets' },
  vite: {
    plugins: [tailwindcss()],
  },
});
