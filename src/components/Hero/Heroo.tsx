import React from 'react';
import { DollarSign, MessageSquare, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="mountain-border" />
      
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 premium-badge">
          <ShieldCheck className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-white">Premium Domain Available</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
         Add Your Domain.com
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Secure this memorable domain name for your next big project. 
          Perfect for startups, businesses, or premium brands.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all transform hover:scale-105 neon-button-primary"
          >
            <DollarSign className="w-5 h-5 mr-2" />
            Buy Now - $25,000
          </button>
          <a
            href="mailto:offers@domain.com?subject=Make%20an%20Offer"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white/25 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/30 transition-all transform hover:scale-105 neon-button-secondary"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Make an Offer
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a
            href="https://sedo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-4 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-all shadow-md"
          >
            <span className="text-white">Sedo</span>
          </a>
          <a
            href="https://afternic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-4 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-all shadow-md"
          >
            <span className="text-white">Afternic</span>
          </a>
          <a
            href="https://dynadot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-4 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-all shadow-md"
          >
            <span className="text-white">DynaDot</span>
          </a>
        </div>
      </div>
    </section>
  );
}