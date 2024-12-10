import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOConfig } from './SEOConfig';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: 'website' | 'article';
  image?: string;
  keywords?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description = SEOConfig.defaultDescription,
  path = '',
  type = 'website',
  image = SEOConfig.defaultImage,
  keywords = SEOConfig.defaultKeywords,
  datePublished,
  dateModified,
  author,
  noindex = false
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SEOConfig.siteName}` : `${SEOConfig.siteName} - ${SEOConfig.defaultTitle}`;
  const fullUrl = `${SEOConfig.siteUrl}${path}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={SEOConfig.imageWidth} />
      <meta property="og:image:height" content={SEOConfig.imageHeight} />
      <meta property="og:site_name" content={SEOConfig.siteName} />
      <meta property="og:locale" content={SEOConfig.locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={SEOConfig.twitterHandle} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content={SEOConfig.themeColor} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && datePublished && (
        <>
          <meta property="article:published_time" content={datePublished} />
          {dateModified && <meta property="article:modified_time" content={dateModified} />}
          {author && <meta property="article:author" content={author} />}
        </>
      )}
      
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
          "image": image,
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
            "name": SEOConfig.siteName,
            "logo": {
              "@type": "ImageObject",
              "url": SEOConfig.defaultImage
            }
          }
        })}
      </script>
    </Helmet>
  );
}