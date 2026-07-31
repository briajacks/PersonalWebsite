import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Bria Jackson",
  description:
    "The full collection of projects by Bria Jackson — REST APIs, full-stack web apps, and tools built with Java, Spring Boot, and modern front-end tooling.",
};

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Subtle backdrop accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-600/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl dark:bg-fuchsia-600/10"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </Reveal>

        <SectionHeading
          as="h1"
          eyebrow="Portfolio"
          title="All Projects"
          blurb="The full collection — every project I've designed, built, and shipped, from REST APIs and full-stack web apps to small tools and experiments."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
