import { CodeXml, ServerCog, BrainCircuit, DatabaseZap, LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  details: string[];
};

export const services: Service[] = [
  {
    slug: 'desarrollo-frontend',
    title: 'Desarrollo Frontend',
    shortDescription: 'Creando interfaces de usuario atractivas y responsivas.',
    description: 'Construyo interfaces de usuario modernas, interactivas y de alto rendimiento utilizando las últimas tecnologías web. Mi enfoque es crear experiencias de usuario fluidas que sean visualmente atractivas y altamente funcionales.',
    icon: CodeXml,
    details: [
      'Experiencia en React, Next.js y Vue.js',
      'Gestión de estado con Redux o Zustand',
      'Diseño responsivo para todos los dispositivos',
      'Optimización del rendimiento y tiempos de carga rápidos',
      'Código accesible (a11y) y amigable para SEO'
    ],
  },
  {
    slug: 'desarrollo-backend',
    title: 'Desarrollo Backend',
    shortDescription: 'Construyendo aplicaciones del lado del servidor robustas y escalables.',
    description: 'Desarrollo sistemas backend seguros, eficientes y escalables para potenciar tus aplicaciones. Desde APIs RESTful hasta complejos pipelines de procesamiento de datos, aseguro que tu lógica del lado del servidor sea confiable y de alto rendimiento.',
    icon: ServerCog,
    details: [
      'Desarrollo con Node.js, Express y NestJS',
      'Diseño y gestión de bases de datos (SQL y NoSQL)',
      'Diseño de API (REST, GraphQL)',
      'Sistemas de autenticación y autorización',
      'Despliegue en la nube (Firebase, AWS, Vercel)'
    ],
  },
    {
    slug: 'integracion-ia',
    title: 'Integración de IA',
    shortDescription: 'Potenciando aplicaciones con inteligencia artificial.',
    description: 'Incorporo modelos de IA de vanguardia para crear funcionalidades inteligentes, desde chatbots y asistentes virtuales hasta análisis de datos complejos y generación de contenido.',
    icon: BrainCircuit,
    details: [
      'Integración con APIs de OpenAI, Gemini, etc.',
      'Desarrollo de flujos con Genkit',
      'Generación de texto, imágenes y audio',
      'Sistemas de recomendación personalizados',
      'Automatización de procesos con IA'
    ],
  },
    {
    slug: 'gestion-bases-datos',
    title: 'Bases de Datos',
    shortDescription: 'Diseñando y manteniendo bases de datos eficientes.',
    description: 'Una base sólida para cualquier aplicación. Me especializo en diseñar, desplegar y mantener bases de datos optimizadas para el rendimiento, la escalabilidad y la integridad de los datos.',
    icon: DatabaseZap,
    details: [
      'Bases de datos SQL (PostgreSQL, MySQL)',
      'Bases de datos NoSQL (MongoDB, Firestore)',
      'Diseño de esquemas y normalización',
      'Optimización de consultas e indexación',
      'Estrategias de migración y respaldo de datos'
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
}
