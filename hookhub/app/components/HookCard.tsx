import { Hook, CATEGORY_COLORS, CATEGORIES } from "../data/hooks";

export default function HookCard({ hook }: { hook: Hook }) {
  const categoryLabel =
    CATEGORIES.find((c) => c.value === hook.category)?.label ?? hook.category;

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-2">
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[hook.category]}`}
        >
          {categoryLabel}
        </span>
        {hook.language && (
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            {hook.language}
          </span>
        )}
      </div>

      <div>
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {hook.name}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          by {hook.author}
        </p>
      </div>

      <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {hook.description}
      </p>

      <a
        href={hook.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
      >
        View on GitHub
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </div>
  );
}
