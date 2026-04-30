import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Nav() {
  const [open, setOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className="bw-header">
      <div className="bw-topbar">
        <a href="tel:+593985456821">📞 +593 985 456 821</a>
        <span>|</span>
        <a href="mailto:bluewavemaritimeag@gmail.com">✉ bluewavemaritimeag@gmail.com</a>
      </div>

      <nav className="bw-nav">
        <div className="bw-nav-brand">
          <Link to="/" className="bw-logo">
            <img src={`${baseUrl}images/logobluewave_nobg.png`} alt="BlueWave Maritime" />
          </Link>
        </div>

        <div className="bw-nav-actions">
          <button
            className="bw-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            aria-expanded={open}
          >
            ☰
          </button>

          <ul className={`bw-nav-links ${open ? 'open' : ''}`}>
            <li><a href={`${baseUrl}#inicio`}>INICIO</a></li>
            <li><a href={`${baseUrl}#servicios`}>SERVICIOS</a></li>
            <li><a href={`${baseUrl}#trabajos`}>PROYECTOS</a></li>
            <li><a href={`${baseUrl}#acerca`}>NOSOTROS</a></li>
            <li><a href={`${baseUrl}#contacto`}>CONTACTO</a></li>
            <li><Link className="bw-nav-cta" to="/cotizacion">COTIZAR</Link></li>
            <li><Link className="bw-nav-secondary" to="/exportar">EXPORTAR</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
