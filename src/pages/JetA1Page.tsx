import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import SEOHead from '../components/SEOHead';

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

const specs = [
  { key: 'Flash Point', value: 'min 38°C' },
  { key: 'Freeze Point', value: 'max −47°C' },
  { key: 'Density @ 15°C', value: '775–840 kg/m³' },
  { key: 'Viscosity @ −20°C', value: 'max 8.0 mm²/s' },
  { key: 'Sulfur Content', value: 'max 0.30% mass' },
  { key: 'Smoke Point', value: 'min 25 mm' },
  { key: 'Thermal Stability (JFTOT)', value: '260°C' },
  { key: 'Standard', value: 'ASTM D1655 / DEF STAN 91-091' },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Jet A1 Aviation Turbine Fuel',
  description: 'Jet A1 aviation turbine fuel compliant with ASTM D1655 and DEF STAN 91-091. Available CIF Rotterdam and globally from verified aviation fuel mandate Energosoyuz Tsentralnaja Azija LLP.',
  brand: { '@type': 'Organization', '@id': 'https://www.energosoyuz.com/#organization' },
  category: 'Aviation Fuel',
  material: 'Jet A1 Aviation Kerosene',
  offers: {
    '@type': 'Offer',
    seller: { '@id': 'https://www.energosoyuz.com/#organization' },
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    description: 'Price on application — contact for spot and term pricing. CIF Rotterdam and global delivery available.',
  },
};

