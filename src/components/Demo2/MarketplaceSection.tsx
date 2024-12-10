import React from 'react';
import { ExternalLink } from 'lucide-react';

interface MarketplaceButton {
  name: string;
  url: string;
}

const marketplaces: MarketplaceButton[] = [
  {
    name: 'Sedo Marketplace',
    url: 'https://sedo.com'
  },
  {
    name: 'Afternic Marketplace',
    url: 'https://afternic.com'
  },
  {
    name: 'Dynadot Marketplace',
    url: 'https://dynadot.com'
  }
];

export function MarketplaceSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-blue-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white text-center mb-12">
        This domain can be acquired through the following domain marketplaces:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketplaces.map((marketplace, index) => (
            <a
              key={index}
              href={marketplace.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center px-8 py-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <span className="text-white font-medium mr-2">{marketplace.name}</span>
              <ExternalLink className="w-4 h-4 text-blue-400 transform group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}