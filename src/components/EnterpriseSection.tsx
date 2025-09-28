'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const featureCards = [
  {
    id: 1,
    title: 'enterprise-grade AI security',
    description: 'HIPAA, SOC2, and GDPR compliance safeguard sensitive data with industry-leading AI security practices.',
    bgColor: 'bg-green-800',
    textColor: 'text-white',
    icon: (
      <div className="w-12 h-12 flex items-center justify-center">
        <div className="relative w-10 h-10">
          {/* Central square */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white"></div>
          {/* Cross squares */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 bg-white"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 bg-white"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white"></div>
          {/* Corner squares */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-white"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-white"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-white"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-white"></div>
          {/* Connecting lines */}
          <div className="absolute top-1/2 left-1 w-3 h-0.5 bg-white transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-1 w-3 h-0.5 bg-white transform -translate-y-1/2"></div>
          <div className="absolute top-1 left-1/2 w-0.5 h-3 bg-white transform -translate-x-1/2"></div>
          <div className="absolute bottom-1 left-1/2 w-0.5 h-3 bg-white transform -translate-x-1/2"></div>
          <div className="absolute top-1 left-1 w-0.5 h-1 bg-white transform rotate-45"></div>
          <div className="absolute top-1 right-1 w-0.5 h-1 bg-white transform -rotate-45"></div>
          <div className="absolute bottom-1 left-1 w-0.5 h-1 bg-white transform -rotate-45"></div>
          <div className="absolute bottom-1 right-1 w-0.5 h-1 bg-white transform rotate-45"></div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'AI safety and accuracy controls',
    description: 'Built-in AI safety measures ensure every interaction aligns with your company\'s policies and business objectives.',
    bgColor: 'bg-purple-900',
    textColor: 'text-white',
    icon: (
      <div className="w-12 h-12 flex items-center justify-center">
        <div className="relative w-10 h-10">
          {/* Three horizontal rows with connected squares */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-white"></div>
          <div className="absolute top-2 right-2 w-2 h-2 bg-white"></div>
          <div className="absolute top-1/2 left-2 w-2 h-2 bg-white transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-2 w-2 h-2 bg-white transform -translate-y-1/2"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-white"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-white"></div>
          {/* Vertical connecting lines */}
          <div className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-2 left-1/2 w-0.5 h-2 bg-white transform -translate-x-1/2"></div>
          <div className="absolute bottom-2 left-1/2 w-0.5 h-2 bg-white transform -translate-x-1/2"></div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'AI privacy-by-design',
    description: 'High standards of AI data protection at every stage of the data lifecycle ensure full compliance with privacy laws and regulations.',
    bgColor: 'bg-orange-500',
    textColor: 'text-white',
    icon: (
      <div className="w-12 h-12 flex items-center justify-center">
        <div className="relative w-10 h-10">
          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black"></div>
          {/* Radiating spokes with squares */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black"></div>
          <div className="absolute top-2 right-2 w-2 h-2 bg-black transform rotate-45"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 bg-black"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-black transform rotate-45"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-black transform rotate-45"></div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 bg-black"></div>
          <div className="absolute top-2 left-2 w-2 h-2 bg-black transform rotate-45"></div>
          {/* Connecting lines */}
          <div className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-black transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2 rotate-[135deg]"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2 rotate-[225deg]"></div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'AI reliability and scale',
    description: 'Manage hundreds of millions of AI interactions and effectively handle peak loads without compromising AI service quality.',
    bgColor: 'bg-yellow-300',
    textColor: 'text-black',
    icon: (
      <div className="w-12 h-12 flex items-center justify-center">
        <div className="relative w-10 h-10">
          {/* Main 3x3 grid */}
          <div className="absolute top-0 right-0 w-2 h-2 bg-black"></div>
          <div className="absolute top-0 right-2 w-2 h-2 bg-black"></div>
          <div className="absolute top-0 right-4 w-2 h-2 bg-black"></div>
          <div className="absolute top-2 right-0 w-2 h-2 bg-black"></div>
          <div className="absolute top-2 right-2 w-2 h-2 bg-black"></div>
          <div className="absolute top-2 right-4 w-2 h-2 bg-black"></div>
          <div className="absolute top-4 right-0 w-2 h-2 bg-black"></div>
          <div className="absolute top-4 right-2 w-2 h-2 bg-black"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-black"></div>
          {/* Bottom-left 2x2 grid */}
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-black"></div>
          <div className="absolute bottom-0 left-2 w-2 h-2 bg-black"></div>
          <div className="absolute bottom-2 left-0 w-2 h-2 bg-black"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-black"></div>
          {/* Connecting lines */}
          <div className="absolute top-1 right-1 w-0.5 h-3 bg-black"></div>
          <div className="absolute top-1 right-3 w-0.5 h-3 bg-black"></div>
          <div className="absolute top-1 right-5 w-0.5 h-3 bg-black"></div>
          <div className="absolute top-3 right-1 w-3 h-0.5 bg-black"></div>
          <div className="absolute top-3 right-3 w-3 h-0.5 bg-black"></div>
          <div className="absolute top-3 right-5 w-3 h-0.5 bg-black"></div>
          <div className="absolute bottom-1 left-1 w-0.5 h-3 bg-black"></div>
          <div className="absolute bottom-1 left-3 w-0.5 h-3 bg-black"></div>
          <div className="absolute bottom-3 left-1 w-3 h-0.5 bg-black"></div>
          <div className="absolute bottom-3 left-3 w-3 h-0.5 bg-black"></div>
          <div className="absolute top-4 left-0 w-0.5 h-2 bg-black"></div>
          <div className="absolute bottom-0 right-0 w-2 h-0.5 bg-black"></div>
        </div>
      </div>
    )
  }
];

export default function EnterpriseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Built for Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            built for enterprise AI transformation
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Customize AI solutions to your unique business needs with robust APIs, flexible SDKs, and comprehensive AI development services that scale beyond traditional capabilities.
          </p>
        </motion.div>

        {/* 2. Build Your Way Section with Circular Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Left Side - Build Your Way Content */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
              build your AI solutions—with or without code
            </h3>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Build only what&apos;s unique to your business and let our AI expertise handle the rest. Ensure compliance, security, and reliability, all while using comprehensive AI solutions that seamlessly operate across all channels, languages, and business functions.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-semibold transition-colors duration-200 flex items-center space-x-2"
              style={{ borderRadius: '0' }}
            >
              <span>AI Solutions</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>

          {/* Right Side - Circular Diagram */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://imagedelivery.net/YFrrqfDHfRG8pCmKkJ5xTg/2d537bcd-efea-49a7-b0f9-c228b52ee700/w=1004,h=1004,fit=crop"
              alt="Enterprise AI diagram"
              width={500}
              height={500}
              className="w-auto h-auto max-w-full"
            />
          </div>
        </motion.div>

        {/* 3. Plug & Play Section with Integration Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Left Side - Integration Logos */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="https://imagedelivery.net/YFrrqfDHfRG8pCmKkJ5xTg/f2435cfe-a9a7-464a-d341-9b2f195db900/w=1004,h=1004,fit=crop"
              alt="Integration logos"
              width={300}
              height={300}
              className="w-auto h-auto"
            />
          </div>

          {/* Right Side - Plug & Play Content */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
              plug & play AI integration, no extra steps
            </h3>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Our AI solutions are designed to seamlessly integrate with your existing business tools and workflows, sharing information across systems in real-time to boost the efficiency of your AI-powered operations.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 font-semibold transition-colors duration-200 flex items-center space-x-2"
              style={{ borderRadius: '0' }}
            >
              <span>AI Integrations</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* 4. Battle-tested AI Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            battle-tested AI solutions with enterprise-level rigor
          </h2>
          <p className="text-xl text-black">
            Trusted by leading companies including Zammernow, Gantavyam, Richie AI, and Rajput FIR Services.
          </p>
        </motion.div>

        {/* 5. Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              className={`${card.bgColor} p-8 h-full flex flex-col`}
              style={{ borderRadius: '0' }}
            >
              {/* Icon */}
              <div className="mb-6">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold ${card.textColor} mb-4`}>
                {card.title}
              </h3>

              {/* Description */}
              <p className={`text-base ${card.textColor} leading-relaxed`}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
