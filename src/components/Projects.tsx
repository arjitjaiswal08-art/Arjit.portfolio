import React, { useState } from 'react';
import { FEATURED_PROJECTS, type Project } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { GithubIcon } from './Icons';
import { 
  FolderGit2, 
  ExternalLink, 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  Plus, 
  Minus,
  Terminal,
  Search,
  Activity,
  BarChart3,
  Users,
  Bot
} from 'lucide-react';

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai-ml' | 'fullstack' | 'product'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllPrototypes, setShowAllPrototypes] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'fullstack', label: 'Full-Stack Systems' },
    { id: 'product', label: 'AI Products & R&D' },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesQuery = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const primaryProjects = filteredProjects.filter((p) => p.featured);
  const additionalPrototypes = filteredProjects.filter((p) => !p.featured);

  const renderProjectVisualHeader = (project: Project) => {
    switch (project.id) {
      case 'ast-audio':
        return (
          <div className="h-28 rounded-xl bg-gradient-to-br from-blue-950/60 to-slate-900/90 border border-brand-blue/20 p-3.5 flex flex-col justify-between mb-5 relative overflow-hidden group-hover:border-cyan-400/40 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                AST Patch Transformer
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                F1: 0.84172
              </span>
            </div>
            {/* Visual waveform bars */}
            <div className="flex items-end gap-1 h-10 px-1">
              {[40, 75, 25, 90, 60, 85, 30, 95, 50, 80, 45, 90, 35, 70, 85].map((val, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-blue-600 via-indigo-500 to-cyan-400 rounded-sm"
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>16 kHz Mono</span>
              <span className="text-cyan-400">128 Mel Bins</span>
            </div>
          </div>
        );
      case 'kaggle-ml':
        return (
          <div className="h-28 rounded-xl bg-gradient-to-br from-indigo-950/60 to-slate-900/90 border border-brand-indigo/20 p-3.5 flex flex-col justify-between mb-5 relative overflow-hidden group-hover:border-indigo-400/40 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-indigo-300">
              <span className="flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
                Competitive ML Ensemble
              </span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">
                Stratified K-Fold
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px]">
              <div className="p-1.5 rounded bg-black/40 border border-white/5 text-center">
                <span className="text-slate-400 block text-[9px]">Model A</span>
                <span className="text-cyan-400 font-bold">LightGBM</span>
              </div>
              <div className="p-1.5 rounded bg-black/40 border border-white/5 text-center">
                <span className="text-slate-400 block text-[9px]">Model B</span>
                <span className="text-indigo-400 font-bold">XGBoost</span>
              </div>
              <div className="p-1.5 rounded bg-black/40 border border-white/5 text-center">
                <span className="text-slate-400 block text-[9px]">Blend</span>
                <span className="text-emerald-400 font-bold">Soft Vote</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Leak-Free Pipeline</span>
              <span className="text-indigo-300">Macro F1 Target</span>
            </div>
          </div>
        );
      case 'placement-portal':
        return (
          <div className="h-28 rounded-xl bg-gradient-to-br from-emerald-950/40 to-slate-900/90 border border-emerald-500/20 p-3.5 flex flex-col justify-between mb-5 relative overflow-hidden group-hover:border-emerald-400/40 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300">
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                Multi-Role Architecture
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                JWT Auth
              </span>
            </div>
            <div className="flex items-center justify-between px-2 font-mono text-[10px] text-slate-300">
              <div className="px-2 py-1 rounded bg-black/40 border border-white/5">Admin</div>
              <span className="text-emerald-400 font-bold">⇄</span>
              <div className="px-2 py-1 rounded bg-black/40 border border-white/5">Company</div>
              <span className="text-emerald-400 font-bold">⇄</span>
              <div className="px-2 py-1 rounded bg-black/40 border border-white/5">Student</div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Flask REST API</span>
              <span className="text-emerald-400">Vue.js SPA</span>
            </div>
          </div>
        );
      case 'klyro-ai':
        return (
          <div className="h-28 rounded-xl bg-gradient-to-br from-violet-950/50 to-slate-900/90 border border-brand-violet/20 p-3.5 flex flex-col justify-between mb-5 relative overflow-hidden group-hover:border-violet-400/40 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-violet-300">
              <span className="flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-violet-400" />
                AI Assistant Architecture
              </span>
              <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-bold">
                Prototype
              </span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5 font-mono text-[10px] text-slate-300 flex items-center justify-between">
              <span>Context Memory Buffer</span>
              <span className="text-violet-400 font-bold">→ LLM → Tools</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Semantic Retrieval</span>
              <span className="text-violet-300">FastAPI</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="h-20 rounded-xl bg-slate-900/80 border border-white/5 p-3 flex items-center justify-between mb-5 font-mono text-xs">
            <span className="text-slate-400">Project Workspace</span>
            <span className="text-brand-cyan text-[11px]">{project.type}</span>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative" aria-label="Featured Projects Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-mono uppercase tracking-wider mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              Verified Portfolio Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Featured <span className="text-gradient-ai">Projects &amp; Systems</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
              A curated selection of machine learning architectures, tabular predictive models, full-stack enterprise platforms, and AI product experiments.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech, stack..."
                className="w-full sm:w-48 pl-9 pr-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-brand-blue text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Primary Project Cards (Grid with Spotlight hover effect) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {primaryProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              spotlightColor="rgba(59, 130, 246, 0.2)"
              className="glass-panel border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between group shadow-lg"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Visual Header Mockup */}
                  {renderProjectVisualHeader(project)}

                  {/* Top Badge & Type */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-cyan-300 border border-brand-blue/20">
                      {project.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">
                      {project.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Metrics if present */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-100 dark:border-white/5 font-mono text-xs">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx}>
                          <span className="text-[10px] text-slate-400 block">{m.label}</span>
                          <span className="font-bold text-slate-800 dark:text-cyan-400">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2 mt-auto">
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-blue-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Deep Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.huggingfaceUrl && (
                      <a
                        href={project.huggingfaceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 dark:text-yellow-400 transition-colors"
                        title="Hugging Face Live Demo"
                        aria-label={`${project.title} Hugging Face Demo`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.liveUrl && !project.huggingfaceUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors"
                        title="Live Demo"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors"
                        title="GitHub Repository"
                        aria-label={`${project.title} GitHub Repository`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Additional Exploratory Prototypes Section */}
        {additionalPrototypes.length > 0 && (
          <div className="mt-10 border-t border-slate-200 dark:border-white/10 pt-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-brand-cyan" />
                  Additional Prototypes &amp; Concepts
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Applied experiments across legal tech, financial budgeting, agricultural AI, and operational systems.
                </p>
              </div>

              <button
                onClick={() => setShowAllPrototypes(!showAllPrototypes)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
              >
                {showAllPrototypes ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                <span>{showAllPrototypes ? 'Collapse' : `View All (${additionalPrototypes.length})`}</span>
              </button>
            </div>

            {/* Collapsible Grid with Spotlight */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-300 ${
              showAllPrototypes ? 'block' : 'hidden md:grid md:grid-cols-3 max-h-[360px] overflow-hidden relative'
            }`}>
              {(!showAllPrototypes ? additionalPrototypes.slice(0, 3) : additionalPrototypes).map((proto) => (
                <SpotlightCard
                  key={proto.id}
                  onClick={() => onOpenCaseStudy(proto)}
                  spotlightColor="rgba(6, 182, 212, 0.15)"
                  className="glass-panel p-5 border border-slate-200 dark:border-white/10 hover:border-brand-cyan/40 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        {proto.type}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors mb-1.5">
                      {proto.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                      {proto.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {proto.stack.slice(0, 3).map((st) => (
                      <span key={st} className="text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                        {st}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {!showAllPrototypes && additionalPrototypes.length > 3 && (
              <div className="text-center mt-4 md:hidden">
                <button
                  onClick={() => setShowAllPrototypes(true)}
                  className="text-xs font-semibold text-brand-blue hover:underline cursor-pointer"
                >
                  Show all {additionalPrototypes.length} additional prototypes
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
