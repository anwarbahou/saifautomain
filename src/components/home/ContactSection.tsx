import React from 'react';
import ContactForm from './ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-silver-100">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-950">We're Here to Help</h3>
            <p className="text-gray-600 mb-8">
              Have questions about our services or need assistance with your booking? Our dedicated support team is ready to help you every step of the way.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-950 text-white p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone Support</h4>
                  <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-950 text-white p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email Us</h4>
                  <p className="text-gray-600 mt-1">info@saifauto.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-950 text-white p-3 rounded-full">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Business Hours</h4>
                  <p className="text-gray-600 mt-1">Mon-Fri: 8:00 AM - 9:00 PM</p>
                  <p className="text-gray-600">Weekends: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-blue-950 text-white rounded-xl">
              <h4 className="font-medium mb-3">Emergency Roadside Assistance</h4>
              <p className="text-blue-100 mb-4">
                24/7 support for all customers with active rentals.
              </p>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="font-bold">+1 (555) 911-HELP</span>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;