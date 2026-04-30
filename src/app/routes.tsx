import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Cotizacion } from './components/Cotizacion';
import { Prensa } from './components/Prensa';
import { Empresa } from './components/Empresa';
import { AcercaDe } from './components/AcercaDe';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/acerca" element={<AcercaDe />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/cotizacion" element={<Cotizacion />} />
      <Route path="/prensa" element={<Prensa />} />
    </Routes>
  );
}
