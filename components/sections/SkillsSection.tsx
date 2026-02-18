
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS } from '../../constants';
import SkillBadge from '../ui/SkillBadge';

const SkillsSection: React.FC = () => {
  // Explicitly typing variants to avoid inference errors with Transition properties like 'ease' and 'staggerChildren'
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05,
        ease: "easeOut"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-900"
    >
      <motion.h4 variants={itemVariants} className="font-bold text-zinc-900 dark:text-zinc-100 mb-6 uppercase text-[10px] tracking-widest">Technical Toolkit</motion.h4>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <SkillBadge skill={skill} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
