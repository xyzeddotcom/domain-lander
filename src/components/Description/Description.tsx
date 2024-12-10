import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../Layout/Section';
import { FeatureCard } from './FeatureCard';
import { BenefitCard } from './BenefitCard';

const features = [
  'Memorable and brandable domain name',
  'Perfect for startups and businesses',
  'Instant transfer after purchase',
  'Secure escrow service included',
  'Premium DNS configuration',
  'Full ownership rights'
];

const benefits = [
  {
    title: 'Brand Recognition',
    description: 'A strong domain name enhances brand recognition and credibility in your industry.'
  },
  {
    title: 'SEO Advantage',
    description: 'Premium domains often have existing SEO value, giving you a head start in search rankings.'
  },
  {
    title: 'Marketing Impact',
    description: 'Short, memorable domains make marketing campaigns more effective and memorable.'
  },
  {
    title: 'Investment Value',
    description: 'Premium domains appreciate over time, making them valuable digital assets.'
  }
];

export function Description() {
  return (
    <Section id="description" className="bg-gray-50 dark:bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              About This Domain
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                This premium domain name offers a unique opportunity to establish a strong online presence.
                Perfect for businesses, startups, or personal projects, it combines memorability with
                professionalism.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                Investing in a premium domain name is crucial for building a successful online brand.
                This domain provides instant credibility and recognition, setting you apart from the
                competition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            Learn more about domain value
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg h-fit">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-16">
            Domain Features
          </h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}