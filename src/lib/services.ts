import { Ticket, BrainCircuit, DatabaseZap, LucideIcon, Warehouse } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  imageUrl: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: 'plataforma-de-rifas',
    title: 'Plataforma de Rifas Online',
    shortDescription: 'Lanza sorteos y rifas de forma segura y transparente con una plataforma personalizada, automatizada y fácil de gestionar.',
    description: 'Desarrollo plataformas de rifas online completas y a medida, eliminando la necesidad de integrar pasarelas de pago externas. Desde la venta de boletos, hasta la selección aleatoria de ganadores y la notificación automática. Ofrece a tus usuarios una experiencia segura, transparente y emocionante.',
    icon: Ticket,
    details: [
      'Venta y gestión de boletos personalizables',
      'Sistema de selección de ganadores aleatorio y verificable',
      'Panel de administración para gestionar rifas y usuarios',
      'Diseño 100% responsivo y adaptado a tu marca'
    ],
    imageUrl: 'https://placehold.co/1200x800.png',
    imageAlt: 'Interfaz de una plataforma de rifas online',
  },
  {
    slug: 'sistemas-de-inventario',
    title: 'Sistemas de Inventario',
    shortDescription: 'Optimiza la gestión de tu negocio con un sistema de inventario a medida, centralizando el control de stock, ventas y proveedores.',
    description: 'Desarrollo soluciones de software personalizadas para la gestión de inventarios que te permiten tener un control total sobre tus productos. Optimiza tus operaciones, reduce pérdidas y toma decisiones informadas con un sistema robusto y fácil de usar.',
    icon: Warehouse,
    details: [
      'Control de stock en tiempo real',
      'Gestión de compras y proveedores',
      'Generación de reportes de ventas y stock',
      'Integración con puntos de venta (POS)'
    ],
    imageUrl: 'https://placehold.co/1200x800.png',
    imageAlt: 'Dashboard de un sistema de inventario',
  },
    {
    slug: 'integracion-ia',
    title: 'Integración de IA',
    shortDescription: 'Potenciando tus aplicaciones con inteligencia artificial de vanguardia para crear experiencias únicas y automatizar procesos complejos.',
    description: 'Incorporo modelos de IA de vanguardia para crear funcionalidades inteligentes, desde chatbots y asistentes virtuales hasta análisis de datos complejos y generación de contenido.',
    icon: BrainCircuit,
    details: [
      'Integración con APIs de OpenAI, Gemini, etc.',
      'Desarrollo de flujos con Genkit',
      'Generación de texto, imágenes y audio',
      'Sistemas de recomendación personalizados',
      'Automatización de procesos con IA'
    ],
    imageUrl: 'https://placehold.co/1200x800.png',
    imageAlt: 'Visualización de una red neuronal de inteligencia artificial',
  },
    {
    slug: 'gestion-bases-datos',
    title: 'Bases de Datos',
    shortDescription: 'Diseñando y manteniendo bases de datos eficientes, seguras y escalables que son la base sólida de tu aplicación.',
    description: 'Una base sólida para cualquier aplicación. Me especializo en diseñar, desplegar y mantener bases de datos optimizadas para el rendimiento, la escalabilidad y la integridad de los datos.',
    icon: DatabaseZap,
    details: [
      'Bases de datos SQL (PostgreSQL, MySQL)',
      'Bases de datos NoSQL (MongoDB, Firestore)',
      'Diseño de esquemas y normalización',
      'Optimización de consultas e indexación',
      'Estrategias de migración y respaldo de datos'
    ],
    imageUrl: 'https://placehold.co/1200x800.png',
    imageAlt: 'Panel de control de una base de datos',
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
}
