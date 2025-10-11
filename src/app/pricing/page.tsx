'use client';

import { useState } from 'react';
import { Check, ArrowRight, Zap, Sparkles, Crown, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const tiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses exploring AI automation',
      priceMonthly: 997,
      priceAnnual: 897,
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Up to 3 AI agents',
        '5,000 tasks/month',
        'Basic integrations (50+)',
        'Email support',
        'Standard response time',
        'Basic analytics dashboard',
        'Community access'
      ],
      limitations: [
        'Limited customization',
        'Standard AI models only'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing companies scaling operations',
      priceMonthly: 2497,
      priceAnnual: 2247,
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Up to 10 AI agents',
        '25,000 tasks/month',
        'Advanced integrations (500+)',
        'Priority support (24/7)',
        'Custom workflows',
        'Advanced analytics & reporting',
        'API access',
        'Dedicated success manager',
        'Training & onboarding',
        'Custom AI model fine-tuning'
      ],
      limitations: [],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring full customization',
      priceMonthly: null,
      priceAnnual: null,
      icon: Crown,
      color: 'from-orange-500 to-red-500',
      features: [
        'Unlimited AI agents',
        'Unlimited tasks',
        'Full integration suite (5000+)',
        'White-glove support',
        'Custom development',
        'Enterprise-grade security',
        'SLA guarantees',
        'Dedicated infrastructure',
        'Custom contracts & compliance',
        'Executive business reviews',
        'On-premise deployment option'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Premium Support',
      price: 499,
      description: 'Dedicated support with <2hr response time',
      icon: '🎯'
    },
    {
      name: 'Additional Integrations',
      price: 299,
      description: 'Custom integration development per connector',
      icon: '🔌'
    },
    {
      name: 'Custom Training',
      price: 1999,
      description: 'Personalized team training sessions',
      icon: '📚'
    },
    {
      name: 'Priority Implementation',
      price: 2499,
      description: 'Fast-track deployment in 2 weeks',
      icon: '⚡'
    }
  ];

  const faqs = [
    {
      question: 'How does pricing work?',
      answer: 'Our pricing is based on the number of AI agents and tasks per month. You can upgrade or downgrade at any time.'
    },
    {
      question: 'What counts as a "task"?',
      answer: 'A task is any action performed by an AI agent - from reading an email to processing a document or making an API call.'
    },
    {
      question: 'Can I try before I buy?',
      answer: 'Yes! All plans include a 14-day free trial with full access to features. No credit card required.'
    },
    {
      question: 'What happens if I exceed my task limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan or purchase additional task packs.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with the platform.'
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-ada-pink font-semibold">TRANSPARENT PRICING</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-400">
              Growth Plan
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transparent pricing. Predictable results. Scale with confidence.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white font-semibold' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-16 h-8 bg-white/20 rounded-full transition-all duration-300"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-ada-pink rounded-full transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'transform translate-x-8' : ''
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-white font-semibold' : 'text-gray-400'}`}>
              Annual
              <span className="ml-2 text-sm text-ada-pink">Save 10%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              const price = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceAnnual;
              
              return (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 ${
                    tier.popular ? 'border-ada-pink shadow-2xl shadow-pink-500/50 scale-105' : 'border-white/20'
                  } transition-all duration-300 hover:border-ada-pink/50`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-ada-pink to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>

                  <div className="mb-6">
                    {price ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold text-white">${price}</span>
                          <span className="text-gray-400">/month</span>
                        </div>
                        {billingCycle === 'annual' && (
                          <p className="text-sm text-ada-pink mt-2">
                            Billed annually (${price * 12}/year)
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-4xl font-bold text-white">Custom</div>
                    )}
                  </div>

                  <button
                    className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 mb-8 ${
                      tier.popular
                        ? 'bg-ada-pink text-white hover:bg-pink-600 shadow-lg shadow-pink-500/50'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/30'
                    }`}
                  >
                    {tier.cta}
                  </button>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-300 uppercase">What's Included:</p>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-ada-pink flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Premium Add-Ons</h2>
            <p className="text-xl text-gray-300">Enhance your plan with additional services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-ada-pink/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{addon.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                <div className="text-2xl font-bold text-ada-pink mb-4">
                  ${addon.price}/mo
                </div>
                <button className="w-full bg-ada-pink/20 text-ada-pink px-4 py-2 rounded-full hover:bg-ada-pink hover:text-white transition-all duration-200 font-semibold">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-200"
                >
                  <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                  <HelpCircle
                    className={`h-6 w-6 text-ada-pink flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-ada-pink to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a call with our team to discuss your specific needs
          </p>
          <button className="bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 font-semibold text-lg mx-auto">
            Schedule a Call
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

