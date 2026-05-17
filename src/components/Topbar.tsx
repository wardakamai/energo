import { motion } from 'framer-motion';

const AMBER = '#F69F00';

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill={AMBER}/>
      </svg>
    ),
    text: 'Lomonosova Street 30, Aktobe, Kazakhstan',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill={AMBER}/>
      </svg>
    ),
    text: 'info@energosoyuz.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill={AMBER}/>
      </svg>
    ),
    text: '+77154083446',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
        <rect x="3" y="6" width="18" height="13" rx="1" stroke={AMBER} strokeWidth="1.8" fill="none"/>
        <path d="M7 10h5M7 14h3" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="14" y="10" width="4" height="4" rx="0.5" fill={AMBER} opacity="0.7"/>
      </svg>
    ),
    text: 'BIN: 060940009521',
  },
];

export default function Topbar() {
  return (
    <motion.div
      className="topbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        background: 'linear-gradient(90deg, #1A474A 0%, #0d3033 50%, #1A474A 100%)',
        borderBottom: '1px solid rgba(246,159,0,0.25)',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '100%',
      }}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`topbar-item topbar-item-${i + 1}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              padding: '0 20px',
              height: '100%',
              borderRight: i < items.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}
          >
            <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>{item.icon}</span>
            <span style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: '0.74rem',
              color: 'rgba(255,255,255,0.88)',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
            }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1020px) {
          .topbar-item-4 { display: none !important; }
        }
        @media (max-width: 780px) {
          .topbar-item-3 { display: none !important; }
        }
        @media (max-width: 520px) {
          .topbar-item-2 { display: none !important; }
          .topbar > div { justify-content: flex-start; }
        }
      `}</style>
    </motion.div>
  );
}
