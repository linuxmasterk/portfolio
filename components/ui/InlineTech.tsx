
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../../constants';

interface InlineTechProps {
  name: string;
}

const InlineTech: React.FC<InlineTechProps> = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const skill = SKILLS.find(s => s.name.toLowerCase().includes(name.toLowerCase()));

  if (!skill) return <span className="font-medium text-zinc-900 dark:text-zinc-100">{name}</span>;

  return (
    <span 
      className="relative inline-flex items-center cursor-default group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors underline decoration-zinc-200 dark:decoration-zinc-800 underline-offset-4 decoration-1 hover:decoration-zinc-400 dark:hover:decoration-zinc-600">
        {name}
      </span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 bottom-full mb-2.5 left-1/2 -translate-x-1/2 w-48 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-xl p-3 pointer-events-none"
          >
            <p className="text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-300 font-normal normal-case">
              {skill.description}
            </p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-zinc-900 border-r border-b border-zinc-100 dark:border-zinc-800 rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default InlineTech;
