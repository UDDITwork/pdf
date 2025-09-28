'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface DynamicGridProps {
  squares: any[];
}

export default function DynamicGrid({ squares }: DynamicGridProps) {
  const [hoveredSquare, setHoveredSquare] = useState<string | null>(null);

  // Generate grid squares - mostly gray with some colored ones
  const generateGridSquares = () => {
    const squares = [];
    const totalSquares = 400; // 20x20 grid
    
    // Define positions for colored squares (matching reference)
    const coloredSquares = [
      { id: 'green1', color: 'bg-green-800', position: 85 }, // bottom-left quadrant
      { id: 'green2', color: 'bg-green-800', position: 95 }, // bottom-right quadrant
      { id: 'yellow1', color: 'bg-yellow-400', position: 105 }, // bottom-left below orange
      { id: 'yellow2', color: 'bg-yellow-400', position: 25 }, // top-left above orange
      { id: 'blue1', color: 'bg-blue-300', position: 35 }, // top-right above orange
      { id: 'blue2', color: 'bg-blue-300', position: 165 }, // bottom-center below orange
      { id: 'brown1', color: 'bg-amber-800', position: 45 }, // top-center above orange
    ];

    for (let i = 0; i < totalSquares; i++) {
      const coloredSquare = coloredSquares.find(cs => cs.position === i);
      squares.push({
        id: `square-${i}`,
        color: coloredSquare ? coloredSquare.color : 'bg-gray-200',
        isColored: !!coloredSquare
      });
    }
    
    return squares;
  };

  const gridSquares = generateGridSquares();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Success Stories
          </h2>
        </motion.div>

        {/* Grid Container */}
        <div className="relative">
          {/* Grid Background */}
          <div 
            className="grid gap-2 max-w-6xl mx-auto"
            style={{ 
              gridTemplateColumns: 'repeat(20, 1fr)',
              width: '100%'
            }}
          >
            {gridSquares.map((square) => (
              <motion.div
                key={square.id}
                className={`w-6 h-6 transition-all duration-300 ${
                  square.color
                } ${
                  hoveredSquare === square.id ? 'scale-110 shadow-lg' : ''
                }`}
                onMouseEnter={() => setHoveredSquare(square.id)}
                onMouseLeave={() => setHoveredSquare(null)}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              />
            ))}
          </div>

          {/* Central Orange Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-orange-500 p-8 md:p-12 text-center max-w-md mx-auto shadow-2xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight"
              >
                elevate your<br />
                customer<br />
                experience today
              </motion.h3>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200 flex items-center space-x-2 mx-auto"
              >
                <span>Book a demo</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
