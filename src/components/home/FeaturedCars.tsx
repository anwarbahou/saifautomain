import React, { useState } from 'react';
import { featuredCars } from '../../data/cars';
import CarCard from './CarCard';
import { Button } from '../common';
import { Car } from '../../types';

const carTypes = ['All', 'Sedan', 'SUV', 'Luxury', 'Electric', 'Truck', 'Sports'];

const FeaturedCars: React.FC = () => {
  const [activeType, setActiveType] = useState('All');
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  
  const filteredCars = activeType === 'All' 
    ? featuredCars 
    : featuredCars.filter(car => car.type === activeType);

  return (
    <section id="cars" className="section-padding bg-silver-100">
      <div className="container">
        <h2 className="section-title">Featured Cars</h2>
        
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex space-x-2 md:space-x-4">
            {carTypes.map(type => (
              <Button
                key={type}
                variant={activeType === type ? 'primary' : 'filter'}
                size="sm"
                onClick={() => setActiveType(type)}
                onMouseEnter={() => setHoveredType(type)}
                onMouseLeave={() => setHoveredType(null)}
                className={hoveredType === type && activeType !== type ? 'bg-gray-100' : ''}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        {filteredCars.length === 0 && (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">No cars available in this category.</p>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button 
            variant="primary"
            size="lg"
            as="a"
            href="#"
          >
            View All Cars
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;