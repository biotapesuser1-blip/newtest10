---
title: Getting Started
description: How to use this docs site.
---

This template includes everything you need to ship a docs site to GitHub Pages.

## Editing pages

Two options:

- **AI editor (recommended)**: open the [MD Docs editor](https://mddocs-site.redbeach-67793768.westus3.azurecontainerapps.io), sign in, pick this repo, and edit any page with natural-language prompts.
- **Directly on GitHub**: click any page in `src/content/docs/` here on GitHub and use the pencil-icon edit button.

## Adding pages

Drop a new markdown file under `src/content/docs/`. Every file needs `title:` in YAML frontmatter at the top:

```md
---
title: My new page
---

Page content goes here.
```

Files in subfolders show up as collapsible groups in the sidebar.

## Publishing

Every push to `main` runs the `Deploy to GitHub Pages` Action and publishes the new build. Takes about 1–2 minutes.
