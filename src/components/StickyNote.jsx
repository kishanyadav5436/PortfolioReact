/**
 * StickyNote.jsx
 * Footer contact block + GitHub project summary table.
 * Rendered as a yellow sticky note, rotated slightly.
 */

import { PROFILE, projects } from '../data/projects';

// Category -> color hint for the table rows
const CATEGORY_COLORS = {
  'Full-Stack Web':    'var(--pen)',
  'AI / Fintech':      'var(--pen)',
  'EdTech / DSA':      'var(--muted)',
  'Hackathon / Web':   'var(--muted)',
  'Machine Learning':  'var(--ink-light)',
  'Data Science / ML': 'var(--ink-light)',
  'AI / Accessibility':'var(--muted)',
  'Utility / Learning':'var(--muted)',
};

export default function StickyNote() {
  return (
    <footer id="contact" className="sticky-note-section" aria-label="Contact and project summary">

      {/* ── GitHub Summary Table ── */}
      <div style={{ marginBottom: '3rem', overflowX: 'auto' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--pen)',
            fontStyle: 'italic',
            display: 'block',
            marginBottom: '0.75rem',
          }}
        >
          github summary —
        </span>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
          }}
          aria-label="GitHub project summary table"
        >
          <thead>
            <tr>
              {['Project', 'Category', 'Primary Stack', 'Repository'].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: 'left',
                    padding: '6px 12px 6px 0',
                    color: 'var(--muted)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    borderBottom: '1px solid var(--rule-dark)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <tr
                key={p.id}
                style={{
                  borderBottom: '1px solid var(--rule)',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(33,29,23,0.03)',
                }}
              >
                <td
                  style={{
                    padding: '7px 12px 7px 0',
                    color: 'var(--ink)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {p.title}
                </td>
                <td
                  style={{
                    padding: '7px 12px 7px 0',
                    color: CATEGORY_COLORS[p.category] || 'var(--muted)',
                    whiteSpace: 'nowrap',
                    fontSize: '0.63rem',
                  }}
                >
                  {p.category}
                </td>
                <td
                  style={{
                    padding: '7px 12px 7px 0',
                    color: 'var(--muted)',
                    maxWidth: 260,
                  }}
                >
                  {p.stack.slice(0, 4).join(', ')}
                  {p.stack.length > 4 && <span style={{ color: 'var(--pen)', fontStyle: 'italic' }}> +{p.stack.length - 4}</span>}
                </td>
                <td style={{ padding: '7px 0', whiteSpace: 'nowrap' }}>
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--pen)',
                        fontSize: '0.63rem',
                        textDecoration: 'underline',
                        textUnderlineOffset: 3,
                      }}
                      aria-label={`GitHub repository for ${p.title}`}
                    >
                      ↗ repo
                    </a>
                  ) : (
                    <span style={{ color: 'var(--muted)', fontStyle: 'italic', fontSize: '0.63rem' }}>private</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Sticky Note Contact ── */}
      <div className="section-label">— end of journal —</div>

      <div
        role="complementary"
        aria-label="Contact sticky note"
        className="sticky-note"
      >
        <h2 className="sticky-note__heading">Let's work together.</h2>
        <p className="sticky-note__body">
          I'm Kishan Yadav — full-stack + AI/ML engineer, currently pursuing B.Tech CSE at BBD University, Lucknow.
          Focused on Next.js 14, MERN architecture, and generative AI applications.
          <br /><br />
          If you're building something ambitious and need someone who cares about the details,
          I'd like to hear about it.
        </p>

        <div className="sticky-note__links" role="list">
          <a
            id="contact-email"
            href={`mailto:${PROFILE.email}`}
            className="sticky-note__link"
            aria-label="Email Kishan Yadav"
            role="listitem"
          >
            <span className="sticky-note__link-arrow">✉</span>
            {PROFILE.email}
          </a>
          <a
            id="contact-github"
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-note__link"
            aria-label="GitHub profile (opens in new tab)"
            role="listitem"
          >
            <span className="sticky-note__link-arrow">⌥</span>
            github.com/kishanyadav5436
          </a>
          <a
            id="contact-linkedin"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-note__link"
            aria-label="LinkedIn profile (opens in new tab)"
            role="listitem"
          >
            <span className="sticky-note__link-arrow">↗</span>
            linkedin.com/in/kishankumar21
          </a>
          <a
            id="contact-portfolio"
            href={PROFILE.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-note__link"
            aria-label="Live portfolio (opens in new tab)"
            role="listitem"
          >
            <span className="sticky-note__link-arrow">◈</span>
            portfolio-kishan.vercel.app
          </a>
        </div>
      </div>

      <p className="sticky-footer-note">
        Fieldnotes — Kishan Yadav (kishanyadav5436) · built with Vite + React + plain CSS ·
        no analytics · <time dateTime="2026">&copy; 2026</time>
      </p>
    </footer>
  );
}
