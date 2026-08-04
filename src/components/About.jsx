import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Users, Sparkles, MapPin, Terminal, Award } from 'lucide-react';
import { personalDetails, education, softSkills, interests } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-code text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>WHO I AM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Story & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Background</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Bio Card */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg">
                KK
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Hey, I'm Kishan 👋</h3>
                <p className="font-code text-xs text-cyan-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{personalDetails.location}</span>
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                I'm a Computer Science student at <strong className="text-white">Babu Banarasi Das University, Lucknow</strong>, obsessed with constructing software systems that solve real human problems. My journey started with vanilla web design, grew into building full-stack MERN apps, and expanded into <strong className="text-cyan-300">AI/ML architectures — LangChain, Hugging Face, Scikit-Learn, and RAG pipelines</strong>.
              </p>
              <p>
                Recently, I <strong className="text-cyan-400 font-semibold">participated in Kalpathon Hackathon 2026</strong> by building a full-stack Neighbourhood Service Marketplace. That adrenaline rush of turning raw business requirements into working production code within hours is what drives me every day.
              </p>
              <p>
                When I'm not writing Python scripts or React components, you'll find me reading LLM research papers, exploring open-source models, or watching anime.
              </p>
            </div>

            {/* Quick Highlight Stats */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="font-code text-xs text-slate-400">Current Focus</div>
                <div className="font-bold text-sm text-cyan-300">RAG AI & Full-Stack MERN</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="font-code text-xs text-slate-400">Status</div>
                <div className="font-bold text-sm text-emerald-400">Open to Opportunities</div>
              </div>
            </div>
          </div>

          {/* Education & Tags Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Compact Education Card */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 font-code text-sm font-bold text-white border-b border-slate-800 pb-3">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Education Timeline</span>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-5 border-l-2 border-slate-800 space-y-1">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-400" />
                    <div className="font-bold text-sm text-white">{edu.degree}</div>
                    <div className="text-xs text-slate-400 font-sans">{edu.institution}</div>
                    <div className="flex items-center justify-between text-[11px] font-code text-slate-500 pt-0.5">
                      <span>{edu.year}</span>
                      <span className="text-emerald-400 font-medium">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 font-code text-sm font-bold text-white border-b border-slate-800 pb-3">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Soft Skills</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 font-code text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 font-code text-sm font-bold text-white border-b border-slate-800 pb-3">
                <Heart className="w-4 h-4 text-purple-400" />
                <span>Interests & Passions</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 font-code text-xs text-cyan-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
