/**
 * Experience.jsx
 * Internship timeline — two roles rendered as fieldnote-style journal entries.
 * CodeAlpha (May-Jun 2026) and GRAStech (Jun-Aug 2026).
 */

import { EXPERIENCE } from '../data/projects';

export default function Experience() {
  return (
    <section
      id="experience"
      className="fieldnote"
      style={{ borderTop: '1px solid var(--rule-dark)', padding: '3.5rem 0 2.5rem' }}
      aria-label="Work experience"
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
          00 / experience
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
          Where I have worked
        </h2>
      </header>

      {/* Timeline */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          maxWidth: 720,
          position: 'relative',
        }}
      >
        {/* Vertical timeline rule */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'var(--rule-dark)',
          }}
          aria-hidden="true"
        />

        {EXPERIENCE.map((exp, i) => (
          <article
            key={exp.id}
            id={exp.id}
            style={{ paddingLeft: '1.5rem', position: 'relative' }}
            aria-label={`${exp.role} at ${exp.company}`}
          >
            {/* Timeline dot */}
            <span
              style={{
                position: 'absolute',
                left: -4,
                top: 6,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: i === 0 ? 'var(--pen)' : 'var(--muted-light)',
                border: '1px solid var(--paper-dark)',
              }}
              aria-hidden="true"
            />

            {/* Role + company */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'start', marginBottom: '1rem' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.63rem',
                    color: 'var(--pen)',
                    fontStyle: 'italic',
                    display: 'block',
                    marginBottom: '0.2rem',
                  }}
                >
                  {exp.period}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: 'var(--ink)',
                    fontStyle: 'italic',
                    marginBottom: '0.2rem',
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--muted)',
                  }}
                >
                  {exp.company} &mdash; {exp.location}
                </p>
              </div>

              {/* Type badge */}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  color: 'var(--pen)',
                  border: '1px solid rgba(178,58,46,0.3)',
                  padding: '2px 8px',
                  borderRadius: '2px',
                  whiteSpace: 'nowrap',
                  alignSelf: 'flex-start',
                }}
              >
                {exp.type}
              </span>
            </div>

            {/* Journal entries */}
            {exp.entries.map((entry, j) => (
              <div key={j} className="fieldnote__entry" style={{ marginBottom: '1.25rem' }}>
                <span className="fieldnote__entry-week">{entry.week}</span>
                <p className="fieldnote__entry-text">{entry.text}</p>
              </div>
            ))}

            {/* Stack */}
            <div className="fieldnote__stack" style={{ marginTop: '0.75rem' }}>
              {exp.stack.map((s) => (
                <span key={s} className="fieldnote__stack-item">{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
