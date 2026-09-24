/**
 * Filmstrip.jsx
 * Horizontal drag-scroll filmstrip of sketch→final progression images.
 * Fixes:
 *  - Placeholder frames: no broken <img>, just a tone-matched rectangle + label
 *  - "drag to explore" hint passed via prop so it only shows once across all fieldnotes
 *  - Hides entirely when images array is empty
 *  - real images get loading="lazy"
 */

import { useRef, useCallback } from 'react';

// Tone-matched paper palette — no broken icon, just a solid swatch
const SWATCH_COLORS = ['#D8CEBC', '#CEC3AF', '#C4B9A3', '#BAB098'];

function PlaceholderFrame({ index, caption, badge }) {
  const bg = SWATCH_COLORS[index % SWATCH_COLORS.length];
  return (
    <div className="filmstrip__frame">
      <div
        style={{
          width: '100%',
          height: 140,
          background: bg,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '0 12px',
        }}
        aria-hidden="true"
      >
        {badge && <span className="filmstrip__frame-badge">{badge}</span>}
        {/* label centered in the swatch */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'rgba(33,29,23,0.45)',
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: 1.5,
            marginTop: badge ? '1rem' : 0,
          }}
        >
          {caption}
        </span>
      </div>
      <div className="filmstrip__frame-caption" aria-label={caption}>{caption}</div>
    </div>
  );
}

/**
 * @param {object[]} images     — array of { src, caption, badge }
 * @param {string}   projectId  — for aria-label
 * @param {boolean}  showHint   — whether to show the drag hint label (show only once per page)
 */
export default function Filmstrip({ images = [], projectId, showHint = false }) {
  const trackRef = useRef(null);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = useCallback((e) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = {
      isDragging: true,
      startX: e.pageX - track.offsetLeft,
      scrollLeft: track.scrollLeft,
    };
    track.style.cursor = 'grabbing';
  }, []);

  const onMouseLeave = useCallback(() => {
    dragState.current.isDragging = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  }, []);

  const onMouseUp = useCallback(() => {
    dragState.current.isDragging = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!dragState.current.isDragging) return;
    e.preventDefault();
    const track = trackRef.current;
    if (!track) return;
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX) * 1.4;
  }, []);

  // Hide entirely when no images
  if (!images || images.length === 0) return null;

  return (
    <div className="filmstrip" aria-label={`${projectId} process images`}>
      {showHint && (
        <span className="filmstrip__label" aria-hidden="true">← drag to explore process →</span>
      )}
      <div
        className="filmstrip__track"
        ref={trackRef}
        role="list"
        aria-label={`${projectId} process`}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {images.map((img, i) => (
          <div key={i} role="listitem">
            {img.src ? (
              <div className="filmstrip__frame">
                {img.badge && <span className="filmstrip__frame-badge">{img.badge}</span>}
                <img
                  src={img.src}
                  alt={img.caption}
                  draggable="false"
                  loading="lazy"
                />
                <div className="filmstrip__frame-caption">{img.caption}</div>
              </div>
            ) : (
              <PlaceholderFrame index={i} caption={img.caption} badge={img.badge} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
