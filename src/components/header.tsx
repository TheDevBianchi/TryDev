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

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export function Header() {
  const pathname = usePathname()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleLinkClick = () => {
    setIsSheetOpen(false)
  }

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={handleLinkClick}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            (pathname === href && href === "/") || (href !== "/" && pathname.startsWith(href))
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold">Devfolio</span>
          </Link>
          <NavLinks className="hidden md:flex" />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-4">
                <MountainIcon className="h-6 w-6" />
                <span className="font-bold">Devfolio</span>
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
