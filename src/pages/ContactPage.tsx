import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill={AMBER}/>
        </svg>
      ),
      label: 'Address',
      value: 'Lomonosova Street 30',
      sub: 'Aktobe, Kazakhstan',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill={AMBER}/>
        </svg>
      ),
      label: 'Phone',
      value: '+77154083446',
      sub: 'Mon–Fri, 9:00–18:00',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill={AMBER}/>
        </svg>
      ),
      label: 'Email',
      value: 'info@energosoyuz.com',
      sub: 'We reply within 24 hours',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
          <rect x="3" y="6" width="18" height="13" rx="1" stroke={AMBER} strokeWidth="1.8" fill="none"/>
          <path d="M7 10h5M7 14h3" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="14" y="10" width="4" height="4" rx="0.5" fill={AMBER} opacity="0.7"/>
        </svg>
      ),
      label: 'BIN',
      value: '060940009521',
      sub: 'Business ID Number',
    },
  ];

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
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: AMBER }}>Get In Touch</span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1 }}>
            Contact <span style={{ color: AMBER }}>Us</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', color: '#aaa', marginTop: '16px', maxWidth: '500px', lineHeight: 1.7 }}>
            Ready to discuss your energy needs? Our team is here to help. Reach out and we'll respond within 24 hours.
          </motion.p>
        </div>
      </div>

      {/* ── CONTACT INFO CARDS ── */}
      <section style={{ background: '#111', padding: '0 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {contactInfo.map((info, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ background: '#1a1a1a', borderBottomColor: AMBER }}
                style={{ background: '#111', padding: '32px 24px', borderBottom: `3px solid transparent`, cursor: 'default', transition: 'border-bottom-color 0.3s' }}
              >
                <div style={{ marginBottom: '12px' }}>{info.icon}</div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: AMBER, marginBottom: '6px' }}>
                  {info.label}
                </div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#fff', marginBottom: '4px' }}>
                  {info.value}
                </div>
                {info.sub && (
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.78rem', color: '#666' }}>{info.sub}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px' }}>
            {/* Contact Form */}
            <FadeIn delay={0}>
              <div className="section-label">Send a Message</div>
              <h2 className="section-title" style={{ marginBottom: '8px' }}>Let's Talk Energy</h2>
              <div className="yellow-bar" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ border: `2px solid ${AMBER}`, padding: '40px', textAlign: 'center', marginTop: '24px' }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.4rem', textTransform: 'uppercase', color: '#111', marginBottom: '12px' }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>
                    Thank you for reaching out. Our team will contact you within 24 business hours.
                  </p>
                  <motion.button
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="btn-yellow"
                    style={{ marginTop: '24px' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333', display: 'block', marginBottom: '8px' }}>Full Name *</label>
                      <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                    </div>
                    <div>
                      <label style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333', display: 'block', marginBottom: '8px' }}>Company</label>
                      <input className="form-input" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333', display: 'block', marginBottom: '8px' }}>Email *</label>
                      <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
                    </div>
                    <div>
                      <label style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333', display: 'block', marginBottom: '8px' }}>Phone</label>
                      <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+77154083446" />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333', display: 'block', marginBottom: '8px' }}>Subject *</label>
                    <select className="form-input" name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="">Select a subject...</option>
                      <option>Petroleum Products Trading</option>
                      <option>Jet A / Aviation Fuel</option>
                      <option>Diesel Fuel EN 590</option>
                      <option>Virgin Fuel Oil / D6</option>
                      <option>Supply & Distribution</option>
                      <option>Storage Solutions</option>
                      <option>Energy Consulting</option>
                      <option>Partnership Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333', display: 'block', marginBottom: '8px' }}>Message *</label>
                    <textarea className="form-input" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your energy needs..." rows={5} required style={{ resize: 'vertical', minHeight: '120px' }} />
                  </div>
                  <motion.button type="submit" className="btn-yellow"
                    style={{ alignSelf: 'flex-start', opacity: loading ? 0.7 : 1, pointerEvents: loading ? 'none' : 'all' }}
                    whileHover={{ scale: 1.04, boxShadow: `0 8px 25px rgba(246,159,0,0.35)` }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {loading ? 'Sending...' : 'Send Message →'}
                  </motion.button>
                </form>
              )}
            </FadeIn>

            {/* Company Details & Map */}
            <FadeIn delay={0.15}>
              <div className="section-label">Find Us</div>
              <h2 className="section-title" style={{ marginBottom: '8px' }}>Our Location</h2>
              <div className="yellow-bar" />

              {/* Map placeholder */}
              <div style={{ background: '#0a0a0a', height: '300px', marginTop: '24px', position: 'relative', overflow: 'hidden', border: `1px solid ${TEAL}44` }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(246,159,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(246,159,0,0.08) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${TEAL}22 0%, transparent 60%)` }} />
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 400 300" preserveAspectRatio="none">
                  <line x1="0" y1="150" x2="400" y2="150" stroke={`rgba(246,159,0,0.2)`} strokeWidth="2"/>
                  <line x1="200" y1="0" x2="200" y2="300" stroke={`rgba(246,159,0,0.2)`} strokeWidth="2"/>
                  <line x1="0" y1="0" x2="400" y2="300" stroke="rgba(246,159,0,0.08)" strokeWidth="1.5"/>
                  <line x1="400" y1="0" x2="0" y2="300" stroke="rgba(246,159,0,0.08)" strokeWidth="1.5"/>
                  <rect x="80" y="60" width="80" height="40" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  <rect x="240" y="80" width="100" height="50" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  <rect x="60" y="180" width="120" height="60" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  <rect x="260" y="170" width="90" height="80" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  <circle cx="200" cy="150" r="16" fill={`rgba(246,159,0,0.15)`} stroke={AMBER} strokeWidth="1.5"/>
                  <circle cx="200" cy="150" r="6" fill={AMBER}/>
                  <line x1="200" y1="134" x2="200" y2="108" stroke={AMBER} strokeWidth="1.5" strokeDasharray="4 3"/>
                  <circle cx="200" cy="150" r="24" fill="none" stroke={AMBER} strokeWidth="1" opacity="0.4">
                    <animate attributeName="r" values="16;36;16" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', background: AMBER, padding: '6px 16px', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#0a0a0a"/>
                  </svg>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a' }}>
                    Aktobe, Kazakhstan
                  </span>
                </div>
              </div>

              {/* Company quick info */}
              <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px', background: '#f9f9f9', borderLeft: `3px solid ${AMBER}` }}>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', color: '#111', letterSpacing: '0.05em', marginBottom: '6px' }}>
                      Business Hours
                    </div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#555', lineHeight: 1.7 }}>
                      Monday – Friday: 9:00 – 18:00<br />
                      Saturday: 10:00 – 14:00<br />
                      Sunday: Closed
                    </div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px', background: '#f9f9f9', borderLeft: `3px solid ${TEAL}` }}>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', color: '#111', letterSpacing: '0.05em', marginBottom: '6px' }}>
                      Emergency Line
                    </div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.85rem', color: '#555', lineHeight: 1.7 }}>
                      24/7 operations support available<br />for critical energy supply issues.
                    </div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.05rem', color: AMBER, marginTop: '6px' }}>
                      +77154083446
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
