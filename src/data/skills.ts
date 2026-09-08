export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "Microservicios", "Java", "Spring Framework", "PHP", "Laravel", "Symphony", "Python"],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "CSS", "HTML", "AngularJS", "UI", "Astro"],
  },
  {
    category: "Bases de datos",
    items: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "SQL Server"],
  },
  {
    category: "Infraestructura",
    items: ["Docker", "CI/CD", "Nginx", "Git", "UID"],
  },
];
