import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';

// Topbar ~54px (padding-based), Navbar min-height 112px
const TOPBAR_H = 54;
const NAVBAR_H = 112;
const OFFSET = TOPBAR_H + NAVBAR_H; // 166px desktop

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':     return <HomePage setActivePage={setActivePage} />;
      case 'about':    return <AboutPage setActivePage={setActivePage} />;
      case 'services': return <ServicesPage setActivePage={setActivePage} />;
      case 'products': return <ProductsPage setActivePage={setActivePage} />;
      case 'contact':  return <ContactPage />;
      default:         return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Fixed top strip */}
      <Topbar />

      {/* Fixed navbar, sits below topbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Push content below both bars */}
      <main style={{ flex: 1, paddingTop: `${OFFSET}px`, background: '#0a0a0a' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
