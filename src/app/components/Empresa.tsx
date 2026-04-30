import { Link } from 'react-router-dom';

const baseUrl = import.meta.env.BASE_URL;

export function Empresa() {
  return (
    <section className="empresa-section bw-reveal bw-reveal-up" id="empresa">
      <div className="empresa-container">
        <aside className="empresa-side">
          <div className="empresa-photo-card">
            <img src={`${baseUrl}images/SHIT TO SHIT.jpg`} alt="Operación Ship to Ship de BlueWave Maritime" />
            <div className="empresa-photo-overlay empresa-photo-overlay--badge">
              <h3>STS</h3>
              <p>Especialistas Ship to Ship</p>
            </div>
          </div>
        </aside>

        <div className="empresa-content">
          <p className="sec-kicker">Quiénes Somos</p>
          <h2>Una empresa ecuatoriana de confianza</h2>

          <div className="empresa-intro">
            <p><strong>BLUEWAVE-MARITIME S.A.</strong> es una compañía especializada en transporte marítimo y de cabotaje, ofreciendo soluciones para la movilización de carga y pasajeros.</p>
            <p>Operamos una flota diversa que incluye embarcaciones de excursión, cruceros, transbordadores y taxis acuáticos, adaptándonos a los estándares de calidad y seguridad del sector marítimo.</p>
          </div>

          <div className="empresa-home-cards">
            <article>
              <h3>Misión</h3>
              <p>Soluciones marítimas confiables y ágiles, combinando profesionalismo y eficacia.</p>
            </article>
            <article>
              <h3>Visión</h3>
              <p>Ser líderes en la región reconocidos por nuestra integridad operativa.</p>
            </article>
          </div>

          <div className="about-cta">
            <Link to="/acerca" className="btn btn-primary">CONOCER MÁS</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
