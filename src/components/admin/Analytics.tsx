import React, { useState, useEffect } from 'react';
import { bookingService } from '../../services/bookingService';
import { carService } from '../../services/carService';

const Analytics: React.FC = () => {
  const [totalBookings, setTotalBookings] = useState(0);
  const [activeCars, setActiveCars] = useState(0);
  const [totalCars, setTotalCars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [bookings, cars] = await Promise.all([
          bookingService.getAllBookings(),
          carService.getAllCars()
        ]);
        
        setTotalBookings(bookings.length);
        setActiveCars(cars.filter(car => car.status === 'available').length);
        setTotalCars(cars.length);
      } catch (err) {
        setError('Failed to load analytics data');
        console.error('Error fetching analytics data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading analytics data...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-blue-600">$24,500</p>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Bookings</h3>
          <p className="text-3xl font-bold text-blue-600">{totalBookings}</p>
          <p className="text-sm text-green-600 mt-2">+8% from last month</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Active Cars</h3>
          <p className="text-3xl font-bold text-blue-600">{activeCars}</p>
          <p className="text-sm text-gray-600 mt-2">Out of {totalCars} total</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Customer Satisfaction</h3>
          <p className="text-3xl font-bold text-blue-600">4.8/5</p>
          <p className="text-sm text-green-600 mt-2">+0.2 from last month</p>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Revenue Chart Placeholder</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Booking Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Bookings Chart Placeholder</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Popular Cars</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Popular Cars Chart Placeholder</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Customer Demographics</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Demographics Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 