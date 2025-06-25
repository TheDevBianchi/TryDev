"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
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
    <Card className="max-w-xl mx-auto border-primary/20 shadow-lg shadow-primary/10">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">Contáctame</CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          ¿Tienes un proyecto en mente o solo quieres saludar? Hablemos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" name="name" placeholder="Tu Nombre" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" name="message" placeholder="Tu mensaje..." required minLength={10} className="min-h-[150px]" />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
