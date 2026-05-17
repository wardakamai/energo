import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AMBER = '#F69F00';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Our Services' },
  { path: '/products', label: 'Products' },
  { path: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  const linkVariants = {
    hidden: { y: -12, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.4 } },
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '112px',
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <motion.img
              src="/images/site--logo.png"
              alt="Energosoyuz Tsentralnaja Azija LLP — Global Petroleum Supplier"
              style={{ height: '90px', width: 'auto', objectFit: 'contain', display: 'block' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            />
          </Link>

          {/* Desktop Nav */}
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
            className="hidden-mobile"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map(link => (
              <motion.div key={link.path} variants={linkVariants}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={linkVariants} style={{ display: location.pathname === '/contact' ? 'none' : 'block' }}>
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05, boxShadow: `0 6px 20px rgba(246,159,0,0.4)` }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: AMBER,
                  color: '#0a0a0a',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '10px 22px',
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                }}
              >
                Get Quote
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none' }}
            className="hamburger-btn"
            aria-label="Toggle navigation menu"
          >
            <div style={{ width: '26px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{ display: 'block', height: '2px', background: menuOpen ? AMBER : '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none', borderRadius: '2px' }} />
              <span style={{ display: 'block', height: '2px', background: menuOpen ? 'transparent' : '#fff', transition: 'all 0.3s', borderRadius: '2px' }} />
              <span style={{ display: 'block', height: '2px', background: menuOpen ? AMBER : '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', borderRadius: '2px' }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.32, ease: 'easeInOut' }}
          >
            <div style={{ marginBottom: '40px' }}>
              <img
                src="/images/site--logo.png"
                alt="Energosoyuz Logo"
                style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link, i) => (
                <motion.div key={link.path} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.06 }}>
                  <Link
                    to={link.path}
                    style={{
                      display: 'block',
                      background: isActive(link.path) ? 'rgba(246,159,0,0.1)' : 'none',
                      borderLeft: isActive(link.path) ? `3px solid ${AMBER}` : '3px solid transparent',
                      textAlign: 'left',
                      padding: '14px 16px',
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: isActive(link.path) ? AMBER : '#ccc',
                      textDecoration: 'none',
                      borderRadius: '0 4px 4px 0',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.72rem', color: '#666', fontFamily: "'Barlow', sans-serif", letterSpacing: '0.05em', marginBottom: '12px', textTransform: 'uppercase' }}>Contact</div>
              <div style={{ fontSize: '0.82rem', color: '#888', fontFamily: "'Barlow', sans-serif", lineHeight: 1.8 }}>
                <div>+77154083446</div>
                <div>info@energosoyuz.com</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
