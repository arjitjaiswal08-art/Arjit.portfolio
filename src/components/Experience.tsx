import React from 'react';
import { EXPERIENCE_MILESTONES } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { 
  Milestone, 
  CheckCircle2, 
  Calendar
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative" aria-label="Experience Through Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-mono uppercase tracking-wider mb-4">
            <Milestone className="w-3.5 h-3.5" />
            Hands-on Engineering Progression
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            What I’ve <span className="text-gradient-ai">Built &amp; Learned</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Practical, project-based engineering experience demonstrating real-world model fine-tuning, competitive Kaggle workflows, relational data modeling, and full-stack software delivery.
          </p>
        </div>

        {/* Timeline / Milestone Cards */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-blue/40 before:via-brand-violet/40 before:to-transparent">
          {EXPERIENCE_MILESTONES.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.role}
                className={`relative flex items-center md:justify-between flex-col md:flex-row ${
                  isEven ? 'md:flex-row-reverse' : ''
                } group`}
              >
                {/* Timeline Center Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-brand-blue group-hover:border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-blue-500/20 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                </div>

                {/* Content Card with Spotlight */}
                <div className="w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0">
                  <SpotlightCard
                    spotlightColor="rgba(99, 102, 241, 0.2)"
                    className="glass-panel p-6 sm:p-7 border border-slate-200 dark:border-white/10 group-hover:border-brand-blue/40 transition-all shadow-md"
                  >
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-cyan-300 border border-brand-blue/20">
                        {item.domain}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {item.role}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="space-y-2 mb-5">
                      {item.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </SpotlightCard>
                </div>

                {/* Empty spacer for alternating balance */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>

              </div>
            );
          })}
        </div>

        {/* Transparent Note */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            📌 <em>Distinction: All milestones reflect rigorous hands-on projects, research implementations, and verified code repositories rather than formal commercial employment claims.</em>
          </p>
        </div>

      </div>
    </section>
  );
};
