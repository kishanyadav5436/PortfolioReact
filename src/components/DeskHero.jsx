/**
 * DeskHero.jsx
 * Above-the-fold desk — bio header + tech arsenal + scattered project cards.
 * All data pulled from PROFILE and STACK constants in projects.js.
 */

import ProjectCard from './ProjectCard';
import { useSettleIn } from '../hooks/useSettleIn';
import { projects, PROFILE, STACK } from '../data/projects';

export default function DeskHero() {
  // +2 slots: 0 = header, 1 = arsenal, then project cards
  const visible = useSettleIn(projects.length + 2, 60, 80);

  return (
    <section id="desk" className="desk-hero" aria-label="Desk — introduction and projects">

      {/* ── Bio header ────────────────────────────────── */}
      <header
        className={`desk-hero__header ${visible[0] ? 'settle-visible' : 'settle-hidden'}`}
        style={{ '--card-rotation': '0deg' }}
      >
        <span className="desk-hero__eyebrow">
          field journal &middot; 2025–2026 &middot; Lucknow, UP, India
        </span>

        <h1 className="desk-hero__name">
          Kishan Kumar<br />
          <em>builds things that work.</em>
        </h1>

        <p className="desk-hero__tagline">
          Full-stack MERN developer. ML practitioner. Final year B.Tech CSE at BBDU, Lucknow
          (CGPA&nbsp;8.6, expected&nbsp;2027). 50+ DSA problems in Java.
          These notes document actual decisions — what got built, what broke, what I learned.
        </p>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            marginTop: '1.25rem',
            flexWrap: 'wrap',
          }}
          aria-label="Quick stats"
        >
          {[
            { label: 'CGPA', value: '8.6 / 10' },
            { label: 'Graduation', value: '2027' },
            { label: 'DSA', value: '50+ Java' },
            { label: 'Internships', value: '2 completed' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  color: 'var(--pen)',
                  fontStyle: 'italic',
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--ink)',
                  fontWeight: 500,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            marginTop: '1.1rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={PROFILE.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="annotation-link"
            style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}
            aria-label="Live portfolio site"
          >
            ↗ portfolio-kishan.vercel.app
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="annotation-link"
            style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}
            aria-label="GitHub profile"
          >
            ⌥ github.com/kishanyadav5436
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="annotation-link"
            style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}
            aria-label="LinkedIn profile"
          >
            ↗ linkedin.com/in/kishankumar21
          </a>
        </div>
      </header>

      {/* ── Tech Arsenal ──────────────────────────────── */}
      <div
        className={`${visible[1] ? 'settle-visible' : 'settle-hidden'}`}
        style={{
          '--card-rotation': '0deg',
          marginBottom: '2.5rem',
          maxWidth: 700,
          borderTop: '1px solid var(--rule)',
          paddingTop: '1.5rem',
        }}
        aria-label="Tech arsenal"
      >
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
          tech arsenal —
        </span>
        <dl
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '0.6rem 2rem',
          }}
        >
          {STACK.map(({ domain, tech }) => (
            <div key={domain} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <dt
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--pen)',
                  fontStyle: 'italic',
                }}
              >
                {domain}
              </dt>
              <dd
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--muted)',
                  lineHeight: 1.55,
                }}
              >
                {tech}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Scattered project cards ────────────────────── */}
      <div
        role="list"
        className="desk-hero__cards-area"
        aria-label="Project cards — click to expand"
      >
        {projects.map((project, i) => (
          <div key={project.id} role="listitem">
            <ProjectCard
              project={project}
              settleVisible={visible[i + 2]}
            />
          </div>
        ))}
      </div>

      {/* Scroll nudge */}
      <div
        style={{
          marginTop: '1.5rem',
          opacity: visible[projects.length + 1] ? 0.45 : 0,
          transition: 'opacity 0.4s ease',
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.63rem',
            color: 'var(--muted)',
            fontStyle: 'italic',
          }}
        >
          scroll for experience, fieldnotes, and credentials ↓
        </span>
      </div>
    </section>
  );
}
