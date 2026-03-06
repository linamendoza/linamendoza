# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project: hookhub

A Next.js app located in the `hookhub/` directory. All development commands should be run from within that directory.

**Package manager**: npm (package-lock.json present)

```bash
cd hookhub
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (eslint-config-next with core-web-vitals + TypeScript rules)
```

## Stack

- Next.js 16.1.6 (App Router)
- React 19.2.3, TypeScript 5
- Tailwind CSS 4 (configured via PostCSS)
- ESLint 9 with `eslint-config-next`

## Architecture

- `hookhub/app/` — App Router root: `layout.tsx` (root layout with Geist fonts), `page.tsx` (home page), `globals.css`
- No `src/` wrapper — pages and components live directly under `app/`
- No custom API routes or server components beyond the default scaffold yet

## CI

`.github/workflows/blank.yml` triggers on push/PR to `main` but is a placeholder (only runs echo commands). The workflow needs to be updated to actually build/lint the Next.js app.
