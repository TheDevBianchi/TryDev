export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <main className="container mx-auto max-w-4xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>Last updated: {lastUpdated}</p>
        <p>This is a placeholder for your terms of service. Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as ToS or T&C) are the legal agreements between a service provider and a person who wants to use that service.</p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">2. Changes to Terms</h2>
          <p>We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review this page periodically.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">3. Contact Us</h2>
          <p>If you have any questions about our Terms of Service, you can contact us via the contact form on this website.</p>
        </div>
      </div>
    </main>
  );
}
