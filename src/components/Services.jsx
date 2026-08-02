import React from 'react';
import { Code2, Bot, Layout, Server, ArrowUpRight, Sparkles } from 'lucide-react';
import { services } from '../data/portfolioData';

export default function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Bot': return <Bot className="w-6 h-6 text-emerald-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-purple-400" />;
      case 'Server': return <Server className="w-6 h-6 text-amber-400" />;
      default: return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-code text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT I BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Engineering Services</span>
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            End-to-end technical execution — from custom machine learning models to production web applications.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-5 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 group-hover:bg-cyan-500 group-hover:text-slate-950 flex items-center justify-center transition-all"
                  aria-label="Discuss Project"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="pt-2 flex flex-wrap gap-2 border-t border-slate-800/80">
                {service.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 font-code text-xs text-cyan-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Have a project or opportunity in mind?</h4>
            <p className="text-slate-400 text-sm">Let's discuss how I can help bring your AI or Web product to life.</p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-code text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md whitespace-nowrap"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
}
