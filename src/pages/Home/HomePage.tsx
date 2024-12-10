import React from 'react';
import { Hero2 } from '../../components/Demo2/Hero2';
import { MarketplaceSection } from '../../components/Demo2/MarketplaceSection';
import { SEO } from '../../components/SEO/SEO';

export function HomePage() {
  return (
    <>
      <SEO
        title="Premium Domain Marketplace"
        description="Transform your digital presence with our premium domain names. Perfect for innovative startups and forward-thinking businesses looking to establish a strong online identity."
        keywords="premium domains, domain marketplace, business domains, startup domains, digital branding"
        path="/"
      />
      <Hero2 />
      <MarketplaceSection />
    </>
  );
}