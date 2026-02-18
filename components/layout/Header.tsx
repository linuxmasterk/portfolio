
import React from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { Theme } from '../../types';

interface HeaderProps {
  currentTime: string;
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentTime, theme, toggleTheme }) => (
  <header className="flex justify-between items-start mb-16">
    <div className="space-y-1.5">
      <h1 className="text-lg font-semibold tracking-tight dark:text-zinc-100">Saurabh Chede</h1>
      <p className="text-zinc-400 text-xs font-normal">{currentTime}</p>
    </div>
    <ThemeToggle theme={theme} toggle={toggleTheme} />
  </header>
);

export default Header;
