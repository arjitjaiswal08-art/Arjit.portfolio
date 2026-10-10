import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  ArrowUp, 
  Clock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/90 relative z-10 py-16 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-violet font-black text-white text-xs">
                {PERSONAL_INFO.monogram}
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Data Science &amp; AI student at IIT Madras. Architecting neural systems, competitive machine learning pipelines, and end-to-end full-stack web products.
            </p>

            {/* Time Indicator (IST) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 font-mono text-xs text-slate-700 dark:text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Chennai (IST): {currentTime || 'Loading...'}</span>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-2">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
              <a href="#about" className="hover:text-brand-blue transition-colors">About Me</a>
              <a href="#projects" className="hover:text-brand-blue transition-colors">Projects</a>
              <a href="#skills" className="hover:text-brand-blue transition-colors">Skills &amp; Tech</a>
              <a href="#experience" className="hover:text-brand-blue transition-colors">Experience</a>
              <a href="#certifications" className="hover:text-brand-blue transition-colors">Certifications</a>
              <a href="#philosophy" className="hover:text-brand-blue transition-colors">Philosophy</a>
              <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
              <a href={PERSONAL_INFO.resumeDriveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors text-cyan-500">Resume PDF</a>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-brand-blue text-slate-700 dark:text-slate-300 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-brand-blue text-slate-700 dark:text-slate-300 hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-brand-blue text-slate-700 dark:text-slate-300 hover:text-white transition-all"
                aria-label="Email Arjit"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, Vite &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
