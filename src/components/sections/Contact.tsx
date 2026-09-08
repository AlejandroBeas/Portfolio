import { Button } from "@/components/Button";
import { StatusPill } from "@/components/StatusPill";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-14 text-center sm:px-16">
          <div className="flex justify-center">
            <StatusPill />
          </div>

          <h2 className="mx-auto mt-6 max-w-lg text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
            ¿Tienes un proyecto en mente? Hablemos.
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[15px] text-[var(--color-text-secondary)]">
            Escríbeme directamente o revisa mi CV para más detalle sobre mi experiencia.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={siteConfig.socials.email}>Enviar email</Button>
            <Button href={siteConfig.cvUrl} variant="secondary" download>
              Descargar CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
