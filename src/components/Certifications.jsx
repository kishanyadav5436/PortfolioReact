import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronDown, ChevronUp, ExternalLink, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { certsFormal, certsWorkshops } from '../data/portfolioData';

export default function Certifications() {
  const [showWorkshops, setShowWorkshops] = useState(false);

  return (
    <section id="certifications" className="py-24 relative bg-slate-950/70 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-code text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Formal Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Credentials</span>
          </h2>
          <p className="text-slate-300 font-sans text-base sm:text-lg">
            Validated technical knowledge from industry-leading software & AI organizations.
          </p>
        </div>

        {/* Formal Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certsFormal.map((cert, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 font-code text-[10px] font-bold text-emerald-400">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    {cert.badge}
                  </span>
                  <span className="font-code text-xs text-slate-300 font-medium">{cert.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="font-code text-xs text-cyan-300 font-semibold">
                  Issuer: {cert.issuer}
                </p>
              </div>

              {cert.verifyUrl && (
                <div className="pt-3 border-t border-slate-800">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View official certificate document for ${cert.title}`}
                    className="inline-flex items-center gap-1.5 font-code text-xs text-cyan-300 hover:text-white font-semibold transition-colors"
                  >
                    <span>View Certificate Document</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Collapsible Workshops List */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <button
              onClick={() => setShowWorkshops(!showWorkshops)}
              aria-expanded={showWorkshops}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-200 font-code text-xs font-bold transition-all shadow-md group"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{showWorkshops ? 'Hide Additional Workshops' : 'Show Workshops & Event Certifications (' + certsWorkshops.length + ')'}</span>
              {showWorkshops ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-cyan-400" />}
            </button>
          </div>

          <AnimatePresence>
            {showWorkshops && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-3"
              >
                <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="font-code text-xs font-bold text-cyan-400 border-b border-slate-800 pb-2">
                    WORKSHOPS & EVENT PARTICIPATION
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certsWorkshops.map((w, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                        <div className="font-bold text-sm text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{w.title}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-code text-slate-300 font-medium pl-6">
                          <span>{w.issuer}</span>
                          <span className="text-cyan-300 font-semibold">{w.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
