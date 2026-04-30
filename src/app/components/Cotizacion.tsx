import React, { useState } from "react";

type FormState = {
  company: string;
  address: string;
  email: string;
  phone: string;
  itros: string;
  loa: string;
  beam: string;
  dwt: string;
  destination: string;
  service: string;
  notes: string;
};

export function Cotizacion(): JSX.Element {
  const [form, setForm] = useState<FormState>({
    company: "",
    address: "",
    email: "",
    phone: "",
    itros: "",
    loa: "",
    beam: "",
    dwt: "",
    destination: "",
    service: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleNotesChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setForm((s) => ({ ...s, notes: value }));
    setErrors((prev) => ({ ...prev, notes: "" }));
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  function validate() {
    const err: Record<string, string> = {};
    if (!form.company.trim()) err.company = "Requerido";
    if (!form.address.trim()) err.address = "Requerido";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "Email válido requerido";
    if (!form.service) err.service = "Seleccione un servicio";
    return err;
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 900);
  }

  const portImageSrc = `${import.meta.env.BASE_URL}images/puerto-esmeraldas.jpg`;

  return (
    <main className="cot-page cot-pro-page">
      <section className="cot-pro-hero">
        <p>Formulario de Cotización</p>
        <h1>Contáctanos para ofrecerte una solución personalizada</h1>
      </section>

      <section className="cot-pro-shell">
        <aside className="cot-pro-photo-card">
          <img src={portImageSrc} alt="Puerto de Esmeraldas" />
          <div className="cot-pro-photo-overlay">
            <h3>Puerto Esmeraldas</h3>
            <p>Operaciones seguras de carga, cabotaje y maniobras marítimas.</p>
          </div>
        </aside>

        <div className="cot-pro-form-card">
          <form className="cot-pro-form" onSubmit={handleSubmit} noValidate>
            <h3 className="cot-pro-section-title">Datos de la Empresa</h3>
            <div className="cot-pro-grid">
              <div className="cot-pro-field">
                <label htmlFor="company">Nombre de la Empresa *</label>
                <input id="company" name="company" value={form.company} onChange={handleChange} className={errors.company ? "input-error" : ""} />
                {errors.company && <small className="field-error">{errors.company}</small>}
              </div>
              <div className="cot-pro-field">
                <label htmlFor="address">Dirección *</label>
                <input id="address" name="address" value={form.address} onChange={handleChange} className={errors.address ? "input-error" : ""} />
                {errors.address && <small className="field-error">{errors.address}</small>}
              </div>
              <div className="cot-pro-field">
                <label htmlFor="email">Correo Electrónico *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={errors.email ? "input-error" : ""} />
                {errors.email && <small className="field-error">{errors.email}</small>}
              </div>
              <div className="cot-pro-field">
                <label htmlFor="phone">Teléfono de Contacto</label>
                <input id="phone" name="phone" value={form.phone} onChange={handleChange} />
              </div>
            </div>

            <h3 className="cot-pro-section-title">Características de la Nave</h3>
            <div className="cot-pro-grid">
              <div className="cot-pro-field">
                <label htmlFor="itros">ITROS - Registro Bruto</label>
                <input id="itros" name="itros" value={form.itros} onChange={handleChange} />
              </div>
              <div className="cot-pro-field">
                <label htmlFor="loa">LOA - Eslora Total (m)</label>
                <input id="loa" name="loa" value={form.loa} onChange={handleChange} />
              </div>
              <div className="cot-pro-field">
                <label htmlFor="beam">BEAM - Manga (m)</label>
                <input id="beam" name="beam" value={form.beam} onChange={handleChange} />
              </div>
              <div className="cot-pro-field">
                <label htmlFor="dwt">DWT - Peso Muerto (ton)</label>
                <input id="dwt" name="dwt" value={form.dwt} onChange={handleChange} />
              </div>
            </div>

            <h3 className="cot-pro-section-title">Detalles de la Operación</h3>
            <div className="cot-pro-grid">
              <div className="cot-pro-field">
                <label htmlFor="destination">Puerto de Destino</label>
                <select id="destination" name="destination" value={form.destination} onChange={handleChange}>
                  <option value="">Seleccione...</option>
                  <option>La Libertad</option>
                  <option>Esmeraldas</option>
                  <option>Guayaquil - Tres Bocas</option>
                  <option>Punta Arenas</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="cot-pro-field">
                <label htmlFor="service">Tipo de Servicio *</label>
                <select id="service" name="service" value={form.service} onChange={handleChange} className={errors.service ? "input-error" : ""}>
                  <option value="">Seleccione...</option>
                  <option>Transporte Marítimo y Cabotaje</option>
                  <option>Transporte de Barcazas y Plataformas</option>
                  <option>Alquiler de Embarcaciones con Tripulación</option>
                  <option>Asesoría Técnica</option>
                </select>
                {errors.service && <small className="field-error">{errors.service}</small>}
              </div>
            </div>

            <div className="cot-pro-field">
              <label htmlFor="notes">Observaciones Adicionales</label>
              <textarea id="notes" name="notes" rows={4} value={form.notes} onChange={handleNotesChange} />
            </div>

            <button className="cot-pro-submit" type="submit" disabled={submitting}>{submitting ? "Enviando..." : "ENVIAR SOLICITUD"}</button>
            {success && <p className="cot-pro-ok">Formulario enviado con éxito.</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
