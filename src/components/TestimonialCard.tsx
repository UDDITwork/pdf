interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
}

export default function TestimonialCard({ quote, author, role, company, image }: TestimonialCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-ada-pink/50 transition-all duration-300">
      <div className="flex items-start gap-4 mb-6">
        <div className="text-6xl text-ada-pink leading-none">&ldquo;</div>
        <p className="text-gray-300 text-lg italic leading-relaxed pt-4">{quote}</p>
      </div>
      
      <div className="flex items-center gap-4">
        {image ? (
          <img src={image} alt={author} className="w-12 h-12 rounded-full" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ada-pink to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        <div>
          <div className="text-white font-semibold">{author}</div>
          <div className="text-gray-400 text-sm">
            {role}{company && ` at ${company}`}
          </div>
        </div>
      </div>
    </div>
  );
}

