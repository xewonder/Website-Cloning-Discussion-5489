import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Precise Location Tracking Anywhere
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our advanced positioning technology works indoors and outdoors, 
              providing centimeter-level accuracy for all your assets. From 
              warehouses to construction sites, WaveLoc delivers reliable tracking 
              in any environment.
            </p>
            <ul className="space-y-4">
              {[
                'Indoor & outdoor positioning',
                'Real-time location updates',
                'Historical movement tracking',
                'Custom geofencing capabilities',
                'Multi-floor support for complex buildings'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                alt="Location tracking map" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-blue-600/10 blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-blue-600/10 blur-2xl"></div>
            
            {/* Animated dot showing real-time tracking */}
            <motion.div 
              className="absolute top-1/3 left-1/2 h-4 w-4 rounded-full bg-blue-600"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;