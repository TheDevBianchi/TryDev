import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40 bg-background">
        <div className="absolute inset-x-0 bottom-0 z-0">
          <div className="absolute bottom-0 left-[-20%] right-0 top-auto h-[500px] w-[1000px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(111,0,255,0.15),rgba(111,0,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-auto h-[500px] w-[1000px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(111,0,255,0.15),rgba(111,0,255,0))]"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 data-animate className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Construyendo Experiencias Digitales Modernas
            </h1>
            <p data-animate className="text-lg text-muted-foreground md:text-xl">
              Desde interfaces elegantes hasta backends robustos, doy vida a tus ideas con código limpio y eficiente.
            </p>
            <div data-animate className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Contáctame</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#services">Mis Especialidades</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container px-4 md:px-6">
          <div data-animate className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Especialidades</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrezco una gama de servicios para cubrir todas tus necesidades de desarrollo.
            </p>
          </div>
          <div data-animate className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.slug} className="flex flex-col group hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="relative h-60 w-full mb-4 overflow-hidden rounded-md">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={`${service.slug.split('-')[0]} ${service.slug.split('-')[1] || ''}`}
                    />
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                   <Button asChild variant="link" className="p-0 h-auto font-semibold">
                    <Link href={`/services/${service.slug}`} className="flex items-center gap-2">
                      Saber Más
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
