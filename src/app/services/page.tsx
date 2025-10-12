'use client';

import { Star, TrendingUp, Shield, Users, Award, MessageSquare, Search, BarChart, Mail, QrCode, Smartphone, CheckCircle, ArrowRight, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Appeal to High-Intent Prospects',
      description: 'Customers are constantly evaluating their options. Approximately 97% of consumers report that business reviews influence their purchasing decisions. Internet reputation management allows you to amplify your positive business reviews across online platforms and position them in front of your target audience.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Generate Positive Business Reviews',
      description: '92% of online users don\'t trust a brand without online reviews. What\'s more, 23% said they have difficulty making a purchase decision when there are no product reviews. A reputation manager builds a data-driven review generation strategy, ensuring your business has a steady flow of verified online reviews.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Increase Customer Lifetime Value',
      description: 'Selling to existing clients is 6-7 times cheaper than generating new customers. Brand reputation management offers a unique way to promote brand transparency and build trust with your clients, showcasing your commitment to customer satisfaction.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Attract High-Performing Employees',
      description: '69% of applicants would reject a job offer from a company with a negative reputation online. Internet reputation management allows you to gauge employee experience and gather actionable insights to improve your staff retention and acquisition strategies.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart,
      title: 'Improve Your Bottom Line',
      description: 'Online reviews increase conversions by 270%. Business reviews ramp up conversion rates of higher-priced products by up to 380%. With search engine reputation management, you can build better relationships with prospects and maximize conversion channels.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'Boost Your SEO Efforts',
      description: 'Online reviews make up 15% of Google Local Pack ranking factors. By learning how to get more reviews on Google and other review sites, you generate more user-generated content (UGC), which drives qualified traffic and conversions to your landing pages.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const services = [
    {
      icon: Shield,
      title: 'Reputation Management Software',
      description: 'State-of-the-art reputation management software to facilitate your reputation management online and streamline your review marketing efforts. Our review software supports localized SMS and email campaigns at any scale, regular online reputation monitoring and social media reputation management across multiple locations.'
    },
    {
      icon: Shield,
      title: 'Online Reputation Repair',
      description: 'Our online reputation marketing expert repairs and mitigates damage from negative reviews by looking into their origins and providing solutions to fix them. We implement online reputation management SEO strategies and send requests to take down fake, offensive content related to your brand.'
    },
    {
      icon: Award,
      title: 'White Label Reputation Management',
      description: 'VATALIQUE offers white label reputation management solutions to improve your daily operations and help you focus on your core business. Get access to our software and brandable reputation management online reports you can use during client presentations and calls.'
    },
    {
      icon: MessageSquare,
      title: 'Review Response',
      description: 'Companies that provide a review response to at least 25% of their business reviews earn an additional 35% revenue. We analyze your customer sentiment and craft well-thought-out and sincere review responses that adopt your unique brand voice.'
    },
    {
      icon: Search,
      title: 'Review Monitoring',
      description: 'We set up a program to monitor and alert you about new reviews, whether positive or negative, so you always know where your online reputation stands. We leverage our online reputation management software to speed up your online review monitoring process and integrate with 100+ major review sites.'
    },
    {
      icon: Star,
      title: 'Review Generation',
      description: 'Every additional one-star Yelp rating and customer review can increase your revenue by as high as 9%. Our review management team builds and implements an automated process and system to drive new, positive reviews for your business month-over-month (MoM).'
    },
    {
      icon: TrendingUp,
      title: 'SEO Reputation Management',
      description: 'Search engine reputation management involves promoting positive and desirable content and controlling the information accessible to the online community. We take care of everything – from on-site optimization and listing optimization to web reputation management.'
    },
    {
      icon: BarChart,
      title: 'Survey Campaign Management',
      description: 'Keep a pulse on your target audience and existing customers using our white label reputation management software. Our reputation monitoring team creates various types of customer satisfaction surveys to gather market insights and provide you with actionable insights.'
    },
    {
      icon: Globe,
      title: 'Online Product Reviews Management',
      description: 'Propel your eCommerce business forward with VATALIQUE\'s online product reviews management service. We use smart online review management software to facilitate efficient review monitoring across your product listings on Amazon, Best Buy, Walmart, Target Plus and more.'
    },
    {
      icon: CheckCircle,
      title: 'Business Listings Management',
      description: 'Outsource your manual citation management tasks to our reputation management company and save time, effort and money. We perform regular business listings audits to ensure all your brand information across local citations is SEO-optimized and up-to-date.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Reach out to your best customers at the right moment with automated SMS marketing and email marketing services. We create personalized email and SMS review request templates to help you gain more customer reviews and launch targeted reputation management campaigns.'
    },
    {
      icon: QrCode,
      title: 'QR Codes',
      description: 'Our corporate online reputation management agency makes it easy for you to generate reviews with QR codes. We create customized QR codes within one day – free of charge! Simply send the QR code to your client or have them scan it for reviews where it is convenient.'
    },
    {
      icon: Smartphone,
      title: 'Two-Way SMS',
      description: 'Leverage two-way SMS marketing to launch review generation and customer survey campaigns and build a robust relationship with your target audience. Our two-way text messaging service allows you to strike up a conversation with your customers and provide a better customer experience.'
    }
  ];

  const caseStudies = [
    {
      type: 'RENEWABLE ENERGY COMPANY',
      stat1: '+592',
      label1: 'New Positive Reviews in 5 Months',
      stat2: '55x',
      label2: 'More Positive Reviews Added in 6 Months',
      color: 'from-green-500 to-emerald-500'
    },
    {
      type: 'PLUMBING COMPANY',
      stat1: '+357',
      label1: 'New Positive Reviews in 13 Months',
      stat2: '23x',
      label2: 'More Positive Reviews Added in 1 Year',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'MULTI-LOCATION RESTAURANT',
      stat1: '+15,901',
      label1: 'New Positive Reviews in 5 Months',
      stat2: '+20%',
      label2: 'Total Online Reviews Added in 5 Months',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '82%', label: 'of consumers won\'t transact with retailers under 3 stars' },
    { number: '97%', label: 'of consumers read online reviews before purchasing' },
    { number: '92%', label: 'of users don\'t trust brands without reviews' },
    { number: '86%', label: 'of prospects lost with 1-2 star ratings' }
  ];

  const testimonials = [
    {
      name: 'Rishav',
      location: 'Begusarai, Bihar',
      phone: '8936013767',
      quote: 'VATALIQUE transformed our online presence completely. Within just 3 months, we saw a 300% increase in positive reviews and our Google rating improved from 3.2 to 4.8 stars. The team\'s expertise in reputation management is unmatched.',
      rating: 5
    },
    {
      name: 'Kartikey Sharma',
      location: 'Jaipur, India (K Square Classes Coaching Services)',
      phone: '6367128700',
      quote: 'As a coaching institute, our reputation is everything. VATALIQUE helped us build trust with parents and students by managing our online reviews professionally. Our enrollment increased by 150% after implementing their reputation management strategy.',
      rating: 5
    },
    {
      name: 'Mehul Sharma',
      location: 'Jodhpur, India (Bus Services)',
      phone: '7877387228',
      quote: 'Running a bus service company, customer trust is crucial for our business. VATALIQUE\'s reputation management services helped us address negative feedback effectively and showcase our positive customer experiences. Our booking rates have doubled.',
      rating: 5
    },
    {
      name: 'Ankit Kumar',
      location: 'Delhi, India',
      phone: '7456886877',
      quote: 'The team at VATALIQUE is exceptional. They not only helped us recover from a reputation crisis but also built a robust system to maintain positive reviews. Our customer satisfaction scores have never been higher.',
      rating: 5
    },
    {
      name: 'Priya Singh',
      location: 'Mumbai, India',
      phone: '8368824707',
      quote: 'VATALIQUE\'s white-label reputation management solution has been a game-changer for our agency. We can now offer comprehensive reputation services to our clients with professional reporting and excellent results.',
      rating: 5
    }
  ];

  const whyChoose = [
    {
      icon: Star,
      title: 'Tailored Reputation Marketing Services',
      description: 'We believe there is no one-size-fits-all approach to brand reputation management. Our team performs in-depth market research and campaign analysis to create custom online reputation services that meet your needs and industry standards.'
    },
    {
      icon: BarChart,
      title: 'Comprehensive Monthly Reports',
      description: 'We treat all our clients as partners in business reputation management. We give you access to our reputation management tools, dashboard and campaign reports so you can track your online reviews anytime, anywhere.'
    },
    {
      icon: Users,
      title: 'Dedicated Account Manager',
      description: 'We assign a dedicated reputation manager to handle your online review monitoring and reputation management campaign. You have a single point of contact for all your campaign concerns with support available on weekends and holidays.'
    },
    {
      icon: Shield,
      title: 'Robust Reputation Management Tools',
      description: 'We leverage advanced online reputation management tools that streamline processes. As one of the most trusted review management companies, we ensure these tools have undergone a strict testing process.'
    },
    {
      icon: Globe,
      title: 'Diverse Industry Expertise',
      description: 'No matter your niche expertise, we can help you. VATALIQUE is one of the few reputation management agencies that provide online reputation services for thousands of businesses from across industries.'
    },
    {
      icon: TrendingUp,
      title: 'Smart Reputation Management Strategy',
      description: 'To repair a poor online reputation and maintain a positive brand image, you need data-driven online reputation management solutions. We perform extensive reputation analysis to determine the current state of your online image.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-ada-pink/10 backdrop-blur-md rounded-full border border-ada-pink/20">
            <span className="text-ada-pink font-semibold">ONLINE REPUTATION MANAGEMENT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Gain Customer Trust and
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ada-pink to-purple-600">
              Propel Your Brand Success
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Build a positive reputation that matches your vision and goals. Take charge of your reputation online and establish your brand as a market leader.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ada-pink text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all duration-200 font-semibold text-lg"
            >
              Get My Free Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
            <div className="text-center sm:text-left">
              <p className="text-gray-600 text-sm">Or call us directly:</p>
              <a href="tel:9569253552" className="text-2xl font-bold text-ada-pink hover:text-pink-600 transition-colors">
                9569253552
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Is Your Business Represented Fairly Online?
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                A company's online reputation is responsible for at least half its market value. Statistics show nine out of 10 consumers read online reviews before making a purchase and nearly 62% will not buy from a company that censors business reviews. Furthermore, brands that receive only one or two stars on review platforms such as Yelp or Google risk losing 86% of their prospects.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Don't let a single negative comment or fake customer review ruin your reputation online. Capitalize on goal-driven business reputation services and learn how to get more reviews on Google and other platforms.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-0b6ac08/thriveagency.com/files/business-represented.svg" 
                alt="Business represented online with 5-star reviews" 
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Numbers Don't Lie</h2>
            <p className="text-xl text-gray-700">Online reputation directly impacts your bottom line</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:border-ada-pink hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-bold text-ada-pink mb-4">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Reputation Management */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Is Reputation Management?</h2>
            <p className="text-xl text-gray-700">Make a Great First Impression With Your Target Audience</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 shadow-lg">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Your online reputation serves as a trust signal that determines if prospects will do business with you. According to a study by the University of Technology Sydney, the majority of consumers are willing to pay more for a product or service from a company with a stellar reputation online.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Reputation management is the practice of safeguarding the online reputation of an individual, company or organization to shape public perception. Internet reputation management ensures online users and search engines find the right materials when they search for your brand online.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Review generation', 'Reputation monitoring', 'Review marketing', 'Online reputation repair', 'Survey campaign management', 'Search engine optimization (SEO) reputation management'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-ada-pink flex-shrink-0" />
                  <span className="text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Your Business Needs Reputation Management</h2>
            <p className="text-xl text-gray-700">Stay on Top of Your Brand Mentions and Search Results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-ada-pink hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consequences of Poor Reputation */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Consequences of a Poor Reputation Online</h2>
            <p className="text-xl text-gray-700 mb-8">Can a business really afford to ignore search engine reputation management?</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 shadow-lg">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              All it takes is one dissatisfied customer to negatively impact your brand's online reputation. Orders, bookings and subscriptions run the risk of being canceled if negative online reviews plague your online profiles. These can ripple through all your marketing efforts, affecting more than just your sales.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Additionally, a poor company reputation management strategy can lead to:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Low search engine rankings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Loss of revenue</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Decreased profitability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Damaged brand reputation</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Diminished trust</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Increased marketing expenses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Low customer engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <span className="text-lg text-gray-900">Reduced customer and employee retention rate</span>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">
              Your business's online reputation is important, so make sure you are working with a reputation management company that is committed to making a difference. Contact VATALIQUE today to learn how to get more reviews and improve your SEO reputation management strategy.
            </p>
          </div>
        </div>
      </section>

      {/* What Does Your Online Reputation Look Like */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Does Your Online Reputation Look Like?
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Win Back Unhappy Customers and Boost Your Client Retention Rate
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many businesses treat digital marketing as a set-and-forget way of building an online reputation. However, online marketing entails more than launching local SEO and social media marketing campaigns.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Even if you have a robust digital marketing strategy in place, you still run the risk of increasing your customer churn by 15% if you don't engage actively with your customers. Moreover, no matter how many followers you have on social media, unless you respond to customer reviews, your followers will only see you as a business page looking to earn profits.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                What does your online reputation say about your company? Does your corporate online reputation management strategy bring profit or do more harm than good to your business?
              </p>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">Synup's recent State of Retail report revealed that a whopping 82% of consumers would not transact with a retailer with less than 3 stars.</span>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A BrightLocal survey also found that online users read 10 or fewer online reviews before making a decision.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nearly 23% of consumers consider online reviews that are no more than two weeks old as credible online resources.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Only 14% of people transact with a business with a 1- or 2-star rating.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-0b6ac08/thriveagency.com/files/reputationlook.svg" 
                alt="Woman with 5-star rating representing online reputation" 
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Results That Speak For Themselves</h2>
            <p className="text-xl text-gray-700">Real businesses, real growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-ada-pink hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${study.color} rounded-full text-white text-sm font-semibold mb-6`}>
                  {study.type}
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-5xl font-bold text-ada-pink mb-2">{study.stat1}</div>
                    <div className="text-gray-700">{study.label1}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-gray-900 mb-2">{study.stat2}</div>
                    <div className="text-gray-700">{study.label2}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              <span className="text-ada-pink font-semibold">From Pogo Energy Vice President Eric M.:</span><br />
              "I couldn't be happier with choosing [VATALIQUE]. We use them in an ongoing way and also monthly to help encourage our customers to provide us feedback on public reviews. VATALIQUE creates an easy way for my customers to provide feedback to my company and to the general public. We were consistently told in private surveys that our customers loved us, but we didn't have a good/easy way for them to transfer their strong, positive opinions to Google and Facebook. VATALIQUE helped us achieve over 1,000 reviews in a few short months."
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Online Reputation Services</h2>
            <p className="text-xl text-gray-700">Extend Beyond Generating Positive Customer Reviews</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-ada-pink hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="h-10 w-10 text-ada-pink mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-700">Real testimonials from businesses that transformed their online reputation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-ada-pink hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  <div className="text-ada-pink text-sm font-medium">{testimonial.phone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VATALIQUE for Reputation Management</h2>
            <p className="text-xl text-gray-700">Get Professional Solutions That Drive Business Growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-ada-pink hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-ada-pink to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
            <p className="text-xl text-gray-700">
              In 2020, Neil Patel acknowledged our reputation marketing firm as the <span className="text-ada-pink font-bold">third-best online reputation management company in the world</span>. This recognition speaks volumes about the quality of our reputation marketing services.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-ada-pink to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Begin Your Reputation Management Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get More 5-Star Reviews, Earn More Online Trust
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold text-lg"
          >
            Schedule Your Free Demo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

