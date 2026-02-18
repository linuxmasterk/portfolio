
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

interface SocialPopoverProps {
  platform: 'linkedin' | 'github';
}

const SocialPopover: React.FC<SocialPopoverProps> = ({ platform }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
        {platform === 'linkedin' ? <Linkedin className="text-zinc-500" /> : <Github className="text-zinc-500" />}
      </div>
      <div>
        <h4 className="font-bold text-sm dark:text-zinc-100">Saurabh Chede</h4>
        <p className="text-xs text-zinc-500">{platform === 'linkedin' ? 'Professional Network' : 'Code Repository'}</p>
      </div>
    </div>
    <div className="h-[1px] bg-gray-50 dark:bg-zinc-800 my-1" />
    <p className="text-xs text-zinc-500 leading-relaxed italic">
      {platform === 'linkedin' ? "Let's connect and discuss full-stack development opportunities." : "Check out my latest commits and project architectures."}
    </p>
  </div>
);

export default SocialPopover;
