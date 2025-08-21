# Rana Café — Modern Bengali Restaurant Website

A responsive, modern Bengali restaurant website built with Next.js, TypeScript, and Tailwind CSS. It features a clean UI, smooth animations, a menu with images, opening hours, a reservation form with validation, location map and contact info, and legal pages.

## Features
- Clean, modern design with warm café-inspired palette
- Fixed, responsive navbar with smooth behavior on all pages
- Hero section with background image overlay
- About, Menu, Hours, Reservation, and Location sections
- Image optimization with fallback support
- Smooth scrolling (Lenis) and subtle Framer Motion animations
- Footer with branding, quick links, contact, and social icons
- Legal pages: Privacy Policy (`/privacy`) and Terms of Service (`/terms`)
- Comments removed from source for production cleanliness

## Tech Stack
- Next.js 14 + React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion
- Lenis (smooth scroll)
- Lucide React icons
- React Hook Form + Zod (reservation validation)

## Getting Started

### Prerequisites
- Node.js 18+
- PNPM, Yarn, or NPM (examples below use NPM)

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Then open http://localhost:3000

### Build
```bash
npm run build
```

### Start (production)
```bash
npm run start
```

## Project Structure
```
app/
  globals.css          # Global styles (Tailwind + utilities)
  layout.tsx           # Root layout, fonts, Navbar, Footer
  page.tsx             # Homepage with sections
  privacy/page.tsx     # Privacy Policy
  terms/page.tsx       # Terms of Service
components/
  About.tsx            # Story section with images
  FallbackImage.tsx    # Safe image with base64 fallback
  Footer.tsx           # Footer with links and legal
  Hero.tsx             # Headline + CTAs
  HeroBackground.tsx   # Background image + gradient
  Hours.tsx            # Opening hours grid
  LenisProvider.tsx    # Smooth scrolling provider
  Location.tsx         # Map + contact actions
  Menu.tsx             # Menu cards with images
  Navbar.tsx           # Fixed, responsive navbar
  ThreeBackground.tsx  # Optional 3D background (not on homepage by default)
  ui.tsx               # Small UI primitives (Button, Input, etc.)
lib/
  hours.ts             # Hours data
  menu.ts              # Menu data
```

## Configuration
- Tailwind config: `tailwind.config.ts`
- PostCSS config: `postcss.config.js`
- Next.js config: `next.config.js`
- TypeScript: `tsconfig.json`

## Accessibility & UX
- Focus-visible rings on interactive elements
- Sufficient color contrast on text and buttons
- Keyboard-friendly navigation and actions

## Performance
- Optimized images via Next/Image
- Lazy loading where appropriate
- Lightweight animations

## Content Customization
- Update address, phone, and email in:
  - `components/Footer.tsx`
  - `components/Location.tsx`
- Update branding text in `Footer.tsx` and `Hero.tsx`
- Update menu items in `lib/menu.ts`
- Update hours in `lib/hours.ts`

## Known Behaviors
- Navbar stays solid on non-home pages; on the homepage it becomes solid after slight scroll
- Anchor links from subpages route back to homepage sections (e.g., `/#menu`)

## Deployment
Any platform supporting Next.js (e.g., Vercel, Netlify). Typical steps:
1. Build: `npm run build`
2. Deploy the `.next` output via your platform (Vercel auto-detects Next.js)
