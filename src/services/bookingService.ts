import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export interface Booking {
  id: number;
  car_id: number;
  user_id: string;
  start_date: string;
  end_date: string;
  total_price: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  payment_status: 'pending' | 'paid' | 'refunded';
  created_at: string;
  updated_at: string;
  // Joined fields
  car?: {
    name: string;
    image_url: string;
    type: string;
  };
  user?: {
    full_name: string;
    email: string;
  };
}

export const bookingService = {
  // Fetch all bookings with car and user details
  getAllBookings: async (): Promise<Booking[]> => {
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        car:cars(name, image_url, type),
        user:users(full_name, email)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }

    return data || [];
  },

  // Fetch bookings for a specific user
  getUserBookings: async (userId: string): Promise<Booking[]> => {
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        car:cars(name, image_url, type),
        user:users(full_name, email)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching user bookings:', error);
      throw error;
    }

    return data || [];
  },

  // Create a new booking
  createBooking: async (booking: Omit<Booking, 'id' | 'created_at' | 'updated_at'>): Promise<Booking> => {
    const { data, error } = await supabase
      .from('bookings')
      .insert([booking])
      .select()
      .single();

    if (error) {
      console.error('Error creating booking:', error);
      throw error;
    }

    return data;
  },

  // Update booking status
  updateBookingStatus: async (id: number, status: Booking['status']): Promise<void> => {
    const { error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error('Error updating booking status:', error);
      throw error;
    }
  },

  // Update payment status
  updatePaymentStatus: async (id: number, payment_status: Booking['payment_status']): Promise<void> => {
    const { error } = await supabase
      .from('bookings')
      .update({ payment_status })
      .eq('id', id);

    if (error) {
      console.error('Error updating payment status:', error);
      throw error;
    }
  }
}; 