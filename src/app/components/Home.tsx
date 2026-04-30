import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const galleryCards = [
  {
    number: '01',
    src: '/images/puerto-esmeraldas.jpg',
    alt: 'Operación en puerto',
    title: 'Operación en Puerto',
  },
  {
    number: '02',
    src: '/images/barco-1.jpg',
    alt: 'Flota operativa',
    title: 'Flota Operativa',
  },
  {
    number: '03',
    src: '/images/dentro-del-barco.jpg',
    alt: 'Maniobras especiales',
    title: 'Maniobras Especiales',
  },
  {
    number: '04',
    src: '/images/SHIT TO SHIT.jpg',
    alt: 'Operación STS',
    title: 'Operación STS',
  },
  {
    number: '05',
    src: '/images/aerial-view-oil-tanker-floating-sea.jpg',
    alt: 'Logística portuaria',
    title: 'Logística Portuaria',
  },
  {
    number: '06',
    src: '/images/oficina.jpg',
    alt: 'Servicios auxiliares',
    title: 'Servicios Auxiliares',
  },
  {
    number: '07',
    src: '/images/barcos-en-el-mar.jpg',
    alt: 'Carga y descarga',
    title: 'Carga y Descarga',
  },
  {
    number: '08',
    src: '/images/barco-10.jpg',
    alt: 'Despliegue técnico',
    title: 'Despliegue Técnico',
  },
];

export function Home() {
  useReveal();

  return (
    <main>
      <section className="hero" id="inicio">
        <img className="hero-bg" src="/images/CIELO EN EL MAR.jpg" alt="Operaciones BlueWave Maritime" />
        <div className="hero-overlay" />
        <div className="hero-content bw-reveal bw-reveal-up">
          <span className="hero-kicker">AGENCIA NAVIERA — ECUADOR</span>
          <h1>
            <span>SOLUCIONES</span>
            <span>MARÍTIMAS DE</span>
            <span>EXCELENCIA</span>
          </h1>
          <p>
            <strong>BLUEWAVE-MARITIME S.A.</strong> ofrece transporte marítimo, cabotaje y
            soluciones integrales de logística desde Esmeraldas, Ecuador hacia rutas nacionales e
            internacionales.
          </p>
          <div className="hero-actions">
            <Link to="/cotizacion" className="btn btn-primary">SOLICITAR COTIZACION</Link>
            <a href="#servicios" className="btn btn-outline">CONOCER SERVICIOS</a>
          </div>
          <div className="hero-stats">
            <div><b>24/7</b><span>Soporte Operativo</span></div>
            <div><b>4+</b><span>Puertos Estratégicos</span></div>
            <div><b>100%</b><span>Compromiso Total</span></div>
          </div>
        </div>
      </section>

      <section className="about bw-reveal bw-reveal-left" id="acerca">
        <div className="about-img-wrap">
          <img src="/images/puerto-esmeraldas.jpg" alt="Equipo BlueWave Maritime" />
          <div className="about-badge"><b>STS</b><span>Especialistas Ship to Ship</span></div>
        </div>
        <div>
          <p className="sec-kicker">Quiénes Somos</p>
          <h2>Una empresa ecuatoriana de confianza</h2>
          <p><strong>BLUEWAVE-MARITIME S.A.</strong> es una compañía especializada en transporte marítimo y de cabotaje, ofreciendo soluciones para la movilización de carga y pasajeros.</p>
          <p>Operamos una flota diversa que incluye embarcaciones de excursión, cruceros, transbordadores y taxis acuáticos, adaptándonos a los más altos estándares de calidad y seguridad exigidos en el sector marítimo.</p>
          <div className="about-cards">
            <article><h4>Misión</h4><p>Soluciones marítimas confiables y ágiles, combinando profesionalismo y eficacia.</p></article>
            <article><h4>Visión</h4><p>Ser líderes en la región reconocidos por nuestra integridad operativa.</p></article>
          </div>
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="services-header bw-reveal bw-reveal-up">
          <div>
            <p className="sec-kicker">Nuestras Soluciones</p>
            <h2>Áreas de Especialización</h2>
          </div>
          <Link to="/cotizacion">Solicitar Presupuesto →</Link>
        </div>

        <div className="services-grid">
          <article className="bw-reveal bw-reveal-up"><span>🚢</span><h3>Transporte y Cabotaje</h3><p>Transporte seguro y eficiente de carga y pasajeros en rutas regulares y no regulares, totalmente adaptado a las necesidades de su operación.</p><small>Servicio Destacado</small></article>
          <article className="bw-reveal bw-reveal-up"><span>⚓</span><h3>Barcazas y Plataformas</h3><p>Soluciones técnicas especializadas para el traslado complejo de barcazas, plataformas petrolíferas y estructuras mayores con remolcadores.</p><small>Operaciones Complejas</small></article>
          <article className="bw-reveal bw-reveal-up"><span>🛥️</span><h3>Fletamento y Tripulación</h3><p>Alquiler de embarcaciones de placer o trabajo, dotadas con tripulación certificada para garantizar experiencias seguras y profesionales.</p><small>Personal Capacitado</small></article>
        </div>
      </section>

      <section className="cta bw-reveal bw-reveal-zoom">
        <h2>¿NECESITA PRESUPUESTO PARA UNA OPERACIÓN?</h2>
        <p>Nuestro departamento técnico está disponible 24/7 para analizar sus requerimientos.</p>
        <Link to="/cotizacion" className="btn btn-primary">IR AL FORMULARIO DE COTIZACIÓN</Link>
      </section>

      <section className="gallery" id="trabajos">
        <div className="bw-reveal bw-reveal-right">
          <p className="sec-kicker">Galería Operativa</p>
          <h2>Nuestra Trayectoria en el Mar</h2>
          <p>Documentación visual de nuestras operaciones en La Libertad, Esmeraldas, Guayaquil (Tres Bocas) y Punta Arenas.</p>
        </div>
        <div className="gallery-grid">
          {galleryCards.map((card) => (
            <figure key={card.title} className="gallery-card bw-reveal bw-reveal-zoom">
              <img src={card.src} alt={card.alt} />
              <span className="gallery-number">{card.number}</span>
              <figcaption>{card.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-layout">
          <div className="bw-reveal bw-reveal-left contact-main">
            <p className="sec-kicker">Contacto Directo</p>
            <h2>Estamos Listos Para Zarpar</h2>
            <p>Comuníquese con nuestra central de operaciones. Disponemos de cobertura en los terminales más importantes del país.</p>
            <div className="contact-grid">
              <article className="contact-card">
                <span>📍</span>
                <div>
                  <h4>Base de Operaciones</h4>
                  <p>Km 7.5 vía Atacames, Urb. Tecnipetrol Mz. 34 V. 32 Esmeraldas, Ecuador</p>
                </div>
              </article>
              <article className="contact-card">
                <span>📱</span>
                <div>
                  <h4>Comunicaciones</h4>
                  <p>+593 985 456 821</p>
                  <p>+593 963 487 813</p>
                </div>
              </article>
              <article className="contact-card">
                <span>📧</span>
                <div>
                  <h4>Despacho Digital</h4>
                  <p>bluewavemaritimeag@gmail.com</p>
                </div>
              </article>
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
