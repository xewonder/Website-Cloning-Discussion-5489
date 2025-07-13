import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
        <svg
          className="absolute top-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-gray-50 lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>

      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Real-time asset</span>
              <span className="block text-blue-600">location tracking</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto lg:mx-0 text-lg text-gray-500">
              Track your assets with centimeter-level precision. Our advanced technology helps you monitor and manage your valuable resources in real-time.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start space-x-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/features"
                className="bg-white text-blue-600 border border-blue-600 py-3 px-8 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-full">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581092921461-7ead0bf0ec9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Asset tracking dashboard"
                  className="w-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-600/20 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-600/20 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;