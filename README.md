# VELOOP Rewards — Banner Redesign

Premium, fintech-inspired redesign of the five earning & engagement banners for
VELOOP Rewards: **Refer & Earn**, **Swap Center**, **Bonus VEs**, **Captcha
Tasks**, and **Exchange Center**.

## Overview

Each banner communicates *what the feature is*, *why it matters*, *what you
earn*, and *what to do next* — in a single glance — using a dark navy
(`#161827`) surface, muted gold/blue/purple/teal accents, a large icon-based
illustration, and one subtle motion cue. No neon, no gaming-style glow.

## Banners

| Banner | Purpose | Accent |
|---|---|---|
| Refer & Earn | Invite friends, both sides earn VEs | Gold |
| Swap Center | Convert VEs ↔ SVEs (internal conversion) | Blue / Purple |
| Bonus VEs | Claim bonus/multiplier VE campaigns | Gold |
| Captcha Tasks | Complete verification tasks for rewards | Teal |
| Exchange Center | Redeem VEs for gift cards / payout options | Purple |

Swap Center and Exchange Center are intentionally distinct: Swap is a
same-platform currency conversion (circular swap icon, VE/SVE), Exchange is
redemption into external rewards (wallet → gift cards).

## Features

- 100% width, responsive height (410–450px desktop, 380–540px tablet,
  330–520px mobile) per banner
- Large icon-composition illustration per banner, unique to its feature
- Scroll-triggered entrance animation + floating reward icons + hover
  elevation on every banner
- Full keyboard/focus support, `aria-label`s on illustrations and CTAs
- Shared, configurable `BannerShell` layout + per-banner illustration and
  accent module — reusable architecture, unique visual identity

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
│   ├── shared/            # BannerShell, Float, StatCard, Stage — reusable primitives
│   ├── ReferEarnBanner/
│   ├── SwapCenterBanner/
│   ├── BonusVEsBanner/
│   ├── CaptchaTasksBanner/
│   └── ExchangeCenterBanner/
├── hooks/
│   └── useInView.js       # IntersectionObserver hook for entrance animation
├── App.jsx                 # assembles all five banners (demo page)
└── index.css                # design tokens (colors, radii) + global reset
```

Each banner folder contains `index.jsx` (content + CTA copy), `Illustration.jsx`
(icon composition), and a `.module.css` (accent gradient + node colors).

## Responsive Design

Mobile stacks `illustration → heading → description → reward → CTA`. Tablet
and desktop switch to a two-column row (illustration flips to the right on
desktop ≥1024px). All breakpoints stay within the height ranges above via
`min-height`/`max-height` per media query — never a fixed height.

## Animation Details

- **Entrance:** each banner fades/slides in once scrolled into view
  (`useInView`, `IntersectionObserver`, fires once).
- **Illustration:** reward icons float with staggered delay/duration;
  Swap Center's hub icon spins slowly; Bonus VEs' multiplier badge pulses.
- **Interaction:** card elevates on hover, CTA arrow shifts right on hover,
  CTA scales down on press, all via CSS transitions.
- Respects `prefers-reduced-motion`.

## Dummy Data

All reward values (VEs, balances, referral amounts) are illustrative
placeholders for development only — not approved reward figures.

## Screenshots

_Add desktop/tablet/mobile screenshots here before submission._

## Live Demo

_Add Vercel/Netlify URL here after deployment._

## GitHub Repository

_Add repository URL here after pushing._

## Author

kryshan753@gmail.com
