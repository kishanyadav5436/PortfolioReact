/**
 * Achievements.jsx
 * Certifications & licenses — rendered as an annotated list.
 *
 * Split into two clearly labelled sub-groups:
 *   A. Certifications (MongoDB, Anthropic, Google Vertex AI)
 *   B. Simulations & Training (Forage JPMorgan, Forage Deloitte, GRAStech)
 *   C. Hackathons & Programs (Adobe, Kalpathon, Learnovate, CodeAlpha)
 *
 * "verify ↗" links only appear where credentialUrl exists.
 */

import { ACHIEVEMENTS } from '../data/projects';

// ── Sub-group definitions ─────────────────────────────────────
const GROUPS = [
  {
    key: 'certs',
    heading: 'Certifications',
    annotation: 'issued by credential-granting bodies',
    ids: ['claude-101', 'mongodb-model', 'vertex-ai'],
  },
  {
    key: 'sims',
    heading: 'Simulations & Training',
    annotation: 'job simulations and structured programs',
    ids: ['jpmc-sim', 'deloitte-sim', 'ml-training'],
  },
  {
    key: 'hackathons',
    heading: 'Hackathons & Programs',
    annotation: 'competition participation and professional programs',
    ids: ['adobe-hack', 'kalpathon', 'codealpha-cert', 'learnovate'],
  },
];

// Lookup by id for O(1) access
const BY_ID = Object.fromEntries(ACHIEVEMENTS.map((a) => [a.id, a]));

// ── Sub-group heading style ────────────────────────────────────
function GroupHeading({ heading, annotation }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'var(--ink)',
          marginBottom: '0.2rem',
        }}
      >
        {heading}
      </h3>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          color: 'var(--muted)',
          fontStyle: 'italic',
        }}
      >
        {annotation}
      </span>
    </div>
  );
}

// ── Single credential row ─────────────────────────────────────
function CredentialRow({ cert }) {
  return (
    <li
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '1rem',
        alignItems: 'start',
        paddingLeft: '1rem',
        borderLeft: '2px solid var(--rule)',
        marginBottom: '1.1rem',
        transition: 'border-left-color 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = 'var(--pen)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = 'var(--rule)')}
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
            marginBottom: '0.15rem',
            lineHeight: 1.25,
          }}
        >
          {cert.title}
        </p>

        {/* Issuer · date · credential ID */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.63rem',
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
              &middot; ID:&nbsp;{cert.credentialId}
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
              marginBottom: cert.skills?.length ? '0.5rem' : 0,
            }}
          >
            {cert.note}
          </p>
        )}

        {/* Skill tags */}
        {cert.skills?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: '0.35rem' }}>
            {cert.skills.map((s) => (
              <span
                key={s}
                className="fieldnote__stack-item"
                style={{ fontSize: '0.58rem' }}
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* verify link — only if credentialUrl exists */}
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
  );
}

// ── Main component ────────────────────────────────────────────
export default function Achievements() {
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

      {/* Three clearly split sub-groups */}
      <div style={{ maxWidth: 720, display: 'flex', flexDirection: 'column', gap: '2.75rem' }}>
        {GROUPS.map(({ key, heading, annotation, ids }) => {
          const items = ids.map((id) => BY_ID[id]).filter(Boolean);
          if (items.length === 0) return null;
          return (
            <div key={key}>
              <GroupHeading heading={heading} annotation={annotation} />
              <ul style={{ listStyle: 'none' }}>
                {items.map((cert) => (
                  <CredentialRow key={cert.id} cert={cert} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
