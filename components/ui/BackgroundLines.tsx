
import React from "react";
import { motion } from "framer-motion";

interface BackgroundLinesProps {
  children?: React.ReactNode;
  className?: string;
}

export const BackgroundLines: React.FC<BackgroundLinesProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative min-h-screen w-full transition-colors duration-500 ${className}`}>
      {/* Background Container - Fixed to viewport so it doesn't block scroll */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Base Static Lines - Very Subtle */}
          <g className="opacity-[0.1] dark:opacity-[0.05]">
            <path d="M-100 900 L720 300 L1540 900" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400" />
            <path d="M-100 800 L720 200 L1540 800" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400" />
            <path d="M-100 700 L720 100 L1540 700" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400" />
            <path d="M200 1000 L720 400 L1240 1000" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400" />
            <path d="M400 1000 L720 500 L1040 1000" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400" />
            <path d="M720 -100 L720 1000" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400" />
          </g>

          {/* Animated Colorful Beams */}
          <AnimatedLine 
            d="M-100 900 L720 300 L1540 900" 
            duration={15} 
            delay={0}
            color="rgba(59, 130, 246, 0.4)" // Blue
          />
          <AnimatedLine 
            d="M-100 700 L720 100 L1540 700" 
            duration={18} 
            delay={4}
            color="rgba(139, 92, 246, 0.3)" // Violet
          />
          <AnimatedLine 
            d="M1540 800 L720 200 L-100 800" 
            duration={22} 
            delay={8}
            color="rgba(16, 185, 129, 0.3)" // Emerald
          />
          <AnimatedLine 
            d="M720 -100 L720 1000" 
            duration={12} 
            delay={2}
            color="rgba(245, 158, 11, 0.2)" // Amber
          />
          <AnimatedLine 
            d="M400 1000 L720 500 L1040 1000" 
            duration={20} 
            delay={5}
            color="rgba(236, 72, 153, 0.3)" // Pink
          />
        </svg>
        
        {/* Soft overlay to blend with background */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_30%,white_95%)] dark:bg-[radial-gradient(circle_at_50%_50%,transparent_30%,#090909_95%)] transition-colors duration-500" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

const AnimatedLine = ({ d, duration, delay, color }: { d: string; duration: number; delay: number; color: string }) => {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="150 1000"
      filter="url(#glow)"
      initial={{ strokeDashoffset: 1150, opacity: 0 }}
      animate={{ 
        strokeDashoffset: -1150,
        opacity: [0, 0.6, 0.8, 0.6, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
        times: [0, 0.1, 0.5, 0.9, 1]
      }}
    />
  );
};
