import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { SmoothScroll } from '@/components/smooth-scroll';

export const metadata: Metadata = {
  title: 'Devfolio | Portafolio Profesional de Desarrollador',
  description: 'Un portafolio personal que muestra servicios de desarrollo en frontend, backend, móvil y más.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      </head>
      <body className={cn("font-body antialiased bg-background text-foreground min-h-screen flex flex-col")}>
        <SmoothScroll />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
