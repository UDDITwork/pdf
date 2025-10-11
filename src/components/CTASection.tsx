import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  gradient?: string;
}

export default function CTASection({ 
  title, 
  description, 
  buttonText, 
  buttonLink = '/contact',
  onButtonClick,
  gradient = 'from-ada-pink to-purple-600'
}: CTASectionProps) {
  return (
    <section className="py-20 px-6">
      <div className={`max-w-5xl mx-auto bg-gradient-to-r ${gradient} rounded-3xl p-12 text-center`}>
        <h2 className="text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-8">
          {description}
        </p>
        {onButtonClick ? (
          <button 
            onClick={onButtonClick}
            className="bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 font-semibold text-lg mx-auto"
          >
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </button>
        ) : (
          <a 
            href={buttonLink}
            className="inline-flex items-center gap-2 bg-white text-ada-pink px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold text-lg"
          >
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </a>
        )}
      </div>
    </section>
  );
}

