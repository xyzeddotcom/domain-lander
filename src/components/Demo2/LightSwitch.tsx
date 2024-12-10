import React from 'react';
import { Lightbulb } from 'lucide-react';

interface LightSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

export function LightSwitch({ isOn, onToggle }: LightSwitchProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        relative p-3 rounded-full transition-all duration-300
        ${isOn ? 'bg-yellow-400/20 backdrop-blur-sm' : 'bg-gray-800/50 backdrop-blur-sm'}
        hover:scale-110
        group
      `}
      aria-label="Toggle light"
    >
      <Lightbulb 
        className={`
          w-6 h-6 transition-all duration-300
          ${isOn ? 'text-yellow-400 filter drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]' : 'text-gray-400'}
        `}
      />
      <div className={`
        absolute inset-0 rounded-full transition-opacity duration-300
        ${isOn ? 'opacity-100' : 'opacity-0'}
        bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0
        animate-pulse
      `} />
    </button>
  );
}