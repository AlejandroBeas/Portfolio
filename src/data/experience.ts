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
    description: "Desarrollo full stack de funcionalidades end-to-end: APIs REST y diseño de esquemas e base de datos en el backend, y frontend con JavaScript y HTML. Diseñé bases de datos complejas para centralizar información que antes estaba dispersa, lo que —apoyado en APIs propias— permitió automatizar procesos que hasta entonces se hacían a mano. También me encargué del despliegue y mantenimiento de los servidores.",
    stack: ["Node.js", "TypeScript", "MySQL", "PHP", "Linux", "Oracle", "APIs"],
  },
];
