
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PopoverWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
}

const PopoverWrapper: React.FC<PopoverWrapperProps> = ({ children, isOpen, className = "" }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        className={`absolute z-50 bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white dark:bg-[#121212] border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 pointer-events-none ${className}`}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default PopoverWrapper;
