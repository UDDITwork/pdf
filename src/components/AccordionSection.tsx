'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ExperienceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  transcript: Array<{
    from: string;
    text: string;
  }>;
}

const items: ExperienceItem[] = [
  {
    id: 0,
    title: 'Custom App Development',
    description: 'Build powerful mobile and desktop applications that leverage AI to enhance user experience and drive business growth.',
    image: '/images/instant.jpg',
    transcript: [
      { from: 'AI Developer', text: 'Hi! I\'m here to help you build your next AI-powered application. What type of app are you looking to create?' },
      { from: 'Client', text: 'We need a mobile app that can analyze customer data and provide insights automatically.' },
      { from: 'AI Developer', text: 'Perfect! I can build you a custom AI-powered analytics app with real-time insights. Let\'s start with your requirements.' },
      { from: 'Client', text: 'That sounds exactly what we need! When can we begin?' },
    ],
  },
  {
    id: 1,
    title: 'AI Agent Development',
    description: 'Create intelligent AI agents that automate workflows, handle customer interactions, and scale your business operations.',
    image: '/images/proactive.jpg',
    transcript: [
      { from: 'AI Agent', text: 'Hello! I\'m your new AI assistant. I can handle customer inquiries, process orders, and provide 24/7 support. How can I help your business today?' },
      { from: 'Business Owner', text: 'We need an agent that can handle our customer service and sales inquiries.' },
      { from: 'AI Agent', text: 'I can be trained on your products and policies to handle both customer service and sales. I\'ll learn from every interaction to improve over time.' },
    ],
  },
  {
    id: 2,
    title: 'Workflow Automation',
    description: 'Transform your business processes with intelligent automation that reduces manual work and increases efficiency.',
    image: '/images/personalized.jpg',
    transcript: [
      { from: 'Automation Expert', text: 'I can analyze your current workflows and create AI-powered automation that saves you hours of manual work daily.' },
      { from: 'Business Owner', text: 'Our team spends too much time on repetitive tasks like data entry and report generation.' },
      { from: 'Automation Expert', text: 'Perfect! I\'ll create automated workflows that handle data processing, generate reports, and even make decisions based on your business rules.' },
    ],
  },
  {
    id: 3,
    title: 'Enterprise AI Solutions',
    description: 'Scale your enterprise with comprehensive AI solutions including web apps, desktop applications, and intelligent systems.',
    image: '/images/effortless.jpg',
    transcript: [
      { from: 'AI Solutions Architect', text: 'Welcome! I\'m here to help you scale beyond traditional AI capabilities with enterprise-grade solutions.' },
      { from: 'Enterprise Client', text: 'We need a complete AI transformation for our organization - from customer service to internal operations.' },
      { from: 'AI Solutions Architect', text: 'I\'ll design a comprehensive AI ecosystem that includes customer-facing AI agents, internal automation, and intelligent analytics dashboards.' },
    ],
  },
];

export default function AccordionSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI solutions that scale your business{' '}
            <span className="italic text-blue-600">beyond limits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with custom AI applications, intelligent automation, and AI agents that help founders, enterprises, and businesses scale beyond traditional capabilities.
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Panel - Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white shadow-2xl p-8 border border-gray-100">
              <div className="space-y-0">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`border-b border-gray-200 last:border-b-0 ${
                      active === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                    } transition-colors duration-200`}
                  >
                    <button
                      onClick={() => setActive(index)}
                      className="w-full flex items-center justify-between text-left py-6 px-4 group"
                    >
                      <h3 className={`text-xl font-semibold transition-colors ${
                        active === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                      }`}>
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                          active === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <span className="text-lg font-light">
                            {active === index ? '−' : '+'}
                          </span>
                        </div>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {active === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-6"
                        >
                          <div className="bg-gray-50 p-4 border-l-4 border-blue-600">
                            <p className="text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Dynamic Content */}
          <div className="w-full lg:w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative h-[500px] overflow-hidden border border-gray-100"
              >
                {/* Realistic Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src="https://imagedelivery.net/YFrrqfDHfRG8pCmKkJ5xTg/fb75619f-37dc-4443-1dc7-4cf5b0f60c00/w=undefined"
                    alt="Person working on laptop"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Floating Transcript Card */}
                <div className="absolute top-8 right-8 bg-white shadow-2xl p-6 w-80 max-w-[calc(100%-2rem)] border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex space-x-1">
                      <div className="w-1 h-3 bg-gray-400"></div>
                      <div className="w-1 h-2 bg-gray-300"></div>
                      <div className="w-1 h-4 bg-gray-400"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Transcript</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    {items[active].transcript.map((msg, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-600 text-xs">
                            {msg.from}
                          </span>
                          <span className="text-xs text-gray-400">now</span>
                        </div>
                        <p className="text-gray-800 leading-relaxed ml-0">{msg.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}