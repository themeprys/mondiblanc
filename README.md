# Yayasan MondiBlanc

A production-ready website for **Yayasan MondiBlanc** — empowering Indonesian filmmakers through scholarships, workshops, and community.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. Phase 1 uses a mock data layer designed for seamless future Cosmic JS integration.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TypeScript, Tailwind CSS v4, shadcn/ui
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Folder Structure

```
app/                  # Next.js App Router pages & layouts
components/
  ui/                 # shadcn/ui primitives
  shared/             # Reusable UI (Hero, Section, Search, etc.)
  cards/              # Content cards (Alumni, Blog, Report, etc.)
  layout/             # Navbar, Footer
features/             # Page-level feature compositions
data/                 # Mock data (Phase 1 only)
services/             # Data access layer (swap for Cosmic JS in Phase 2)
types/                # TypeScript interfaces for all content types
lib/                  # Utilities, SEO helpers, constants
hooks/                # Custom React hooks
public/               # Static assets
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Impact, Nexus, Alumni, Publications, Blog, Patron CTA |
| `/about` | History, Vision, Mission, Organization, Ecosystem |
| `/impact` | Alumni directory, Success Stories, Video, Gallery |
| `/team` | Program Head, Managers, Coordinators, Volunteers |
| `/publications` | Blog, Monthly Publications, Annual Reports |
| `/patrons` | Patron Tiers, Donation Impact, FAQ |
| `/blog/[slug]` | Individual blog post |
| `/alumni/[slug]` | Individual alumni profile |

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO | `https://mondiblanc.org` |

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deployment (Vercel)

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain
4. Deploy — `npm run build` runs automatically

## Future Cosmic JS Integration (Phase 2)

The architecture separates data access from UI. To migrate:

1. Install the Cosmic JS SDK
2. Replace the implementation inside `services/*.ts` — keep the same function signatures and return types
3. Map Cosmic JS objects to existing TypeScript interfaces in `types/`
4. No changes required to pages, components, or features

Example:

```ts
// services/homepage.ts — Phase 2
import { cosmic } from "@/lib/cosmic";

export async function getHomepage(): Promise<Homepage> {
  const { object } = await cosmic.objects.findOne({ type: "homepage" });
  return mapCosmicToHomepage(object);
}
```

Pages continue calling `await getHomepage()` unchanged.

## Coding Standards

- **Data flow:** Pages → Services → Mock Data (never import `data/` in pages)
- **Components:** Receive props; no hardcoded content
- **Types:** Every content type has an interface in `types/`
- **Styling:** Tailwind utility classes; design tokens in `globals.css`
- **Accessibility:** WCAG AA — semantic HTML, ARIA labels, keyboard navigation, focus states
- **Images:** `next/image` with placeholder URLs (replaceable via CMS)
- **Formatting:** `npm run format` (Prettier)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## License

Private — Yayasan MondiBlanc
