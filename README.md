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

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `STRIPE_SECRET_KEY` — Stripe secret key (use `sk_test_...` locally). Server-side only.
- `NEXT_PUBLIC_PRICE_EUR` — DashKit price in whole euros (placeholder: `149`).

In production, set both in the Vercel project settings.

## Stripe order flow

- `/order` — order form (buyer info, harness type, shipping/billing address).
- `POST /api/checkout` — creates a Stripe Checkout session (inline price, customer
  data stored in session metadata) and returns the hosted checkout URL.
- `/order/success` — shown after a successful payment.
- `/order/cancelled` — shown if the payment is cancelled.

Test card: `4242 4242 4242 4242`, any future expiry / CVC.

## Notes

- The DashPilot app is linked from the hero (Google Play; iOS App Store coming later).
- All external links to the Play Store open in a new tab.
