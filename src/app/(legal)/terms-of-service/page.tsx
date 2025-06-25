export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <main className="container mx-auto max-w-4xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Términos de Servicio</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>Última actualización: {lastUpdated}</p>
        <p>Este es un marcador de posición para tus términos de servicio. Los términos de servicio (también conocidos como términos de uso y términos y condiciones) son los acuerdos legales entre un proveedor de servicios y una persona que desea utilizar ese servicio.</p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar nuestros servicios, aceptas y te comprometes a estar sujeto a los términos y disposiciones de este acuerdo.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">2. Cambios en los Términos</h2>
          <p>Nos reservamos el derecho de modificar estos términos de vez en cuando a nuestra entera discreción. Por lo tanto, debes revisar esta página periódicamente.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">3. Contáctanos</h2>
          <p>Si tienes alguna pregunta sobre nuestros Términos de Servicio, puedes contactarnos a través del formulario de contacto en este sitio web.</p>
        </div>
      </div>
    </main>
  );
}
