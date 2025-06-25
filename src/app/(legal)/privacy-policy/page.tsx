export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <main className="container mx-auto max-w-4xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>Last updated: {lastUpdated}</p>
        <p>This is a placeholder for your privacy policy. A privacy policy is a statement or a legal document that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data. It fulfills a legal requirement to protect a customer or client's privacy.</p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
          <p>Here you would describe the types of personal information you collect (e.g., name, email address from contact form, usage data).</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
          <p>Here you would explain how you use the collected information (e.g., to provide and maintain your service, to respond to inquiries, to notify you about changes, to provide customer support).</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, you can contact us via the contact form on this website.</p>
        </div>
      </div>
    </main>
  );
}
