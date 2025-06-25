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
      <form ref={formRef} action={formAction} className="space-y-10 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="relative group">
            <Input 
              id="name" 
              name="name" 
              type="text"
              required 
              className="peer w-full h-10 bg-transparent border-0 border-b-2 border-white/20 focus:border-primary transition-colors duration-300 text-foreground placeholder:text-transparent focus:outline-none focus:ring-0 rounded-none px-1"
              placeholder="Nombre"
            />
            <Label 
              htmlFor="name" 
              className="absolute left-1 text-muted-foreground transition-all duration-300 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:text-sm"
            >
              Nombre
            </Label>
          </div>
          <div className="relative group">
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="peer w-full h-10 bg-transparent border-0 border-b-2 border-white/20 focus:border-primary transition-colors duration-300 text-foreground placeholder:text-transparent focus:outline-none focus:ring-0 rounded-none px-1"
              placeholder="Correo Electrónico"
            />
            <Label 
              htmlFor="email" 
              className="absolute left-1 text-muted-foreground transition-all duration-300 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:text-sm"
            >
              Correo Electrónico
            </Label>
          </div>
        </div>
        <div className="relative group">
          <Textarea 
            id="message" 
            name="message" 
            required 
            minLength={10} 
            className="peer w-full bg-transparent border-0 border-b-2 border-white/20 focus:border-primary transition-colors duration-300 text-foreground placeholder:text-transparent focus:outline-none focus:ring-0 rounded-none min-h-[120px] px-1 pt-2"
            placeholder="Mensaje"
          />
          <Label 
            htmlFor="message" 
            className="absolute left-1 text-muted-foreground transition-all duration-300 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:text-sm"
          >
            Mensaje
          </Label>
        </div>
        <div className="text-center pt-4">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
