# VELOOP Rewards — Banner Redesign

Premium, fintech-inspired redesign of the five earning & engagement banners for
VELOOP Rewards: **Refer & Earn**, **Swap Center**, **Bonus VEs**, **Captcha
Tasks**, and **Exchange Center**.

## Overview

Each banner communicates *what the feature is*, *why it matters*, *what you
earn*, and *what to do next* — in a single glance — using a dark navy
(`#161827`) surface, a glowing gold/blue/purple 3D illustration, a two-tone
gradient headline, dual CTAs, and (where relevant) a compact stat row.

Refer & Earn, Swap Center, Captcha Tasks, and Exchange Center share one
**unified single-container design**: one rounded, bordered card holding the
badge/heading/description/CTAs + illustration on top, and a row of benefit
items (icon + title + subtitle) below a divider — all inside the same box,
no separate strip. Bonus VEs still uses the earlier shared `BannerShell` +
`FeatureStrip` (banner card + separate stat strip below).

## Banners

| Banner | Purpose | Accent |
|---|---|---|
| Refer & Earn | Invite friends, both sides earn VEs | Gold |
| Swap Center | Convert VEs into vouchers (Amazon/Flipkart/Paytm) | Gold |
| Bonus VEs | Claim bonus/multiplier VE campaigns | Gold |
| Captcha Tasks | Complete verification tasks for rewards | Blue |
| Exchange Center | Redeem VEs for gift cards / payout options | Purple |

## Features

- 100% width, responsive per-banner layout — stacks to one column under
  768px, two-column hero (content left, illustration right) at 768px+
- Large illustration per banner (badge + gradient headline + description +
  primary/secondary CTA, plus a stat row and/or a benefit-item row depending
  on the banner)
- Scroll-triggered entrance animation, illustration drift, hover elevation,
  and per-CTA hover/active/focus states
- Full keyboard/focus support, `aria-label`s on illustrations and CTAs
- Shared `IllustrationImage` + `useInView` hook reused across all banners;
  Bonus VEs additionally reuses the shared `BannerShell`/`FeatureStrip`

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
│   │   ├── BannerShell.jsx        # legacy shell (badge, heading, description,
│   │   │                          # status pill, dual CTA, stat row) — used
│   │   │                          # only by BonusVEsBanner
│   │   ├── FeatureStrip.jsx       # separate stat-strip box — used only by
│   │   │                          # BonusVEsBanner, alongside BannerShell
│   │   └── IllustrationImage.jsx  # drift-animated image wrapper
│   ├── ReferEarnBanner/           # unified single-container banner
│   ├── SwapCenterBanner/          # unified single-container banner
│   ├── BonusVEsBanner/            # legacy BannerShell + FeatureStrip
│   ├── CaptchaTasksBanner/        # unified single-container banner
│   └── ExchangeCenterBanner/      # unified single-container banner
├── assets/illustrations/  # illustration images (WebP/PNG)
├── hooks/
│   └── useInView.js       # IntersectionObserver hook for entrance animation
├── App.jsx                 # assembles all five banners (demo page)
└── index.css                # design tokens (colors, radii) + global reset
```

Refer & Earn, Swap Center, Captcha Tasks, and Exchange Center are each two
files — `<Banner>.jsx` (bespoke markup: badge, heading, description, dual
CTA, illustration, then a benefit-item row, all inside one `<section>`) and
`<Banner>.module.css` (self-contained; not driven by `BannerShell`). Bonus
VEs is the exception and still composes `BannerShell` + `FeatureStrip` from
`components/shared/`. No banner imports another banner's files.

## Illustrations

Each banner's illustration is a cropped/compressed still from the feature's
reference mockup, kept as the visual source of truth for the 3D coin/podium
art style. Source mockups live in `image/` (git-ignored, reference only);
the derived, submission-ready assets live in `src/assets/illustrations/`.

## Responsive Design

Mobile stacks illustration/content into a single column. At 768px+, Refer &
Earn / Swap Center / Captcha Tasks / Exchange Center switch to a two-column
row (content left, illustration right) inside their single container, with
the benefit-item row below reflowing from 2 columns (mobile) up to 4–5
columns (desktop). Bonus VEs follows the older `BannerShell` breakpoints
(illustration flips to the right on desktop ≥1024px).

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

