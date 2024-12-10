import React from 'react';
import { Mail, Phone, MapPin, Globe, Shield, CreditCard, HelpCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:contact@domain.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                contact@domain.com
              </a>
              <a href="tel:+1234567890" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                123 Domain Street, Web City
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#description" className="hover:text-white transition-colors">About Domain</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                Domain Transfer
              </li>
              <li>
                <a href="https://www.escrow.com" className="flex items-center hover:text-white transition-colors">
                  <Shield className="w-4 h-4 mr-2" />
                  Escrow Service
                </a>
              </li>
              <li className="flex items-center">
                <CreditCard className="w-4 h-4 mr-2" />
                Secure Payment
              </li>
              <li className="flex items-center">
                <HelpCircle className="w-4 h-4 mr-2" />
                24/7 Support
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to receive updates about premium domains.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p>&copy; {currentYear} Domain Lander - All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}