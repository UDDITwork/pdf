'use client';

import { Target, Zap, Users, Shield, Award, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push boundaries, not buzzwords. Real solutions, not hype.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success in ROI, not features. Your growth is our metric.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Your success is our success. We&apos;re in this together, long-term.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'No black boxes, no hidden costs. Clear communication, always.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years in Business' },
    { number: '500+', label: 'Clients Served' },
    { number: '40+', label: 'Countries' },
    { number: '10M+', label: 'Tasks Automated' },
    { number: '50+', label: 'Team Members' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const leadership = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Co-Founder',
      bio: 'Former AI researcher at Google. Built enterprise AI systems serving 100M+ users.',
      image: 'bg-gradient-to-br from-purple-500 to-indigo-500'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Tesla engineering lead. Passionate about practical AI that works.',
      image: 'bg-gradient-to-br from-pink-500 to-red-500'
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Product',
      bio: '15 years building enterprise software. Stanford MBA. Product visionary.',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      name: 'Emily Johnson',
      role: 'VP of Customer Success',
      bio: 'Former McKinsey consultant. Obsessed with client outcomes and ROI.',
      image: 'bg-gradient-to-br from-green-500 to-emerald-500'
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: '🔒' },
    { name: 'ISO 27001', icon: '✅' },
    { name: 'GDPR Compliant', icon: '🇪🇺' },
    { name: 'AWS Partner', icon: '☁️' },
    { name: 'Microsoft Partner', icon: '💻' },
    { name: 'Google Cloud Partner', icon: '🌐' }
  ];

  const timeline = [
    { year: '2020', event: 'Founded with vision to democratize AI', icon: '🚀' },
    { year: '2021', event: 'First 100 clients, $2M ARR', icon: '💰' },
    { year: '2022', event: 'Series A funding, expanded to 20 countries', icon: '🌍' },
    { year: '2023', event: 'Launched AI Agent platform, 5M tasks automated', icon: '🤖' },
    { year: '2024', event: '500+ enterprise clients, $25M ARR', icon: '📈' },
    { year: '2025', event: 'Global expansion, AI innovation awards', icon: '🏆' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-ada-pink font-semibold">OUR STORY</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            We Build AI That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-400">
              Actually Works
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Founded by engineers, trusted by enterprises, obsessed with results
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-ada-pink to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To democratize AI and automation for businesses of all sizes, making enterprise-grade technology accessible to everyone.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A world where every business has an AI workforce, enabling humans to focus on creativity, strategy, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-ada-pink/50 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">By The Numbers</h2>
            <p className="text-xl text-gray-300">Our impact in measurable terms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className="text-4xl font-bold text-ada-pink mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-300">The team driving innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-ada-pink/50 transition-all duration-300"
              >
                <div className={`${leader.image} h-64 flex items-center justify-center`}>
                  <div className="text-6xl font-bold text-white">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-ada-pink font-semibold mb-3">{leader.role}</p>
                  <p className="text-gray-300 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300">Key milestones that shaped our story</p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-ada-pink/50 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="text-5xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-ada-pink">{item.year}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-ada-pink to-transparent"></div>
                    </div>
                    <p className="text-lg text-gray-300">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-gray-300">Trusted, secure, and compliant</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:border-ada-pink/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <div className="text-white font-semibold text-sm">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-ada-pink to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We&apos;re always looking for talented people who share our vision
          </p>
          <button className="bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 font-semibold text-lg mx-auto">
            View Open Positions
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

