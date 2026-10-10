import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, FEATURED_PROJECTS, type Project } from '../data/portfolioData';
import { 
  Search, 
  FileText, 
  ExternalLink, 
  Mail, 
  Sun, 
  Moon, 
  Sparkles, 
  FolderGit2, 
  User, 
  Wrench, 
  Milestone, 
  Compass, 
  ArrowRight, 
  Copy, 
  Check,
  Globe
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject: (project: Project) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  onClose,
  onOpenProject,
  theme,
  toggleTheme,
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const navActions = [
    { label: 'About Me', icon: User, href: '#about', section: 'Navigate' },
    { label: 'Featured Projects', icon: FolderGit2, href: '#projects', section: 'Navigate' },
    { label: 'Skills & Tech Stack', icon: Wrench, href: '#skills', section: 'Navigate' },
    { label: 'Engineering Experience', icon: Milestone, href: '#experience', section: 'Navigate' },
    { label: 'Development Philosophy', icon: Compass, href: '#philosophy', section: 'Navigate' },
    { label: 'Contact Section', icon: Mail, href: '#contact', section: 'Navigate' },
  ];

  const liveApps = FEATURED_PROJECTS.filter((p) => Boolean(p.liveUrl));

  const filteredLiveApps = liveApps.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase())) ||
    p.tagline.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = FEATURED_PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase())) ||
    p.tagline.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNav = navActions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl bg-slate-900 dark:bg-slate-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-slate-100 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-slate-900/90">
          <Search className="w-5 h-5 text-brand-cyan shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, app, or tech (e.g., NyayaMitra, AgriAI, FinSaathi)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs font-mono px-2 py-0.5 border border-white/10 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 font-mono text-xs">
          
          {/* Live Deployed Apps Section */}
          {filteredLiveApps.length > 0 && (
            <div>
              <div className="text-[10px] uppercase text-emerald-400 tracking-wider px-2 mb-1.5 font-bold flex items-center gap-1.5">
                <Globe className="w-3 h-3" />
                Live Deployed Applications ({filteredLiveApps.length})
              </div>
              <div className="space-y-1">
                {filteredLiveApps.map((app) => (
                  <a
                    key={app.id}
                    href={app.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-emerald-500/15 hover:text-emerald-300 transition-colors group cursor-pointer border border-emerald-500/10 hover:border-emerald-500/30"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-semibold text-white group-hover:text-emerald-300 truncate">{app.title}</span>
                      <span className="text-[10px] text-emerald-400/80 hidden sm:inline truncate">({app.badge})</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 shrink-0 flex items-center gap-1">
                      <span>Launch App</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div>
            <div className="text-[10px] uppercase text-slate-500 tracking-wider px-2 mb-1.5 font-bold">
              Quick Actions
            </div>
            <div className="space-y-1">
              <a
                href={PERSONAL_INFO.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-brand-blue/20 hover:text-cyan-300 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-brand-violet" />
                  <span>Open Official Resume (Drive PDF)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-brand-blue/20 hover:text-cyan-300 transition-colors group text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-brand-blue" />}
                  <span>{copied ? 'Copied to Clipboard!' : `Copy Email (${PERSONAL_INFO.email})`}</span>
                </div>
                <span className="text-[10px] text-slate-500">Instant</span>
              </button>

              <button
                onClick={() => {
                  toggleTheme();
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-brand-blue/20 hover:text-cyan-300 transition-colors group text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
                  <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                </div>
                <span className="text-[10px] text-slate-500">Theme</span>
              </button>
            </div>
          </div>

          {/* All Projects with Case Studies */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] uppercase text-slate-500 tracking-wider px-2 mb-1.5 font-bold">
                Project Case Studies ({filteredProjects.length})
              </div>
              <div className="space-y-1">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onOpenProject(p);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-brand-blue/20 hover:text-cyan-300 transition-colors group text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span className="font-semibold text-white group-hover:text-cyan-300 truncate">{p.title}</span>
                      <span className="text-[10px] text-slate-500 hidden sm:inline truncate">({p.badge})</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 shrink-0">
                      Case Study ↵
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Sections */}
          {filteredNav.length > 0 && (
            <div>
              <div className="text-[10px] uppercase text-slate-500 tracking-wider px-2 mb-1.5 font-bold">
                Navigation
              </div>
              <div className="space-y-1">
                {filteredNav.map((n) => {
                  const Icon = n.icon;
                  return (
                    <a
                      key={n.label}
                      href={n.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-brand-blue/20 hover:text-cyan-300 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-300" />
                        <span>{n.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Social Profiles */}
          <div>
            <div className="text-[10px] uppercase text-slate-500 tracking-wider px-2 mb-1.5 font-bold">
              Profiles
            </div>
            <div className="space-y-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-brand-blue/20 hover:text-cyan-300 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub (@Arjit077)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-brand-blue/20 hover:text-cyan-300 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn (in/j-arjit)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Shortcut Bar */}
        <div className="px-4 py-2.5 border-t border-white/10 bg-black/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Click any live link to launch immediately</span>
          <div className="flex items-center gap-2">
            <span>Esc to exit</span>
          </div>
        </div>

      </div>
    </div>
  );
};
