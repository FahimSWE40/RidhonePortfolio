# রিদওয়ান তাসকিন রাতুল — লেখক পরিচিতি

An editorial, single-page author profile (লেখক পরিচিতি) for **মো: রিদওয়ান তাসকিন রাতুল** — researcher, taekwondo coach, artist, natural-farmer, team leader, and writer. A dark, gold-accented, motion-rich landing page built around Bengali typography.

> _"কিছু মানুষ জীবনকে একটি লেন্স দিয়ে দেখেন। রিদওয়ান তাসকিন রাতুল দেখেন অনেকগুলো দিয়ে।"_

## ✨ Features

- **Editorial single-page design** — hero, an animated marquee, and chaptered sections (পরিচয় · যাত্রা · জগৎ · দর্শন · কথা).
- **Living animated background** — slowly drifting gold/navy gradient orbs, an aurora sweep, film grain, and a vignette.
- **Fully responsive** — mobile-first layouts with a hamburger menu, anchor scroll-offset, and tactile tap feedback; scales cleanly from small phones to large screens.
- **Motion throughout** — scroll-reveal sections, a reading-progress bar, parallax hero, and a back-to-top control (all respecting `prefers-reduced-motion`).
- **Polished loading** — a gold shimmer skeleton holds the portrait's space and fades into the image once it loads (no layout shift).
- **Bengali-first typography** — Anek Bangla (body) and Noto Serif Bengali (display) loaded across their full weight range, with Nirmala UI / Noto Sans Bengali system fallbacks and JetBrains Mono for labels.
- **SSR** via TanStack Start with a graceful error boundary + fallback page.
- **Content-driven** — all copy lives in one data file, decoupled from markup.

## 🧱 Tech stack

- **[TanStack Start](https://tanstack.com/start)** (SSR) + **[TanStack Router](https://tanstack.com/router)** — file-based routing
- **[TanStack Query](https://tanstack.com/query)** — query/client layer
- **React 19** + **TypeScript**
- **[Vite](https://vite.dev)** — dev server & build
- **[Tailwind CSS v4](https://tailwindcss.com)** — styling via `@tailwindcss/vite`
- **[Motion](https://motion.dev)** — scroll & entrance animations
- **[Nitro](https://nitro.build)** — production server build & host auto-detection (Vercel, Node, …)

## 🚀 Getting started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:8080)
npm run dev
```

> Requires **Node 22.x**. If port `8080` is in use, Vite automatically picks the next free port (e.g. `8081`).

### Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the Vite dev server with HMR   |
| `npm run build`     | Production build (via Nitro)         |
| `npm run build:dev` | Build using development mode         |
| `npm run preview`   | Preview the production build locally |
| `npm run lint`      | Run ESLint                           |
| `npm run format`    | Format the codebase with Prettier    |

## 📁 Project structure

```
src/
├─ assets/                 Static image assets (portrait)
├─ components/
│  ├─ common/              Reusable primitives (Section, Stat, Skeleton)
│  ├─ layout/              Page chrome (Nav, Footer, ScrollProgress, BackToTop, AmbientBackground)
│  └─ sections/            Page sections (Hero, MarqueeStrip, About, Journey, Worlds, Philosophy, ClosingQuote)
├─ data/
│  └─ profile.ts           Single source of truth for all page content + site meta
├─ lib/
│  ├─ error-capture.ts     SSR error capture helper
│  ├─ error-page.ts        Fallback HTML error page
│  ├─ motion.ts            Shared easing + animation variants
│  └─ utils.ts             `cn()` class-name helper
├─ routes/
│  ├─ __root.tsx           Root shell, document head, error/404 boundaries
│  └─ index.tsx            Home route — composes the sections
├─ router.tsx              Router + QueryClient setup
├─ server.ts               SSR server entry (wraps errors)
├─ start.ts                TanStack Start instance + request middleware
└─ styles.css              Tailwind theme tokens + custom utilities
```

## ✏️ Editing content

- **Text & data** (name, identities, timeline, worlds, philosophies, stats, meta): [`src/data/profile.ts`](src/data/profile.ts) — edit here without touching component markup.
- **Portrait image**: replace [`src/assets/ratul.png`](src/assets/ratul.png) (imported in `Hero.tsx`).
- **Theme** (colors, fonts, gold/navy tokens, custom utilities): [`src/styles.css`](src/styles.css).

## ☁️ Deployment

Production builds run through **Nitro**, which auto-detects the host:

- **Vercel** — connect the repo to a Vercel project and deploy. During the build (`VERCEL=1` is set automatically), Nitro emits the Vercel Build Output API to `.vercel/output`; Vercel serves the static assets and runs SSR as a serverless function. The function runtime is pinned to **Node 22.x** via the `engines` field.
- **Node / other hosts** — `npm run build` produces a `node-server` bundle in `.output/`; smoke-test it locally with `npm run preview`.

To force a specific target, set `NITRO_PRESET` (e.g. `NITRO_PRESET=node-server npm run build`).

## License

All rights reserved © **[Fahim](https://github.com/FahimSWE40)**
