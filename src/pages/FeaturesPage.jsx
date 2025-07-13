import React from 'react';
import { motion } from 'framer-motion';
import { FiMap, FiClock, FiAlertCircle, FiBarChart2, FiLock, FiSmartphone, FiGlobe, FiBluetooth, FiCloud, FiServer, FiDatabase, FiSettings } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTASection from '../components/CTASection';

const FeaturesPage = () => {
  const features = [
    {
      icon: FiMap,
      title: 'Centimeter-Level Precision',
      description: 'Track assets with industry-leading accuracy down to the centimeter level, both indoors and outdoors.',
      color: 'blue',
    },
    {
      icon: FiClock,
      title: 'Real-time Updates',
      description: 'Get instant location updates with minimal latency for true real-time visibility of all assets.',
      color: 'indigo',
    },
    {
      icon: FiAlertCircle,
      title: 'Smart Alerts',
      description: 'Set up customizable alerts for zone entry/exit, dwell time, movement patterns, and more.',
      color: 'red',
    },
    {
      icon: FiBarChart2,
      title: 'Advanced Analytics',
      description: 'Leverage powerful analytics to identify patterns, optimize workflows, and make data-driven decisions.',
      color: 'green',
    },
    {
      icon: FiLock,
      title: 'Enterprise Security',
      description: 'Rest easy with end-to-end encryption, role-based access controls, and SOC 2 compliance.',
      color: 'purple',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Access',
      description: 'Manage and monitor your assets on the go with our native iOS and Android applications.',
      color: 'yellow',
    },
    {
      icon: FiGlobe,
      title: 'Global Coverage',
      description: 'Deploy our solution anywhere in the world with consistent performance and reliability.',
      color: 'teal',
    },
    {
      icon: FiBluetooth,
      title: 'Multiple Sensor Types',
      description: 'Choose from various sensor options including BLE, UWB, GPS, and RFID depending on your needs.',
      color: 'cyan',
    },
    {
      icon: FiCloud,
      title: 'Cloud Platform',
      description: 'Access your data from anywhere with our secure, scalable cloud-based platform.',
      color: 'pink',
    },
    {
      icon: FiServer,
      title: 'API Integration',
      description: 'Integrate WaveLoc with your existing systems using our comprehensive REST API.',
      color: 'amber',
    },
    {
      icon: FiDatabase,
      title: 'Historical Data',
      description: 'Store and analyze historical location data to identify trends and optimize operations.',
      color: 'lime',
    },
    {
      icon: FiSettings,
      title: 'Custom Deployment',
      description: 'We offer flexible deployment options including cloud, on-premise, or hybrid solutions.',
      color: 'orange',
    },
  ];

  const getColorClass = (color) => {
    const colorMap = {
      blue: 'bg-blue-600',
      indigo: 'bg-indigo-600',
      red: 'bg-red-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      yellow: 'bg-yellow-600',
      teal: 'bg-teal-600',
      cyan: 'bg-cyan-600',
      pink: 'bg-pink-600',
      amber: 'bg-amber-600',
      lime: 'bg-lime-600',
      orange: 'bg-orange-600',
    };
    return colorMap[color] || 'bg-blue-600';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Powerful Features
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Discover the comprehensive feature set that makes WaveLoc the leading choice for asset tracking and location intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className={`h-12 w-12 rounded-md ${getColorClass(feature.color)} text-white flex items-center justify-center mb-5`}>
                  <SafeIcon icon={feature.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Feature Comparison
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              See how WaveLoc compares to traditional tracking solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">WaveLoc</th>
                    <th className="py-4 px-6 text-center">Traditional GPS</th>
                    <th className="py-4 px-6 text-center">RFID Systems</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    { feature: 'Indoor Tracking', waveloc: true, gps: false, rfid: true },
                    { feature: 'Outdoor Tracking', waveloc: true, gps: true, rfid: false },
                    { feature: 'Centimeter Accuracy', waveloc: true, gps: false, rfid: false },
                    { feature: 'Real-time Updates', waveloc: true, gps: true, rfid: false },
                    { feature: 'Battery Life (Months)', waveloc: true, gps: false, rfid: true },
                    { feature: 'No Infrastructure', waveloc: false, gps: true, rfid: false },
                    { feature: 'Analytics Platform', waveloc: true, gps: false, rfid: false },
                    { feature: 'API Integration', waveloc: true, gps: false, rfid: false },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        {typeof row.waveloc === 'boolean' ? (
                          row.waveloc ? (
                            <span className="text-green-600 text-xl">✓</span>
                          ) : (
                            <span className="text-red-600 text-xl">✗</span>
                          )
                        ) : (
                          row.waveloc
                        )}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        {typeof row.gps === 'boolean' ? (
                          row.gps ? (
                            <span className="text-green-600 text-xl">✓</span>
                          ) : (
                            <span className="text-red-600 text-xl">✗</span>
                          )
                        ) : (
                          row.gps
                        )}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        {typeof row.rfid === 'boolean' ? (
                          row.rfid ? (
                            <span className="text-green-600 text-xl">✓</span>
                          ) : (
                            <span className="text-red-600 text-xl">✗</span>
                          )
                        ) : (
                          row.rfid
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                WaveLoc combines multiple positioning technologies into a unified platform to deliver 
                unparalleled accuracy and reliability. Our proprietary algorithms process data from 
                various sensors to provide the most precise location information possible.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need to track assets in a warehouse, on a construction site, or across 
                a global supply chain, our technology adapts to your specific requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['UWB', 'BLE', 'GPS', 'RFID', 'Wi-Fi', 'Cellular'].map((tech, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="font-semibold text-blue-600">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="WaveLoc technology" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default FeaturesPage;