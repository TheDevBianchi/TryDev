export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <main className="container mx-auto max-w-4xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Términos y Condiciones de Servicio</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>Última actualización: {lastUpdated}</p>
        <p>Estos Términos y Condiciones regulan la prestación de servicios de desarrollo ofrecidos por una persona natural a través de este sitio web. Al contratar nuestros servicios, aceptas los siguientes términos:</p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">1. Contratación y Pagos</h2>
          <p>Para iniciar cualquier proyecto, se requiere un pago anticipado del 50% del valor total acordado. El 50% restante se abonará una vez que el proyecto esté finalizado y aprobado por el cliente. Los pagos se realizarán según los métodos acordados entre ambas partes.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">2. Reuniones y Comunicación</h2>
          <p>Las reuniones para definir los requerimientos y avances del proyecto se realizarán vía Google Meet, en fechas y horarios acordados previamente con el cliente.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">3. Soporte y Mantenimiento</h2>
          <p>Se ofrece un servicio de atención y soporte 24/7 durante los primeros 3 meses posteriores a la entrega del proyecto. Pasado este periodo, el soporte estará sujeto al pago de honorarios adicionales según lo acordado.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">4. Responsabilidades del Cliente</h2>
          <p>El cliente se compromete a proporcionar toda la información y recursos necesarios para el correcto desarrollo del proyecto, así como a participar activamente en las reuniones de seguimiento.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">5. Modificaciones y Cancelaciones</h2>
          <p>Cualquier modificación en el alcance del proyecto deberá ser acordada por ambas partes y podrá implicar ajustes en los plazos y costos. En caso de cancelación por parte del cliente, el anticipo no será reembolsable.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">6. Contacto</h2>
          <p>Para cualquier consulta relacionada con estos Términos y Condiciones, puedes contactarnos a través del formulario de contacto disponible en este sitio web.</p>
        </div>
      </div>
    </main>
  );
}
