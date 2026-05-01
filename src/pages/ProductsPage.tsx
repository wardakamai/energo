import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface ProductsPageProps {
  setActivePage: (page: string) => void;
}

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

const products = [
  {
    id: 'jet-a',
    name: 'Jet A',
    fullName: 'Aviation Turbine Fuel',
    tagline: 'Premium aviation-grade kerosene for commercial and military aircraft.',
    color: AMBER,
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="56" height="56">
        <path d="M40 12 L60 40 L50 40 L54 68 L40 56 L26 68 L30 40 L20 40 Z" stroke={AMBER} strokeWidth="2" fill={`${AMBER}15`} strokeLinejoin="round"/>
        <path d="M30 30 L20 22 M50 30 L60 22" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="40" cy="40" r="4" fill={AMBER}/>
      </svg>
    ),
    specs: [
      { key: 'Flash Point', value: 'min 38°C' },
      { key: 'Freeze Point', value: 'max −47°C' },
      { key: 'Density @ 15°C', value: '775–840 kg/m³' },
      { key: 'Viscosity @ −20°C', value: 'max 8.0 mm²/s' },
      { key: 'Sulfur Content', value: 'max 0.30% mass' },
      { key: 'Smoke Point', value: 'min 25 mm' },
      { key: 'Thermal Stability (JFTOT)', value: '260°C' },
    ],
    standard: 'ASTM D1655 / DEF STAN 91-091',
  },
  {
    id: 'en590',
    name: 'Diesel Fuel EN 590',
    fullName: 'Ultra-Low Sulfur Diesel',
    tagline: 'European-standard ultra-low sulfur diesel for road and industrial use.',
    color: TEAL,
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="56" height="56">
        <rect x="18" y="32" width="44" height="26" rx="13" stroke={TEAL} strokeWidth="2" fill={`${TEAL}15`}/>
        <circle cx="58" cy="45" r="8" stroke={TEAL} strokeWidth="2" fill="none"/>
        <path d="M18 45 L28 45" stroke={TEAL} strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 32 L22 20 L14 20" stroke={TEAL} strokeWidth="2" strokeLinecap="round"/>
        <path d="M36 32 L32 20" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    specs: [
      { key: 'Cetane Number', value: 'min 51' },
      { key: 'Density @ 15°C', value: '820–845 kg/m³' },
      { key: 'Flash Point', value: 'min 55°C' },
      { key: 'Sulfur Content', value: 'max 10 mg/kg (ULSD)' },
      { key: 'Cold Filter Plugging', value: '−20°C to +5°C (by grade)' },
      { key: 'Viscosity @ 40°C', value: '2.0–4.5 mm²/s' },
      { key: 'Polycyclic Aromatics', value: 'max 8% mass' },
    ],
    standard: 'EN 590:2022',
  },
  {
    id: 'vfo',
    name: 'Virgin Fuel Oil',
    fullName: 'Heavy Residual Fuel Oil',
    tagline: 'High-viscosity residual fuel oil for industrial boilers and marine bunker use.',
    color: '#c0392b',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="56" height="56">
        <path d="M20 28 C20 28 24 18 40 18 C56 18 60 28 60 28 L60 56 C60 62 52 68 40 68 C28 68 20 62 20 56 Z" stroke="#c0392b" strokeWidth="2" fill="rgba(192,57,43,0.12)"/>
        <path d="M28 40 C28 40 32 36 40 36 C48 36 52 40 52 40" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <circle cx="40" cy="52" r="6" stroke="#c0392b" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    specs: [
      { key: 'Viscosity @ 50°C', value: '180–380 cSt' },
      { key: 'Flash Point', value: 'min 60°C' },
      { key: 'Sulfur Content', value: 'max 3.5% mass' },
      { key: 'Pour Point', value: 'max +30°C' },
      { key: 'Density @ 15°C', value: 'max 991 kg/m³' },
      { key: 'Water Content', value: 'max 0.5% volume' },
      { key: 'Ash Content', value: 'max 0.10% mass' },
    ],
    standard: 'ISO 8217 / ASTM D396',
  },
  {
    id: 'd6',
    name: 'D6',
    fullName: 'Residual Fuel Oil Grade D6',
    tagline: 'Virgin grade D6 fuel oil for power generation and marine propulsion systems.',
    color: '#27ae60',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="56" height="56">
        <rect x="16" y="22" width="48" height="38" rx="4" stroke="#27ae60" strokeWidth="2" fill="rgba(39,174,96,0.1)"/>
        <path d="M16 34 L64 34" stroke="#27ae60" strokeWidth="1.5"/>
        <path d="M24 22 L24 16 L56 16 L56 22" stroke="#27ae60" strokeWidth="2" fill="none"/>
        <path d="M30 46 C30 46 34 42 40 42 C46 42 50 46 50 46 C50 46 46 50 40 50 C34 50 30 46 30 46Z" stroke="#27ae60" strokeWidth="1.5" fill="rgba(39,174,96,0.15)"/>
        <circle cx="40" cy="46" r="3" fill="#27ae60"/>
      </svg>
    ),
    specs: [
      { key: 'Viscosity @ 40°C', value: '55–65 cSt' },
      { key: 'Flash Point', value: 'min 55°C' },
      { key: 'Sulfur Content', value: 'max 2.0% mass' },
      { key: 'API Gravity', value: '26–45°' },
      { key: 'Pour Point', value: 'max −6°C' },
      { key: 'Water & Sediment', value: 'max 0.50% volume' },
      { key: 'Carbon Residue', value: 'max 0.35% mass' },
    ],
    standard: 'ASTM D396 / VFO Grade D6',
  },
];

