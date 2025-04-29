import React from 'react';
import { benefits } from '../../data/benefits';
import { HeadphonesIcon, MapPin, Tag, Car as Cars } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeadphonesIcon':
        return <HeadphonesIcon size={40} className="text-blue-950" />;
      case 'MapPinIcon':
        return <MapPin size={40} className="text-blue-950" />;
      case 'TagIcon':
        return <Tag size={40} className="text-blue-950" />;
      case 'CarsIcon':
        return <Cars size={40} className="text-blue-950" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Why Choose Saifauto?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-silver-100 rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 shadow-sm">
                {renderIcon(benefit.icon)}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-950">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-950 rounded-xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience the Saifauto difference?</h3>
              <p className="text-blue-100 mb-6">
                Join thousands of satisfied customers who trust us for their car rental needs. Quality vehicles, exceptional service, and unbeatable prices await you.
              </p>
              <a href="#booking" className="btn bg-white text-blue-950 hover:bg-gray-100 px-6 py-3">
                Book Your Car Now
              </a>
            </div>
            
            <div className="hidden md:block">
              <div className="bg-blue-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">4.9</span>
                  </div>
                  <div>
                    <div className="flex space-x-1 text-yellow-400 mb-1">
                      {'★★★★★'.split('').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <p className="text-blue-100 text-sm">Based on 2,000+ reviews</p>
                  </div>
                </div>
                <p className="italic text-blue-100 border-l-4 border-blue-700 pl-4">
                  "The best car rental experience I've ever had. The cars are immaculate and the customer service is unparalleled."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;