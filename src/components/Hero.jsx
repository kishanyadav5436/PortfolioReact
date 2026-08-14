import { motion } from 'framer-motion';
import { ArrowRight, Code, Download, Github, Linkedin, Mail, MessageSquare, Sparkles, Terminal, Trophy, Zap } from 'lucide-react';
import { heroStats, personalDetails } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-20 w-[350px] h-[350px] bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status / Hackathon Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 text-xs font-code text-cyan-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <Trophy className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold text-slate-200">Open to AI/ML Engineer & Full-Stack roles</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">Lucknow, IN</span>
            </motion.div>

            {/* Outcome-Driven Hero Headline */}
            <motion.div
              variants={itemVariants}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
                AI/ML Engineer + Full-Stack Developer building <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 animate-pulse">RAG systems</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>, ML models & live apps
              </h1>
              <div className="text-base sm:text-lg font-code text-slate-200 font-semibold flex flex-wrap items-center gap-2">
                <span className="text-cyan-400 font-bold animate-pulse">&gt;</span>
                <span className="text-white font-bold">Kishan Kumar</span>
                <span className="text-slate-500">|</span>
                <span className="text-cyan-300">AI/ML Engineer & Full-Stack Developer</span>
              </div>
            </motion.div>

            {/* Value Proposition Statement */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-sans"
            >
              I build intelligent products that turn unstructured data into fast answers and predictive systems into reliable decisions — from <strong className="text-cyan-300 font-semibold">RAG systems & LLMs</strong> to <strong className="text-emerald-300 font-semibold">production-grade full-stack apps</strong>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 max-w-2xl"
            >
              {[
                { label: 'RAG & LLMs', color: 'cyan' },
                { label: '94%+ predictive accuracy', color: 'emerald' },
                { label: 'Live apps shipped', color: 'purple' },
              ].map((badge, i) => (
                <motion.span
                  key={i}
                  className={`px-3 py-1.5 rounded-full border bg-${badge.color}-500/10 text-${badge.color}-200 text-sm font-medium border-${badge.color}-500/20 backdrop-blur-sm`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {badge.label}
                </motion.span>
              ))}
            </motion.div>

            {/* Social Links Row with Enhanced Styling */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2"
            >
              {[
                { href: personalDetails.github, icon: Github, label: 'GitHub', color: 'cyan' },
                { href: personalDetails.linkedin, icon: Linkedin, label: 'LinkedIn', color: 'blue' },
                { href: `mailto:${personalDetails.email}`, icon: Mail, label: 'Email', color: 'emerald' },
                { href: personalDetails.whatsapp, icon: MessageSquare, label: 'WhatsApp', color: 'emerald' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target={social.label !== 'Email' ? '_blank' : undefined}
                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={`${social.label} Profile`}
                    className={`p-3 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 text-slate-300 hover:text-white hover:border-${social.color}-500/50 hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:shadow-${social.color}-500/20`}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}

              <div className="h-6 w-px bg-slate-700/60 mx-1" />

              <span className="font-code text-xs text-slate-300 font-medium">
                BBDU CSE '26
              </span>
            </motion.div>

            {/* Action CTAs with Enhanced Styling */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              <motion.a
                href={personalDetails.resumePath}
                download="Kishan_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-code text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:via-teal-200 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-code text-sm font-semibold text-white bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-4 h-4 text-cyan-400" />
                <span>View Shipped Work</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-code text-sm font-semibold text-slate-200 hover:text-white transition-all group"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Code Window Preview with Enhanced Styling */}
          <motion.div
            className="lg:col-span-5"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              className="rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-slate-700/60 shadow-2xl overflow-hidden font-code text-xs relative group hover:border-slate-600/80 transition-all"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300 pointer-events-none" />

              {/* Window Controls Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-slate-700/60 relative z-10">
                <div className="flex items-center gap-2">
                  <motion.span className="w-3 h-3 rounded-full bg-rose-500/80" whileHover={{ scale: 1.2 }} />
                  <motion.span className="w-3 h-3 rounded-full bg-amber-500/80" whileHover={{ scale: 1.2 }} />
                  <motion.span className="w-3 h-3 rounded-full bg-emerald-500/80" whileHover={{ scale: 1.2 }} />
                </div>
                <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>kishan_profile.ts — bash</span>
                </div>
                <motion.div className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                  BUILD OK
                </motion.div>
              </div>

              {/* Code Editor Window */}
              <div className="p-5 space-y-3 leading-relaxed overflow-x-auto text-slate-200 relative z-10">
                <div>
                  <span className="text-purple-400 font-semibold">import</span> &#123;{' '}
                  <span className="text-cyan-300">MLModel</span>, <span className="text-cyan-300">RAGPipeline</span>, <span className="text-cyan-300">FullStackApp</span>{' '}
                  &#125; <span className="text-purple-400 font-semibold">from</span> <span className="text-emerald-300">'@kishan/core'</span>;
                </div>

                <div className="text-slate-400">// Initialize Developer Instance</div>
                <div>
                  <span className="text-purple-400 font-semibold">const</span> <span className="text-yellow-300">engineer</span> = <span className="text-blue-400 font-semibold">new</span> <span className="text-cyan-300">Engineer</span>(&#123;
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
                  <span className="text-cyan-300">'React'</span>, <span className="text-cyan-300">'LangChain'</span>, <span className="text-cyan-300">'Scikit-Learn'</span>
                  ],
                </div>

                <div className="pl-4">
                  <span className="text-slate-300">status:</span> <span className="text-emerald-400 font-semibold">'Open to High-Impact Opportunities'</span>
                </div>

                <div>&#125;);</div>

                <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}>
                      <Sparkles className="w-3.5 h-3.5" />
                    </motion.div>
                    Ready for deployment
                  </span>
                  <span className="text-emerald-400 font-mono font-bold">100% Shipped</span>
                </div>
              </div>
            </motion.div>

            {/* Key Metrics Counters with Enhanced Animation */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6"
              variants={containerVariants}
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 text-center shadow-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'rgb(34, 197, 94)' }}
                >
                  <motion.div className="text-2xl font-bold font-code text-cyan-300 group-hover:text-emerald-300 transition-colors" whileHover={{ scale: 1.1 }}>
                    {stat.value}
                  </motion.div>
                  <div className="text-[11px] font-semibold text-slate-300 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors">
          <span className="text-xs font-code font-semibold">Scroll to explore</span>
          <Zap className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}
