import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import WhatsAppButton from './components/WhatsAppButton';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import EN590Page from './pages/EN590Page';
import JetA1Page from './pages/JetA1Page';
import VFOPage from './pages/VFOPage';
import RotterdamPage from './pages/ports/RotterdamPage';
import HoustonPage from './pages/ports/HoustonPage';
import FujairahPage from './pages/ports/FujairahPage';
import JurongPage from './pages/ports/JurongPage';

const TOPBAR_H = 54;
const NAVBAR_H = 112;
const OFFSET = TOPBAR_H + NAVBAR_H;

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Topbar />
      <Navbar />
      <main style={{ flex: 1, paddingTop: `${OFFSET}px`, background: '#0a0a0a' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/en590" element={<EN590Page />} />
              <Route path="/products/jet-a1" element={<JetA1Page />} />
              <Route path="/products/vfo-d6" element={<VFOPage />} />
              <Route path="/ports/rotterdam" element={<RotterdamPage />} />
              <Route path="/ports/houston" element={<HoustonPage />} />
              <Route path="/ports/fujairah" element={<FujairahPage />} />
              <Route path="/ports/jurong" element={<JurongPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
