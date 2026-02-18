
import React from 'react';
import { FILMS } from '../../constants';

const FilmsPopover: React.FC = () => (
  <div className="flex gap-3 w-full overflow-x-auto overflow-y-hidden h-44 pb-1 no-scrollbar scroll-smooth">
    {FILMS.map((film, idx) => (
      <div 
        key={idx} 
        className="relative group shrink-0 w-28 rounded-lg overflow-hidden border border-zinc-100 dark:border-zinc-800/50 shadow-sm transition-transform hover:scale-[1.02]"
      >
        <img 
          src={film.image} 
          alt={film.title} 
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
           <span className="text-[9px] text-white font-medium truncate">{film.title}</span>
        </div>
      </div>
    ))}
  </div>
);

export default FilmsPopover;
