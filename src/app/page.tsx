import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative w-full overflow-hidden py-32 md:py-48 lg:py-56 bg-background">
        <div className="absolute inset-0 z-0 opacity-50 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_60%)] bg-[size:10px_10px]"></div>
         <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background"></div>
         <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-[-20%] right-0 top-auto h-[500px] w-[1000px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(29,78,216,0.15),rgba(29,78,216,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-auto h-[500px] w-[1000px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(192,38,211,0.15),rgba(192,38,211,0))]"></div>
        </div>
        <div className="container relative z-20 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 data-animate className="text-4xl font-black tracking-tighter sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-500">
              Transformando Ideas en Realidad Digital
            </h1>
            <p data-animate className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
             Desarrollo soluciones de software innovadoras, escalables y a medida que impulsan el crecimiento de tu negocio.
            </p>
            <div data-animate className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:opacity-90 transition-opacity">
                <Link href="/contact">Contáctame</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary-foreground hover:bg-primary/10 hover:text-primary-foreground">
                <Link href="#services">Mis Especialidades</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div data-animate className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Soluciones Digitales a Medida</h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
              Desde aplicaciones web interactivas hasta complejas integraciones de IA, ofrezco un espectro completo de servicios para materializar tu visión.
            </p>
          </div>
          <div data-animate className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
                <Card className="relative overflow-hidden h-full flex flex-col p-8 bg-white/5 border border-white/10 rounded-xl shadow-2xl shadow-black/40 transition-all duration-300 hover:border-primary/50 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    backgroundImage: 'radial-gradient(400px at top left, hsl(var(--primary) / 0.5), transparent), radial-gradient(400px at top right, hsl(var(--accent) / 0.3), transparent)'
                  }}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 text-primary">
                      <service.icon className="h-10 w-10"/>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground flex-grow">{service.shortDescription}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
