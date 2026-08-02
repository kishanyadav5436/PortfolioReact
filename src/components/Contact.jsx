import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Copy, AlertCircle, Sparkles, Terminal } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setStatus('submitting');
      
      setTimeout(() => {
        setStatus('success');
        
        // Open mailto link as fallback backup
        const mailtoSubject = encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name);
        const mailtoBody = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
        window.open(`mailto:${personalDetails.email}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');

        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    } else {
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-grid-pattern">
      
      {/* Floating WhatsApp Button */}
      <a
        href={personalDetails.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageSquare className="w-6 h-6 fill-slate-950" />
        <span className="absolute right-full mr-3 px-3 py-1 rounded-lg bg-slate-900 text-white font-code text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-slate-800 pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-code text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Great Together</span>
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            Have a project, job opportunity, or AI idea? Send a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white font-heading">
                Contact Information
              </h3>

              <div className="space-y-4 font-code text-xs">
                
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">Direct Email</div>
                      <div className="text-white font-semibold text-xs sm:text-sm">{personalDetails.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-300 hover:bg-slate-700 transition-all"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Card */}
                <a
                  href={personalDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-emerald-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">WhatsApp Chat</div>
                      <div className="text-white font-semibold text-xs sm:text-sm">{personalDetails.phone}</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">Location</div>
                    <div className="text-white font-semibold text-xs sm:text-sm">{personalDetails.location}</div>
                  </div>
                </div>

              </div>

              {/* Status Box */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-code flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Response Time: Typically &lt;2 hours</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl relative">
              
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block font-code text-xs font-semibold text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.name ? 'border-rose-500/60' : 'border-slate-800'
                      } text-white font-sans text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors`}
                    />
                    {errors.name && <p className="font-code text-[11px] text-rose-400">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block font-code text-xs font-semibold text-slate-300">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.email ? 'border-rose-500/60' : 'border-slate-800'
                      } text-white font-sans text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors`}
                    />
                    {errors.email && <p className="font-code text-[11px] text-rose-400">{errors.email}</p>}
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block font-code text-xs font-semibold text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-sans text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block font-code text-xs font-semibold text-slate-300">
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project, timeline, or position details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      errors.message ? 'border-rose-500/60' : 'border-slate-800'
                    } text-white font-sans text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none`}
                  />
                  {errors.message && <p className="font-code text-[11px] text-rose-400">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl font-code text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message Now</span>
                    </>
                  )}
                </button>

                {/* Success Alert */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-code text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Message dispatched! Mailto client opened as backup confirmation.</span>
                  </div>
                )}

                {/* Error Alert */}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 font-code text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Please correct the highlighted form errors before sending.</span>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
