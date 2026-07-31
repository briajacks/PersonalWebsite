import Image from "next/image";
import { ArrowRight, Download, Mail, Coffee, Leaf, Database } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="animate-blob absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-300/40 blur-3xl dark:bg-violet-600/25" />
        <div className="animate-blob-slow absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl dark:bg-fuchsia-600/20" />
        <div className="animate-blob absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-500/15" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        {/* Intro copy */}
        <Reveal>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] uppercase text-pop">
            Hello, my name is
          </p>
          <h1 className="font-display text-4xl leading-tight font-bold text-ink sm:text-5xl lg:text-6xl">
            Bria{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-amber-400">
              Jackson
            </span>
          </h1>
          <h2 className="mt-3 font-display text-2xl font-semibold text-body sm:text-3xl">
            Java Web Developer
          </h2>
          {/* Bio */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I build fast, reliable web applications with Java and Spring Boot —
            from REST APIs and database design to clean, responsive front ends.
            Certified in networking and infrastructure (CCNA, CompTIA A+), I
            bring a full-picture understanding of how the web works, from the
            wire to the browser. Currently looking for my next role on a
            product-focused engineering team.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:shadow-xl hover:shadow-fuchsia-500/40 hover:brightness-110 sm:px-6"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-amber-400/60 hover:bg-amber-400/10 hover:text-amber-600 dark:hover:text-amber-300 sm:px-6"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-body transition-colors hover:bg-tint hover:text-ink sm:px-6"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>

        </Reveal>

        {/* Headshot */}
        <Reveal delay={150} className="justify-self-center lg:justify-self-end">
          <div className="relative">
            <div className="rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 p-1.5 shadow-2xl shadow-fuchsia-500/20">
              <Image
                src="/headshot.jpg"
                alt="Bria Jackson"
                width={288}
                height={288}
                priority
                className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
              />
            </div>

            {/* Floating tech chips */}
            <div className="animate-float absolute -top-2 -left-6 flex items-center gap-2 rounded-full border border-line bg-panel/90 px-3 py-2 text-xs font-medium text-body shadow-lg backdrop-blur-sm">
              <Coffee className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              Java 21
            </div>
            <div
              className="animate-float absolute top-1/2 -right-8 flex items-center gap-2 rounded-full border border-line bg-panel/90 px-3 py-2 text-xs font-medium text-body shadow-lg backdrop-blur-sm"
              style={{ animationDelay: "1.5s" }}
            >
              <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              Spring Boot
            </div>
            <div
              className="animate-float absolute -bottom-3 left-8 flex items-center gap-2 rounded-full border border-line bg-panel/90 px-3 py-2 text-xs font-medium text-body shadow-lg backdrop-blur-sm"
              style={{ animationDelay: "3s" }}
            >
              <Database className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              SQL
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
