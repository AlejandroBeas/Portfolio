import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading title="Experience" />

        <div className="relative max-w-2xl border-l border-[var(--color-border)] pl-8">
          {experience.map((item) => (
            <div key={item.company} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2 w-2 rounded-full bg-[var(--color-accent)]" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-medium text-[var(--color-text)]">
                  {item.role} · {item.company}
                </h3>
                <span className="font-mono text-xs text-[var(--color-text-muted)]">
                  {item.period}
                </span>
              </div>

              <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                {item.description}
              </p>

              {item.stack && (
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-[var(--color-text-muted)]">
                  {item.stack.map((tech, i) => (
                    <span key={tech}>
                      {tech}
                      {i < item.stack!.length - 1 && (
                        <span className="ml-3 text-[var(--color-border-hover)]">·</span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
