"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, CheckCircle2, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GitHubIcon, WordPressIcon } from "@/components/icons";

/* ---------------------------------------------------------------------------
   REPLACE: your real contact details and profile URLs.
--------------------------------------------------------------------------- */
const CONTACT_LINKS = [
  {
    label: "Email",
    value: "bria.jackson.dev@example.com",
    href: "mailto:bria.jackson.dev@example.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
    icon: GitHubIcon,
  },
  {
    label: "Blog",
    value: "My WordPress blog",
    href: "https://example.wordpress.com", // REPLACE: your WordPress blog URL
    icon: WordPressIcon,
  },
];

type FormErrors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) {
      next.name = "Please enter your name.";
    }
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "That doesn't look like a valid email address.";
    }
    if (!values.message.trim()) {
      next.message = "Please enter a message.";
    } else if (values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    /*
      REPLACE: wire this up to a real backend. Easy options:
      1. Formspree — set the form's `action` to your Formspree endpoint.
      2. A Next.js route handler (app/api/contact/route.ts) that sends email
         via Resend/SendGrid:
           await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) })
      For now the form just shows the success state without sending anything.
    */
    setSubmitted(true);
  };

  const handleChange = (field: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear the field's error as soon as the user starts fixing it
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const inputClasses = (hasError: boolean) =>
    `w-full rounded-xl border bg-panel px-4 py-3 text-sm text-ink placeholder:text-faint shadow-sm transition-colors focus:outline-none focus:ring-2 dark:bg-white/5 ${
      hasError
        ? "border-rose-500/60 focus:ring-rose-500/40"
        : "border-line focus:border-fuchsia-400/60 focus:ring-fuchsia-500/30"
    }`;

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl dark:bg-fuchsia-600/10"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Contact"
          blurb="Have a role, a project, or just want to talk Java? My inbox is open."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Direct links */}
          <Reveal>
            <ul className="space-y-4">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-panel p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-fuchsia-400/60 hover:shadow-md hover:shadow-fuchsia-500/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-pop transition-colors group-hover:from-violet-500 group-hover:to-fuchsia-500 group-hover:text-white">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-ink">
                        {link.label}
                      </p>
                      <p className="truncate text-sm text-muted">
                        {link.value}
                      </p>
                    </div>
                    {link.href.startsWith("http") && (
                      <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-muted" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={150}>
            {submitted ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-8 text-center dark:border-emerald-400/30 dark:bg-emerald-400/5">
                <CheckCircle2 className="mb-4 h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-display text-xl font-semibold text-ink">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Thanks for reaching out — I&apos;ll get back to you within a
                  day or two.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-body"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={values.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={inputClasses(!!errors.name)}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-body"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={values.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={inputClasses(!!errors.email)}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-body"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about the role or project…"
                    value={values.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`${inputClasses(!!errors.message)} resize-y`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:shadow-xl hover:shadow-fuchsia-500/40 hover:brightness-110 sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
