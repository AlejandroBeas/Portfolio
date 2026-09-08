import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-[var(--color-text-secondary)] sm:flex-row">
        <p>
          © {year} {siteConfig.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--color-text)]"
          >
            GitHub
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--color-text)]"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.socials.email}
            className="transition-colors hover:text-[var(--color-text)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
