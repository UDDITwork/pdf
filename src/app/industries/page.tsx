'use client';

import { useState } from 'react';
import { Heart, TrendingUp, ShoppingCart, Factory, Home, Scale, Briefcase, GraduationCap, ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      headline: 'Intelligent Healthcare Operations',
      description: 'Transform patient care with AI-powered automation',
      challenges: [
        'Patient data management overload',
        'Complex appointment scheduling',
        'Insurance claims processing delays',
        'Compliance & documentation burden'
      ],
      solutions: [
        'AI medical assistant for patient intake',
        'Automated appointment scheduling & reminders',
        'Insurance verification bot',
        'HIPAA-compliant document processing'
      ],
      results: {
        metric1: '67% faster patient onboarding',
        metric2: '89% fewer scheduling errors',
        metric3: '$850K annual savings'
      },
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'financial',
      name: 'Financial Services',
      icon: TrendingUp,
      headline: 'Secure, Compliant Financial Automation',
      description: 'AI-powered solutions built for the financial industry',
      challenges: [
        'Fraud detection & prevention',
        'KYC/AML compliance complexity',
        'Customer onboarding friction',
        'Transaction processing delays'
      ],
      solutions: [
        'AI fraud detection agent (real-time)',
        'Automated compliance reporting',
        'Intelligent document processing',
        'Customer risk assessment automation'
      ],
      results: {
        metric1: '94% fraud detection accuracy',
        metric2: '$2M saved annually',
        metric3: '78% faster KYC processing'
      },
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce & Retail',
      icon: ShoppingCart,
      headline: '24/7 Shopping Experiences That Convert',
      description: 'Scale your retail operations with intelligent automation',
      challenges: [
        'Customer support overload',
        'Inventory management complexity',
        'Personalization at scale',
        'Cart abandonment'
      ],
      solutions: [
        'AI shopping assistant (24/7)',
        'Demand forecasting engine',
        'Dynamic pricing optimizer',
        'Abandoned cart recovery automation'
      ],
      results: {
        metric1: '3x conversion rate',
        metric2: '45% reduction in support costs',
        metric3: '92% customer satisfaction'
      },
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Factory,
      headline: 'Smart Factory, Smarter Operations',
      description: 'Industry 4.0 automation and AI for manufacturing',
      challenges: [
        'Supply chain visibility gaps',
        'Quality control consistency',
        'Predictive maintenance',
        'Production optimization'
      ],
      solutions: [
        'AI quality inspector (computer vision)',
        'Predictive maintenance alerts',
        'Supply chain optimizer',
        'Production scheduling automation'
      ],
      results: {
        metric1: '34% reduction in downtime',
        metric2: '99.7% quality accuracy',
        metric3: '$1.5M annual savings'
      },
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: Home,
      headline: 'Close More Deals with AI-Powered Property Tech',
      description: 'Automate operations and enhance client experiences',
      challenges: [
        'Lead qualification inefficiency',
        'Property matching complexity',
        'Document processing delays',
        'Client communication overload'
      ],
      solutions: [
        'AI lead scorer & qualifier',
        'Virtual property assistant',
        'Automated contract generation',
        'Smart showing scheduler'
      ],
      results: {
        metric1: '56% more qualified leads',
        metric2: '40% faster closings',
        metric3: '3.2x agent productivity'
      },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'legal',
      name: 'Legal Services',
      icon: Scale,
      headline: 'AI-Powered Legal Operations',
      description: 'Automate routine tasks and focus on high-value work',
      challenges: [
        'Document review time consumption',
        'Case research complexity',
        'Billing & time tracking',
        'Client communication volume'
      ],
      solutions: [
        'Contract analysis AI',
        'Legal research assistant',
        'Time tracking automation',
        'Client intake & screening bot'
      ],
      results: {
        metric1: '72% faster document review',
        metric2: '85% billing accuracy',
        metric3: '120hrs saved/month per attorney'
      },
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 'professional',
      name: 'Professional Services',
      icon: Briefcase,
      headline: 'Scale Your Expertise with AI',
      description: 'Consulting and professional services automation',
      challenges: [
        'Project management complexity',
        'Resource allocation inefficiency',
        'Client reporting burden',
        'Knowledge management'
      ],
      solutions: [
        'AI project coordinator',
        'Resource optimization engine',
        'Automated reporting dashboard',
        'Knowledge base AI assistant'
      ],
      results: {
        metric1: '48% project delivery improvement',
        metric2: '65% better resource utilization',
        metric3: '$950K additional revenue'
      },
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      headline: 'Personalized Learning at Scale',
      description: 'AI-powered education and training solutions',
      challenges: [
        'Personalization at scale',
        'Student engagement',
        'Administrative overhead',
        'Learning outcome tracking'
      ],
      solutions: [
        'AI tutoring assistant',
        'Automated grading & feedback',
        'Student enrollment automation',
        'Performance analytics dashboard'
      ],
      results: {
        metric1: '85% student engagement',
        metric2: '50% admin time saved',
        metric3: '23% improved outcomes'
      },
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-ada-pink font-semibold">INDUSTRY EXPERTISE</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Solutions Built for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-400">
              Your Industry
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Deep expertise, proven results, tailored technology for 8+ industries
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    selectedIndustry === industry.id
                      ? 'bg-gradient-to-br ' + industry.color + ' shadow-lg'
                      : 'bg-white/10 backdrop-blur-md border border-white/20 hover:border-ada-pink/50'
                  }`}
                >
                  <Icon className="h-12 w-12 text-white mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                </button>
              );
            })}
          </div>

          {/* Selected Industry Detail */}
          {selectedIndustry && (
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              {industries
                .filter((ind) => ind.id === selectedIndustry)
                .map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <div key={industry.id} className="space-y-12">
                      {/* Header */}
                      <div className="text-center">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mx-auto mb-6`}>
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                          {industry.headline}
                        </h2>
                        <p className="text-xl text-gray-300">
                          {industry.description}
                        </p>
                      </div>

                      {/* Content Grid */}
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Challenges */}
                        <div className="bg-white/5 rounded-2xl p-6">
                          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <BarChart3 className="h-6 w-6 text-red-400" />
                            Challenges We Solve
                          </h3>
                          <ul className="space-y-4">
                            {industry.challenges.map((challenge, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-red-400 text-sm font-bold">{idx + 1}</span>
                                </div>
                                <span className="text-gray-300">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div className="bg-white/5 rounded-2xl p-6">
                          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <CheckCircle className="h-6 w-6 text-green-400" />
                            Our Solutions
                          </h3>
                          <ul className="space-y-4">
                            {industry.solutions.map((solution, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Results */}
                      <div className={`bg-gradient-to-br ${industry.color} rounded-2xl p-8`}>
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">
                          Proven Results
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">
                              {industry.results.metric1.split(' ')[0]}
                            </div>
                            <div className="text-white/90">
                              {industry.results.metric1.split(' ').slice(1).join(' ')}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">
                              {industry.results.metric2.split(' ')[0]}
                            </div>
                            <div className="text-white/90">
                              {industry.results.metric2.split(' ').slice(1).join(' ')}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">
                              {industry.results.metric3.split(' ')[0]}
                            </div>
                            <div className="text-white/90">
                              {industry.results.metric3.split(' ').slice(1).join(' ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="text-center">
                        <button className="bg-ada-pink text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all duration-200 flex items-center gap-2 font-semibold text-lg mx-auto shadow-lg shadow-pink-500/50">
                          View {industry.name} Case Studies
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-ada-pink to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We've worked with businesses across 40+ industries. Let's discuss your unique challenges.
          </p>
          <button className="bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 font-semibold text-lg mx-auto">
            Book a Consultation
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

