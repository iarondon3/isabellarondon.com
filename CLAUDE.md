# isabellarondon.com

Personal site of Isabella Rondon — Freelance Data Analyst for Early-Stage Startups.

## Stack

- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages
- **Domain:** isabellarondon.com (Porkbun)
- **Deploy:** GitHub Actions → GitHub Pages

## Project context

Full strategy, copy, and design decisions live in the exo-brAIn vault:
`project/isabellarondon-landing/`

Key files to read before working:
- `strategy.md` — architecture decisions, services, pricing, SEO keywords
- `copy.md` — all approved copy for every page
- `mockup-*.html` — approved visual mockups (design reference)

## Site structure

```
/                → Home
/services        → 5 services + FAQ
/case-studies    → Index of 3 case studies
/case-studies/financial-reporting-automation
/case-studies/financial-data-strategy
/case-studies/ai-sales-agent-car-dealership
/about           → Bio + stack + GitHub
/contact         → Cal.com embed + contact form
```

## Design tokens

| Token           | Value     | Use                              |
|-----------------|-----------|----------------------------------|
| `--bg`          | `#0F0F0F` | Background base                  |
| `--accent`      | `#E05C4B` | Buttons, CTAs, primary emphasis  |
| `--accent-text` | `#F0907A` | Text highlights, eyebrows        |
| `--accent-light`| `#ffb4a8` | Headline color split             |
| `--text-primary`| `#F0EDE8` | Body text                        |

**Typography:** Space Grotesk (Google Fonts) — 400, 500, 600, 700

## Commands

```bash
npm run dev      # dev server → localhost:4321
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Deploy

Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically.
