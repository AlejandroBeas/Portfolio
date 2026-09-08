import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/data/site";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-mono text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-hover)]"
        >
          {siteConfig.name}
        </Link>

        {isHome ? (
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <Link
            to="/"
            className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
          >
            ← Volver al inicio
          </Link>
        )}

        <a
          href={siteConfig.cvUrl}
          download
          className="hidden text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)] md:block"
        >
          CV
        </a>
      </nav>
    </header>
  );
}
