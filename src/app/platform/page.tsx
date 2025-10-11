'use client';

import { useState } from 'react';
import { Bot, Workflow, Code, Zap, ArrowRight, CheckCircle, Database, Cloud, Cpu, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PlatformPage() {
  const [selectedCategory, setSelectedCategory] = useState('ai-agents');

  const categories = [
    { id: 'ai-agents', name: 'AI Agents', icon: Bot },
    { id: 'automation', name: 'Enterprise Automation', icon: Workflow },
    { id: 'development', name: 'Custom Development', icon: Code },
    { id: 'integrations', name: 'Integrations', icon: Zap }
  ];

  const solutions = {
    'ai-agents': [
      {
        title: 'Custom AI Agents',
        description: 'Tailored digital employees for your specific workflows',
        features: ['Customer support automation', 'Sales qualification', 'Data entry & processing', 'Document analysis'],
        icon: Bot,
        color: 'bg-purple-500'
      },
      {
        title: 'Conversational AI',
        description: 'Voice & text chatbots that understand context and intent',
        features: ['Multi-channel support (WhatsApp, Slack, MS Teams)', '100+ language support', 'Sentiment analysis', 'Natural language processing'],
        icon: MessageSquare,
        color: 'bg-blue-500'
      },
      {
        title: 'Agentic Workflow Systems',
        description: 'Autonomous decision-making AI that learns and improves',
        features: ['Self-improving agents', 'RAG-powered knowledge bases', 'Complex decision trees', 'Autonomous task execution'],
        icon: Cpu,
        color: 'bg-pink-500'
      }
    ],
    'automation': [
      {
        title: 'Process Automation',
        description: 'End-to-end workflow automation that eliminates manual work',
        features: ['RPA + AI hybrid solutions', 'Legacy system integration', 'Cross-platform orchestration', 'Real-time monitoring'],
        icon: Workflow,
        color: 'bg-green-500'
      },
      {
        title: 'Integration Hub',
        description: 'Connect every tool in your tech stack seamlessly',
        features: ['5000+ app integrations', 'Custom API development', 'Webhook orchestration', 'Zapier, n8n, Make.com implementations'],
        icon: Zap,
        color: 'bg-yellow-500'
      },
      {
        title: 'Workflow Optimization',
        description: 'Intelligent analysis and continuous improvement of your processes',
        features: ['Process mining & analysis', 'Bottleneck identification', 'Performance metrics', 'Continuous improvement engine'],
        icon: Database,
        color: 'bg-indigo-500'
      }
    ],
    'development': [
      {
        title: 'Web Applications',
        description: 'Modern, scalable web applications built for performance',
        features: ['SaaS platforms', 'Internal tools & dashboards', 'Admin panels', 'Progressive Web Apps'],
        icon: Code,
        color: 'bg-teal-500'
      },
      {
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile solutions',
        features: ['iOS & Android native', 'React Native/Flutter', 'Mobile-first design', 'Offline capabilities'],
        icon: Cloud,
        color: 'bg-orange-500'
      },
      {
        title: 'AI-Powered Features',
        description: 'Intelligent features that set your product apart',
        features: ['Predictive analytics', 'Recommendation engines', 'Computer vision integration', 'Natural language processing'],
        icon: Cpu,
        color: 'bg-red-500'
      }
    ],
    'integrations': [
      {
        title: 'Enterprise Systems',
        description: 'Seamless integration with your existing enterprise software',
        features: ['ERP systems', 'CRM platforms', 'HR management systems', 'Financial software'],
        icon: Database,
        color: 'bg-cyan-500'
      },
      {
        title: 'Cloud Platforms',
        description: 'Built on industry-leading cloud infrastructure',
        features: ['AWS, Azure, GCP', 'Serverless architecture', 'Auto-scaling', 'Global CDN'],
        icon: Cloud,
        color: 'bg-violet-500'
      },
      {
        title: 'API Development',
        description: 'Custom APIs and integrations for any system',
        features: ['RESTful APIs', 'GraphQL', 'Webhook automation', 'Real-time data sync'],
        icon: Zap,
        color: 'bg-emerald-500'
      }
    ]
  };

  const stats = [
    { number: '10M+', label: 'Tasks Automated' },
    { number: '87%', label: 'Cost Reduction' },
    { number: '4.5hrs', label: 'Saved Per Employee Daily' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-ada-pink font-semibold">AI-POWERED SOLUTIONS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Solutions for Every
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-400">
              Business Challenge
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From customer service to supply chain – we build AI agents and automations that actually work
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-ada-pink text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all duration-200 flex items-center text-lg font-semibold shadow-lg shadow-pink-500/50">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 border border-white/30 text-lg font-semibold">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl font-bold text-ada-pink mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your Solution
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive AI and automation solutions tailored to your needs
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-ada-pink text-white shadow-lg shadow-pink-500/50'
                      : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Solution Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions[selectedCategory as keyof typeof solutions].map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-ada-pink/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`${solution.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-ada-pink flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-ada-pink/20 text-ada-pink px-6 py-3 rounded-full hover:bg-ada-pink hover:text-white transition-all duration-200 flex items-center justify-center gap-2 font-semibold">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-ada-pink to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Calculate Your Potential ROI
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how much you could save with AI automation
          </p>
          <button className="bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 font-semibold text-lg mx-auto">
            Try ROI Calculator
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

