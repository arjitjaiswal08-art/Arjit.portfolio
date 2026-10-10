import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { GitHubSection } from './components/GitHubSection';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { Project } from './data/portfolioData';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] dark:bg-[#080c14] light:bg-[#f8fafc] text-slate-100 dark:text-slate-100 light:text-slate-900 selection:bg-brand-blue/30 selection:text-white transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero theme={theme} />
        <About />
        <Projects onOpenCaseStudy={(proj) => setSelectedProject(proj)} />
        <Skills />
        <Experience />
        <Certifications />
        <GitHubSection />
        <Philosophy />
        <Contact />
      </main>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
