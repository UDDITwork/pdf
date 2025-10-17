/**
 * SEO Optimizer Component for VATALIQUE
 * Enhances SEO with IndexNow integration and structured data
 */

'use client';

import { useEffect } from 'react';
import { useIndexNow } from '@/hooks/useIndexNow';

interface SEOOptimizerProps {
  pageTitle?: string;
  pageDescription?: string;
  canonicalUrl?: string;
  structuredData?: any;
  keywords?: string[];
}

export default function SEOOptimizer({
  pageTitle,
  pageDescription,
  canonicalUrl,
  structuredData,
  keywords = []
}: SEOOptimizerProps) {
  const { isConfigured, submitCurrentPage } = useIndexNow();

  useEffect(() => {
    // Update page title if provided
    if (pageTitle) {
      document.title = pageTitle;
    }

    // Update meta description
    if (pageDescription) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', pageDescription);
    }

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Add keywords
    if (keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Add structured data
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    // Submit to IndexNow if configured
    if (isConfigured) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        submitCurrentPage();
      }, 1000);
    }
  }, [pageTitle, pageDescription, canonicalUrl, structuredData, keywords, isConfigured, submitCurrentPage]);

  return null; // This component doesn't render anything
}
