import { motion } from 'framer-motion';
import { dmSans, playfair, ORANGE, SURFACE, BORDER, TEXT, MUTED } from './theme';

/**
 * Reflection screen — no input, just mirror the user's answers back so the
 * flow feels custom-built for them (Mau's principle). Used between question
 * groups in Act 1.
 *
 * `proof` is an optional one-liner of social proof shown under the subhead
 * (e.g. "Other UF juniors hear back within 48 hours."). When set, it renders
 * with a subtle quote bar so it doesn't compete with the headline.
 */
export default function MirrorCard({ eyebrow, headline, subhead, proof, onContinue, continueLabel = 'Keep going' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ padding: '40px 20px', maxWidth: 480, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}
    >
      <div style={{
        background: SURFACE, border: `1px solid ${BORDER}`,
        borderRadius: 16, padding: '32px 24px',
        boxShadow: '0 18px 48px rgba(232,93,32,0.10)',
      }}>
        {eyebrow && (
          <p style={{
            fontFamily: dmSans, fontSize: 11, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: ORANGE, margin: '0 0 14px',
          }}>
            {eyebrow}
          </p>
        )}
        <h2 style={{
          fontFamily: playfair, fontSize: 24, fontWeight: 700,
          color: TEXT, lineHeight: 1.32, margin: 0,
          letterSpacing: '-0.005em',
        }}>
          {headline}
        </h2>
        {subhead && (
          <p style={{
            fontFamily: dmSans, fontSize: 14, fontWeight: 400,
            color: MUTED, lineHeight: 1.65, margin: '16px 0 0',
          }}>
            {subhead}
          </p>
        )}
        {proof && (
          <div style={{
            marginTop: 22, paddingLeft: 14,
            borderLeft: `2px solid ${ORANGE}`,
          }}>
            <p style={{
              fontFamily: dmSans, fontSize: 12, fontWeight: 600,
              color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, margin: 0,
              fontStyle: 'italic',
            }}>
              {proof}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={onContinue}
        style={{
          marginTop: 28, width: '100%', padding: '15px 24px',
          borderRadius: 999, border: 'none', background: ORANGE,
          color: TEXT, fontFamily: dmSans, fontSize: 16, fontWeight: 600,
          cursor: 'pointer', minHeight: 'auto', transition: 'background 0.2s',
        }}
      >
        {continueLabel} →
      </button>
    </motion.div>
  );
}
