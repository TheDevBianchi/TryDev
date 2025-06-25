"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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
     const firstError = Object.values(errorMessages).flat()[0] || "Invalid data provided.";
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
    message: "Thank you for your message! I'll get back to you soon.",
    status: "success",
  };
}
