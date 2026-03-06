export type Category =
  | "notifications"
  | "safety"
  | "sdk"
  | "collaboration"
  | "formatting"
  | "automation"
  | "utilities";

export type Hook = {
  name: string;
  author: string;
  description: string;
  category: Category;
  repoUrl: string;
  language?: string;
};

export const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "notifications", label: "Notifications" },
  { value: "safety", label: "Safety & Security" },
  { value: "sdk", label: "SDKs & Frameworks" },
  { value: "collaboration", label: "Collaboration" },
  { value: "formatting", label: "Code & Formatting" },
  { value: "automation", label: "Automation" },
  { value: "utilities", label: "Utilities" },
];

export const CATEGORY_COLORS: Record<Category, string> = {
  notifications: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  safety: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  sdk: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  collaboration: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  formatting: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  automation: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  utilities: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
};

export const hooks: Hook[] = [
  {
    name: "CC Notify",
    author: "dazuiba",
    description:
      "Desktop notifications for Claude Code events — alerts when input is needed or tasks complete, with one-click navigation back to VS Code and task duration tracking.",
    category: "notifications",
    repoUrl: "https://github.com/dazuiba/CCNotify",
    language: "TypeScript",
  },
  {
    name: "claude-code-hooks-mastery",
    author: "disler",
    description:
      "Master Claude Code hooks with complete lifecycle coverage — all 13 hook events implemented, an intelligent TTS system, security enhancements, and automatic JSON logging.",
    category: "utilities",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    language: "Python",
  },
  {
    name: "claude-code-hooks",
    author: "karanb192",
    description:
      "A growing collection of ready-to-use hooks covering safety, automation, and notifications. Copy, paste, and customize. Combine block-dangerous-commands with protect-secrets for full safety coverage.",
    category: "safety",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    language: "Python",
  },
  {
    name: "claudekit",
    author: "carlrannaberg",
    description:
      "Toolkit of hooks and utilities including an automatic thinking-level hook that enhances Claude's reasoning invisibly, with session-based hook control and under 5ms overhead.",
    category: "automation",
    repoUrl: "https://github.com/carlrannaberg/claudekit",
    language: "TypeScript",
  },
  {
    name: "cchooks",
    author: "GowayLee",
    description:
      "Lightweight Python SDK with a clean API and good documentation. Simplifies writing hooks and integrating them into your codebase.",
    category: "sdk",
    repoUrl: "https://github.com/GowayLee/cchooks",
    language: "Python",
  },
  {
    name: "claude-code-hooks-sdk",
    author: "beyondcode",
    description:
      "Laravel-inspired PHP SDK for building Claude Code hook responses with an expressive, fluent, and chainable interface.",
    category: "sdk",
    repoUrl: "https://github.com/beyondcode/claude-hooks-sdk",
    language: "PHP",
  },
  {
    name: "claude-hooks",
    author: "johnlindquist",
    description:
      "TypeScript-based system for configuring and customizing Claude Code hooks with a clean, typed API.",
    category: "sdk",
    repoUrl: "https://github.com/johnlindquist/claude-hooks",
    language: "TypeScript",
  },
  {
    name: "Claude Hook Comms (HCOM)",
    author: "aannoo",
    description:
      "Real-time multi-agent collaboration via hooks with @-mention targeting, a live dashboard for monitoring, and zero external dependencies.",
    category: "collaboration",
    repoUrl: "https://github.com/aannoo/claude-hook-comms",
    language: "Python",
  },
  {
    name: "Britfix",
    author: "Talieisin",
    description:
      "Converts American English to British English automatically via a Claude Code hook. Intelligently targets only comments and docstrings, leaving identifiers and string literals untouched.",
    category: "formatting",
    repoUrl: "https://github.com/Talieisin/britfix",
    language: "Python",
  },
  {
    name: "everything-claude-code",
    author: "affaan-m",
    description:
      "Battle-tested collection of agents, skills, hooks, commands, rules, and MCP configs from an Anthropic hackathon winner — evolved over 10+ months of daily use.",
    category: "utilities",
    repoUrl: "https://github.com/affaan-m/everything-claude-code",
    language: "Python",
  },
];
