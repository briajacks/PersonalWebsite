"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

// Section links are prefixed with "/" so they also work from /projects
// and /certifications, not just the homepage.
const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

// REPLACE: point this at your real WordPress blog URL
const BLOG_URL = "https://example.wordpress.com";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6"
        aria-label="Main navigation"
      >
        {/* Logo — REPLACE: your initials/name */}
        <Link
          href="/#about"
          className="font-display text-xl font-bold text-ink"
          onClick={() => setMenuOpen(false)}
        >
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-amber-400">
            brilacherie
          </span>
          <span className="text-fuchsia-500">.</span>me
        </Link>

        <div className="flex items-center gap-1">
          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-tint hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-fuchsia-500/40 px-3 py-2 text-sm font-medium text-pop transition-colors hover:border-fuchsia-500 hover:bg-fuchsia-500/10"
            >
              Blog
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <ThemeToggle />

          {/* Mobile hamburger (44px touch target) */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-tint md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-line bg-canvas/95 backdrop-blur-md transition-[max-height] duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-96 border-b" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 pt-2 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-body transition-colors hover:bg-tint hover:text-ink"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-pop transition-colors hover:bg-fuchsia-500/10"
            onClick={() => setMenuOpen(false)}
          >
            Blog
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
