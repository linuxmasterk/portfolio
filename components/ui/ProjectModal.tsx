
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Clock, Share2, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-[100] bg-white dark:bg-[#090909] flex flex-col items-center overflow-y-auto"
    >
      <div className="w-12 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full mt-6 shrink-0" />

      <div className="w-full max-w-4xl px-6 md:px-12 py-12 relative">
        <div className="fixed top-8 right-8 flex gap-3 z-[110]">
          <button 
            onClick={onClose}
            className="p-2.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-400 group"
          >
            <X size={16} className="group-hover:text-zinc-900 dark:group-hover:text-white" />
          </button>
        </div>

        <div className="text-center mb-16 space-y-4">
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">{project.date}</p>
          <h2 className="text-2xl font-bold dark:text-zinc-100 tracking-tight">{project.name}</h2>
          <div className="flex items-center justify-center gap-10 pt-4">
            <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
              <Clock size={14} />
              <span>Read time: {project.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
              <Share2 size={14} />
              <span>Share</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-12">
          {project.sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              {section.title && <h3 className="text-xl font-bold dark:text-zinc-100">{section.title}</h3>}
              
              {section.text && (
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {section.text}
                </p>
              )}

              {section.image && (
                <div className="space-y-4">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-50 dark:bg-[#121212] border border-zinc-100 dark:border-zinc-800/50">
                    <img src={section.image} alt={section.caption} className="w-full h-full object-cover" />
                  </div>
                  {section.caption && (
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center italic">{section.caption}</p>
                  )}
                </div>
              )}

              {section.terminal && (
                <div className="bg-[#0c0c0c] rounded-2xl p-6 font-mono text-xs overflow-hidden shadow-2xl border border-zinc-800/40">
                  <div className="flex gap-2 mb-6">
                    <span className="text-zinc-700">$</span>
                    <span className="text-zinc-300">{section.terminal.command}</span>
                  </div>
                  <div className="space-y-1.5">
                    {section.terminal.output.map((line, lidx) => (
                      <p key={lidx} className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-900">
           <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
                <Github size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm dark:text-zinc-100">Open Source</h4>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">github.com/Saurabh-Chede</p>
              </div>
           </div>
           <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
             I believe in the power of open source. Many of these projects are public and I welcome contributions or feedback on the architecture and code quality.
           </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;
