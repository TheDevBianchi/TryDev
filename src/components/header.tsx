"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#services", label: "Especialidades" },
  { href: "/contact", label: "Contacto" },
]

export function Header() {
  const pathname = usePathname()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleLinkClick = () => {
    setIsSheetOpen(false)
  }

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-6 lg:gap-8", className)}>
      {navLinks.map(({ href, label }) => {
        const isActive = (href === "/" && pathname === "/") || (href !== "/" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            onClick={handleLinkClick}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive && href !== "/#services"
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
             <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">TryDev</span>
          </Link>
          <NavLinks className="hidden md:flex" />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild className="hidden md:flex bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all duration-300 hover:scale-105">
            <Link href="/contact">Hablemos</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/95">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-4">
                 <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">TryDev</span>
              </Link>
              <div className="my-4 h-[1px] w-full shrink-0 bg-border" />
              <NavLinks className="flex flex-col items-start gap-6" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
