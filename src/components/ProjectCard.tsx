import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In progress",
  archived: "Archived",
};

const statusColor: Record<Project["status"], string> = {
  live: "var(--color-success)",
  "in-progress": "var(--color-accent)",
  archived: "var(--color-text-muted)",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-150 hover:border-[var(--color-border-hover)] sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link
            to={`/projects/${project.slug}`}
            className="text-lg font-medium text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent-hover)]"
          >
            {project.name}
          </Link>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {project.tagline}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap pt-1 text-xs text-[var(--color-text-muted)]">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: statusColor[project.status] }}
          />
          {statusLabel[project.status]}
        </div>
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--color-border)] pt-6 sm:grid-cols-4">
        {project.features.map((feature) => (
          <li key={feature.title} className="text-sm text-[var(--color-text-secondary)]">
            {feature.title}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-[var(--color-text-muted)]">
          {project.stack.slice(0, 4).map((tech, i) => (
            <span key={tech}>
              {tech}
              {i < Math.min(project.stack.length, 4) - 1 && (
                <span className="ml-3 text-[var(--color-border-hover)]">·</span>
              )}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 text-sm">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-hover)]"
            >
              Live Demo →
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-hover)]"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
