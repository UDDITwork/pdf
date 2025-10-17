'use client';

import { Star, TrendingUp, Shield, Users, Award, MessageSquare, Search, BarChart, Mail, QrCode, Smartphone, CheckCircle, ArrowRight, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';

export default function ServicesPage() {
  // Add meta tags and structured data for SEO
  useEffect(() => {
    // Update page title
    document.title = 'Google Review Service & Reviews Management | SEO Strategies to Drive Traffic | VATALIQUE';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional Google review service and reviews management with proven SEO strategies, social media campaigns, and email marketing to drive traffic and boost sales. Master digital marketing with expert online reputation management.');
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Google review service, Google reviews management, online reputation management, SEO strategies, drive traffic, social media campaigns, email marketing, digital marketing, master digital marketing, drive sales');
    
    // Add Open Graph meta tags for social media
    const ogTags = [
      { property: 'og:title', content: 'Google Review Service & Reviews Management | Drive Traffic with SEO' },
      { property: 'og:description', content: 'Master digital marketing with our Google reviews management, SEO strategies, social media campaigns, and email marketing that drive traffic and boost sales.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://vatalique.com/services' },
      { property: 'og:image', content: 'https://vatalique.com/images/VATALIQUE.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Google Review Service & Reviews Management | Drive Traffic with SEO' },
      { name: 'twitter:description', content: 'Master digital marketing with proven SEO strategies, social media campaigns, and email marketing.' }
    ];
    
    ogTags.forEach(tag => {
      const attr = tag.property ? 'property' : 'name';
      const attrValue = tag.property || tag.name || '';
      if (!attrValue) return;
      
      let metaTag = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attr, attrValue);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
    
    // Add JSON-LD structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "VATALIQUE - Google Review Service & Online Reputation Management",
      "description": "Professional Google reviews management service with SEO strategies, social media campaigns, and email marketing to drive traffic and sales",
      "url": "https://vatalique.com/services",
      "logo": "https://vatalique.com/images/VATALIQUE.png",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "127"
      },
      "priceRange": "$$",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": ["Google Review Service", "Google Reviews Management", "Online Reputation Management", "SEO Services", "Social Media Marketing", "Email Marketing", "Digital Marketing"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Reviews Management",
              "description": "Professional Google review service with SEO strategies to drive traffic and boost rankings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Strategies That Drive Traffic",
              "description": "Comprehensive SEO strategies integrated with digital marketing to drive qualified traffic and sales"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Campaign Management",
              "description": "Strategic social media campaigns that drive traffic and engagement across all platforms"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Email Marketing Services",
              "description": "Email marketing campaigns integrated with Google reviews management to drive conversions"
            }
          }
        ]
      }
    };
    
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, []);
  const benefits = [
    {
      icon: Users,
      title: 'Drive Traffic With Strategic SEO & Google Reviews',
      description: 'Our Google review service uses SEO strategies to drive traffic and appeal to high-intent prospects. 97% of consumers rely on reviews for purchasing decisions. Our online reputation management amplifies positive Google reviews through targeted digital marketing, social media campaigns, and email marketing to drive qualified traffic to your business.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Google Reviews Management for Higher Rankings',
      description: '92% of users don\'t trust brands without online reviews. Our comprehensive Google reviews management service builds data-driven review generation strategies combined with SEO tactics that drive traffic, improve search rankings, and master digital marketing to ensure steady flow of verified reviews that boost sales.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing That Drives Sales & Conversions',
      description: 'Mastering digital marketing through our integrated approach—combining Google review service, SEO strategies, social media campaigns, and email marketing—drives traffic 6-7x more cost-effectively. Our online reputation management showcases commitment to customers while executing campaigns that drive sales.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Social Media Campaigns for Brand Authority',
      description: '69% of applicants reject companies with negative online reputation. Our social media campaigns and comprehensive digital marketing strategies build strong employer brands. Combined with Google reviews management and SEO, we drive traffic from top talent while managing your online reputation.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart,
      title: 'Email Marketing & SEO That Drive Revenue',
      description: 'Google reviews increase conversions by 270%! Our email marketing services combined with SEO strategies and Google reviews management create powerful campaigns that drive traffic and sales. Master digital marketing techniques proven to boost conversion rates by up to 380% through online reputation management.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'SEO Strategies That Drive Organic Traffic',
      description: 'Online reviews drive 15% of Google Local Pack rankings. Our Google review service with advanced SEO strategies drives traffic through user-generated content. Master digital marketing by combining Google reviews management, social media campaigns, and email marketing for maximum organic traffic and conversions.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const services = [
    {
      icon: Shield,
      title: 'Google Reviews Management Software',
      description: 'Advanced Google review service software with integrated digital marketing tools. Our platform combines Google reviews management with SEO strategies, social media campaigns, and email marketing to drive traffic at scale. Master digital marketing with our comprehensive online reputation management system that drives real sales.'
    },
    {
      icon: Shield,
      title: 'Online Reputation Repair & SEO Recovery',
      description: 'Expert Google reviews management repairs negative online reputation through proven SEO strategies that drive traffic back to positive content. Our digital marketing specialists implement targeted social media campaigns and email marketing to rebuild trust while mastering online reputation management techniques.'
    },
    {
      icon: Award,
      title: 'White Label Digital Marketing Solutions',
      description: 'VATALIQUE offers white label Google review service and online reputation management with complete digital marketing integration. Our SEO strategies, social media campaigns, and email marketing services drive traffic for your clients while you master digital marketing under your brand.'
    },
    {
      icon: MessageSquare,
      title: 'Google Review Response Service',
      description: 'Professional Google reviews management with strategic responses that drive traffic and boost SEO. Our online reputation management experts craft replies optimized for search engines. Companies using our Google review service earn 35% more revenue through better digital marketing and customer engagement.'
    },
    {
      icon: Search,
      title: 'Review Monitoring with SEO Analytics',
      description: 'Real-time Google reviews management monitoring integrated with SEO strategies to drive traffic. Our online reputation management software tracks 100+ platforms, executes social media campaigns, and triggers email marketing based on review alerts to master digital marketing performance.'
    },
    {
      icon: Star,
      title: 'Google Review Generation & Traffic Growth',
      description: 'Strategic Google review service that drives traffic and revenue. Our proven online reputation management system generates verified reviews while implementing SEO strategies, social media campaigns, and email marketing to master digital marketing and increase revenue by up to 9% per review.'
    },
    {
      icon: TrendingUp,
      title: 'SEO Strategies That Drive Traffic & Sales',
      description: 'Comprehensive SEO strategies integrated with Google reviews management to drive traffic and dominate search rankings. Our online reputation management combines technical SEO, content marketing, and digital marketing tactics. Master SEO strategies through social media campaigns and email marketing that convert.'
    },
    {
      icon: BarChart,
      title: 'Social Media Campaign Management',
      description: 'Strategic social media campaigns that drive traffic and amplify your Google review service. Our online reputation management integrates social platforms with SEO strategies and email marketing to master digital marketing. Data-driven campaigns that drive real traffic, engagement, and sales growth.'
    },
    {
      icon: Globe,
      title: 'eCommerce Google Reviews Management',
      description: 'Specialized Google review service for eCommerce businesses with SEO strategies to drive traffic across Amazon, Walmart, and more. Our online reputation management combines product reviews with social media campaigns and email marketing to master digital marketing and boost conversion rates.'
    },
    {
      icon: CheckCircle,
      title: 'Local SEO & Business Listings',
      description: 'Google reviews management integrated with local SEO strategies that drive traffic from nearby customers. Our online reputation management optimizes citations while executing targeted social media campaigns and email marketing to master digital marketing in your local market and increase foot traffic.'
    },
    {
      icon: Mail,
      title: 'Email Marketing Services That Convert',
      description: 'Strategic email marketing campaigns integrated with Google review service and online reputation management. Our SEO-optimized templates drive traffic through automated sequences. Master digital marketing by combining email campaigns with social media strategies and Google reviews management to boost sales.'
    },
    {
      icon: QrCode,
      title: 'QR Code Review Generation',
      description: 'Innovative Google review service using QR codes with integrated digital marketing tracking. Our online reputation management creates custom QR codes that drive traffic to review sites while triggering email marketing and social media campaigns to master digital marketing conversion funnels.'
    },
    {
      icon: Smartphone,
      title: 'SMS Marketing & Review Campaigns',
      description: 'Two-way SMS marketing integrated with Google reviews management to drive traffic and engagement. Our online reputation management combines text campaigns with SEO strategies, social media, and email marketing to master digital marketing across all channels and maximize review generation.'
    }
  ];

  const caseStudies = [
    {
      type: 'RENEWABLE ENERGY COMPANY',
      stat1: '+592',
      label1: 'New Positive Reviews in 5 Months',
      stat2: '55x',
      label2: 'More Positive Reviews Added in 6 Months',
      color: 'from-green-500 to-emerald-500'
    },
    {
      type: 'PLUMBING COMPANY',
      stat1: '+357',
      label1: 'New Positive Reviews in 13 Months',
      stat2: '23x',
      label2: 'More Positive Reviews Added in 1 Year',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'MULTI-LOCATION RESTAURANT',
      stat1: '+15,901',
      label1: 'New Positive Reviews in 5 Months',
      stat2: '+20%',
      label2: 'Total Online Reviews Added in 5 Months',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '82%', label: 'of consumers won\'t transact with retailers under 3 stars' },
    { number: '97%', label: 'of consumers read online reviews before purchasing' },
    { number: '92%', label: 'of users don\'t trust brands without reviews' },
    { number: '86%', label: 'of prospects lost with 1-2 star ratings' }
  ];

  const testimonials = [
    {
      name: 'Rishav',
      location: 'Begusarai, Bihar',
      phone: '8936013767',
      quote: 'VATALIQUE transformed our online presence completely. Within just 3 months, we saw a 300% increase in positive reviews and our Google rating improved from 3.2 to 4.8 stars. The team\'s expertise in reputation management is unmatched.',
      rating: 5
    },
    {
      name: 'Kartikey Sharma',
      location: 'Jaipur, India (K Square Classes Coaching Services)',
      phone: '6367128700',
      quote: 'As a coaching institute, our reputation is everything. VATALIQUE helped us build trust with parents and students by managing our online reviews professionally. Our enrollment increased by 150% after implementing their reputation management strategy.',
      rating: 5
    },
    {
      name: 'Mehul Sharma',
      location: 'Jodhpur, India (Bus Services)',
      phone: '7877387228',
      quote: 'Running a bus service company, customer trust is crucial for our business. VATALIQUE\'s reputation management services helped us address negative feedback effectively and showcase our positive customer experiences. Our booking rates have doubled.',
      rating: 5
    },
    {
      name: 'Ankit Kumar',
      location: 'Delhi, India',
      phone: '7456886877',
      quote: 'The team at VATALIQUE is exceptional. They not only helped us recover from a reputation crisis but also built a robust system to maintain positive reviews. Our customer satisfaction scores have never been higher.',
      rating: 5
    },
    {
      name: 'Priya Singh',
      location: 'Mumbai, India',
      phone: '8368824707',
      quote: 'VATALIQUE\'s white-label reputation management solution has been a game-changer for our agency. We can now offer comprehensive reputation services to our clients with professional reporting and excellent results.',
      rating: 5
    }
  ];

  const whyChoose = [
    {
      icon: Star,
      title: 'Custom Google Review Service & SEO Plans',
      description: 'Tailored Google reviews management with integrated digital marketing strategies. Our SEO-driven approach combines social media campaigns and email marketing to drive traffic specific to your industry. Master digital marketing with custom online reputation management strategies that deliver measurable results.'
    },
    {
      icon: BarChart,
      title: 'Real-Time Digital Marketing Analytics',
      description: 'Comprehensive reporting for Google review service, SEO performance, social media campaigns, and email marketing. Track how our online reputation management drives traffic and sales. Master digital marketing insights with dashboards showing ROI from every channel and campaign.'
    },
    {
      icon: Users,
      title: 'Dedicated Digital Marketing Team',
      description: 'Expert team handling Google reviews management, SEO strategies, social media campaigns, and email marketing to drive traffic 24/7. Your dedicated online reputation management specialist helps you master digital marketing with personalized support and strategic guidance.'
    },
    {
      icon: Shield,
      title: 'Advanced SEO & Marketing Tools',
      description: 'Industry-leading Google review service platform integrated with SEO tools that drive traffic. Our online reputation management software combines social media campaign management and email marketing automation to help you master digital marketing with cutting-edge technology.'
    },
    {
      icon: Globe,
      title: 'Multi-Industry Digital Marketing Expertise',
      description: 'Proven Google reviews management and SEO strategies that drive traffic across all industries. Our online reputation management team masters digital marketing for healthcare, retail, restaurants, professional services with specialized social media campaigns and email marketing.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Strategies That Drive Results',
      description: 'Strategic Google review service backed by analytics. Our online reputation management uses SEO data, social media insights, and email marketing metrics to drive traffic and conversions. Master digital marketing through proven strategies that consistently deliver growth and ROI.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-ada-pink/10 backdrop-blur-md rounded-full border border-ada-pink/20">
            <span className="text-ada-pink font-semibold">GOOGLE REVIEWS MANAGEMENT & ONLINE REPUTATION MANAGEMENT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Google Review Service & Online Reputation Management to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-600">
              Drive Traffic and Boost Sales
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Professional Google reviews management service with proven SEO strategies, social media campaigns, and email marketing to drive traffic, increase conversions, and establish your brand as a market leader through expert online reputation management.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ada-pink text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all duration-200 font-semibold text-lg"
            >
              Get My Free Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
            <div className="text-center sm:text-left">
              <p className="text-gray-600 text-sm">Or call us directly:</p>
              <a href="tel:9569253552" className="text-2xl font-bold text-ada-pink hover:text-pink-600 transition-colors">
                9569253552
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platform Control Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ada-pink/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-ada-pink to-purple-600 rounded-full text-white font-bold text-lg animate-pulse">
              🚀 AI REPUTATION CONTROL
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Control <span className="text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-600">CHATGPT</span> to Force It to Say About You the Way You Want!
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Build powerful AI reputation control across ChatGPT, Google, Gemini, Perplexity, Bing, Reddit, Quora, Twitter and all major platforms. VATALIQUE helps you control the narrative and perspective of your company across every AI platform.
            </p>
          </div>

          {/* Platform Logos with Animations */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Control Your Narrative Across All Platforms</h3>
            
            {/* Puppet Hands Control Image */}
            <div className="relative mb-12 flex justify-center">
              <div className="relative z-10 animate-fade-in">
                <img 
                  src="/images/puppethands.png" 
                  alt="Controlling AI platforms and social media with puppet hands - VATALIQUE reputation management"
                  className="puppet-hands w-full max-w-2xl h-auto object-contain filter drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500 hover:scale-105 animate-puppet-control"
                  style={{
                    mixBlendMode: 'multiply',
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
              
              {/* Floating particles effect around hands */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ada-pink rounded-full animate-float opacity-60"></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-float opacity-40" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-float opacity-50" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-green-500 rounded-full animate-float opacity-45" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-500 rounded-full animate-float opacity-35" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-1/2 right-1/2 w-1.5 h-1.5 bg-red-500 rounded-full animate-float opacity-40" style={{animationDelay: '2.5s'}}></div>
              </div>
              
              {/* Connection lines effect (visual representation of control) */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg className="w-full h-full" viewBox="0 0 800 400">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 400 200 Q 300 150 200 250 Q 100 350 150 400" 
                    stroke="url(#connectionGradient)" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  <path 
                    d="M 400 200 Q 500 150 600 250 Q 700 350 650 400" 
                    stroke="url(#connectionGradient)" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                    style={{animationDelay: '0.5s'}}
                  />
                </svg>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-12 mb-8">
                {/* ChatGPT */}
                <div className="platform-logo hover:scale-110 transition-all duration-300">
                  <div className="w-48 h-48 flex items-center justify-center relative">
                    <img 
                      src="/images/ChatGpt-logo.png" 
                      alt="ChatGPT Logo" 
                      className="w-full h-full object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Google */}
                <div className="platform-logo hover:scale-110 transition-all duration-300">
                  <div className="w-48 h-48 flex items-center justify-center relative">
                    <img 
                      src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" 
                      alt="Google Logo" 
                      className="w-full h-full object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-12 mb-8">
                {/* Gemini */}
                <div className="platform-logo hover:scale-110 transition-all duration-300">
                  <div className="w-48 h-48 flex items-center justify-center relative">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Google_Gemini_logo_2025.svg/2560px-Google_Gemini_logo_2025.svg.png" 
                      alt="Google Gemini Logo" 
                      className="w-full h-full object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Perplexity */}
                <div className="platform-logo hover:scale-110 transition-all duration-300">
                  <div className="w-48 h-48 flex items-center justify-center relative">
                    <img 
                      src="https://journalists.org/wp-content/uploads/2024/08/Perplexity-Primary-Logo.png" 
                      alt="Perplexity Logo" 
                      className="w-full h-full object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-12 mb-8">
                {/* Bing */}
                <div className="platform-logo hover:scale-110 transition-all duration-300">
                  <div className="w-48 h-48 flex items-center justify-center relative">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
                      <span className="text-white font-bold text-5xl">B</span>
                    </div>
                  </div>
                </div>

                {/* Reddit */}
                <div className="platform-logo hover:scale-110 transition-all duration-300">
                  <div className="w-48 h-48 flex items-center justify-center relative">
                    <img 
                      src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/8612/Reddit_Lockup_3x-19c80010-89b1-4474-b437-a33e29130a9f.png" 
                      alt="Reddit Logo" 
                      className="w-full h-full object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-2 gap-12">
                {/* Quora */}
                <div className="platform-logo hover:scale-110 transition-all duration-300">
                  <div className="w-48 h-48 flex items-center justify-center relative">
                    <img 
                      src="https://download.logo.wine/logo/Quora/Quora-Logo.wine.png" 
                      alt="Quora Logo" 
                      className="w-full h-full object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Twitter/X */}
                <div className="platform-logo hover:scale-110 transition-all duration-300">
                  <div className="w-48 h-48 flex items-center justify-center relative">
                    <img 
                      src="https://img.favpng.com/2/8/0/x-logo-TKRm4vpp.jpg" 
                      alt="Twitter/X Logo" 
                      className="w-full h-full object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Charts Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* AI Platform Control Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Platform Control</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">ChatGPT Influence</span>
                  <span className="text-sm font-bold text-ada-pink">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-ada-pink to-purple-600 h-3 rounded-full animate-loading-bar" style={{width: '95%', animationDelay: '0.5s'}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Google Search</span>
                  <span className="text-sm font-bold text-green-600">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full animate-loading-bar" style={{width: '88%', animationDelay: '1s'}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Social Media</span>
                  <span className="text-sm font-bold text-blue-600">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-3 rounded-full animate-loading-bar" style={{width: '92%', animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>

            {/* Reputation Impact Pie Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reputation Impact</h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none"/>
                  <circle cx="50" cy="50" r="40" stroke="url(#gradient1)" strokeWidth="8" fill="none" 
                    strokeDasharray="251.2" strokeDashoffset="50.24" className="animate-pie-chart"/>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899"/>
                      <stop offset="100%" stopColor="#8b5cf6"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-ada-pink">80%</span>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600">Positive Mentions</p>
            </div>

            {/* Growth Metrics */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Metrics</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ada-pink animate-count-up">+340%</div>
                  <div className="text-sm text-gray-600">AI Search Visibility</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 animate-count-up" style={{animationDelay: '0.5s'}}>+280%</div>
                  <div className="text-sm text-gray-600">Brand Mentions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 animate-count-up" style={{animationDelay: '1s'}}>+195%</div>
                  <div className="text-sm text-gray-600">Positive Sentiment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-ada-pink to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Control Your AI Reputation?</h3>
            <p className="text-xl mb-6 opacity-90">Let VATALIQUE help you dominate ChatGPT, Google, and all AI platforms with strategic reputation management.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold text-lg hover:scale-105 transform"
            >
              Start Controlling AI Narratives Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Google Reviews Management & SEO Drive Traffic and Sales</h2>
            <p className="text-xl text-gray-700">Online reputation management with strategic digital marketing directly impacts your bottom line</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:border-ada-pink hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-bold text-ada-pink mb-4">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Reputation Management */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Is Google Reviews Management & Online Reputation Management?</h2>
            <p className="text-xl text-gray-700">Digital Marketing Services That Drive Traffic Through SEO, Social Media & Email Campaigns</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Our Google review service combines strategic online reputation management with proven digital marketing techniques to drive traffic and boost sales. By mastering SEO strategies, executing targeted social media campaigns, and implementing effective email marketing, we help your business dominate search rankings and convert more customers.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Online reputation management integrates Google reviews management with comprehensive digital marketing to control your online presence. Our SEO-driven approach ensures search engines and customers find positive content about your brand, while our social media campaigns and email marketing strategies actively drive traffic to your website and convert visitors into loyal customers.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {['Google review service', 'Google reviews management', 'SEO strategies to drive traffic', 'Social media campaigns', 'Email marketing services', 'Online reputation management', 'Digital marketing for sales', 'Traffic-driving SEO tactics'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-ada-pink flex-shrink-0" />
                    <span className="text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Keyword Research Dashboard */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Reputation Management Keyword Performance</h3>
                <p className="text-gray-600">Real-time keyword insights showing the growing demand for reputation management services</p>
              </div>
              
              <img 
                src="/images/keywords.png" 
                alt="Reputation Management Keyword Research Dashboard - 2K impressions with global breakdown showing United States, United Kingdom, India, and Canada leading search volumes"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                  <div className="text-2xl font-bold">2K+</div>
                  <div className="text-sm opacity-90">Monthly Impressions</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                  <div className="text-2xl font-bold">4+</div>
                  <div className="text-sm opacity-90">Top Countries</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <span className="font-semibold text-ada-pink">High Search Volume:</span> The "reputation management" keyword shows consistent 2K+ monthly impressions globally, with the United States leading at 809 impressions, followed by the UK (234), Canada (189), and India (78).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Google Reviews Management Drives Traffic and Boosts Sales</h2>
            <p className="text-xl text-gray-700">Master Digital Marketing With SEO, Social Media Campaigns & Email Marketing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-ada-pink hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consequences of Poor Reputation */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Google Reviews Management & Digital Marketing Are Crucial</h2>
            <p className="text-xl text-gray-700 mb-8">Without proper SEO strategies, social media campaigns, and email marketing to drive traffic, businesses lose customers daily</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 shadow-lg">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Without professional Google review service and online reputation management, negative reviews destroy your digital marketing efforts. Poor Google reviews management means failed SEO strategies that can't drive traffic, ineffective social media campaigns, and email marketing that converts poorly. Master digital marketing with our comprehensive approach to prevent reputation disasters.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Ignoring Google reviews management and failing to implement SEO strategies to drive traffic leads to:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Low search engine rankings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Loss of revenue</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Decreased profitability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Damaged brand reputation</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Diminished trust</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Increased marketing expenses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Low customer engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Reduced customer and employee retention rate</span>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">
              Your business needs professional Google reviews management and strategic online reputation management. Contact VATALIQUE today to master digital marketing with our proven SEO strategies, social media campaigns, and email marketing services that drive traffic, boost sales, and transform your online presence with expert Google review service.
            </p>
          </div>
        </div>
      </section>

      {/* What Does Your Online Reputation Look Like */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Google Review Service & SEO Strategies That Drive Traffic
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Master Digital Marketing With Proven Online Reputation Management Techniques
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many businesses fail at digital marketing because they don't integrate Google reviews management with comprehensive SEO strategies. Effective online reputation management requires mastering digital marketing—combining Google review service with social media campaigns and email marketing to consistently drive traffic and sales.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Without proper Google reviews management and strategic online reputation management, customer churn increases by 15%. Our digital marketing services—including targeted social media campaigns, email marketing, and SEO strategies—actively drive traffic while engaging customers. Master digital marketing by responding to reviews and executing campaigns that drive real sales.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Is your Google review service driving traffic? Are your SEO strategies and social media campaigns generating sales? Our online reputation management combines proven digital marketing techniques and email marketing to drive qualified traffic that converts.
              </p>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">Synup's recent State of Retail report revealed that a whopping 82% of consumers would not transact with a retailer with less than 3 stars.</span>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A BrightLocal survey also found that online users read 10 or fewer online reviews before making a decision.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nearly 23% of consumers consider online reviews that are no more than two weeks old as credible online resources.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Only 14% of people transact with a business with a 1- or 2-star rating.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-0b6ac08/thriveagency.com/files/reputationlook.svg" 
                alt="Google reviews management and SEO strategies driving traffic for online reputation management success" 
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Results That Speak For Themselves</h2>
            <p className="text-xl text-gray-700">Real businesses, real growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-ada-pink hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${study.color} rounded-full text-white text-sm font-semibold mb-6`}>
                  {study.type}
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-5xl font-bold text-ada-pink mb-2">{study.stat1}</div>
                    <div className="text-gray-700">{study.label1}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-gray-900 mb-2">{study.stat2}</div>
                    <div className="text-gray-700">{study.label2}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              <span className="text-ada-pink font-semibold">From Pogo Energy Vice President Eric M.:</span><br />
              "I couldn't be happier with choosing [VATALIQUE]. We use them in an ongoing way and also monthly to help encourage our customers to provide us feedback on public reviews. VATALIQUE creates an easy way for my customers to provide feedback to my company and to the general public. We were consistently told in private surveys that our customers loved us, but we didn't have a good/easy way for them to transfer their strong, positive opinions to Google and Facebook. VATALIQUE helped us achieve over 1,000 reviews in a few short months."
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Google Review Service & Digital Marketing Solutions That Drive Traffic</h2>
            <p className="text-xl text-gray-700">Master Online Reputation Management With SEO, Social Media & Email Marketing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-ada-pink hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="h-10 w-10 text-ada-pink mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-700">Real testimonials from businesses that transformed their online reputation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-ada-pink hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  <div className="text-ada-pink text-sm font-medium">{testimonial.phone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VATALIQUE for Google Reviews Management & Digital Marketing</h2>
            <p className="text-xl text-gray-700">Master SEO Strategies, Social Media Campaigns & Email Marketing That Drive Traffic</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-ada-pink hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-ada-pink to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
            <p className="text-xl text-gray-700">
              In 2020, Neil Patel recognized our Google review service and online reputation management as the <span className="text-ada-pink font-bold">third-best in the world</span>. Our proven digital marketing expertise—combining SEO strategies, social media campaigns, and email marketing that drive traffic—has helped thousands master digital marketing and achieve exceptional business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-ada-pink to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Driving Traffic With Google Reviews Management Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Master Digital Marketing With Our SEO Strategies, Social Media Campaigns & Email Marketing That Drive Sales
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold text-lg"
          >
            Get Your Free Google Review Service Demo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

