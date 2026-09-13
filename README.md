# Ali Ahmed — Personal Portfolio

A complete React + TypeScript + Vite project styled with Tailwind CSS. Near-black surfaces, violet accents, locally served typography, subtle scroll reveals, a responsive project grid, an experience timeline, and a working résumé download.

## Run locally

Use Node.js 24 LTS (also recorded in `.nvmrc`). Then, from this folder:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production build:

```bash
npm run build
npm run preview
```

Deploy the contents of `dist/` to a static host. There is no backend, API key, database, or environment secret required for this portfolio. The Weather App is a portfolio entry describing Ali's separate project; the portfolio does not itself call a weather API.

The checked-in `package-lock.json` makes installations reproducible. Use `npm ci` for a clean, exact-lockfile installation. Run `npm run typecheck` for TypeScript validation.

## What's included

- Sticky navigation with active-section highlighting, accessible mobile navigation, GitHub/LinkedIn links, and a résumé download.
- Hero, four factual stats, two-paragraph About narrative, focus areas, education, scholarship, GPA, honors, and coursework.
- A working Run button on the hero's code card. It uses the displayed profile values to show "Ali Ahmed is a Computer Science student at ASU." with a brief fade from left to right; clicking again replays the animation. Keyboard activation and reduced-motion preferences are supported.
- A featured Weather App card with highlights, tags, optional date, screenshot, source link, and live URL support.
- Every provided experience and leadership entry, with quantified results retained.
- Grouped languages and tools, plus the University of Michigan certification.
- Email/phone links, clipboard copying with success and failure feedback, and a contact footer.
- Favicon, Open Graph and X metadata, reduced-motion support, skip navigation, semantic landmarks, visible focus styles, and a print stylesheet.
- A one-page résumé PDF generated from the information in the brief. Review it before sending to employers; replace it with your own PDF whenever ready.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page title, description, social metadata, and entry point |
| `package.json`, `package-lock.json` | Scripts and dependencies |
| `vite.config.ts` | React, Tailwind, and optional base-path configuration |
| `tailwind.config.ts` | Tailwind colors and font families; explicitly loaded by CSS |
| `tsconfig*.json` | Strict application and build-tool TypeScript configuration |
| `.nvmrc`, `.env.example`, `.gitignore` | Runtime version, optional path setting, ignored outputs |
| `public/favicon.svg`, `public/robots.txt` | Browser icon and crawler rules |
| `public/resume.pdf` | Working résumé download |
| `src/main.tsx`, `src/App.tsx` | React entry point and section composition |
| `src/index.css` | Design tokens, layout, responsiveness, motion, and print styles |
| `src/data/portfolio.ts` | Contact details, stats, projects, experience, leadership, coursework |
| `src/components/` | All page sections and shared UI helpers |
| `src/vite-env.d.ts` | Vite client types |
| `scripts/create-resume.py` | Optional script for regenerating the bundled PDF |

## Five quick customizations

1. **Change the accent.** Edit the accent variables at the top of `src/index.css`. Current violet: `#b6a0ff`. Alternatives: teal `#66dfcc` or warm amber `#f0bd6c`. Update the matching hover/soft values, the code/project illustration colors, and `public/favicon.svg` for a fully coordinated palette. Recheck text contrast if you choose darker colors.
2. **Add real project links and dates.** Set `githubUrl`, `liveUrl`, and `period` on the Weather App object in `src/data/portfolio.ts`. Until a repository is provided, the card deliberately links to the supplied GitHub profile and labels that link correctly. No repository URL or project date has been invented.
3. **Add screenshots and more projects.** Put a WebP or PNG in `public/images/`, then set `image: { src: 'images/weather-app.webp', alt: 'A specific description of the screenshot' }`. Add two or three more `Project` objects to the array; omit `featured` for half-width cards. The grid adapts without empty cards. Update the short Projects introduction if you add multiple projects.
4. **Swap the résumé.** Replace `public/resume.pdf`; the navigation download will keep working. To use another filename, change `profile.resumePath` in `src/data/portfolio.ts`. The optional generator uses `python -m pip install reportlab` followed by `python scripts/create-resume.py`; Python is not needed to run the website.
5. **Personalize your deployment.** Update `og:url` and the canonical URL in `index.html` for your final domain, plus any changed contact details in `src/data/portfolio.ts`. For a GitHub Pages project subdirectory, create `.env.local` from `.env.example`, set `VITE_BASE_PATH=/repository-name/`, and rebuild. Navigation uses same-page anchors; PDF, favicon, and project image paths respect the base path. If you add a social-preview image later, add its absolute `og:image` and `twitter:image` URLs in `index.html`.

## Content and accessibility details

The stats use three professional roles, a 44% increase in consultations, an 80-person staff team, and expected graduation in 2027. They do not turn coordination into an unsupported claim of managing all 80 staff. The 113-member leadership role is stated separately in the tech society entry.

The project artwork is a typographic overview, not a screenshot or live weather feed. Real screenshots replace it through the optional `image` field. Technical skills reflect the supplied list; React, TypeScript, and Tailwind are the implementation stack of this portfolio and have not been added to the résumé as established experience.

Motion honors `prefers-reduced-motion` and content is visible if observation is unavailable. Mobile navigation is a disclosure rather than a modal; Escape closes it and returns focus to the menu button. Contact works through direct `mailto:` and `tel:` links. Clipboard errors produce a visible, announced fallback instead of a false success.

Social metadata is provided without a fabricated preview image. The contact details are intentionally visible because they were provided for this portfolio. No analytics or trackers are included.

## Credits and references

Layout inspiration: [dtandon.com](https://dtandon.com) and [abdullah-masood.com](https://www.abdullah-masood.com/). All résumé content comes from Ali's supplied information.

Implementation references: [Vite guide](https://vite.dev/guide/) and [Tailwind's Vite integration](https://tailwindcss.com/docs/installation/using-vite). Tailwind v4 uses the Vite plugin; a PostCSS config is not necessary for this setup.

Manrope and JetBrains Mono are self-hosted through Fontsource under the SIL Open Font License. Interface icons use Lucide; brand icons use React Icons. The installed packages include their original license notices. Brand marks remain the property of their respective owners.
