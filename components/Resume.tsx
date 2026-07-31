import { Download, BadgeCheck, Briefcase, FolderGit2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

/* REPLACE: update these quick-stat highlights with your real numbers. */
const HIGHLIGHTS = [
  {
    icon: Briefcase,
    stat: "7+ yrs",
    label: "Building with Java & web technologies",
  },
  {
    icon: BadgeCheck,
    stat: "4",
    label: "Industry certifications",
  },
  {
    icon: FolderGit2,
    stat: "3+",
    label: "Full-stack projects shipped end-to-end",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Resume"
          blurb="The quick version is below — grab the PDF for the full story."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Highlights + download */}
          <Reveal>
            <div className="flex h-full flex-col justify-center gap-4">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-panel p-5 shadow-sm transition-colors hover:border-fuchsia-400/60"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-ink">
                      {item.stat}
                    </p>
                    <p className="text-sm text-muted">{item.label}</p>
                  </div>
                </div>
              ))}

              {/*
                REPLACE: public/resume.pdf is a placeholder file.
                Drop your real resume PDF at public/resume.pdf (same name = no
                code changes needed).
              */}
              <a
                href="/resume.pdf"
                download
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:shadow-xl hover:shadow-fuchsia-500/40 hover:brightness-110"
              >
                <Download className="h-5 w-5" />
                Download Resume (PDF)
              </a>
            </div>
          </Reveal>

          {/* Inline PDF preview — desktop only (mobile browsers handle
              embedded PDFs poorly, so smaller screens just get the button) */}
          <Reveal delay={150} className="hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-xl">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-muted">resume.pdf</span>
              </div>
              <object
                data="/resume.pdf"
                type="application/pdf"
                className="h-[540px] w-full"
                aria-label="Resume preview"
              >
                <p className="p-8 text-sm text-muted">
                  Your browser can&apos;t display the inline preview —{" "}
                  <a href="/resume.pdf" className="text-pop underline">
                    download the PDF instead
                  </a>
                  .
                </p>
              </object>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
