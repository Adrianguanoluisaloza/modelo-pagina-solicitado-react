import { Link } from 'react-router-dom';

const baseUrl = import.meta.env.BASE_URL;

export function Empresa() {
  return (
    <section className="empresa-section bw-reveal bw-reveal-up">
      <div className="empresa-container">
        <div className="empresa-content">
          <p className="sec-kicker">Conoce Nuestra Empresa</p>
          <h2>BLUEWAVE-MARITIME S.A.</h2>

          <div className="mission-vision-cards">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h4>Misión</h4>
              <p>Brindar soluciones marítimas confiables y ágiles, combinando profesionalismo y experiencia para superar las expectativas de nuestros clientes, operando con los más altos estándares de seguridad, eficiencia y calidad.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h4>Visión</h4>
              <p>Ser la compañía líder en soluciones marítimas en Ecuador y la región, reconocidos por nuestra agilidad y profesionalismo en cada operación, inspirando confianza y contribuyendo al crecimiento sostenible.</p>
            </div>
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
