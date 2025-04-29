import React, { useState } from 'react';
import { Calendar, MapPin, Car, ChevronDown } from 'lucide-react';

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
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-semibold mb-4 text-blue-950">Book Your Car</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Pickup Location */}
          <div className="relative">
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select 
                id="pickupLocation"
                className="input-field pl-10"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
              >
                <option value="">Select location</option>
                <option value="downtown">Downtown Office</option>
                <option value="airport">Airport Terminal</option>
                <option value="westside">Westside Branch</option>
                <option value="eastend">East End Location</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          
          {/* Drop-off Location */}
          <div className="relative">
            <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700 mb-1">
              Drop-off Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select 
                id="dropoffLocation"
                className="input-field pl-10"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                required
              >
                <option value="">Select location</option>
                <option value="downtown">Downtown Office</option>
                <option value="airport">Airport Terminal</option>
                <option value="westside">Westside Branch</option>
                <option value="eastend">East End Location</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          
          {/* Pickup Date */}
          <div>
            <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="date"
                id="pickupDate"
                className="input-field pl-10"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                required
              />
            </div>
          </div>
          
          {/* Pickup Time */}
          <div>
            <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Time
            </label>
            <input 
              type="time"
              id="pickupTime"
              className="input-field"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              required
            />
          </div>
          
          {/* Drop-off Date */}
          <div>
            <label htmlFor="dropoffDate" className="block text-sm font-medium text-gray-700 mb-1">
              Drop-off Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="date"
                id="dropoffDate"
                className="input-field pl-10"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                required
              />
            </div>
          </div>
          
          {/* Drop-off Time */}
          <div>
            <label htmlFor="dropoffTime" className="block text-sm font-medium text-gray-700 mb-1">
              Drop-off Time
            </label>
            <input 
              type="time"
              id="dropoffTime"
              className="input-field"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
              required
            />
          </div>
          
          {/* Car Type */}
          <div className="md:col-span-2">
            <label htmlFor="carType" className="block text-sm font-medium text-gray-700 mb-1">
              Car Type
            </label>
            <div className="relative">
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select 
                id="carType"
                className="input-field pl-10"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                required
              >
                <option value="">Select car type</option>
                <option value="economy">Economy</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury</option>
                <option value="electric">Electric</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary w-full py-3 text-base font-semibold">
          Search Cars
        </button>
      </form>
    </div>
  );
};

export default BookingForm;