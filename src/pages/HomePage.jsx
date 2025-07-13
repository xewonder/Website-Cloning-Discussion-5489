import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import MapSection from '../components/MapSection';
import WifiHotspotSection from '../components/WifiHotspotSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <MapSection />
      <WifiHotspotSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;