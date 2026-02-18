
import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Theme, Project } from './types';
import Header from './components/layout/Header';
import BioSection from './components/sections/BioSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import Footer from './components/layout/Footer';
import ProjectModal from './components/ui/ProjectModal';

export default function App() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [currentTime, setCurrentTime] = useState('');
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(`${timeStr} in Maharashtra`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    if (newTheme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText('saurabhchede21@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20 relative">
        <Header 
          currentTime={currentTime} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />

        <BioSection 
          activePopover={activePopover}
          setActivePopover={setActivePopover}
          copyToClipboard={copyToClipboard}
          copied={copied}
        />

        <ProjectsSection onProjectClick={setSelectedProject} />

        <SkillsSection />

        <Footer />

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </div>
  );
}
