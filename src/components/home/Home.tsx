import React from 'react';
import Navbar from '../layout/Navbar';
import HeroSection from './HeroSection';
import FeaturedCars from './FeaturedCars';
import WhyChooseUs from './WhyChooseUs';
import LocationsMap from './LocationsMap';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCars />
        <WhyChooseUs />
        <HowItWorks />
        <LocationsMap />
        <Testimonials />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;