
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/lib/services';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, User, ShoppingCart, CreditCard, History, FileText, BarChart, Ticket, Settings, ShieldCheck, Users, Megaphone, Lock, MonitorSmartphone, LayoutTemplate, Warehouse, Truck, MapPin, QrCode, PlugZap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

const userFeatureGroups = [
  {
    title: "Interfaz de Usuario",
    icon: MonitorSmartphone,
    features: [
      "Diseño Responsivo: Adaptable a dispositivos móviles, tablets y escritorio.",
      "Tema Personalizado: Esquema de colores que refleja la identidad de la marca.",
      "Navegación Intuitiva: Menú principal con acceso rápido a todas las secciones.",
    ]
  },
  {
    title: "Funcionalidades para Usuarios",
    icon: Ticket,
    features: [
      "Exploración de Rifas: Visualización de rifas activas con detalles completos.",
      "Selección de Números: Interfaz interactiva para elegir tickets disponibles.",
      "Proceso de Compra: Flujo simplificado para adquirir tickets con múltiples opciones de pago.",
      "Verificación de Tickets: Consulta de tickets comprados mediante número de teléfono.",
      "Perfil de Usuario: Gestión de información y visualización de tickets adquiridos.",
      "Notificaciones: Alertas sobre el estado de las rifas y resultados.",
    ]
  },
  {
    title: "Secciones Principales",
    icon: LayoutTemplate,
    features: [
      "Home: Presentación de rifas destacadas y banner promocional.",
      "Detalle de Rifa: Información completa sobre premios, reglas y números.",
      "Carrito de Compra: Gestión de tickets seleccionados.",
      "Métodos de Pago: Integración con diversas opciones de pago.",
      "Historial de Compras: Registro de todas las transacciones.",
      "Términos y Condiciones: Información legal sobre el uso de la plataforma.",
    ]
  }
];

const adminFeatures = [
    { title: "Dashboard Principal", description: "Visualización de ventas, usuarios activos y métricas clave en tiempo real.", icon: BarChart },
    { title: "Gestión de Rifas", description: "Crea, edita y gestiona rifas, tickets, premios y programación de sorteos.", icon: Ticket },
    { title: "Administración de Usuarios", description: "Base de datos de clientes con historial de compras y herramientas de comunicación.", icon: Users },
    { title: "Gestión de Pagos", description: "Valida transacciones, configura métodos de pago y genera reportes financieros.", icon: CreditCard },
    { title: "Herramientas de Marketing", description: "Crea promociones, descuentos y campañas por email para impulsar las ventas.", icon: Megaphone },
    { title: "Configuración del Sistema", description: "Personaliza la plataforma, gestiona roles y permisos, y automatiza copias de seguridad.", icon: Settings },
];


const inventoryCoreModules = [
  {
    title: "Control de Inventario",
    icon: Warehouse,
    features: [
      "Seguimiento en tiempo real de niveles de stock.",
      "Gestión de productos, categorías y variantes (talla, color).",
      "Alertas automáticas de stock bajo para evitar quiebres.",
      "Historial de movimientos de productos y auditorías."
    ]
  },
  {
    title: "Gestión de Ventas y POS",
    icon: ShoppingCart,
    features: [
      "Punto de Venta (POS) integrado para transacciones rápidas.",
      "Procesamiento de pedidos, facturación y recibos.",
      "Registro de clientes e historial de compras.",
      "Sincronización de ventas online y en tienda física."
    ]
  },
  {
    title: "Compras y Proveedores",
    icon: Truck,
    features: [
      "Creación y seguimiento de órdenes de compra.",
      "Base de datos centralizada de proveedores y contactos.",
      "Recepción de mercancía y actualización automática de stock.",
      "Gestión de devoluciones a proveedores."
    ]
  }
];

const inventoryAdvancedFeatures = [
    { title: "Reportes y Analíticas", description: "Dashboard con KPIs, informes de ventas, análisis de rentabilidad y proyecciones.", icon: BarChart },
    { title: "Gestión Multi-Almacén", description: "Controla el stock en múltiples sucursales o bodegas desde una sola plataforma.", icon: MapPin },
    { title: "Escaneo de Códigos", description: "Integra lectores de códigos de barras y QR para agilizar ventas y conteos de inventario.", icon: QrCode },
    { title: "Roles y Permisos", description: "Asigna roles de usuario (cajero, gerente, etc.) con permisos de acceso personalizados.", icon: Users },
    { title: "Integraciones Externas", description: "Conecta con plataformas de e-commerce, software contable y otras herramientas.", icon: PlugZap },
    { title: "Configuración Avanzada", description: "Personaliza impuestos, monedas, y automatiza respaldos de seguridad de tus datos.", icon: Settings },
];


