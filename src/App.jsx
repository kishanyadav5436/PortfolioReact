/**
 * App.jsx -- Fieldnotes Portfolio
 * Kishan Kumar · Full-Stack Developer · BBDU, Lucknow
 *
 * Layout order:
 *   IndexNav (side tabs / mobile bottom bar)
 *   DeskHero (bio + tech arsenal + project cards)
 *   fieldnotes-section:
 *     Experience (internship timeline)
 *     Fieldnote × 4 (one per project)
 *     Achievements (certifications + licenses)
 *   StickyNote (contact + GitHub summary table)
 */

import './index.css';
import IndexNav from './components/IndexNav';
import DeskHero from './components/DeskHero';
import Experience from './components/Experience';
import Fieldnote from './components/Fieldnote';
import Achievements from './components/Achievements';
import StickyNote from './components/StickyNote';
import { projects } from './data/projects';

export default function App() {
  return (
    <>
      <IndexNav />

      <main id="main-content" tabIndex="-1" style={{ outline: 'none' }}>
        {/* Above-the-fold desk */}
        <DeskHero />

        {/* Full fieldnotes journal */}
        <div className="fieldnotes-section">
          <div className="section-label">fieldnotes ↓</div>

          {/* Experience: internships */}
          <Experience />

          {/* Project fieldnotes */}
          {projects.map((project, i) => (
            <Fieldnote key={project.id} project={project} index={i} />
          ))}

          {/* Certifications & achievements */}
          <Achievements />
        </div>

        {/* Contact + GitHub summary */}
        <StickyNote />
      </main>
    </>
  );
}
