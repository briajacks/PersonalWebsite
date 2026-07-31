import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/lib/projects";

/** Project card used by the homepage Projects section and the /projects page. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-fuchsia-400/60 hover:shadow-2xl hover:shadow-fuchsia-500/10">
      {/* Placeholder banner — see REPLACE note in lib/projects.ts */}
      <div
        className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${project.gradient}`}
      >
        <project.icon
          className={`h-14 w-14 ${project.iconColor} transition-transform duration-300 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line bg-tint px-2.5 py-1 text-xs font-medium text-body"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
          <a
            href={project.demoUrl}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-pop transition-opacity hover:opacity-75"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href={project.repoUrl}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-body transition-colors hover:text-ink"
          >
            <GitHubIcon className="h-4 w-4" />
            Source
          </a>
        </div>
      </div>
    </article>
  );
}
