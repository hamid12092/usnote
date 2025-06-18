import React from 'react';
import { CheckCircle, Award, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { number: '10K+', label: 'Happy Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Countries' },
    { number: '24/7', label: 'Support' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We focus on delivering exceptional value and solving real problems for our users.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every feature is crafted with attention to detail and tested for reliability.',
    },
    {
      icon: Heart,
      title: 'User Centric',
      description: 'Our users are at the heart of everything we do and every decision we make.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Our Story</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're passionate about creating digital experiences that make a difference. Our team combines creativity with technical expertise to deliver solutions that exceed expectations.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Modern, scalable architecture',
                'User-focused design principles',
                'Continuous innovation and improvement',
                'Dedicated customer support',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 flex items-start space-x-4"
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg flex-shrink-0">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;