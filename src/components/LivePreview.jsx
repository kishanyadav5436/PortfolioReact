import { useState, useEffect } from 'react';

export default function LivePreview({ liveUrl, assetUrl }) {
  // 'idle' (waiting for click) -> 'loading' -> 'loaded' | 'error'
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!liveUrl || status !== 'loading') return;
    
    // Safety timeout: if iframe doesn't fire onLoad within 7s, assume it's blocked by X-Frame-Options
    const timer = setTimeout(() => {
      setStatus((current) => (current === 'loading' ? 'error' : current));
    }, 7000);

    return () => clearTimeout(timer);
  }, [liveUrl, status]);

  if (!liveUrl) return null;

  // Derive hostname for the chrome bar
  let hostname = liveUrl;
  try {
    hostname = new URL(liveUrl).hostname;
  } catch (e) {
    // ignore
  }

  return (
    <div className="live-preview" aria-label={`Live preview of ${hostname}`}>
      {/* Browser Chrome Bar */}
      <div className="live-preview__chrome">
        <div className="live-preview__dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <a 
          href={liveUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="live-preview__url-bar"
          aria-label="Open live site in new tab"
        >
          live — {hostname} ↗
        </a>
      </div>

      {/* Frame Body */}
      <div className="live-preview__viewport">
        {status === 'idle' && (
          <div className="live-preview__fallback">
            {assetUrl ? (
              <img src={assetUrl} alt="Static preview" className="live-preview__fallback-img" />
            ) : (
              <div className="live-preview__placeholder-bg" style={{ width: '100%', height: '100%', background: 'var(--paper2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            )}
            
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(235,230,220,0.4)', backdropFilter: 'blur(2px)' }}>
              <button 
                className="fieldnote__toggle" 
                style={{ background: 'var(--paper)', padding: '0.5rem 1rem', border: '1px solid var(--rule)', borderRadius: '2px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                onClick={() => setStatus('loading')}
              >
                launch live preview →
              </button>
            </div>
          </div>
        )}

        {status === 'loading' && (
          <div className="live-preview__skeleton">
            <span className="pulse-text">loading live site...</span>
          </div>
        )}

        {status === 'error' ? (
          <div className="live-preview__fallback">
            {assetUrl ? (
              <img src={assetUrl} alt="Static preview fallback" className="live-preview__fallback-img" />
            ) : (
              <div className="live-preview__error-msg">
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                  This site doesn't allow embedded previews (X-Frame-Options).
                </p>
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="annotation-link"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
                >
                  open directly in new tab ↗
                </a>
              </div>
            )}
          </div>
        ) : status !== 'idle' ? (
          <iframe
            src={liveUrl}
            title={`Live preview of ${hostname}`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms"
            className={`live-preview__iframe ${status === 'loaded' ? 'is-loaded' : ''}`}
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
          />
        ) : null}
      </div>
    </div>
  );
}
