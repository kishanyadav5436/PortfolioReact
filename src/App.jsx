import React, { lazy, Suspense } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy-loaded Below-the-Fold Sections for Performance & Bundle Splitting
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Suspense Fallback Skeleton Loader
function SectionLoader() {
  return (
    <div className="py-20 text-center font-code text-xs text-cyan-400 flex items-center justify-center gap-2">
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
      <span>Loading module resources...</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-[#e2e8f0] relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Custom Terminal Crosshair Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex="-1" className="outline-none">
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <Projects />
          <About />
          <Services />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
