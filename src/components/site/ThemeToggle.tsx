"use client";

import { Moon, Sun } from "@phosphor-icons/react";

export function ThemeToggle() {
  const flip = () => {
    const root = document.documentElement;
    const next = root.classList.contains("light") ? "dark" : "light";
    root.classList.remove("light", "dark");
    root.classList.add(next);
    document.cookie = `theme=${next}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <button
      type="button"
      onClick={flip}
      aria-label="Switch color theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--text)] active:scale-[0.98]"
    >
      <Sun size={18} weight="regular" className="theme-icon-sun" />
      <Moon size={18} weight="regular" className="theme-icon-moon" />
    </button>
  );
}
