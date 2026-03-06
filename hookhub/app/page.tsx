import HookGrid from "./components/HookGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            HookHub 🪝
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Discover open-source Claude Code hooks built by the community.
          </p>
        </header>

        {/* Grid + filters */}
        <HookGrid />

        {/* Footer */}
        <footer className="mt-16 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            Hooks sourced from{" "}
            <a
              href="https://github.com/hesreallyhim/awesome-claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              awesome-claude-code
            </a>
            {" "}and the Claude Code community.
          </p>
        </footer>
      </div>
    </div>
  );
}
