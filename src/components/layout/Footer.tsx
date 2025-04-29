import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car size={24} />
              <span className="text-xl font-bold">Saifauto</span>
            </div>
            <p className="text-blue-200 mb-6">
              Premium car rental service offering a wide range of vehicles for all your travel needs. Drive your journey with comfort and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#cars" className="text-blue-200 hover:text-white transition-colors">Our Fleet</a>
              </li>
              <li>
                <a href="#locations" className="text-blue-200 hover:text-white transition-colors">Locations</a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-200 mt-1 flex-shrink-0" />
                <span className="text-blue-200">
                  123 Main Street, City Center, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-200 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-blue-200 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-200 flex-shrink-0" />
                <a href="mailto:info@saifauto.com" className="text-blue-200 hover:text-white transition-colors">
                  info@saifauto.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Working Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-blue-200">Monday - Friday:</span>
                <span className="text-white">8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-blue-200">Saturday:</span>
                <span className="text-white">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-blue-200">Sunday:</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
              <li className="mt-4 pt-4 border-t border-blue-900">
                <span className="text-blue-200">
                  24/7 Support Available for Existing Reservations
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="border-t border-blue-900 pt-8 pb-6">
          <div className="flex flex-wrap justify-center space-x-4">
            <span className="text-blue-200 mb-4">We Accept:</span>
            <div className="flex space-x-4">
              <div className="bg-white rounded-md px-2 py-1 h-8">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" 
                  alt="Visa" 
                  className="h-full object-contain"
                />
              </div>
              <div className="bg-white rounded-md px-2 py-1 h-8">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
                  alt="Mastercard" 
                  className="h-full object-contain"
                />
              </div>
              <div className="bg-white rounded-md px-2 py-1 h-8">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" 
                  alt="PayPal" 
                  className="h-full object-contain"
                />
              </div>
              <div className="bg-white rounded-md px-2 py-1 h-8">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" 
                  alt="American Express" 
                  className="h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-blue-900 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © {year} Saifauto. All rights reserved. | "Drive Your Journey"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;