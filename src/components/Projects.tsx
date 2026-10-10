import React, { useState } from 'react';
import { FEATURED_PROJECTS, type Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { 
  FolderGit2, 
  ExternalLink, 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  Plus, 
  Minus,
  Terminal
} from 'lucide-react';

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai-ml' | 'fullstack' | 'product'>('all');
  const [showAllPrototypes, setShowAllPrototypes] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'fullstack', label: 'Full-Stack Systems' },
    { id: 'product', label: 'AI Products & R&D' },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const primaryProjects = filteredProjects.filter((p) => p.featured);
  const additionalPrototypes = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative" aria-label="Featured Projects Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-white/5 p-1.5 rounded-xl border border-slate-200 dark:border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
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

        {/* Primary Project Cards (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {primaryProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between card-glow-hover group relative overflow-hidden"
            >
              {/* Subtle card ambient highlight */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-blue/5 group-hover:bg-brand-blue/15 rounded-full blur-2xl transition-all pointer-events-none" />

              <div>
                {/* Top Badge & Type */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-cyan-300 border border-brand-blue/20">
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
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Metrics / Highlights if present */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 mb-5 p-3 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-100 dark:border-white/5 font-mono text-xs">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <span className="text-[10px] text-slate-400 block">{m.label}</span>
                        <span className="font-bold text-slate-800 dark:text-cyan-400">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
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
                      +{project.stack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Case Study</span>
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors"
              >
                {showAllPrototypes ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                <span>{showAllPrototypes ? 'Collapse' : `View All (${additionalPrototypes.length})`}</span>
              </button>
            </div>

            {/* Collapsible Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-300 ${
              showAllPrototypes ? 'block' : 'hidden md:grid md:grid-cols-3 max-h-[360px] overflow-hidden relative'
            }`}>
              {(!showAllPrototypes ? additionalPrototypes.slice(0, 3) : additionalPrototypes).map((proto) => (
                <div
                  key={proto.id}
                  onClick={() => onOpenCaseStudy(proto)}
                  className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-brand-cyan/40 transition-all cursor-pointer flex flex-col justify-between group"
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
                </div>
              ))}
            </div>

            {!showAllPrototypes && additionalPrototypes.length > 3 && (
              <div className="text-center mt-4 md:hidden">
                <button
                  onClick={() => setShowAllPrototypes(true)}
                  className="text-xs font-semibold text-brand-blue hover:underline"
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
