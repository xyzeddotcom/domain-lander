import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  imageUrl?: string;
  keywords?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export function PageSEO({
  title,
  description,
  path = '',
  type = 'website',
  imageUrl = 'https://i.imgur.com/GU4MwWt.jpg',
  keywords,
  datePublished,
  dateModified,
  author
}: PageSEOProps) {
  const siteUrl = window.location.origin;
  const siteName = 'Domain Lander';
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="title" content={`${title} | ${siteName}`} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={`${title} | ${siteName}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && datePublished && (
        <>
          <meta property="article:published_time" content={datePublished} />
          {dateModified && <meta property="article:modified_time" content={dateModified} />}
          {author && <meta property="article:author" content={author} />}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'WebPage',
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": fullUrl
          },
          "headline": title,
          "description": description,
          "image": imageUrl,
          ...(type === 'article' && datePublished && {
            "datePublished": datePublished,
            "dateModified": dateModified || datePublished,
            "author": {
              "@type": "Person",
              "name": author || "Domain Lander Team"
            }
          }),
          "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
              "@type": "ImageObject",
              "url": imageUrl
            }
          }
        })}
      </script>
    </Helmet>
  );
}