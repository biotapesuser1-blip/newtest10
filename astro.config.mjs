import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// `site` and `base` are auto-derived from GitHub Actions env vars, so the
// site Just Works on any fork without anyone editing this file:
//   GITHUB_REPOSITORY        = "<owner>/<repo>"
//   GITHUB_REPOSITORY_OWNER  = "<owner>"
//
// If you wire up a custom domain, set `site` to that domain and remove
// the `base` line. For local dev (`npm run dev`) neither variable is
// set so we fall back to plain defaults.

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'docs';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'user';

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: `/${repo}`,
  integrations: [
    starlight({
      title: 'My Docs',
      description: 'Documentation, edited with AI.',
      // Sidebar auto-generates from src/content/docs/ by default.
    }),
  ],
});
