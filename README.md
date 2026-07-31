# Personal Portfolio — Java Web Developer

A responsive, single-page portfolio built with **Next.js (App Router)**, **React**, and **Tailwind CSS v4**. Light **and** dark mode with a nav toggle — lavender-white or midnight background, with vibrant violet → fuchsia → amber accents and cyan/emerald highlights. Both modes share semantic color tokens (`canvas`, `panel`, `ink`, `body`, `muted`, `line`, `tint`, `pop`) defined in `app/globals.css` and flipped by a `.dark` class on `<html>`; the visitor's choice persists in localStorage and defaults to their OS preference. Plus scroll-reveal animations and a mobile-first layout with a hamburger menu.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Replace-before-launch checklist

All placeholder spots are marked with `REPLACE` comments in the code — search the project for `REPLACE` to find every one. Summary:

| What | Where |
| --- | --- |
| Your name ("Bria Jackson") & logo initials | `components/Hero.tsx`, `components/Nav.tsx`, `components/Footer.tsx`, `app/layout.tsx` |
| Bio text | `components/Hero.tsx` |
| Headshot photo | `components/Hero.tsx` (swap the gradient circle for a `next/image`) |
| Certifications & skills | `components/Skills.tsx` (data arrays at the top) |
| Projects, screenshots, demo/repo links | `components/Projects.tsx` (data array at the top) |
| Resume PDF | Overwrite `public/resume.pdf` with your real resume (same filename) |
| Resume highlight stats | `components/Resume.tsx` |
| Email, GitHub, LinkedIn, WordPress blog URLs | `components/Contact.tsx`, `components/Footer.tsx`, `components/Hero.tsx`, `components/Nav.tsx` |
| Contact form backend | `components/Contact.tsx` — wire `handleSubmit` to Formspree or an API route (Resend/SendGrid) |
| SEO title/description/domain | `app/layout.tsx` (`metadata` + `metadataBase`) |
| Favicon | `app/icon.svg` |

## Structure

```
app/
  layout.tsx      # Fonts, SEO metadata, Nav + Footer shell
  page.tsx        # Section order
  globals.css     # Theme tokens, animations, scroll-reveal CSS
  icon.svg        # Favicon
components/
  Nav.tsx         # Fixed nav, hamburger menu on mobile
  Hero.tsx        # Name, title, bio, CTAs, headshot placeholder
  Skills.tsx      # Certification badges + skill groups
  Projects.tsx    # Project card grid
  Resume.tsx      # Highlights, download button, inline PDF preview
  Contact.tsx     # Validated contact form + direct links
  Footer.tsx
  Reveal.tsx      # IntersectionObserver scroll animation wrapper
  SectionHeading.tsx
  icons.tsx       # Inline brand SVGs (GitHub, LinkedIn, WordPress)
public/
  resume.pdf      # Placeholder — replace with your real resume
```

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click **Deploy** — no configuration needed (Vercel auto-detects Next.js).
3. After deploy, set `metadataBase` in `app/layout.tsx` to your live URL.
