import { ArrowUp, Mail } from "lucide-react";
import { GitHubIcon, WordPressIcon } from "@/components/icons";

/* REPLACE: your real profile URLs (kept in sync with Contact.tsx). */
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: GitHubIcon,
  },
  {
    label: "WordPress Blog",
    href: "https://example.wordpress.com",
    icon: WordPressIcon,
  },
  {
    label: "Email",
    href: "mailto:bria.jackson.dev@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-muted">
          {/* REPLACE: your name */}© {new Date().getFullYear()} Bria Jackson ·
          Built with Next.js & Tailwind CSS
        </p>

        <div className="flex items-center gap-2">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-muted transition-colors hover:bg-tint hover:text-ink"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
          <a
            href="/#about"
            aria-label="Back to top"
            className="ml-2 flex h-11 w-11 items-center justify-center rounded-xl border border-line text-body transition-colors hover:border-fuchsia-400/50 hover:text-pop"
          >
            <ArrowUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
