import React, { useState } from 'react';
import { Globe, Shield, Zap, Award, ArrowRight, DollarSign, ShieldCheck } from 'lucide-react';
import { DomainFeature } from './DomainFeature';
import { LightSwitch } from './LightSwitch';

const DOMAIN_NAME = 'yourdomain.com';

const features = [
  {
    icon: Globe,
    title: 'Global Recognition',
    description: 'Instantly recognizable domain name that works worldwide'
  },
  {
    icon: Shield,
    title: 'Brand Protection',
    description: 'Secure your brand identity with this premium domain'
  },
  {
    icon: Zap,
    title: 'Instant Impact',
    description: 'Make a lasting impression from the very first visit'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Short, memorable, and brandable domain name'
  }
];

export function Hero2() {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div className="relative min-h-[85vh] flex items-center neon-border overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient opacity-90" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="fixed top-20 left-4 z-50">
        <LightSwitch isOn={isLightOn} onToggle={() => setIsLightOn(!isLightOn)} />
      </div>
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center justify-items-center">
            {/* Left Column - Content */}
            <div className="relative space-y-6 lg:col-span-7 max-w-xl lg:max-w-none w-full text-center lg:text-left floodlight-effect">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mx-auto lg:mx-0">
                <ShieldCheck className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">Premium Domain Available</span>
              </div>
              
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-300 ${isLightOn ? 'illuminate' : ''}`}>
                Transform Your <br className="hidden sm:block" />
                Digital Presence
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Secure this premium domain name and establish your brand with 
                confidence. Perfect for innovative startups and forward-thinking 
                businesses.
              </p>
              
              <div className="flex flex-col w-full sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={`mailto:sales@${DOMAIN_NAME}?subject=Interested%20in%20Purchasing%20${DOMAIN_NAME}`}
                  className="w-full sm:w-auto button-float neon-button neon-button-blue inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-semibold group"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Buy Now
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href={`mailto:sales@${DOMAIN_NAME}?subject=Make%20an%20Offer%20for%20${DOMAIN_NAME}`}
                  className="w-full sm:w-auto button-float neon-button neon-button-ghost inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-semibold"
                >
                  Make an Offer
                </a>
              </div>

              <div className="mt-8 text-sm text-gray-400 max-w-2xl mx-auto lg:mx-0">
                <p>
                  All domain purchases include complimentary transfer assistance and a secure escrow service. 
                  Our team ensures a smooth transition of ownership, protecting both parties throughout the 
                  transaction process. Contact us for custom payment plans or to discuss your specific requirements.
                </p>
              </div>

              <div className="mt-12 text-gray-300 text-sm max-w-2xl mx-auto lg:mx-0">
                <p>
                  Discover an exceptional premium domain name that elevates your brand's digital presence. 
                  This memorable, brandable domain is perfect for technology companies, innovative startups, 
                  and established businesses looking to strengthen their online identity. With its concise length, 
                  natural keyword optimization, and high commercial value, this domain provides an immediate 
                  competitive advantage in today's digital marketplace.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">Premium Domain</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">Brand Development</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">Digital Identity</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">Global Reach</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Features */}
            <div className="grid gap-6 lg:col-span-5 w-full max-w-xl mx-auto">
              {features.map((feature, index) => (
                <DomainFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}