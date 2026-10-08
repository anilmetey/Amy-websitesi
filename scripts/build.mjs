import { rename } from 'node:fs/promises';
import { build } from 'vite';

// The root index.html serves the checked-in Pages bundle. Build from React's
// source entry so both GitHub Actions and manually published bundles stay fresh.
await build({
  build: { rollupOptions: { input: { index: 'dev.index.html' } } },
});
await rename('dist/dev.index.html', 'dist/index.html');
