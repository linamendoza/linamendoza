# HookHub — Specification (MVP)

## Overview

HookHub is a discovery gallery for open-source Claude Code hooks. Users can browse and find community-built hooks, each linking back to its GitHub repository.

The MVP focuses exclusively on **displaying hooks** — no auth, no submissions, no search.

---

## What is a Hook?

A Claude Code hook is a user-defined shell command or script that runs automatically at specific points in Claude Code's lifecycle (e.g., before a tool is used, after a response, on session start). The community has built reusable hooks for notifications, safety, formatting, multi-agent coordination, and more.

---

## Data Model

Each hook entry has the following fields:

```ts
type Hook = {
  name: string;           // Display name, e.g. "CC Notify"
  author: string;         // GitHub username or display name
  description: string;    // One or two sentence summary
  category: Category;     // See categories below
  repoUrl: string;        // Full GitHub repository URL
  language?: string;      // Primary language: "Python" | "TypeScript" | "PHP" | etc.
};
```

### Categories

| Value          | Label              |
|----------------|--------------------|
| `notifications`| Notifications      |
| `safety`       | Safety & Security  |
| `sdk`          | SDKs & Frameworks  |
| `collaboration`| Collaboration      |
| `formatting`   | Code & Formatting  |
| `automation`   | Automation         |
| `utilities`    | Utilities          |

---

## Seed Data

Initial hooks sourced from [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) and community repositories:

| Name | Author | Category | Repo |
|------|--------|----------|------|
| CC Notify | dazuiba | notifications | https://github.com/dazuiba/CCNotify |
| claude-code-hooks-mastery | disler | utilities | https://github.com/disler/claude-code-hooks-mastery |
| claude-code-hooks | karanb192 | safety | https://github.com/karanb192/claude-code-hooks |
| claudekit | carlrannaberg | automation | https://github.com/carlrannaberg/claudekit |
| cchooks | GowayLee | sdk | https://github.com/GowayLee/cchooks |
| claude-code-hooks-sdk | beyondcode | sdk | https://github.com/beyondcode/claude-hooks-sdk |
| claude-hooks | johnlindquist | sdk | https://github.com/johnlindquist/claude-hooks |
| Claude Hook Comms (HCOM) | aannoo | collaboration | https://github.com/aannoo/claude-hook-comms |
| Britfix | Talieisin | formatting | https://github.com/Talieisin/britfix |
| everything-claude-code | affaan-m | utilities | https://github.com/affaan-m/everything-claude-code |

Data lives in a static TypeScript file: `app/data/hooks.ts`.

---

## Pages (MVP)

### `/` — Home / Grid

The only page for MVP.

**Layout:**
- Header: app name "HookHub" + tagline ("Discover open-source Claude Code hooks")
- Filter bar: category pills/tabs to filter the grid (All selected by default)
- Hook grid: responsive card grid (3 columns on desktop, 2 on tablet, 1 on mobile)
- Footer: link to awesome-claude-code source list

**Hook Card:**
```
┌──────────────────────────────┐
│ [category badge]             │
│                              │
│ Hook Name                    │
│ by author                    │
│                              │
│ Short description text here  │
│ that wraps to two lines max. │
│                              │
│ [language tag]  [→ GitHub]   │
└──────────────────────────────┘
```

- Category badge: colored pill matching the category
- "→ GitHub" opens the repo in a new tab
- Cards are not clickable as a whole — only the GitHub link

---

## Technical Notes

- **Data**: static `hooks.ts` file — no database, no API calls for MVP
- **Filtering**: client-side, by category
- **Routing**: single page, no dynamic routes needed
- **Stack**: Next.js App Router, TypeScript, Tailwind CSS 4

---

## Out of Scope (MVP)

- Search / full-text filtering
- Hook submission form
- Hook detail pages
- Sorting (by stars, date, etc.)
- GitHub stars count (requires API + auth)
- User accounts
