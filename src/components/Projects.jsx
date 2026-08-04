import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Code2, Cpu, BarChart3, Layers, AlertCircle, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import FeaturedProject from './FeaturedProject';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Shipped Work', icon: Code2 },
    { id: 'ai', label: 'AI & Machine Learning', icon: Cpu },
    { id: 'fullstack', label: 'Full-Stack Apps', icon: Layers },
    { id: 'data', label: 'Data & Analytics', icon: BarChart3 },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-code text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCTION PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Engineering Work</span>
          </h2>

          <p className="text-slate-300 font-sans text-base sm:text-lg">
            Real software built for real outcomes — evaluating problem, technical approach, and measurable impact.
          </p>
        </div>

        {/* Spotlight Featured Project */}
        <FeaturedProject />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-code text-xs">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40 font-bold shadow-md shadow-cyan-500/10'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Filtered Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Card Image Wrapper */}
                  <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden group/img">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 font-code text-[10px] font-bold text-cyan-300">
                        {project.badge}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded bg-slate-900/80 font-code text-[10px] text-slate-300 font-medium">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Problem -> Approach Narrative */}
                    <div className="space-y-2 text-xs font-sans">
                      <div className="p-2.5 rounded-lg bg-slate-950/80 border border-rose-500/20 space-y-0.5">
                        <span className="font-code text-[10px] font-bold text-rose-400 block">PROBLEM:</span>
                        <p className="text-slate-200 leading-snug">{project.problem}</p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-950/80 border border-cyan-500/20 space-y-0.5">
                        <span className="font-code text-[10px] font-bold text-cyan-400 block">APPROACH:</span>
                        <p className="text-slate-200 leading-snug">{project.approach}</p>
                      </div>
                    </div>

                    {/* Outcome Highlight Box */}
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200 font-sans">
                      <strong className="font-code text-[11px] text-cyan-300 block mb-0.5">OUTCOME:</strong>
                      {project.outcome}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50 font-code text-[10px] text-slate-200 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-slate-800">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View code for ${project.title} on GitHub`}
                    className="inline-flex items-center gap-1.5 font-code text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Source Code</span>
                  </a>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live app demo for ${project.title}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 font-code text-xs font-bold text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="font-code text-[11px] text-slate-400 font-medium">
                      Repo Benchmark
                    </span>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA Footer */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/kishanyadav5436"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore all repositories on GitHub"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-code text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white transition-all shadow-md"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Explore All Repositories on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
}
