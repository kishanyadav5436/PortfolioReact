/**
 * Fieldnote.jsx
 * One dated notebook-page section per project.
 * Fixes:
 * - Bug 3: Swap between Preview (collapsed) and Full (expanded) state inside a transition wrapper.
 * - Bug 4: Filmstrip properly falls back to PlaceholderFrame if images lack src, hides only if array is totally empty.
 */

import { useState, useCallback, useRef, useId, useEffect } from 'react';
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
  const [animating, setAnimating] = useState(false);
  const reducedMotion = useReducedMotion();
  const bodyId = useId();
  const toggleRefPreview = useRef(null);
  const toggleRefFull = useRef(null);

  const displayDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const handleExpand = useCallback(() => {
    setOpen(true);
    setAnimating(true);
  }, []);

  const handleCollapse = useCallback(() => {
    setOpen(false);
    setAnimating(true);
  }, []);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => setAnimating(false), 400); // match CSS duration
      return () => clearTimeout(timer);
    }
  }, [animating]);

  const handleKeyDownPreview = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleExpand();
    }
  }, [handleExpand]);

  const handleKeyDownFull = useCallback((e) => {
    if (e.key === 'Escape') {
      handleCollapse();
      // focus back to preview toggle
      setTimeout(() => toggleRefPreview.current?.focus(), 50);
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCollapse();
    }
  }, [handleCollapse]);

  // Is the filmstrip entirely empty?
  const hasFilmstrip = images && images.length > 0;

  return (
    <article
      id={id}
      className="fieldnote"
      aria-label={`Fieldnote: ${title}`}
    >
      <div className={`fieldnote__swap-wrap ${open ? 'is-open' : ''} ${reducedMotion ? 'reduced-motion' : ''}`}>
        
        {/* ── COLLAPSED PREVIEW STATE ── */}
        <div className={`fieldnote__preview ${open ? 'hidden' : 'visible'} ${animating ? 'animating' : ''}`}>
          <span className="fieldnote__project-num">
            {String(index + 1).padStart(2, '0')} / fieldnote
          </span>
          <h2 className="fieldnote__title" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>{title}</h2>
          
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--pen)',
                border: '1px solid rgba(178,58,46,0.35)',
                padding: '2px 8px',
                borderRadius: '2px',
              }}
            >
              {category}
            </span>
            {stack.slice(0, 3).map((s) => (
              <span key={s} className="fieldnote__stack-item">{s}</span>
            ))}
            {stack.length > 3 && (
              <span className="fieldnote__stack-item">+{stack.length - 3}</span>
            )}
          </div>

          {summary && (
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--muted)',
                lineHeight: 1.65,
                marginBottom: '1rem',
                maxWidth: 560,
              }}
            >
              {summary}
            </p>
          )}

          <button
            ref={toggleRefPreview}
            className="fieldnote__toggle"
            onClick={handleExpand}
            onKeyDown={handleKeyDownPreview}
            aria-expanded={open}
            aria-controls={bodyId}
            aria-label={`Read ${title} fieldnote`}
          >
            read fieldnote →
          </button>
        </div>

        {/* ── EXPANDED FULL STATE ── */}
        <div 
          id={bodyId}
          className={`fieldnote__full ${open ? 'visible' : 'hidden'} ${animating ? 'animating' : ''}`}
          aria-hidden={!open}
        >
          <header className="fieldnote__header">
            <div>
              <span className="fieldnote__project-num">
                {String(index + 1).padStart(2, '0')} / fieldnote
              </span>
              <span className="fieldnote__date-stamp">{displayDate}</span>
              <h2 className="fieldnote__title">{title}</h2>

              {/* Repo / live links */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
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

                <button
                  ref={toggleRefFull}
                  className="fieldnote__toggle"
                  onClick={handleCollapse}
                  onKeyDown={handleKeyDownFull}
                  aria-expanded={open}
                  aria-controls={bodyId}
                  aria-label={`Collapse ${title} fieldnote`}
                >
                  ↑ collapse
                </button>
              </div>
            </div>

            <aside className="fieldnote__meta" aria-label="Project metadata">
              <div style={{ fontStyle: 'italic', color: 'var(--ink-light)', fontSize: '0.72rem' }}>
                {roleTag}
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '0.65rem', marginTop: '0.2rem' }}>
                {weekLabel}
              </div>
            </aside>
          </header>

          <div className="fieldnote__body" style={{ paddingTop: '1rem' }}>
            {/* Dated journal entries */}
            {entries.map((entry, i) => (
              <div key={i} className="fieldnote__entry">
                <span className="fieldnote__entry-week">{entry.week}</span>
                <p className="fieldnote__entry-text">{entry.text}</p>
              </div>
            ))}

            {/* Filmstrip — drag hint only on first project */}
            {hasFilmstrip && (
              <Filmstrip images={images} projectId={id} showHint={index === 0} />
            )}

            {/* Full Stack pills */}
            {stack.length > 0 && (
              <div className="fieldnote__stack" style={{ marginTop: '2rem' }} aria-label="Technologies">
                {stack.map((s) => (
                  <span key={s} className="fieldnote__stack-item">{s}</span>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}
