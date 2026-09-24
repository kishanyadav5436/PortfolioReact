/**
 * useSettleIn.js
 * Orchestrated load animation: one staggered entrance event on mount.
 * Cards enter with a spring-like delay cascade — NOT scroll-triggered.
 * Respects prefers-reduced-motion by skipping the stagger.
 */

import { useState, useEffect, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * @param {number} count       — number of items to stagger
 * @param {number} baseDelay   — ms before the first item appears (default 120)
 * @param {number} staggerStep — ms between each item (default 80)
 * @returns {boolean[]} visibleFlags — array of length `count`, true when that item should show
 */
export function useSettleIn(count, baseDelay = 120, staggerStep = 80) {
  const reducedMotion = useReducedMotion();

  // If reduced motion: everything visible immediately
  const [visible, setVisible] = useState(
    reducedMotion ? Array(count).fill(true) : Array(count).fill(false)
  );

  useEffect(() => {
    if (reducedMotion) {
      setVisible(Array(count).fill(true));
      return;
    }

    const timers = [];

    for (let i = 0; i < count; i++) {
      const delay = baseDelay + i * staggerStep;
      const id = setTimeout(() => {
        // Use requestAnimationFrame for paint-aligned updates
        requestAnimationFrame(() => {
          setVisible((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        });
      }, delay);
      timers.push(id);
    }

    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, baseDelay, staggerStep, reducedMotion]);

  return visible;
}
