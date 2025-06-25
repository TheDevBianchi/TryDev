import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Building Modern Digital Experiences
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              From sleek frontends to robust backends, I bring your ideas to life with clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#services">My Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Services</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I offer a range of services to cover all your development needs.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
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
                      Learn More
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
