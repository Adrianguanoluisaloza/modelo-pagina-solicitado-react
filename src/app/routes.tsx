import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Cotizacion } from './components/Cotizacion';
import { Exportar } from './components/Exportar';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cotizacion" element={<Cotizacion />} />
      <Route path="/exportar" element={<Exportar />} />
    </Routes>
  );
}
