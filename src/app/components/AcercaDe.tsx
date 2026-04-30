import { Link } from 'react-router-dom';
import { HiOutlineBolt, HiOutlineCheckCircle, HiOutlineEye, HiOutlineFlag, HiOutlineShieldCheck, HiOutlineSparkles } from 'react-icons/hi2';

const baseUrl = import.meta.env.BASE_URL;

export function AcercaDe() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <img className="about-hero-bg" src={`${baseUrl}images/barco-9.jpg`} alt="Flota BlueWave Maritime" />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="sec-kicker">Quiénes Somos</p>
          <h1>BLUEWAVE-MARITIME S.A.</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="company-description">
            <p><strong>BLUEWAVE-MARITIME S.A.</strong> es una compañía ecuatoriana especializada en el transporte marítimo y de cabotaje, ofreciendo soluciones integrales para la movilización de carga y pasajeros tanto en rutas nacionales como internacionales. Con un firme compromiso con la excelencia y la seguridad, operamos una flota diversa que incluye embarcaciones de excursión, cruceros, transbordadores y taxis acuáticos, adaptándonos a las necesidades de nuestros clientes y al dinamismo del sector marítimo.</p>
            <p>Nos destacamos por nuestra innovación y compromiso con la calidad, y aspiramos a posicionarnos como un referente en el mercado del transporte marítimo y el alquiler de embarcaciones con tripulación. Nuestra oferta de servicios abarca desde el alquiler de embarcaciones de placer y de trabajo hasta el transporte especializado de barcazas, plataformas petrolíferas y otras estructuras, tanto remolcadas como empujadas por remolcadores.</p>
            <p>Operamos en diversas vías de navegación interiores, como ríos, canales y lagos, lo que nos permite ofrecer una amplia gama de soluciones logísticas para el transporte de mercancías y pasajeros.</p>
            <p>Nuestro equipo de profesionales altamente capacitados trabaja con dedicación para garantizar un servicio eficiente, seguro y confiable, adaptado a las exigencias del mercado y enfocado en la satisfacción del cliente.</p>
          </div>

          <div className="empresa-values">
            <h3>Nuestros Valores Fundamentales</h3>
            <div className="values-row">
              <div className="value-item">
                <div className="value-icon-circle"><HiOutlineCheckCircle /></div>
                <div>
                  <h4>CONFIANZA</h4>
                  <p>Fomentamos relaciones basadas en la integridad y el compromiso, cumpliendo siempre con lo prometido.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon-circle"><HiOutlineBolt /></div>
                <div>
                  <h4>AGILIDAD</h4>
                  <p>Nos adaptamos rápidamente a las necesidades de nuestros clientes, ofreciendo soluciones eficientes y oportunas.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon-circle"><HiOutlineSparkles /></div>
                <div>
                  <h4>PROFESIONALISMO</h4>
                  <p>Actuamos con excelencia y dedicación en cada servicio, garantizando la máxima calidad.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon-circle"><HiOutlineShieldCheck /></div>
                <div>
                  <h4>SEGURIDAD</h4>
                  <p>Priorizamos la seguridad en todas nuestras operaciones, cumpliendo con los estándares más altos para proteger a nuestros clientes y equipo.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mission-vision-cards">
            <div className="mv-card">
              <div className="mv-icon"><HiOutlineFlag /></div>
              <h4>Misión</h4>
              <p>Brindar soluciones marítimas confiables y ágiles para el transporte de carga y pasajeros, combinando profesionalismo y experiencia para superar las expectativas de nuestros clientes. Nos comprometemos a operar con los más altos estándares de seguridad, eficiencia y calidad.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon"><HiOutlineEye /></div>
              <h4>Visión</h4>
              <p>Ser la compañía líder en soluciones marítimas en Ecuador y la región, reconocida por su agilidad y profesionalismo en cada operación, con un servicio integral que inspire confianza y contribuya al crecimiento sostenible del sector marítimo.</p>
            </div>
          </div>

          <div className="empresa-proposito">
            <h4>NUESTRO PROPÓSITO</h4>
            <p>Facilitar el comercio y la conectividad mediante soluciones marítimas de alto valor, construyendo un legado de confianza, agilidad y profesionalismo. Nos esforzamos por ser un socio estratégico para nuestros clientes, apoyando su éxito a través de servicios marítimos eficientes, seguros y personalizados.</p>
          </div>

          <div className="about-cta">
            <Link to="/cotizacion" className="btn btn-primary">SOLICITAR COTIZACIÓN</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
