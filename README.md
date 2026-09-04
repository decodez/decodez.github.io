# decodez.github.io

Personal portfolio and case-study site for Akhil Prasenan, live at [decodez.github.io](https://decodez.github.io).

## Stack

- **React 19** + **React Router 7** (file-based routes under `src/app/routes`)
- **Vite 7** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for page/element transitions
- **cmdk** for the command-palette navigation
- `lucide-react` for icons, `clsx` / `tailwind-merge` for class composition

## Structure

```
src/
├── app/
│   ├── layout/         # shared shell (nav, command palette, etc.)
│   └── routes/         # home.tsx, case-studies.tsx, case-study.$slug.tsx
├── components/         # shared UI components
├── content/
│   └── case-studies/   # one JSON file per case study, rendered by case-study.$slug.tsx
├── lib/                # utilities
├── router.tsx           # route table
└── main.tsx
```

Case studies are data-driven — add a new one by dropping a JSON file into `src/content/case-studies/` following the shape of the existing entries; no route code changes needed.

## Local development

```bash
npm install
npm run dev       # start the Vite dev server
npm run build      # type-check (tsc -b) + production build
npm run preview    # preview the production build locally
npm run lint        # eslint
```

## Deployment

Deployed to GitHub Pages from this repo (`decodez.github.io` — the special repo name GitHub uses to serve a user site directly at `https://decodez.github.io`).
