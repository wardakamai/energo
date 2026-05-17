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
  '@graph': [
    {
      '@type': 'Place',
      name: 'Energosoyuz — Rotterdam Petroleum Storage',
      description: 'Petroleum storage and supply hub at the Port of Rotterdam. EN590 ultra-low sulfur diesel and Jet A1 aviation turbine fuel available on CIF Rotterdam terms.',
      geo: { '@type': 'GeoCoordinates', latitude: '51.9225', longitude: '4.4792' },
      address: { '@type': 'PostalAddress', addressLocality: 'Rotterdam', addressCountry: 'NL' },
      containedInPlace: { '@type': 'Port', name: 'Port of Rotterdam' },
    },
    {
      '@type': 'Service',
      name: 'EN590 Diesel Supply CIF Rotterdam',
      description: 'EN590 ultra-low sulfur diesel supply on CIF Rotterdam terms from Energosoyuz petroleum mandate.',
      provider: { '@id': 'https://www.energosoyuz.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Port of Rotterdam, Netherlands' },
    },
    {
      '@type': 'Service',
      name: 'Jet A1 Aviation Fuel Supply CIF Rotterdam',
      description: 'Jet A1 aviation turbine fuel supply on CIF Rotterdam terms from Energosoyuz petroleum mandate.',
      provider: { '@id': 'https://www.energosoyuz.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Port of Rotterdam, Netherlands' },
    },
  ],
};

