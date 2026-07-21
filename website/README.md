# Mini LLM From Scratch — Website

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Framer Motion(-ready) + MDX(-ready)
documentation site for the [Mini LLM From Scratch](https://github.com/ENAYATULLA/Mini-LLM-From-Scratch)
repository.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before deploying

This was generated without network access, so a few assets are placeholders you should
add to `/public`:

- `favicon.ico`
- `apple-touch-icon.png` (180×180)
- `icon-192.png`, `icon-512.png` (referenced in `site.webmanifest`)
- `og-image.png` (1200×630, referenced in metadata for Open Graph / Twitter cards)

Also update `siteConfig.url` in `lib/site-config.ts` to your real production domain once
deployed (it's used to build canonical URLs, the sitemap, and JSON-LD).

## Structure

- `app/` — routes: home, `/documentation`, `/architecture`, `/pipeline`, `/playground`,
  `/roadmap`, `/about`, plus `sitemap.ts` and `robots.ts`
- `components/` — nav, footer, hero (canvas neural-network animation), Project at a Glance,
  engineering highlights, learning journey, tokenizer playground demo, JSON-LD
- `lib/site-config.ts` — single source of truth for every project/author fact used across
  the site. Only verifiable information lives here — no invented stats, benchmarks, or
  hardware details.

## Content policy

Per project requirements, the site does not state parameter counts, GPU/hardware details,
dataset sizes, training hours, benchmarks, token counts, or loss curves, since none of these
are confirmed in the repository. If you add real, verifiable numbers later, they belong in
`lib/site-config.ts` so every page that references them stays consistent.
