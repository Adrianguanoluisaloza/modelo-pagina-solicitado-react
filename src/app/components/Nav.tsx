import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // Scroll down
      } else {
        setVisible(true); // Scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bw-header ${visible ? 'visible' : 'hidden'}`}>

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
          </ul>
        </div>
      </nav>
    </header>
  );
}
