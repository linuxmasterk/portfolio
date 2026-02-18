
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectClick }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-24 mb-16"
    >
      <motion.div variants={itemVariants} className="grid grid-cols-4 md:grid-cols-12 gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800/50 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        <div className="col-span-1 md:col-span-2">Year</div>
        <div className="col-span-2 md:col-span-6">Project</div>
        <div className="col-span-1 md:col-span-4 text-right">Type</div>
      </motion.div>
      <div className="divide-y divide-zinc-50 dark:divide-zinc-900/30">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            onClick={() => onProjectClick(project)}
            className="grid grid-cols-4 md:grid-cols-12 gap-4 py-4 items-center group cursor-pointer hover:bg-zinc-50 dark:hover:bg-white/[0.03] transition-all px-4 -mx-4 rounded-xl"
          >
            <div className="col-span-1 md:col-span-2 text-zinc-400 dark:text-zinc-500 text-sm font-medium">{project.year} / </div>
            <div className="col-span-2 md:col-span-6 text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors text-sm font-medium truncate">{project.name}</div>
            <div className="col-span-1 md:col-span-4 text-right text-zinc-400 dark:text-zinc-500 text-xs md:text-sm truncate group-hover:dark:text-zinc-400 transition-colors">{project.type}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
