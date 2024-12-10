import React from 'react';
import { Hero2 } from '../../components/Demo2/Hero2';
import { MarketplaceSection } from '../../components/Demo2/MarketplaceSection';
import { MetaTags } from '../../components/SEO/MetaTags';

export function Demo2Page() {
  return (
    <>
      <MetaTags
        title="Premium Domain Name | Transform Your Digital Presence"
        description="Secure this premium, brandable domain name perfect for innovative startups and forward-thinking businesses. Establish your brand with confidence."
        keywords="premium domain, domain name, digital branding, business domain, startup domain"
        type="website"
      />
      <Hero2 />
      <MarketplaceSection />
    </>
  );
}