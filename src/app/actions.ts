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
  
  // Here you would integrate with your email service (e.g., EmailJS, Resend, SendGrid)
  // For this example, we'll just simulate a successful submission.
  console.log("Form data submitted:", validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    message: "¡Gracias por tu mensaje! Te responderé pronto.",
    status: "success",
  };
}
