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

const vfoSpecs = [
  { key: 'Viscosity @ 50°C', value: '180–380 cSt' },
  { key: 'Flash Point', value: 'min 60°C' },
  { key: 'Sulfur Content', value: 'max 3.5% mass' },
  { key: 'Pour Point', value: 'max +30°C' },
  { key: 'Density @ 15°C', value: 'max 991 kg/m³' },
  { key: 'Water Content', value: 'max 0.5% volume' },
  { key: 'Ash Content', value: 'max 0.10% mass' },
  { key: 'Standard', value: 'ISO 8217 / ASTM D396' },
];

const d6Specs = [
  { key: 'Viscosity @ 40°C', value: '55–65 cSt' },
  { key: 'Flash Point', value: 'min 55°C' },
  { key: 'Sulfur Content', value: 'max 2.0% mass' },
  { key: 'API Gravity', value: '26–45°' },
  { key: 'Pour Point', value: 'max −6°C' },
  { key: 'Water & Sediment', value: 'max 0.50% volume' },
  { key: 'Carbon Residue', value: 'max 0.35% mass' },
  { key: 'Standard', value: 'ASTM D396 / VFO Grade D6' },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Virgin Fuel Oil D6 (VFO)',
  description: 'Virgin Fuel Oil D6 — heavy residual fuel oil for industrial boilers, power generation, and marine bunker use. Compliant with ISO 8217 / ASTM D396. Supplied by verified petroleum mandate Energosoyuz Tsentralnaja Azija LLP.',
  brand: { '@type': 'Organization', '@id': 'https://www.energosoyuz.com/#organization' },
  category: 'Residual Fuel Oil',
  material: 'Heavy Residual Fuel Oil',
  offers: {
    '@type': 'Offer',
    seller: { '@id': 'https://www.energosoyuz.com/#organization' },
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    description: 'Price on application — contact for spot and term pricing.',
  },
};

export default function VFOPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Virgin Fuel Oil D6 Supplier | VFO Bulk Supply | Energosoyuz"
        description="Buy Virgin Fuel Oil D6 (VFO) from a direct mandate supplier. Bulk heavy residual fuel oil for industrial boilers, power generation and marine use. ISO 8217 / ASTM D396."
        canonical="https://www.energosoyuz.com/products/vfo-d6"
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
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.75rem', color: '#aaa', letterSpacing: '0.06em' }}>Virgin Fuel Oil D6</span>
          </nav>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>Residual Fuel Oil Supplier</span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, maxWidth: '700px' }}>
            Virgin Fuel Oil D6 Supplier —{' '}
            <span style={{ color: AMBER }}>Heavy Residual Fuel</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '20px', maxWidth: '640px', lineHeight: 1.8 }}>
            Energosoyuz supplies Virgin Fuel Oil (VFO) — also designated Grade D6 — a high-viscosity heavy residual fuel used in industrial boilers, power generation plants, and marine propulsion systems. As a direct VFO D6 mandate, we offer bulk supply with full documentation. ISO 8217 / ASTM D396 compliant.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px' }}>
            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
              whileTap={{ scale: 0.97 }}
              style={{ background: AMBER, color: '#0a0a0a', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 28px', display: 'inline-flex', alignItems: 'center', gap: '6px', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
              Request VFO D6 Quote →
            </motion.button>
            <Link to="/products"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 22px', border: `1px solid rgba(246,159,0,0.4)`, color: AMBER, fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase' }}>
              All Products →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── PRODUCT EXPLAINER ── */}
      <section style={{ background: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ maxWidth: '780px', padding: '36px', background: '#f9f9f9', borderLeft: `4px solid ${AMBER}` }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: AMBER, marginBottom: '10px' }}>Product Note: VFO = D6</div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.92rem', color: '#555', lineHeight: 1.8 }}>
              <strong>Virgin Fuel Oil (VFO)</strong> and <strong>Grade D6</strong> refer to the same heavy residual fuel product. "VFO" is the trade designation commonly used in international petroleum markets; "D6" (or ASTM D396 Grade D6) is the technical grading under American standards. Both terms describe the same high-viscosity residual fuel oil derived directly from crude oil distillation — not reprocessed or blended with waste oil. Energosoyuz supplies this product under both designations.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPECS ── */}
      <section style={{ background: '#f5f5f5', padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          <FadeIn>
            <div style={{ background: '#fff', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '3px', height: '28px', background: AMBER }} />
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>
                  Virgin Fuel Oil (VFO) Specifications
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {vfoSpecs.map((s, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '11px 0', borderBottom: i < vfoSpecs.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#666', fontWeight: 500 }}>{s.key}</span>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#111', fontWeight: 700, textAlign: 'right' }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ background: '#fff', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '3px', height: '28px', background: TEAL }} />
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>
                  D6 Residual Fuel Oil Specifications
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {d6Specs.map((s, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '11px 0', borderBottom: i < d6Specs.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#666', fontWeight: 500 }}>{s.key}</span>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#111', fontWeight: 700, textAlign: 'right' }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.04) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, marginBottom: '12px' }}>Use Cases</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.04em' }}>
                VFO D6 <span style={{ color: AMBER }}>Applications</span>
              </h2>
              <div style={{ width: '50px', height: '3px', background: AMBER, margin: '16px auto 0' }} />
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Industrial Boilers', desc: 'VFO is widely used as boiler fuel in industrial facilities — cement plants, steel mills, and manufacturing operations requiring high-output thermal energy.' },
              { title: 'Power Generation', desc: 'D6 fuel oil is used in heavy-duty power generation turbines and diesel generators at remote locations and power plants where pipeline gas is unavailable.' },
              { title: 'Marine Bunker Fuel', desc: 'Residual fuel oil serves as bunker fuel for large marine vessels — bulk carriers, tankers, and cargo ships — operating on heavy fuel oil propulsion systems.' },
              { title: 'Wholesale Trading', desc: 'VFO D6 is actively traded in commodity markets. Energosoyuz supplies bulk cargoes to petroleum traders, fuel oil blenders, and wholesale distributors.' },
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

      {/* ── STORAGE LOCATIONS ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ marginBottom: '48px' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, marginBottom: '10px' }}>Supply Points</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', color: '#111', lineHeight: 1.1 }}>
                VFO D6 — <span style={{ color: TEAL }}>Global Storage Locations</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', background: '#e8e8e8' }}>
            {[
              { name: 'Rotterdam', sub: 'Netherlands — Port of Rotterdam', path: '/ports/rotterdam' },
              { name: 'Houston', sub: 'United States — Port of Houston', path: '/ports/houston' },
              { name: 'Fujairah', sub: 'UAE — Middle East bunkering hub', path: '/ports/fujairah' },
              { name: 'Jurong', sub: 'Singapore — Asia-Pacific hub', path: '/ports/jurong' },
            ].map((port, i) => (
              <motion.div key={i} whileHover={{ y: -3, boxShadow: `0 8px 24px rgba(0,0,0,0.1)` }} style={{ background: '#fff' }}>
                <Link to={port.path} style={{ display: 'block', padding: '32px 28px', textDecoration: 'none' }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.3rem', color: '#111', textTransform: 'uppercase', marginBottom: '6px' }}>{port.name}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.8rem', color: '#888', marginBottom: '14px' }}>{port.sub}</div>
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
                { label: 'Jet A1 Aviation Fuel', path: '/products/jet-a1' },
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
              Ready to Source VFO or D6 Fuel Oil?
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#1a1a1a', marginTop: '8px' }}>
              Contact our desk for bulk pricing, availability, and delivery terms.
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
