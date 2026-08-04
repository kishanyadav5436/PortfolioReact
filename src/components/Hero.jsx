import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, Download, ArrowRight, Code, Trophy, Sparkles, Terminal, Cpu } from 'lucide-react';
import { personalDetails, heroStats } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Hackathon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-code text-cyan-300 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <Trophy className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold text-slate-200">Kalpathon 2026 Hackathon Participant</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">Lucknow, IN</span>
            </motion.div>

            {/* Outcome-Driven Hero Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Production RAG AI</span> & High-Impact Web Apps
              </h1>
              <div className="text-base sm:text-xl font-code text-slate-200 font-semibold flex flex-wrap items-center gap-2">
                <span className="text-cyan-400 font-bold">&gt;</span>
                <span className="text-white font-bold">Kishan Kumar</span>
                <span className="text-slate-500">|</span>
                <span className="text-cyan-300">AI/ML Engineer & Full-Stack Developer</span>
              </div>
            </motion.div>

            {/* Value Proposition Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-sans"
            >
              I solve operational bottlenecks by engineering high-performance software — from precision <strong className="text-cyan-300 font-semibold">RAG AI chatbots</strong> (&lt;1.5s query latency) and multi-variate <strong className="text-emerald-300 font-semibold">stress predictors</strong> (94%+ accuracy) to Kalpathon hackathon-shipped full-stack platforms.
            </motion.p>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 pt-2"
            >
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (Opens in new tab)"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (Opens in new tab)"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Send Email directly"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-200 shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={personalDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct Chat (Opens in new tab)"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <div className="h-6 w-px bg-slate-800 mx-1" />

              <span className="font-code text-xs text-slate-300 font-medium">
                BBDU CSE '26
              </span>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              <a
                href={personalDetails.resumePath}
                download="Kishan_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-code text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-code text-sm font-semibold text-white bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200"
              >
                <Code className="w-4 h-4 text-cyan-400" />
                <span>View Shipped Work</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-code text-sm font-semibold text-slate-200 hover:text-white transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Code Window Preview */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl code-box-shadow overflow-hidden font-code text-xs relative"
            >
              {/* Window Controls Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>kishan_profile.ts — bash</span>
                </div>
                <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  BUILD OK
                </div>
              </div>

              {/* Code Editor Window */}
              <div className="p-5 space-y-3 leading-relaxed overflow-x-auto text-slate-200">
                <div>
                  <span className="text-purple-400 font-semibold">import</span> &#123;{' '}
                  <span className="text-cyan-300">MLModel</span>, <span className="text-cyan-300">RAGPipeline</span>, <span className="text-cyan-300">FullStackApp</span>{' '}
                  &#125; <span className="text-purple-400 font-semibold">from</span> <span className="text-emerald-300">'@kishan/core'</span>;
                </div>

                <div className="text-slate-400">// Initialize Developer Instance</div>
                <div>
                  <span className="text-purple-400 font-semibold">const</span> <span className="text-yellow-300">engineer</span> = <span className="text-blue-400 font-semibold">new</span> <span className="text-cyan-300 font-semibold">FullStackEngineer</span>(&#123;
                </div>

                <div className="pl-4">
                  <span className="text-slate-300">name:</span> <span className="text-emerald-300">'Kishan Kumar'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">location:</span> <span className="text-emerald-300">'Lucknow, IN'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">education:</span> <span className="text-emerald-300">'BBD University (CSE 2026)'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">hackathonParticipant:</span> <span className="text-cyan-400 font-bold">true</span> <span className="text-slate-400">// Kalpathon 2026</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-300">coreTech:</span> [
                  <span className="text-cyan-300">'React'</span>, <span className="text-cyan-300">'LangChain'</span>, <span className="text-cyan-300">'Scikit-Learn'</span>, <span className="text-cyan-300">'Node.js'</span>
                  ],
                </div>

                <div className="pl-4">
                  <span className="text-slate-300">status:</span> <span className="text-emerald-400 font-semibold">'Open to High-Impact Opportunities'</span>
                </div>

                <div>&#125;);</div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" /> Ready for deployment
                  </span>
                  <span className="text-emerald-400 font-mono font-bold">100% Shipped</span>
                </div>
              </div>
            </motion.div>

            {/* Key Metrics Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {heroStats.map((stat, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center shadow-md"
                >
                  <div className="text-lg font-bold font-code text-cyan-300">{stat.value}</div>
                  <div className="text-[11px] font-semibold text-slate-200">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
