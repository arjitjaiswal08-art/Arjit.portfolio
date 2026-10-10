import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Wrench, 
  Code, 
  Brain, 
  Database, 
  Terminal, 
  Globe, 
  Cloud, 
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return Code;
      case 1: return Brain;
      case 2: return Layers;
      case 3: return Terminal;
      case 4: return Globe;
      case 5: return Database;
      case 6: return Cloud;
      default: return Wrench;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden" aria-label="Skills and Technical Stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5" />
            Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Skills &amp; <span className="text-gradient-ai">Technology Stack</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Organized across programming foundations, neural architectures, data modeling pipelines, web backends, and cloud deployment targets. No fabricated proficiency percentages — just verified, hands-on toolsets.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = getCategoryIcon(idx);
            return (
              <div
                key={category.title}
                className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-brand-blue/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-cyan-300 border border-brand-blue/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-normal">
                    {category.description}
                  </p>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                          skill.highlight
                            ? 'bg-brand-blue/10 dark:bg-brand-blue/20 text-blue-700 dark:text-cyan-300 border border-brand-blue/30 font-semibold'
                            : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5'
                        }`}
                      >
                        {skill.highlight && (
                          <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Applied in real projects
                  </span>
                  <span>{category.skills.length} items</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
