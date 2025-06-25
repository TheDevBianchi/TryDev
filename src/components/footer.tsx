import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background/95">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">TryDev</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transformando ideas en soluciones digitales robustas y escalables.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 md:items-center">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Navegación</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Inicio</Link></li>
                <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Especialidades</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 md:items-center">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link></li>
                <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Términos de Servicio</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 md:items-end">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Social</h3>
              <div className="mt-4 flex items-center gap-4">
                <Link href="#" aria-label="Github" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TryDev. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
