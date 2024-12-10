import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DomainFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function DomainFeature({ icon: Icon, title, description }: DomainFeatureProps) {
  return (
    <div className="flex items-start space-x-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all text-left">
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}