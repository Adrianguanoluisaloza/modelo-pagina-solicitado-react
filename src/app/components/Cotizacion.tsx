import React, { useState } from "react";
import { FaShip, FaAnchor, FaShoppingCart, FaPhone, FaEnvelope, FaWhatsapp, FaCheck } from "react-icons/fa";

type FormState = {
  company: string;
  address: string;
  email: string;
  phone: string;
  itros?: string;
  loa?: string;
  beam?: string;
  dwt?: string;
  destination: string;
  service: string;
  notes: string;
};

const servicePrefill: Record<string, Partial<FormState>> = {
  "Transporte y Cabotaje": { service: "Transporte y Cabotaje", destination: "La Libertad" },
  "Barcazas y Plataformas": { service: "Barcazas y Plataformas", destination: "Esmeraldas" },
  "Alquiler y Tripulación": { service: "Alquiler y Tripulación" },
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

  function selectService(name: string) {
    const pre = servicePrefill[name] || {};
    setForm((s) => ({ ...s, ...pre, service: name }));
    setErrors((e) => ({ ...e, service: "" }));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const err: Record<string, string> = {};
    if (!form.company) err.company = "Requerido";
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

  return (
    <main className="cot-page">
      <section className="cot-hero cot-hero--image">
        <div className="cot-hero__overlay" />
        <div className="cot-hero__content">
          <p>Solicita tu Cotización</p>
          <h1>Solicite una Propuesta</h1>
          <p className="cot-hero__tag">Soluciones marítimas — Confianza, Agilidad y Profesionalismo</p>
        </div>
      </section>

      <section className="cot-grid">
        <div className="cot-main">
          <div className="service-cards">
            <button type="button" className={`service-card ${form.service === "Transporte y Cabotaje" ? "selected" : ""}`} onClick={() => selectService("Transporte y Cabotaje")}>
              <FaShip className="service-icon" />
              <h4>Transporte y Cabotaje</h4>
              <p>Rutas nacionales e internacionales, cargas generales y pasajeros.</p>
            </button>

            <button type="button" className={`service-card ${form.service === "Barcazas y Plataformas" ? "selected" : ""}`} onClick={() => selectService("Barcazas y Plataformas")}>
              <FaAnchor className="service-icon" />
              <h4>Barcazas y Plataformas</h4>
              <p>Traslado de barcazas, plataformas y estructuras especiales.</p>
            </button>

            <button type="button" className={`service-card ${form.service === "Alquiler y Tripulación" ? "selected" : ""}`} onClick={() => selectService("Alquiler y Tripulación")}>
              <FaShoppingCart className="service-icon" />
              <h4>Alquiler y Tripulación</h4>
              <p>Embarcaciones con tripulación para proyectos y transporte.</p>
            </button>
          </div>

          <form className="cot-form" onSubmit={handleSubmit} noValidate>
            <h3>Datos de la Empresa</h3>
            <div className="cot-form-grid">
              <label>
                Nombre de la Empresa *
                <input name="company" value={form.company} onChange={handleChange} className={errors.company ? "input-error" : ""} />
                {errors.company && <small className="field-error">{errors.company}</small>}
              </label>

              <label>
                Dirección
                <input name="address" value={form.address} onChange={handleChange} />
              </label>

              <label>
                Correo Electrónico *
                <input name="email" type="email" value={form.email} onChange={handleChange} className={errors.email ? "input-error" : ""} />
                {errors.email && <small className="field-error">{errors.email}</small>}
              </label>

              <label>
                Teléfono
                <input name="phone" value={form.phone} onChange={handleChange} />
              </label>
            </div>

            <h3>Características de la Nave</h3>
            <div className="cot-form-grid">
              <label>ITROS — Registro Bruto<input name="itros" value={form.itros} onChange={handleChange} /></label>
              <label>LOA — Eslora Total (m)<input name="loa" value={form.loa} onChange={handleChange} /></label>
              <label>BEAM — Manga (m)<input name="beam" value={form.beam} onChange={handleChange} /></label>
              <label>DWT — Peso Muerto (ton)<input name="dwt" value={form.dwt} onChange={handleChange} /></label>
            </div>

            <h3>Detalles de la Operación</h3>
            <div className="cot-form-grid">
              <label>
                Puerto de Destino
                <select name="destination" value={form.destination} onChange={handleChange}>
                  <option value="">Seleccione un destino...</option>
                  <option>La Libertad</option>
                  <option>Esmeraldas</option>
                  <option>Guayaquil - Tres Bocas</option>
                  <option>Punta Arenas</option>
                  <option>Otro</option>
                </select>
              </label>

              <label>
                Tipo de Servicio *
                <select name="service" value={form.service} onChange={handleChange} className={errors.service ? "input-error" : ""}>
                  <option value="">Seleccione...</option>
                  <option>Transporte y Cabotaje</option>
                  <option>Barcazas y Plataformas</option>
                  <option>Alquiler y Tripulación</option>
                </select>
                {errors.service && <small className="field-error">{errors.service}</small>}
              </label>
            </div>

            <label>Observaciones Adicionales<textarea name="notes" rows={4} value={form.notes} onChange={handleChange} /></label>

            <div style={{ marginTop: 16 }}>
              <button className="btn btn-primary" type="submit" disabled={submitting}>{submitting ? "Enviando..." : "Enviar Solicitud →"}</button>
              {success && <span style={{ marginLeft: 12, color: "green", fontWeight: 700 }}><FaCheck /> Enviado</span>}
            </div>
          </form>
        </div>

        <aside className="cot-side">
          <h3>Contacto</h3>
          <div className="contact-card">
            <div className="contact-icon"><FaPhone /></div>
            <div>
              <h4>Teléfonos</h4>
              <p>+593 985 456 821<br />+593 963 487 813</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon"><FaEnvelope /></div>
            <div>
              <h4>Email</h4>
              <p><a href="mailto:bluewavemaritimeag@gmail.com">bluewavemaritimeag@gmail.com</a></p>
            </div>
          </div>

          <a className="contact-whatsapp whatsapp-large" href="https://wa.me/593985456821" target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp Directo</a>

          <h4 style={{ marginTop: 18 }}>¿Qué necesitas?</h4>
          <ul className="contact-checklist">
            <li><FaCheck className="check-icon" /> Inspección previa de carga</li>
            <li><FaCheck className="check-icon" /> Plan de maniobras STS</li>
            <li><FaCheck className="check-icon" /> Transporte especializado</li>
            <li><FaCheck className="check-icon" /> Alquiler con tripulación</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