export default function ProductsPage({ setActivePage }: ProductsPageProps) {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <div style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.05) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

        {/* Animated amber orb */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', right: '-100px', top: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: `radial-gradient(circle, ${AMBER}44 0%, transparent 70%)`, pointerEvents: 'none' }}
        />

        <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${AMBER}, ${TEAL}, transparent)` }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>
              Our Products
            </span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1 }}>
            Petroleum <span style={{ color: AMBER }}>Products</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '16px', maxWidth: '580px', lineHeight: 1.7 }}>
            We supply internationally certified petroleum products meeting the highest quality standards. All products are available with full documentation and third-party inspection.
          </motion.p>

          {/* Quick nav pills */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '36px' }}>
            {products.map((p) => (
              <a key={p.id} href={`#${p.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 18px',
                  border: `1px solid rgba(246,159,0,0.35)`,
                  color: AMBER,
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = AMBER; (e.currentTarget as HTMLElement).style.color = '#0a0a0a'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = AMBER; }}
              >
                {p.name}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── PRODUCTS GRID ── */}
      <section style={{ background: '#f5f5f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '32px' }}>
            {products.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.1}>
                <motion.div
                  id={product.id}
                  className="product-card"
                  whileHover={{ y: -6, boxShadow: `0 24px 64px rgba(0,0,0,0.14)` }}
                  onHoverStart={() => setActiveProduct(product.id)}
                  onHoverEnd={() => setActiveProduct(null)}
                  style={{ borderRadius: '2px', overflow: 'hidden' }}
                >
                  {/* Card header */}
                  <div style={{
                    background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL}dd 100%)`,
                    padding: '36px 36px 28px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Background number */}
                    <div style={{
                      position: 'absolute', right: '24px', bottom: '-10px',
                      fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
                      fontSize: '6rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1, userSelect: 'none',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <AnimatePresence>
                      {activeProduct === product.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          style={{
                            position: 'absolute', right: '36px', top: '50%', transform: 'translateY(-50%)',
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: `radial-gradient(circle, ${product.color}33, transparent)`,
                            border: `1px solid ${product.color}44`,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', position: 'relative', zIndex: 1 }}>
                      <div style={{ flexShrink: 0 }}>{product.icon}</div>
                      <div>
                        <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: product.color, marginBottom: '6px' }}>
                          {product.fullName}
                        </div>
                        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1, letterSpacing: '0.03em' }}>
                          {product.name}
                        </h3>
                        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.82rem', color: '#aaa', marginTop: '10px', lineHeight: 1.6, maxWidth: '280px' }}>
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Standard badge */}
                    <div style={{ marginTop: '20px', position: 'relative', zIndex: 1 }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: `rgba(246,159,0,0.12)`,
                        border: `1px solid rgba(246,159,0,0.25)`,
                        padding: '4px 12px',
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.68rem',
                        color: AMBER,
                        letterSpacing: '0.05em',
                      }}>
                        <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                          <path d="M8 2L9.8 6H14L10.5 8.8L11.8 13L8 10.5L4.2 13L5.5 8.8L2 6H6.2Z" stroke={AMBER} strokeWidth="1" fill="none"/>
                        </svg>
                        {product.standard}
                      </span>
                    </div>
                  </div>

                  {/* Specs table */}
                  <div style={{ padding: '28px 36px 36px', background: '#fff' }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '20px', height: '2px', background: product.color }} />
                      Key Specifications
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                      {product.specs.map((spec, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.05 }}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            padding: '10px 0',
                            borderBottom: j < product.specs.length - 1 ? '1px solid #f0f0f0' : 'none',
                          }}
                        >
                          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.82rem', color: '#666', fontWeight: 500 }}>
                            {spec.key}
                          </div>
                          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.82rem', color: '#111', fontWeight: 700, textAlign: 'right' }}>
                            {spec.value}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <motion.button
                        onClick={() => setActivePage('contact')}
                        whileHover={{ scale: 1.04, boxShadow: `0 8px 24px rgba(246,159,0,0.35)` }}
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
                          padding: '12px 24px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                        }}
                      >
                        Request Quote →
                      </motion.button>
                      <motion.button
                        onClick={() => setActivePage('contact')}
                        whileHover={{ scale: 1.04, borderColor: TEAL, color: TEAL }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          background: 'transparent',
                          color: '#555',
                          border: '1.5px solid #ddd',
                          cursor: 'pointer',
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          padding: '11px 20px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s',
                        }}
                      >
                        Get Specs Sheet
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
                Why Choose Our <span style={{ color: AMBER }}>Products</span>
              </h2>
              <div className="yellow-bar-center" style={{ marginTop: '16px' }} />
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🔬', title: 'Lab Certified', desc: 'All products undergo independent third-party laboratory testing and certification before delivery.' },
              { icon: '📜', title: 'Full Documentation', desc: 'Certificate of Quality, SDS, and inspection reports provided with every shipment.' },
              { icon: '🚢', title: 'Flexible Logistics', desc: 'Road, rail, and pipeline delivery options available across Central Asia and neighboring regions.' },
              { icon: '⚡', title: 'Competitive Pricing', desc: 'Direct sourcing from refineries enables highly competitive pricing for bulk and spot orders.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, background: 'rgba(246,159,0,0.06)' }}
                style={{
                  padding: '32px 24px',
                  border: '1px solid rgba(246,159,0,0.15)',
                  background: 'rgba(255,255,255,0.03)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
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

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(90deg, ${AMBER} 0%, #ffb31a 50%, ${AMBER} 100%)`, padding: '60px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px', position: 'relative', zIndex: 1 }}>
          <FadeIn direction="left" delay={0}>
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
            <motion.button
              onClick={() => setActivePage('contact')}
              whileHover={{ scale: 1.05, background: '#1a1a1a' }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0a0a0a', color: AMBER, fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 32px', border: 'none', cursor: 'pointer' }}
            >
              Request a Quote →
            </motion.button>
            <motion.button
              onClick={() => setActivePage('services')}
              whileHover={{ scale: 1.05, background: 'rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#0a0a0a', fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '13px 28px', border: '2px solid rgba(0,0,0,0.25)', cursor: 'pointer' }}
            >
              Our Services
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
