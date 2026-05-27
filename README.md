# Serious Shift — Next.js + Tailwind

> Interactive multi-world report site built from the Figma design.

## Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

### Option A — GitHub → Vercel (recommended)

1. Create a new GitHub repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USER/serious-shift.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new)
3. Click **Import Git Repository** and select your repo
4. Leave all settings as default (Next.js is auto-detected)
5. Click **Deploy** — live URL in ~60 seconds

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Your site is live instantly.

---

## Project structure

```
serious-shift/
├── app/
│   ├── data.ts          ← all worlds & thinkers content
│   ├── layout.tsx
│   ├── page.tsx         ← root page (state lives here)
│   └── globals.css
├── components/
│   ├── Navbar.tsx       ← sticky nav + world tab switcher
│   ├── HeroSection.tsx  ← two-column hero with animated world card
│   ├── ThinkerSection.tsx ← yellow "Who's arguing" table
│   ├── WorldsSection.tsx  ← 4 debate cards (collapsible)
│   ├── CTASection.tsx
│   └── Footer.tsx
├── tailwind.config.ts
└── package.json
```

## Customising content

All text, thinkers, quotes and world data lives in **`app/data.ts`** — edit that file to update any copy without touching the components.
