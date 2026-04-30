import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bw-header ${hidden ? 'hidden' : 'visible'}`}>

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
            <li><Link to="/" onClick={() => setOpen(false)}>INICIO</Link></li>
            <li><Link to="/#servicios" onClick={() => setOpen(false)}>SERVICIOS</Link></li>
            <li><Link to="/acerca" onClick={() => setOpen(false)}>QUIÉNES SOMOS</Link></li>
            <li><Link to="/empresa" onClick={() => setOpen(false)}>EMPRESA</Link></li>
            <li><Link to="/#contacto" onClick={() => setOpen(false)}>CONTACTO</Link></li>
            <li><Link className="bw-nav-cta" to="/cotizacion" onClick={() => setOpen(false)}>COTIZAR</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
