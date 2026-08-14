import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
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
          ? 'bg-[#090d16]/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Enhanced Styling */}
          <motion.a
            href="#home"
            className="flex items-center gap-2.5 group font-code text-lg font-bold text-white transition-all hover:opacity-90"
            aria-label="Kishan Kumar Portfolio Home"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-slate-950 font-extrabold shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:shadow-cyan-500/60 transition-all duration-300">
              <Terminal className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-white tracking-tight font-heading font-extrabold text-xl">
                Kishan<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">.dev</span>
              </span>
              <span className="text-[10px] font-code text-emerald-400 flex items-center gap-1 -mt-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                v2.0.26 status: ready
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Items with Enhanced Styling */}
          <nav className="hidden lg:flex items-center bg-slate-900/40 p-1.5 rounded-2xl border border-slate-700/40 backdrop-blur-xl font-code text-xs gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navBg"
                      className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/40 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="text-xs">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons with Enhancements */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={personalDetails.resumePath}
              download="Kishan_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-code text-xs font-bold text-slate-200 bg-slate-800/60 border border-slate-700/60 hover:bg-slate-700 hover:border-cyan-500/60 transition-all backdrop-blur-sm"
              aria-label="Download Resume PDF"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume.pdf</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-code text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:via-teal-300 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </motion.a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <motion.a
              href={personalDetails.resumePath}
              download="Kishan_Kumar_Resume.pdf"
              className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="Download Resume PDF"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
            </motion.a>

            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-cyan-500/50 transition-all"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Enhanced Styling */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-[#090d16]/95 backdrop-blur-xl border-b border-slate-700/50 px-4 pt-3 pb-6 space-y-2 mt-3"
        >
          <div className="font-code text-xs text-slate-300 px-3 py-2 flex items-center justify-between border-b border-slate-700/50 mb-2 font-semibold">
            <span className="text-cyan-400">EXPLORER</span>
            <span className="text-emerald-400 text-[10px]">OPEN</span>
          </div>

          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-code text-sm transition-all ${
                activeSection === item.id
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-200 hover:bg-slate-800/50'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </motion.a>
          ))}

          <div className="pt-3 flex flex-col gap-2">
            <motion.a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg font-code text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all"
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
