import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { 
  X, 
  ExternalLink, 
  AlertCircle, 
  Cpu, 
  Globe, 
  Layers, 
  Sparkles, 
  BarChart3
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-3xl my-8 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner with Gradient */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-white/10">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-brand-blue/20 text-cyan-300 border border-brand-blue/30">
              {project.badge}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-400 border border-white/10">
              {project.type}
            </span>
          </div>

          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            {project.tagline}
          </p>

          {/* Key Metrics / Highlights if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-black/40 p-3 rounded-xl border border-white/5 font-mono">
                  <div className="text-[10px] uppercase text-slate-400 tracking-wider">
                    {metric.label}
                  </div>
                  <div className="text-base font-bold text-cyan-400 mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body: Detailed Case Study */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Problem Statement */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              The Problem Statement
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* Technical Approach */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-brand-blue" />
              Technical Approach &amp; Architecture
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5">
              {project.caseStudy.approach}
            </p>
          </div>

          {/* Key Implementation Details */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-brand-violet" />
              Engineering Details
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.caseStudy.technicalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results & Verification */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              Results &amp; Verification
            </h4>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300">
              {project.caseStudy.results}
            </div>
          </div>

          {/* Real-World Impact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Real-World Applications
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5">
              {project.caseStudy.realWorldImpact}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-slate-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-6 bg-slate-950/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.huggingfaceUrl && (
              <a
                href={project.huggingfaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 border border-yellow-500/30 transition-colors"
              >
                <span>🤗 Hugging Face Space</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.liveUrl && !project.huggingfaceUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-brand-blue hover:bg-blue-600 text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/15 text-slate-300 transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
