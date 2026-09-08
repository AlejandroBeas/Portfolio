export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  stack?: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "ICFO – The Institute of Photonic Sciences",
    role: "Web Developer",
    period: "Junio 2025 — Junio 2026",
    location: "Mediterranean Technology Park, 08860 Castelldefels, Barcelona",
    description:
      "Desarrollo y mantenimiento de APIs REST, diseño de esquemas de base de datos y optimización de consultas para servicios con alto volumen de tráfico.",
    stack: ["Node.js", "TypeScript", "MySQL", "PHP", "Linux", "Oracle", "APIs"],
  },
];
