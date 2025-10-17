import type { Metadata } from 'next'
import './globals.css'
import IndexNowManager from '@/components/IndexNowManager'

export const metadata: Metadata = {
  title: 'VATALIQUE - Google Review Service & Online Reputation Management',
  description: 'Professional Google reviews management service with proven SEO strategies, social media campaigns, and email marketing to drive traffic and boost sales.',
  keywords: 'Google review service, Google reviews management, online reputation management, SEO strategies, drive traffic, social media campaigns, email marketing, digital marketing',
  openGraph: {
    title: 'VATALIQUE - Google Review Service & Online Reputation Management',
    description: 'Professional Google reviews management service with proven SEO strategies, social media campaigns, and email marketing to drive traffic and boost sales.',
    url: 'https://vatalique.com',
    siteName: 'VATALIQUE',
    images: [
      {
        url: 'https://vatalique.com/images/VATALIQUE.png',
        width: 1200,
        height: 630,
        alt: 'VATALIQUE - Google Review Service & Online Reputation Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VATALIQUE - Google Review Service & Online Reputation Management',
    description: 'Professional Google reviews management service with proven SEO strategies, social media campaigns, and email marketing to drive traffic and boost sales.',
    images: ['https://vatalique.com/images/VATALIQUE.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.BING_SITE_VERIFICATION || '',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* IndexNow API Key File - Required for search engine indexing */}
        <link rel="indexnow" href="/54208d9a98894f6db0abb8b145953254.txt" />
        
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VATALIQUE" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vatalique.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/images/VATALIQUE.png" />
        <link rel="apple-touch-icon" href="/images/VATALIQUE.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VATALIQUE",
              "url": "https://vatalique.com",
              "logo": "https://vatalique.com/images/VATALIQUE.png",
              "description": "Professional Google reviews management service with proven SEO strategies, social media campaigns, and email marketing to drive traffic and boost sales",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9569253552",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://vatalique.com"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
        
        {/* IndexNow Manager - Automatic URL submission for SEO */}
        <IndexNowManager 
          autoSubmit={true}
          submitOnMount={true}
          showStatus={process.env.NODE_ENV === 'development'}
        />
      </body>
    </html>
  )
}
