'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3C2E40] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Platform */}
          <div>
            <h3 className="text-[#A09BA3] font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Overview</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Playbooks</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[#A09BA3] font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Messaging</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Voice</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[#A09BA3] font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Ecommerce</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Financial Services</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Gaming</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Health Insurance</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Property & Casualty Insurance</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">SaaS</a></li>
            </ul>
          </div>

          {/* Customers */}
          <div>
            <h3 className="text-[#A09BA3] font-semibold mb-4">Customers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Customer stories</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Wall of love</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#A09BA3] font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Resource library</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Ada academy</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Who we are</a></li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-[#A09BA3] font-semibold mb-4">Careers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Become a partner</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-8"></div>

        {/* Company Info & Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h4 className="text-[#E0DFE1] font-semibold mb-2">Who we are</h4>
            <p className="text-[#E0DFE1] text-sm max-w-md">
            Vatalique is an AI customer service company on a mission to make customer service extraordinary for everyone
            </p>
          </div>
          <div>
            <h4 className="text-[#E0DFE1] font-semibold mb-2">Follow us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Linkedin</a>
              <a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Youtube</a>
              <a href="#" className="text-[#E0DFE1] hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        {/* Large Logo and Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
          {/* Large VATALIQUE Logo */}
          <div className="flex-shrink-0">
            <div className="text-[#F7E06B] text-8xl lg:text-9xl font-bold">
              <span className="block">VATALIQUE</span>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex-1">
            <div className="mb-4">
              <h4 className="text-[#E0DFE1] font-semibold text-lg">Newsletter</h4>
              <h5 className="text-[#E0DFE1] font-semibold text-lg">Stay up to date</h5>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Business Email Address*"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
              <button className="bg-[#2D2D2D] hover:bg-gray-800 text-white px-6 py-3 rounded flex items-center gap-2 transition-colors">
                Subscribe
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-4"></div>

        {/* Legal Links */}
        <div className="flex flex-wrap gap-4 text-sm text-[#A09BA3]">
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          <a href="/privacy" className="hover:text-white transition-colors">Privacy policy</a>
          <a href="/security" className="hover:text-white transition-colors">Security</a>
          <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
          <a href="/status" className="hover:text-white transition-colors">Status</a>
          <a href="/payment-policy" className="hover:text-white transition-colors">Payment Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
