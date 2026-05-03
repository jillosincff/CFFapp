# College Fast Forward — Mobile App

Vite + React + Capacitor wrapper that ships the College Fast Forward
experience to iOS and Android. Talks to the same Base44 backend the
website uses, so accounts, alumni search, and outreach drafts all
stay in sync.

## Stack

- **Vite + React 18** — single-page app, hash routing
- **Capacitor 6** — native iOS / Android shells
- **Base44 SDK** — auth, entities, server functions
- **framer-motion + lucide-react** — onboarding animations and icons
- **Tailwind** — utility classes alongside the inline-styled onboarding screens
- **Brand**: orange `#E85D20`, DM Sans (UI) + Playfair Display (display)

## First-time setup

```bash
npm install
cp .env.example .env
# fill in VITE_BASE44_APP_ID + VITE_BASE44_BACKEND_URL
npm run dev
```

## Running the native shells

```bash
# Once, to scaffold the native projects:
npm run cap:add:ios
npm run cap:add:android

# Each time you change web code:
npm run ios       # build → sync → open Xcode
npm run android   # build → sync → open Android Studio
```

## What's in here

The 3-act onboarding flow lives at `src/pages/StudentOnboardingV2.jsx`
with screens under `src/components/onboarding-v2/`. The flow is wired
up in `src/App.jsx` as the default route and can be reached at
`/#/StudentOnboardingV2`.
