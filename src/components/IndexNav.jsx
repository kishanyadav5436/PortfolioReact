/**
 * IndexNav.jsx
 * Side-tab section index with IntersectionObserver active-section tracking.
 * On mobile, renders as a fixed bottom bar.
 * Sections: desk, experience, 4 projects, achievements, contact
 */

import { useState, useEffect, useRef } from 'react';
import { useIntroSequence } from '../hooks/useIntroSequence';

const SECTIONS = [
  { id: 'desk',           label: 'desk' },
  { id: 'experience',     label: 'experience' },
  { id: 'servicehub',     label: 'servicehub' },
  { id: 'blogsphere',     label: 'blogsphere' },
  { id: 'ecommerce-store',label: 'e-commerce' },
  { id: 'ml-analysis',    label: 'ml & data' },
  { id: 'achievements',   label: 'credentials' },
  { id: 'contact',        label: 'contact' },
];

export default function IndexNav() {
  const [activeId, setActiveId] = useState('desk');
  const observerRef = useRef(null);
  const { stage, isFirstLoad } = useIntroSequence();

  useEffect(() => {
    const sectionEls = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-15% 0px -65% 0px',
        threshold: 0,
      }
    );

    sectionEls.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const showNav = stage >= 3;

  return (
    <nav
      className={`index-nav ${isFirstLoad ? 'intro-active' : ''} ${showNav ? 'visible' : ''}`}
      aria-label="Section index"
      role="navigation"
    >
      <span className="index-nav__mark" aria-hidden="true">fn.</span>

      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          id={`nav-tab-${id}`}
          className={`index-nav__tab${activeId === id ? ' active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-current={activeId === id ? 'true' : undefined}
          aria-label={`Jump to ${label} section`}
          tabIndex={0}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