export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex-1 bg-background py-24 md:py-32">
       <div className="container">
        <div data-animate className="relative z-10 flex flex-col items-center justify-center pb-16 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-primary-foreground border-transparent">
              Servicio
            </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
            {service.title}
          </h1>
           <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              {service.description}
            </p>
        </div>
      
        {service.slug === 'plataforma-de-rifas' && (
          <div className="mt-24 md:mt-32 space-y-24">
            
            <div data-animate className="grid gap-12 items-start lg:grid-cols-2 lg:gap-24">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-4xl">
                    Una Experiencia de Usuario Impecable
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Cada aspecto de la plataforma está diseñado pensando en la facilidad de uso, la seguridad y la estética, garantizando que tanto los organizadores como los participantes tengan una experiencia excepcional.
                  </p>
                </div>
                
                <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                  {userFeatureGroups.map((group, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="bg-white/5 border border-white/10 rounded-xl data-[state=open]:border-accent/30 data-[state=open]:bg-accent/5 transition-all"
                    >
                      <AccordionTrigger className="hover:no-underline text-lg font-semibold p-6 text-left">
                        <div className="flex items-center gap-3 w-full">
                          <group.icon className="h-6 w-6 text-accent flex-shrink-0" />
                          <span className="flex-1">{group.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6">
                        <ul className="space-y-3 pt-0 pb-4 pl-9">
                          {group.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                              <span className="text-base text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="relative group mt-8 lg:mt-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
                <Card className="relative overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm border-white/10 shadow-xl">
                  <Image src="https://placehold.co/1200x800.png" alt="Interfaz de usuario de la plataforma de rifas" width={1200} height={800} data-ai-hint="dashboard ui" className="rounded-lg object-cover" />
                </Card>
              </div>
            </div>

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
                     <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 transform hover:-translate-y-1">
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

            <div data-animate className="mt-24 md:mt-32 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-4xl">
                Planes Flexibles para tu Proyecto
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Elige el plan que mejor se adapte a tus necesidades, desde un lanzamiento único hasta una solución completa a largo plazo.
              </p>
              <div className="mt-16 grid max-w-6xl mx-auto gap-8 lg:grid-cols-3 items-start">
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

                <Card className="p-8 flex flex-col bg-white/5 border-2 border-primary rounded-xl relative lg:scale-105 h-full z-10 overflow-visible">
                  <Badge variant="default" className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground">Más Popular</Badge>
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
        
        {service.slug === 'sistemas-de-inventario' && (
          <div className="mt-24 md:mt-32 space-y-24">
            
            <div data-animate className="grid gap-12 items-start lg:grid-cols-2 lg:gap-24">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-4xl">
                    Módulos Centrales de Gestión
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Controla cada aspecto de tu operación con módulos diseñados para simplificar la complejidad del manejo de inventarios, ventas y compras.
                  </p>
                </div>
                
                <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                  {inventoryCoreModules.map((group, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="bg-white/5 border border-white/10 rounded-xl data-[state=open]:border-accent/30 data-[state=open]:bg-accent/5 transition-all"
                    >
                      <AccordionTrigger className="hover:no-underline text-lg font-semibold p-6 text-left">
                        <div className="flex items-center gap-3 w-full">
                          <group.icon className="h-6 w-6 text-accent flex-shrink-0" />
                          <span className="flex-1">{group.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6">
                        <ul className="space-y-3 pt-0 pb-4 pl-9">
                          {group.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                              <span className="text-base text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="relative group mt-8 lg:mt-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
                <Card className="relative overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm border-white/10 shadow-xl">
                  <Image src="https://placehold.co/1200x800.png" alt="Dashboard de un sistema de inventario" width={1200} height={800} data-ai-hint="inventory management dashboard" className="rounded-lg object-cover" />
                </Card>
              </div>
            </div>

            <div data-animate className="grid gap-12 items-center lg:grid-cols-2 lg:gap-24">
               <div className="relative group order-last lg:order-first">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
                <Card className="relative overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm border-white/10 shadow-xl">
                  <Image src="https://placehold.co/1200x800.png" alt="Panel de administración con analíticas" width={1200} height={800} data-ai-hint="business analytics chart" className="rounded-lg object-cover" />
                </Card>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-4xl">
                  Panel de Control Avanzado
                </h2>
                <p className="text-lg text-muted-foreground">
                  Toma decisiones estratégicas con herramientas potentes para el análisis de datos, gestión de múltiples ubicaciones y control total sobre tu sistema.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {inventoryAdvancedFeatures.map((feature, index) => (
                     <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 transform hover:-translate-y-1">
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
            
            <div data-animate className="mt-24 md:mt-32 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-4xl">
                Soluciones a tu Medida
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Desde startups hasta empresas consolidadas, encuentra el plan perfecto para optimizar la gestión de tu inventario.
              </p>
              <div className="mt-16 grid max-w-6xl mx-auto gap-8 lg:grid-cols-3 items-start">
                <Card className="p-8 flex flex-col bg-white/5 border border-white/10 rounded-xl h-full">
                  <h3 className="text-2xl font-bold text-foreground">Alquiler Mensual</h3>
                  <p className="mt-4 text-4xl font-bold text-primary">$75 <span className="text-lg font-medium text-muted-foreground">/mes</span></p>
                  <p className="mt-4 text-muted-foreground flex-grow">Ideal para negocios en crecimiento que necesitan control total en una sola ubicación.</p>
                  <ul className="mt-8 space-y-4 text-left">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Gestión de 1 almacén/tienda</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Módulos de inventario y ventas</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Soporte técnico 24/7</span></li>
                    <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-muted-foreground/60 mt-1 flex-shrink-0" /><span>Reportes analíticos avanzados</span></li>
                    <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-muted-foreground/60 mt-1 flex-shrink-0" /><span>Integraciones con e-commerce</span></li>
                  </ul>
                  <Button asChild variant="outline" size="lg" className="mt-8 w-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <Link href="/contact">Contratar Plan</Link>
                  </Button>
                </Card>

                <Card className="p-8 flex flex-col bg-white/5 border-2 border-primary rounded-xl relative lg:scale-105 h-full z-10 overflow-visible">
                  <Badge variant="default" className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground">Más Popular</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Compra Completa</h3>
                  <p className="mt-4 text-4xl font-bold text-primary">$899</p>
                  <p className="mt-4 text-muted-foreground flex-grow">La solución definitiva para escalar. Adquiere el sistema completo y adáptalo sin límites.</p>
                  <ul className="mt-8 space-y-4 text-left">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Licencia de por vida y código fuente</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Gestión multi-almacén</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Todas las funcionalidades e integraciones</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Soporte prioritario 24/7</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Capacitación y puesta en marcha</span></li>
                  </ul>
                  <Button asChild size="lg" className="mt-8 w-full bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all duration-300">
                    <Link href="/contact">Comprar Ahora</Link>
                  </Button>
                </Card>

                <Card className="p-8 flex flex-col bg-white/5 border border-white/10 rounded-xl h-full">
                  <h3 className="text-2xl font-bold text-foreground">Paquete Básico</h3>
                  <p className="mt-4 text-4xl font-bold text-primary">$250 <span className="text-lg font-medium text-muted-foreground">/pago único</span></p>
                  <p className="mt-4 text-muted-foreground flex-grow">Perfecto para startups. Un sistema de inventario funcional para empezar a operar.</p>
                  <ul className="mt-8 space-y-4 text-left">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Funcionalidades esenciales de inventario</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Gestión de 1 almacén/tienda</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Soporte por comunidad</span></li>
                     <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-muted-foreground/60 mt-1 flex-shrink-0" /><span>Gestión de compras y proveedores</span></li>
                    <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-muted-foreground/60 mt-1 flex-shrink-0" /><span>Roles de usuario y permisos</span></li>
                  </ul>
                  <Button asChild variant="outline" size="lg" className="mt-8 w-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <Link href="/contact">Empezar</Link>
                  </Button>
                </Card>
              </div>
            </div>

          </div>
        )}

         <div data-animate className="mt-20 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              <Link href="/contact">Discutir Tu Proyecto</Link>
            </Button>
          </div>
      </div>
    </main>
  );
}
