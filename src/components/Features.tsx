import React from 'react';
import { Zap, Shield, Smartphone, Globe, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with modern technologies for instant loading and smooth interactions.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Built-in security features and best practices to protect your data and users.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices and screen sizes.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy worldwide with CDN support and optimized delivery for global audiences.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built for teams with real-time collaboration and seamless workflow integration.',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics Ready',
      description: 'Comprehensive analytics and insights to track performance and user engagement.',
      color: 'from-red-400 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Everything you need to build, deploy, and scale modern web applications with confidence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="card p-8 group cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;