import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Github, Sparkles, CheckCircle2, Monitor, Code2 } from 'lucide-react';
import { featuredProject } from '../data/portfolioData';

export default function FeaturedProject() {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div className="mb-16">
      <div className="relative rounded-3xl bg-slate-900/90 border-2 border-amber-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl code-box-shadow overflow-hidden group">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-code text-xs font-bold">
            <Trophy className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>{featuredProject.badge}</span>
          </div>
          <span className="font-code text-xs text-slate-400">
            Shipped: {featuredProject.date}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                {featuredProject.title}
              </h3>
              <p className="font-code text-sm text-cyan-300 font-medium">
                {featuredProject.subtitle}
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
              {featuredProject.description}
            </p>

            {/* Outcome Highlight Box */}
            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-code font-bold text-amber-400">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>MEASURABLE HACKATHON OUTCOME</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-sans font-medium">
                "{featuredProject.outcome}"
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {featuredProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700/80 font-code text-xs text-cyan-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-code text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 transition-all duration-200 shadow-md shadow-amber-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>

              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-code text-xs font-bold text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>Source Code</span>
              </a>

              <button
                onClick={() => setShowIframe(!showIframe)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-code text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Monitor className="w-4 h-4 text-cyan-400" />
                <span>{showIframe ? 'Show Static Image' : 'Interactive Preview'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Mockup / Interactive Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl relative group/img">
              {/* Browser Window Bar */}
              <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>
                <div className="px-3 py-0.5 rounded bg-slate-800 text-[10px] font-code text-slate-400 truncate max-w-[200px]">
                  parth2-0-kishan-kumar.vercel.app
                </div>
                <div className="text-[10px] font-code text-cyan-400">HACKATHON</div>
              </div>

              {/* View Container */}
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                {showIframe ? (
                  <iframe
                    src={featuredProject.liveUrl}
                    title={featuredProject.title}
                    className="w-full h-full border-none"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                ) : (
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-code text-xs font-bold text-white">
                            Hyperlocal Service Platform
                          </div>
                          <div className="text-[11px] text-slate-400 font-sans">
                            Real-time booking • Provider Dashboard • JWT Auth
                          </div>
                        </div>
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
