import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface HomePageProps {
  setActivePage: (page: string) => void;
}

const AMBER = '#F69F00';
const TEAL = '#1A474A';

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function FadeInSection({ children, delay = 0, direction = 'up' }: { children: React.ReactNode; delay?: number; direction?: 'up' | 'left' | 'right' | 'none' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  );
}

export default function HomePage({ setActivePage }: HomePageProps) {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  const years = useCountUp(20, 2000, statsInView);
  const projects = useCountUp(350, 2200, statsInView);
  const partners = useCountUp(80, 1800, statsInView);
  const countries = useCountUp(12, 1600, statsInView);

  const [activeCert, setActiveCert] = useState<number | null>(null);

  const coreValues = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
          <path d="M32 8 L54 20 L54 44 L32 56 L10 44 L10 20 Z" stroke={AMBER} strokeWidth="2.5" fill="none"/>
          <path d="M22 32 L28 38 L42 26" stroke={AMBER} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'RELIABILITY',
      desc: 'We deliver on our commitments with consistency and integrity.',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
          <path d="M20 26 C24 18 40 18 44 26" stroke={AMBER} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M16 40 C20 32 44 32 48 40" stroke={AMBER} strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="32" cy="30" r="6" stroke={AMBER} strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'PARTNERSHIP',
      desc: 'We build long-term relationships based on trust and mutual growth.',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
          <circle cx="32" cy="32" r="22" stroke={AMBER} strokeWidth="2.5" fill="none"/>
          <ellipse cx="32" cy="32" rx="10" ry="22" stroke={AMBER} strokeWidth="2" fill="none"/>
          <line x1="10" y1="32" x2="54" y2="32" stroke={AMBER} strokeWidth="2"/>
          <line x1="14" y1="20" x2="50" y2="20" stroke={AMBER} strokeWidth="1.5"/>
          <line x1="14" y1="44" x2="50" y2="44" stroke={AMBER} strokeWidth="1.5"/>
        </svg>
      ),
      title: 'REGIONAL FOCUS',
      desc: 'We understand the energy needs of Central Asia.',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
          <polyline points="10,48 22,34 30,40 40,24 52,16" stroke={AMBER} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="44,16 52,16 52,24" stroke={AMBER} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'GROWTH',
      desc: 'We strive for sustainable growth and contribution to the energy sector.',
    },
  ];

  const services = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" width="36" height="36">
          <path d="M32 8 C32 8 20 28 20 38 C20 45 25 52 32 52 C39 52 44 45 44 38 C44 28 32 8 32 8Z" stroke={AMBER} strokeWidth="2.5" fill="none"/>
          <circle cx="32" cy="38" r="6" stroke={AMBER} strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'PETROLEUM PRODUCTS TRADING',
      desc: 'Supply of high-quality petroleum products including Jet A, EN590, VFO and D6.',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" width="36" height="36">
          <rect x="8" y="28" width="48" height="18" rx="9" stroke={AMBER} strokeWidth="2.5" fill="none"/>
          <circle cx="52" cy="37" r="5" stroke={AMBER} strokeWidth="2" fill="none"/>
          <path d="M8 37 L18 37" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M18 28 L14 20 L8 20" stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 28 L22 20" stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'SUPPLY & DISTRIBUTION',
      desc: 'Efficient logistics and timely delivery across Central Asia.',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" width="36" height="36">
          <rect x="14" y="20" width="36" height="32" rx="2" stroke={AMBER} strokeWidth="2.5" fill="none"/>
          <path d="M14 28 L50 28" stroke={AMBER} strokeWidth="1.5"/>
          <path d="M22 20 L22 14 L42 14 L42 20" stroke={AMBER} strokeWidth="2.5" fill="none"/>
        </svg>
      ),
      title: 'STORAGE SOLUTIONS',
      desc: 'Safe and secure storage facilities with real-time monitoring.',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" width="36" height="36">
          <path d="M32 10 L52 22 L52 42 L32 54 L12 42 L12 22 Z" stroke={AMBER} strokeWidth="2.5" fill="none"/>
          <path d="M24 32 L29 37 L40 26" stroke={AMBER} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'QUALITY & SAFETY',
      desc: 'Strict standards in quality, health, safety and environment.',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" width="36" height="36">
          <circle cx="32" cy="22" r="10" stroke={AMBER} strokeWidth="2.5" fill="none"/>
          <path d="M16 52 C16 42 48 42 48 52" stroke={AMBER} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M38 30 C42 28 50 30 52 38" stroke={AMBER} strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: 'CUSTOMER SUPPORT',
      desc: 'Dedicated 24/7 support and tailored customer service.',
    },
  ];

  const certifications = ['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'API Certified', 'SGS Verified'];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        {/* Amber grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(246,159,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        {/* Teal gradient sweep */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${TEAL}33 0%, transparent 60%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <motion.div
            style={{ maxWidth: '640px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}
            >
              <motion.div
                style={{ height: '2px', background: AMBER }}
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>
                Energy Solutions · Central Asia
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                textTransform: 'uppercase',
                lineHeight: 0.95,
                color: '#fff',
                letterSpacing: '0.02em',
                marginBottom: '8px',
              }}
            >
              <span className="glow-text" style={{ color: AMBER }}>EnergosoYuz</span>
            </motion.h1>

            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 4vw, 2.6rem)',
                textTransform: 'uppercase',
                lineHeight: 1.05,
                color: '#fff',
                letterSpacing: '0.02em',
                marginBottom: '32px',
              }}
            >
              Tsentralnaja Azija LLP
            </motion.h2>

            <motion.div
              style={{ width: '60px', height: '4px', background: `linear-gradient(90deg, ${AMBER}, ${TEAL})`, marginBottom: '28px' }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#ddd', lineHeight: 1.7, marginBottom: '48px' }}
            >
              Reliable Energy. Strong Partnerships.<br />
              Powering Progress in Central Asia.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <motion.button
                className="btn-yellow"
                onClick={() => setActivePage('about')}
                whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
                whileTap={{ scale: 0.97 }}
              >
                Learn More <span>→</span>
              </motion.button>
              <motion.button
                className="btn-outline"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
                onClick={() => setActivePage('products')}
                whileHover={{ scale: 1.05, borderColor: AMBER, color: AMBER }}
                whileTap={{ scale: 0.97 }}
              >
                Our Products
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Scroll</span>
          <div className="scroll-indicator" style={{ width: '24px', height: '38px', border: `2px solid rgba(246,159,0,0.4)`, borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
            <div style={{ width: '4px', height: '8px', background: AMBER, borderRadius: '2px' }} />
          </div>
        </div>
      </section>

      {/* ── ABOUT INTRO ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px', alignItems: 'start' }}>
            <FadeInSection direction="left">
              <div className="section-label">About Us</div>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>
                Built on Trust.<br />Focused on Energy.
              </h2>
              <div className="yellow-bar" />
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: '32px' }}>
                EnergosoYuz Tsentralnaja AZIJA LLP is an energy company based in Central Asia, engaged in the trading, supply and distribution of petroleum products and related services. We are committed to delivering high-quality products, ensuring safety, and building long-term partnerships across the region and beyond.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <motion.button
                  className="btn-outline"
                  onClick={() => setActivePage('about')}
                  whileHover={{ scale: 1.04, background: '#111', color: AMBER }}
                  whileTap={{ scale: 0.97 }}
                >
                  Read More <span>→</span>
                </motion.button>
                <motion.button
                  onClick={() => setActivePage('products')}
                  whileHover={{ scale: 1.04, boxShadow: `0 6px 20px rgba(246,159,0,0.3)` }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: 'transparent',
                    border: `2px solid ${AMBER}`,
                    color: AMBER,
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '12px 24px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  View Products <span>→</span>
                </motion.button>
              </div>
            </FadeInSection>

            {/* Core values grid */}
            <FadeInSection direction="right" delay={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e8e8e8' }}>
                {coreValues.map((val, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ background: `${TEAL}08`, scale: 1.02, zIndex: 1 }}
                    style={{ background: '#fff', padding: '28px 20px', textAlign: 'center', transition: 'background 0.3s', position: 'relative' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>{val.icon}</div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', color: '#111', marginBottom: '8px' }}>
                      {val.title}
                    </div>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.8rem', color: '#666', lineHeight: 1.6 }}>{val.desc}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES (dark teal section) ── */}
      <section style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(246,159,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.04) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                textTransform: 'uppercase',
                color: '#fff',
                letterSpacing: '0.05em',
              }}>
                Our <span style={{ color: AMBER }}>Services</span>
              </h2>
              <div className="yellow-bar-center" style={{ marginTop: '16px' }} />
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {services.map((svc, i) => (
              <motion.div
                key={i}
                className="service-card"
                style={{ background: 'rgba(10,10,10,0.8)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ background: `rgba(246,159,0,0.07)`, y: -4 }}
              >
                <div style={{ marginBottom: '18px' }}>{svc.icon}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.06em', color: '#fff', marginBottom: '10px', lineHeight: 1.3 }}>
                  {svc.title}
                </div>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.82rem', color: '#999', lineHeight: 1.7 }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <motion.button
              className="btn-yellow"
              onClick={() => setActivePage('services')}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
              whileTap={{ scale: 0.97 }}
            >
              View All Services <span>→</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        ref={statsRef}
        style={{ background: `linear-gradient(90deg, ${AMBER} 0%, #ffb31a 50%, ${AMBER} 100%)`, padding: '64px 0', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', textAlign: 'center' }}>
            {[
              { num: years, suffix: '+', label: 'Years of Experience' },
              { num: projects, suffix: '+', label: 'Projects Completed' },
              { num: partners, suffix: '+', label: 'Trusted Partners' },
              { num: countries, suffix: '', label: 'Countries Served' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: '#0a0a0a', lineHeight: 1 }}>
                  {stat.num}{stat.suffix}
                </div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a1a1a', marginTop: '8px' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label" style={{ textAlign: 'center' }}>Trust Indicators</div>
              <h2 className="section-title">Certified & Trusted</h2>
              <div className="yellow-bar-center" />
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ borderColor: AMBER, background: `${AMBER}08`, scale: 1.04 }}
                onHoverStart={() => setActiveCert(i)}
                onHoverEnd={() => setActiveCert(null)}
                style={{
                  border: activeCert === i ? `1.5px solid ${AMBER}` : '1.5px solid #e8e8e8',
                  padding: '24px 16px',
                  textAlign: 'center',
                  cursor: 'default',
                  transition: 'border-color 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <AnimatePresence>
                  {activeCert === i && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${AMBER}, ${TEAL})`, transformOrigin: 'left' }}
                    />
                  )}
                </AnimatePresence>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: '#111', letterSpacing: '0.05em' }}>{cert}</div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.72rem', color: '#888', marginTop: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Certified</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <FadeInSection delay={0.1}>
            <motion.div
              style={{
                background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`,
                padding: '48px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ boxShadow: `0 20px 60px rgba(26,71,74,0.3)` }}
            >
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: `linear-gradient(180deg, ${AMBER}, ${TEAL})` }} />
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.03) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Ready to Power Your Business?
                </h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.9rem', color: '#aaa', marginTop: '8px' }}>
                  Get in touch with our team of energy experts today.
                </p>
              </div>
              <motion.button
                className="btn-yellow"
                onClick={() => setActivePage('contact')}
                whileHover={{ scale: 1.06, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
                whileTap={{ scale: 0.97 }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                Contact Us <span>→</span>
              </motion.button>
            </motion.div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
