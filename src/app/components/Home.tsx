import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { FaAnchor, FaGlobeAmericas, FaShip, FaShoppingCart } from 'react-icons/fa';
import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone, HiOutlineUser } from 'react-icons/hi2';
import { Empresa } from './Empresa';

const baseUrl = import.meta.env.BASE_URL;

export function Home() {
  useReveal();

  return (
    <main>
      <section className="hero" id="inicio">
        <img className="hero-bg" src={`${baseUrl}images/aerial-drone-photo-industrial-fuel-petrochemical-tanker-cruising-sea.jpg`} alt="Operaciones BlueWave Maritime" />
        <div className="hero-overlay" />
        <div className="hero-content bw-reveal bw-reveal-up">
          <span className="hero-kicker">AGENCIA NAVIERA - ECUADOR</span>
          <h1>
            <span>SOLUCIONES</span>
            <span>MARÍTIMAS DE</span>
            <span>EXCELENCIA</span>
          </h1>
          <p>
            <strong>BLUEWAVE-MARITIME S.A.</strong> ofrece transporte marítimo, cabotaje y servicios especializados para carga y pasajeros, con operación desde Esmeraldas y cobertura en puertos estratégicos del Ecuador.
          </p>
          <div className="hero-features">
            <div className="hero-feature"><span className="feature-icon"><FaShip /></span><span>Transporte Marítimo & Cabotaje</span></div>
            <div className="hero-feature"><span className="feature-icon"><FaAnchor /></span><span>Flota Diversa y Especializada</span></div>
            <div className="hero-feature"><span className="feature-icon"><FaGlobeAmericas /></span><span>Cobertura Nacional e Internacional</span></div>
          </div>
          <div className="hero-actions">
            <Link to="/cotizacion" className="btn btn-primary">SOLICITAR COTIZACIÓN</Link>
            <a href="#servicios" className="btn btn-outline">CONOCER SERVICIOS</a>
            <Link to="/acerca" className="btn btn-outline">QUIÉNES SOMOS</Link>
          </div>
          <div className="hero-stats">
            <div><b>24/7</b><span>Soporte Operativo</span></div>
            <div><b>4+</b><span>Puertos Estratégicos</span></div>
            <div><b>STS</b><span>Ship to Ship</span></div>
          </div>
        </div>
      </section>

      <Empresa />

      <section className="services" id="servicios">
        <div className="services-header bw-reveal bw-reveal-up">
          <div>
            <p className="sec-kicker">Nuestras Soluciones</p>
            <h2>Áreas de Especialización</h2>
          </div>
          <Link to="/cotizacion">Solicitar Presupuesto</Link>
        </div>

        <p className="services-intro">
          Servicios marítimos confiables, ágiles y profesionales para transporte, alquiler de embarcaciones y operaciones especializadas.
        </p>

        <div className="services-grid">
          <article className="bw-reveal bw-reveal-up">
            <span className="service-icon"><FaShip /></span>
            <h3>Transporte Marítimo y Cabotaje</h3>
            <p>Transporte seguro y eficiente de carga y pasajeros en rutas regulares y no regulares, adaptado a las necesidades de cada cliente.</p>
            <small>Servicio Destacado</small>
          </article>
          <article className="bw-reveal bw-reveal-up">
            <span className="service-icon"><FaAnchor /></span>
            <h3>Barcazas y Plataformas Petrolíferas</h3>
            <p>Soluciones especializadas para el traslado de barcazas, plataformas petrolíferas y estructuras mayores mediante remolque o empuje.</p>
            <small>Operaciones Especializadas</small>
          </article>
          <article className="bw-reveal bw-reveal-up">
            <span className="service-icon"><FaShoppingCart /></span>
            <h3>Alquiler de Embarcaciones con Tripulación</h3>
            <p>Alquiler de embarcaciones de placer y trabajo con tripulación, para transporte marítimo y costero.</p>
            <small>Personal Capacitado</small>
          </article>
        </div>
      </section>

      <section className="cta bw-reveal bw-reveal-zoom">
        <h2>¿NECESITA PRESUPUESTO PARA UNA OPERACIÓN?</h2>
        <p>Nuestro departamento técnico está disponible para analizar sus requerimientos.</p>
        <Link to="/cotizacion" className="btn btn-primary">IR AL FORMULARIO DE COTIZACIÓN</Link>
        <p className="cta-tagline">Contáctenos hoy y naveguemos juntos hacia el éxito.</p>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-layout">
          <div className="bw-reveal bw-reveal-left contact-main">
            <p className="sec-kicker">Contacto Directo</p>
            <h2>Estamos Listos Para Zarpar</h2>
            <p>Comuníquese con nuestra central de operaciones. Atendemos requerimientos marítimos con agilidad, seguridad y profesionalismo.</p>
            <div className="contact-grid">
              <article className="contact-card">
                <span className="contact-icon"><HiOutlineMapPin /></span>
                <div>
                  <h4>Base de Operaciones</h4>
                  <p>Km 7,5 vía Atacames, Urb. Tecnipetrol Mz. 34 V. 32 Esmeraldas, Ecuador</p>
                </div>
              </article>
              <article className="contact-card">
                <span className="contact-icon"><HiOutlinePhone /></span>
                <div>
                  <h4>Comunicaciones</h4>
                  <p>+593 985456821</p>
                  <p>+593 963487813</p>
                </div>
              </article>
              <article className="contact-card">
                <span className="contact-icon"><HiOutlineEnvelope /></span>
                <div>
                  <h4>Despacho Digital</h4>
                  <p>bluewavemaritimeag@gmail.com</p>
                </div>
              </article>
              <article className="contact-card">
                <span className="contact-icon"><HiOutlineUser /></span>
                <div>
                  <h4>Gerente General</h4>
                  <p>GABRIEL EDUARDO ORTIZ MEZA</p>
                </div>
              </article>
            </div>
            <div className="agency-tagline">
              <p>AGENCIA NAVIERA</p>
              <p className="tagline-sub">Confianza, Agilidad y Profesionalismo en Soluciones Marítimas.</p>
            </div>
            <a className="contact-whatsapp" href="https://wa.me/593985456821?text=Hola,%20requiero%20asistencia%20operativa." target="_blank" rel="noreferrer">
              CONTACTAR POR WHATSAPP
            </a>
          </div>
          <aside className="bw-reveal bw-reveal-right contact-side">
            <h3>ZONAS DE COBERTURA</h3>
            <div className="coverage-grid">
              <article>
                <strong>Puerto de Esmeraldas</strong>
                <span>Base Principal</span>
                <p>Operaciones de cabotaje y maniobras mayores.</p>
              </article>
              <article>
                <strong>Guayaquil</strong>
                <span>Tres Bocas</span>
                <p>Logística fluvial y marítima de alta densidad.</p>
              </article>
              <article>
                <strong>La Libertad</strong>
                <span>Puerto Centro</span>
                <p>Servicios a plataformas y tanqueros.</p>
              </article>
              <article>
                <strong>Punta Arenas</strong>
                <span>Puerto Sur</span>
                <p>Asistencia portuaria y de cabotaje sur.</p>
              </article>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
