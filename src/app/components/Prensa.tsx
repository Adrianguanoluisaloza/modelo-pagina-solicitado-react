import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  media: string;
  message: string;
};

export function Prensa(): JSX.Element {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    media: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleNotesChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setForm((s) => ({ ...s, message: value }));
    setErrors((prev) => ({ ...prev, message: "" }));
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  function validate() {
    const err: Record<string, string> = {};
    if (!form.name.trim()) err.name = "Requerido";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "Email válido requerido";
    if (!form.message.trim()) err.message = "Requerido";
    return err;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
    <main className="cot-pro-page">
      <section className="cot-pro-hero">
        <p>Comunicados y Medios</p>
        <h1>Contacto de Prensa</h1>
      </section>

      <section className="cot-pro-shell">
        <div className="cot-pro-form-card">
          <form className="cot-pro-form" onSubmit={handleSubmit} noValidate>
            <h3 className="cot-pro-section-title">Datos de Contacto</h3>
            <div className="cot-pro-grid">
              <div className="cot-pro-field">
                <label htmlFor="name">Nombre *</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} className={errors.name ? "input-error" : ""} />
                {errors.name && <small className="field-error">{errors.name}</small>}
              </div>
              <div className="cot-pro-field">
                <label htmlFor="email">Correo Electrónico *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={errors.email ? "input-error" : ""} />
                {errors.email && <small className="field-error">{errors.email}</small>}
              </div>
              <div className="cot-pro-field">
                <label htmlFor="media">Medio de Comunicación</label>
                <input id="media" name="media" value={form.media} onChange={handleChange} />
              </div>
            </div>

            <div className="cot-pro-field">
              <label htmlFor="message">Prensa Actualización *</label>
              <textarea id="message" name="message" rows={5} value={form.message} onChange={handleNotesChange} className={errors.message ? "input-error" : ""} />
              {errors.message && <small className="field-error">{errors.message}</small>}
            </div>

            <button className="cot-pro-submit" type="submit" disabled={submitting}>
              {submitting ? "Enviando..." : "ENVIAR SOLICITUD"}
            </button>
            {success && <p className="cot-pro-ok">Formulario enviado con éxito.</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
