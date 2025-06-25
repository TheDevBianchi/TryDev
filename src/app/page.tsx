import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative w-full py-40 md:py-56 lg:py-64 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.2),transparent)] animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-[radial-gradient(circle_farthest-side,hsl(var(--accent)/0.2),transparent)] animate-[pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          <div className="absolute inset-0 bg-[url('/particles.png')] bg-repeat bg-[length:256px_256px] opacity-20"></div>
        </div>
        
        <div className="container relative z-20 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 data-animate className="text-4xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-white via-white/80 to-primary/30 pb-4">
              Transformando Ideas en Realidad Digital
            </h1>
            <p data-animate className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
             Desarrollo soluciones de software innovadoras, escalables y a medida que impulsan el crecimiento de tu negocio.
            </p>
            <div data-animate className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all duration-300 hover:scale-105">
                <Link href="/contact">Contáctame</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div data-animate className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Explora Mis Servicios
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
              Desde aplicaciones web interactivas hasta complejas integraciones de IA, ofrezco un espectro completo de servicios para materializar tu visión.
            </p>
          </div>
          <div className="space-y-20 md:space-y-32">
            {services.map((service, index) => (
              <div key={service.slug} data-animate className="grid gap-12 items-center lg:grid-cols-2 lg:gap-24">
                <div className={`flex flex-col justify-center space-y-6 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <div className="inline-block p-4 bg-accent/10 rounded-full self-start ring-2 ring-accent/20">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">{service.title}</h3>
                  <p className="text-muted-foreground text-lg">{service.shortDescription}</p>
                  <Button asChild variant="outline" size="lg" className="self-start group border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <Link href={`/services/${service.slug}`}>
                      Saber más <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
                  <Card className="relative overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm border-white/10 shadow-xl">
                    <Image
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      width={1200}
                      height={800}
                      data-ai-hint={index % 2 === 0 ? "dashboard ui" : "server architecture"}
                      className="rounded-lg object-cover"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
