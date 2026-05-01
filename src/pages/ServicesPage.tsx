import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface ServicesPageProps {
  setActivePage: (page: string) => void;
}

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

const services = [
  {
    number: '01',
    title: 'Petroleum Products Trading',
    subtitle: 'Core Business',
    desc: 'We specialize in the trading and supply of high-quality petroleum products including crude oil, refined fuels, lubricants, and petrochemicals. Our extensive network ensures competitive pricing and reliable supply chains across Central Asia.',
    features: ['Crude oil & refined products', 'Lubricants & specialty chemicals', 'International commodity trading', 'Price risk management'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
        <path d="M40 8 C40 8 22 36 22 52 C22 63 30 72 40 72 C50 72 58 63 58 52 C58 36 40 8 40 8Z" stroke={AMBER} strokeWidth="2.5" fill="rgba(246,159,0,0.08)"/>
        <circle cx="40" cy="52" r="10" stroke={AMBER} strokeWidth="2" fill="none"/>
        <path d="M40 42 L40 36" stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Supply & Distribution',
    subtitle: 'Logistics Solutions',
    desc: 'Our comprehensive logistics network ensures efficient and timely delivery of energy products to your location. We operate a fleet of tankers, pipelines, and rail transport solutions designed for safety and reliability.',
    features: ['Road & rail tanker fleet', 'Pipeline infrastructure', 'Last-mile delivery', 'Real-time tracking'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
        <rect x="10" y="34" width="60" height="22" rx="11" stroke={AMBER} strokeWidth="2.5" fill="rgba(246,159,0,0.08)"/>
        <circle cx="65" cy="45" r="7" stroke={AMBER} strokeWidth="2" fill="none"/>
        <path d="M10 45 L22 45" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M22 34 L16 22 L8 22" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 34 L28 22" stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Storage Solutions',
    subtitle: 'Infrastructure',
    desc: 'State-of-the-art storage terminals and tank farms designed to safely store petroleum products. Our facilities comply with international safety standards and are equipped with advanced monitoring systems.',
    features: ['Above-ground tank farms', 'Underground storage', 'Temperature-controlled facilities', '24/7 monitoring systems'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
        <rect x="15" y="28" width="50" height="38" rx="3" stroke={AMBER} strokeWidth="2.5" fill="rgba(246,159,0,0.08)"/>
        <path d="M15 38 L65 38" stroke={AMBER} strokeWidth="1.5"/>
        <path d="M25 28 L25 18 L55 18 L55 28" stroke={AMBER} strokeWidth="2.5" fill="none"/>
        <rect x="30" y="50" width="20" height="16" rx="1" stroke={AMBER} strokeWidth="2" fill="none"/>
        <path d="M37 55 L37 61 M43 55 L43 61" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Quality & Safety Management',
    subtitle: 'HSE Excellence',
    desc: 'Rigorous quality control processes and health, safety, and environmental management systems ensure our operations meet the highest international standards.',
    features: ['ISO 9001 quality management', 'ISO 14001 environmental', 'OHSAS 18001 safety', 'Regular third-party audits'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
        <path d="M40 12 L64 26 L64 54 L40 68 L16 54 L16 26 Z" stroke={AMBER} strokeWidth="2.5" fill="rgba(246,159,0,0.08)"/>
        <path d="M29 40 L36 47 L52 31" stroke={AMBER} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Energy Consulting',
    subtitle: 'Advisory Services',
    desc: 'Expert advisory services to help businesses optimize their energy procurement, consumption, and strategy. Our consultants bring decades of experience in the Central Asian energy market.',
    features: ['Energy audit & assessment', 'Market analysis & forecasting', 'Regulatory compliance guidance', 'Procurement strategy'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
        <rect x="12" y="16" width="56" height="48" rx="4" stroke={AMBER} strokeWidth="2.5" fill="rgba(246,159,0,0.08)"/>
        <path d="M12 28 L68 28" stroke={AMBER} strokeWidth="1.5"/>
        <path d="M22 40 L34 40" stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 50 L44 50" stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="52" cy="46" r="10" stroke={AMBER} strokeWidth="2" fill="#0a0a0a"/>
        <path d="M48 46 L52 42 L56 46" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M52 42 L52 50" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Renewable Energy Solutions',
    subtitle: 'Green Future',
    desc: 'Embracing the energy transition, we offer consulting and project development services for renewable energy including solar, wind, and energy efficiency projects across the region.',
    features: ['Solar power project development', 'Wind energy consulting', 'Energy efficiency audits', 'Green certification support'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
        <circle cx="40" cy="40" r="12" stroke={AMBER} strokeWidth="2.5" fill="rgba(246,159,0,0.08)"/>
        <line x1="40" y1="12" x2="40" y2="20" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="40" y1="60" x2="40" y2="68" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="12" y1="40" x2="20" y2="40" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="60" y1="40" x2="68" y2="40" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="20.7" y1="20.7" x2="26.3" y2="26.3" stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
        <line x1="53.7" y1="53.7" x2="59.3" y2="59.3" stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
        <line x1="59.3" y1="20.7" x2="53.7" y2="26.3" stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
        <line x1="26.3" y1="53.7" x2="20.7" y2="59.3" stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ServicesPage({ setActivePage }: ServicesPageProps) {
  return (
    <div>
      {/* ── PAGE HERO ── */}
      <div style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.04) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${AMBER}, ${TEAL}, transparent)` }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>What We Do</span>
          </motion.div>

          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1 }}>
            Our <span style={{ color: AMBER }}>Services</span>
          </motion.h1>

          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '16px', maxWidth: '560px', lineHeight: 1.7 }}>
            Comprehensive energy solutions tailored for the Central Asian market — from trading and logistics to renewable energy and consulting.
          </motion.p>
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {services.map((svc, i) => (
              <FadeIn key={i} delay={0.05}>
                <motion.div
                  whileHover={{ boxShadow: `0 12px 50px rgba(26,71,74,0.12)` }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    background: i % 2 === 0 ? '#fff' : '#f9f9f9',
                    border: '1px solid #eee',
                    overflow: 'hidden',
                  }}
                  className="service-row"
                >
                  {/* Left: dark panel */}
                  <div style={{
                    background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL}cc 100%)`,
                    padding: '48px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: '16px', right: '24px', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '4rem', color: 'rgba(255,255,255,0.05)', lineHeight: 1 }}>
                      {svc.number}
                    </div>
                    <div style={{ marginBottom: '24px' }}>{svc.icon}</div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, marginBottom: '10px' }}>
                      {svc.subtitle}
                    </div>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.15, letterSpacing: '0.03em' }}>
                      {svc.title}
                    </h3>
                    <motion.div style={{ width: '40px', height: '3px', background: `linear-gradient(90deg, ${AMBER}, ${TEAL})`, marginTop: '16px' }}
                      whileInView={{ scaleX: [0, 1] }} viewport={{ once: true }} />
                  </div>

                  {/* Right: description + features */}
                  <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', lineHeight: 1.8, color: '#555', marginBottom: '28px' }}>
                      {svc.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {svc.features.map((feat, j) => (
                        <motion.li key={j}
                          initial={{ x: -15, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.07 }}
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Barlow', sans-serif", fontSize: '0.88rem', color: '#333', fontWeight: 500 }}
                        >
                          <span style={{ width: '18px', height: '18px', background: AMBER, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {feat}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: `linear-gradient(90deg, ${AMBER} 0%, #ffb31a 50%, ${AMBER} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <FadeIn>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '12px' }}>Why Choose Us</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05 }}>
                The EnergosoYuz Advantage
              </h2>
              <div style={{ width: '50px', height: '4px', background: '#0a0a0a', margin: '16px 0 24px' }} />
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', lineHeight: 1.8, color: '#1a1a1a' }}>
                With 20+ years of experience and a deep understanding of the Central Asian energy market, we deliver solutions that are reliable, efficient, and tailored to your specific needs.
              </p>
            </FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { icon: '⚡', label: '20+ Years Experience' },
                { icon: '🌍', label: '12 Countries Served' },
                { icon: '🏭', label: '350+ Projects Done' },
                { icon: '🤝', label: '80+ Active Partners' },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, background: 'rgba(0,0,0,0.14)' }}
                  style={{ background: 'rgba(0,0,0,0.09)', padding: '24px 20px', textAlign: 'center', cursor: 'default' }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.9rem', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.03em' }}>
              Need a Custom Energy Solution?
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#aaa', marginTop: '16px', marginBottom: '40px', maxWidth: '480px', margin: '16px auto 40px', lineHeight: 1.7 }}>
              Our team of specialists is ready to design a tailored solution for your business requirements.
            </p>
            <motion.button className="btn-yellow" onClick={() => setActivePage('contact')}
              whileHover={{ scale: 1.06, boxShadow: `0 10px 30px rgba(246,159,0,0.4)` }}
              whileTap={{ scale: 0.97 }}>
              Request a Consultation →
            </motion.button>
          </FadeIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .service-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
