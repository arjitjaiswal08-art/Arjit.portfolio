import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { 
  ExternalLink, 
  BookOpen, 
  ArrowUpRight
} from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const curatedRepos = [
    {
      name: 'AST_Audio_Classification',
      description:
        'Audio classification system built using Audio Spectrogram Transformer (AST) to recognize acoustic events from 16 kHz resampled recordings. Macro F1: 0.84172.',
      language: 'Python',
      langColor: '#3572A5',
      topics: ['pytorch', 'audio-spectrogram-transformer', 'huggingface', 'deep-learning', 'librosa'],
      url: 'https://huggingface.co/spaces/arjitja/AST_Audio_Classification',
      isDemo: true,
      demoLabel: 'Hugging Face Space',
    },
    {
      name: 'Placement_Portal',
      description:
        'Multi-role recruitment platform streamlining campus hiring between Administrators, Companies, and Students with role-based JWT authentication.',
      language: 'Python / Vue.js',
      langColor: '#41B883',
      topics: ['flask', 'vuejs', 'sqlite', 'sqlalchemy', 'jwt-auth', 'bootstrap'],
      url: PERSONAL_INFO.github,
      isDemo: false,
    },
    {
      name: 'ML_Kaggle_Competitions',
      description:
        'Modular competitive machine learning workflows featuring stratified cross-validation, leak-free feature engineering, and GBDT ensemble models.',
      language: 'Python / Jupyter',
      langColor: '#DA5B0B',
      topics: ['lightgbm', 'xgboost', 'scikit-learn', 'pandas', 'feature-engineering', 'kaggle'],
      url: PERSONAL_INFO.github,
      isDemo: false,
    },
    {
      name: 'Klyro_AI_Assistant',
      description:
        'Conversational AI assistant exploring memory buffers, structured prompt engineering pipelines, and modular tool integrations.',
      language: 'Python',
      langColor: '#3572A5',
      topics: ['llm-apis', 'fastapi', 'prompt-engineering', 'nlp', 'vector-retrieval'],
      url: PERSONAL_INFO.github,
      isDemo: false,
    },
  ];

  return (
    <section id="github" className="py-24 relative overflow-hidden" aria-label="GitHub and Code Activity">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 dark:bg-white/10 border border-slate-700 dark:border-white/20 text-slate-700 dark:text-slate-300 text-xs font-mono uppercase tracking-wider mb-4">
              <GithubIcon className="w-3.5 h-3.5" />
              Open Source &amp; Code Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Development &amp; <span className="text-gradient-ai">GitHub Repositories</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
              Explore source code, transformer implementations, full-stack backends, and data science notebooks on GitHub.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white/10 hover:bg-brand-blue dark:hover:bg-brand-blue text-white transition-all shadow-md self-start md:self-auto border border-white/10"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit @Arjit077 on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Curated Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curatedRepos.map((repo) => (
            <div
              key={repo.name}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Repo Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <BookOpen className="w-4 h-4 text-brand-blue shrink-0" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors truncate"
                    >
                      {repo.name}
                    </a>
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 transition-colors"
                    aria-label={`Open ${repo.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {repo.description}
                </p>

                {/* Topics / Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-brand-blue/5 text-blue-600 dark:text-cyan-400/90 border border-brand-blue/15"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Footer Info */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                {repo.isDemo ? (
                  <span className="text-yellow-500 dark:text-yellow-400 font-semibold flex items-center gap-1">
                    <span>{repo.demoLabel}</span>
                  </span>
                ) : (
                  <span className="text-slate-400">Public Repository</span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
