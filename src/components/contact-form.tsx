"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      className="w-full bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all duration-300 hover:scale-105"
      disabled={pending}
    >
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Enviar Mensaje
    </Button>
  );
}

export function ContactForm() {
  const initialState = { message: "", status: "idle" as const };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "¡Éxito!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="max-w-2xl mx-auto text-center" data-animate>
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          ¿Listo para empezar?
        </h2>
        <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
          Hablemos sobre cómo puedo ayudarte a llevar tu proyecto al siguiente nivel.
        </p>
      </div>
      <form ref={formRef} action={formAction} className="space-y-6 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" name="name" placeholder="Tu Nombre" required className="bg-transparent border-white/20 focus:border-primary"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" name="email" type="email" placeholder="tu@email.com" required className="bg-transparent border-white/20 focus:border-primary"/>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea id="message" name="message" placeholder="Describe tu idea o proyecto..." required minLength={10} className="min-h-[150px] bg-transparent border-white/20 focus:border-primary" />
        </div>
        <div className="text-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
