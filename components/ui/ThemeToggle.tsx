
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../../types';

interface ThemeToggleProps {
  theme: Theme;
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggle }) => (
  <button
    onClick={toggle}
    className="flex items-center gap-1 p-1 px-2 rounded-full border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all hover:border-zinc-300 dark:hover:border-zinc-700"
  >
    <div className={`p-1.5 rounded-full transition-colors ${theme === Theme.LIGHT ? 'bg-zinc-100' : ''}`}>
      <Sun size={12} className={theme === Theme.LIGHT ? 'text-black' : 'text-zinc-600'} />
    </div>
    <div className={`p-1.5 rounded-full transition-colors ${theme === Theme.DARK ? 'bg-zinc-800' : ''}`}>
      <Moon size={12} className={theme === Theme.DARK ? 'text-white' : 'text-zinc-600'} />
    </div>
  </button>
);

export default ThemeToggle;
