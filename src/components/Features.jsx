import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiMap, 
  FiClock, 
  FiAlertCircle, 
  FiBarChart2, 
  FiLock, 
  FiSmartphone,
  FiWifi // Add WiFi icon
} from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Features = () => {
  const features = [
    {
      icon: FiMap,
      title: 'Precise Tracking',
      description: 'Track assets with centimeter-level precision using our advanced positioning technology.',
    },
    {
      icon: FiWifi, // Add WiFi hotspot feature
      title: 'Built-in WiFi Hotspot',
      description: 'Connect and manage tracking devices easily with integrated WiFi hotspot functionality.',
    },
    {
      icon: FiClock,
      title: 'Real-time Updates',
      description: 'Get instant updates on asset location and status for improved operational efficiency.',
    },
    {
      icon: FiAlertCircle,
      title: 'Intelligent Alerts',
      description: 'Receive proactive alerts when assets move outside designated zones or require attention.',
    },
    {
      icon: FiBarChart2,
      title: 'Advanced Analytics',
      description: 'Gain insights from comprehensive analytics to optimize asset utilization and workflows.',
    },
    {
      icon: FiLock,
      title: 'Enterprise Security',
      description: 'Protect your data with enterprise-grade security and role-based access controls.',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Access',
      description: 'Access your asset tracking dashboard from any device with our responsive web and mobile apps.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our platform offers everything you need to track and manage your assets effectively.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5">
                <SafeIcon icon={feature.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;