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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleNotesChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setForm((current) => ({ ...current, message: value }));
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
                <input id="name" name="name" value={form.name} onChange={handleChange} />
              </div>
              <div className="cot-pro-field">
                <label htmlFor="email">Correo Electrónico *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
              </div>
              <div className="cot-pro-field">
                <label htmlFor="media">Medio de Comunicación</label>
                <input id="media" name="media" value={form.media} onChange={handleChange} />
              </div>
            </div>

            <div className="cot-pro-field">
              <label htmlFor="message">Prensa Actualización *</label>
              <textarea id="message" name="message" rows={5} value={form.message} onChange={handleNotesChange} />
            </div>

            <button className="cot-pro-submit" type="button">ENVIAR SOLICITUD</button>
          </form>
        </div>
      </section>
    </main>
  );
}
