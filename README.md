Personal website of Bryan Luu.

Built with [Astro](https://astro.build/) + React islands, Bootstrap 5, and Sass. Deployed to GitHub Pages at [bryanluu.github.io](https://bryanluu.github.io).

## Requirements

- Node `22.14.0` (see [.nvmrc](.nvmrc) — run `nvm use` if you use nvm)
- npm

No `.env` file or secrets are required. The contact form (`src/components/Contact/MailForm.jsx`) opens a `mailto:` link, and the booking widget (`src/components/Contact/Booking.jsx`) embeds a public Cal.com link (`bryan-luu/discovery-call`) via `@calcom/embed-react` — neither needs an API key.

## Getting started

```bash
npm install
npm run dev       # start dev server at localhost:4321
npm run build     # build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/        # React components (.jsx), grouped by page/section
│   ├── About/
│   ├── CaseStudy/     # shared building blocks for /work/* case study pages
│   ├── Contact/
│   ├── Home/
│   └── Services/
├── data/
│   └── projects.json  # single source of truth for all project/work entries
├── images/             # local images, organized per project (imported directly in .astro files)
├── layouts/
│   ├── MainLayout.astro       # shared page shell (nav, footer, meta)
│   └── CaseStudyLayout.astro  # shell for /work/* pages, reads projects.json by slug
├── pages/              # file-based routing
│   ├── index.astro
│   ├── about.astro
│   ├── services.astro
│   ├── contact.astro
│   └── work/
│       ├── grid-arcade.astro
│       ├── open-cms.astro
│       └── ubc-thunderbird.astro
└── styles/             # Sass partials, imported into main.scss

public/
└── assets/             # static files served as-is (favicon, home page project preview images)
```

## Configuring project/work content

All projects (both the "Featured work" case studies on the home page and the "Other projects" list) are driven by [src/data/projects.json](src/data/projects.json). It's an array of objects with this shape:

```jsonc
{
  "id": 1,
  "title": "GRID Arcade",       // short title, used in the "Other projects" list
  "name": "GRID Arcade",        // full name, used as the case study page <h1>
  "slug": "grid-arcade",        // used for /work/<slug> route + must match CaseStudyLayout's `slug` prop
  "role": "Designer + Developer",
  "association": "Personal",    // shown as "@ Association", hidden if "Personal"
  "dates": {
    "start": "2025-08",         // optional; if omitted, "label" is shown instead of a date range
    "end": "2025-12",
    "label": "Fall 2025"
  },
  "description": "One-line summary shown in cards/lists.",
  "skills": ["Electronics", "C++", "Game Design"],
  "preview": {                  // image shown in the "Featured work" card; set to null to omit
    "src": "assets/GRID_arcade.jpg",  // relative to public/, NOT src/images
    "alt": "Alt text"
  },
  "link": {
    "url": "https://...",       // external link (e.g. GitHub, live site)
    "label": "View source"
  },
  "featured": true               // true -> shown in "Featured work" + gets a /work/<slug> case study page
}
```

Notes:
- `preview.src` paths are resolved from `public/` (e.g. `public/assets/GRID_arcade.jpg`), unlike the images used *inside* case study pages, which live under `src/images/<slug>/` and are imported directly in the corresponding `.astro` file.
- Setting `featured: false` (or omitting it) puts the project in the plain "Other projects" list on the home page instead, with no case study page.
- `src/pages/index.astro` splits `projects.json` into `featured` vs `other` at build time — no other config needed to add an entry to the home page.

### Adding a new featured case study page

1. Add an entry to `projects.json` with `"featured": true` and a unique `slug`.
2. Add its images to `src/images/<slug>/`.
3. Create `src/pages/work/<slug>.astro`, following the pattern in an existing page (e.g. [grid-arcade.astro](src/pages/work/grid-arcade.astro)):
   - Import images directly from `src/images/<slug>/`.
   - Wrap content in `<CaseStudyLayout slug="<slug>" heroImage={...} heroAlt="...">`.
   - `CaseStudyLayout` looks up the rest of the metadata (name, dates, skills, link, etc.) from `projects.json` by `slug` and throws a build error if no match is found — so the `slug` values must match exactly.
   - Use the `lead` and `meta` named slots for the intro paragraph and byline, and the default slot for the case study body. `FigureGrid`, `ResultHighlights`, and `HighlightItem` (in `src/components/CaseStudy/`) are available for common layouts.

## Deployment

Pushes to `main` trigger [.github/workflows/build_and_deploy.yml](.github/workflows/build_and_deploy.yml), which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. No manual deploy step is needed — just push to `main`.

The `site` URL is set in [astro.config.mjs](astro.config.mjs) (`https://bryanluu.github.io`); update it there if the domain ever changes.
