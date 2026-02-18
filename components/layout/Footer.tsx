
import React from 'react';

const Footer: React.FC = () => (
  <footer className="mt-24 pt-8 border-t border-zinc-50 dark:border-zinc-900/50 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] tracking-widest text-zinc-400 font-medium">
    <p>© {new Date().getFullYear()} Saurabh Chede</p>
  </footer>
);

export default Footer;
