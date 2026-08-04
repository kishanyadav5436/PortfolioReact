import React from 'react';
import { Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/70 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-code text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>JOURNEY & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Hackathons</span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-200" />

              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/30 transition-all duration-300 shadow-xl space-y-4">
                
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="font-code text-xs text-cyan-300 font-semibold mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-code text-xs text-slate-300 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-200 text-sm leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-2">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-sans font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
