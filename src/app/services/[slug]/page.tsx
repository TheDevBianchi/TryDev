import { notFound } from 'next/navigation';
import Image from 'next/image';
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
    return { title: 'Service not found' };
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
    <main className="flex-1 bg-background">
      <div className="relative h-96 w-full">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover"
          priority
          data-ai-hint={`${service.slug.split('-')[0]} ${service.slug.split('-')[1] || ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-end pb-16 text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary-foreground border-primary/50">{service.title}</Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-foreground">
            {service.title}
          </h1>
        </div>
      </div>
      
      <div className="container py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
             <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Service Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              {service.description}
            </p>
          </div>
          <Card className="p-6">
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              What's Included
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
         <div className="mt-16 text-center">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
      </div>
    </main>
  );
}
