import { Link } from 'react-router-dom';

const baseUrl = import.meta.env.BASE_URL;

export function Empresa() {
  return (
    <section className="empresa-section bw-reveal bw-reveal-up">
      <div className="empresa-container">
        <div className="empresa-content">
          <p className="sec-kicker">Conoce Nuestra Empresa</p>
          <h2>BLUEWAVE-MARITIME S.A.</h2>

          <div className="empresa-intro">
            <p><strong>BLUEWAVE-MARITIME S.A.</strong> es una compañía ecuatoriana especializada en transporte marítimo y de cabotaje, ofreciendo soluciones integrales para la movilización de carga y pasajeros en rutas nacionales e internacionales. Con un firme compromiso con la excelencia y la seguridad, operamos una flota diversa adaptándonos a las necesidades de nuestros clientes y al dinamismo del sector marítimo.</p>
            <p>Caracterizados por nuestra innovación y compromiso con la calidad, aspiramos a posicionarnos como un referente en el mercado del transporte marítimo y alquiler de embarcaciones con tripulación. Nuestra oferta abarca desde alquiler de embarcaciones de placer y trabajo hasta transporte especializado de barcazas, plataformas petrolíferas y otras estructuras.</p>
            <p>Operamos en diversas vías de navegación interiores —ríos, canales y lagos— ofreciendo amplias soluciones logísticas. Nuestro equipo de profesionales altamente capacitados garantiza un servicio eficiente, seguro y confiable, enfocado en la satisfacción total del cliente.</p>
          </div>

          <div className="about-cta">
            <Link to="/cotizacion" className="btn btn-primary">SOLICITAR COTIZACIÓN</Link>
          </div>
        </div>

        <aside className="empresa-side">
          <div className="empresa-photo-card">
            <img src={`${baseUrl}images/SHIT TO SHIT.jpg`} alt="Especialistas Ship to Ship" />
            <div className="empresa-photo-overlay">
              <h3>Especialistas Ship to Ship</h3>
              <p>Operaciones seguras y eficientes</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
