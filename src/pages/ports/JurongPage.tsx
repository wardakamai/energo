import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const AMBER = '#F69F00';
const TEAL = '#1A474A';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

const placeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: 'Energosoyuz — Jurong Petroleum Storage',
  description: 'Petroleum storage and supply hub at Jurong, Singapore. Asia-Pacific petroleum supply hub with access to major regional markets.',
  geo: { '@type': 'GeoCoordinates', latitude: '1.2644', longitude: '103.7028' },
  address: { '@type': 'PostalAddress', addressLocality: 'Jurong', addressCountry: 'SG' },
  containedInPlace: { '@type': 'Place', name: 'Jurong Island, Singapore' },
};

export default function JurongPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Fuel Storage Jurong Singapore | Petroleum Supply Asia | Energosoyuz"
        description="Energosoyuz operates petroleum storage at Jurong, Singapore. Asia-Pacific supply hub for petroleum buyers. Contact our Singapore supply desk."
        canonical="https://www.energosoyuz.com/ports/jurong"
        jsonLd={placeSchema}
      />

      {/* ── PAGE HERO ── */}
      <div style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.05) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${AMBER}, ${TEAL}, transparent)` }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <nav style={{ marginBottom: '24px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: '#888' }}>Port Locations</span>
            <span style={{ color: '#555', fontSize: '0.75rem' }}>›</span>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: '#aaa' }}>Jurong</span>
          </nav>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>Port Storage · Singapore</span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, maxWidth: '720px' }}>
            Fuel Storage Jurong —{' '}
            <span style={{ color: AMBER }}>Petroleum Supply Singapore</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '20px', maxWidth: '640px', lineHeight: 1.8 }}>
            Energosoyuz operates petroleum storage at Jurong, Singapore — the world's largest bunkering port and Asia-Pacific's premier petroleum trading and distribution hub. Our Jurong presence enables bulk petroleum supply across Asia, Oceania, and East Africa.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ marginTop: '36px' }}>
            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
              whileTap={{ scale: 0.97 }}
              style={{ background: AMBER, color: '#0a0a0a', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 28px', display: 'inline-flex', alignItems: 'center', gap: '6px', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
              Contact Singapore Desk →
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── JURONG HUB ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
          <FadeIn>
            <div className="section-label">Singapore Operations</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', color: '#111', lineHeight: 1.1, marginBottom: '16px' }}>
              Jurong — Asia-Pacific's <span style={{ color: TEAL }}>Petroleum Trading Hub</span>
            </h2>
            <div style={{ width: '50px', height: '3px', background: AMBER, marginBottom: '24px' }} />
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '18px' }}>
              Singapore is the world's largest bunkering port, handling over 50 million tonnes of bunker fuel annually, and a global centre for petroleum trading, storage, and refining. Jurong Island — Singapore's dedicated petrochemical and petroleum hub — hosts major refinery and storage infrastructure serving Asia-Pacific markets and global supply chains.
            </p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
              Energosoyuz's Jurong storage hub provides access to Asia-Pacific buyers across China, Japan, South Korea, India, Southeast Asia, and Oceania. Our Singapore desk can discuss product availability, delivery schedules, and supply terms for buyers across the region.
            </p>

            <div style={{ padding: '20px 24px', background: '#fff8e7', borderLeft: `4px solid ${AMBER}`, marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', color: '#8a6000', marginBottom: '6px' }}>Product Availability</div>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#8a6000', lineHeight: 1.7, margin: 0 }}>
                Contact our Singapore desk to confirm current product availability, delivery terms, and minimum order quantities for this location.
              </p>
            </div>

            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.04, boxShadow: `0 6px 20px rgba(246,159,0,0.3)` }}
              whileTap={{ scale: 0.97 }}
              style={{ background: AMBER, color: '#0a0a0a', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 26px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Enquire About Jurong Supply →
            </motion.button>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: "World's Largest Bunkering Port", desc: "Singapore handles more bunker fuel sales than any other port globally. Jurong Island sits at the heart of this supply ecosystem." },
                { title: 'Asia-Pacific Trading Gateway', desc: 'Singapore is Asia\'s petroleum pricing and trading hub, with benchmark assessments used across the region. Proximity to key Asian markets enables fast delivery.' },
                { title: 'Straits of Malacca Crossroads', desc: 'Singapore\'s position at the Straits of Malacca — one of the world\'s busiest shipping lanes — makes it an essential supply point for vessels transiting between the Indian Ocean and Pacific.' },
                { title: 'Pro-Business Environment', desc: 'Singapore offers a stable, transparent regulatory environment, sophisticated financial infrastructure, and one of the world\'s strongest legal frameworks for commodity trading.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ padding: '24px', background: '#f9f9f9', borderLeft: `3px solid ${i % 2 === 0 ? AMBER : TEAL}` }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', color: '#111', marginBottom: '8px' }}>{item.title}</div>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#666', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PRODUCTS SECTION ── */}
      <section style={{ background: '#f5f5f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, marginBottom: '10px' }}>Product Range</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', color: '#111' }}>
                Products Available — <span style={{ color: TEAL }}>Jurong, Singapore</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {[
              { label: 'EN590 Diesel Fuel', path: '/products/en590' },
              { label: 'Jet A1 Aviation Fuel', path: '/products/jet-a1' },
              { label: 'Virgin Fuel Oil D6', path: '/products/vfo-d6' },
            ].map(p => (
              <FadeIn key={p.path}>
                <Link to={p.path}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 24px', background: '#fff', border: `1px solid #ddd`, color: '#333', fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = AMBER; (e.currentTarget as HTMLElement).style.color = AMBER; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#ddd'; (e.currentTarget as HTMLElement).style.color = '#333'; }}>
                  {p.label} →
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER PORTS ── */}
      <section style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '72px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.04) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2rem)', textTransform: 'uppercase', color: '#fff', marginBottom: '32px' }}>
              Other <span style={{ color: AMBER }}>Storage Locations</span>
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Rotterdam', sub: 'Netherlands', path: '/ports/rotterdam' },
              { name: 'Houston', sub: 'United States', path: '/ports/houston' },
              { name: 'Fujairah', sub: 'UAE', path: '/ports/fujairah' },
            ].map((port, i) => (
              <motion.div key={i} whileHover={{ y: -4 }}>
                <Link to={port.path} style={{ display: 'block', padding: '28px 24px', border: '1px solid rgba(246,159,0,0.2)', textDecoration: 'none' }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.4rem', color: '#fff', textTransform: 'uppercase', marginBottom: '4px' }}>{port.name}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.78rem', color: '#888', marginBottom: '14px' }}>{port.sub}</div>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', color: AMBER, letterSpacing: '0.08em', textTransform: 'uppercase' }}>View →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
