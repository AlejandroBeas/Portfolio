import { Button } from "@/components/Button";
import { StatusPill } from "@/components/StatusPill";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* fondo: grid + gradient muy sutil */}
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div className="container-page relative">
        <StatusPill />

        <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
          {siteConfig.role}
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
          Construyo APIs, aplicaciones web y sistemas orientados a datos con
          TypeScript, Node.js y bases de datos.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projects">Ver proyectos</Button>
          <Button href={siteConfig.cvUrl} variant="secondary" download>
            Descargar CV
          </Button>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-[var(--color-text-muted)]">
          {siteConfig.heroStack.map((tech, i) => (
            <span key={tech} className="flex items-center gap-3">
              {tech}
              {i < siteConfig.heroStack.length - 1 && (
                <span className="text-[var(--color-border-hover)]">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
