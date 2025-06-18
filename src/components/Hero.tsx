import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 mb-8">
            <Star className="h-4 w-4 text-accent-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">New features available</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance"
          >
            Build Amazing{' '}
            <span className="gradient-text">Digital Experiences</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto text-balance"
          >
            Create stunning web applications with modern design, powerful features, and seamless user experiences that drive results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
            >
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 h-32 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-lg animate-pulse-slow"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-accent-400 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary-400 rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;