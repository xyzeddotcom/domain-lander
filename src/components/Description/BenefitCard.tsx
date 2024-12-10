import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
}

export function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}