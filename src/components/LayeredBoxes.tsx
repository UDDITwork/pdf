'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CaseStudy } from '@/types';
import CaseStudyModal from './CaseStudyModal';

interface LayeredBoxesProps {
  caseStudies: CaseStudy[];
}

export default function LayeredBoxes({ caseStudies }: LayeredBoxesProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section className="relative py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Drive transformative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-ada-orange">
              AI solutions for business growth
            </span>
          </h2>
        </motion.div>

        {/* Card Container */}
        <div className="space-y-8">
          {/* First Card - Zammernow.com */}
          <div className="relative rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Left Section (Logo + BG) */}
            <div className="w-full md:w-[45%] h-80 md:h-auto relative bg-orange-400 flex items-end justify-start p-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-1 h-6 bg-white transform rotate-12"></div>
                  <div className="w-1 h-6 bg-white transform -rotate-12"></div>
                </div>
                <span className="text-white font-bold text-xl">Zammernow</span>
                <span className="text-white font-light text-lg">.com</span>
              </div>
            </div>

            {/* Right Section (Content) */}
            <div className="w-full md:w-[55%] bg-ada-orange p-8 md:p-12 flex flex-col justify-between">
              {/* Top: Headline + Testimonial */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
                {/* Headline */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                    <span className="block mb-3">AI-powered</span>
                    <span className="block italic font-extrabold text-4xl md:text-5xl mb-3">
                      content generation
                    </span>
                    <span className="block mb-3">for modern</span>
                    <span className="block">businesses</span>
                  </h3>
                </div>

                {/* Testimonial */}
                <div className="w-full lg:w-80 flex items-start space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-semibold text-lg">CT</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm leading-relaxed mb-4">
                      &ldquo;Our AI solutions have transformed our content creation process, enabling us to produce high-quality articles and ad copy efficiently. The AI-powered workflows have revolutionized our approach to content generation.&rdquo;
                    </p>
                    <div className="text-white text-sm">
                      <div className="font-semibold">Content Team Lead</div>
                      <div>AI Content Specialist</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom: Metric + Button */}
              <div className="flex justify-between items-center">
                {/* Metric */}
                <div className="text-white">
                  <div className="text-4xl font-bold mb-1">85%</div>
                  <div className="text-sm">faster content</div>
                  <div className="text-sm">creation</div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedCaseStudy(caseStudies[0])}
                  className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>View case study</span>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Second Card - Gantavyam.site */}
          <div className="relative rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Left Section (Logo + BG) */}
            <div className="w-full md:w-[45%] h-80 md:h-auto relative bg-yellow-400 flex items-end justify-start p-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-yellow-400 font-bold text-xl">G</span>
                </div>
                <span className="text-gray-900 font-bold text-xl">Gantavyam</span>
                <span className="text-gray-900 font-light text-lg">.site</span>
              </div>
            </div>

            {/* Right Section (Content) */}
            <div className="w-full md:w-[55%] bg-ada-yellow p-8 md:p-12 flex flex-col justify-between">
              {/* Top: Headline + Testimonial */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
                {/* Headline */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                    <span className="block mb-3">digital transformation</span>
                    <span className="block italic font-extrabold text-4xl md:text-5xl mb-3">
                      with AI
                    </span>
                    <span className="block mb-3">solutions</span>
                  </h3>
                </div>

                {/* Testimonial */}
                <div className="w-full lg:w-80 flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    {/* Placeholder for person photo */}
                    <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 font-semibold text-lg">DT</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 text-sm leading-relaxed mb-4">
                      &ldquo;The AI-powered development solutions have allowed us to deliver exceptional digital experiences to our clients. Our workflow automation has significantly improved our project delivery capabilities.&rdquo;
                    </p>
                    <div className="text-gray-900 text-sm">
                      <div className="font-semibold">Development Team</div>
                      <div>AI Development Specialists</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom: Metric + Button */}
              <div className="flex justify-between items-center">
                {/* Metric */}
                <div className="text-gray-900">
                  <div className="text-4xl font-bold mb-1">70%</div>
                  <div className="text-sm">faster development</div>
                  <div className="text-sm">cycles</div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedCaseStudy(caseStudies[1])}
                  className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>View case study</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Third Card - Richie AI */}
          <div className="relative rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Left Section (Logo + BG) */}
            <div className="w-full md:w-[45%] h-80 md:h-auto relative bg-blue-400 flex items-end justify-start p-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-xl">R</span>
                </div>
                <span className="text-white font-bold text-xl">Richie AI</span>
              </div>
            </div>

            {/* Right Section (Content) */}
            <div className="w-full md:w-[55%] bg-blue-100 p-8 md:p-12 flex flex-col justify-between">
              {/* Top: Headline */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                  <span className="block mb-3">financial AI</span>
                  <span className="block italic font-extrabold text-4xl md:text-5xl mb-3">
                    solutions
                  </span>
                  <span className="block mb-3">for smarter decisions</span>
                </h3>
              </div>

              {/* Bottom: Metric + Button + Testimonial */}
              <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
                {/* Left: Metric */}
                <div className="text-gray-900">
                  <div className="text-4xl font-bold mb-1">90%</div>
                  <div className="text-sm">improved financial</div>
                  <div className="text-sm">planning accuracy</div>
                </div>

                {/* Center: CTA Button */}
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setSelectedCaseStudy(caseStudies[2])}
                    className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>View case study</span>
                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Right: Testimonial */}
                <div className="w-full lg:w-80 flex flex-col items-end">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mb-4">
                    {/* Placeholder for person photo */}
                    <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-semibold text-sm">FT</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 text-sm leading-relaxed mb-4">
                      &ldquo;Our AI financial companion has revolutionized how we approach financial planning. The intelligent automation and personalized guidance have helped our clients achieve their financial goals more effectively.&rdquo;
                    </p>
                    <div className="text-gray-900 text-sm">
                      <div className="font-semibold">Financial Team</div>
                      <div>AI Financial Advisors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Card - Rajput FIR Services */}
          <div className="relative rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Left Section (Blurred Background) */}
            <div className="w-full md:w-[40%] h-80 md:h-auto relative flex items-center justify-center p-8">
              {/* Blurred Fire Safety Background */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320"><defs><filter id="blur"><feGaussianBlur stdDeviation="8"/></filter></defs><rect width="400" height="320" fill="%23E0F2FE"/><rect x="0" y="0" width="400" height="120" fill="%23F0F9FF" filter="url(%23blur)"/><rect x="0" y="100" width="400" height="80" fill="%23FFB366" filter="url(%23blur)"/><rect x="0" y="160" width="400" height="80" fill="%23FF6B35" filter="url(%23blur)"/><rect x="0" y="220" width="400" height="100" fill="%238B4513" filter="url(%23blur)"/></svg>')`
                }}
              />
              {/* Rajput FIR Logo */}
              <div className="relative z-10">
                <span className="text-white font-bold text-3xl md:text-4xl">Rajput FIR</span>
                <div className="text-white font-light text-lg">Services</div>
              </div>
            </div>

            {/* Right Section (Pink Background) */}
            <div className="w-full md:w-[60%] bg-pink-100 p-8 md:p-12 flex flex-col justify-between relative">
              {/* Person's Headshot - Top Right */}
              <div className="absolute top-4 right-4 w-20 h-20">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  {/* Placeholder for person photo */}
                  <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">ST</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-col h-full justify-between">
                {/* Top: Headline */}
                <div className="mb-8 mt-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                    <span className="block mb-3">AI-enhanced</span>
                    <span className="block italic font-extrabold text-4xl md:text-5xl">
                      safety solutions
                    </span>
                  </h3>
                </div>

                {/* Bottom: Metric + Button + Testimonial */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
                  {/* Left: Metric */}
                  <div className="text-gray-900">
                    <div className="text-4xl font-bold mb-1">80%</div>
                    <div className="text-sm">reduction in</div>
                    <div className="text-sm">safety incidents</div>
                  </div>

                  {/* Center: CTA Button */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setSelectedCaseStudy(caseStudies[3])}
                      className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span>View case study</span>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-orange-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>

                  {/* Right: Testimonial */}
                  <div className="w-full lg:w-80 text-right">
                    <p className="text-gray-900 text-sm leading-relaxed mb-4">
                      &ldquo;The AI-powered safety solutions have transformed our fire safety operations. The automated monitoring and compliance systems ensure we maintain the highest safety standards while reducing manual oversight.&rdquo;
                    </p>
                    <div className="text-gray-900 text-sm">
                      <div className="font-semibold">Safety Team</div>
                      <div>AI Safety Specialists</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}
