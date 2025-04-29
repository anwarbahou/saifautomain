import React, { useEffect, useState } from 'react';
import { carService, Car } from '../../services/carService';

const Cars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await carService.getAllCars();
        setCars(data);
      } catch (err) {
        setError('Failed to fetch cars');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleStatusChange = async (id: number, newStatus: 'available' | 'rented' | 'maintenance') => {
    try {
      await carService.updateCarStatus(id, newStatus);
      setCars(cars.map(car => 
        car.id === id ? { ...car, status: newStatus } : car
      ));
    } catch (err) {
      console.error('Failed to update car status:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Cars Management</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">All Cars</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add New Car
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Car</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price/Day</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cars.map((car) => (
                <tr key={car.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={car.image_url} alt={car.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{car.name}</div>
                        <div className="text-sm text-gray-500">{car.year}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{car.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${car.price_per_day}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      car.status === 'available' ? 'bg-green-100 text-green-800' :
                      car.status === 'rented' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {car.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      onClick={() => handleStatusChange(car.id, 'available')}
                    >
                      Available
                    </button>
                    <button 
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      onClick={() => handleStatusChange(car.id, 'rented')}
                    >
                      Rented
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleStatusChange(car.id, 'maintenance')}
                    >
                      Maintenance
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cars; 