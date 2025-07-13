import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="mr-2 bg-blue-600 rounded-full p-1 flex items-center justify-center">
        <div className="h-6 w-6 flex items-center justify-center">
          <div className="h-3 w-3 bg-white rounded-full"></div>
          <div className="absolute h-5 w-5 border-2 border-white rounded-full opacity-50"></div>
        </div>
      </div>
      <span className="text-xl font-bold text-gray-800">WaveLoc</span>
    </motion.div>
  );
};

export default Logo;