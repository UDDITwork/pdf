'use client';

import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            let's talk—book a
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">free</span>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-lg flex items-center gap-2 transition-colors duration-200">
              Get a demo
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">consultation</span>
          </div>
        </div>

        {/* Partner/Client Logos */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {/* Intuit Mailchimp */}
            <div className="text-gray-400 text-sm font-medium">
              Intuit Mailchimp
            </div>
            
            {/* Pinterest */}
            <div className="text-gray-400 text-sm font-medium">
              Pinterest
            </div>
            
            {/* monday.com */}
            <div className="text-gray-400 text-sm font-medium">
              monday.com
            </div>
            
            {/* Square */}
            <div className="text-gray-400 text-sm font-medium">
              Square
            </div>
            
            {/* afterpay */}
            <div className="text-gray-400 text-sm font-medium">
              afterpay
            </div>
            
            {/* ClickUp */}
            <div className="text-gray-400 text-sm font-medium">
              ClickUp
            </div>
            
            {/* brigit */}
            <div className="text-gray-400 text-sm font-medium">
              brigit
            </div>
            
            {/* BLACKHAWK */}
            <div className="text-gray-400 text-sm font-medium">
              BLACKHAWK
            </div>
            
            {/* neo */}
            <div className="text-gray-400 text-sm font-medium">
              neo
            </div>
            
            {/* zoominfo */}
            <div className="text-gray-400 text-sm font-medium">
              zoominfo
            </div>
            
            {/* Google (partial G) */}
            <div className="text-gray-400 text-sm font-medium">
              G
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
