import React from 'react';
import BookingForm from './BookingForm';
import { Button } from '../common';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="booking" 
      className="relative min-h-screen pt-20 flex items-center bg-gradient-to-br from-blue-950/90 to-blue-800/90"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container relative z-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Rent a Car in Seconds with Saifauto
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-lg">
              Affordable, flexible, and available 24/7. Experience the freedom of the road with our premium vehicle selection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                as="a"
                href="#cars"
                variant="primary"
                size="lg"
              >
                View Our Fleet
              </Button>
              <Button
                as="a"
                href="#how-it-works"
                variant="white"
                size="lg"
              >
                How It Works
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <BookingForm className="lg:ml-auto lg:max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;