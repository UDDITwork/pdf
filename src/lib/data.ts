import { CaseStudy, GridSquare } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'zammernow',
    title: 'AI-Powered Content Generation',
    company: 'Zammernow.com',
    description: 'Revolutionary AI platform for content creation, article writing, and ad development',
    metrics: [
      { value: '85%', label: 'faster content creation' },
      { value: '10X', label: 'more productive content team' },
      { value: '99.9%', label: 'content accuracy rate' }
    ],
    testimonial: {
      text: "Our AI solutions have transformed our content creation process, enabling us to produce high-quality articles and ad copy efficiently. The AI-powered workflows have revolutionized our approach to content generation.",
      author: 'Content Team Lead',
      position: 'AI Content Specialist',
      company: 'Zammernow.com'
    },
    image: 'https://via.placeholder.com/400x300/FF6B9D/FFFFFF?text=Zammernow+AI+Solutions',
    color: 'orange'
  },
  {
    id: 'gantavyam',
    title: 'Digital Transformation with AI',
    company: 'Gantavyam.site',
    description: 'Complete digital solutions including AI-powered web development and business automation',
    metrics: [
      { value: '70%', label: 'faster development cycles' },
      { value: '6X', label: 'increase in client satisfaction' },
      { value: '95%', label: 'project delivery success rate' }
    ],
    testimonial: {
      text: "The AI-powered development solutions have allowed us to deliver exceptional digital experiences to our clients. Our workflow automation has significantly improved our project delivery capabilities.",
      author: 'Development Team',
      position: 'AI Development Specialists',
      company: 'Gantavyam.site'
    },
    image: 'https://via.placeholder.com/400x300/FFD93D/000000?text=Gantavyam+AI+Development',
    color: 'yellow'
  },
  {
    id: 'richieai',
    title: 'Financial AI Solutions',
    company: 'Richie AI',
    description: 'AI-powered financial planning and investment guidance for smarter decision-making',
    metrics: [
      { value: '90%', label: 'improved financial planning accuracy' },
      { value: '4X', label: 'faster investment analysis' },
      { value: '98%', label: 'client satisfaction with AI guidance' }
    ],
    testimonial: {
      text: "Our AI financial companion has revolutionized how we approach financial planning. The intelligent automation and personalized guidance have helped our clients achieve their financial goals more effectively.",
      author: 'Financial Team',
      position: 'AI Financial Advisors',
      company: 'Richie AI'
    },
    image: 'https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Richie+AI+Financial+Solutions',
    color: 'blue'
  },
  {
    id: 'rajputfir',
    title: 'AI-Enhanced Safety Solutions',
    company: 'Rajput FIR Services',
    description: 'Comprehensive fire safety solutions with AI-powered monitoring and compliance automation',
    metrics: [
      { value: '80%', label: 'reduction in safety incidents' },
      { value: '5X', label: 'faster compliance reporting' },
      { value: '100%', label: 'safety compliance rate' }
    ],
    testimonial: {
      text: "The AI-powered safety solutions have transformed our fire safety operations. The automated monitoring and compliance systems ensure we maintain the highest safety standards while reducing manual oversight.",
      author: 'Safety Team',
      position: 'AI Safety Specialists',
      company: 'Rajput FIR Services'
    },
    image: 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Rajput+FIR+AI+Safety',
    color: 'brown'
  }
];

export const gridSquares: GridSquare[] = Array.from({ length: 100 }, (_, i) => ({
  id: `square-${i}`,
  color: i % 4 === 0 ? 'ada-pink' : i % 4 === 1 ? 'ada-blue' : i % 4 === 2 ? 'ada-green' : 'ada-purple',
  isActive: false,
  delay: Math.random() * 2
}));

export const layeredBoxes = [
  {
    id: 'orange-box',
    color: 'ada-orange',
    content: 'build AI solutions that scale beyond traditional capabilities',
    position: 1,
    isOverlapping: false
  },
  {
    id: 'yellow-box',
    color: 'ada-yellow',
    content: 'transform businesses with intelligent automation',
    position: 2,
    isOverlapping: false
  },
  {
    id: 'blue-box',
    color: 'ada-blue',
    content: 'create AI agents that work 24/7 for your success',
    position: 3,
    isOverlapping: false
  }
];
