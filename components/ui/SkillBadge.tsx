
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skill } from '../../constants';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 rounded-lg text-sm font-medium border border-zinc-100 dark:border-zinc-800 transition-all group-hover:border-zinc-300 dark:group-hover:border-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white cursor-default">
        {skill.icon && (
          <img 
            src={skill.icon} 
            className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
            alt="" 
            aria-hidden="true"
          />
        )}
        {skill.name}
      </span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-xl p-3 pointer-events-none"
          >
            <p className="text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-300 normal-case font-normal">
              {skill.description}
            </p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-zinc-900 border-r border-b border-zinc-100 dark:border-zinc-800 rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillBadge;
