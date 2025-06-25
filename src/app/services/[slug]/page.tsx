import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/lib/services';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return { title: 'Servicio no encontrado' };
  }
  return {
    title: `${service.title} | Devfolio`,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex-1 bg-background py-24 md:py-32">
       <div className="container">
        <div className="relative z-10 flex flex-col items-center justify-end pb-16 text-center">
            <Badge variant="secondary" className="mb-4 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-fuchsia-500/10 text-blue-300 border border-blue-500/20">
              Servicio
            </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-foreground">
            {service.title}
          </h1>
           <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              {service.description}
            </p>
        </div>
      
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-6 lg:col-span-3">
             <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Alcance del Servicio
            </h2>
            <p className="text-lg text-muted-foreground">
              Mi servicio de {service.title} está diseñado para ser completo, cubriendo todos los aspectos clave para asegurar un producto final de alta calidad, robusto y escalable.
            </p>
          </div>
          <Card className="p-8 lg:col-span-2 bg-white/5 border border-white/10 rounded-xl">
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              Qué Incluye
            </h3>
            <ul className="space-y-4">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
         <div className="mt-20 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
              <Link href="/contact">Discutir Tu Proyecto</Link>
            </Button>
          </div>
      </div>
    </main>
  );
}
