'use client';

import { useState } from 'react';
import { Code, Cloud, Database, Zap, Shield, TrendingUp, Search, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TechnologyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Integrations' },
    { id: 'crm', name: 'CRM & Sales' },
    { id: 'communication', name: 'Communication' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'hr', name: 'HR & Finance' }
  ];

  const techStack = [
    {
      category: 'AI & Machine Learning',
      icon: Code,
      color: 'from-purple-500 to-indigo-500',
      technologies: [
        'OpenAI GPT-4 & GPT-4 Turbo',
        'Anthropic Claude',
        'Google Gemini',
        'LangChain & LlamaIndex',
        'TensorFlow & PyTorch',
        'Hugging Face Models',
        'Vector Databases (Pinecone, Weaviate)'
      ]
    },
    {
      category: 'Automation Platforms',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      technologies: [
        'Zapier (5000+ apps)',
        'n8n (Self-hosted workflows)',
        'Make.com (Advanced scenarios)',
        'Integromat',
        'Microsoft Power Automate',
        'Custom workflow engines'
      ]
    },
    {
      category: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        'React & Next.js',
        'Vue.js & Nuxt',
        'TypeScript',
        'Tailwind CSS',
        'React Native',
        'Flutter',
        'Progressive Web Apps'
      ]
    },
    {
      category: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      technologies: [
        'Node.js & Express',
        'Python & FastAPI',
        'Java & Spring Boot',
        'Go',
        'Microservices Architecture',
        'Serverless Functions',
        'GraphQL & REST APIs'
      ]
    },
    {
      category: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      technologies: [
        'AWS (Certified Partner)',
        'Microsoft Azure',
        'Google Cloud Platform',
        'Kubernetes',
        'Docker',
        'Terraform',
        'CI/CD Pipelines'
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      technologies: [
        'SOC 2 Type II Compliant',
        'ISO 27001 Certified',
        'GDPR Compliant',
        'HIPAA Compliance',
        'End-to-end Encryption',
        'OAuth 2.0 & SSO',
        'Zero Trust Architecture'
      ]
    }
  ];

  const integrations = {
    crm: [
      { 
        name: 'Salesforce', 
        logo: 'https://img.icons8.com/color/48/salesforce.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'HubSpot', 
        logo: 'https://d3a93fg1wt2nf3.cloudfront.net/static/website/images/comparison-logos/hubspot-logo.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'Pipedrive', 
        logo: 'https://cdn.prod.website-files.com/655b8092803c160e897db87b/65aa9d258a190ba354d18aa2_655b8092803c160e897dc1c8_pipedrive.b4a823b.svg',
        popular: false,
        useImage: true
      },
      { 
        name: 'Zoho CRM', 
        logo: 'https://www.cromatic.cl/wp-content/uploads/2020/04/Zoho-1024x354.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'Microsoft Dynamics', 
        logo: 'https://www.newpathweb.com.au/wp-content/uploads/2024/12/Microsoft-Dynamics-365.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'Copper', 
        logo: 'https://play-lh.googleusercontent.com/4lc5KTwIKPqbNSk0IvhbFfZ-alRCiOGXp9i5JoS3BcAnE4ntcTTmS3Pzn21W7LDe5U4',
        popular: false,
        useImage: true
      }
    ],
    communication: [
      { 
        name: 'Slack', 
        logo: 'https://www.cisco.com/c/dam/assets/swa/img/anchor-info/slack-logo-628x353.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'Microsoft Teams', 
        logo: 'https://img.icons8.com/color/48/microsoft-teams.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'WhatsApp Business', 
        logo: 'https://thumbs.dreamstime.com/b/print-383948866.jpg',
        popular: true,
        useImage: true
      },
      { 
        name: 'Discord', 
        logo: 'https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'Telegram', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'Twilio', 
        logo: 'https://www.qualtrics.com/sites/default/files/styles/image_square_360x360/public/2025-08/twillo-logo.png.webp?itok=X4UaFeXf',
        popular: false,
        useImage: true
      }
    ],
    productivity: [
      { 
        name: 'Google Workspace', 
        logo: 'https://skyseodigital.com/wp-content/uploads/2024/08/google-workspace-logo.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'Microsoft 365', 
        logo: 'https://www.initeam.com/media/images/_740xAUTO_crop_center-center_none/41116/Microsoft-Office-365-Logo.webp',
        popular: true,
        useImage: true
      },
      { 
        name: 'Notion', 
        logo: 'https://img.icons8.com/color/48/notion.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'Airtable', 
        logo: 'https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/347792099_773230564238933_1803967872533380179_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Shhdk2fqnpEQ7kNvwEe-oF4&_nc_oc=AdmXdlb-Nmit-JBpis9ueQm662rhyIa1bxzRVmkxfh16NytOdk4MLNPk5xD9xb64Pl4&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=0NY46v3EzcceLq6z4jC4wg&oh=00_AfcuRhy86KH2nICPB1y-W3VZuGqiRaqkpsZd5jJFwdF9aQ&oe=68EF8F6E',
        popular: false,
        useImage: true
      },
      { 
        name: 'Asana', 
        logo: 'https://appexchange.salesforce.com/image_host/f699b0b4-339c-4487-98dd-60a1c1b5e08c.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'Monday.com', 
        logo: 'https://img.icons8.com/color/48/monday.png',
        popular: false,
        useImage: true
      }
    ],
    ecommerce: [
      { 
        name: 'Shopify', 
        logo: 'https://integrations.passkit.com/wp-content/uploads/2025/04/1156660_ecommerce_logo_shopify_icon-1.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'WooCommerce', 
        logo: 'https://www.waymore.io/wp-content/uploads/2021/10/woo.svg',
        popular: true,
        useImage: true
      },
      { 
        name: 'Stripe', 
        logo: 'https://hostbillapp.com/appstore/payment_stripe/images/thumbnails/m_logo.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'PayPal', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'Square', 
        logo: 'https://img.icons8.com/color/48/square.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'BigCommerce', 
        logo: 'https://img.icons8.com/color/48/bigcommerce.png',
        popular: false,
        useImage: true
      }
    ],
    marketing: [
      { 
        name: 'Mailchimp', 
        logo: 'https://midexpro.com/wp-content/uploads/2022/06/Mailchimp-Logo-2018-present.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'SendGrid', 
        logo: 'https://sendgrid.com/content/dam/sendgrid/legacy/2018/08/sg.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'Facebook Ads', 
        logo: 'https://img.icons8.com/color/48/facebook.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'Google Ads', 
        logo: 'https://img.icons8.com/color/48/google-ads.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'LinkedIn Ads', 
        logo: 'https://img.icons8.com/color/48/linkedin.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'Zapier', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/1280px-Zapier_logo.svg.png',
        popular: false,
        useImage: true
      }
    ],
    hr: [
      { 
        name: 'BambooHR', 
        logo: 'https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvY29udGFjdF9pbWFnZXMvYmJjYjdiMDMtM2Q0NC00MDk2LTkzZTktMjg5ZGZkMjFmZTNkLzE4ZDI4OTJlLTRjODUtNGNjZC1hM2NhLTQ5ZDQ4ODQxYTg3Ny5wbmciLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6NjAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MH19fX0=',
        popular: true,
        useImage: true
      },
      { 
        name: 'Workday', 
        logo: 'https://img.icons8.com/color/48/workday.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'QuickBooks', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Intuit_QuickBooks_logo.svg/2560px-Intuit_QuickBooks_logo.svg.png',
        popular: true,
        useImage: true
      },
      { 
        name: 'Xero', 
        logo: 'https://www.xero.com/content/dam/xero/pilot-images/big-story/get-started/getting-started-connect-bank-acc.1646877660691.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'ADP', 
        logo: 'https://wfsaustralia.com/wp-content/uploads/2024/09/ADP_600x600.png',
        popular: false,
        useImage: true
      },
      { 
        name: 'Gusto', 
        logo: 'https://www.workforcehub.com/wp-content/uploads/2021/07/gusto-logo.png',
        popular: false,
        useImage: true
      }
    ]
  };

  const metrics = [
    { value: '5000+', label: 'Total Integrations' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '<100ms', label: 'API Response Time' },
    { value: '24/7', label: 'Monitoring' }
  ];

  const filteredIntegrations = selectedCategory === 'all' 
    ? Object.values(integrations).flat()
    : integrations[selectedCategory as keyof typeof integrations] || [];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-ada-pink/10 rounded-full border border-ada-pink/20">
            <span className="text-ada-pink font-semibold">TECHNOLOGY STACK</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Built on the Best.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-400">
              Integrated with Everything.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            5000+ integrations. Enterprise-grade infrastructure. Infinite possibilities.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations (e.g., Salesforce, Slack, Stripe...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-12 pr-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-ada-pink focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold text-ada-pink mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade technologies powering your AI transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-ada-pink/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stack.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-ada-pink rounded-full"></div>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">5000+ Integrations</h2>
            <p className="text-xl text-gray-600">
              Connect with all your favorite tools and platforms
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-ada-pink text-white shadow-lg shadow-pink-500/50'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Integration Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredIntegrations.map((integration, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  integration.popular
                    ? 'border-ada-pink shadow-lg shadow-pink-500/30'
                    : 'border-gray-200 hover:border-ada-pink/50'
                }`}
              >
                <div className="h-12 mb-3 flex items-center justify-center">
                  {integration.useImage ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img 
                        src={integration.logo} 
                        alt={`${integration.name} logo`}
                        className={integration.name === 'BambooHR' ? 'max-h-24 max-w-full object-contain' : integration.name === 'Xero' ? 'max-h-24 max-w-full object-contain' : ['Twilio', 'Google Workspace', 'Slack', 'Salesforce', 'Microsoft 365', 'Asana', 'Airtable', 'ADP', 'Gusto', 'QuickBooks', 'SendGrid', 'Zapier', 'Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Square', 'BigCommerce'].includes(integration.name) ? 'max-h-20 max-w-full object-contain' : 'max-h-12 max-w-full object-contain'}
                        style={{ 
                          opacity: 0.9
                        }}
                        onLoad={() => console.log(`${integration.name} logo loaded successfully`)}
                        onError={(e) => {
                          console.error(`${integration.name} logo failed to load:`, integration.logo);
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.fallback-text');
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                      <div 
                        className="fallback-text absolute inset-0 flex items-center justify-center text-white font-bold text-lg"
                        style={{ display: 'none' }}
                      >
                        {integration.name.charAt(0)}
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl text-center text-gray-600">
                      {integration.logo}
                    </div>
                  )}
                </div>
                <div className="text-gray-900 font-semibold text-sm text-center">{integration.name}</div>
                {integration.popular && (
                  <div className="text-center mt-2">
                    <span className="text-xs text-ada-pink">Popular</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Show More */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Showing {filteredIntegrations.length} of 5000+ available integrations
            </p>
            <button className="bg-ada-pink/20 text-ada-pink px-8 py-4 rounded-full hover:bg-ada-pink hover:text-white transition-all duration-200 font-semibold">
              View All Integrations
            </button>
          </div>
        </div>
      </section>

      {/* Custom Integration CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-12 border-4 border-ada-pink">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Can't Find Your Tool?
                </h2>
                <p className="text-xl text-black mb-6">
                  We build custom integrations for any system, any platform, any API.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-black">
                    <div className="w-6 h-6 bg-ada-pink rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm text-white">✓</span>
                    </div>
                    Custom API development
                  </li>
                  <li className="flex items-center gap-3 text-black">
                    <div className="w-6 h-6 bg-ada-pink rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm text-white">✓</span>
                    </div>
                    Webhook orchestration
                  </li>
                  <li className="flex items-center gap-3 text-black">
                    <div className="w-6 h-6 bg-ada-pink rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm text-white">✓</span>
                    </div>
                    Legacy system integration
                  </li>
                </ul>
                <button className="bg-ada-pink text-white px-8 py-4 hover:bg-pink-600 transition-all duration-200 flex items-center gap-2 font-semibold text-lg border-2 border-ada-pink">
                  Request Custom Integration
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="bg-white p-8 border-4 border-ada-pink">
                <h3 className="text-2xl font-bold text-black mb-6">Recent Custom Integrations</h3>
                <div className="space-y-4">
                  {[
                    'SAP ERP Integration',
                    'Oracle Database Connector',
                    'Legacy AS/400 System',
                    'Custom Healthcare EMR',
                    'Proprietary CRM System'
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center gap-3 text-black">
                      <TrendingUp className="h-5 w-5 text-ada-pink" />
                      <span>{integration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

