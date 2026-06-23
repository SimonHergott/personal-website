# AGENTS.md — Personal Website

## Project Structure

```
personal-website/
├── perso-website/           # App root
│   ├── app/
│   │   ├── app.css          # Tailwind import + base styles
│   │   ├── root.tsx         # Layout, ErrorBoundary, HydrateFallback
│   │   ├── routes.ts        # Route config (React Router v7 flat routes)
│   │   └── routes/          # All components flat here
│   │       ├── home.tsx           # Route wrapper → homepage.tsx
│   │       ├── homepage.tsx       # Main page: name + stacked link buttons
│   │       ├── contact.tsx, credits.tsx, legal.tsx  # Modal content pages
│   │       ├── found.kindle.route.tsx    # Route wrapper
│   │       ├── found.kindle.tsx          # Found-item page
│   │       ├── found.parapluie.route.tsx # Route wrapper
│   │       ├── found.parapluie.tsx       # Found-item page
│   │       ├── found.ecouteurs.route.tsx # Route wrapper
│   │       └── found.ecouteurs.tsx       # Found-item page
│   ├── public/              # Static assets (images, CV PDF, fonts)
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
└── README.md
```

## Architecture

- **React Router v7** (file-based routing via `routes.ts`, not file-convention routing)
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme` directive)
- **Vite** build tool with `@react-router/dev/vite` plugin
- **TypeScript** with `strict: true`, `~/*` path alias mapping to `./app/*`

## Routing Pattern

Routes are defined in `app/routes.ts` using `@react-router/dev/routes`:

```
/                 → routes/home.tsx         (wrapper → homepage.tsx)
/found/kindle     → routes/found.kindle.route.tsx   (wrapper → found.kindle.tsx)
/found/parapluie  → routes/found.parapluie.route.tsx
/found/ecouteurs  → routes/found.ecouteurs.route.tsx
```

**Key pattern**: each `.route.tsx` is a thin wrapper that just renders the actual component. The component file has no `.route` suffix. This is the established convention — follow it for new routes.

## SPA Navigation Model

The homepage (`homepage.tsx`) is a single-page app with **modal-based navigation**:
- Contact, Credits, Legal open as full-screen modals (state-driven with `useState`)
- Modals use `<div className="overlay" />` backdrop
- Links are simple `<button>` elements styled as text links
- Projects page has been removed

## Key Conventions

- **CSS modules**: each component imports its own `.css` file (e.g., `homepage.css`, `credits.css`). No CSS-in-JS.
- **CSS class prefix**: Found-item pages use `kindle-*` class prefix even for non-Kindle items (e.g., ecouteurs).
- **Minimal professional design**: white background, Inter font, dark text on white, left-aligned links. Harvard-style simplicity.
- **Exports**: All route components are `export default function`. Modal/page components are `export default` or `export default function`.
- **No React Router links**: uses `window.location.href` for external links, manual `<a>` download for CV.

## Commands

```bash
cd perso-website
npm run dev          # Start dev server (react-router dev)
npm run build        # Production build (react-router build)
npm run start        # Serve production build (react-router-serve)
npm run typecheck    # react-router typegen + tsc
```

## Gotchas

1. **Docker is non-functional** — see README. Production deploy: `npm run build` → copy `build/client/` to `/var/www` on server.
2. **No React Router `<Link>` usage** anywhere — external links use `window.location.href`, same-page nav uses modal state. If adding real navigation, establish a new pattern.
3. **`found.*.route.tsx` pattern**: Dots in filename (e.g., `found.ecouteurs.route.tsx`) are NOT folder nesting — they're flat files. React Router v7 flat routes use dots for path nesting.
4. **No form state management** — `contact.tsx` is static text-only.
5. **CSS class namespace overlap**: `credits-modal` class is used for both Credits and Contact/Legal modals. The `credits.css` stylesheet is shared.
