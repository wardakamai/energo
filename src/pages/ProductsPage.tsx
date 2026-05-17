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
    <motion.div ref={ref} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

const productsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Petroleum Products — EN590, Jet A1, VFO D6 | Energosoyuz',
  description: 'Energosoyuz supplies EN590 ultra-low sulfur diesel, Jet A1 aviation fuel, and Virgin Fuel Oil D6. Verified petroleum mandate with global storage.',
  url: 'https://www.energosoyuz.com/products',
};

const productCards = [
  {
    name: 'EN590 Diesel Fuel',
    fullName: 'Ultra-Low Sulfur Diesel',
    path: '/products/en590',
    color: TEAL,
    standard: 'EN 590:2022',
    tagline: 'European-standard ULSD for road, industrial, and export mandates. Max 10 mg/kg sulfur. CIF Rotterdam available.',
    highlights: ['Sulfur ≤ 10 mg/kg (ULSD)', 'Cetane min 51', 'CIF Rotterdam delivery', 'EN 590:2022 certified'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="52" height="52">
        <rect x="18" y="32" width="44" height="26" rx="13" stroke={TEAL} strokeWidth="2" fill={`${TEAL}15`}/>
        <circle cx="58" cy="45" r="8" stroke={TEAL} strokeWidth="2" fill="none"/>
        <path d="M18 45 L28 45" stroke={TEAL} strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 32 L22 20 L14 20" stroke={TEAL} strokeWidth="2" strokeLinecap="round"/>
        <path d="M36 32 L32 20" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Jet A1 Aviation Fuel',
    fullName: 'Aviation Turbine Fuel',
    path: '/products/jet-a1',
    color: AMBER,
    standard: 'ASTM D1655 / DEF STAN 91-091',
    tagline: 'Premium kerosene-based aviation fuel meeting ASTM D1655 and DEF STAN 91-091. Flash point min 38°C. CIF Rotterdam available.',
    highlights: ['Flash point min 38°C', 'Freeze point max −47°C', 'CIF Rotterdam delivery', 'ASTM D1655 certified'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="52" height="52">
        <path d="M40 12 L60 40 L50 40 L54 68 L40 56 L26 68 L30 40 L20 40 Z" stroke={AMBER} strokeWidth="2" fill={`${AMBER}15`} strokeLinejoin="round"/>
        <path d="M30 30 L20 22 M50 30 L60 22" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="40" cy="40" r="4" fill={AMBER}/>
      </svg>
    ),
  },
  {
    name: 'Virgin Fuel Oil D6',
    fullName: 'Heavy Residual Fuel Oil (VFO / D6)',
    path: '/products/vfo-d6',
    color: '#c0392b',
    standard: 'ISO 8217 / ASTM D396',
    tagline: 'High-viscosity residual fuel oil for industrial boilers, power generation, and marine bunker use. Also traded as VFO.',
    highlights: ['ISO 8217 / ASTM D396', 'Industrial & marine use', 'Bulk supply available', 'VFO and D6 same product'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="52" height="52">
        <path d="M20 28 C20 28 24 18 40 18 C56 18 60 28 60 28 L60 56 C60 62 52 68 40 68 C28 68 20 62 20 56 Z" stroke="#c0392b" strokeWidth="2" fill="rgba(192,57,43,0.12)"/>
        <path d="M28 40 C28 40 32 36 40 36 C48 36 52 40 52 40" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <circle cx="40" cy="52" r="6" stroke="#c0392b" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
];

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Petroleum Products | EN590, Jet A1 & VFO D6 | Energosoyuz"
        description="Energosoyuz supplies EN590 diesel, Jet A1 aviation fuel, and Virgin Fuel Oil D6. Verified petroleum mandate with global storage at Rotterdam, Houston, Fujairah and Jurong."
        canonical="https://www.energosoyuz.com/products"
        jsonLd={productsSchema}
      />

      {/* ── PAGE HERO ── */}
      <div style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.05) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', right: '-100px', top: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: `radial-gradient(circle, ${AMBER}44 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${AMBER}, ${TEAL}, transparent)` }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>Our Products</span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1 }}>
            Petroleum <span style={{ color: AMBER }}>Products</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '16px', maxWidth: '580px', lineHeight: 1.7 }}>
            Energosoyuz supplies three internationally certified petroleum products — EN590 diesel, Jet A1 aviation fuel, and Virgin Fuel Oil D6 — from confirmed storage locations in Rotterdam, Houston, Fujairah, and Jurong.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '36px' }}>
            {productCards.map((p) => (
              <Link key={p.path} to={p.path}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 18px', border: `1px solid rgba(246,159,0,0.35)`, color: AMBER, fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = AMBER; (e.currentTarget as HTMLElement).style.color = '#0a0a0a'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = AMBER; }}
              >
                {p.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── PRODUCT CARDS ── */}
      <section style={{ background: '#f5f5f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {productCards.map((product, i) => (
              <FadeIn key={product.path} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(0,0,0,0.14)' }}
                  style={{ borderRadius: '2px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Card header */}
                  <div style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL}dd 100%)`, padding: '36px 36px 28px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', right: '24px', bottom: '-10px', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '6rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1, userSelect: 'none' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', position: 'relative', zIndex: 1 }}>
                      <div style={{ flexShrink: 0 }}>{product.icon}</div>
                      <div>
                        <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: product.color, marginBottom: '6px' }}>
                          {product.fullName}
                        </div>
                        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1, letterSpacing: '0.03em' }}>
                          {product.name}
                        </h3>
                        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.82rem', color: '#aaa', marginTop: '10px', lineHeight: 1.6, maxWidth: '280px' }}>
                          {product.tagline}
                        </p>
                      </div>
                    </div>
                    <div style={{ marginTop: '20px', position: 'relative', zIndex: 1 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(246,159,0,0.12)', border: '1px solid rgba(246,159,0,0.25)', padding: '4px 12px', fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.68rem', color: AMBER, letterSpacing: '0.05em' }}>
                        <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                          <path d="M8 2L9.8 6H14L10.5 8.8L11.8 13L8 10.5L4.2 13L5.5 8.8L2 6H6.2Z" stroke={AMBER} strokeWidth="1" fill="none"/>
                        </svg>
                        {product.standard}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div style={{ padding: '28px 36px 36px', background: '#fff', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flex: 1 }}>
                      {product.highlights.map((h, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#333', fontWeight: 500 }}>
                          <span style={{ width: '18px', height: '18px', background: AMBER, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {h}
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <Link to={product.path}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: AMBER, color: '#0a0a0a', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 24px', textDecoration: 'none', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                        Full Specifications →
                      </Link>
                      <motion.button onClick={() => navigate('/contact')}
                        whileHover={{ scale: 1.04, borderColor: TEAL, color: TEAL }}
                        whileTap={{ scale: 0.97 }}
                        style={{ background: 'transparent', color: '#555', border: '1.5px solid #ddd', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '11px 20px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}>
                        Request Quote
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OUR PRODUCTS ── */}
      <section style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.04) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-label" style={{ textAlign: 'center' }}>Quality Assurance</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.04em' }}>
                Why Source From <span style={{ color: AMBER }}>Energosoyuz</span>
              </h2>
              <div className="yellow-bar-center" style={{ marginTop: '16px' }} />
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🔬', title: 'Lab Certified', desc: 'All products undergo independent third-party laboratory testing and certification before delivery.' },
              { icon: '📜', title: 'Full Documentation', desc: 'Certificate of Quality, SDS, Bill of Lading, and inspection reports provided with every shipment.' },
              { icon: '🚢', title: 'Global Storage', desc: 'Confirmed petroleum storage at Rotterdam, Houston, Fujairah, and Jurong — four of the world\'s major supply hubs.' },
              { icon: '⚡', title: 'Verified Mandate', desc: 'Buyers transact directly with the principal mandate — no broker layers, cleaner deal execution.' },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, background: 'rgba(246,159,0,0.06)' }}
                style={{ padding: '32px 24px', border: '1px solid rgba(246,159,0,0.15)', background: 'rgba(255,255,255,0.03)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '16px' }}>{item.icon}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '10px' }}>
                  {item.title}
                </div>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.84rem', color: '#999', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORAGE LOCATIONS ── */}
      <section style={{ background: '#fff', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, marginBottom: '10px' }}>Storage Network</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', color: '#111' }}>
                Products Available At — <span style={{ color: TEAL }}>Four Global Hubs</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Rotterdam', sub: 'Netherlands · Europe', path: '/ports/rotterdam' },
              { name: 'Houston', sub: 'United States · Americas', path: '/ports/houston' },
              { name: 'Fujairah', sub: 'UAE · Middle East', path: '/ports/fujairah' },
              { name: 'Jurong', sub: 'Singapore · Asia-Pacific', path: '/ports/jurong' },
            ].map((port, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link to={port.path}
                  style={{ display: 'block', padding: '28px 24px', border: `1px solid #e0e0e0`, textDecoration: 'none', borderTop: `3px solid ${i % 2 === 0 ? AMBER : TEAL}`, transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.4rem', color: '#111', textTransform: 'uppercase', marginBottom: '4px' }}>{port.name}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.78rem', color: '#888', marginBottom: '14px' }}>{port.sub}</div>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', color: AMBER, letterSpacing: '0.08em', textTransform: 'uppercase' }}>View Location →</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(90deg, ${AMBER} 0%, #ffb31a 50%, ${AMBER} 100%)`, padding: '60px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a' }}>
                Interested in Our Products?
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#1a1a1a', marginTop: '8px' }}>
                Contact us for pricing, availability, and technical documentation.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <motion.button onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, background: '#1a1a1a' }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0a0a0a', color: AMBER, fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 32px', border: 'none', cursor: 'pointer' }}>
              Request a Quote →
            </motion.button>
            <motion.button onClick={() => navigate('/services')}
              whileHover={{ scale: 1.05, background: 'rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#0a0a0a', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '13px 28px', border: '2px solid rgba(0,0,0,0.25)', cursor: 'pointer' }}>
              Our Services
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
