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
  name: 'Energosoyuz — Houston Petroleum Storage',
  description: 'Petroleum storage and supply hub at the Port of Houston, Texas. Bulk fuel supply for North American buyers.',
  geo: { '@type': 'GeoCoordinates', latitude: '29.7285', longitude: '-95.0183' },
  address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
  containedInPlace: { '@type': 'Port', name: 'Port of Houston' },
};

export default function HoustonPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Fuel Storage Houston | Petroleum Supply Port of Houston | Energosoyuz"
        description="Energosoyuz operates petroleum storage at the Port of Houston. Bulk fuel supply for US and North American buyers. Contact our Houston supply desk."
        canonical="https://www.energosoyuz.com/ports/houston"
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
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: '#aaa' }}>Houston</span>
          </nav>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>Port Storage · United States</span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, maxWidth: '720px' }}>
            Fuel Storage Houston —{' '}
            <span style={{ color: AMBER }}>Petroleum Supply Port of Houston</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '20px', maxWidth: '640px', lineHeight: 1.8 }}>
            Energosoyuz operates petroleum storage at the Port of Houston, the United States' leading energy export hub and a principal node in the Gulf Coast refining complex. Our Houston presence enables bulk petroleum supply for North American buyers, traders, and downstream distributors.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ marginTop: '36px' }}>
            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
              whileTap={{ scale: 0.97 }}
              style={{ background: AMBER, color: '#0a0a0a', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 28px', display: 'inline-flex', alignItems: 'center', gap: '6px', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
              Contact Houston Desk →
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── HOUSTON HUB ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
          <FadeIn>
            <div className="section-label">Houston Operations</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', color: '#111', lineHeight: 1.1, marginBottom: '16px' }}>
              Houston as a <span style={{ color: TEAL }}>Petroleum Supply Hub</span>
            </h2>
            <div style={{ width: '50px', height: '3px', background: AMBER, marginBottom: '24px' }} />
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '18px' }}>
              The Port of Houston is the largest US port by foreign tonnage and sits at the centre of the US Gulf Coast refining complex — the largest refining concentration in the world. Houston is both a major import and export gateway for crude oil and refined petroleum products, making it an essential point of presence for any global petroleum mandate.
            </p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
              Energosoyuz's Houston storage hub supports bulk petroleum supply to US-based buyers and the broader North American market. Our Houston desk can discuss delivery terms, product specifications, and supply schedules.
            </p>

            {/* Placeholder note */}
            <div style={{ padding: '20px 24px', background: '#fff8e7', borderLeft: `4px solid ${AMBER}`, marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', color: '#8a6000', marginBottom: '6px' }}>Product Availability</div>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#8a6000', lineHeight: 1.7, margin: 0 }}>
                Contact our Houston desk to confirm current product availability, delivery terms, and minimum order quantities for this location.
              </p>
            </div>

            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.04, boxShadow: `0 6px 20px rgba(246,159,0,0.3)` }}
              whileTap={{ scale: 0.97 }}
              style={{ background: AMBER, color: '#0a0a0a', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 26px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Enquire About Houston Supply →
            </motion.button>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'US Gulf Coast Location', desc: 'Situated within the world\'s largest refining concentration. Access to the full range of refined petroleum products from Gulf Coast refiners.' },
                { title: 'North American Reach', desc: 'Houston\'s pipeline and marine infrastructure enables distribution throughout the United States and onward to Latin American markets.' },
                { title: 'Major Energy Export Hub', desc: 'The Houston Ship Channel handles significant volumes of crude oil and petroleum product exports, connecting US production to global buyers.' },
                { title: 'Verified Mandate Supply', desc: 'Energosoyuz supplies as a direct mandate — buyers transact with the principal, not a broker, ensuring cleaner deal execution.' },
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
                Products Available — <span style={{ color: TEAL }}>Houston</span>
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
              { name: 'Fujairah', sub: 'UAE', path: '/ports/fujairah' },
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
