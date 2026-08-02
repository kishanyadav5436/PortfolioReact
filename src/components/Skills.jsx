import React from 'react';
import { Cpu, Terminal, Sparkles, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-code text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Technology Stack</span>
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            Tools, libraries, and frameworks I use to engineer full-stack software and machine learning applications.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 shadow-xl space-y-4"
            >
              <div className="flex items-center gap-2 font-code text-sm font-bold text-white border-b border-slate-800 pb-3">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>{category.name}</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 font-code text-xs text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
