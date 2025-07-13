import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', path: '/features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
        { name: 'Press', path: '/press' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Support', path: '/support' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Privacy', path: '/privacy' },
        { name: 'Terms', path: '/terms' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FiTwitter, path: 'https://twitter.com' },
    { icon: FiLinkedin, path: 'https://linkedin.com' },
    { icon: FiFacebook, path: 'https://facebook.com' },
    { icon: FiInstagram, path: 'https://instagram.com' },
  ];
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              WaveLoc helps businesses track and manage their assets in real-time with precision location tracking technology.
            </p>
            <div className="flex mt-6 space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">
            &copy; {currentYear} WaveLoc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-white mx-3 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white mx-3 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;