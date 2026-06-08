import { motion } from 'framer-motion';

const WA_NUMBER = '17158646315';
const WA_URL = `https://wa.me/${WA_NUMBER}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      {/* Pulse ring */}
      <motion.span
        animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: '#25D366',
          pointerEvents: 'none',
        }}
      />

      {/* WhatsApp icon */}
      <svg viewBox="0 0 32 32" fill="none" width="30" height="30" style={{ position: 'relative', zIndex: 1 }}>
        <path
          d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.47 1.65 6.35L3 29l6.82-1.62A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"
          fill="#fff"
        />
        <path
          d="M22.1 19.56c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
          fill="#25D366"
        />
      </svg>
    </motion.a>
  );
}
