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
              Soy desarrollador backend y full stack, con más de un año de experiencia profesional.
              Me muevo principalmente en PHP, Laravel, Node.js, TypeScript y Java, además de tener
              soltura trabajando con bases de datos. En frontend controlo bien HTML y tengo bastante
              experiencia con JavaScript, además de haber trabajado con React y Astro.
            </p>
            <p>
              Vengo de Formación en Desarrollo de Aplicaciones Web, y por el camino he ido cogiendo
              experiencia en diseño de bases de datos, APIs REST, automatización de procesos y gestión
              de servidores. Se me da bien adaptarme a proyectos nuevos y aprender rápido lo que haga falta.
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
