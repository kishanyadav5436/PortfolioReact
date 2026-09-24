/**
 * Fieldnote.jsx
 * One dated notebook-page section per project.
 * Fixes applied:
 *  - Collapsed by default; expands in-place via CSS max-height/opacity transition
 *  - Keyboard operable (Enter/Space on toggle, Escape to collapse)
 *  - prefers-reduced-motion: skip transition, instant show/hide
 *  - "role —", "period —", "stack — N tools" labels removed/simplified
 *  - Filmstrip showHint only on first project (index === 0)
 *  - No "stack — N tools" count text; pills already show the tools
 */

import { useState, useCallback, useRef, useId } from 'react';
import Filmstrip from './Filmstrip';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Fieldnote({ project, index }) {
  const {
    id,
    title,
    category,
    roleTag,
    weekLabel,
    date,
    repo,
    live,
    stack = [],
    entries = [],
    images = [],
    summary,
  } = project;

  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const bodyId = useId();
  const toggleRef = useRef(null);

  const displayDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const toggle = useCallback(() => setOpen((v) => !v), []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
    if (e.key === 'Escape' && open) {
      setOpen(false);
      toggleRef.current?.focus();
    }
  }, [open, toggle]);

  return (
    <article
      id={id}
      className="fieldnote"
      aria-label={`Fieldnote: ${title}`}
    >
      {/* ── Always-visible collapsed header ── */}
      <header className="fieldnote__header">
        <div>
          <span className="fieldnote__project-num">
            {String(index + 1).padStart(2, '0')} / fieldnote
          </span>
          <span className="fieldnote__date-stamp">{displayDate}</span>
          <h2 className="fieldnote__title">{title}</h2>

          {/* Category badge */}
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--pen)',
              border: '1px solid rgba(178,58,46,0.35)',
              padding: '2px 8px',
              borderRadius: '2px',
              marginTop: '0.5rem',
            }}
          >
            {category}
          </span>

          {/* One-line summary always visible */}
          {summary && (
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--muted)',
                lineHeight: 1.65,
                marginTop: '0.6rem',
                maxWidth: 560,
              }}
            >
              {summary}
            </p>
          )}

          {/* Stack pills — always visible, no "N tools" count */}
          {stack.length > 0 && (
            <div className="fieldnote__stack" style={{ marginTop: '0.75rem' }} aria-label="Technologies">
              {stack.map((s) => (
                <span key={s} className="fieldnote__stack-item">{s}</span>
              ))}
            </div>
          )}

          {/* Repo / live links */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="annotation-link"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem' }}
                aria-label={`View ${title} source code on GitHub`}
              >
                ↗ view source
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="annotation-link"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem' }}
                aria-label={`View ${title} live demo`}
              >
                ◈ live demo
              </a>
            )}

            {/* Toggle button */}
            <button
              ref={toggleRef}
              className="fieldnote__toggle"
              onClick={toggle}
              onKeyDown={handleKeyDown}
              aria-expanded={open}
              aria-controls={bodyId}
              aria-label={open ? `Collapse ${title} fieldnote` : `Read ${title} fieldnote`}
              tabIndex={0}
            >
              {open ? '↑ collapse' : 'read fieldnote →'}
            </button>
          </div>
        </div>

        {/* Metadata aside — simplified, no "role —" prefixes */}
        <aside
          className="fieldnote__meta"
          aria-label="Project metadata"
        >
          <div style={{ fontStyle: 'italic', color: 'var(--ink-light)', fontSize: '0.72rem' }}>
            {roleTag}
          </div>
          <div style={{ color: 'var(--muted)', fontSize: '0.65rem', marginTop: '0.2rem' }}>
            {weekLabel}
          </div>
        </aside>
      </header>

      {/* ── Expandable body ── */}
      <div
        id={bodyId}
        className={`fieldnote__expand-wrap${open ? ' is-open' : ''}`}
        style={reducedMotion
          ? { display: open ? 'block' : 'none' }
          : undefined
        }
        aria-hidden={!open}
      >
        <div className="fieldnote__body" style={{ paddingTop: '1.5rem' }}>
          {/* Dated journal entries */}
          {entries.map((entry, i) => (
            <div key={i} className="fieldnote__entry">
              <span className="fieldnote__entry-week">{entry.week}</span>
              <p className="fieldnote__entry-text">{entry.text}</p>
            </div>
          ))}

          {/* Filmstrip — drag hint only on first project */}
          {images.length > 0 && (
            <Filmstrip images={images} projectId={id} showHint={index === 0} />
          )}
        </div>
      </div>
    </article>
  );
}
