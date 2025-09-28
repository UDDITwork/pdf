'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { CaseStudy } from '@/types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy;
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 case-study-modal"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl mx-auto mt-20 bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative h-64 bg-gradient-to-r from-ada-pink to-ada-orange">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">{caseStudy.company}</h1>
                <p className="text-xl opacity-90">{caseStudy.title}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Description and Metrics */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {caseStudy.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {caseStudy.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {caseStudy.metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-ada-pink mb-1">
                        {metric.value}
                      </div>
                      <div className="text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Testimonial */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-ada-pink rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">
                      {caseStudy.testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{caseStudy.testimonial.text}"
                  </blockquote>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold">{caseStudy.testimonial.author}</div>
                    <div>{caseStudy.testimonial.position}</div>
                    <div className="text-ada-pink">{caseStudy.testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t">
              <button className="flex-1 bg-ada-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200">
                Get started with Ada
              </button>
              <button className="flex-1 border-2 border-ada-pink text-ada-pink px-6 py-3 rounded-full font-semibold hover:bg-ada-pink hover:text-white transition-colors duration-200">
                Download case study
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
