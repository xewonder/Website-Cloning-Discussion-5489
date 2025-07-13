import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-blue-700">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to transform your asset management?
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Join hundreds of companies that trust WaveLoc for their critical asset tracking needs. Get started today with a free demo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-700 py-3 px-8 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Request a Demo
            </Link>
            <Link
              to="/features"
              className="bg-transparent text-white border border-white py-3 px-8 rounded-full font-medium hover:bg-blue-800 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;