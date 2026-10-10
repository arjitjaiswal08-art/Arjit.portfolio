import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  FileText, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Please provide a subject';
    if (!formData.message.trim()) errors.message = 'Please write a message';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#3b82f6', '#8b5cf6', '#06b6d4'],
    });

    // Generate pre-filled mailto action for seamless client communication
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Contact] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Hello Arjit,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;

    window.open(mailtoUrl, '_blank');
    setSubmittedStatus('success');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" aria-label="Contact Arjit Jaiswal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-mono uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Have an interesting problem? <span className="text-gradient-ai">Let’s build something useful.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I’m interested in AI engineering, machine learning, product development, and collaborations that turn promising ideas into real-world solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Resume */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 block">
                Direct Email Communication
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5 font-mono text-xs sm:text-sm">
                <span className="text-slate-900 dark:text-cyan-300 truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/20 text-slate-700 dark:text-slate-200 transition-colors shrink-0 shadow-sm"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <div className="mt-2 text-[11px] font-mono text-emerald-500 flex items-center gap-1">
                  <span>✓ Email address copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* Resume Download Feature Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-brand-violet/10 text-brand-violet border border-brand-violet/20">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Official Resume
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    PDF Document • Updated 2026
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                Detailed view of academic credentials at IIT Madras, project outcomes, model architectures, and technical toolsets.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PERSONAL_INFO.resumeDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-brand-blue hover:bg-blue-600 text-white transition-all shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download / View Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Social Connect Profiles */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 block">
                Professional Profiles
              </span>
              <div className="flex flex-col gap-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white transition-colors border border-slate-200 dark:border-white/5"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white transition-colors border border-slate-200 dark:border-white/5"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-slate-900 dark:text-white" />
                    <span>GitHub @Arjit077</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-blue" />
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below to initiate an email correspondence regarding projects, internships, or ideas.
              </p>

              {submittedStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-400 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 shrink-0 text-emerald-400" />
                  <div>
                    <span className="font-semibold block text-emerald-300">Message prepped &amp; ready!</span>
                    Your mail client has been opened with your message prefilled to <strong>{PERSONAL_INFO.email}</strong>. If your email client didn't launch automatically, feel free to copy the address above.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                        formErrors.name ? 'border-red-500' : 'border-slate-200 dark:border-white/10'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                        formErrors.email ? 'border-red-500' : 'border-slate-200 dark:border-white/10'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="AI Collaboration / Project Opportunity"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                      formErrors.subject ? 'border-red-500' : 'border-slate-200 dark:border-white/10'
                    }`}
                  />
                  {formErrors.subject && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.subject}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about what you're building, the problem at hand, or potential synergy..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none ${
                      formErrors.message ? 'border-red-500' : 'border-slate-200 dark:border-white/10'
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet hover:from-blue-600 hover:to-violet-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
