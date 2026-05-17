import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AMBER = '#F69F00';
const TEAL = '#1A474A';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Our Services' },
  { path: '/products', label: 'All Products' },
  { path: '/contact', label: 'Contact Us' },
];

const productLinks = [
  { path: '/products/en590', label: 'EN590 Diesel Fuel' },
  { path: '/products/jet-a1', label: 'Jet A1 Aviation Fuel' },
  { path: '/products/vfo-d6', label: 'Virgin Fuel Oil D6' },
];

const portLinks = [
  { path: '/ports/rotterdam', label: 'Rotterdam' },
  { path: '/ports/houston', label: 'Houston' },
  { path: '/ports/fujairah', label: 'Fujairah' },
  { path: '/ports/jurong', label: 'Jurong' },
];

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="16" height="16" style={{ flexShrink: 0, marginTop: '2px' }}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill={AMBER}/>
      </svg>
    ),
    text: 'Lomonosova Street 30, Aktobe, Kazakhstan',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="16" height="16" style={{ flexShrink: 0, marginTop: '2px' }}>
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill={AMBER}/>
      </svg>
    ),
    text: '+77154083446',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="16" height="16" style={{ flexShrink: 0, marginTop: '2px' }}>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill={AMBER}/>
      </svg>
    ),
    text: 'info@energosoyuz.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="16" height="16" style={{ flexShrink: 0, marginTop: '2px' }}>
        <rect x="3" y="6" width="18" height="13" rx="1" stroke={AMBER} strokeWidth="1.8" fill="none"/>
        <path d="M7 10h5M7 14h3" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="14" y="10" width="4" height="4" rx="0.5" fill={AMBER} opacity="0.8"/>
      </svg>
    ),
    text: 'BIN: 060940009521',
  },
];

const ColHeading = ({ label, accent = AMBER }: { label: string; accent?: string }) => (
  <div style={{ marginBottom: '24px' }}>
    <div style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 800,
      fontSize: '0.9rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#ffffff',
      paddingBottom: '12px',
      borderBottom: `2px solid ${accent}`,
      display: 'inline-block',
      minWidth: '100px',
    }}>
      {label}
    </div>
  </div>
);

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <motion.div whileHover={{ x: 5 }}>
      <Link
        to={to}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: '0.9rem',
          color: '#b0bec5',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '7px 0',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = AMBER; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#b0bec5'; }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: AMBER, flexShrink: 0, display: 'inline-block' }} />
        {label}
      </Link>
    </motion.div>
  </li>
);

export default function Footer() {
  return (
    <>
      <footer style={{ background: '#111820', borderTop: `3px solid ${AMBER}`, padding: '72px 24px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '48px',
            marginBottom: '56px',
          }}>

            {/* Brand column */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <Link to="/">
                  <img
                    src="/images/site--logo.png"
                    alt="Energosoyuz Tsentralnaja Azija LLP — Global Petroleum Supplier"
                    style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
                  />
                </Link>
              </div>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.88rem', color: '#b0bec5', lineHeight: 1.85, marginBottom: '28px', maxWidth: '220px' }}>
                Verified oil and gas mandate. Petroleum supply worldwide — EN590, Jet A1, VFO D6. Established 2004.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[{ label: 'LI', title: 'LinkedIn' }, { label: 'TW', title: 'Twitter' }, { label: 'FB', title: 'Facebook' }].map((s, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    title={s.title}
                    whileHover={{ borderColor: AMBER, background: `rgba(246,159,0,0.12)`, scale: 1.1 }}
                    style={{ width: '38px', height: '38px', border: '1px solid #2e3d4a', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.22s' }}
                  >
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.68rem', color: '#90a0b0', textTransform: 'uppercase' }}>{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <ColHeading label="Quick Links" accent={AMBER} />
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {quickLinks.map(link => <FooterLink key={link.path} to={link.path} label={link.label} />)}
              </ul>
            </div>

            {/* Products */}
            <div>
              <ColHeading label="Products" accent={TEAL} />
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {productLinks.map(link => <FooterLink key={link.path} to={link.path} label={link.label} />)}
              </ul>
            </div>

            {/* Port Locations */}
            <div>
              <ColHeading label="Port Locations" accent={AMBER} />
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {portLinks.map(link => <FooterLink key={link.path} to={link.path} label={link.label} />)}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <ColHeading label="Contact Us" accent={AMBER} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {contactItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    {item.icon}
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.88rem', color: '#cfd8dc', lineHeight: 1.6 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.04, boxShadow: `0 6px 20px rgba(246,159,0,0.3)` }} whileTap={{ scale: 0.97 }} style={{ marginTop: '24px', display: 'inline-block' }}>
                <Link
                  to="/contact"
                  style={{
                    background: AMBER,
                    color: '#0a0a0a',
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '11px 24px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none',
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  }}
                >
                  Get In Touch →
                </Link>
              </motion.div>
            </div>
          </div>

          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(246,159,0,0.4), rgba(26,71,74,0.6), transparent)', marginBottom: '32px' }} />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.82rem', color: '#607d8b', margin: 0 }}>
              © 2025 Energosoyuz Tsentralnaja Azija LLP. All rights reserved.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {['Privacy Policy', 'Terms of Use'].map(item => (
                <span key={item} style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.8rem', color: '#607d8b', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = AMBER; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#607d8b'; }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div style={{ background: `linear-gradient(90deg, ${AMBER} 0%, #ffb31a 40%, ${AMBER} 100%)`, padding: '16px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.82rem', color: '#0d1218' }}>
            Energosoyuz Tsentralnaja Azija LLP — Global Petroleum Products Supplier
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            {[
              { icon: '📍', text: 'Rotterdam · Houston · Fujairah · Jurong' },
              { icon: '✉️', text: 'info@energosoyuz.com' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontSize: '0.76rem' }}>{item.icon}</span>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.78rem', color: '#0d1218' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