export default function JetA1Page() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Jet A1 Aviation Fuel Supplier | CIF Rotterdam | Energosoyuz"
        description="Energosoyuz is a verified Jet A1 aviation turbine fuel supplier. Bulk Jet A1 available CIF Rotterdam and globally. ASTM D1655 / DEF STAN 91-091. Request a quote."
        canonical="https://www.energosoyuz.com/products/jet-a1"
        jsonLd={productSchema}
      />

      {/* ── PAGE HERO ── */}
      <div style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.05) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${AMBER}, ${TEAL}, transparent)` }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />

        {/* Animated aviation icon */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', right: '-80px', top: '-80px', width: '440px', height: '440px', borderRadius: '50%', background: `radial-gradient(circle, ${AMBER}44 0%, transparent 70%)`, pointerEvents: 'none' }}
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <nav style={{ marginBottom: '24px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: AMBER, textDecoration: 'none', letterSpacing: '0.06em' }}>Products</Link>
            <span style={{ color: '#555', fontSize: '0.75rem' }}>›</span>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: '#aaa', letterSpacing: '0.06em' }}>Jet A1 Aviation Fuel</span>
          </nav>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>Aviation Fuel Supplier</span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, maxWidth: '700px' }}>
            Jet A1 Aviation Fuel Supplier —{' '}
            <span style={{ color: AMBER }}>Aviation Turbine Fuel</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '20px', maxWidth: '620px', lineHeight: 1.8 }}>
            Energosoyuz is a verified Jet A1 supplier and aviation fuel mandate. We supply bulk aviation turbine fuel for commercial airlines, cargo operators, and aviation fuel traders. Jet A1 CIF Rotterdam and global delivery available. Compliant with ASTM D1655 and DEF STAN 91-091.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px' }}>
            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
              whileTap={{ scale: 0.97 }}
              style={{ background: AMBER, color: '#0a0a0a', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 28px', display: 'inline-flex', alignItems: 'center', gap: '6px', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
              Request Jet A1 Quote →
            </motion.button>
            <Link to="/ports/rotterdam"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 22px', border: `1px solid rgba(246,159,0,0.4)`, color: AMBER, fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase' }}>
              Rotterdam Supply Hub →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── SPECS + DELIVERY ── */}
      <section style={{ background: '#f5f5f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
          <FadeIn>
            <div style={{ background: '#fff', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '3px', height: '28px', background: AMBER }} />
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>
                  Jet A1 Aviation Fuel Specifications
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {specs.map((s, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '11px 0', borderBottom: i < specs.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#666', fontWeight: 500 }}>{s.key}</span>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#111', fontWeight: 700, textAlign: 'right' }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', textTransform: 'uppercase', color: '#111', lineHeight: 1.1, marginBottom: '20px' }}>
                Jet A1 Delivery Terms & <span style={{ color: AMBER }}>Rotterdam Aviation Hub</span>
              </h2>
              <div style={{ width: '50px', height: '3px', background: AMBER, marginBottom: '24px' }} />
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '20px' }}>
                As a direct Jet A1 mandate, Energosoyuz supplies aviation turbine fuel on CIF and FOB terms. Our Rotterdam storage hub places Jet A1 at the heart of European aviation supply routes, enabling efficient delivery to airlines, fuel service companies (FBOs), and aviation fuel traders across Europe and the Atlantic Basin.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '28px' }}>
                Every Jet A1 cargo is delivered with a full documentation package: Certificate of Quality (CoQ), Safety Data Sheet (SDS), and independent third-party inspection report. Static dissipator additive (SDA) and antioxidant specifications confirmed on inquiry.
              </p>
              {[
                { label: 'CIF Rotterdam', desc: 'Jet A1 CIF Rotterdam — confirmed supply from Rotterdam storage' },
                { label: 'Global Delivery', desc: 'FOB and delivered terms available from multiple ports' },
                { label: 'ASTM D1655 / DEF STAN 91-091', desc: 'International aviation fuel standard compliance' },
                { label: 'Third-Party Inspection', desc: 'SGS / Bureau Veritas / Intertek on every cargo' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ x: -15, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ width: '20px', height: '20px', background: AMBER, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.9rem', color: '#111', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.82rem', color: '#666', marginTop: '2px' }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY ENERGOSOYUZ JET A1 ── */}
      <section style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.04) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, marginBottom: '12px' }}>Aviation Fuel Mandate</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.04em' }}>
                Why Source Jet A1 from <span style={{ color: AMBER }}>Energosoyuz</span>
              </h2>
              <div style={{ width: '50px', height: '3px', background: AMBER, margin: '16px auto 0' }} />
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Direct Aviation Mandate', desc: 'We are a verified Jet fuel mandate — not a broker. Eliminate intermediary markups and gain direct access to the supply principal.' },
              { title: 'Jet A1 CIF Rotterdam', desc: 'Confirmed Jet A1 aviation fuel supply on CIF Rotterdam terms. Rotterdam is Europe\'s primary aviation fuel import and distribution hub.' },
              { title: 'International Standards', desc: 'Fully compliant with ASTM D1655 and DEF STAN 91-091. Accepted for commercial airline operations globally.' },
              { title: 'Flexible Volumes', desc: 'Spot cargoes and term supply agreements for wholesale jet fuel buyers. Aviation fuel traders, airlines, and FBOs welcome.' },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, background: 'rgba(246,159,0,0.07)' }}
                style={{ padding: '32px 24px', border: '1px solid rgba(246,159,0,0.15)', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ width: '32px', height: '3px', background: AMBER, marginBottom: '18px' }} />
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '12px' }}>{item.title}</div>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.84rem', color: '#999', lineHeight: 1.75 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED STORAGE LOCATIONS ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ marginBottom: '48px' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, marginBottom: '10px' }}>Storage & Supply Points</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', color: '#111', lineHeight: 1.1 }}>
                Jet A1 Aviation Fuel — <span style={{ color: TEAL }}>Global Storage Locations</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', background: '#e8e8e8' }}>
            {[
              { name: 'Rotterdam', sub: 'Netherlands — Jet A1 CIF Rotterdam confirmed', path: '/ports/rotterdam', primary: true },
              { name: 'Houston', sub: 'United States — Port of Houston', path: '/ports/houston', primary: false },
              { name: 'Fujairah', sub: 'UAE — Middle East supply hub', path: '/ports/fujairah', primary: false },
              { name: 'Jurong', sub: 'Singapore — Asia-Pacific hub', path: '/ports/jurong', primary: false },
            ].map((port, i) => (
              <motion.div key={i} whileHover={{ y: -3, boxShadow: `0 8px 24px rgba(0,0,0,0.1)` }} style={{ background: '#fff', position: 'relative' }}>
                <Link to={port.path} style={{ display: 'block', padding: '32px 28px', textDecoration: 'none' }}>
                  {port.primary && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: AMBER }} />}
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.3rem', color: '#111', textTransform: 'uppercase', marginBottom: '6px' }}>{port.name}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.8rem', color: port.primary ? TEAL : '#888', marginBottom: '14px' }}>{port.sub}</div>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: AMBER, letterSpacing: '0.08em', textTransform: 'uppercase' }}>View location →</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid #eee' }}>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '20px' }}>Other Products</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                { label: 'EN590 Diesel Fuel', path: '/products/en590' },
                { label: 'Virgin Fuel Oil D6', path: '/products/vfo-d6' },
              ].map(p => (
                <Link key={p.path} to={p.path}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', border: `1px solid #ddd`, color: '#333', fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = AMBER; (e.currentTarget as HTMLElement).style.color = AMBER; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#ddd'; (e.currentTarget as HTMLElement).style.color = '#333'; }}>
                  {p.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(90deg, ${AMBER} 0%, #ffb31a 50%, ${AMBER} 100%)`, padding: '60px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px', position: 'relative', zIndex: 1 }}>
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a' }}>
              Ready to Source Jet A1 Aviation Fuel?
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#1a1a1a', marginTop: '8px' }}>
              Contact our aviation fuel desk for CIF Rotterdam pricing and term availability.
            </p>
          </div>
          <motion.button onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05, background: '#1a1a1a' }}
            whileTap={{ scale: 0.97 }}
            style={{ background: '#0a0a0a', color: AMBER, fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 32px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Request a Quote →
          </motion.button>
        </div>
      </section>
    </>
  );
}
