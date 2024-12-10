import React from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function HamburgerIcon({ isOpen, onClick, className = '' }: HamburgerIconProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-8 h-6 flex flex-col justify-between ${className}`}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span 
        className={`absolute w-full h-0.5 bg-gray-700 dark:bg-gray-300 transform transition-all duration-500 ease-in-out origin-right
          ${isOpen ? 'rotate-45 translate-y-[10px] w-full delay-300' : 'top-0 delay-0'}`}
      />
      <span 
        className={`absolute top-1/2 -translate-y-1/2 w-3/4 h-0.5 bg-gray-700 dark:bg-gray-300 transform transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-0 translate-x-full' : 'opacity-100 delay-150'}`}
      />
      <span 
        className={`absolute w-1/2 h-0.5 bg-gray-700 dark:bg-gray-300 transform transition-all duration-500 ease-in-out origin-right
          ${isOpen ? '-rotate-45 -translate-y-[10px] w-full delay-300' : 'bottom-0 ml-auto delay-0'}`}
      />
    </button>
  );
}