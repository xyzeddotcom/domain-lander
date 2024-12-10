import React from 'react';
import { Check } from 'lucide-react';

interface FeatureCardProps {
  feature: string;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <li className="flex items-center text-gray-600 dark:text-gray-400">
      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
      <span>{feature}</span>
    </li>
  );
}