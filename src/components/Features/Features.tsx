import React from 'react';
import { Shield, Globe, Zap, Award } from 'lucide-react';
import { Section } from '../Layout/Section';
import { Grid } from '../Layout/Grid';

export function Features() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Establish your presence worldwide with a domain name that resonates across borders.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Transfer',
      description: 'Experience worry-free domain transfer with our secure escrow service.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Setup',
      description: 'Get your domain up and running immediately after purchase.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'A memorable, brandable domain name that stands out from the crowd.'
    }
  ];

  return (
    <Section id="features" className="bg-white dark:bg-gray-900 py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose This Domain?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Invest in a premium domain name that will set your brand apart and make a lasting impression.
        </p>
      </div>
      <Grid cols={{ xs: 1, sm: 2, lg: 4 }} gap={6}>
        {features.map((feature, index) => (
          <div 
            key={index}
            className="hover-scale p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all"
          >
            <div className="text-blue-500 dark:text-blue-400 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </Grid>
    </Section>
  );
}