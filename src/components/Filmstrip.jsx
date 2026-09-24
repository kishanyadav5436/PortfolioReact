/**
 * Filmstrip.jsx
 * Horizontal drag-scroll filmstrip of sketch→final progression images.
 * Supports mouse drag and touch events.
 */

import { useRef, useCallback } from 'react';

// Placeholder frames when no real images provided — generates a colored swatch
function PlaceholderFrame({ index, caption, badge }) {
  const colors = ['#D4C5A9', '#C9B99A', '#BFB091', '#B5A688'];
  const bg = colors[index % colors.length];

  return (
    <div className="filmstrip__frame" key={index}>
      <div
        style={{
          width: '100%',
          height: 140,
          background: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {badge && <span className="filmstrip__frame-badge">{badge}</span>}
        {/* Minimal "image placeholder" visual */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="28" height="28" rx="2" stroke="rgba(33,29,23,0.2)" strokeWidth="1.5" />
          <circle cx="10" cy="11" r="3" stroke="rgba(33,29,23,0.2)" strokeWidth="1.5" />
          <path d="M2 22l7-7 6 6 4-4 11 11" stroke="rgba(33,29,23,0.2)" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="filmstrip__frame-caption">{caption}</div>
    </div>
  );
}

export default function Filmstrip({ images = [], projectId }) {
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
    const walk = (x - dragState.current.startX) * 1.4;
    track.scrollLeft = dragState.current.scrollLeft - walk;
  }, []);

  if (!images || images.length === 0) return null;

  return (
    <div className="filmstrip" aria-label="Project process filmstrip">
      <span className="filmstrip__label">← drag to explore process →</span>
      <div
        className="filmstrip__track"
        ref={trackRef}
        role="list"
        aria-label={`${projectId} process images`}
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
              <PlaceholderFrame
                index={i}
                caption={img.caption}
                badge={img.badge}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
