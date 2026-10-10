import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { GithubIcon } from './Icons';
import { 
  BookOpen, 
  ArrowUpRight,
  Globe,
  Sparkles
} from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const curatedRepos = [
    {
      name: 'AST_Audio_Classification',
      description:
        'Audio classification system built using Audio Spectrogram Transformer (AST) to recognize acoustic events from 16 kHz resampled recordings. Verified Macro F1: 0.84172.',
      language: 'Python / PyTorch',
      langColor: '#3572A5',
      topics: ['pytorch', 'audio-transformer', 'huggingface', 'deep-learning', 'librosa'],
      repoUrl: PERSONAL_INFO.github,
      liveUrl: 'https://huggingface.co/spaces/arjitja/AST_Audio_Classification',
      liveLabel: 'Hugging Face Space',
    },
    {
      name: 'NyayaMitra_Legal_AI',
      description:
        'Conversational AI legal assistant for Indian Law (BNS 2023 & IPC). Step-by-step roadmaps, FIR complaint drafting, and cyber fraud SOS.',
      language: 'TypeScript / React',
      langColor: '#3178C6',
      topics: ['legal-ai', 'bns-2023', 'ipc', 'nextjs', 'tailwind', 'vercel'],
      repoUrl: PERSONAL_INFO.github,
      liveUrl: 'https://nyayamitra-liard.vercel.app',
      liveLabel: 'Live App on Vercel',
    },
    {
      name: 'AgriAI_Intelligence_System',
      description:
        'Automated agriculture intelligence pipeline integrating live OpenWeatherMap climate, Agmarknet wholesale mandi prices, and OpenAI GPT-4o advice.',
      language: 'TypeScript / React',
      langColor: '#3178C6',
      topics: ['agritech', 'openai-gpt4o', 'agmarknet-mandi', 'computer-vision', 'kisan-vaani'],
      repoUrl: PERSONAL_INFO.github,
      liveUrl: 'https://agri-intelligence-system.vercel.app',
      liveLabel: 'Live App on Vercel',
    },
    {
      name: 'FinSaathi_Financial_Coach',
      description:
        'AI personal finance coach for Indian families featuring financial health scoring, 50-30-20 budget planning, and savings forecasting in INR.',
      language: 'JavaScript / React',
      langColor: '#F7DF1E',
      topics: ['fintech', 'budget-coach', '50-30-20-rule', 'analytics', 'vercel'],
      repoUrl: PERSONAL_INFO.github,
      liveUrl: 'https://finsaathi-ten.vercel.app',
      liveLabel: 'Live App on Vercel',
    },
    {
      name: 'Vedic_Astrology_AI',
      description:
        'Multi-sign astronomical Vedic astrology engine analyzing Lagna, Surya Rashi, and Chandra Rashi with multilingual NLP and Voice AI.',
      language: 'JavaScript / Python',
      langColor: '#F7DF1E',
      topics: ['astronomy', 'vedic-astrology', 'multilingual-nlp', 'voice-ai', 'sanskrit'],
      repoUrl: PERSONAL_INFO.github,
      liveUrl: 'https://vedic-astrology-rashi-fal.vercel.app',
      liveLabel: 'Live App on Vercel',
    },
    {
      name: 'Placement_Portal',
      description:
        'Multi-role recruitment platform streamlining campus hiring between Administrators, Companies, and Students with role-based JWT authentication.',
      language: 'Python / Vue.js',
      langColor: '#41B883',
      topics: ['flask', 'vuejs', 'sqlite', 'sqlalchemy', 'jwt-auth', 'bootstrap'],
      repoUrl: PERSONAL_INFO.github,
      liveUrl: undefined,
      liveLabel: undefined,
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
              Open Source &amp; Deployed Apps
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Development &amp; <span className="text-gradient-ai">Live Deployments</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
              Explore source code repositories, transformer architectures, and live production deployments on Vercel and Hugging Face.
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

        {/* Curated Repositories Grid with Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curatedRepos.map((repo) => (
            <SpotlightCard
              key={repo.name}
              spotlightColor="rgba(59, 130, 246, 0.18)"
              className="glass-panel p-6 sm:p-7 border border-slate-200 dark:border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between group shadow-md"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Repo Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <BookOpen className="w-4 h-4 text-brand-blue shrink-0" />
                      <a
                        href={repo.liveUrl || repo.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors truncate"
                      >
                        {repo.name}
                      </a>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {repo.liveUrl && (
                        <a
                          href={repo.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
                          title="Open Live App"
                        >
                          <Globe className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={repo.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 transition-colors"
                        title="GitHub Repo"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {repo.description}
                  </p>

                  {/* Topics / Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {repo.topics.slice(0, 4).map((topic) => (
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
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mt-auto">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span>{repo.language}</span>
                  </div>

                  {repo.liveUrl ? (
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 dark:text-emerald-400 font-semibold flex items-center gap-1 hover:underline"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{repo.liveLabel}</span>
                    </a>
                  ) : (
                    <span className="text-slate-400">Public Repo</span>
                  )}
                </div>

              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
