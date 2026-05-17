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
  name: 'Energosoyuz — Fujairah Petroleum Storage',
  description: 'Petroleum storage and supply hub at the Port of Fujairah, UAE. Strategic Middle East bunkering and distribution hub for petroleum products.',
  geo: { '@type': 'GeoCoordinates', latitude: '25.1288', longitude: '56.3488' },
  address: { '@type': 'PostalAddress', addressLocality: 'Fujairah', addressCountry: 'AE' },
  containedInPlace: { '@type': 'Port', name: 'Port of Fujairah' },
};

export default function FujairahPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Oil Storage Fujairah | Petroleum Supply UAE | Energosoyuz"
        description="Energosoyuz operates petroleum storage at the Port of Fujairah, UAE. Strategic bunkering hub for Middle East and Asian buyers. Contact our Fujairah supply desk."
        canonical="https://www.energosoyuz.com/ports/fujairah"
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
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: '#aaa' }}>Fujairah</span>
          </nav>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>Port Storage · UAE</span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, maxWidth: '720px' }}>
            Oil Storage Fujairah —{' '}
            <span style={{ color: AMBER }}>Petroleum Supply UAE</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '20px', maxWidth: '640px', lineHeight: 1.8 }}>
            Energosoyuz operates petroleum storage at the Port of Fujairah, one of the world's leading bunkering and petroleum storage hubs, strategically located at the entrance to the Strait of Hormuz. Our Fujairah presence serves petroleum buyers across the Middle East and Asia.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ marginTop: '36px' }}>
            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
              whileTap={{ scale: 0.97 }}
              style={{ background: AMBER, color: '#0a0a0a', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 28px', display: 'inline-flex', alignItems: 'center', gap: '6px', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
              Contact Fujairah Desk →
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── FUJAIRAH HUB ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
          <FadeIn>
            <div className="section-label">Fujairah Operations</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', color: '#111', lineHeight: 1.1, marginBottom: '16px' }}>
              Fujairah — Strategic <span style={{ color: TEAL }}>Middle East Bunkering Hub</span>
            </h2>
            <div style={{ width: '50px', height: '3px', background: AMBER, marginBottom: '24px' }} />
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '18px' }}>
              Fujairah is one of the world's largest bunkering ports, second only to Singapore by volume, and a major petroleum storage and trading hub in the Gulf of Oman. Its position outside the Strait of Hormuz gives it a strategic advantage — vessels transiting between the Indian Ocean and Arabian Gulf can bunker and take on cargo at Fujairah without entering the Strait.
            </p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
              Energosoyuz's Fujairah storage hub serves buyers across the UAE, Middle East, and Asian markets. Our Fujairah desk can discuss product availability, delivery terms, and bunkering logistics for vessels operating in the region.
            </p>

            <div style={{ padding: '20px 24px', background: '#fff8e7', borderLeft: `4px solid ${AMBER}`, marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', color: '#8a6000', marginBottom: '6px' }}>Product Availability</div>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#8a6000', lineHeight: 1.7, margin: 0 }}>
                Contact our Fujairah desk to confirm current product availability, delivery terms, and minimum order quantities for this location.
              </p>
            </div>

            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.04, boxShadow: `0 6px 20px rgba(246,159,0,0.3)` }}
              whileTap={{ scale: 0.97 }}
              style={{ background: AMBER, color: '#0a0a0a', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 26px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Enquire About Fujairah Supply →
            </motion.button>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'World-Class Bunkering Port', desc: 'Fujairah is one of the world\'s top two bunkering hubs by volume, making it a critical supply point for vessels transiting between East and West.' },
                { title: 'Outside the Strait of Hormuz', desc: 'Fujairah\'s position on the Gulf of Oman enables supply operations that bypass Strait of Hormuz congestion — a strategic advantage for buyers and vessel operators.' },
                { title: 'Gateway to Middle East & Asia', desc: 'Fujairah bridges Middle Eastern supply with demand from South Asia, East Africa, and beyond. An essential hub for petroleum mandates with Asian client bases.' },
                { title: 'UAE Free Zone Access', desc: 'Operations in and around Fujairah benefit from the UAE\'s open trade environment, free zone structures, and robust financial and logistics infrastructure.' },
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
                Products Available — <span style={{ color: TEAL }}>Fujairah</span>
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
              { name: 'Jurong', sub: 'Singapore', path: '/ports/jurong' },
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