export default function RotterdamPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Oil Storage Rotterdam | EN590 & Jet A1 CIF Rotterdam | Energosoyuz"
        description="Energosoyuz operates petroleum storage at the Port of Rotterdam. EN590 diesel and Jet A1 aviation fuel available CIF Rotterdam. Contact our Rotterdam supply desk."
        canonical="https://www.energosoyuz.com/ports/rotterdam"
        jsonLd={placeSchema}
      />

      {/* ── PAGE HERO ── */}
      <div style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.05) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${AMBER}, ${TEAL}, transparent)` }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <nav style={{ marginBottom: '24px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: '#888', letterSpacing: '0.06em' }}>Port Locations</span>
            <span style={{ color: '#555', fontSize: '0.75rem' }}>›</span>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: '#aaa', letterSpacing: '0.06em' }}>Rotterdam</span>
          </nav>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>Port Storage · Netherlands</span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, maxWidth: '720px' }}>
            Oil Storage Rotterdam —{' '}
            <span style={{ color: AMBER }}>CIF Rotterdam Petroleum Supply</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '20px', maxWidth: '640px', lineHeight: 1.8 }}>
            Energosoyuz operates petroleum storage at the Port of Rotterdam, Europe's largest port and a global petroleum trading hub. We supply EN590 ultra-low sulfur diesel and Jet A1 aviation turbine fuel on confirmed CIF Rotterdam terms, serving European buyers, traders, and petroleum mandates.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px' }}>
            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
              whileTap={{ scale: 0.97 }}
              style={{ background: AMBER, color: '#0a0a0a', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 28px', display: 'inline-flex', alignItems: 'center', gap: '6px', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
              Contact Rotterdam Desk →
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── ROTTERDAM HUB OVERVIEW ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
          <FadeIn>
            <div className="section-label">Rotterdam Operations</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', color: '#111', lineHeight: 1.1, marginBottom: '16px' }}>
              Rotterdam as a Global <span style={{ color: TEAL }}>Petroleum Hub</span>
            </h2>
            <div style={{ width: '50px', height: '3px', background: AMBER, marginBottom: '24px' }} />
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '18px' }}>
              The Port of Rotterdam is Europe's largest port and one of the world's busiest petroleum trading and storage hubs. Rotterdam handles over 100 million tonnes of petroleum products annually and is the reference pricing point for European oil markets — with Platts and ICIS Rotterdam assessments used globally as pricing benchmarks.
            </p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
              Energosoyuz maintains petroleum storage capacity at Rotterdam, enabling us to execute <strong>EN590 diesel CIF Rotterdam</strong> and <strong>Jet A1 aviation fuel CIF Rotterdam</strong> transactions with fast turnaround for confirmed buyers. Our Rotterdam desk is available to discuss term supply agreements, spot cargoes, and CIF delivery logistics.
            </p>
            <div style={{ padding: '24px', background: '#f9f9f9', borderLeft: `4px solid ${AMBER}` }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111', marginBottom: '8px' }}>Rotterdam Supply Terms</div>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#666', lineHeight: 1.7, margin: 0 }}>
                CIF (Cost, Insurance, Freight) — Rotterdam is the confirmed delivery point. Buyers receive product at Rotterdam with all freight and insurance costs covered by Energosoyuz. FOB terms also available upon request.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e8e8e8' }}>
              {[
                { stat: 'Europe\'s #1', label: 'Largest Port by Volume' },
                { stat: 'CIF', label: 'Rotterdam Delivery Terms' },
                { stat: 'EN590', label: 'ULSD Supply Confirmed' },
                { stat: 'Jet A1', label: 'Aviation Fuel Supply Confirmed' },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ background: `${TEAL}08` }} style={{ background: '#fff', padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.8rem', color: AMBER, lineHeight: 1, marginBottom: '8px' }}>{item.stat}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.78rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PRODUCTS AT ROTTERDAM ── */}
      <section style={{ background: '#f5f5f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, marginBottom: '12px' }}>Available from Rotterdam</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', textTransform: 'uppercase', color: '#111', letterSpacing: '0.04em' }}>
                Products Available <span style={{ color: TEAL }}>CIF Rotterdam</span>
              </h2>
              <div style={{ width: '50px', height: '3px', background: AMBER, margin: '16px auto 0' }} />
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              {
                name: 'EN590 Diesel — CIF Rotterdam',
                path: '/products/en590',
                desc: 'Ultra-low sulfur diesel compliant with European standard EN590:2022. Maximum 10 mg/kg sulfur. Supplied CIF Rotterdam for road transport, industrial, and wholesale buyers across Europe.',
                specs: ['EN590:2022 compliant', 'Max 10 mg/kg sulfur (ULSD)', 'Cetane min 51', 'CIF Rotterdam confirmed'],
                color: TEAL,
              },
              {
                name: 'Jet A1 Aviation Fuel — CIF Rotterdam',
                path: '/products/jet-a1',
                desc: 'Jet A1 aviation turbine fuel compliant with ASTM D1655 and DEF STAN 91-091. Supplied CIF Rotterdam for airlines, cargo operators, and aviation fuel traders.',
                specs: ['ASTM D1655 / DEF STAN 91-091', 'Flash point min 38°C', 'Freeze point max −47°C', 'CIF Rotterdam confirmed'],
                color: AMBER,
              },
            ].map((product, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
                  <div style={{ height: '4px', background: product.color }} />
                  <div style={{ padding: '36px' }}>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.25rem', textTransform: 'uppercase', color: '#111', lineHeight: 1.1, marginBottom: '14px' }}>
                      {product.name}
                    </h3>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.9rem', color: '#555', lineHeight: 1.8, marginBottom: '24px' }}>
                      {product.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                      {product.specs.map((spec, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#333' }}>
                          <span style={{ width: '16px', height: '16px', background: AMBER, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="8" height="6" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <Link to={product.path}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.82rem', color: AMBER, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      View full specifications →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER PORT LOCATIONS ── */}
      <section style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.04) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, marginBottom: '12px' }}>Global Presence</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', color: '#fff' }}>
                Other <span style={{ color: AMBER }}>Port Storage Locations</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[
              { name: 'Houston', sub: 'United States', path: '/ports/houston' },
              { name: 'Fujairah', sub: 'UAE', path: '/ports/fujairah' },
              { name: 'Jurong', sub: 'Singapore', path: '/ports/jurong' },
            ].map((port, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}>
                <Link to={port.path} style={{ display: 'block', padding: '32px 28px', border: '1px solid rgba(246,159,0,0.2)', textDecoration: 'none', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `rgba(246,159,0,0.6)`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `rgba(246,159,0,0.2)`; }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.5rem', color: '#fff', textTransform: 'uppercase', marginBottom: '4px' }}>{port.name}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.78rem', color: '#888', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{port.sub}</div>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: AMBER, letterSpacing: '0.08em', textTransform: 'uppercase' }}>View location →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(90deg, ${AMBER} 0%, #ffb31a 50%, ${AMBER} 100%)`, padding: '60px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px', position: 'relative', zIndex: 1 }}>
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a' }}>
              Enquire About Rotterdam Supply
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#1a1a1a', marginTop: '8px' }}>
              Contact our Rotterdam desk for EN590 or Jet A1 CIF pricing, volumes, and delivery schedules.
            </p>
          </div>
          <motion.button onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05, background: '#1a1a1a' }}
            whileTap={{ scale: 0.97 }}
            style={{ background: '#0a0a0a', color: AMBER, fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 32px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Contact Rotterdam Desk →
          </motion.button>
        </div>
      </section>
    </>
  );
}
