import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download, Sparkles } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'home.jsx', icon: '⚛️' },
    { id: 'projects', label: 'projects.py', icon: '⚡' },
    { id: 'about', label: 'about.json', icon: '👨‍💻' },
    { id: 'services', label: 'services.ts', icon: '🛠️' },
    { id: 'experience', label: 'journey.sh', icon: '🚀' },
    { id: 'contact', label: 'contact.sql', icon: '📬' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group font-code text-lg font-bold text-white transition-opacity hover:opacity-90"
            aria-label="Kishan Kumar Portfolio Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-extrabold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-white tracking-tight font-heading font-extrabold text-xl">
                Kishan<span className="text-cyan-400">.dev</span>
              </span>
              <span className="text-[10px] font-code text-emerald-400 flex items-center gap-1 -mt-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                v2.0.26 status: ready
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 font-code text-xs" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  <span className="text-xs">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalDetails.resumePath}
              download="Kishan_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-code text-xs font-bold text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200 shadow-sm"
              aria-label="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume.pdf</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-code text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-md shadow-cyan-500/25 group"
            >
              <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalDetails.resumePath}
              download="Kishan_Kumar_Resume.pdf"
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400"
              aria-label="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
          <div className="font-code text-xs text-slate-300 px-3 py-1 flex items-center justify-between border-b border-slate-800 mb-2 font-semibold">
            <span>EXPLORER</span>
            <span className="text-emerald-400">STATUS: OPEN</span>
          </div>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-code text-sm ${
                activeSection === item.id
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold'
                  : 'text-slate-200 hover:bg-slate-800/80'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}

          <div className="pt-3 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg font-code text-xs font-bold text-slate-950 bg-cyan-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
