import { GitBranch, Github, Linkedin, Mail, MessageSquare, ShieldCheck, Terminal } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8 font-code text-xs text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Left Brand Info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-heading text-lg font-bold">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>Kishan Kumar</span>
            </div>
            <p className="text-slate-300 font-sans text-xs font-medium">
              AI/ML Engineer & Full-Stack Developer • Kalpathon Hackathon 2026
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalDetails.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="WhatsApp Chat"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Open to AI/ML Engineer and Full-Stack opportunities.</p>
              <p className="mt-1 text-xs text-slate-400">Looking for strong product-minded builders who can ship end-to-end from idea to deployment.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personalDetails.resumePath}
                download="Kishan_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-500/40 hover:text-white"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-emerald-500/40 hover:text-emerald-300"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>

        {/* IDE Status Bar Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <span className="flex items-center gap-1 text-cyan-400 font-semibold">
              <GitBranch className="w-3.5 h-3.5" />
              <span>main*</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>200 OK</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>UTF-8</span>
          </div>

          <div className="text-slate-300 text-center sm:text-right font-sans font-medium">
            © {new Date().getFullYear()} Kishan Kumar. Built with React & Tailwind in Lucknow, India.
          </div>
        </div>

      </div>
    </footer>
  );
}
