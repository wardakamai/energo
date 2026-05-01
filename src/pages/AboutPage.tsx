import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutPageProps {
  setActivePage: (page: string) => void;
}

const AMBER = '#F69F00';
const TEAL = '#1A474A';

function FadeIn({ children, delay = 0, direction = 'up' }: { children: React.ReactNode; delay?: number; direction?: 'up' | 'left' | 'right' | 'none' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 40 : 0, x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage({ setActivePage }: AboutPageProps) {
  const timeline = [
    { year: '2004', title: 'Company Founded', desc: 'EnergosoYuz Tsentralnaja AZIJA LLP was established with a vision to become a leading energy trading company in Central Asia.' },
    { year: '2008', title: 'Regional Expansion', desc: 'Expanded operations to cover major Central Asian markets, establishing key partnerships with regional energy producers.' },
    { year: '2012', title: 'ISO Certification', desc: 'Achieved ISO 9001 and ISO 14001 certifications, reinforcing our commitment to quality and environmental standards.' },
    { year: '2016', title: 'Infrastructure Growth', desc: 'Invested in state-of-the-art storage and distribution infrastructure to support growing demand.' },
    { year: '2020', title: 'Sustainability Initiative', desc: 'Launched our green energy roadmap, incorporating renewable energy consulting into our service portfolio.' },
    { year: '2024', title: 'New Horizons', desc: 'Serving 12+ countries with 350+ completed projects and continuing to lead the energy sector in the region.' },
  ];

  const team = [
    { name: 'Aleksei Voronov', role: 'Chief Executive Officer', initials: 'AV' },
    { name: 'Darina Bekova', role: 'Chief Operations Officer', initials: 'DB' },
    { name: 'Marat Sultanov', role: 'Head of Trading', initials: 'MS' },
    { name: 'Elena Petrakova', role: 'Director of Logistics', initials: 'EP' },
  ];

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <div style={{ background: `linear-gradient(135deg, #0a0a0a 0%, ${TEAL} 100%)`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.05) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${AMBER}, ${TEAL}, transparent)` }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <motion.div style={{ height: '2px', background: AMBER }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>Who We Are</span>
          </motion.div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1 }}
          >
            About <span style={{ color: AMBER }}>EnergosoYuz</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '16px', maxWidth: '500px', lineHeight: 1.7 }}
          >
            Two decades of excellence in energy trading, supply, and distribution across Central Asia.
          </motion.p>
        </div>
      </div>

      {/* ── MISSION & VISION ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
            <FadeIn direction="up" delay={0}>
              <div style={{ borderTop: `4px solid ${AMBER}`, paddingTop: '32px' }}>
                <div className="section-label">Our Mission</div>
                <h2 className="section-title" style={{ marginBottom: '20px' }}>Powering Progress</h2>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', lineHeight: 1.9, color: '#555' }}>
                  To provide reliable, high-quality energy products and services that fuel the growth and development of businesses and communities across Central Asia and beyond. We are committed to operational excellence, safety, and environmental responsibility in every aspect of our work.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div style={{ borderTop: `4px solid ${TEAL}`, paddingTop: '32px' }}>
                <div className="section-label">Our Vision</div>
                <h2 className="section-title" style={{ marginBottom: '20px' }}>Leading the Region</h2>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', lineHeight: 1.9, color: '#555' }}>
                  To become the most trusted and innovative energy solutions provider in Central Asia, setting the benchmark for quality, safety, and sustainable business practices. We envision a future where clean, accessible energy drives prosperity for all communities in the region.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div style={{ borderTop: '4px solid #888', paddingTop: '32px' }}>
                <div className="section-label">Our Values</div>
                <h2 className="section-title" style={{ marginBottom: '20px' }}>Built to Last</h2>
                <ul style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', lineHeight: 1.9, color: '#555', paddingLeft: '0', listStyle: 'none' }}>
                  {['Integrity in all operations', 'Safety above all else', 'Environmental stewardship', 'Customer-first approach', 'Continuous innovation'].map((v, i) => (
                    <motion.li key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}
                    >
                      <span style={{ width: '6px', height: '6px', background: AMBER, display: 'inline-block', flexShrink: 0, borderRadius: '1px' }} />
                      {v}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── COMPANY BACKGROUND / TIMELINE ── */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/about-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1 }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(26,71,74,0.3) 0%, transparent 60%)` }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="section-label" style={{ textAlign: 'center' }}>Our Journey</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.03em' }}>
                Two Decades in <span style={{ color: AMBER }}>Energy</span>
              </h2>
              <div className="yellow-bar-center" />
            </div>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: '100px 40px 1fr', gap: '0 24px', alignItems: 'start' }}
              >
                <div style={{ textAlign: 'right', paddingTop: '12px' }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.4rem', color: AMBER }}>{item.year}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <motion.div
                    style={{ width: '16px', height: '16px', borderRadius: '50%', background: AMBER, flexShrink: 0, marginTop: '14px', boxShadow: `0 0 12px ${AMBER}66` }}
                    whileInView={{ scale: [0.5, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  />
                  {i < timeline.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: `linear-gradient(180deg, ${AMBER}50, ${TEAL}30)`, minHeight: '60px' }} />
                  )}
                </div>
                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1rem', letterSpacing: '0.08em', color: '#fff', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {item.title}
                  </div>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.88rem', color: '#888', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ── */}
      <section style={{ background: '#f9f9f9', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-label" style={{ textAlign: 'center' }}>Leadership</div>
              <h2 className="section-title">Our Team</h2>
              <div className="yellow-bar-center" />
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 16px 40px rgba(0,0,0,0.1)` }}
                style={{ background: '#fff', border: '1px solid #eee', padding: '40px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${AMBER}, ${TEAL})` }} />
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: `3px solid ${AMBER}` }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.4rem', color: AMBER }}>{member.initials}</span>
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.05rem', color: '#111', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {member.name}
                </div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.8rem', color: AMBER, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '6px' }}>
                  {member.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(90deg, ${AMBER} 0%, #ffb31a 50%, ${AMBER} 100%)`, padding: '60px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px', position: 'relative', zIndex: 1 }}>
          <FadeIn direction="left">
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a' }}>
                Work With Industry Leaders
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', color: '#1a1a1a', marginTop: '8px' }}>
                Join our growing network of energy partners across Central Asia.
              </p>
            </div>
          </FadeIn>
          <motion.button
            onClick={() => setActivePage('contact')}
            whileHover={{ scale: 1.05, background: '#1a1a1a' }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0a0a0a', color: AMBER, fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 32px', border: 'none', cursor: 'pointer' }}
          >
            Get In Touch →
          </motion.button>
        </div>
      </section>
    </div>
  );
}
