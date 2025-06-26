export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <main className="container mx-auto max-w-4xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>Última actualización: {lastUpdated}</p>
        <p>Esta Política de Privacidad describe cómo se recopila, utiliza y protege la información personal que proporcionas al contratar los servicios de desarrollo ofrecidos por una persona natural a través de este sitio web.</p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Información que Recopilamos</h2>
          <p>Recopilamos la información que nos proporcionas directamente al completar el formulario de contacto, como tu nombre, dirección de correo electrónico y detalles del proyecto. También podemos recopilar información sobre el uso del sitio web para mejorar nuestros servicios.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Uso de la Información</h2>
          <p>La información recopilada se utiliza para:
            <ul className="list-disc ml-6 mt-2">
              <li>Contactarte y coordinar reuniones vía Google Meet para entender tus necesidades.</li>
              <li>Gestionar y ejecutar los servicios de desarrollo contratados.</li>
              <li>Emitir facturación y gestionar los pagos (50% por adelantado y 50% al finalizar el proyecto).</li>
              <li>Brindar soporte y atención al cliente durante los primeros 3 meses tras la entrega del proyecto.</li>
              <li>Ofrecer servicios de soporte adicionales bajo honorarios posteriores a los 3 meses iniciales.</li>
            </ul>
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Divulgación de la Información</h2>
          <p>No compartimos tu información personal con terceros, salvo que sea necesario para cumplir con obligaciones legales o para la correcta prestación del servicio.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Seguridad</h2>
          <p>Adoptamos medidas razonables para proteger tu información personal contra el acceso no autorizado, alteración, divulgación o destrucción.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Tus Derechos</h2>
          <p>Puedes solicitar en cualquier momento el acceso, rectificación o eliminación de tus datos personales contactándonos a través del formulario de contacto.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Contáctanos</h2>
          <p>Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos mediante el formulario de contacto disponible en este sitio web.</p>
        </div>
      </div>
    </main>
  );
}
