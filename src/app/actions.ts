"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
     const errorMessages = validatedFields.error.flatten().fieldErrors;
     const firstError = Object.values(errorMessages).flat()[0] || "Datos proporcionados no válidos.";
    return {
      message: firstError,
      status: "error",
    };
  }
  
  try {
    // Enviar datos al webhook de n8n
    const response = await fetch('https://n8n-x3qy.onrender.com/webhook/74151377-aef6-4368-a047-03e34a99ee5f', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        message: validatedFields.data.message,
        timestamp: new Date().toISOString(),
        source: 'contact-form'
      }),
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    console.log("Datos enviados exitosamente al webhook:", validatedFields.data);
    
    return {
      message: "¡Gracias por tu mensaje! Te responderé pronto.",
      status: "success",
    };
  } catch (error) {
    console.error("Error al enviar datos al webhook:", error);
    return {
      message: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
      status: "error",
    };
  }
}
