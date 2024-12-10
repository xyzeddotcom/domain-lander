import React from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        Domain Lander
      </span>
    </div>
  );
}