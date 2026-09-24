/**
 * useIntroSequence.js
 * Orchestrates the one-time "opening the notebook" first-load animation.
 * Stages:
 *  0: Blank paper (0s)
 *  1: Name writes in (0.3s)
 *  2: Tagline stamps in (1.2s)
 *  3: Desk settles (1.5s)
 *  4: Sequence complete (2.2s)
 */

import { useState, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useIntroSequence() {
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState(() => {
    // Check session storage to see if we've already played it this session
    if (typeof window !== 'undefined') {
      const played = sessionStorage.getItem('introPlayed');
      if (played) return 4; // Skip directly to end
    }
    return 0;
  });

  const isFirstLoad = stage !== 4;

  useEffect(() => {
    // If it already played this session, skip entirely
    if (sessionStorage.getItem('introPlayed') === 'true') {
      setStage(4);
      return;
    }

    if (reducedMotion) {
      setTimeout(() => setStage(4), 50);
      sessionStorage.setItem('introPlayed', 'true');
      return;
    }

    // Schedule sequence strictly once on mount
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 1200);
    const t3 = setTimeout(() => setStage(3), 1500);
    const t4 = setTimeout(() => {
      setStage(4);
      sessionStorage.setItem('introPlayed', 'true');
    }, 2200);
    
    // Hard fallback safety net if anything hangs
    const tFail = setTimeout(() => {
      setStage(4);
    }, 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tFail);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]); // Removed `stage` to prevent re-triggering the timeouts

  return { stage, isFirstLoad };
}
