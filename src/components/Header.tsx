'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Platform', hasDropdown: true },
    { name: 'Industries', hasDropdown: true },
    { name: 'Customers', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false },
  ];

  return (
    <header className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl mx-8 mt-8 z-50 relative border border-white/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-ada-pink rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">a</span>
                </div>
                <span className="text-2xl font-bold text-white">ada</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center text-white hover:text-ada-pink transition-colors duration-200">
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-ada-pink transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="bg-ada-pink text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200 flex items-center">
              Consult an expert
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-ada-pink transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md border-t border-white/30">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  className="block w-full text-left px-3 py-2 text-white hover:text-ada-pink hover:bg-white/20 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <button className="w-full bg-ada-pink text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
                  Consult an expert
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
