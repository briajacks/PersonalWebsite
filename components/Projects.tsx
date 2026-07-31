import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { FEATURED_PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      {/* Subtle backdrop accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-600/10"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects"
          blurb="A selection of things I've designed, built, and shipped — from REST APIs to full-stack web apps."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-fuchsia-500/40 px-5 py-2.5 text-sm font-semibold text-pop transition-colors hover:border-fuchsia-500 hover:bg-fuchsia-500/10"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
