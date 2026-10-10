import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Cpu, 
  Brain, 
  Layers, 
  Search, 
  Sliders, 
  Terminal, 
  Globe, 
  Sparkles, 
  CheckCircle,
  GraduationCap,
  Code2,
  Workflow
} from 'lucide-react';

export const About: React.FC = () => {
  const lifecycleSteps = [
    {
      step: '01',
      title: 'Problem & Exploratory Data Analysis',
      desc: 'Formulating clear problem definitions, identifying data distributions, cleaning edge cases, and uncovering semantic features without data leakage.',
      icon: Search,
      color: 'text-cyan-400',
    },
    {
      step: '02',
      title: 'Model Development & Fine-Tuning',
      desc: 'Selecting grounded architectures — from gradient boosted tree ensembles (LightGBM/XGBoost) to Transformer models (AST, ViT, LLMs) tailored to data modality.',
      icon: Brain,
      color: 'text-blue-400',
    },
    {
      step: '03',
      title: 'Empirical Evaluation & Validation',
      desc: 'Validating with Stratified K-Fold schemes, analyzing confusion matrices, optimizing Macro F1, and preventing overfitting on real holdouts.',
      icon: Sliders,
      color: 'text-indigo-400',
    },
    {
      step: '04',
      title: 'Robust Backend APIs & Infrastructure',
      desc: 'Wrapping models with performant REST APIs (Flask/FastAPI), structuring relational schemas with SQLAlchemy, and securing endpoints with JWT auth.',
      icon: Terminal,
      color: 'text-violet-400',
    },
    {
      step: '05',
      title: 'Intuitive Interfaces & Product Deployment',
      desc: 'Building responsive user interfaces (React/Vue/Tailwind) and deploying usable applications on Hugging Face Spaces, Vercel, and Render.',
      icon: Globe,
      color: 'text-emerald-400',
    },
  ];

  const interestBadges = [
    { label: 'Artificial Intelligence & ML', icon: Brain },
    { label: 'Deep Learning & Audio Classification', icon: Cpu },
    { label: 'Large Language Models (LLMs)', icon: Sparkles },
    { label: 'Generative AI & Prompt Engineering', icon: Code2 },
    { label: 'NLP & RAG Concepts', icon: Search },
    { label: 'Full-Stack Web Development', icon: Globe },
    { label: 'AI Product Development', icon: Workflow },
    { label: 'Data Analysis & Model Evaluation', icon: Sliders },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" aria-label="About Arjit Jaiswal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Background &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Building at the intersection of <span className="text-gradient-ai">AI and software</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I enjoy working across the complete engineering lifecycle: understanding the nuances of a problem, exploring and engineering raw data, training and fine-tuning neural architectures, designing performant backend APIs, and crafting intuitive user interfaces that deliver tangible value.
          </p>
        </div>

        {/* Content Grid: Left Story + Right Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Narrative Story */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              My journey is driven by an obsession with <strong className="text-slate-900 dark:text-white font-semibold">turning theoretical machine learning into practical software</strong>. At IIT Madras, I study Data Science and Artificial Intelligence, immersing myself in mathematical foundations, statistical learning, and algorithmic architectures.
            </p>
            <p>
              Rather than viewing machine learning in isolation, I treat it as an essential component of a complete software ecosystem. A high Macro F1 score or low validation loss only matters if the model can be securely served, scaled through robust APIs, and interacted with effortlessly by end-users.
            </p>
            <p>
              Whether fine-tuning Audio Spectrogram Transformers to detect acoustic events, architecting gradient boosted ensembles for competitive tabular datasets, or building multi-role web applications like campus placement management portals, I bring curiosity, rigorous evaluation, and craftsmanship to every project.
            </p>

            {/* Interest Badges */}
            <div className="pt-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                Core Domains of Focus
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {interestBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.label}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-brand-blue/40 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-brand-blue" />
                      <span>{badge.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Compact Profile Card */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-violet flex items-center justify-center font-black text-white text-lg shadow-md">
                    {PERSONAL_INFO.monogram}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {PERSONAL_INFO.name}
                    </h3>
                    <div className="text-xs text-brand-blue font-medium flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {PERSONAL_INFO.institution}
                    </div>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-500 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </div>
              </div>

              {/* Attributes Table */}
              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">Academic Focus</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                    {PERSONAL_INFO.program}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">Core Engineering</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                    {PERSONAL_INFO.focus}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">Primary Languages</span>
                  <span className="font-semibold text-cyan-500 dark:text-cyan-400">
                    {PERSONAL_INFO.primaryLanguages}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">Current Base</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400">Status</span>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Student &amp; Builder
                  </span>
                </div>
              </div>

              {/* Transparent Note */}
              <div className="mt-6 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                💡 <em>Honest representation: All portfolio projects, HackerRank certifications, and code repositories are verified and link directly to public demos or source code.</em>
              </div>
            </div>
          </div>

        </div>

        {/* The Complete Engineering Lifecycle Breakdown */}
        <div className="mt-8">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              End-to-End Development Lifecycle
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              How I approach building technical solutions from raw concept to production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {lifecycleSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-brand-blue/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-brand-blue transition-colors">
                        {item.step}
                      </span>
                      <Icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
