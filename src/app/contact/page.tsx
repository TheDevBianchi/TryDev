import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <main className="flex-1 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ContactForm />
      </div>
    </main>
  );
}
