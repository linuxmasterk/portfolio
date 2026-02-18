
import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import InlineTech from '../ui/InlineTech';
import PopoverWrapper from '../ui/PopoverWrapper';
import FilmsPopover from '../ui/FilmsPopover';
import SocialPopover from '../ui/SocialPopover';

interface BioSectionProps {
  activePopover: string | null;
  setActivePopover: (val: string | null) => void;
  copyToClipboard: () => void;
  copied: boolean;
}

const BioSection: React.FC<BioSectionProps> = ({ activePopover, setActivePopover, copyToClipboard, copied }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8 mb-20"
    >
      <motion.p variants={itemVariants} className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        Computer Engineering graduate from <span className="link-underline">Mumbai University</span>. I build responsive web applications with a focus on frontend performance and user experience. Currently exploring the intersection of design and clean code.
      </motion.p>

      <motion.p variants={itemVariants} className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        I enjoy taking complex problems and turning them into simple, elegant designs. My stack includes <InlineTech name="React" />, <InlineTech name="Next.js" />, and <InlineTech name="Tailwind CSS" />. I believe great software is built on foundation of attention to detail and empathy for the end user.
      </motion.p>

      <motion.p variants={itemVariants} className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        Always learning. Whether it's mastering <InlineTech name="GSAP" /> for smoother animations or optimizing database schemas in <InlineTech name="MongoDB" />, I strive to grow with every project I ship.
      </motion.p>

      <motion.div variants={itemVariants} className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        In my free time, I watch{' '}
        <span 
          className="relative inline-block cursor-pointer underline decoration-zinc-200 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400 dark:hover:decoration-zinc-400 transition-colors"
          onMouseEnter={() => setActivePopover('films')}
          onMouseLeave={() => setActivePopover(null)}
        >
          films
          <PopoverWrapper isOpen={activePopover === 'films'} className="w-80 md:w-96">
            <FilmsPopover />
          </PopoverWrapper>
        </span>.
      </motion.div>

      <motion.div variants={itemVariants} className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        Connect with me on{' '}
        <span 
          className="relative inline-flex items-center gap-1 cursor-pointer underline decoration-zinc-200 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400 dark:hover:decoration-zinc-400 transition-colors"
          onMouseEnter={() => setActivePopover('linkedin')}
          onMouseLeave={() => setActivePopover(null)}
        >
          LinkedIn
          <PopoverWrapper isOpen={activePopover === 'linkedin'} className="w-72">
            <SocialPopover platform="linkedin" />
          </PopoverWrapper>
        </span>
        {' or '}
        <span 
          className="relative inline-flex items-center gap-1 cursor-pointer underline decoration-zinc-200 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400 dark:hover:decoration-zinc-400 transition-colors"
          onMouseEnter={() => setActivePopover('github')}
          onMouseLeave={() => setActivePopover(null)}
        >
          GitHub
          <PopoverWrapper isOpen={activePopover === 'github'} className="w-72">
            <SocialPopover platform="github" />
          </PopoverWrapper>
        </span>
        {' · '}
        <span 
          onClick={copyToClipboard}
          className="relative inline-block cursor-pointer underline decoration-zinc-200 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400 dark:hover:decoration-zinc-400 transition-colors"
        >
          email
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded border border-emerald-100 dark:border-emerald-800/50"
              >
                Copied
              </motion.div>
            )}
          </AnimatePresence>
        </span>
      </motion.div>
    </motion.main>
  );
};

export default BioSection;
