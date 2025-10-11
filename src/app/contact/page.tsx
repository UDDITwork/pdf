'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    projectType: '',
    budget: '',
    message: '',
    howHeard: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@vatalique.com',
      description: 'We respond within 2 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      value: 'Chat with us now',
      description: '24/7 AI + Human support',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 400',
      postal: 'San Francisco, CA 94103',
      flag: '🇺🇸'
    },
    {
      city: 'New York',
      address: '456 Broadway, 10th Floor',
      postal: 'New York, NY 10013',
      flag: '🇺🇸'
    },
    {
      city: 'London',
      address: '789 Oxford Street',
      postal: 'London W1C 1DX, UK',
      flag: '🇬🇧'
    },
    {
      city: 'Singapore',
      address: '321 Orchard Road',
      postal: 'Singapore 238866',
      flag: '🇸🇬'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'We Review Your Requirements',
      description: 'Our team analyzes your needs within 24 hours',
      icon: CheckCircle
    },
    {
      number: '02',
      title: 'Schedule Discovery Call',
      description: '30-45 minute consultation to understand your goals',
      icon: Phone
    },
    {
      number: '03',
      title: 'Receive Custom Proposal',
      description: 'Detailed solution and pricing within 5 days',
      icon: Mail
    },
    {
      number: '04',
      title: 'Start Building',
      description: 'First deployment in 2-4 weeks',
      icon: ArrowRight
    }
  ];

  const industries = [
    'Healthcare',
    'Financial Services',
    'E-commerce',
    'Manufacturing',
    'Real Estate',
    'Legal Services',
    'Professional Services',
    'Education',
    'Other'
  ];

  const projectTypes = [
    'AI Agent Development',
    'Process Automation',
    'Custom Software',
    'Integration Services',
    'Consulting',
    'Not Sure Yet'
  ];

  const budgetRanges = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K+',
    'Not Sure'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-ada-pink font-semibold">LET'S TALK</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ready to Build Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-400">
              AI Workforce?
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Book a free consultation - no sales pressure, just solutions
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-ada-pink/50 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-ada-pink font-semibold mb-2">{method.value}</p>
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-ada-pink"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-ada-pink"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-ada-pink"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Industry</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ada-pink"
                    >
                      <option value="" className="bg-gray-900">Select Industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry} className="bg-gray-900">
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ada-pink"
                    >
                      <option value="" className="bg-gray-900">Select Type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-gray-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ada-pink"
                    >
                      <option value="" className="bg-gray-900">Select Budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-gray-900">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-ada-pink resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">How did you hear about us?</label>
                  <input
                    type="text"
                    name="howHeard"
                    value={formData.howHeard}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-ada-pink"
                    placeholder="Google, LinkedIn, Referral, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ada-pink text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all duration-200 flex items-center justify-center gap-2 font-semibold text-lg shadow-lg shadow-pink-500/50"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* What Happens Next */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">What Happens Next</h2>
                <div className="space-y-6">
                  {process.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="bg-gradient-to-br from-ada-pink to-purple-600 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">{step.number}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-center">
                <Clock className="h-12 w-12 text-white mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">2-Hour Response Time</h3>
                <p className="text-white/90">We respond to all inquiries within 2 hours during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Offices</h2>
            <p className="text-xl text-gray-300">We're global, but always local</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-ada-pink/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{office.flag}</div>
                <h3 className="text-xl font-bold text-white mb-3">{office.city}</h3>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-ada-pink" />
                  <div className="text-sm">
                    <p>{office.address}</p>
                    <p>{office.postal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-ada-pink to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prefer to Schedule a Call?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Pick a time that works for you - no commitment required
          </p>
          <button className="bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 font-semibold text-lg mx-auto">
            View Calendar
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

