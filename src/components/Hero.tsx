import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NeuralCanvas } from './NeuralCanvas';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Terminal, 
  Cpu, 
  Sparkles, 
  ChevronDown, 
  Layers, 
  Play, 
  Activity,
  CheckCircle2,
  ExternalLink,
  Volume2,
  VolumeX,
  Command
} from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
  onOpenCommandMenu?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onOpenCommandMenu }) => {
  const [activeTab, setActiveTab] = useState<'inference' | 'architecture' | 'spec'>('inference');
  const [simulatedInferenceState, setSimulatedInferenceState] = useState<'idle' | 'running' | 'completed'>('completed');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [inferenceStepLabel, setInferenceStepLabel] = useState('Ready for Inference');

  // Dynamic typing role rotator
  const roles = [
    "AI Engineer",
    "Machine Learning Developer",
    "AST Transformer Researcher",
    "Full-Stack Product Builder"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: number;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timeout = window.setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => window.clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  // Audio Spectrogram simulation state
  const [spectrumValues, setSpectrumValues] = useState<number[]>([
    42, 68, 30, 85, 95, 60, 48, 72, 88, 35, 90, 75, 45, 82, 98, 64, 40, 78, 52, 90
  ]);
  const animIntervalRef = useRef<number | null>(null);

  const runSimulation = () => {
    setSimulatedInferenceState('running');
    setInferenceStepLabel('Extracting 128 Mel-Bins & 16x16 Patches...');

    // Web Audio Synthesizer: Play an authentic, crisp acoustic chirp
    if (soundEnabled && typeof window !== 'undefined') {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.35);

          gain.gain.setValueAtTime(0.06, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 0.5);
        }
      } catch {
        // Audio policy fallback
      }
    }

    // Dynamic spectrum visualizer oscillation
    let stepCount = 0;
    if (animIntervalRef.current) window.clearInterval(animIntervalRef.current);
    animIntervalRef.current = window.setInterval(() => {
      setSpectrumValues(prev => prev.map(() => Math.floor(Math.random() * 85 + 15)));
      stepCount++;
      if (stepCount === 6) {
        setInferenceStepLabel('AST Self-Attention Patch Projection...');
      }
    }, 100);

    setTimeout(() => {
      if (animIntervalRef.current) window.clearInterval(animIntervalRef.current);
      setSpectrumValues([42, 68, 30, 85, 95, 60, 48, 72, 88, 35, 90, 75, 45, 82, 98, 64, 40, 78, 52, 90]);
      setSimulatedInferenceState('completed');
      setInferenceStepLabel('Identified: Acoustic Signature (98.4%)');
    }, 1500);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden cyber-grid"
      aria-label="Introduction and Overview"
    >
      {/* Interactive Background Neural Canvas */}
      <NeuralCanvas theme={theme} />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-blue/15 dark:bg-brand-blue/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-violet/15 dark:bg-brand-violet/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-brand-cyan/15 dark:bg-brand-cyan/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge & Interactive Command Palette hint */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-800/80 light:bg-slate-100 border border-brand-blue/30 dark:border-brand-blue/40 shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase font-mono text-brand-blue dark:text-cyan-300 light:text-blue-700">
                  {PERSONAL_INFO.heroLabel}
                </span>
              </div>

              {onOpenCommandMenu && (
                <button
                  onClick={onOpenCommandMenu}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Open command palette"
                >
                  <Command className="w-3 h-3 text-brand-blue" />
                  <span>Press ⌘K for Quick Menu</span>
                </button>
              )}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 text-slate-900 dark:text-white">
              I build <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">intelligent systems</span> that solve real-world problems.
            </h1>

            {/* Dynamic Role Rotator Ticker */}
            <div className="h-8 flex items-center gap-2 mb-6 font-mono text-base sm:text-lg text-slate-400 dark:text-slate-300">
              <span className="text-brand-cyan">&gt;</span>
              <span className="text-slate-900 dark:text-white font-semibold">{displayedText}</span>
              <span className="w-2 h-5 bg-brand-cyan inline-block animate-pulse"></span>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue to-brand-indigo hover:from-blue-600 hover:to-indigo-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-white/10 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-brand-violet" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Secondary Social & Direct Links */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 dark:border-white/10 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect
              </span>
              
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white transition-all border border-slate-200 dark:border-white/5"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white transition-all border border-slate-200 dark:border-white/5"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white transition-all border border-slate-200 dark:border-white/5"
                  aria-label="Contact Section"
                  title="Get in touch"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 ml-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="hidden sm:inline">{PERSONAL_INFO.status}</span>
                <span className="sm:hidden">Open to Collaborations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer & AI Engineering Terminal Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-blue/30 via-brand-violet/30 to-brand-cyan/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl bg-slate-900/95 dark:bg-slate-950/95 border border-white/10 text-slate-100 p-5 shadow-2xl backdrop-blur-xl">
                
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-brand-blue" />
                      arjit-ai-engine :: ast-transformer
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg text-[11px] font-mono">
                    <button
                      onClick={() => setActiveTab('inference')}
                      className={`px-2 py-0.5 rounded transition-colors ${activeTab === 'inference' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      Inference
                    </button>
                    <button
                      onClick={() => setActiveTab('architecture')}
                      className={`px-2 py-0.5 rounded transition-colors ${activeTab === 'architecture' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      Arch
                    </button>
                    <button
                      onClick={() => setActiveTab('spec')}
                      className={`px-2 py-0.5 rounded transition-colors ${activeTab === 'spec' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      Metrics
                    </button>
                  </div>
                </div>

                {/* Tab 1: Inference Simulation */}
                {activeTab === 'inference' && (
                  <div className="space-y-4">
                    <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 font-mono text-xs">
                      <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/5 mb-2.5">
                        <span className="flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-cyan-400" />
                          Target: Audio Spectrogram Transformer
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSoundEnabled(!soundEnabled)}
                            className="text-slate-400 hover:text-cyan-300 p-0.5 transition-colors cursor-pointer"
                            title={soundEnabled ? "Mute synth audio" : "Enable synth audio"}
                            aria-label="Toggle synthetic audio"
                          >
                            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
                          </button>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                            Live
                          </span>
                        </div>
                      </div>

                      {/* Simulated Audio Waveform / Spectrogram Bars */}
                      <div className="my-3">
                        <div className="text-[11px] text-slate-400 mb-1.5 flex justify-between">
                          <span>Log-Mel Spectrogram (128 Bins)</span>
                          <span className="text-cyan-400 font-semibold font-mono">16 kHz Resampled</span>
                        </div>
                        <div className="flex items-end gap-1 h-14 bg-slate-900/90 p-2 rounded-lg border border-white/5 overflow-hidden">
                          {spectrumValues.map((val, idx) => (
                            <div
                              key={idx}
                              className={`flex-1 rounded-sm transition-all duration-150 ${
                                simulatedInferenceState === 'running'
                                  ? 'bg-gradient-to-t from-cyan-400 via-blue-500 to-violet-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]'
                                  : 'bg-gradient-to-t from-blue-600 via-indigo-500 to-cyan-400'
                              }`}
                              style={{ 
                                height: `${Math.min(100, Math.max(12, val))}%` 
                              }}
                            />
                          ))}
                        </div>
                        <div className="mt-1 text-[10px] text-slate-500 flex justify-between">
                          <span>0 Hz</span>
                          <span className="text-cyan-300/80">{inferenceStepLabel}</span>
                          <span>8 kHz (Nyquist)</span>
                        </div>
                      </div>

                      {/* Results Box */}
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase text-slate-400 tracking-wider">Top Detected Event</div>
                          <div className="text-sm font-bold text-white flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                            Acoustic Signature A
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase text-slate-400 tracking-wider">Confidence</div>
                          <div className="text-sm font-bold text-cyan-400 font-mono">98.4%</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1">
                      <button
                        onClick={runSimulation}
                        disabled={simulatedInferenceState === 'running'}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg bg-brand-blue/20 hover:bg-brand-blue/30 text-cyan-300 border border-brand-blue/30 transition-all cursor-pointer shadow-sm hover:shadow-cyan-500/20"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>{simulatedInferenceState === 'running' ? 'Evaluating Patches...' : 'Simulate AST Audio Inference'}</span>
                      </button>

                      <a
                        href={PERSONAL_INFO.huggingface}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 py-2 px-3 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
                        title="Open Hugging Face Live Space"
                      >
                        <span>Hugging Face</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Tab 2: Architecture */}
                {activeTab === 'architecture' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-black/40 rounded-xl border border-white/5 space-y-2">
                      <div className="text-slate-400 text-[11px] font-semibold flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-brand-violet" />
                        Model Pipeline Flow:
                      </div>
                      <div className="space-y-1.5 text-slate-300 pl-2 border-l border-brand-blue/30">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span>Input: 16 kHz Audio Stream</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                          <span>STFT -&gt; 128 Mel-Filterbank Spectrogram</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                          <span>16x16 Patch Projection + 2D Positional Embeddings</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                          <span>Transformer Encoder Self-Attention Layers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>Classification Head (Multilabel Sigmoid / Softmax)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-400 p-2 rounded bg-white/5 border border-white/5 flex justify-between items-center">
                      <span>Base Model: <strong className="text-cyan-300 font-normal">MIT/ast-finetuned-audioset-10-10</strong></span>
                      <span className="text-emerald-400 text-[10px]">PyTorch</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Metrics */}
                {activeTab === 'spec' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                        <div className="text-[10px] text-slate-400 uppercase">Verified Macro F1</div>
                        <div className="text-lg font-bold text-emerald-400 mt-1">0.84172</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Top-tier acoustic accuracy</div>
                      </div>
                      <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                        <div className="text-[10px] text-slate-400 uppercase">CNN Baseline</div>
                        <div className="text-lg font-bold text-slate-300 mt-1">~0.760</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Exceeded by +8.1% F1</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-[11px] text-slate-300">
                        Evaluated across multi-class environmental acoustic recordings with rigorous holdout validation.
                      </span>
                    </div>
                  </div>
                )}

                {/* Bottom System Bar */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    Stack: PyTorch • Transformers • Torchaudio
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Verified
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1 text-slate-400 hover:text-brand-blue dark:hover:text-white transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Explore Overview</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-brand-blue transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};
