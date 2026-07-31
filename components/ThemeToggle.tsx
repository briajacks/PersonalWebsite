"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * Light/dark mode switch. The current theme lives as a `.dark` class on
 * <html> (set pre-hydration by the inline script in app/layout.tsx) and the
 * user's choice is persisted to localStorage; with no saved choice the site
 * follows the OS preference.
 */
export default function ThemeToggle() {
  // null until mounted — the server doesn't know the visitor's theme
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private mode) — theme still toggles for
      // this visit, it just won't persist
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-body transition-colors hover:bg-tint hover:text-ink"
    >
      {isDark === null ? (
        <span className="h-5 w-5" />
      ) : isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
