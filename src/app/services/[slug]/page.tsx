
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/lib/services';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, User, PanelTop, ShoppingCart, CreditCard, History, FileText, BarChart, Ticket, Settings, ShieldCheck, Users, Megaphone, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

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

const userFeatures = {
  interfaz: [
    { text: "Diseño Responsivo: Adaptable a dispositivos móviles, tablets y escritorio.", icon: User },
    { text: "Tema Personalizado: Esquema de colores que refleja la identidad de la marca.", icon: User },
    { text: "Navegación Intuitiva: Menú principal con acceso rápido a todas las secciones.", icon: User },
  ],
  funcionalidades: [
    { text: "Exploración de Rifas: Visualización de rifas activas con detalles completos.", icon: Ticket },
    { text: "Selección de Números: Interfaz interactiva para elegir tickets disponibles.", icon: Ticket },
    { text: "Proceso de Compra: Flujo simplificado para adquirir tickets con múltiples opciones de pago.", icon: ShoppingCart },
    { text: "Verificación de Tickets: Consulta de tickets comprados mediante número de teléfono.", icon: ShieldCheck },
    { text: "Perfil de Usuario: Gestión de información y visualización de tickets adquiridos.", icon: User },
    { text: "Notificaciones: Alertas sobre el estado de las rifas y resultados.", icon: Megaphone },
  ],
  secciones: [
      { text: "Home: Presentación de rifas destacadas y banner promocional.", icon: PanelTop },
      { text: "Detalle de Rifa: Información completa sobre premios, reglas y números.", icon: PanelTop },
      { text: "Carrito de Compra: Gestión de tickets seleccionados.", icon: ShoppingCart },
      { text: "Métodos de Pago: Integración con diversas opciones de pago.", icon: CreditCard },
      { text: "Historial de Compras: Registro de todas las transacciones.", icon: History },
      { text: "Términos y Condiciones: Información legal sobre el uso de la plataforma.", icon: FileText },
  ]
};

