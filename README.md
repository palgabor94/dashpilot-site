# DashPilot Landing Page

Marketing site for the DashPilot Android and iOS app. Built with Next.js 14 (App Router) + TypeScript.

## Project structure

```
.
├── app/
│   ├── layout.tsx               # Root layout with Header, Footer, fonts
│   ├── page.tsx                 # Home page (hero)
│   ├── globals.css              # All styles
│   ├── dashboards/page.tsx      # Placeholder
│   └── privacy-policy/page.tsx  # Placeholder
├── components/
│   ├── Header.tsx               # Sticky nav with active link state
│   ├── Footer.tsx               # Company info from Play Store
│   ├── Logo.tsx                 # Small brand mark (32×32)
│   ├── AppIcon.tsx              # Large hero icon (128×128)
│   └── GooglePlayBadge.tsx      # Reusable CTA badge
├── package.json
├── next.config.mjs
└── tsconfig.json
```

## Notes

- Content (hero copy, footer info) is sourced directly from the Play Store listing.
- The site is fully static — no API routes, no server-side data fetching.
- All external links to the Play Store open in a new tab.
