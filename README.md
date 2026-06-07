---
title: My Docs Site
---

# My Docs Site

A Starlight-powered documentation site that publishes to GitHub Pages.

Edit pages with AI assistance at [MD Docs](https://mddocs-site.redbeach-67793768.westus3.azurecontainerapps.io).

## Local dev

```bash
npm install
npm run dev    # → http://localhost:4321
```

## How publishing works

1. Edit pages (via the MD Docs editor, the GitHub web UI, or locally).
2. Push to `main`.
3. The `Deploy to GitHub Pages` Action builds with Starlight and publishes the result to GitHub Pages.
4. Live in ~1–2 minutes at the URL configured in your repo's Settings → Pages.

## Configuring the site URL

When you enable GitHub Pages on this repo (Settings → Pages → Source: "GitHub Actions"), Pages will publish at `https://<your-username>.github.io/<this-repo-name>/`. Edit `astro.config.mjs` so `site` matches `https://<your-username>.github.io` and `base` matches `/<this-repo-name>`. (The MD Docs editor will offer to do this for you on first connection.)