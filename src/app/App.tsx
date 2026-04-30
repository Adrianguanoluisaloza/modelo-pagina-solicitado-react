import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Nav />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
