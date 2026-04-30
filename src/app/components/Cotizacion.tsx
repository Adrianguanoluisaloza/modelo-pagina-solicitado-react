export function Cotizacion() {
  return (
    <main className="cot-page">
      <section className="cot-hero">
        <p>Formulario de Cotización</p>
        <h1>Solicite una Propuesta</h1>
      </section>

      <section className="cot-grid">
        <aside>
          <h3>Cuéntenos sobre su operación</h3>
          <p>Complete el formulario con los datos de su empresa y las características de la nave. Nuestro equipo elaborará una propuesta personalizada.</p>
          <ul>
            <li><b>Gerente General:</b> Gabriel Eduardo Ortiz Meza</li>
            <li><b>Teléfonos:</b> +593 985 456 821 / +593 963 487 813</li>
            <li><b>Correo:</b> bluewavemaritimeag@gmail.com</li>
          </ul>
          <a href="https://wa.me/593985456821" target="_blank" rel="noreferrer" className="btn btn-primary">WhatsApp Directo</a>
        </aside>

        <form>
          <h3>Datos de la Empresa</h3>
          <div className="two-col">
            <label>Nombre de la Empresa *<input type="text" placeholder="Razón social" /></label>
            <label>Dirección *<input type="text" placeholder="Ciudad, País" /></label>
            <label>Correo Electrónico *<input type="email" placeholder="contacto@empresa.com" /></label>
            <label>Teléfono de Contacto<input type="text" placeholder="+593 ..." /></label>
          </div>

          <h3>Características de la Nave</h3>
          <div className="two-col">
            <label>ITROS — Registro Bruto<input type="number" /></label>
            <label>LOA — Eslora Total (m)<input type="number" /></label>
            <label>BEAM — Manga (m)<input type="number" /></label>
            <label>DWT — Peso Muerto (ton)<input type="number" /></label>
          </div>

          <h3>Detalles de la Operación</h3>
          <div className="two-col">
            <label>Puerto de Destino<select><option>Seleccione un destino...</option><option>La Libertad</option><option>Esmeraldas</option><option>Guayaquil - Tres Bocas</option><option>Punta Arenas</option><option>Otro / especificar en observaciones</option></select></label>
            <label>Tipo de Servicio<select><option>Seleccione...</option><option>Transporte Marítimo y Cabotaje</option><option>Transporte de Barcazas / Plataformas</option><option>Alquiler de Embarcaciones</option><option>Asesoría Técnica</option><option>Otro</option></select></label>
          </div>

          <label>Observaciones Adicionales<textarea rows={5} placeholder="Ruta, volumen, fechas estimadas, tipo de carga u otras observaciones..." /></label>
          <button type="button" className="btn btn-primary">Enviar Solicitud →</button>
        </form>
      </section>
    </main>
  );
}
