import { Link } from 'react-router-dom';

export function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="bw-footer">
      <div className="bw-footer-inner">
        <div className="bw-footer-brand">
          <div className="bw-footer-brandmark">
            <span>BLUEWAVE</span>
            <strong>MARITIME S.A.</strong>
          </div>
          <p>
            Agencia naviera especializada en transporte marítimo, cabotaje y logística en la costa ecuatoriana.
          </p>
        </div>

        <div className="bw-footer-links">
          <h3>Empresa</h3>
          <a href={`${baseUrl}#acerca`}>Nosotros</a>
          <a href={`${baseUrl}#servicios`}>Servicios</a>
          <a href={`${baseUrl}#trabajos`}>Proyectos</a>
        </div>

        <div className="bw-footer-contact">
          <h3>Contacto</h3>
          <a href="tel:+593985456821">+593 985 456 821</a>
          <a href="mailto:bluewavemaritimeag@gmail.com">bluewavemaritimeag@gmail.com</a>
          <span>Esmeraldas, Ecuador</span>
        </div>
      </div>

      <div className="bw-footer-bottom">
        <span>© 2026 BLUEWAVE-MARITIME S.A. Todos los derechos reservados.</span>
        <div className="bw-footer-legal">
          <Link to="/">Términos de Servicio</Link>
          <Link to="/">Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}