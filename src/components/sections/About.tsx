import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading title="About" />
        <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            <p>
              Desarrollador backend y full stack con más de un año de experiencia profesional.
              Mi foco principal es el backend — PHP, Laravel, Node.js y TypeScript —
              aunque también me muevo con soltura en frontend con React cuando el proyecto lo pide.
            </p>
            <p>
              Formación técnica en Desarrollo de Aplicaciones Web, con experiencia en diseño de bases de datos,
              APIs REST, automatización de procesos y gestión de servidores.
              Destaco por mi gran capacidad de adaptación y aprendizaje.
            </p>
          </div>
          <div className="text-sm text-[var(--color-text-muted)]">
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
