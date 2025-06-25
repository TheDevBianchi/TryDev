export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <main className="container mx-auto max-w-4xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>Última actualización: {lastUpdated}</p>
        <p>Este es un marcador de posición para tu política de privacidad. Una política de privacidad es una declaración o un documento legal que divulga algunas o todas las formas en que una parte recopila, usa, divulga y administra los datos de un cliente.</p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Información que Recopilamos</h2>
          <p>Aquí describirías los tipos de información personal que recopilas (p. ej., nombre, dirección de correo electrónico del formulario de contacto, datos de uso).</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Cómo Usamos Tu Información</h2>
          <p>Aquí explicarías cómo usas la información recopilada (p. ej., para proporcionar y mantener tu servicio, para responder a consultas, para notificarte sobre cambios, para proporcionar soporte al cliente).</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Contáctanos</h2>
          <p>Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos a través del formulario de contacto en este sitio web.</p>
        </div>
      </div>
    </main>
  );
}
