'use client';

import { useState } from 'react';
import { Award, TrendingUp, Users, Clock, ArrowRight, ExternalLink, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CustomersPage() {
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [filterSolution, setFilterSolution] = useState('all');

  const caseStudies = [
    {
      id: 1,
      company: 'HealthCare Plus',
      logo: 'HC+',
      industry: 'Healthcare',
      headline: 'Reduces Patient Onboarding Time by 67%',
      description: 'How HealthCare Plus automated patient intake and insurance verification',
      metrics: [
        { value: '67%', label: 'Faster Onboarding' },
        { value: '89%', label: 'Fewer Errors' },
        { value: '$850K', label: 'Annual Savings' }
      ],
      solution: 'AI Agents',
      image: 'bg-gradient-to-br from-red-500 to-pink-500',
      testimonial: 'The AI assistant transformed our operations. We now process 3x more patients with the same staff.',
      author: 'Dr. Sarah Johnson',
      role: 'Chief Operations Officer'
    },
    {
      id: 2,
      company: 'FinTech Global',
      logo: 'FTG',
      industry: 'Financial Services',
      headline: 'Achieves 94% Fraud Detection Accuracy',
      description: 'Real-time AI fraud detection saves $2M annually',
      metrics: [
        { value: '94%', label: 'Fraud Detection' },
        { value: '$2M', label: 'Saved Annually' },
        { value: '78%', label: 'Faster KYC' }
      ],
      solution: 'AI Agents',
      image: 'bg-gradient-to-br from-green-500 to-emerald-500',
      testimonial: 'This AI system caught fraud patterns our manual process missed completely.',
      author: 'Michael Chen',
      role: 'VP of Risk Management'
    },
    {
      id: 3,
      company: 'ShopSmart',
      logo: 'SS',
      industry: 'E-commerce',
      headline: 'Triples Conversion Rate with AI Assistant',
      description: '24/7 AI shopping assistant delivers personalized experiences',
      metrics: [
        { value: '3x', label: 'Conversion Rate' },
        { value: '45%', label: 'Support Cost Reduction' },
        { value: '92%', label: 'Customer Satisfaction' }
      ],
      solution: 'AI Agents',
      image: 'bg-gradient-to-br from-purple-500 to-indigo-500',
      testimonial: 'Our AI assistant is like having 100 expert sales people available 24/7.',
      author: 'Emily Rodriguez',
      role: 'CEO'
    },
    {
      id: 4,
      company: 'TechManufacturing Co',
      logo: 'TMC',
      industry: 'Manufacturing',
      headline: 'Reduces Downtime by 34% with Predictive AI',
      description: 'AI-powered predictive maintenance prevents costly breakdowns',
      metrics: [
        { value: '34%', label: 'Downtime Reduction' },
        { value: '99.7%', label: 'Quality Accuracy' },
        { value: '$1.5M', label: 'Annual Savings' }
      ],
      solution: 'Automation',
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
      testimonial: 'We went from reactive to proactive. The ROI was clear within 3 months.',
      author: 'James Williams',
      role: 'Director of Operations'
    },
    {
      id: 5,
      company: 'PropertyPro',
      logo: 'PP',
      industry: 'Real Estate',
      headline: 'Increases Agent Productivity by 3.2x',
      description: 'AI lead scoring and automation closes deals faster',
      metrics: [
        { value: '56%', label: 'More Qualified Leads' },
        { value: '40%', label: 'Faster Closings' },
        { value: '3.2x', label: 'Agent Productivity' }
      ],
      solution: 'Automation',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      testimonial: 'Our agents now focus on high-value activities while AI handles the rest.',
      author: 'David Martinez',
      role: 'Managing Broker'
    },
    {
      id: 6,
      company: 'Legal Associates',
      logo: 'LA',
      industry: 'Legal Services',
      headline: 'Saves 120 Hours Per Month Per Attorney',
      description: 'AI contract analysis and research assistant accelerates legal work',
      metrics: [
        { value: '72%', label: 'Faster Document Review' },
        { value: '85%', label: 'Billing Accuracy' },
        { value: '120hrs', label: 'Saved Monthly' }
      ],
      solution: 'AI Agents',
      image: 'bg-gradient-to-br from-gray-600 to-gray-800',
      testimonial: 'This AI is like having a brilliant paralegal working 24/7 on every case.',
      author: 'Jennifer Thompson',
      role: 'Senior Partner'
    }
  ];

  const industries = ['all', 'Healthcare', 'Financial Services', 'E-commerce', 'Manufacturing', 'Real Estate', 'Legal Services'];
  const solutions = ['all', 'AI Agents', 'Automation', 'Custom Development'];

  const filteredStudies = caseStudies.filter(study => {
    const matchesIndustry = filterIndustry === 'all' || study.industry === filterIndustry;
    const matchesSolution = filterSolution === 'all' || study.solution === filterSolution;
    return matchesIndustry && matchesSolution;
  });

  const overallStats = [
    { icon: Users, value: '500+', label: 'Enterprise Clients' },
    { icon: TrendingUp, value: '$450M+', label: 'Client Cost Savings' },
    { icon: Clock, value: '10M+', label: 'Tasks Automated' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-ada-pink font-semibold">SUCCESS STORIES</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Real Results.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-400">
              Real Impact.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See how we&apos;ve transformed operations for 500+ enterprises across 40 countries
          </p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {overallStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:border-ada-pink/50 transition-all duration-300">
                  <Icon className="h-10 w-10 text-ada-pink mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-5 w-5 text-ada-pink" />
              <h3 className="text-xl font-semibold text-white">Filter Case Studies</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Industry</label>
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ada-pink"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry} className="bg-gray-900">
                      {industry === 'all' ? 'All Industries' : industry}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Solution Type</label>
                <select
                  value={filterSolution}
                  onChange={(e) => setFilterSolution(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ada-pink"
                >
                  {solutions.map((solution) => (
                    <option key={solution} value={solution} className="bg-gray-900">
                      {solution === 'all' ? 'All Solutions' : solution}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:border-ada-pink/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header Image */}
                <div className={`${study.image} h-32 flex items-center justify-center`}>
                  <div className="text-5xl font-bold text-white">{study.logo}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-ada-pink/20 text-ada-pink text-xs font-semibold rounded-full">
                      {study.industry}
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-semibold rounded-full">
                      {study.solution}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                  <p className="text-lg font-semibold text-ada-pink mb-3">{study.headline}</p>
                  <p className="text-gray-300 mb-6 text-sm">{study.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-xs text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white/5 rounded-xl p-4 mb-4">
                    <p className="text-gray-300 text-sm italic mb-3">&ldquo;{study.testimonial}&rdquo;</p>
                    <div className="text-sm">
                      <div className="text-white font-semibold">{study.author}</div>
                      <div className="text-gray-400 text-xs">{study.role}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-ada-pink/20 text-ada-pink px-4 py-3 rounded-full hover:bg-ada-pink hover:text-white transition-all duration-200 flex items-center justify-center gap-2 font-semibold">
                    Read Full Case Study
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-ada-pink to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 500+ enterprises who've transformed their operations with AI
          </p>
          <button className="bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 font-semibold text-lg mx-auto">
            Start Your Journey
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

