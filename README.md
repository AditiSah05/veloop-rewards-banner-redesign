# VELOOP Rewards — Banner Redesign

Premium, fintech-inspired redesign of the five earning & engagement banners for
VELOOP Rewards: **Refer & Earn**, **Swap Center**, **Bonus VEs**, **Captcha
Tasks**, and **Exchange Center**.

## Overview

Each banner communicates *what the feature is*, *why it matters*, *what you
earn*, and *what to do next* — in a single glance — using a dark navy
(`#161827`) surface, a glowing blue/purple/gold 3D illustration, a two-tone
gradient headline, dual CTAs, and a compact stat row.

## Banners

| Banner | Purpose | Accent |
|---|---|---|
| Refer & Earn | Invite friends, both sides earn VEs | Gold |
| Swap Center | Convert VEs ↔ SVEs (internal conversion) | Blue / Purple |
| Bonus VEs | Claim bonus/multiplier VE campaigns | Gold |
| Captcha Tasks | Complete verification tasks for rewards | Teal |
| Exchange Center | Redeem VEs for gift cards / payout options | Purple |

Swap Center and Exchange Center are intentionally distinct: Swap shows one VE
coin converting into another (same-platform conversion), Exchange shows a VE
coin turning into a burst of external gift cards (Amazon, Flipkart, Paytm,
Google Play).

## Features

- 100% width, responsive height (410–450px desktop, 380–540px tablet,
  330–520px mobile) per banner — verified with no content clipping at any
  breakpoint
- Large 3D illustration per banner (badge + gradient headline + description +
  primary/secondary CTA, plus either a compact status pill or a 3–4 item
  stat row depending on the banner's content)
- Scroll-triggered entrance animation, illustration drift, hover elevation,
  and per-CTA hover/active/focus states
- Full keyboard/focus support, `aria-label`s on illustrations and CTAs
- Shared, configurable `BannerShell` layout — one reusable shell, unique
  accent/content per banner

## Technology Stack

React 19 · Vite · Bootstrap 5 (layout utilities) · CSS Modules · Lucide React
· React Hooks (no animation library — pure CSS keyframes/transitions)

## Installation

```bash
npm install
```

## Development Commands

```bash
npm run dev       # start local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
npm run lint        # oxlint
```

## Folder Structure

```
src/
├── components/
│   ├── shared/
│   │   ├── BannerShell.jsx        # layout: badge, heading, description,
│   │   │                          # status pill, dual CTA, stat row
│   │   └── IllustrationImage.jsx  # drift-animated WebP wrapper
│   ├── ReferEarnBanner/
│   │   ├── ReferEarnBanner.jsx
│   │   └── ReferEarnBanner.module.css
│   ├── SwapCenterBanner/
│   ├── BonusVEsBanner/
│   ├── CaptchaTasksBanner/
│   └── ExchangeCenterBanner/      # (each folder mirrors ReferEarnBanner/)
├── assets/illustrations/  # optimized WebP illustrations (~40-56KB each)
├── hooks/
│   └── useInView.js       # IntersectionObserver hook for entrance animation
├── App.jsx                 # assembles all five banners (demo page)
└── index.css                # design tokens (colors, radii) + global reset
```

Each banner is exactly two files: `<Banner>.jsx` (badge/heading/description/
CTA copy, optional status pill, optional stat items, and the `<IllustrationImage>`
using its own WebP asset) and `<Banner>.module.css` (an `.accent` class
that sets CSS variables — `--accent`, `--heading-grad`, `--cta-grad`, `--glow`,
`--illustration-basis`, etc. — consumed by the shared `BannerShell`). No
banner imports another banner's files; the only shared dependencies are
`components/shared/*`.

## Illustrations

Each banner's illustration is a cropped, resized, and WebP-compressed still
from the feature's reference mockup, kept as the visual source of truth for
the 3D coin/podium art style. Source mockups live in `image/` (git-ignored,
reference only); the derived, submission-ready assets live in
`src/assets/illustrations/`.

## Responsive Design

Mobile stacks `illustration → badge → heading → description → CTA → stats`.
Tablet and desktop switch to a two-column row (illustration flips to the
right on desktop ≥1024px). All breakpoints stay within the height ranges
above via `min-height`/`max-height` per media query, with illustration size
and content spacing tuned per breakpoint so nothing clips.

## Animation Details

- **Entrance:** each banner fades/slides in once scrolled into view
  (`useInView`, `IntersectionObserver`, fires once).
- **Illustration:** gentle vertical drift (`IllustrationImage`).
- **Interaction:** card elevates + glows on hover, CTA arrow shifts right on
  hover, CTA scales down on press, all via CSS transitions.
- Respects `prefers-reduced-motion`.

## Dummy Data

All reward values (VEs, balances, referral amounts) are illustrative
placeholders for development only — not approved reward figures.


## Live Demo

https://veloop-rewards-banner-redesign.vercel.app/

