import React from 'react';
import { Users, Sliders, Fuel, Car as CarIcon } from 'lucide-react';
import { Car } from '../../types';
import { Button } from '../common';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-blue-950 text-white text-sm font-semibold py-1 px-3 rounded-full">
          ${car.pricePerDay}/day
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
            <p className="text-sm text-gray-500">{car.type}</p>
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded-md ${car.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {car.available ? 'Available' : 'Booked'}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Sliders size={16} className="mr-2" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Fuel size={16} className="mr-2" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <CarIcon size={16} className="mr-2" />
            <span>{car.type}</span>
          </div>
        </div>
        
        <Button variant="primary" fullWidth>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default CarCard;