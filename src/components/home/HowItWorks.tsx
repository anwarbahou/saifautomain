import React from 'react';
import { CheckSquare, CalendarCheck, Car } from 'lucide-react';
import { Button } from '../common';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose Your Car',
      description: 'Browse our diverse fleet and select the perfect vehicle for your needs.',
      icon: <CheckSquare size={32} className="text-blue-950" />,
    },
    {
      id: 2,
      title: 'Book Instantly',
      description: 'Complete your reservation in seconds with our easy booking process.',
      icon: <CalendarCheck size={32} className="text-blue-950" />,
    },
    {
      id: 3,
      title: 'Enjoy Your Drive',
      description: 'Pick up your vehicle and hit the road with confidence.',
      icon: <Car size={32} className="text-blue-950" />,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-silver-100">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-950 text-white flex items-center justify-center text-xl font-bold z-10">
                {step.id}
              </div>
              
              {/* Step Card */}
              <div className="bg-white rounded-xl p-6 pt-12 shadow-card h-full transition-transform duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-silver-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center text-blue-950">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              
              {/* Connector Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-silver-300 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-950"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the simplicity of renting with Saifauto. Our streamlined process ensures you spend less time on paperwork and more time enjoying the journey.
          </p>
          
          <Button
            as="a"
            href="#booking"
            variant="primary"
            size="lg"
          >
            Start Your Booking
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;