const adminFeatures = [
    { title: "Dashboard Principal", description: "Visualización de ventas, usuarios activos y métricas clave en tiempo real.", icon: BarChart },
    { title: "Gestión de Rifas", description: "Crea, edita y gestiona rifas, tickets, premios y programación de sorteos.", icon: Ticket },
    { title: "Administración de Usuarios", description: "Base de datos de clientes con historial de compras y herramientas de comunicación.", icon: Users },
    { title: "Gestión de Pagos", description: "Valida transacciones, configura métodos de pago y genera reportes financieros.", icon: CreditCard },
    { title: "Herramientas de Marketing", description: "Crea promociones, descuentos y campañas por email para impulsar las ventas.", icon: Megaphone },
    { title: "Configuración del Sistema", description: "Personaliza la plataforma, gestiona roles y permisos, y automatiza copias de seguridad.", icon: Settings },
];

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex-1 bg-background py-24 md:py-32">
       <div className="container">
        <div data-animate className="relative z-10 flex flex-col items-center justify-end pb-16 text-center">
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
      
      <div data-animate className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5 lg:gap-16">
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

        {service.slug === 'plataforma-de-rifas' && (
          <div className="mt-24 md:mt-32 space-y-24">
            {/* User Features Section */}
            <div data-animate className="grid gap-12 items-center lg:grid-cols-2 lg:gap-24">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-4xl">
                  Características Principales
                </h2>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Interfaz de Usuario</h3>
                  <ul className="space-y-3">
                    {userFeatures.interfaz.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <feature.icon className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-base text-muted-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Funcionalidades para Usuarios</h3>
                  <ul className="space-y-3">
                    {userFeatures.funcionalidades.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <feature.icon className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-base text-muted-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                 <div>
                  <h3 className="text-xl font-semibold mb-4">Secciones Principales</h3>
                  <ul className="space-y-3">
                    {userFeatures.secciones.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <feature.icon className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-base text-muted-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
                <Card className="relative overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm border-white/10 shadow-xl">
                  <Image src="https://placehold.co/1200x800.png" alt="Interfaz de usuario de la plataforma de rifas" width={1200} height={800} data-ai-hint="dashboard ui" className="rounded-lg object-cover" />
                </Card>
              </div>
            </div>

            {/* Admin Panel Section */}
            <div data-animate className="grid gap-12 items-center lg:grid-cols-2 lg:gap-24">
               <div className="relative group order-last lg:order-first">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
                <Card className="relative overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm border-white/10 shadow-xl">
                  <Image src="https://placehold.co/1200x800.png" alt="Panel de administración de la plataforma" width={1200} height={800} data-ai-hint="analytics dashboard" className="rounded-lg object-cover" />
                </Card>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-4xl">
                  Potente Panel de Administración
                </h2>
                <p className="text-lg text-muted-foreground">
                  Gestiona cada aspecto de tu plataforma de rifas desde un panel de control intuitivo y lleno de funcionalidades.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {adminFeatures.map((feature, index) => (
                     <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                      <feature.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div data-animate className="mt-24 md:mt-32 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-4xl">
                Planes Flexibles para tu Proyecto
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Elige el plan que mejor se adapte a tus necesidades, desde un lanzamiento único hasta una solución completa a largo plazo.
              </p>
              <div className="mt-16 grid max-w-6xl mx-auto gap-8 lg:grid-cols-3 items-start">
                {/* Monthly Plan */}
                <Card className="p-8 flex flex-col bg-white/5 border border-white/10 rounded-xl h-full">
                  <h3 className="text-2xl font-bold text-foreground">Alquiler Mensual</h3>
                  <p className="mt-4 text-4xl font-bold text-primary">$75 <span className="text-lg font-medium text-muted-foreground">/mes</span></p>
                  <p className="mt-4 text-muted-foreground flex-grow">Ideal para rifas recurrentes. Acceso a la plataforma mientras tu suscripción esté activa.</p>
                  <ul className="mt-8 space-y-4 text-left">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Funcionalidades estándar</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Soporte técnico 24/7</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Envíos de correo gratuitos (1,000/mes)</span></li>
                    <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-muted-foreground/60 mt-1 flex-shrink-0" /><span>Herramientas de Marketing (Básico)</span></li>
                    <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-muted-foreground/60 mt-1 flex-shrink-0" /><span>Personalización de la Plataforma (Limitada)</span></li>
                  </ul>
                  <Button asChild variant="outline" size="lg" className="mt-8 w-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <Link href="/contact">Contratar Plan</Link>
                  </Button>
                </Card>

                {/* One-Time Purchase (Featured) */}
                <Card className="p-8 flex flex-col bg-white/5 border-2 border-primary rounded-xl relative lg:scale-105 h-full">
                  <Badge variant="default" className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground z-10">Más Popular</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Compra Completa</h3>
                  <p className="mt-4 text-4xl font-bold text-primary">$899</p>
                  <p className="mt-4 text-muted-foreground flex-grow">La solución definitiva. Compra la plataforma y adáptala sin límites a tu proyecto.</p>
                  <ul className="mt-8 space-y-4 text-left">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Licencia de por vida y código fuente</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Todas las funcionalidades incluidas</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Soporte prioritario 24/7</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Envíos de correo gratuitos e ilimitados</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Integración con IA para ventas (WhatsApp/Telegram)</span></li>
                  </ul>
                  <Button asChild size="lg" className="mt-8 w-full bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all duration-300">
                    <Link href="/contact">Comprar Ahora</Link>
                  </Button>
                </Card>

                {/* Per Raffle Plan */}
                <Card className="p-8 flex flex-col bg-white/5 border border-white/10 rounded-xl h-full">
                  <h3 className="text-2xl font-bold text-foreground">Por Rifa</h3>
                  <p className="mt-4 text-4xl font-bold text-primary">$150 <span className="text-lg font-medium text-muted-foreground">/rifa</span></p>
                  <p className="mt-4 text-muted-foreground flex-grow">Perfecto si realizas sorteos de forma ocasional. Paga solo por las rifas que necesites.</p>
                  <ul className="mt-8 space-y-4 text-left">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Funcionalidades básicas por evento</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Soporte técnico 8/5</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Envíos de correo gratuitos (500/rifa)</span></li>
                    <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-muted-foreground/60 mt-1 flex-shrink-0" /><span>Herramientas de Marketing (No incluido)</span></li>
                    <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-muted-foreground/60 mt-1 flex-shrink-0" /><span>Personalización de la Plataforma (No incluido)</span></li>
                  </ul>
                  <Button asChild variant="outline" size="lg" className="mt-8 w-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <Link href="/contact">Lanzar Rifa</Link>
                  </Button>
                </Card>
              </div>
            </div>

          </div>
        )}

         <div data-animate className="mt-20 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
              <Link href="/contact">Discutir Tu Proyecto</Link>
            </Button>
          </div>
      </div>
    </main>
  );
}
