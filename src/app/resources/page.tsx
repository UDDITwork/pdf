'use client';

import { useState } from 'react';
import { BookOpen, Video, Download, Calculator, FileText, Search, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'articles', name: 'Articles', icon: FileText },
    { id: 'videos', name: 'Videos', icon: Video },
    { id: 'whitepapers', name: 'Whitepapers', icon: Download },
    { id: 'tools', name: 'Tools', icon: Calculator }
  ];

  const featuredResources = [
    {
      id: 1,
      type: 'whitepaper',
      title: 'The Complete Guide to Enterprise AI Agents',
      description: 'A comprehensive 50-page guide covering everything from AI agent fundamentals to enterprise implementation strategies.',
      image: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      author: 'AI Research Team',
      readTime: '45 min read',
      downloads: '2.4K',
      category: 'whitepapers'
    },
    {
      id: 2,
      type: 'article',
      title: 'ROI of Automation: 2025 Benchmark Report',
      description: 'Industry benchmarks and real-world data showing the financial impact of AI automation across 15+ industries.',
      image: 'bg-gradient-to-br from-green-500 to-emerald-600',
      author: 'Sarah Johnson',
      readTime: '12 min read',
      views: '15.3K',
      category: 'articles'
    },
    {
      id: 3,
      type: 'video',
      title: 'Building Your First AI Agent: Step-by-Step Tutorial',
      description: 'Watch as we build a complete customer service AI agent from scratch in under 30 minutes.',
      image: 'bg-gradient-to-br from-red-500 to-pink-600',
      author: 'Michael Chen',
      duration: '28 min',
      views: '8.7K',
      category: 'videos'
    }
  ];

  const articles = [
    {
      title: 'How to Choose the Right AI Agent Platform',
      excerpt: 'A comprehensive comparison of AI agent platforms and what to look for when selecting one for your enterprise.',
      readTime: '8 min',
      category: 'articles',
      date: 'Oct 5, 2025'
    },
    {
      title: 'Zapier vs n8n vs Make.com: Which is Best?',
      excerpt: 'An in-depth comparison of the three leading automation platforms, with pros, cons, and use cases.',
      readTime: '10 min',
      category: 'articles',
      date: 'Oct 3, 2025'
    },
    {
      title: '10 Processes Every Business Should Automate First',
      excerpt: 'The highest-ROI automation opportunities that deliver results in weeks, not months.',
      readTime: '6 min',
      category: 'articles',
      date: 'Sep 28, 2025'
    },
    {
      title: 'AI Security & Compliance: What You Need to Know',
      excerpt: 'Essential security considerations and compliance requirements for enterprise AI deployment.',
      readTime: '15 min',
      category: 'articles',
      date: 'Sep 25, 2025'
    }
  ];

  const whitepapers = [
    {
      title: 'AI Implementation Playbook',
      description: 'A step-by-step guide to implementing AI in your organization',
      pages: '38 pages',
      downloads: '1.8K'
    },
    {
      title: 'From Manual to Automated: A 90-Day Roadmap',
      description: 'Practical framework for transforming your operations in 90 days',
      pages: '42 pages',
      downloads: '2.1K'
    },
    {
      title: 'The State of AI Automation 2025',
      description: 'Industry trends, adoption rates, and future predictions',
      pages: '55 pages',
      downloads: '3.2K'
    }
  ];

  const videos = [
    {
      title: 'AI Agent Basics: 10-Part Series',
      description: 'Complete beginner to advanced series on building AI agents',
      duration: '4 hrs total',
      views: '12.5K'
    },
    {
      title: 'Live Demo: Customer Service AI in Action',
      description: 'Watch a real customer service AI agent handle live queries',
      duration: '22 min',
      views: '8.3K'
    },
    {
      title: 'Enterprise AI Implementation Webinar',
      description: 'Monthly webinar on AI implementation best practices',
      duration: '1 hr',
      views: '5.7K'
    }
  ];

  const tools = [
    {
      title: 'ROI Calculator',
      description: 'Calculate your potential savings with AI automation',
      icon: Calculator,
      color: 'bg-green-500'
    },
    {
      title: 'Automation Assessment Tool',
      description: 'Identify your best automation opportunities',
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      title: 'AI Readiness Quiz',
      description: 'Assess your organization\'s AI readiness in 5 minutes',
      icon: FileText,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-ada-pink font-semibold">KNOWLEDGE CENTER</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Learn. Implement.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-400">
              Scale.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert insights on AI, automation, and digital transformation
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, guides, videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-ada-pink"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-ada-pink text-white shadow-lg shadow-pink-500/50'
                      : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:border-ada-pink/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`${resource.image} h-48 flex items-center justify-center`}>
                  <div className="text-6xl">
                    {resource.type === 'whitepaper' && <Download className="h-16 w-16 text-white" />}
                    {resource.type === 'article' && <FileText className="h-16 w-16 text-white" />}
                    {resource.type === 'video' && <Video className="h-16 w-16 text-white" />}
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-ada-pink/20 text-ada-pink text-xs font-semibold rounded-full mb-3">
                    {resource.type.toUpperCase()}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{resource.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {resource.readTime || resource.duration}
                    </span>
                  </div>
                  <button className="w-full bg-ada-pink/20 text-ada-pink px-4 py-3 rounded-full hover:bg-ada-pink hover:text-white transition-all duration-200 flex items-center justify-center gap-2 font-semibold">
                    {resource.type === 'whitepaper' ? 'Download' : 'View'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {(selectedCategory === 'all' || selectedCategory === 'articles') && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-ada-pink/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">{article.date}</span>
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-gray-300 mb-4">{article.excerpt}</p>
                  <button className="text-ada-pink hover:text-pink-400 flex items-center gap-2 font-semibold">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Whitepapers */}
      {(selectedCategory === 'all' || selectedCategory === 'whitepapers') && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Whitepapers & E-books</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whitepapers.map((paper, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-ada-pink/50 transition-all duration-300"
                >
                  <Download className="h-12 w-12 text-ada-pink mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{paper.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{paper.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{paper.pages}</span>
                    <span>{paper.downloads} downloads</span>
                  </div>
                  <button className="w-full bg-ada-pink text-white px-4 py-3 rounded-full hover:bg-pink-600 transition-all duration-200 flex items-center justify-center gap-2 font-semibold">
                    Download PDF
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos */}
      {(selectedCategory === 'all' || selectedCategory === 'videos') && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Video Library</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-ada-pink/50 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl h-40 flex items-center justify-center mb-4">
                    <Video className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{video.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{video.duration}</span>
                    <span>{video.views} views</span>
                  </div>
                  <button className="w-full bg-ada-pink/20 text-ada-pink px-4 py-3 rounded-full hover:bg-ada-pink hover:text-white transition-all duration-200 flex items-center justify-center gap-2 font-semibold">
                    Watch Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools & Calculators */}
      {(selectedCategory === 'all' || selectedCategory === 'tools') && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Interactive Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-ada-pink/50 transition-all duration-300 text-center"
                  >
                    <div className={`${tool.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                    <p className="text-gray-300 mb-6">{tool.description}</p>
                    <button className="w-full bg-ada-pink text-white px-4 py-3 rounded-full hover:bg-pink-600 transition-all duration-200 flex items-center justify-center gap-2 font-semibold">
                      Launch Tool
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-ada-pink to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get Weekly AI Insights
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 25,000+ professionals receiving our newsletter
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white"
            />
            <button className="bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

