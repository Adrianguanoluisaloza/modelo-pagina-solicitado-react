import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoutes } from './routes';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash, pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <Nav />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
