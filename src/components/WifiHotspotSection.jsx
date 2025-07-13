import React from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiShield, FiZap, FiGlobe, FiUsers, FiSettings } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const WifiHotspotSection = () => {
  const features = [
    {
      icon: FiWifi,
      title: 'Enterprise-Grade WiFi',
      description: 'High-performance WiFi 6 technology with up to 1.2 Gbps throughput for demanding industrial environments.'
    },
    {
      icon: FiShield,
      title: 'Advanced Security',
      description: 'WPA3 encryption, VPN support, and enterprise authentication protocols to keep your network secure.'
    },
    {
      icon: FiZap,
      title: 'PoE+ Powered',
      description: 'Power over Ethernet Plus support eliminates the need for separate power connections in most installations.'
    },
    {
      icon: FiGlobe,
      title: 'Mesh Networking',
      description: 'Seamless mesh capabilities allow multiple units to create a unified network across large facilities.'
    },
    {
      icon: FiUsers,
      title: 'Multi-User Support',
      description: 'Support for up to 250 concurrent connections with intelligent load balancing and QoS management.'
    },
    {
      icon: FiSettings,
      title: 'Remote Management',
      description: 'Cloud-based management platform for configuration, monitoring, and troubleshooting from anywhere.'
    }
  ];

  const specifications = [
    { label: 'Wireless Standard', value: 'IEEE 802.11ax (WiFi 6)' },
    { label: 'Frequency Bands', value: '2.4 GHz & 5 GHz simultaneous' },
    { label: 'Maximum Throughput', value: 'Up to 1.2 Gbps' },
    { label: 'Coverage Range', value: 'Up to 500m outdoor, 150m indoor' },
    { label: 'Operating Temperature', value: '-40°C to +70°C' },
    { label: 'IP Rating', value: 'IP67 (weatherproof)' },
    { label: 'Power Consumption', value: '25W (PoE+)' },
    { label: 'Antenna Configuration', value: '4x4 MIMO' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              WaveLoc WiFi Hotspot Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy robust, enterprise-grade WiFi infrastructure designed specifically for asset tracking 
              and industrial IoT applications. Our hotspot solutions provide the reliable connectivity 
              your tracking devices need.
            </p>
          </motion.div>
        </div>

        {/* Product Image and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="WaveLoc WiFi Hotspot Device"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -top-4 -right-4 h-20 w-20 bg-blue-600/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Industrial WiFi Hotspot WH-6000
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Purpose-built for harsh industrial environments, the WH-6000 delivers reliable WiFi 6 
              connectivity for your asset tracking infrastructure. Designed to withstand extreme 
              temperatures, moisture, and vibration while maintaining consistent performance.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700">Ruggedized IP67 enclosure for outdoor use</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700">Integrated with WaveLoc tracking platform</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700">Zero-touch provisioning and configuration</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700">5-year warranty with 24/7 support</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Key Features & Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-12 w-12 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4">
                  <SafeIcon icon={feature.icon} className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {specifications.map((spec, index) => (
                  <div key={index} className="px-6 py-4 flex justify-between">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Deployment Options</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Standalone Deployment</h4>
                <p className="text-gray-600 mb-4">
                  Perfect for smaller facilities or specific areas requiring dedicated WiFi coverage 
                  for tracking devices.
                </p>
                <div className="text-blue-600 font-medium">Starting at $2,499</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Mesh Network</h4>
                <p className="text-gray-600 mb-4">
                  Scale across large facilities with seamless roaming and centralized management 
                  for comprehensive coverage.
                </p>
                <div className="text-blue-600 font-medium">Custom pricing available</div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Integrated Solution</h4>
                <p className="text-blue-800 mb-4">
                  Complete package including hotspots, tracking devices, and software platform 
                  with professional installation.
                </p>
                <div className="text-blue-600 font-medium">Contact for quote</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Deploy WiFi Hotspots?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of network specialists will help you design the optimal WiFi infrastructure 
            for your asset tracking needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300">
              Request Quote
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 py-3 px-8 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300">
              Download Datasheet
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WifiHotspotSection;