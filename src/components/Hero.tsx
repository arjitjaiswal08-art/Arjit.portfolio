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
  Command,
  Copy,
  Check,
  Zap,
  Award,
  GraduationCap
} from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
  onOpenCommandMenu?: () => void;
}

interface AudioSample {
  id: string;
  name: string;
  category: string;
  freq: number;
  detectedEvent: string;
  confidence: string;
  description: string;
  patchHighlight: number[];
}

export const Hero: React.FC<HeroProps> = ({ theme, onOpenCommandMenu }) => {
  const [activeTab, setActiveTab] = useState<'inference' | 'attention' | 'code' | 'architecture'>('inference');
  const [simulatedInferenceState, setSimulatedInferenceState] = useState<'idle' | 'running' | 'completed'>('completed');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);

  const audioSamples: AudioSample[] = [
    {
      id: 'industrial',
      name: 'Industrial Vibration',
      category: 'Machinery Acoustics',
      freq: 380,
      detectedEvent: 'Mechanical Gearbox Anomaly',
      confidence: '98.4%',
      description: 'High-frequency transient harmonics extracted via 128 Mel-filterbanks.',
      patchHighlight: [4, 5, 12, 13, 20, 21, 28, 29]
    },
    {
      id: 'voice',
      name: 'Speech Command',
      category: 'Vernacular Voice NLP',
      freq: 620,
      detectedEvent: 'Kisan Vaani Speech Token',
      confidence: '97.2%',
      description: 'Formant energy distribution across time-frequency spectrogram patches.',
      patchHighlight: [2, 3, 10, 11, 18, 19, 26, 27]
    },
    {
      id: 'bioacoustic',
      name: 'Bioacoustic Fauna',
      category: 'Environmental Sound',
      freq: 840,
      detectedEvent: 'Avian Acoustic Signature',
      confidence: '96.8%',
      description: 'Multi-harmonic chirps detected across 16 kHz resampled acoustic recording.',
      patchHighlight: [6, 7, 14, 15, 22, 23, 30, 31]
    }
  ];

  const currentSample = audioSamples[selectedSampleIndex];

  // Dynamic typing role rotator
  const roles = [
    "AI Systems Engineer",
    "AST Transformer Developer",
    "Machine Learning Engineer",
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
      }, 65);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), 2600);
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
    45, 68, 32, 88, 96, 62, 50, 75, 92, 38, 94, 78, 48, 85, 98, 66, 42, 80, 55, 92
  ]);
  const [inferenceStep, setInferenceStep] = useState('Model Ready (AST v2)');
  const animIntervalRef = useRef<number | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const playSynthesizedTone = (baseFreq: number) => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.8, ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const runSimulation = () => {
    setSimulatedInferenceState('running');
    setInferenceStep('Extracting 128 Mel-Bins & 16x16 Patches...');
    playSynthesizedTone(currentSample.freq);

    let stepCount = 0;
    if (animIntervalRef.current) window.clearInterval(animIntervalRef.current);
    animIntervalRef.current = window.setInterval(() => {
      setSpectrumValues(prev => prev.map(() => Math.floor(Math.random() * 88 + 12)));
      stepCount++;
      if (stepCount === 4) {
        setInferenceStep('Multi-Head Self-Attention Projection...');
      } else if (stepCount === 8) {
        setInferenceStep('Softmax Classifier Head Evaluation...');
      }
    }, 90);

    setTimeout(() => {
      if (animIntervalRef.current) window.clearInterval(animIntervalRef.current);
      setSpectrumValues([48, 72, 36, 92, 98, 65, 54, 78, 95, 42, 96, 82, 52, 88, 100, 70, 46, 84, 58, 95]);
      setSimulatedInferenceState('completed');
      setInferenceStep(`Predicted: ${currentSample.detectedEvent} (${currentSample.confidence})`);
    }, 1400);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden cyber-grid"
      aria-label="Introduction and Overview"
    >
      {/* Interactive Background Neural Canvas */}
      <NeuralCanvas theme={theme} />

      {/* Atmospheric Aurora Blooms */}
      <div className="aurora-bg top-12 left-1/4 w-[650px] h-[450px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-500/20" />
      <div className="aurora-bg top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-violet-600/20 via-fuchsia-600/15 to-blue-600/15" />
      <div className="aurora-bg bottom-10 left-10 w-[420px] h-[420px] bg-gradient-to-tr from-cyan-600/15 via-emerald-600/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headlines, Pitch, & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Identity Capsule: Photo + Name + IIT Madras + Command Menu */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.18)] backdrop-blur-xl group hover:border-cyan-400/60 transition-all duration-300">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 shadow-inner shrink-0">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950"></span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5 font-sans">
                    {PERSONAL_INFO.name}
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span className="text-[11px] font-mono font-medium text-cyan-300">IIT Madras</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Data Science &amp; AI • AI Engineer</span>
                </div>
              </div>

              {onOpenCommandMenu && (
                <button
                  onClick={onOpenCommandMenu}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
                  title="Open command palette"
                >
                  <Command className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Press ⌘K for Menu</span>
                </button>
              )}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight leading-[1.08] mb-4 text-white">
              I build <span className="text-gradient-ai drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]">intelligent systems</span> that solve real-world problems.
            </h1>

            {/* Dynamic Role Rotator Ticker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 mb-6 font-mono text-sm sm:text-base text-slate-300 shadow-inner">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="text-white font-semibold">{displayedText}</span>
              <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse"></span>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              I'm <strong className="text-white font-semibold">Arjit Jaiswal</strong> — an AI-focused developer bridging machine learning research and scalable software. From fine-tuning <strong className="text-cyan-300 font-medium">Audio Spectrogram Transformers (F1 0.841)</strong> to deploying full-stack legal and agri-intelligence systems, I build software that connects AI models to real human utility.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/15 hover:border-cyan-400/40 shadow-sm hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Stats Mini Bento Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full mb-8">
              <div className="p-2.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-emerald-400 font-bold">0.841 F1</div>
                  <div className="text-[10px] text-slate-400">AST Audio Model</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-cyan-300 font-bold">6+ Live Apps</div>
                  <div className="text-[10px] text-slate-400">Deployed on Vercel</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-indigo-300 font-bold">IIT Madras</div>
                  <div className="text-[10px] text-slate-400">Data Science & AI</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-violet-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-violet-300 font-bold">PyTorch / LLMs</div>
                  <div className="text-[10px] text-slate-400">RAG & Transformers</div>
                </div>
              </div>
            </div>

            {/* Secondary Social & Direct Links */}
            <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-white/10 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect
              </span>
              
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10 hover:border-white/20 shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10 hover:border-white/20 shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10 hover:border-white/20 shadow-sm"
                  aria-label="Contact Section"
                  title="Get in touch"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 ml-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="hidden sm:inline">{PERSONAL_INFO.status}</span>
                <span className="sm:hidden">Available for Roles</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer & AI Engineering Terminal Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-violet-500/30 blur-xl opacity-80 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl bg-slate-950/95 border border-white/15 text-slate-100 p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_6px_rgba(239,68,68,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_6px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_6px_rgba(34,197,94,0.5)]"></div>
                    <span className="ml-2 font-mono text-[11px] text-slate-300 flex items-center gap-1.5 font-semibold">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      ast-transformer :: live-lab
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg text-[11px] font-mono border border-white/10">
                    <button
                      onClick={() => setActiveTab('inference')}
                      className={`px-2 py-0.5 rounded transition-all ${activeTab === 'inference' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      Inference
                    </button>
                    <button
                      onClick={() => setActiveTab('attention')}
                      className={`px-2 py-0.5 rounded transition-all ${activeTab === 'attention' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      Attention
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-2 py-0.5 rounded transition-all ${activeTab === 'code' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      PyTorch
                    </button>
                    <button
                      onClick={() => setActiveTab('architecture')}
                      className={`px-2 py-0.5 rounded transition-all ${activeTab === 'architecture' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      Arch
                    </button>
                  </div>
                </div>

                {/* Tab 1: Inference Simulation */}
                {activeTab === 'inference' && (
                  <div className="space-y-4">
                    {/* Interactive Sample Selector */}
                    <div>
                      <div className="text-[11px] text-slate-400 mb-1.5 flex justify-between font-mono">
                        <span>Select Acoustic Sample:</span>
                        <span className="text-cyan-400 font-semibold">{currentSample.category}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {audioSamples.map((sample, idx) => (
                          <button
                            key={sample.id}
                            onClick={() => {
                              setSelectedSampleIndex(idx);
                              playSynthesizedTone(sample.freq);
                            }}
                            className={`p-2 rounded-lg text-left transition-all border ${
                              selectedSampleIndex === idx
                                ? 'bg-cyan-500/15 border-cyan-400/50 text-white'
                                : 'bg-white/5 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10'
                            }`}
                          >
                            <div className="text-[11px] font-semibold truncate font-mono">{sample.name}</div>
                            <div className="text-[10px] text-cyan-400/90">{sample.confidence}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 font-mono text-xs shadow-inner">
                      <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/10 mb-2.5">
                        <span className="flex items-center gap-1.5 text-slate-200">
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
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                            16 kHz
                          </span>
                        </div>
                      </div>

                      {/* Simulated Audio Waveform / Spectrogram Bars */}
                      <div className="my-3">
                        <div className="text-[11px] text-slate-400 mb-1.5 flex justify-between">
                          <span>Log-Mel Spectrogram (128 Bins)</span>
                          <span className="text-cyan-400 font-semibold font-mono">16x16 Patches</span>
                        </div>
                        <div className="flex items-end gap-1 h-14 bg-slate-900/90 p-2 rounded-lg border border-white/10 overflow-hidden">
                          {spectrumValues.map((val, idx) => (
                            <div
                              key={idx}
                              className={`flex-1 rounded-sm transition-all duration-150 ${
                                simulatedInferenceState === 'running'
                                  ? 'bg-gradient-to-t from-cyan-400 via-blue-500 to-fuchsia-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]'
                                  : 'bg-gradient-to-t from-blue-600 via-indigo-500 to-cyan-400'
                              }`}
                              style={{ 
                                height: `${Math.min(100, Math.max(14, val))}%` 
                              }}
                            />
                          ))}
                        </div>
                        <div className="mt-1.5 text-[10px] text-slate-400 flex justify-between">
                          <span>0 Hz</span>
                          <span className="text-cyan-300 font-medium">{inferenceStep}</span>
                          <span>8 kHz (Nyquist)</span>
                        </div>
                      </div>

                      {/* Results Box */}
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase text-slate-400 tracking-wider">Top Detected Event</div>
                          <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            {currentSample.detectedEvent}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase text-slate-400 tracking-wider">Confidence</div>
                          <div className="text-xs sm:text-sm font-bold text-cyan-400 font-mono mt-0.5">
                            {currentSample.confidence}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1">
                      <button
                        onClick={runSimulation}
                        disabled={simulatedInferenceState === 'running'}
                        className="btn-shimmer flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{simulatedInferenceState === 'running' ? 'Projecting Patches...' : 'Simulate AST Audio Inference'}</span>
                      </button>

                      <a
                        href={PERSONAL_INFO.huggingface}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 py-2.5 px-3.5 text-xs font-semibold rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all shadow-sm"
                        title="Open Hugging Face Live Space"
                      >
                        <span>Hugging Face</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Tab 2: Attention Map Grid */}
                {activeTab === 'attention' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-black/60 rounded-xl border border-white/10 space-y-2.5">
                      <div className="flex items-center justify-between text-slate-300 text-[11px] font-semibold">
                        <span className="flex items-center gap-1.5 text-cyan-300">
                          <Layers className="w-3.5 h-3.5 text-cyan-400" />
                          Transformer Self-Attention Patch Map (16x16)
                        </span>
                        <span className="text-emerald-400 text-[10px]">12 Heads</span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans">
                        Hover over patches to inspect cross-attention activation across harmonic frequencies:
                      </p>

                      {/* 32 Patch Grid */}
                      <div className="grid grid-cols-8 gap-1.5 p-2 bg-slate-900/90 rounded-lg border border-white/10">
                        {Array.from({ length: 32 }).map((_, i) => {
                          const isHigh = currentSample.patchHighlight.includes(i);
                          return (
                            <div
                              key={i}
                              className={`aspect-square rounded flex items-center justify-center text-[9px] cursor-pointer transition-all ${
                                isHigh
                                  ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 font-bold shadow-[0_0_8px_rgba(6,182,212,0.6)] scale-105'
                                  : 'bg-white/5 text-slate-500 hover:bg-white/15 hover:text-white'
                              }`}
                              title={`Patch P_${i}: ${isHigh ? 'High Self-Attention Weight' : 'Background Acoustic Energy'}`}
                            >
                              P{i}
                            </div>
                          );
                        })}
                      </div>

                      <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded bg-cyan-400"></span>
                          High Attention Weight
                        </span>
                        <span>Layer 12 Multi-Head Softmax</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: PyTorch Code */}
                {activeTab === 'code' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-black/70 rounded-xl border border-white/10 overflow-x-auto text-[11px] text-slate-300 leading-relaxed max-h-56">
                      <div className="text-slate-500 mb-1"># PyTorch AST Inference Pipeline</div>
                      <div><span className="text-fuchsia-400">from</span> transformers <span className="text-fuchsia-400">import</span> ASTModel, ASTConfig</div>
                      <div><span className="text-fuchsia-400">import</span> torchaudio</div>
                      <div className="my-1.5 text-slate-500"># 1. Standardize 16 kHz & extract Mel Spectrogram</div>
                      <div>waveform, sr = torchaudio.load(<span className="text-emerald-400">"sample.wav"</span>)</div>
                      <div>waveform = torchaudio.functional.resample(waveform, sr, <span className="text-amber-400">16000</span>)</div>
                      <div>spectrogram = torchaudio.transforms.MelSpectrogram(n_mels=<span className="text-amber-400">128</span>)(waveform)</div>
                      <div className="my-1.5 text-slate-500"># 2. Patch Projection & Forward Pass</div>
                      <div>model = ASTModel.from_pretrained(<span className="text-cyan-300">"MIT/ast-finetuned"</span>)</div>
                      <div>outputs = model(spectrogram)</div>
                      <div className="text-emerald-400 mt-1"># Verified Macro F1: 0.84172</div>
                    </div>
                  </div>
                )}

                {/* Tab 4: Architecture */}
                {activeTab === 'architecture' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                        <div className="text-[10px] text-slate-400 uppercase">Verified Macro F1</div>
                        <div className="text-lg font-bold text-emerald-400 mt-1">0.84172</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Top acoustic accuracy</div>
                      </div>
                      <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                        <div className="text-[10px] text-slate-400 uppercase">2D CNN Baseline</div>
                        <div className="text-lg font-bold text-slate-300 mt-1">~0.760</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Exceeded by +8.1% F1</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-[11px] text-slate-300">
                        Evaluated across multi-class environmental acoustic events with rigorous cross-entropy optimization.
                      </span>
                    </div>
                  </div>
                )}

                {/* Bottom System Bar */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    Stack: PyTorch • Transformers • Torchaudio
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Verified Live
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
            className="group flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Explore Overview</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};
