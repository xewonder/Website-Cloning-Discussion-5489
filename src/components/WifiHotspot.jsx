import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiSettings, FiRefreshCw, FiLock, FiUnlock } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const WifiHotspot = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [hotspotName, setHotspotName] = useState('WaveLoc_Tracker');
  const [password, setPassword] = useState('');
  const [connectedDevices, setConnectedDevices] = useState([
    { id: 'WT001', name: 'Asset Tracker #1', status: 'Connected', battery: 85 },
    { id: 'WT002', name: 'Asset Tracker #2', status: 'Connected', battery: 92 },
  ]);

  const toggleHotspot = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${isEnabled ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                  <SafeIcon icon={FiWifi} className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold ml-3">WiFi Hotspot</h2>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleHotspot}
                className={`px-4 py-2 rounded-full font-medium ${
                  isEnabled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isEnabled ? 'Disable' : 'Enable'}
              </motion.button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Network Name (SSID)
                </label>
                <input
                  type="text"
                  value={hotspotName}
                  onChange={(e) => setHotspotName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  disabled={!isEnabled}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={!isEnabled}
                  />
                  <SafeIcon
                    icon={password ? FiLock : FiUnlock}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              {isEnabled && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">Connected Devices</h3>
                    <button
                      onClick={() => {}} 
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <SafeIcon icon={FiRefreshCw} className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {connectedDevices.map((device) => (
                      <div
                        key={device.id}
                        className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">{device.name}</h4>
                          <p className="text-sm text-gray-500">ID: {device.id}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-green-600 text-sm">{device.status}</span>
                          <p className="text-sm text-gray-500">{device.battery}% Battery</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start">
                      <SafeIcon icon={FiSettings} className="w-5 h-5 text-blue-600 mt-1" />
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-blue-900">Advanced Settings</h4>
                        <p className="text-sm text-blue-700">
                          Configure band, channel, and security settings for optimal performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WifiHotspot;