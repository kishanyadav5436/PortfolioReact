/**
 * ProjectCard.jsx
 * Rotated (deterministically) pinned card.
 * Clicking unfolds into an inline case study via CSS scaleY transform.
 * Rotation is seeded from project.id so it never jitters on re-render.
 */

import { useState, useCallback } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import Filmstrip from './Filmstrip';

/**
 * Deterministic rotation from a string seed.
 * Returns a value between minDeg and maxDeg.
 */
function seedRotation(id, minDeg = -5, maxDeg = 5) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  const t = (hash % 1000) / 1000; // 0..1
  return minDeg + t * (maxDeg - minDeg);
}

export default function ProjectCard({ project, settleVisible, style: extraStyle = {} }) {
  const {
    id,
    title,
    roleTag,
    weekLabel,
    summary,
    stack = [],
    entries = [],
    images = [],
  } = project;

  const [expanded, setExpanded] = useState(false);
  const [collapsing, setCollapsing] = useState(false);
  const reducedMotion = useReducedMotion();

  const rotation = reducedMotion ? 0 : seedRotation(id, -5, 5);

  const handleExpand = useCallback(() => {
    setExpanded(true);
  }, []);

  const handleCollapse = useCallback((e) => {
    e.stopPropagation();
    if (reducedMotion) {
      setExpanded(false);
      return;
    }
    setCollapsing(true);
    setTimeout(() => {
      setExpanded(false);
      setCollapsing(false);
    }, 280);
  }, [reducedMotion]);

  const handleKeyDown = useCallback((e) => {
    if (!expanded && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleExpand();
    }
    if (expanded && e.key === 'Escape') {
      handleCollapse(e);
    }
  }, [expanded, handleExpand, handleCollapse]);

  const cardStyle = {
    '--card-rotation': `${rotation}deg`,
    transform: expanded ? 'rotate(0deg)' : `rotate(${rotation}deg)`,
    ...extraStyle,
  };

  return (
    <article
      id={`card-${id}`}
      className={[
        'project-card',
        expanded ? 'expanded' : '',
        settleVisible ? 'settle-visible' : 'settle-hidden',
      ].join(' ').trim()}
      style={cardStyle}
      onClick={!expanded ? handleExpand : undefined}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      aria-label={`${title} — ${expanded ? 'collapse' : 'read case study'}`}
    >
      {/* Close button when expanded */}
      {expanded && (
        <button
          className="project-card__close"
          onClick={handleCollapse}
          aria-label="Collapse card"
          tabIndex={0}
        >
          ✕ close
        </button>
      )}

      <div className="project-card__inner">
        {/* Card header — always visible */}
        <span className="project-card__week">{weekLabel}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__role">{roleTag}</p>

        <div className="project-card__tags">
          {project.category && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--muted)', fontStyle: 'italic', display: 'block', width: '100%', marginBottom: '4px' }}>
              {project.category}
            </span>
          )}
          {stack.slice(0, 3).map((s) => (
            <span key={s} className="project-card__tag">{s}</span>
          ))}
          {stack.length > 3 && (
            <span className="project-card__tag">+{stack.length - 3}</span>
          )}
        </div>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '0.5rem' }}>
          {summary}
        </p>

        {!expanded && (
          <span className="project-card__cta" aria-hidden="true">
            read fieldnote
          </span>
        )}
      </div>

      {/* Expanded body — case study inline */}
      {expanded && (
        <div
          className={`project-card__expand-body${collapsing ? ' collapsing' : ''}`}
          style={{ padding: '0 1.25rem 1.5rem' }}
        >
          <hr style={{ border: 'none', borderTop: '1px solid var(--rule)', margin: '0.5rem 0 1.25rem' }} />

          {/* Journal entries */}
          {entries.map((entry, i) => (
            <div
              key={i}
              style={{
                marginBottom: '1.5rem',
                paddingLeft: '1rem',
                borderLeft: '2px solid var(--rule)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--pen)',
                  fontWeight: 500,
                  marginBottom: '0.3rem',
                }}
              >
                {entry.week}
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--ink-light)',
                  lineHeight: 1.75,
                }}
              >
                {entry.text}
              </p>
            </div>
          ))}

          {/* Filmstrip */}
          {images.length > 0 && (
            <Filmstrip images={images} projectId={id} />
          )}

          {/* Full stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1rem', marginBottom: '0.75rem' }}>
            {stack.map((s) => (
              <span key={s} className="project-card__tag">{s}</span>
            ))}
          </div>

          {/* Repo link */}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--pen)',
                textDecoration: 'underline',
                textDecorationStyle: 'wavy',
                textUnderlineOffset: 4,
                display: 'inline-block',
              }}
              aria-label={`Open ${title} GitHub repository`}
            >
              ↗ view source on GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}
