import React from 'react';
import { Terminal, Github, Linkedin, Mail, MessageSquare, Heart, GitBranch, ShieldCheck } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-12 pb-8 font-code text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Left Brand info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-heading text-lg font-bold">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>Kishan Kumar</span>
            </div>
            <p className="text-slate-400 font-sans text-xs">
              AI/ML Engineer & Full-Stack Developer • Kalpathon Hackathon 2026
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalDetails.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* IDE Status Bar Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 text-cyan-400">
              <GitBranch className="w-3.5 h-3.5" />
              <span>main*</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>200 OK</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>UTF-8</span>
          </div>

          <div className="text-slate-400 text-center sm:text-right font-sans">
            © {new Date().getFullYear()} Kishan Kumar. Built with React & Tailwind in Lucknow, India.
          </div>
        </div>

      </div>
    </footer>
  );
}
