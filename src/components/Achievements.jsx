/**
 * Achievements.jsx
 * Certifications & licenses — rendered as an annotated list, not a badge grid.
 * Groups by type: certifications/simulations first, then training, then hackathons.
 */

import { ACHIEVEMENTS } from '../data/projects';

// Type -> display label and color hint
const TYPE_META = {
  simulation:    { label: 'job simulation',  color: 'var(--pen)' },
  certification: { label: 'certification',   color: 'var(--pen)' },
  training:      { label: 'training',        color: 'var(--muted)' },
  internship:    { label: 'internship',      color: 'var(--muted)' },
  hackathon:     { label: 'hackathon',       color: 'var(--muted)' },
  program:       { label: 'program',         color: 'var(--muted)' },
};

// Display order of types
const TYPE_ORDER = ['simulation', 'certification', 'training', 'internship', 'hackathon', 'program'];

export default function Achievements() {
  const grouped = TYPE_ORDER.reduce((acc, type) => {
    const items = ACHIEVEMENTS.filter((a) => a.type === type);
    if (items.length > 0) acc.push({ type, items });
    return acc;
  }, []);

  return (
    <section
      id="achievements"
      className="fieldnote"
      style={{ borderTop: '1px solid var(--rule-dark)', padding: '3.5rem 0 2.5rem' }}
      aria-label="Certifications and achievements"
    >
      {/* Section header */}
      <header style={{ marginBottom: '2.5rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--pen)',
            fontStyle: 'italic',
            display: 'block',
            marginBottom: '0.3rem',
          }}
        >
          licenses &amp; certifications
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
            fontWeight: 400,
            color: 'var(--ink)',
            fontStyle: 'italic',
          }}
        >
          Credentials
        </h2>
      </header>

      {/* Grouped lists */}
      <div style={{ maxWidth: 720, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {grouped.map(({ type, items }) => {
          const meta = TYPE_META[type] || { label: type, color: 'var(--muted)' };
          return (
            <div key={type}>
              {/* Group label */}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: meta.color,
                  fontStyle: 'italic',
                  display: 'block',
                  marginBottom: '0.75rem',
                  textTransform: 'lowercase',
                }}
              >
                {meta.label}
              </span>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {items.map((cert) => (
                  <li
                    key={cert.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '1rem',
                      alignItems: 'start',
                      paddingLeft: '1rem',
                      borderLeft: '2px solid var(--rule)',
                      transition: 'border-left-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderLeftColor = 'var(--pen)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderLeftColor = 'var(--rule)'}
                  >
                    <div>
                      {/* Title */}
                      <p
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.95rem',
                          fontWeight: 400,
                          color: 'var(--ink)',
                          fontStyle: 'italic',
                          marginBottom: '0.2rem',
                          lineHeight: 1.25,
                        }}
                      >
                        {cert.title}
                      </p>

                      {/* Issuer + date */}
                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          color: 'var(--muted)',
                          marginBottom: cert.note ? '0.4rem' : 0,
                        }}
                      >
                        {cert.issuer}
                        {cert.issued && (
                          <span style={{ color: 'var(--muted-light)', marginLeft: 8 }}>
                            &middot; {cert.issued}
                          </span>
                        )}
                        {cert.credentialId && (
                          <span style={{ color: 'var(--muted-light)', marginLeft: 8 }}>
                            &middot; ID: {cert.credentialId}
                          </span>
                        )}
                      </p>

                      {/* Note */}
                      {cert.note && (
                        <p
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            color: 'var(--ink-light)',
                            lineHeight: 1.65,
                            marginBottom: cert.skills ? '0.5rem' : 0,
                          }}
                        >
                          {cert.note}
                        </p>
                      )}

                      {/* Skill tags */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: '0.35rem' }}>
                          {cert.skills.map((s) => (
                            <span key={s} className="fieldnote__stack-item" style={{ fontSize: '0.58rem' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Verify link */}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="annotation-link"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          whiteSpace: 'nowrap',
                          alignSelf: 'flex-start',
                          marginTop: '2px',
                        }}
                        aria-label={`Verify ${cert.title} credential`}
                      >
                        verify ↗
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
