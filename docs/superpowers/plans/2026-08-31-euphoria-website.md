# Euphoria Clothing Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a custom, highly interactive, and visually striking underground streetwear website for Euphoria Clothing using Next.js 14+, Tailwind CSS, Framer Motion, and GSAP, then commit to GitHub and prepare for Vercel deployment.

**Architecture:** Next.js App Router structure with custom CSS animations, custom cursor, smooth scrolling, interactive product showcase, and lookbook gallery. Employs a dark, refined underground streetwear aesthetic without low-quality defaults.

**Tech Stack:** Next.js 14+ (React 18/19), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.

## Global Constraints
- High visual appeal: Refined underground dark mode aesthetic, smooth animations, liquid/distorted motion effects.
- No "Tailwind slop": Use custom utility classes and keyframe animations combined with clean Tailwind structural layouts.
- Zero placeholder image errors: Provide styled SVG/CSS mock assets or verified media placeholders.
- Maintain high-performance Core Web Vitals.

---

### Task 1: Scaffold Next.js Application & Base Setup

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

- [ ] **Step 1: Initialize Next.js app in directory**

```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm --no-install
```

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion lucide-react clsx tailwind-merge canvas-confetti
npm install -D @types/canvas-confetti
```

- [ ] **Step 3: Verify initial setup and run build**

```bash
npm run build
```

- [ ] **Step 4: Commit setup**

```bash
git add .
git commit -m "feat: scaffold Next.js app with Tailwind and Framer Motion"
```

---

### Task 2: Implement Global Styles, Custom Cursor, and Background Effects

**Files:**
- Create: `components/CustomCursor.tsx`, `components/GrainBackground.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`
- Modify: `app/globals.css`, `app/layout.tsx`

- [ ] **Step 1: Add custom noise, typography, and dark-theme variables to `globals.css`**

- [ ] **Step 2: Create CustomCursor component with Framer Motion mouse-following dynamics**

- [ ] **Step 3: Create GrainBackground component for the underground noise overlay**

- [ ] **Step 4: Create sticky minimalist Navigation bar with blur & smooth hover states**

- [ ] **Step 5: Create Footer with contact info, credits (@tino_sk8z, @frigyes_varga, @ab3l_h, @yunoigore), and socials (@euphoria.clthng)**

- [ ] **Step 6: Integrate components into `app/layout.tsx` and run build check**

```bash
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "feat: add global layout, custom cursor, navigation, and noise background"
```

---

### Task 3: Build Hero Section with Glitch/Liquid Text Animations

**Files:**
- Create: `components/Hero.tsx`, `data/brandData.ts`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `data/brandData.ts` containing brand metadata, creators, and product items**

- [ ] **Step 2: Create `Hero.tsx` with bold animated typography, ambient floating elements, and CTA buttons**

- [ ] **Step 3: Include interactive "Handmade in Hungary" badge and video/image preview modal trigger**

- [ ] **Step 4: Connect Hero to `app/page.tsx` and test rendering**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: implement hero section with animated typography and brand identity"
```

---

### Task 4: Build Interactive Shop / Collection Section with Quick View Modal

**Files:**
- Create: `components/ShopSection.tsx`, `components/ProductCard.tsx`, `components/QuickViewModal.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Build `ProductCard.tsx` with hover-tilt 3D transformation, badge tags ("HANDMADE", "EXCLUSIVE"), and quick view button**

- [ ] **Step 2: Build `QuickViewModal.tsx` displaying high-res mock image, description, size selector, and simulated checkout flow**

- [ ] **Step 3: Build `ShopSection.tsx` with category filters (ALL, HOODIES, TEES, ACCESSORIES, EXCLUSIVES)**

- [ ] **Step 4: Mount `ShopSection` in `app/page.tsx` and verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add shop section with product cards, category filtering, and quick view modal"
```

---

### Task 5: Build Lookbook & Editorial Gallery Section

**Files:**
- Create: `components/LookbookSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `LookbookSection.tsx` featuring horizontal/grid masonry layout with parallax scroll effects**

- [ ] **Step 2: Add interactive image lightbox overlay on click**

- [ ] **Step 3: Mount `LookbookSection` in `app/page.tsx` and run build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add editorial lookbook gallery with lightbox view"
```

---

### Task 6: Build About Us & Team Showcase Section

**Files:**
- Create: `components/AboutSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Build `AboutSection.tsx` highlighting the brand story ("Handmade & Designed in Hungary")**

- [ ] **Step 2: Feature team cards for `@tino_sk8z` & `@frigyes_varga` (Designers) and `@ab3l_h` & `@yunoigore` (Creative Management)**

- [ ] **Step 3: Add smooth scroll-triggered text reveal animations**

- [ ] **Step 4: Integrate into `app/page.tsx` and verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add about section highlighting team and brand ethos"
```

---

### Task 7: Build Contact Section, Social Links, and Final Integration

**Files:**
- Create: `components/ContactSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Build `ContactSection.tsx` with an interactive contact form, TikTok (`tt:euphoria.clthng`), and Instagram links**

- [ ] **Step 2: Add toast notifications for contact form submission**

- [ ] **Step 3: Ensure responsive layout across all breakpoints (mobile, tablet, desktop)**

- [ ] **Step 4: Run full project linting and build verification**

```bash
npm run build && npm run lint
```

- [ ] **Step 5: Commit final application code**

```bash
git add .
git commit -m "feat: complete Euphoria streetwear website with full section integration"
```

---

### Task 8: Push to GitHub & Vercel Deployment Guide

- [ ] **Step 1: Check git remote setup and push to GitHub repository (`imredavid64-glitch/euphoria`)**

```bash
git remote add origin https://github.com/imredavid64-glitch/euphoria.git || git remote set-url origin https://github.com/imredavid64-glitch/euphoria.git
git push -u origin main --force
```

- [ ] **Step 2: Verify repository state**

```bash
git status && git log -n 5
```
