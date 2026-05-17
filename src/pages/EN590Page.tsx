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
  { key: 'Cetane Number', value: 'min 51' },
  { key: 'Density @ 15°C', value: '820–845 kg/m³' },
  { key: 'Flash Point', value: 'min 55°C' },
  { key: 'Sulfur Content', value: 'max 10 mg/kg (ULSD)' },
  { key: 'Cold Filter Plugging Point', value: '−20°C to +5°C (by grade)' },
  { key: 'Viscosity @ 40°C', value: '2.0–4.5 mm²/s' },
  { key: 'Polycyclic Aromatics', value: 'max 8% mass' },
  { key: 'Standard', value: 'EN 590:2022' },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'EN590 Ultra-Low Sulfur Diesel',
  description: 'EN590 ultra-low sulfur diesel compliant with European standard EN590:2022. Available CIF Rotterdam and globally from verified petroleum mandate Energosoyuz Tsentralnaja Azija LLP.',
  brand: { '@type': 'Organization', '@id': 'https://www.energosoyuz.com/#organization' },
  category: 'Petroleum Fuel',
  material: 'Ultra-Low Sulfur Diesel Fuel',
  offers: {
    '@type': 'Offer',
    seller: { '@id': 'https://www.energosoyuz.com/#organization' },
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    description: 'Price on application — contact for spot and term pricing. CIF Rotterdam and global delivery available.',
  },
};

export default function EN590Page() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="EN590 Diesel Supplier | ULSD CIF Rotterdam | Energosoyuz"
        description="Buy EN590 ultra-low sulfur diesel from a verified mandate supplier. Bulk ULSD available CIF Rotterdam and globally. European standard EN590:2022. Request a quote."
        canonical="https://www.energosoyuz.com/products/en590"
        jsonLd={productSchema}
      />

      {/* ── PAGE HERO ── */}
      <div style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.05) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${AMBER}, ${TEAL}, transparent)` }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <nav style={{ marginBottom: '24px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: AMBER, textDecoration: 'none', letterSpacing: '0.06em' }}>Products</Link>
            <span style={{ color: '#555', fontSize: '0.75rem' }}>›</span>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: '#aaa', letterSpacing: '0.06em' }}>EN590 Diesel</span>
          </nav>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>Diesel Fuel Supplier</span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, maxWidth: '700px' }}>
            EN590 Diesel Supplier —{' '}
            <span style={{ color: AMBER }}>Ultra-Low Sulfur Diesel</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '20px', maxWidth: '620px', lineHeight: 1.8 }}>
            Energosoyuz is a verified EN590 diesel supplier and petroleum mandate offering bulk ultra-low sulfur diesel for road transport, industrial, and wholesale buyers. EN590 CIF Rotterdam and global delivery available. European standard EN590:2022 — max 10 mg/kg sulfur.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px' }}>
            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
              whileTap={{ scale: 0.97 }}
              style={{ background: AMBER, color: '#0a0a0a', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 28px', display: 'inline-flex', alignItems: 'center', gap: '6px', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
              Request EN590 Quote →
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

          {/* Specs Table */}
          <FadeIn>
            <div style={{ background: '#fff', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '3px', height: '28px', background: TEAL }} />
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>
                  EN590 Diesel Specifications
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

          {/* Delivery Terms */}
          <FadeIn delay={0.1}>
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', textTransform: 'uppercase', color: '#111', lineHeight: 1.1, marginBottom: '20px' }}>
                EN590 Delivery Terms & <span style={{ color: TEAL }}>Rotterdam Supply</span>
              </h2>
              <div style={{ width: '50px', height: '3px', background: AMBER, marginBottom: '24px' }} />
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '20px' }}>
                As a direct EN590 diesel mandate, Energosoyuz offers bulk ultra-low sulfur diesel on confirmed CIF (Cost, Insurance and Freight) and FOB terms. Our Rotterdam storage hub enables efficient delivery into European and Atlantic Basin markets. Minimum order quantities and delivery schedules are confirmed at the time of inquiry.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: '28px' }}>
                All EN590 diesel supplied by Energosoyuz is compliant with European standard EN590:2022 and delivered with a full documentation package including Certificate of Quality, Safety Data Sheet (SDS), and independent inspection reports.
              </p>
              {[
                { label: 'CIF Rotterdam', desc: 'Cost, Insurance, Freight delivered to Port of Rotterdam' },
                { label: 'FOB Terms Available', desc: 'Buyer arranges freight from confirmed loading port' },
                { label: 'Full Documentation', desc: 'CoQ · SDS · Third-party inspection on every cargo' },
                { label: 'Bulk & Spot Supply', desc: 'Term contracts and spot cargo both available' },
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

      {/* ── WHY ENERGOSOYUZ EN590 ── */}
      <section style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.04) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, marginBottom: '12px' }}>Why Choose Us</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.04em' }}>
                Why Source EN590 Diesel from <span style={{ color: AMBER }}>Energosoyuz</span>
              </h2>
              <div style={{ width: '50px', height: '3px', background: AMBER, margin: '16px auto 0' }} />
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Verified Mandate', desc: 'We are a direct petroleum mandate — not a broker. Buyers deal with the principal, eliminating intermediary layers and improving execution speed.' },
              { title: 'Rotterdam Storage', desc: 'Confirmed petroleum storage at the Port of Rotterdam enables true CIF Rotterdam supply of EN590 diesel into Europe and Atlantic Basin markets.' },
              { title: 'ULSD Certified', desc: 'EN590:2022 compliant ultra-low sulfur diesel (max 10 mg/kg sulfur) with independent SGS / Bureau Veritas inspection on every cargo.' },
              { title: 'Bulk & Term Contracts', desc: 'Competitive pricing for bulk ULSD, spot cargoes, and term supply agreements. Pricing referenced to Platts / ICIS markers.' },
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
                EN590 Diesel — <span style={{ color: TEAL }}>Global Storage Locations</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', background: '#e8e8e8' }}>
            {[
              { name: 'Rotterdam', sub: 'Netherlands — CIF Rotterdam confirmed', path: '/ports/rotterdam', primary: true },
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

          {/* Cross-links to other products */}
          <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid #eee' }}>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '20px' }}>Other Products</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                { label: 'Jet A1 Aviation Fuel', path: '/products/jet-a1' },
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
              Ready to Source EN590 Diesel?
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#1a1a1a', marginTop: '8px' }}>
              Contact our desk for spot pricing, term availability, and CIF Rotterdam details.
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
