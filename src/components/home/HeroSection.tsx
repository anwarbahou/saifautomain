import React from 'react';
import BookingForm from './BookingForm';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="booking" 
      className="relative h-[70vh] pt-20 flex items-center bg-gradient-to-br from-blue-950/90 to-blue-800/90"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container relative z-10 py-12 lg:py-20">
        <div className="items-center">

          <div className="animate-slide-up">
            <BookingForm className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;