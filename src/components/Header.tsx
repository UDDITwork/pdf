'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  
  // Check if current page has white background
  const isWhiteBackgroundPage = pathname === '/technology' || pathname === '/platform' || pathname === '/industries';

  const navigationItems = [
    { 
      name: 'Platform', 
      href: '/platform',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Agents', href: '/platform#ai-agents' },
        { name: 'Enterprise Automation', href: '/platform#automation' },
        { name: 'Custom Development', href: '/platform#development' },
        { name: 'Technology Stack', href: '/technology' }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Healthcare', href: '/industries#healthcare' },
        { name: 'Financial Services', href: '/industries#financial' },
        { name: 'E-commerce', href: '/industries#ecommerce' },
        { name: 'Manufacturing', href: '/industries#manufacturing' },
        { name: 'Real Estate', href: '/industries#realestate' },
        { name: 'Legal Services', href: '/industries#legal' }
      ]
    },
    { 
      name: 'Customers', 
      href: '/customers',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Case Studies', href: '/customers' },
        { name: 'Success Stories', href: '/customers#stories' },
        { name: 'Testimonials', href: '/customers#testimonials' }
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog & Articles', href: '/resources#articles' },
        { name: 'Whitepapers', href: '/resources#whitepapers' },
        { name: 'Videos', href: '/resources#videos' },
        { name: 'Tools & Calculators', href: '/resources#tools' }
      ]
    },
    { 
      name: 'Pricing', 
      href: '/pricing',
      hasDropdown: false 
    },
  ];

      return (
        <header className={`${isWhiteBackgroundPage ? 'bg-gray-900/10 backdrop-blur-md shadow-lg border border-gray-200' : 'bg-white/10 backdrop-blur-md shadow-lg border border-white/30'} rounded-2xl mx-8 mt-8 z-50 relative`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center cursor-pointer">
                <div className="w-8 h-8 bg-ada-pink rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">v</span>
                </div>
                <span className={`text-2xl font-bold ${isWhiteBackgroundPage ? 'text-gray-900' : 'text-white'}`}>vatalique</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={(e) => {
                  // Only close if mouse is leaving the entire dropdown area
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX;
                  const y = e.clientY;
                  
                  // Add some padding to prevent accidental closing
                  if (x < rect.left - 10 || x > rect.right + 10 || y < rect.top - 10 || y > rect.bottom + 150) {
                    setOpenDropdown(null);
                  }
                }}
              >
                <Link 
                  href={item.href}
                  className={`flex items-center ${isWhiteBackgroundPage ? 'text-gray-900 hover:text-ada-pink' : 'text-white hover:text-ada-pink'} transition-colors duration-200`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/30 py-2 z-50"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdownItems?.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block px-4 py-3 text-gray-800 hover:bg-ada-pink hover:text-white transition-colors duration-200 border-l-4 border-transparent hover:border-ada-pink"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/about"
              className={`${isWhiteBackgroundPage ? 'text-gray-900 hover:text-ada-pink' : 'text-white hover:text-ada-pink'} transition-colors duration-200`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link 
              href="/contact"
              className="bg-ada-pink text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200 flex items-center"
            >
              Consult an expert
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`${isWhiteBackgroundPage ? 'text-gray-900 hover:text-ada-pink' : 'text-white hover:text-ada-pink'} transition-colors duration-200`}
                >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden">
                <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isWhiteBackgroundPage ? 'bg-gray-900/10 backdrop-blur-md border-t border-gray-200' : 'bg-white/10 backdrop-blur-md border-t border-white/30'}`}>
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block w-full text-left px-3 py-2 ${isWhiteBackgroundPage ? 'text-gray-900 hover:text-ada-pink hover:bg-gray-100' : 'text-white hover:text-ada-pink hover:bg-white/20'} rounded-md transition-colors duration-200`}
                    onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="pl-6 space-y-1">
                      {item.dropdownItems.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className={`block px-3 py-2 text-sm ${isWhiteBackgroundPage ? 'text-gray-600 hover:text-ada-pink hover:bg-gray-100' : 'text-gray-300 hover:text-ada-pink hover:bg-white/10'} rounded-md transition-colors duration-200`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                    <Link
                      href="/about"
                      className={`block w-full text-left px-3 py-2 ${isWhiteBackgroundPage ? 'text-gray-900 hover:text-ada-pink hover:bg-gray-100' : 'text-white hover:text-ada-pink hover:bg-white/20'} rounded-md transition-colors duration-200`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block w-full bg-ada-pink text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Consult an expert
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
