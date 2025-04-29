import React, { useState } from 'react';
import { Calendar, MapPin, Car, Clock, CalendarCheck, MapPinOff } from 'lucide-react';
import { FormSelect, FormInput } from '../common';

interface BookingFormProps {
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className }) => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');
  const [carType, setCarType] = useState('');

  const locationOptions = [
    { value: '', label: 'Select location' },
    { value: 'downtown', label: 'Downtown Office' },
    { value: 'airport', label: 'Airport Terminal' },
    { value: 'westside', label: 'Westside Branch' },
    { value: 'eastend', label: 'East End Location' }
  ];

  const carOptions = [
    { value: '', label: 'Select car type' },
    { value: 'economy', label: 'Economy' },
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'electric', label: 'Electric' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      pickupLocation,
      dropoffLocation,
      pickupDate,
      pickupTime,
      dropoffDate,
      dropoffTime,
      carType
    });
    // Here you would handle form submission, e.g. redirect to search results
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      <h3 className="text-2xl font-semibold mb-6 text-blue-950">Book Your Car</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pickup Location */}
          <FormSelect
            label="Pickup Location"
            options={locationOptions}
            value={pickupLocation}
            onChange={setPickupLocation}
            icon={<MapPin className="h-5 w-5 text-gray-400" />}
            required
          />
          
          {/* Drop-off Location */}
          <FormSelect
            label="Drop-off Location"
            options={locationOptions}
            value={dropoffLocation}
            onChange={setDropoffLocation}
            icon={<MapPinOff className="h-5 w-5 text-gray-400" />}
            required
          />
          
          {/* Pickup Date */}
          <FormInput
            type="date"
            label="Pickup Date"
            value={pickupDate}
            onChange={setPickupDate}
            icon={<Calendar className="h-5 w-5 text-gray-400" />}
            required
          />
          
          {/* Pickup Time */}
          <FormInput
            type="time"
            label="Pickup Time"
            value={pickupTime}
            onChange={setPickupTime}
            icon={<Clock className="h-5 w-5 text-gray-400" />}
            required
          />
          
          {/* Drop-off Date */}
          <FormInput
            type="date"
            label="Drop-off Date"
            value={dropoffDate}
            onChange={setDropoffDate}
            icon={<CalendarCheck className="h-5 w-5 text-gray-400" />}
            required
          />
          
          {/* Drop-off Time */}
          <FormInput
            type="time"
            label="Drop-off Time"
            value={dropoffTime}
            onChange={setDropoffTime}
            icon={<Clock className="h-5 w-5 text-gray-400" />}
            required
          />
          
          {/* Car Type */}
          <div className="md:col-span-2">
            <FormSelect
              label="Car Type"
              options={carOptions}
              value={carType}
              onChange={setCarType}
              icon={<Car className="h-5 w-5 text-gray-400" />}
              required
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            transition-colors duration-200"
        >
          Search Cars
        </button>
      </form>
    </div>
  );
};

export default BookingForm;