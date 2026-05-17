import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/SEOHead';

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
    hidden: { opacity: 0, y: direction === 'up' ? 40 : 0, x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
  };
  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  );
}

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Energosoyuz | Global Petroleum Products Supplier & Oil Mandate',
  description: 'Energosoyuz Tsentralnaja Azija LLP — a verified oil and gas mandate supplying EN590 diesel, Jet A1 aviation fuel, and VFO D6 worldwide. Storage at Rotterdam, Houston, Fujairah and Jurong.',
  url: 'https://www.energosoyuz.com/',
  isPartOf: { '@id': 'https://www.energosoyuz.com/#website' },
  about: { '@id': 'https://www.energosoyuz.com/#organization' },
};

export default function HomePage() {
  const navigate = useNavigate();
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
      title: 'GLOBAL REACH',
      desc: 'Storage at Rotterdam, Houston, Fujairah, and Jurong for worldwide supply.',
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
      desc: 'EN590 diesel, Jet A1 aviation fuel, and VFO D6 supplied as a verified global oil mandate.',
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
      desc: 'Bulk fuel supply on CIF and FOB terms from four strategic global ports.',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" width="36" height="36">
          <rect x="14" y="20" width="36" height="32" rx="2" stroke={AMBER} strokeWidth="2.5" fill="none"/>
          <path d="M14 28 L50 28" stroke={AMBER} strokeWidth="1.5"/>
          <path d="M22 20 L22 14 L42 14 L42 20" stroke={AMBER} strokeWidth="2.5" fill="none"/>
        </svg>
      ),
      title: 'GLOBAL STORAGE SOLUTIONS',
      desc: 'Petroleum storage at Rotterdam, Houston, Fujairah, and Jurong for reliable delivery worldwide.',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" width="36" height="36">
          <path d="M32 10 L52 22 L52 42 L32 54 L12 42 L12 22 Z" stroke={AMBER} strokeWidth="2.5" fill="none"/>
          <path d="M24 32 L29 37 L40 26" stroke={AMBER} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'QUALITY & SAFETY',
      desc: 'ISO-certified operations with third-party inspection on every cargo shipment.',
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
      desc: 'Dedicated desk for petroleum buyers, mandates, and agents across all time zones.',
    },
  ];

  const certifications = ['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'API Certified', 'SGS Verified'];

  const portLocations = [
    { name: 'Rotterdam', country: 'Netherlands', path: '/ports/rotterdam', desc: 'EN590 & Jet A1 CIF Rotterdam', note: 'Primary European hub' },
    { name: 'Houston', country: 'United States', path: '/ports/houston', desc: 'Port of Houston petroleum supply', note: 'US Gulf Coast hub' },
    { name: 'Fujairah', country: 'UAE', path: '/ports/fujairah', desc: 'Strategic Middle East bunkering', note: 'Gulf of Oman hub' },
    { name: 'Jurong', country: 'Singapore', path: '/ports/jurong', desc: "Asia-Pacific supply hub", note: "World's #1 bunkering port" },
  ];

  return (
    <>
      <SEOHead
        title="Energosoyuz | Global Petroleum Products Supplier & Oil Mandate"
        description="Energosoyuz Tsentralnaja Azija LLP — a verified oil and gas mandate supplying EN590 diesel, Jet A1 aviation fuel, and VFO D6 globally. Storage at Rotterdam, Houston, Fujairah and Jurong."
        canonical="https://www.energosoyuz.com/"
        jsonLd={homeSchema}
      />

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.05) 1px, transparent 1px)`, backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${TEAL}33 0%, transparent 60%)`, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <motion.div style={{ maxWidth: '660px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.5 }} />
              <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>
                Verified Oil & Gas Mandate · Global Supply
              </span>
            </motion.div>

            <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 5.5rem)', textTransform: 'uppercase', lineHeight: 0.95, color: '#fff', letterSpacing: '0.02em', marginBottom: '8px' }}>
              <span className="glow-text" style={{ color: AMBER }}>EnergosoYuz</span>
            </motion.h1>

            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2.6rem)', textTransform: 'uppercase', lineHeight: 1.05, color: '#fff', letterSpacing: '0.02em', marginBottom: '32px' }}>
              Tsentralnaja Azija LLP
            </motion.div>

            <motion.div style={{ width: '60px', height: '4px', background: `linear-gradient(90deg, ${AMBER}, ${TEAL})`, marginBottom: '28px' }}
              initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.6 }} />

            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.65 }}
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400, fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#ddd', lineHeight: 1.7, marginBottom: '20px' }}>
              Global petroleum products supplier and authorized oil mandate. We supply EN590 diesel, Jet A1 aviation fuel, and VFO D6 to buyers and mandates worldwide.
            </motion.p>

            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.72 }}
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: AMBER, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '40px' }}>
              Rotterdam · Houston · Fujairah · Jurong
            </motion.p>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <motion.button className="btn-yellow" onClick={() => navigate('/products')}
                whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
                whileTap={{ scale: 0.97 }}>
                View Products <span>→</span>
              </motion.button>
              <motion.button className="btn-outline"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05, borderColor: AMBER, color: AMBER }}
                whileTap={{ scale: 0.97 }}>
                Request a Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '24px', height: '38px', border: `2px solid rgba(246,159,0,0.4)`, borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
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
                Verified Mandate.<br />Global Petroleum Supply.
              </h2>
              <div className="yellow-bar" />
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: '16px' }}>
                Energosoyuz Tsentralnaja Azija LLP is a verified oil and gas mandate and international petroleum products supplier. Established in 2004 in Aktobe, Kazakhstan, we supply EN590 ultra-low sulfur diesel, Jet A1 aviation turbine fuel, and Virgin Fuel Oil D6 to petroleum buyers, agents, and mandates across global markets.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: '32px' }}>
                We maintain petroleum storage at four strategic ports — Rotterdam, Houston, Fujairah, and Jurong — enabling reliable CIF and FOB delivery to buyers worldwide. Buyers transact directly with the mandate, not through brokers.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <motion.button className="btn-outline" onClick={() => navigate('/about')}
                  whileHover={{ scale: 1.04, background: '#111', color: AMBER }}
                  whileTap={{ scale: 0.97 }}>
                  About Us <span>→</span>
                </motion.button>
                <motion.button onClick={() => navigate('/products')}
                  whileHover={{ scale: 1.04, boxShadow: `0 6px 20px rgba(246,159,0,0.3)` }}
                  whileTap={{ scale: 0.97 }}
                  style={{ background: 'transparent', border: `2px solid ${AMBER}`, color: AMBER, fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '12px 24px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Our Products <span>→</span>
                </motion.button>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e8e8e8' }}>
                {coreValues.map((val, i) => (
                  <motion.div key={i} whileHover={{ background: `${TEAL}08`, scale: 1.02, zIndex: 1 }}
                    style={{ background: '#fff', padding: '28px 20px', textAlign: 'center', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>{val.icon}</div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', color: '#111', marginBottom: '8px' }}>{val.title}</div>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.8rem', color: '#666', lineHeight: 1.6 }}>{val.desc}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.04) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.05em' }}>
                Our <span style={{ color: AMBER }}>Services</span>
              </h2>
              <div className="yellow-bar-center" style={{ marginTop: '16px' }} />
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {services.map((svc, i) => (
              <motion.div key={i} className="service-card" style={{ background: 'rgba(10,10,10,0.8)' }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ background: `rgba(246,159,0,0.07)`, y: -4 }}>
                <div style={{ marginBottom: '18px' }}>{svc.icon}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.06em', color: '#fff', marginBottom: '10px', lineHeight: 1.3 }}>{svc.title}</div>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.82rem', color: '#999', lineHeight: 1.7 }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <motion.button className="btn-yellow" onClick={() => navigate('/services')}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
              whileTap={{ scale: 0.97 }}>
              View All Services <span>→</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── GLOBAL STORAGE LOCATIONS ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div className="section-label" style={{ textAlign: 'center' }}>Global Presence</div>
              <h2 className="section-title">Port Storage Locations</h2>
              <div className="yellow-bar-center" />
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#555', maxWidth: '560px', margin: '20px auto 0', lineHeight: 1.75 }}>
                We maintain petroleum storage at four strategic global ports, enabling reliable CIF and FOB delivery of EN590, Jet A1, and VFO D6 to buyers worldwide.
              </p>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px', background: '#e8e8e8' }}>
            {portLocations.map((port, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(0,0,0,0.1)', zIndex: 1 }}
                style={{ background: '#fff', position: 'relative' }}>
                <Link to={port.path} style={{ display: 'block', padding: '36px 28px', textDecoration: 'none' }}>
                  {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: AMBER }} />}
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: AMBER, marginBottom: '8px' }}>{port.country}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.6rem', color: '#111', textTransform: 'uppercase', lineHeight: 1, marginBottom: '10px' }}>{port.name}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.82rem', color: '#555', marginBottom: '6px' }}>{port.desc}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.72rem', color: '#aaa', marginBottom: '18px' }}>{port.note}</div>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: AMBER, letterSpacing: '0.08em', textTransform: 'uppercase' }}>View location →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} style={{ background: `linear-gradient(90deg, ${AMBER} 0%, #ffb31a 50%, ${AMBER} 100%)`, padding: '64px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', textAlign: 'center' }}>
            {[
              { num: years, suffix: '+', label: 'Years of Experience' },
              { num: projects, suffix: '+', label: 'Projects Completed' },
              { num: partners, suffix: '+', label: 'Trusted Partners' },
              { num: countries, suffix: '', label: 'Countries Served' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={statsInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
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

      {/* ── PRODUCTS CTA STRIP ── */}
      <section style={{ background: '#0a0a0a', padding: '72px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label" style={{ textAlign: 'center', color: '#888' }}>Product Range</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.05em' }}>
                Our <span style={{ color: AMBER }}>Petroleum Products</span>
              </h2>
              <div className="yellow-bar-center" style={{ marginTop: '16px' }} />
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: 'rgba(255,255,255,0.06)' }}>
            {[
              { name: 'EN590 Diesel', sub: 'Ultra-Low Sulfur Diesel', path: '/products/en590', note: 'CIF Rotterdam · EN590:2022' },
              { name: 'Jet A1', sub: 'Aviation Turbine Fuel', path: '/products/jet-a1', note: 'CIF Rotterdam · ASTM D1655' },
              { name: 'VFO D6', sub: 'Virgin Fuel Oil / Grade D6', path: '/products/vfo-d6', note: 'ISO 8217 / ASTM D396' },
            ].map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ background: 'rgba(246,159,0,0.07)', y: -4 }}
                style={{ padding: '0' }}>
                <Link to={p.path} style={{ display: 'block', padding: '40px 32px', textDecoration: 'none' }}>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#666', marginBottom: '8px' }}>{p.sub}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.8rem', color: '#fff', textTransform: 'uppercase', lineHeight: 1, marginBottom: '10px' }}>{p.name}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.78rem', color: '#888', marginBottom: '20px' }}>{p.note}</div>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: AMBER, letterSpacing: '0.08em', textTransform: 'uppercase' }}>View specifications →</span>
                </Link>
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
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ borderColor: AMBER, background: `${AMBER}08`, scale: 1.04 }}
                onHoverStart={() => setActiveCert(i)} onHoverEnd={() => setActiveCert(null)}
                style={{ border: activeCert === i ? `1.5px solid ${AMBER}` : '1.5px solid #e8e8e8', padding: '24px 16px', textAlign: 'center', cursor: 'default', transition: 'border-color 0.2s', position: 'relative', overflow: 'hidden' }}>
                <AnimatePresence>
                  {activeCert === i && (
                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }}
                      style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${AMBER}, ${TEAL})`, transformOrigin: 'left' }} />
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
              style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '48px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px', position: 'relative', overflow: 'hidden' }}
              whileHover={{ boxShadow: `0 20px 60px rgba(26,71,74,0.3)` }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: `linear-gradient(180deg, ${AMBER}, ${TEAL})` }} />
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.03) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Ready to Source Petroleum Products?
                </h2>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.9rem', color: '#aaa', marginTop: '8px' }}>
                  Contact our desk for EN590, Jet A1, and VFO D6 pricing and availability.
                </p>
              </div>
              <motion.button className="btn-yellow" onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.06, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
                whileTap={{ scale: 0.97 }}
                style={{ position: 'relative', zIndex: 1 }}>
                Request a Quote <span>→</span>
              </motion.button>
            </motion.div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
