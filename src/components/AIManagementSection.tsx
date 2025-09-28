'use client';

import { motion } from 'framer-motion';

const timelineSteps = [
  {
    id: 1,
    label: 'analyze',
    title: 'identify AI opportunities in your business',
    description: 'We analyze your current processes to identify where AI can make the biggest impact—from customer service automation to intelligent data analysis and workflow optimization.',
    color: 'orange',
    content: 'conversation-topics'
  },
  {
    id: 2,
    label: 'design',
    title: 'create custom AI solutions for your needs',
    description: 'We design and develop custom AI applications, agents, and automation systems tailored to your specific business requirements and growth objectives.',
    color: 'pink',
    content: 'chat-interface'
  },
  {
    id: 3,
    label: 'implement',
    title: 'deploy AI solutions across your organization',
    description: 'We implement comprehensive AI solutions including web apps, desktop applications, mobile apps, and AI agents that integrate seamlessly with your existing systems.',
    color: 'orange',
    content: 'coaching-interface'
  },
  {
    id: 4,
    label: 'scale',
    title: 'grow beyond traditional AI capabilities',
    description: 'We help you scale your AI implementation across multiple channels, languages, and business functions, ensuring your AI solutions grow with your business.',
    color: 'pink',
    content: 'email-interface'
  }
];

export default function AIManagementSection() {
  return (
    <section className="py-20 bg-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI development process for business transformation
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From analysis to implementation, we help founders, enterprises, and businesses build AI solutions that scale beyond traditional capabilities.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/30">
            <div className="absolute top-0 w-3 h-3 bg-pink-500 rounded-sm transform -translate-x-1/2"></div>
          </div>

          {/* Timeline Steps */}
          {timelineSteps.map((step, index) => (
            <div key={step.id} className="relative mb-20 last:mb-0">
              {/* Timeline Circle */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${
                step.color === 'orange' ? 'bg-orange-500' : 'bg-pink-500'
              } rounded-full flex items-center justify-center z-10`}>
                <span className="text-white font-bold text-sm">{step.id}</span>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
                {/* Left Side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="lg:pr-12"
                >
                  <div className="mb-4">
                    <span className="text-green-300 text-sm font-medium uppercase tracking-wide">
                      {step.label}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {step.title}
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Right Side - Content Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  className="lg:pl-12"
                >
                  {step.content === 'conversation-topics' && (
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          Conversation Topics
                        </h4>
                        <p className="text-gray-600">
                          Learn what your customers are asking your AI Agent about
                        </p>
                      </div>

                      {/* Metrics Grid */}
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Automated resolution opportunity</span>
                          <span className="text-2xl font-bold text-gray-900">6.6%</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Conversations</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">648</span>
                            <div className="flex items-center text-green-600">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm font-medium ml-1">12%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Automated resolution rate</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">54%</span>
                            <div className="flex items-center text-red-600">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm font-medium ml-1">9%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">Contained</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">64%</span>
                            <div className="flex items-center text-green-600">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm font-medium ml-1">2%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center py-3">
                          <span className="text-gray-700 font-medium">CSAT</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">56%</span>
                            <div className="flex items-center text-green-600">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm font-medium ml-1">5%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>see more</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                    </div>
                  )}

                  {step.content === 'chat-interface' && (
                    <div className="space-y-4">
                      {/* Chat Interface */}
                      <div className="bg-white rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">Shop AI</span>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-gray-100 rounded-lg p-3">
                            <p className="text-sm text-gray-700">
                              <strong>Joe:</strong> Hey, do you offer expedited shipping? I desperately need this camera before my vacation.
                            </p>
                          </div>
                          <div className="bg-white border rounded-lg p-3">
                            <p className="text-sm text-gray-700">
                              <strong>AI agent:</strong> We do! We offer 1 and 2 day shipping options to all 50 states. Can I help you with anything else?
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Test Variables Card */}
                      <div className="bg-white rounded-2xl p-6 shadow-2xl">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Set test variables</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                              <option>United States</option>
                            </select>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                          >
                            <span>Apply</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.content === 'coaching-interface' && (
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                      <div className="space-y-6">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <p className="text-sm text-gray-700">
                            &ldquo;Could you please provide me with your order number?&rdquo;
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">When replying to</h5>
                            <p className="text-sm text-gray-600">Conversations about orders, refunds, and exchanges</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Coach your AI agent on how to respond</h5>
                            <p className="text-sm text-gray-600">Always clarify whether the purchase was made online or in-store.</p>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 rounded-lg p-4 flex items-start space-x-2">
                          <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <p className="text-sm text-gray-700">
                            Got it! Next time I&apos;ll say something like... Happy to help! Did you purchase online or in-store?
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.content === 'email-interface' && (
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        {/* Email Header */}
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-700">Sujet: Prolongation de la période d&apos;essai gratuite</span>
                          </div>
                          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        
                        {/* Email Content */}
                        <div className="p-4 space-y-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="font-medium">sarah@email.com</span>
                            <span>•</span>
                            <span>23 juin</span>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-sm text-gray-700">
                                Bonjour, j&apos;aimerais prolonger ma période d&apos;essai gratuite et planifier une démonstration. Est-ce possible ?
                              </p>
                            </div>
                            
                            <div className="bg-white border rounded-lg p-3">
                              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                                <span className="font-medium">AI agent</span>
                                <span>•</span>
                                <span>23 juin</span>
                              </div>
                              <p className="text-sm text-gray-700">
                                Absolument ! Je prolonge votre essai gratuit de 2 semaines. Pour la démonstration, est-ce que 14h vous convient ?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Discover the Power of AI */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
            discover the power of AI for business growth
          </h3>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Discover how our AI solutions help founders, enterprises, and businesses scale beyond traditional AI capabilities.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 flex items-center space-x-2 whitespace-nowrap mx-auto"
          >
            <span>Our AI Solutions</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
