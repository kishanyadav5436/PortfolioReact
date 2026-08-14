import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Code2, Cpu, BarChart3, Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';
import FeaturedProject from './FeaturedProject';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

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
    <section id="projects" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-code text-xs font-semibold backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>PRODUCTION PORTFOLIO</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Engineering Work
            </span>
          </motion.h2>

          <motion.p
            className="text-slate-300 font-sans text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real software built for real outcomes — evaluating problem, technical approach, and measurable impact.
          </motion.p>
        </motion.div>

        {/* Spotlight Featured Project */}
        <FeaturedProject />

        {/* Category Filters with Animation */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-12 font-code text-xs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {filters.map((filter, index) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/60 text-slate-300 border-slate-700/60 hover:border-slate-600 hover:text-white hover:bg-slate-800/40'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{filter.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Filtered Project Cards Grid with Scroll Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -40 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-700/60 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div>
                  {/* Card Image Wrapper with Scroll Effect */}
                  <motion.div
                    className="relative aspect-[16/10] bg-slate-950 overflow-hidden group/img"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                    {/* Badge */}
                    <motion.div
                      className="absolute top-3 left-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700/80 font-code text-[10px] font-bold text-cyan-300">
                        {project.badge}
                      </span>
                    </motion.div>

                    {/* Date */}
                    <motion.div
                      className="absolute top-3 right-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="px-2 py-0.5 rounded bg-slate-900/90 font-code text-[10px] text-slate-300 font-medium">
                        {project.date}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Card Body Content */}
                  <motion.div
                    className="p-6 space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Problem -> Approach Narrative */}
                    <motion.div
                      className="space-y-2 text-xs font-sans"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-2.5 rounded-lg bg-slate-950/80 border border-rose-500/20 space-y-0.5 hover:border-rose-500/40 transition-all">
                        <span className="font-code text-[10px] font-bold text-rose-400 block">PROBLEM:</span>
                        <p className="text-slate-200 leading-snug">{project.problem}</p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-950/80 border border-cyan-500/20 space-y-0.5 hover:border-cyan-500/40 transition-all">
                        <span className="font-code text-[10px] font-bold text-cyan-400 block">APPROACH:</span>
                        <p className="text-slate-200 leading-snug">{project.approach}</p>
                      </div>
                    </motion.div>

                    {/* Outcome Highlight Box */}
                    <motion.div
                      className="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-xs text-cyan-200 font-sans hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <strong className="font-code text-[11px] text-cyan-300 block mb-0.5">OUTCOME:</strong>
                      {project.outcome}
                    </motion.div>

                    {/* Tech Tags with Stagger Animation */}
                    <motion.div
                      className="flex flex-wrap gap-1.5 pt-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50 font-code text-[10px] text-slate-200 font-medium hover:bg-slate-700 hover:border-slate-600 transition-all"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Card Footer Links */}
                <motion.div
                  className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-slate-700/60"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View code for ${project.title} on GitHub`}
                    className="inline-flex items-center gap-1.5 font-code text-xs font-semibold text-slate-300 hover:text-white transition-colors group/link"
                    whileHover={{ x: 4 }}
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400 group-hover/link:text-cyan-300" />
                    <span>Source Code</span>
                  </motion.a>

                  {project.liveUrl ? (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live app demo for ${project.title}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 font-code text-xs font-bold text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-500/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  ) : (
                    <span className="font-code text-[11px] text-slate-400 font-medium">
                      Repo Benchmark
                    </span>
                  )}
                </motion.div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.a
            href="https://github.com/kishanyadav5436"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore all repositories on GitHub"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-code text-xs font-semibold text-slate-200 bg-slate-900/60 border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Explore All Repositories on GitHub</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
