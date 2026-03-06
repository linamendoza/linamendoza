"use client";

import { useState } from "react";
import { hooks, CATEGORIES, type Category } from "../data/hooks";
import HookCard from "./HookCard";

export default function HookGrid() {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered =
    active === "all" ? hooks : hooks.filter((h) => h.category === active);

  return (
    <div className="flex flex-col gap-6">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat.value
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "border border-zinc-200 text-zinc-600 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((hook) => (
          <HookCard key={hook.repoUrl} hook={hook} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-zinc-400">
          No hooks in this category yet.
        </p>
      )}
    </div>
  );
}
