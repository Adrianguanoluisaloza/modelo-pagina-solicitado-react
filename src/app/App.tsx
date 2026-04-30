import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
