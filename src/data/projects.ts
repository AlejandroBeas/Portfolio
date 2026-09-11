export type ProjectStatus = "live" | "in-progress" | "archived";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string; // frase corta, ej. "SaaS para gestionar y optimizar la búsqueda de empleo."
  description: string; // párrafo largo para la página de detalle
  status: ProjectStatus;
  stack: string[];
  features: ProjectFeature[];
  links: ProjectLinks;
  role?: string;
  year?: string;
  highlights?: string[]; // métricas o puntos clave para la página de detalle
}

export const projects: Project[] = [
  {
    slug: "jobflow",
    name: "JobFlow",
    tagline: "SaaS para gestionar y optimizar la búsqueda de empleo.",
    description:
      "JobFlow centraliza todo el proceso de búsqueda de empleo en un solo lugar: descubrimiento de ofertas, matching automático según perfil, seguimiento de candidaturas y gestión de entrevistas. Pensado para que el usuario no pierda de vista en qué estado está cada proceso.",
    status: " in-progress",
    stack: ["React", "Node.js", "MySQL", "TypeScript", "Docker"],
    features: [
      {
        title: "Job Discovery",
        description: "Rastreo y agregación de ofertas desde múltiples fuentes en un feed unificado.",
      },
      {
        title: "Job Matching",
        description: "Puntuación de compatibilidad entre el perfil del usuario y cada oferta.",
      },
      {
        title: "Applications",
        description: "Seguimiento del estado de cada candidatura, de enviada a respuesta.",
      },
      {
        title: "Interview Management",
        description: "Calendario y notas centralizadas para cada proceso de entrevista.",
      },
    ],
    links: {
      demo: "https://jobflow.example.com",
      github: "https://github.com/tu-usuario/jobflow",
    },
    role: "Full Stack Developer",
    year: "2025",
    highlights: [
      "API REST con autenticación JWT y control de roles",
      "Matching basado en scoring ponderado de skills y ubicación",
      "Pipeline de scraping desacoplado con colas y workers",
    ],
  },
  {
    slug: "devhub",
    name: "DevHub",
    tagline: "Plataforma para gestionar APIs y servicios.",
    description:
      "DevHub es un panel centralizado para equipos que exponen APIs internas o públicas: gestión de credenciales, generación de API keys, monitorización de uso en tiempo real y documentación versionada, todo en un mismo lugar.",
    status: "in-progress",
    stack: ["React", "TypeScript", "Node.js", "MySQL", "Docker"],
    features: [
      {
        title: "API Management",
        description: "Alta, versionado y configuración de endpoints desde un panel único.",
      },
      {
        title: "Authentication",
        description: "Gestión de usuarios, roles y permisos por servicio.",
      },
      {
        title: "API Keys",
        description: "Emisión, rotación y revocación de claves con scopes granulares.",
      },
      {
        title: "Monitoring",
        description: "Métricas de uso, latencia y errores en tiempo real por endpoint.",
      },
      {
        title: "Documentation",
        description: "Documentación generada e interactiva, siempre sincronizada con la API.",
      },
    ],
    links: {
      github: "https://github.com/tu-usuario/devhub",
    },
    role: "Backend Developer",
    year: "2025",
    highlights: [
      "Rate limiting configurable por API key",
      "Documentación autogenerada a partir del esquema de la API",
      "Dashboard de métricas en tiempo real vía WebSockets",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
