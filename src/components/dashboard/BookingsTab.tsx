import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Booking, bookingService } from '../../services/bookingService';
import { Button } from '../common';

const BookingsTab: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const data = await bookingService.getAllBookings();
        setBookings(data);
      } catch (err) {
        setError('Failed to load bookings. Please try again later.');
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleStatusChange = async (id: number, newStatus: Booking['status']) => {
    try {
      await bookingService.updateBookingStatus(id, newStatus);
      setBookings(bookings.map(booking => 
        booking.id === id ? { ...booking, status: newStatus } : booking
      ));
    } catch (err) {
      console.error('Error updating booking status:', err);
    }
  };

  const handlePaymentStatusChange = async (id: number, newStatus: Booking['payment_status']) => {
    try {
      await bookingService.updatePaymentStatus(id, newStatus);
      setBookings(bookings.map(booking => 
        booking.id === id ? { ...booking, payment_status: newStatus } : booking
      ));
    } catch (err) {
      console.error('Error updating payment status:', err);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading bookings...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Car</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img 
                      className="h-10 w-10 rounded-full object-cover" 
                      src={booking.car?.image_url} 
                      alt={booking.car?.name} 
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{booking.car?.name}</div>
                    <div className="text-sm text-gray-500">{booking.car?.type}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{booking.user?.full_name}</div>
                <div className="text-sm text-gray-500">{booking.user?.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {format(new Date(booking.start_date), 'MMM d, yyyy')}
                </div>
                <div className="text-sm text-gray-500">
                  to {format(new Date(booking.end_date), 'MMM d, yyyy')}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${booking.total_price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                    booking.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'}`}>
                  {booking.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${booking.payment_status === 'paid' ? 'bg-green-100 text-green-800' : 
                    booking.payment_status === 'refunded' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'}`}>
                  {booking.payment_status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  {booking.status === 'pending' && (
                    <>
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => handleStatusChange(booking.id, 'confirmed')}
                      >
                        Confirm
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => handleStatusChange(booking.id, 'cancelled')}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                  {booking.payment_status === 'pending' && booking.status === 'confirmed' && (
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => handlePaymentStatusChange(booking.id, 'paid')}
                    >
                      Mark Paid
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTab; 