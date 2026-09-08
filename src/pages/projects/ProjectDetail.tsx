import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { getProjectBySlug, projects } from "@/data/projects";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="py-16 sm:py-20">
      <div className="container-page max-w-3xl">
        <Link
          to="/#projects"
          className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
        >
          ← Proyectos
        </Link>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              {project.tagline}
            </p>
          </div>

          <div className="flex gap-3">
            {project.links.demo && (
              <Button href={project.links.demo} target="_blank" rel="noreferrer">
                Live Demo →
              </Button>
            )}
            {project.links.github && (
              <Button
                href={project.links.github}
                variant="secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </Button>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-12 grid gap-12 sm:grid-cols-[1fr_220px]">
          <div className="space-y-10">
            <section>
              <h2 className="text-base font-medium text-[var(--color-text)]">
                Sobre el proyecto
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-[var(--color-text)]">
                Funcionalidades
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                  >
                    <h3 className="text-sm font-medium text-[var(--color-text)]">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {project.highlights && (
              <section>
                <h2 className="text-base font-medium text-[var(--color-text)]">
                  Detalles técnicos
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {project.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-6 text-sm">
            {project.role && (
              <div>
                <p className="text-[var(--color-text-muted)]">Rol</p>
                <p className="mt-1 text-[var(--color-text)]">{project.role}</p>
              </div>
            )}
            {project.year && (
              <div>
                <p className="text-[var(--color-text-muted)]">Año</p>
                <p className="mt-1 text-[var(--color-text)]">{project.year}</p>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-8">
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
          >
            <span>Siguiente proyecto</span>
            <span className="font-medium text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent-hover)]">
              {nextProject.name} →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
