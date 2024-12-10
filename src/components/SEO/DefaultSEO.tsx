import React from 'react';
import { Helmet } from 'react-helmet-async';

export function DefaultSEO() {
  const siteUrl = window.location.origin;
  const siteName = 'Domain Lander';
  const defaultDescription = 'Premium domain marketplace for innovative startups and forward-thinking businesses. Find your perfect domain name today.';
  const socialImage = 'https://i.imgur.com/GU4MwWt.jpg';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteName} - Premium Domain Marketplace</title>
      <meta name="title" content={`${siteName} - Premium Domain Marketplace`} />
      <meta name="description" content={defaultDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={`${siteName} - Premium Domain Marketplace`} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={`${siteName} - Premium Domain Marketplace`} />
      <meta property="twitter:description" content={defaultDescription} />
      <meta property="twitter:image" content={socialImage} />
      <meta property="twitter:creator" content="@domainlander" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="keywords" content="premium domains, domain marketplace, business domains, startup domains, domain names, digital branding, domain investment" />
      
      {/* Language and Locale */}
      <meta property="og:locale" content="en_US" />
      <link rel="canonical" href={siteUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteName,
          "url": siteUrl,
          "description": defaultDescription,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
              "@type": "ImageObject",
              "url": socialImage
            }
          }
        })}
      </script>
    </Helmet>
  );
}