/**
 * Fieldnote.jsx
 * One dated notebook-page section per project.
 * Written as dated field journal entries, not Problem/Solution/Result.
 * Shows real repo links and category badges.
 */

import Filmstrip from './Filmstrip';

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
  } = project;

  const displayDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article
      id={id}
      className="fieldnote"
      aria-label={`Fieldnote: ${title}`}
    >
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

          {/* Repo / live links */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
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
          </div>
        </div>

        <aside className="fieldnote__meta" aria-label="Project metadata">
          <div>
            <span className="fieldnote__meta-label">role — </span>
            {roleTag}
          </div>
          <div>
            <span className="fieldnote__meta-label">period — </span>
            {weekLabel}
          </div>
          <div>
            <span className="fieldnote__meta-label">stack — </span>
            {stack.length} tools
          </div>
        </aside>
      </header>

      <div className="fieldnote__body">
        {/* Dated journal entries */}
        {entries.map((entry, i) => (
          <div key={i} className="fieldnote__entry">
            <span className="fieldnote__entry-week">{entry.week}</span>
            <p className="fieldnote__entry-text">{entry.text}</p>
          </div>
        ))}

        {/* Filmstrip */}
        {images.length > 0 && (
          <Filmstrip images={images} projectId={id} />
        )}

        {/* Stack tags */}
        {stack.length > 0 && (
          <div className="fieldnote__stack" aria-label="Technologies used">
            {stack.map((s) => (
              <span key={s} className="fieldnote__stack-item">{s}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
