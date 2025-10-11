import { LucideIcon } from 'lucide-react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  color?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  features,
  color = 'bg-purple-500',
  ctaText,
  onCtaClick
}: FeatureCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-ada-pink/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className={`${color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      {features && features.length > 0 && (
        <div className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-ada-pink flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      )}
      
      {ctaText && (
        <button 
          onClick={onCtaClick}
          className="w-full bg-ada-pink/20 text-ada-pink px-6 py-3 rounded-full hover:bg-ada-pink hover:text-white transition-all duration-200 flex items-center justify-center gap-2 font-semibold"
        >
          {ctaText}
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

