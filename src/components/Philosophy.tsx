import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { Compass, Lightbulb, BarChart, Rocket } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return Lightbulb;
      case 1: return BarChart;
      case 2: return Rocket;
      default: return Compass;
    }
  };

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden" aria-label="Development Philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-mono uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            Core Values &amp; Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            My Development <span className="text-gradient-ai">Philosophy</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            The foundational engineering convictions that guide how I choose problems, train algorithms, and architect software products.
          </p>
        </div>

        {/* Philosophy Principles Cards with Spotlight effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY_PRINCIPLES.map((principle, idx) => {
            const Icon = getIcon(idx);
            return (
              <SpotlightCard
                key={principle.title}
                spotlightColor="rgba(139, 92, 246, 0.2)"
                className="glass-panel p-8 border border-slate-200 dark:border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div className="flex flex-col h-full justify-between">
                  {/* Top Number indicator */}
                  <div className="absolute top-6 right-6 font-mono text-3xl font-black text-slate-200 dark:text-white/5 group-hover:text-brand-blue/20 transition-colors pointer-events-none">
                    {principle.number}
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-blue/20 to-brand-violet/20 border border-brand-blue/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-sm">
                      <Icon className="w-6 h-6 text-brand-blue dark:text-cyan-400" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {principle.title}
                    </h3>

                    <div className="text-xs font-mono text-brand-blue dark:text-cyan-400 mb-4 font-semibold uppercase tracking-wider">
                      {principle.subtitle}
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5">
                    <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${principle.accent} group-hover:w-full transition-all duration-300`} />
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
