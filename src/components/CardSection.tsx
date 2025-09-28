'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CardSection() {
  const [currentValues, setCurrentValues] = useState({
    interactions: 0,
    productivity: 0,
    resolution: 0,
    uptime: 0
  });

  const controls = useAnimation();

  useEffect(() => {
    // Animate values from 0 to target values
    const animateValues = () => {
      const targets = {
        interactions: 5.5,
        productivity: 8,
        resolution: 83,
        uptime: 99.9
      };

      const duration = 3000; // 3 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCurrentValues({
          interactions: targets.interactions * progress,
          productivity: targets.productivity * progress,
          resolution: targets.resolution * progress,
          uptime: targets.uptime * progress
        });

        if (step >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start animation after a short delay
    const timer = setTimeout(animateValues, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Animate corner radius continuously
    const animateCorners = () => {
      controls.start({
        borderRadius: [0, 5, 20, 5, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    };

    animateCorners();
  }, [controls]);

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four Stat Cards - Dynamic Corners and Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {/* First Card - Dark Charcoal/Purple */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            animate={controls}
            className="bg-gray-800 text-white p-8 shadow-lg h-80 flex flex-col justify-between"
            style={{ borderRadius: 0 }}
          >
            <div className="text-4xl md:text-5xl font-bold">
              {currentValues.interactions.toFixed(1)}B
            </div>
            <div className="text-white/90 text-sm md:text-base text-center">AI-powered interactions delivered</div>
          </motion.div>

          {/* Second Card - Light Pink */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            animate={controls}
            className="bg-pink-200 text-gray-900 p-8 shadow-lg h-80 flex flex-col justify-between"
            style={{ borderRadius: 0 }}
          >
            <div className="text-4xl md:text-5xl font-bold">
              {Math.round(currentValues.productivity)}X
            </div>
            <div className="text-gray-700 text-sm md:text-base text-center">faster development with AI automation</div>
          </motion.div>

          {/* Third Card - Light Blue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            animate={controls}
            className="bg-blue-200 text-gray-900 p-8 shadow-lg h-80 flex flex-col justify-between"
            style={{ borderRadius: 0 }}
          >
            <div className="text-4xl md:text-5xl font-bold">
              {Math.round(currentValues.resolution)}%
            </div>
            <div className="text-gray-700 text-sm md:text-base text-center">of business processes automated with AI</div>
          </motion.div>

          {/* Fourth Card - Dark Green */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            animate={controls}
            className="bg-green-800 text-white p-8 shadow-lg h-80 flex flex-col justify-between"
            style={{ borderRadius: 0 }}
          >
            <div className="text-4xl md:text-5xl font-bold">
              {currentValues.uptime.toFixed(1)}%+
            </div>
            <div className="text-white/90 text-sm md:text-base text-center">client satisfaction with our AI solutions</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
