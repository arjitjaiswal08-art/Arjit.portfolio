import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { 
  Award, 
  ShieldCheck, 
  GraduationCap
} from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden" aria-label="Achievements and Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Verified Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Achievements &amp; <span className="text-gradient-ai">Certifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Verified skill assessments and certifications evaluating core algorithmic problem-solving, advanced database querying, API mechanics, and modern web frameworks.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                    {cert.issuer}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-500">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors mb-1">
                  {cert.name}
                </h3>
                
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-3">
                  Proficiency: {cert.level}
                </span>

                {/* Sub-skills */}
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-50 dark:bg-black/30 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Assessment</span>
                <span className="text-emerald-500 font-semibold">Passed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic & Workshop Highlights Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-cyan-400 border border-brand-blue/20 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                IIT Madras Academic Engagement &amp; Technical Workshops
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Active participant in machine learning and data science coursework, technical symposiums, and hands-on coding hackathons focused on applied artificial intelligence, deep neural networks, and modern software design.
              </p>
            </div>
          </div>

          <div className="shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400 border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10 pt-4 md:pt-0 md:pl-6">
            <span>Continuous Learning</span>
            <div className="text-sm font-bold text-slate-800 dark:text-cyan-400 mt-0.5">
              IIT Madras Ecosystem
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
