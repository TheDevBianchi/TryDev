export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: 'frontend-development',
    title: 'Frontend Development',
    shortDescription: 'Crafting beautiful and responsive user interfaces.',
    description: 'I build modern, interactive, and high-performance user interfaces using the latest web technologies. My focus is on creating seamless user experiences that are both visually appealing and highly functional.',
    imageUrl: 'https://placehold.co/1200x600.png',
    details: [
      'React, Next.js, and Vue.js expertise',
      'State management with Redux or Zustand',
      'Responsive design for all devices',
      'Performance optimization and fast load times',
      'Accessible (a11y) and SEO-friendly code'
    ],
  },
  {
    slug: 'backend-development',
    title: 'Backend Development',
    shortDescription: 'Building robust and scalable server-side applications.',
    description: 'I develop secure, efficient, and scalable backend systems to power your applications. From RESTful APIs to complex data processing pipelines, I ensure your server-side logic is reliable and performant.',
    imageUrl: 'https://placehold.co/1200x600.png',
    details: [
      'Node.js, Express, and NestJS development',
      'Database design and management (SQL & NoSQL)',
      'API design (REST, GraphQL)',
      'Authentication and authorization systems',
      'Cloud deployment (Firebase, AWS, Vercel)'
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Creating native and cross-platform mobile apps.',
    description: 'I design and build mobile applications for iOS and Android that provide a rich, native experience. Whether you need a cross-platform solution or a native app, I deliver high-quality mobile products.',
    imageUrl: 'https://placehold.co/1200x600.png',
    details: [
      'React Native for cross-platform apps',
      'Swift for native iOS development',
      'Kotlin for native Android development',
      'Push notifications and background services',
      'App Store and Google Play deployment'
    ],
  },
    {
    slug: 'database-management',
    title: 'Database Management',
    shortDescription: 'Designing and maintaining efficient databases.',
    description: 'A solid foundation for any application, I specialize in designing, deploying, and maintaining databases that are optimized for performance, scalability, and data integrity.',
    imageUrl: 'https://placehold.co/1200x600.png',
    details: [
      'SQL databases (PostgreSQL, MySQL)',
      'NoSQL databases (MongoDB, Firestore)',
      'Database schema design and normalization',
      'Query optimization and indexing',
      'Data migration and backup strategies'
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
}
