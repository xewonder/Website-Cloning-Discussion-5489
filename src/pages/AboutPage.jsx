import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTASection from '../components/CTASection';

const AboutPage = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Precision',
      description: 'We are committed to delivering the highest level of accuracy in asset tracking and location data.'
    },
    {
      icon: FiUsers,
      title: 'Customer Focus',
      description: 'Our customers\' success drives everything we do. We listen, adapt, and innovate based on their needs.'
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We strive for excellence in our technology, service, and every customer interaction.'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible in location tracking technology.'
    }
  ];

  const team = [
    {
      name: 'Alex Morgan',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3'
    },
    {
      name: 'David Williams',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Customer Success',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3'
    }
  ];

  return (
    <div>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Mission
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              At WaveLoc, we're on a mission to revolutionize asset management through precision location technology. 
              We believe that real-time visibility into asset location and movement is fundamental to operational excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                WaveLoc was founded in 2018 by a team of engineers and logistics experts who recognized a critical gap in 
                asset tracking technology. Traditional GPS systems lacked the precision needed for complex indoor environments, 
                while existing indoor solutions were cumbersome and expensive.
              </p>
              <p className="text-lg text-gray-600">
                We set out to build something better – a unified tracking solution that works seamlessly across indoor and 
                outdoor environments with unprecedented accuracy. Today, our technology helps companies across industries 
                optimize operations, reduce costs, and make data-driven decisions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"
                alt="WaveLoc team" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5">
                  <SafeIcon icon={value.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Leadership
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Meet the team behind WaveLoc's innovation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default AboutPage;